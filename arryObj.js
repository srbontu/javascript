
//September 24th
let obj1={
    student1:"sandy",
    age:15,
    grade:10,
    place:"Henrdon"
  }
  
  let obj2={
    student1:"nidhi",
    age:15,
    grade:10,
    place:"Ashburn"
  }
  
  let obj3={
    student1:"meghana",
    age:15,
    grade:10,
    place:"Aldie"
  }
  let obj4={
    student1:"manasa",
    age:15,
    grade:10,
    place:"Reston"
  }
  
  let objresult=[obj1,obj2,obj3,obj4]
  for(let i=0; i<objresult.length; i++){
    if (objresult[i].place=="Aldie"){
    console.log(objresult[i].place);
    break
    }
  }