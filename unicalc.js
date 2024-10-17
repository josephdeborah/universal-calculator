//universal calculator
let num1 = prompt("please enter your first number")
let operation = prompt("Please enter the kind of calculation you are would like to do in words")
let num2 = prompt ("Enter the second number")
    
function calculation(){
     if( operation === "multiplication"){
        alert( Number(num1)*Number(num2))
     }else if( operation === "division"){
      alert( Number(num1)/Number(num2))
   }else if( operation ==="addition"){
      alert( Number(num1)+Number(num2))
   }else if( operation === "subtraction"){
      alert( Number(num1)-Number(num2))
   }else if( operation === "exponentiation"){
      alert( Number(num1)**Number(num2))
   }else{
      alert("start your kind of calculation in small letter")
   }

}
calculation()