// write a program that takes a month number (1-12) 
// and prints:
// the month name(january,february,etc)
// the number of days in that month.

let monthnum = 12;

switch(monthnum){
    case 1:
        console.log("january");
        console.log("the number of days is 31.");
        break;
    case 2:
        console.log("february");
        if((year%4===0 && year%100!==0) || year%400 === 0){
            console.log("the number of days is 29 (leap year).");
        }else{
            console.log("the number of days is 28.");
        }
        break;
    case 3:
        console.log("march");
        console.log("the number of days is 31.");
        break;
    case 4:
        console.log("april");
        console.log("the number of days is 30.");
        break;
    case 5:
        console.log("may");
        console.log("the number of days is 31.");
        break;
    case 6:
        console.log("june");
        console.log("the number of days is 30.");
        break;
    case 7:
        console.log("july");
        console.log("the number of days is 31.");
        break;
    case 8:
        console.log("august");
        console.log("the number of days is 31.");
        break;
    case 9:
        console.log("september");
        console.log("the number of days is 30.");
        break;
    case 10:
        console.log("october");
        console.log("the number of days is 31.");
        break;
    case 11:
        console.log("november");
        console.log("the number of days is 30.");
        break;
    case 12:
        console.log("december");
        console.log("the number of days is 31.");
        break;
    default:
        console.log("invalid month number.");
}