const nums=[4,37,49,4,33];
console.log('Array traversal 1 ');

for (i=0; i<nums.length; i++){
    console.log(nums[i]);
    // console.log(i);
    
};

console.log('--------------------------');

console.log('Array traversal 2 ');

for ( let n of nums ){
    console.log(n);
    
};

console.log('--------------------------');
console.log('Array traversal 3 ');

nums.forEach((a , b , c  ) => {
    console.log(a , b , c );    
});
console.log('--------------------------');
// WAP to print all even number
console.log('even number ');

nums.forEach((n) => {
    if (n%2==0){
    console.log(n);
    }    
});

console.log('--------------------------');
//WAP to print square of all numbers 

console.log('Square numbers');

nums.forEach((v) => {
    console.log(v**2);    
});

console.log('--------------------------');
//WAP to add all odd number in new array 

const oddnums=[];

nums.forEach((n) => {
    if (n%2!==0){
        oddnums.push(n);
    }
})

console.log(oddnums);

console.log('--------------------------');
//WAP to multiple every element by 10 and store in a new array 
num1=[1,2,3,4,5]

const multinums=[];
num1.forEach((s) => {
    multinums.push(s*10);
   
    
});
console.log(multinums);

