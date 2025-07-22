// find the sum of the given digits of the number.

let pr = prompt("write a number to get the total of the digits of the number : ");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr)
    if(isNaN(number)){
        console.log("invalid number")
    }else{
        if(number>0){
            let sum = 0;
            while(number>0){
                let rem = number%10;
                sum += rem;
                number = Math.floor(number/10);
            }
            console.log(sum);
        }else{
            console.log("invalid input")
        }
    }
}