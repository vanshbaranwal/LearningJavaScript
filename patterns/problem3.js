// left hand triangle.

const prompt = require('prompt-sync')();
let n = Number(prompt("enter the number of rows : "));

for(let i=1; i<=n; i++){

    for(let k=1; k<=n-i; k++){
        process.stdout.write(" ");
    }

    for(let j=1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log();
}