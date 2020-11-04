

document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';

document.querySelector("#countries").innerHTML="";
  
   // first hide loaders and main element 
 let loaders = document.querySelectorAll(".lds-ring");
    for (let loader of loaders){
    loader.style.display = "none";
    } 
    let main = document.querySelector("main");
    main.style.display = "none";
   // then handle button click 
let handleButton = document.querySelector("#fetchButton");
    
handleButton.addEventListener("click",function(){
        main.style.display = "block";  
          /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
    */let countrys = document.querySelector("#countries");
    let C = fetch(countryAPI).then((resp)=> resp.json()).then(data => {populate(data)}).catch(error => console.error(error));
        function populate(countries){
        for(let option of countries){
         let cOption= document.createElement('option');
            cOption.innerHTML= `${option.name}`;
            cOption.value= `${option.iso}`;
            countrys.appendChild(cOption);
            }
        }
        countrys.addEventListener('change',(e)=>{
            let ph = fetch(photoAPI).then((resp1)=> resp1.json()).then(data1 => {f(data1)}).catch(error => console.error(error));
            function f(photos){
                document.querySelector('#results').innerHTML="";
            let images =photos.filter(filtered);
                for (let img of images){
                       let i = document.createElement('img')
                       i.src = `${imageURL}${img.filename}`;
                       console.log(i);
                       document.querySelector('#results').appendChild(i);
                   }
                };
            function filtered(photo){return photo.location.iso === e.target.value};
           });
           
        
          
    });
    
   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */
      


}); 