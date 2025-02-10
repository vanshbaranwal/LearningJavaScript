// program to print the largest number among a, b, and c.

let a=5, b=9, c=1;

if(a>=b && a>=c){
    console.log(`the largest number is ${a}.`);
}else if(b>=a && b>=c){
    console.log(`the largest number is ${b}.`);
}else{
    console.log(`the largest number is ${c}.`);
}