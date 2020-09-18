document.addEventListener("DOMContentLoaded", function(event) {
console.log(`Hello World`);


 let counter = document.getElementById('counter').innerHTML
 let counter = 0;

 const timer = setInterval(function(){
   counter += 1;
   if (counter === 20) {
     clearInterval(timer);
   }
 }, 1000);
});
