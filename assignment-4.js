// 1. For loop to print a multiplication table up to 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("");

console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
    if (num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }
    num++;
}

console.log("");

console.log("-- Do...While Loop with Continue --");
let count = 0;
do {
    count++;
    if (count === 3) {
        continue;
    }
    console.log(`Current Number: ${count}`);
} while (count < 5);