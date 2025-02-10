// write a calculator program that takes two numbers and 
// an operator (+,-,*,/) and performs the corresponding calculation.
// use switch statement to handle different operations.
// if the operator is invalid, print "invalid operation".

let num1=5, num2=0;
let operator='/';

switch(operator){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        if(num2===0){
            console.log("error: cannot divide by zero.");
        }else{
            console.log(num1/num2);
        }
        break;
    default:
        console.log("invalid operator.")
}
