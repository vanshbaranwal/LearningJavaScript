// find the largest of three numbers. 
// problem statement:
// write a program that takes three numbers and prints the largest.

let num1=5,num2=6,num3=8;

if(num1>num2 && num1>num3){
    console.log(num1);
}else if(num2>num1 && num2>num3){
    console.log(num2);
}else{
    console.log(num3);
}