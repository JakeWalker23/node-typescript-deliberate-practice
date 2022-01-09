export function isAnagram(string1, string2) {
    const len1 = string1.length;
    const len2 = string2.length;

    if (len1 !== len2) {
        console.log('Invalid Input');
        return false
    }

    const str1 = string1.split('').sort().join('');
    const str2 = string2.split('').sort().join('');

    if (str1 === str2) {
        console.log(`${string1} and ${string2} are anagrams`)
        return true
    } else {
        console.log(`${string1} and ${string2} are not anagrams`)
        return false
    }
}