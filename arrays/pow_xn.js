/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

     function myPow(x, n) {
  // Step 1: Handle negative powers
  if (n < 0) {
    x = 1 / x;   // Flip x (e.g., 2 becomes 1/2)
    n = -n;      // Make n positive (e.g., -2 becomes 2)
  }

  let result = 1;  // Step 2: Initialize result to 1

  while (n > 0) {  // Step 3: Loop until n becomes 0
    if (n % 2 === 1) {     // If n is odd
      result *= x;         // Multiply result by current x
    }
    x *= x;        // Square the base (x = x^2)
    n = Math.floor(n / 2);  // Divide n by 2 and ignore decimals
  }

  return result; // Step 4: Return final result
}

