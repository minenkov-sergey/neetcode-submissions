class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set()

        for (let i = 0; i <= nums.length - 1; i++) {
            const currVal = nums[i]
            if (set.has(currVal)) {
                return true
            } else {
                set.add(currVal)
            }
        }

        return false
    }
}
