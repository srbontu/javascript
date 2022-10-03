let  grade1={
    name: "bahrat",
    id:001,
    group: "science"
} 

let  grade2={
    name: "vamsi",
    id:001,
    group: "science"
}

let  grade3={
    name: "varsha",
    id:001,
    group: "science"
}

let  grade4={
    name: "varsha",
    id:001,
    group: "arts"
}

let  results=[grade1,grade2,grade3,grade4]
   for(let i=0; i<results.length; i++){
    if(results[i].name==="varsha"){
        
        console.log(results[i].name)
        break;
    }
   } 