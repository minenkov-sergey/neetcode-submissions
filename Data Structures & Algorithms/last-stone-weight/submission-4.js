class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones) {
        const hashMap = new Map(); //{weight :[indexes]}

        const removeFromHashMap = (key, value) => {
            const currVal = hashMap.get(key);
            if (currVal?.length > 1) {
                const removeIdx = currVal.findIndex((currEl) => currEl === value);
                currVal.splice(removeIdx, 1);

                addToHashMap(key, currVal);
            } else {
                hashMap.delete(key);
            }
        };

        const addToHashMap = (key, value) => {
            if (hashMap.has(key)) {
                const currIndx = hashMap.get(key);
                hashMap.set(key, [...currIndx, value]);
            } else {
                hashMap.set(key, [value]);
            }
        };

        const stack = [...stones].sort((a, b) => a - b);

        stones.forEach((stoneW, index) => addToHashMap(stoneW, index));

        while (stack.length > 1) {
            const fHeavier = stack.pop();
            const idxsWithFWeight = hashMap.get(fHeavier);
            const fHeavierIdx = idxsWithFWeight?.shift();
            if (!fHeavierIdx) hashMap.delete(fHeavier);

            const sHeavier = stack.pop();
            const idxsWithSWeight = hashMap.get(sHeavier);
            const sHeavierIdx = idxsWithSWeight?.shift();
            if (!sHeavierIdx) hashMap.delete(sHeavier);

            let evaluetionResult = fHeavier - sHeavier;

            if (evaluetionResult > 0) {
                stack.push(evaluetionResult);

                removeFromHashMap(sHeavier, sHeavierIdx);
                addToHashMap(evaluetionResult, fHeavierIdx);
            }
            if (evaluetionResult < 0) {
                const abs = Math.abs(evaluetionResult);
                stack.push(abs);

                removeFromHashMap(fHeavier, fHeavierIdx);
                addToHashMap(abs, sHeavierIdx);
            }
            if (evaluetionResult === 0) {
                removeFromHashMap(fHeavier, fHeavierIdx);
                removeFromHashMap(sHeavier, sHeavierIdx);
            }

            stack.sort((a,b) => a - b)
        }

        return stack[0] ?? 0
    }
}
