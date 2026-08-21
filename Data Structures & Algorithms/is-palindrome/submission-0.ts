class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
        for (let i = 0; i <= str.length; i++) {
            let fPointer = str[i]
            let sPointer = str[(str.length -1) - i]

            const isPointersFinal = (i === (str.length -1) - i) || (i === (str.length - i))

            if (isPointersFinal) {
                break;
            }

            if (fPointer !== sPointer) {
                return false
            }
        }
        return true
    }
}
