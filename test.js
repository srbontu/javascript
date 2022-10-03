const OTP = "delete";

switch (OTP) {
    case "Register":
        console.log("registerOTP")
        break;
    case "elevate":
        console.log("elevateOTP")
        break;
    case "manage":
        console.log("manageOTP")
        break;
    case "delete":
        console.log("deleteOTP")
        break;
    default: console.log("nothing matched")
}

let apps = ["ezmQualification", "EZMmsd.com", "EZMmobile", "EZMLargedata"]
// sectionLinks="table>tbody>tr>td>span> a"
// let apps= "sectionlinks"
for (let i = 0; i < apps.length; i++) {
    if (apps[i] === "EZMmobile") {
        var appname = apps[i]
        console.log(apps[i])
        break;
    }
    //  console.log(apps[i])
}


(6===6)? console.log("pass"):  console.log("false condition")
