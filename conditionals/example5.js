// check leap year.
// problem statement:
// write a program that checks if the given number is a leap year.
// a leap year is a divisible by 4, but not divisible by 100, unless it's not also divisible by 400.

let year=2024;

if((year%4 === 0 && year%100 !==0) || (year%400 === 0)){
    console.log(year, "is a leap year.");
}else{
    console.log(year, "is not a leap year.");
}