const reverseString = function(string) {
    let ans=[];
    let arrString=string.split('');
    for (let i = arrString.length-1; i >= 0; i--) {
        ans.push(arrString[i]);
        
    }
    ans=ans.join('');
    return ans;
    
};
reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
