//Write a function to calculate the factorial of a given number.

function factorial(n) {
    if(n < 0)
    return "invalid input";

      let result = 1;

      for(let i = 2;  i <= n; i++)
      result *= i;

      return result;
    
}