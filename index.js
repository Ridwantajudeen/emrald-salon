






let myIndex = 0;

carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds

}
let myIndex1 = 0;

carousel1();

function carousel1() {
  let p;
  let y = document.getElementsByClassName("mySlides1");
  for (p = 0; p < y.length; p++) {
    y[p].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > y.length) {myIndex1 = 1}    
  y[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 5000); // Change image every 5 seconds

}
let myIndex2 = 0;




