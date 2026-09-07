class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const arr = matrix.flat()

        console.log('arr', arr.includes)

        return arr.includes(target) ? true: false
    }
}
