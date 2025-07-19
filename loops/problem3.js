// program to check the factors of the given number.

let pr = prompt("write a number to get the factors of that number : ");

if(pr === null){
    console.log("cancelled by the user.");
}else{
    number = Number(pr);
    if(isNaN(number)){
        console.log("invalid input");
    }else{
        if(number>0){
            let factor=[]
            for(let i=1; i<=number; i++){
                if(number%i===0){
                    factor.push(i);
                }
            }
            console.log(factor);
        }else{
            console.log("invalid input");
        }
    }
}