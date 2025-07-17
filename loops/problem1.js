// sum of n natural numbers.

let pr = prompt("write a number to get the sum of number till there : ");

if(pr === null){
    console.log("canceled by the user");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number > 0){
            let sum = 0;
            for(let i = 1; i<=number; i++){
                sum+=i;
            }
            console.log(sum)
        }else{
            console.log("is an invalid input");
        }
    }
}

