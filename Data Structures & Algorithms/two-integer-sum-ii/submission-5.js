class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let fPointer = 0;
        let sPointer = numbers.length - 1;

        while (fPointer < sPointer) {
            const fValue = numbers[fPointer];
            const sValue = numbers[sPointer];

            const sum = fValue + sValue;

            if (sum === target) {
                return [fPointer+1, sPointer+1];
            }

            if (sum > target) {
                sPointer--;
            } else {
                fPointer++;
            }
        }
    }
}
