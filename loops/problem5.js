// find the sum of the given digits of a number.

let pr = prompt("write a numnber to get the total of the digits of the given number : ");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number>0){
            let sum=0;
            while(number>0){
                let rem = number%10;
                sum+=rem;
                number = Math.floor(number/10);
            }
            console.log(sum);
        }else{
            console.log("invalid input.");
        }
    }
}
