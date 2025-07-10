// Write a function that takes a sentence (string) and finds the longest word


function findLongestWord(sentence) {
    const words = sentence.split(' ')
    let longest = "";

    for(let word of words) {
        if(word.length > longest.length) {
              longest = word;
        }
    }
    return longest;
}
