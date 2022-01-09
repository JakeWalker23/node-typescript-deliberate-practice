import { isAnagram } from '../../functions/anagramChecker/isAnagram'
const prompt = require("prompt-sync")({ sigint: true });

export function readUserInput() {
    console.log("Enter 2 strings and i'll tell you if they are anagrams:")
    const string1 = prompt("Enter the first string: ");
    const string2 = prompt("Enter the second string: ");

    return isAnagram(string1, string2)
}

readUserInput()