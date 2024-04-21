function firstWord(s) {
    // Trim the string and split it into words
    let words = s.trim().split(" ");
    // Return the first word
    return words[0];
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
