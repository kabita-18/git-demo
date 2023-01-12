
// 1. Ways to print in JavaScript
// console.log("Hello world");
// alert("me");
// document.write("this is document write");
// console.log("this is first paragraph")

// 2. JavaScript console API
// console.log("hello, This is kabita", 4 + 6, "Analog log");
// console.warn("this is warning")
// console.error("this is error")

// 3. JavaScript Variables
//  Variables-Containers to stores data values.

var number1 = 34;
var number2 = 45;
// console.log(number1 + number2);

var und;
// console.log(und);

var n = null;
// console.log(n);

// 4. Data types in JavaScript
// there are two types of data types
// 1. primitive data types: undefined,null,number, String, boolean, Symbol
// 2. Reference data types: Arrays and Object

var arr = [1, 2, "kabiat", 4, 5]
// console.log(arr)

// Operators in JavaScript
// 1. Arithmetic operator
var a = 3;
var b = 4;
// console.log("the value of a+b is ", a+b);

// Assignment operators
var c = b;
c += 6;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 48;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

// Logical Operator
// Logical and
// console.log(true && true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)

// Logical not
// console.log(!true)
// console.log(!false)

// Function

function avg(a, b) {
    return (a + b) / 2;
}
// DRY = Don not repeat yourself
c1 = (23, 45);
c2 = (45, 67);
// console.log(c1,c2)

// Conditional in javascript
/*var age = 8;
// if(age>18){
//     console.log("you can not drink alcohol");
// }
// else{
//     console.log("You can not drink")
// }

// else if ladder
age = 45;
if(age>32){
    console.log("you are above 30+")

}
else if(age>26){
    console.log("Yes you are young")

}
else if(age>22){
    console.log(" you are young")

}
else if(age>18){
    console.log("Yes you are under age")

}
else{
    console.log("End of ladder")
}*/

// Loop
var arr = [1, 2, 3, 4, 5, 6.7, 8];
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 3) {
        //  break;
        continue; //continue means cancle if ittration and continue after that itteration
    }
    //  console.log(arr[i])
}

//arr.forEach(function(element){
//     console.log(element)
//  })

// let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);

let myarr = ['camera', 'fan', 'bulb', 'number'];
// Array Method

// console.log(myarr.length);

//  myarr.pop()
//  console.log(myarr);

//  myarr.push("kabita");

// myarr.shift(); //shift functionis used to remove 1st element of Array
// myarr.unshift("ayush")

const newLen = myarr.unshift("Ayush") //this type of statement using unshift function states the the no. of elements in array.
// console.log(newLen);
//  console.log(myarr);

// JavaScript Date
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMin());



