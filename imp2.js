//import { products1 } from "./e1";
import { months } from "./impObj";

const month = prompt("Enter the month");

if (month===months.SEPTEMBER|| month===months.OCTOBER|| month===months.NOVEMBER){
    console.log("Autumn")
}else if (month===months.DECEMBER|| month===months.JANUARY || month===months.FEBRUARY){
    console.log("Winter")
}else if (month===months.MARCH|| month===months.APRIL || month===months.MAY){
    console.log("Spring")
}else if (month===months.JUNE|| month===months.JULY|| month===months.AUGUS){
  console.log("Summer")
}else {
    console.log("no matching found")
}




// const productsNames= ("SAM");
//  if(productsNames===products1){
//     console.log(products1)
//  }