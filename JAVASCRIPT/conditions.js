num = 234;

if (num % 2 == 0) {
    console.log('even');
} else {
    console.log('odd');
}

// program to check eligibility for DL
age=14
if(age=>20){

    abc='xyz';
    let a='local';
    const pi=3.14;// const key word is used for make a contant varible

    console.log(pi);
    console.log(a);
    console.log('eligible for DL');

    
}else{
    console.log('Not Eligible for DL');
    
}

console.log(abc);

//WAP to check if a number is positive negative and zero
a=52;

if(a>0){
    console.log('Positive');  
}

else if(a<0){
    console.log('negative'); 
}

else{
    console.log('zero');  
}

// WAP to print grade on the basis of marks 
const marks = -60;

if (marks >= 90 && marks <= 100) {
    console.log('Grade A');
} else if (marks >= 70 && marks < 90) {
    console.log('Grade B');
} else if (marks >= 50 && marks < 70) {
    console.log('Grade C');
} else if (marks >= 0 && marks < 50) {
    console.log('Fail');
} else {
    console.log('Invalid marks');
}

// WAP to check if number is a perfect square.

const num5 = 25;
const root = num5 ** 0.5;
console.log(root);
console.log(15 ** 2);


if (Number.isInteger(root)) {
    console.log('Perfect square');
} else {
    console.log('Not a perfect square');
}

// WAP to check if a number is divisible by both 7 and 11