
export function isPalindrome(word) {
    let updatedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedWord = updatedWord.split('').reverse().join('');
    
    if (reversedWord === word.toLowerCase()) {
        return true
    } else {
        return false
    }
}
