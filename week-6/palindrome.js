const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}


rl.question("Enter a string to check if it's a palindrome: ", function(input) {
  if (isPalindrome(input)) {
    console.log("Yes, it's a palindrome!");
  } else {
    console.log("No, it's not a palindrome.");
  }
  rl.close();
});
