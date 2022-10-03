let weather = "sunny"
switch (weather) {

    case "rainy":
        console.log("plant seeds")
        break;
    case "cold":
        console.log("wear winter jackets")
        break;
    case "windy":
        console.log("go for fall colors")
        break;
    case "spring":
        console.log("go out for play")
        break
    case "sunny":
        console.log("visit places")
       break;
       default : console.log("default")
}

const month = prompt("Enter the month");

if (month==="September" || month==="October"|| month==="November"){
    console.log("Autumn")
}else if (month==="December" || month==="January" || month==="February"){
    console.log("Winter")
}else if (month==="March" || month==="April" || month==="May"){
    console.log("Spring")
}else if (month==="June" || month==="July" || month==="August"){
  console.log("Summer")
}else {
    console.log("no matching found")
}



