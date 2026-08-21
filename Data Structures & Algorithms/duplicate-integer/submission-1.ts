class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDuplicate = false

        const hashMap = new Map()

        nums.forEach((curr) => {
            if (hashMap.has(curr)) {
                isDuplicate = true
            } else {
                hashMap.set(curr, curr)
            }
            
        })

        return isDuplicate
    }
}
