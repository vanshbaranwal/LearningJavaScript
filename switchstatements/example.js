let fruittype = "mangoes";

switch (fruittype){
    case "oranges":
        console.log("oranges are $0.59 a pound.");
        break;
    case "apples":
        console.log("apples are $0.32 a pound.");
        break;
    case "bananas":
        console.log("bananas are $0.48 a pound.");
        break;
    case "cherries":
        console.log("cherries are $3.00 a pound.");
        break;
    case "mangoes":
        console.log("mangoes are $0.56 a pound.");
        break;
    case "papayas":
        console.log("papayas are $2.79 a pound.");
        break;
    default:
        console.log(`sorry, we are out of ${fruittype}.`);
}

console.log("is there anything else you'd like??");