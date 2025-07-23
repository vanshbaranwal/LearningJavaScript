//program to reverse a given number by the user.

let pr = prompt("write a number to get the reverse of the digits of the given number : ");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number>0){
            let rev = 0;
            while(number>0){
                let rem = number%10;
                rev = rev*10 + rem;
                number = Math.floor(number/10);
            }
            console.log(rev);
        }else{
            console.log("invalid input.");
        }
    }
}

