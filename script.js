function firstWord(s) {
    // Split the input string
    let words = s.split(" ");
    // Return the first word
    return words[0];
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
