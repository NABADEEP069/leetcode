// Write a function to find the missing number in an array of integers from 1 to n.


function findMissingNumber(arr) {
    
   
    arr.sort((a , b) => a - b);


    for (let i = 0; i < arr.length; i++) {    
        if(arr[i] !== i+1) {
        return i + 1;
    }
    }

    return arr.length + 1;
}