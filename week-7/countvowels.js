// Function to count the number of vowels in a given string

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for(let char of str) {
      if(vowels.includes(char)) {
        count++;
      }
    }

    return count;
}
   