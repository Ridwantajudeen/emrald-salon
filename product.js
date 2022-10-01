let num = document.getElementById("num")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let descPrice = document.getElementById("desc-price")
let order = document.getElementById("order-btn")
let number = 0
num.textContent= number
let priceonee = 1000
let priceone =1000

minus.addEventListener("click", function(){
  
  number -= 1
  if (number <= 1) {
    number = 0;
    priceone = 1000
    
 
}
  priceone = priceone - priceonee 
   num.textContent = number
   descPrice.textContent= ("N"+priceone)
})
plus.addEventListener("click", function(){
  number += 1
  priceone = priceone + priceonee
   num.textContent = number
   descPrice.textContent= ("N"+priceone)
})

order.addEventListener("click", function(){
  alert("Product not Available")
})