class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const operators = ['+', '-', '*', '/']

        for (let p = 0; p <= tokens.length - 1; p++) {
            const currArticle = tokens[p]

            if (!operators.includes(tokens[p])) {
                stack.push(currArticle)
            } else {
                const secOperand = Number(stack.pop())
                const firstOperand = Number(stack.pop())
                const res = calculate(currArticle, firstOperand, secOperand)
                stack.push(res)
            }
        }

        return stack[0]
    }
}

const calculate = (operator, first, second) => {
    switch (operator) {
        case '+' :
        return first + second
        case '-' :
        return first - second
        case '*' :
        return first * second
        case '/' :
        return Math.trunc(first / second);
    }
}