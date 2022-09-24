let obj10={
    name: "sri",

}
 
let obj12={
    name: "sudha",
    age:20
}

let obj13={
    age: 15,
    
}
 
if (obj10.name==="sri"){
    console.log("pass")
}
if(obj10.name!==obj12.name){
    console.log("this is correct")
}else if(obj12.age>obj13.age){
    console.log("this is a test")
}
else{
    console.log("failed")
}