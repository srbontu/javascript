// let c=4;
// let d=10;
// //traditional function
// function name1(a,b){
//   return a+b;
// }
// console.log(name1(4,8));

// function name2(){
//     return c*d;
// }
// console.log(name2());

// //arrow function
// // const number1= 20;
// // const number2=30;

// const number10=(firstname,lastname)=>{
//        return `${firstname} ${lastname}`
// }
// console.log(number10("sri","bontu"))


// const number13=(grade,age)=> `${grade} ${age}`
// console.log(number13(4,20))

function firstfun(){
    let links=["h4","h5","h6","h7"];
 for(let i=0; i<links.length; i++){
    if(links[i]==="h6"){
       return links[i]
        
    }
}
} 

console.log(firstfun())

//nd project
function firstfun1(){
    let links=["h1","h2","h3","h9"];
 for(let i=0; i<links.length; i++){
    if(links[i]==="h1"){
       // console.log(links[i])
       return links[i]
        
    }
}
} 
console.log(firstfun1())


const arfun=()=>{
    let links1=["h1","h2","h3","h9"];
 for(let i=0; i<links1.length; i++){
    if(links1[i]==="h1"){
     return  links1[i]
      
    }
}
}
console.log(arfun())

const fun2=() => 2+3;

console.log(fun2());


const parm1=(firstname,lastname)=>{

   return `${firstname} ${lastname}`

}

console.log(parm1("sri","bontu"))


