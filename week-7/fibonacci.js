// Given a number n, return the nth Fibonacci number.


function fibonacci(n) {
     if (n < 0)
     return "etu fibbo nohoi";

    let a = 0, b = 1;
    for(let i = 1; i < n; i++) {
        [a,b] = [b, a + b];
    }  
    return n === 0 ? 0:b;
}



// Example usage:
console.log(fibonacci(0));
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(3));     
console.log(fibonacci(4)); 
console.log(fibonacci(5)); 