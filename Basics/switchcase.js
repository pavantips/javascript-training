// Show the fee based on user role
var user = "employee";

switch (user) 
{
    case "employee":
        console.log("Your exam fee is $10.00");
        break;
    case "partner":
        console.log("Your exam fee is $20.00");
        break;
    case "customer":
        console.log("Your exam fee is $30.00");
        break;
    default:
        console.log("Role not recognized. No fee available.");
}

