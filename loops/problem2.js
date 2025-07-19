// factorial of n natural numbers.

let pr = prompt("write a number to get the factorial of given number :");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number > 0){
            let fact = 1;
            for(let i=1; i<=number; i++){
                fact*=i;
            }
            console.log(fact);
        }else{
            console.log("is an invalid input");
        }
    }
}