const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];
alert("123" +123);
 // your solutions here
stocks.forEach(function(stock){
    console.log(stock.price*stock.units);
    });
function checkSymbol(stock){
    return stock.symbol === "Ca";
};
console.log(stocks.find(checkSymbol));
function checkPrice(stock){
    return stock.price <= 20;
};
const newArray =[];
newArray.push(stocks.filter(checkPrice));
console.log(newArray);
let listMap = stocks.map(function(stock){
   return `<li>${stock.name}</li>`; 
});
console.log(listMap);
function compareSymbol(a,b){
    if(a.symbol>b.symbol){
        return 1;
    }
    if(a.symbol<b.symbol){
        return -1;
    }
    return 0;
};
stocks.sort(compareSymbol);
console.log(stocks);