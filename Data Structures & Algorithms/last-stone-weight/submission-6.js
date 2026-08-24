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

            const abs = Math.abs(evaluetionResult);
            stack.push(abs);

            stack.sort((a, b) => a - b);
        }

        return stack[0] ?? 0;
    }
}
