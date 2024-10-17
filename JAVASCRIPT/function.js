function addnum(a,b){
     var c=a+b;
    console.log(c);
    
}
addnum(50,10);
addnum(20,10);
addnum(800,10);

//const 
const getAvg=function(m1,m2,m3){
    const avg=(m1+m2+m3)/3;
    // console.log(avg);
    return avg;
    
}

// getAvg(12,15,8);

const result=getAvg(15,8,6);
console.log(result);

const factorial = (n) => {

    let f=1;
    for(let i=2; i<=n; i++){
        f=f*i;

    }
    return f;
}
const ans=factorial(5);
console.log(ans);


// create function to check a number is even or odd.
const checkEven=(n)=>{
    if (n%2===0){
        return 'even'
    }else{
        return 'odd'
    }
}
const res=checkEven(5);
console.log(res);

//WAP to create a function to take time of the day greet according 

const greet = (time) => {
    if (time ==='morning'){
        return'Good morning ';
    }else if (time ==='noon'){
        return 'Good Noon';

    }else if (time==='afternoon'){
        return 'good after noon';
    }
    else if (time==='evening'){
        return 'good evening';
    }
    else if (time==='night'){
        return 'good night';
    }
}
const rs=greet('night');
console.log(rs);
