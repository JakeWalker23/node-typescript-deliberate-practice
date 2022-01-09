import { isAnagram } from '../../../src/functions/anagramChecker/isAnagram'

describe('anagram checker test suite', () => {
    it('tests isAnagram returns true when 2 strings are anagrams', () => {
        let string1 = 'jake'
        let string2 = 'jake'

        const result = isAnagram(string1, string2)

        expect(result).toBe(true)
    });

    it('tests isAnagram returns false when 2 strings are not anagrams', () => {
        let string1 = 'deal'
        let string2 = 'joke'

        const result = isAnagram(string1, string2)

        expect(result).toBe(false)
    });

    it('tests isAnagram returns false when 2 strings are not equal length', () => {
        let string1 = 'deal'
        let string2 = 'joking'

        const result = isAnagram(string1, string2)

        expect(result).toBe(false)
    });
});