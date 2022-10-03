
    let var1=10;
    let var2=7;

    const funsun1=()=>{
        return var1+var2
}

const funminus1=()=>{
    return var1-var2
}

const funsub=()=>{
    return var1*var2
}

const fundiv=()=>{
    return var1/var2
}

console.log(funsun1());
console.log(funminus1());
console.log(funsub());
console.log(fundiv())

const funsun2=()=>  var1+var2;
console.log(funsun2())

const funsum11=(studentname,age)=>{
    return `${studentname} ${age}`
}
console.log(funsum11("abhi",12))


const devices="authy";
switch (devices) {

case "authy":
    console.log("click")
    break;

    case "register":
        console.log("delete")
break;

case "deleted":
    console.log("register")
 break

    



}
