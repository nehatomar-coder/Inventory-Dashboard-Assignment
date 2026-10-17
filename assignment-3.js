// Assignment 3: Conditional Logic

const score = 85;

console.log("Score:", score);

if (score >= 80) {
    console.log("Score is good.");
} else {
    console.log("Score needs improvement.");
}

let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;

    case score >= 80:
        grade = "B";
        break;

    case score >= 70:
        grade = "C";
        break;

    default:
        grade = "D";
}

console.log("Grade:", grade);

// 3. Check pass/fail using ternary operator
const result = score >= 40 ? "Passed" : "Failed";

console.log(result);
