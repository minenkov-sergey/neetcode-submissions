class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDuplicate = false

        nums.forEach((curr) => {
            const duplicated = nums.filter((el) => el === curr)
            if (duplicated.length > 1) {
                isDuplicate = true
            }
        })

        return isDuplicate
    }
}
