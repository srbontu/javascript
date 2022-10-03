let firstName ="sri";
let  lastName = "bontu"
let  country ="USA"
let city="Herndon"
let   age=30
let isMarried= true;
let year=2022
 console.log(typeof firstName)
 console.log(typeof lastName)
 console.log(typeof country)
 console.log(typeof city)
 console.log( typeof age)
 console.log( typeof isMarried)
 console.log(typeof year)
 console.log(typeof '10'=== typeof 10)
 console.log(parseInt (9.8)=== 10)
 console.log(parseInt (9.8))

 let snake="python";
 console.log(snake.length);
 let snake1="jargon";
 console.log(snake1.length);

 console.log(snake.length!==snake1.length)

 //prompt("Enter your age:")
import {months} from "./impObj.js"
 let a =5
 let b=4
 if(a>b){
    console.log(a)
 }else{
    console.log(b)
 }

 let marks=75
//  80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

if(marks>=80&&marks<=100){
    console.log("A")
}else if(marks>=70&&marks<=89){
    console.log("B")
}else if(marks>=60&&marks<=69){
  console.log("C")  
}else if(marks>=50&&marks<=59){
    console.log("D")
}else if(marks>=0&&marks<=49){
    console.log("f")
}else{
    console.log("default")
}