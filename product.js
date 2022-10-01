let num = document.getElementById("num")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let descPrice = document.getElementById("desc-price")
let order = document.getElementById("order-btn")
let number = 1
num.textContent= number
let priceonee = 1000
let priceone =1000
let num1 = document.getElementById("num1")
let plus1 = document.getElementById("plus1")
let minus1 = document.getElementById("minus1")
let descPrice1 = document.getElementById("desc-price1")
let order1 = document.getElementById("order-btn1")
let number1 = 1
num1.textContent= number1
let priceonee1 = 1500
let priceone1 =1500


let num2 = document.getElementById("num2")
let plus2 = document.getElementById("plus2")
let minus2 = document.getElementById("minus2")
let descPrice2 = document.getElementById("desc-price2")
let order2 = document.getElementById("order-btn2")
let number2 = 1
num2.textContent= number2
let priceonee2 = 2000
let priceone2 = 000

minus.addEventListener("click", function(){
  
  number -= 1
  if (number < 1) {
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



minus1.addEventListener("click", function(){
  
  number1 -= 1
  if (number1 < 1) {
    number1 = 0;
    priceone1 = 1500
    
 
}
  priceone1 = priceone1 - priceonee1
   num1.textContent = number1
   descPrice1.textContent= ("N"+priceone1)
})
plus1.addEventListener("click", function(){

  number1 += 1
  priceone1 = priceone1 + priceonee1
   num1.textContent = number1
   descPrice1.textContent= ("N"+priceone1)
})

order1.addEventListener("click", function(){
  alert("Product not Available")
})





minus2.addEventListener("click", function(){
  
  number2 -= 1
  if (number2 < 1) {
    number2 = 0;
    priceone2 = 2000
    
 
}
  priceone2 = priceone2 - priceonee2
   num2.textContent = number2
   descPrice2.textContent= ("N"+priceone2)
})
plus2.addEventListener("click", function(){
 
  number2 += 1
  priceone2 = priceone2 + priceonee2
   num2.textContent = number2
   descPrice2.textContent= ("N"+priceone2)
})

order2.addEventListener("click", function(){
  alert("Product not Available")
})