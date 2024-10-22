const arr=[344,'hello',true, 345.35,undefined];

console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.length);


const movies=['Avengers' , 'Animal','Deadpool' , '1920', 'Batman'];

//indexing
console.log(movies[2]);
console.log(movies.indexOf('Batman'));
console.log(movies.indexOf('Avengers'));
console.log(movies[100]);
console.log(movies.at[-3]);

//slicing
console.log(movies.slice(1,5));
console.log(movies.slice(1,4));
console.log(movies.slice(1,50));

//adding and removing element
movies.push('Superman'); // add at the end
movies.unshift('Flash'); // add at the start point 
console.log(movies);

movies.pop(); /// removes from the end
movies.shift(); // removes from the start
console.log(movies);

// remove two element from index 2
movies.splice(2,2);

// remove and replace 2 element from index 2
movies.splice(2,2 ,'Deadpool 2', '1921')
// insert 2 elements from index 2
movies.splice(2,0,'Deadpool 2', '1921')
console.log(movies);


