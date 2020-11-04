
let map;
 const endpoint = 'https://gist.githubusercontent.com/rconnolly/a0ad7768d65b6fa46f4e007a1cf27193/raw/38696e5b84cd6b66667a6b87c66c058ab2606ba2/galleries.json';
    document.querySelector("div.b section").style.display = "block";
let long= 41;
let lat = 12;
function initMap() {
                map = new google.maps.Map(document.querySelector('.d'), {
                    center: {lat: lat, lng: long},
                    mapTypeId: 'satellite',
                    zoom: 18});
            }
function createMarker(map, latitude, longitude, city) {
 let imageLatLong = {lat: latitude, lng: longitude};
 let marker = new google.maps.Marker({
 position: imageLatLong,
 title: city,
 map: map
 });
    } 
document.addEventListener("DOMContentLoaded", function() {
    const endPoint= fetch(endpoint).then((resp)=> resp.json()).then(data => {pop(data)}).catch(error => console.error(error));
    function pop(data){
    let liAdded = data.map(function(gallery){
        return gallery.nameEn;
    });
    for( let li of liAdded){
        let list= document.querySelector('ul#galleryList ');
         let listI=document.createElement("li");
            listI.innerHTML =`${li}`;
        listI.addEventListener('click',function(e){
             //display for each garlley
           let A= document.querySelector('div.a section');
           A.style.display = "inline-block";
           let GalleryObj =data.find(f);
           function f (search){
               return search.nameEn === `${e.target.innerHTML}`;
           }
            //display B
           
            document.querySelector('#galleryName').innerHTML = `${GalleryObj.nameEn}<br>`; 
            document.querySelector('#galleryNative').innerHTML = `${GalleryObj.nameNative}`; document.querySelector('#galleryCity').innerHTML = `${GalleryObj.location.city}`; 
            document.querySelector('#galleryAddress').innerHTML = `${GalleryObj.location.address}`; document.querySelector('#galleryCountry').innerHTML = `${GalleryObj.location.country}`; document.querySelector('#galleryHome').innerHTML = `${GalleryObj.link}`;
            document.querySelector('#galleryHome').href = `${GalleryObj.link}`;
             long = GalleryObj.location.longitude;
            lat = GalleryObj.location.latitude;
            initMap();
            //display C
            let C =document.querySelector('div.c section');
            C.style.display = "block";
            let cP =  document.querySelector('#paintingList');
            cP.innerHTML ="";
            let paintings = GalleryObj.paintings;
           for(let painting of paintings){
               let p = document.createElement('li');
               p.innerHTML= `${painting.title}`;
               cP.appendChild(p);
                }
            
        //display D
            
 createMarker(map,GalleryObj.location.latitude,GalleryObj.location.longitude,GalleryObj.nameEn);
        });
        list.appendChild(listI);
        };
    }
    
})

