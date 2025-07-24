// A basic calculator.

while(true){

    let input1 = prompt("enter first number : ");
    if(!input1){
        console.log("cancelled.");
        break;
    }

    let input2 = prompt("enter second number : ");
    if(!input2){
        console.log("cancelled.");
        break;
    }

    let operator = prompt("enter the operator ('+', '-', '*', '/') : ");
    if(!operator){
        console.log("cancelled.");
        break;
    }

    let num1 = Number(num1);
    let num2 = Number(num2);
    
    if(operator==='+'){
        console.log(num1+num2);
    }else if(operator==='-'){
        console.log(num1-num2);
    }else if(operator==='*'){
        console.log(num1*num2);
    }else if(operator==='/'){
        if(num2 === 0){
            console.log("connot divide by zero.")
        }else{
            console.log(num1/num2);
        }
    }else{
        console.log("invalid operator. You can use ('+', '-' , '*', '/')");
    }

    let choice = prompt("type 'exit' to quit or press enter to continue.")
    if(choice==='exit'){
        console.log("calculator stopped.")
        break;
    }
}
