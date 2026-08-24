class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones) {
        const stack = [...stones].sort((a, b) => a - b);

        while (stack.length > 1) {
            const fHeavier = stack.pop();

            const sHeavier = stack.pop();

            let evaluetionResult = fHeavier - sHeavier;

            if (evaluetionResult > 0) {
                stack.push(evaluetionResult);
            }
            if (evaluetionResult < 0) {
                const abs = Math.abs(evaluetionResult);
                stack.push(abs);
            }

            stack.sort((a,b) => a - b)
        }

        return stack[0] ?? 0
    }
}
