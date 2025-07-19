// program to check if the given number is prime or not.

let pr = prompt("write a number to check if it is prime or not : ");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number>0){
            for(let i=2; i<number; i++){
                if(number%i===0){
                    console.log("the given number is not a prime number.");
                    break
                }else{
                    console.log("the given number is a prime number.");
                    break
                }
            }
        }
    }
}