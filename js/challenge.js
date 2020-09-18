document.addEventListener("DOMContentLoaded", function(event) {
console.log(`Hello World`);


 let counter = document.getElementById('counter').value
 let counter = 0; 

 const timer = setInterval(() => {
   counter += 1;
   if (counter === 20) {
     clearInterval(timer)
   }
 }




});
