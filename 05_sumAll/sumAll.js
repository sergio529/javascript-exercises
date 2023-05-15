const sumAll = function(a,b) {
    let sum=0;
    if (a>b) {
        let c=a;
        a=b;
        b=c;
    }
    if( a < 0 || b < 0 ||typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    }
    for (let i = 0; i <= b-a; i++) {
        sum += a+i;
        
    }
    console.log(a);
    return sum;
};
console.log(sumAll());
// Do not edit below this line
module.exports = sumAll;
