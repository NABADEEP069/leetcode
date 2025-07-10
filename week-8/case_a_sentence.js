//Write a function that converts the first letter of each word in a sentence to uppercase

function titleCase(sentence) {
    return sentence   
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    
}