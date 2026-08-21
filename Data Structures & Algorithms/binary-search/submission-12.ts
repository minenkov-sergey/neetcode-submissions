class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const medianIndex = Math.ceil((nums.length) / 2) - 1;
        let i = medianIndex;

        const set = new Set(nums)
        if (!set.has(target)) {
            return -1
        }

        while (nums[i] !== undefined) {
            const currNum = nums[i];

            if (target === currNum) {
                return i;
            } 
            if (target > currNum) {
                i++;
            } 
            if (target < currNum) {
                i--;
            }
        }

        return -1;
    }
}
