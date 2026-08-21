class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0;
        const numSet = new Set(nums)

        for (let currNum of numSet) {
            
            if (!numSet.has(currNum - 1)) {
                let counter = 0

            while (numSet.has(currNum+counter)) {
                counter++
            }
            const maxCount = Math.max(res, counter)
            res = maxCount
            }
        }

        return res
    }
}
