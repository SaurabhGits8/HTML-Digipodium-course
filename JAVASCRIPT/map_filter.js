const nums=[3,7,6,5,2];

const newnums=nums.map((n) => { return n*10});

console.log(newnums);

const price= [33,45.99,270,2300]
// add 18% GST to all prices 
console.log(50*1.18);
console.log(50*0.18+50);
console.log('--------------------------');
console.log('variable.map(() => {})')

const newprice=price.map((p) => {return p*1.18});
console.log(newprice);

console.log('--------------------------');
console.log('variable.filter(() => {})')

const evennumber=price.filter((p) => {return p%2===0});
console.log(evennumber);


