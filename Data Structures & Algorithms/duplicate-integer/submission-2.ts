class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDuplicate = false

        const hashMap = new Map()
        const set = new Set()

        nums.forEach((curr) => {
            if (set.has(curr)) {
                isDuplicate = true
            } else {
                set.add(curr)
            }
            
        })

        return isDuplicate
    }
}
