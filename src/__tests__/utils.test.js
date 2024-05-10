import { isPalindrome } from '../utils'

describe("isPalindrome", () => {
    it("returns true if the word that is tested is spelled exacly the same if the characters were reversed", () => {
        const word = "racecar"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })

    it("returns true if the word that is tested is spelled exacly the same if the characters were reversed", () => {
        const word = "test"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(false)
    })

    it("returns true if the word that is tested is spelled exacly the same if the characters were reversed", () => {
        const word = "hAnnaH"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})
