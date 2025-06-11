// Write a function that takes a sentence (string) and finds the longest word.

//Input: "The quick brown fox jumps over the lazy dog"
//Output: "quick"


function longestWord(sentence) {
    
 
const words = sentence.split(" ");
   let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    console.log(longest);
  
}