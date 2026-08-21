const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
};

const corrBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
};

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 > 0) {
            return false;
        }

        // const stack = [];

        // while (stack.length > 0) {

        // }

        // return true;

        const stack = [];

        const opBrackets = Object.values(corrBrackets);
        const closeBrackets = Object.keys(corrBrackets);

        for (let p = 0; p <= s.length - 1; p++) {
            const currArticle = s[p];
            const isLastArticle = p === s.length -1

            if (opBrackets.includes(currArticle) && !isLastArticle) {
                stack.push(currArticle);
            } else {
                const lastBracket = stack.at(-1);
                const correspBracket = corrBrackets[currArticle];

                if (lastBracket === correspBracket) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        if (stack.length > 0) {
            return false
        }

        return true;
    }
}
