class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = new Map();

        for (let i = 0; i <= nums.length - 1; i++) {
            const difference = target - nums[i]

            if (hash.has(difference)) {
                return [hash.get(difference), i]
            }
            
            hash.set(nums[i], i);
        }

        return []
    }
}
