<<<<<<< HEAD
// lower right triangle

let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat(n-i)+str.repeat(i));
=======
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
>>>>>>> 9d262d96cfc76ded6706383cc14a972dfb073049
}