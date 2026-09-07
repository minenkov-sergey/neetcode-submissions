class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const arr = matrix.flat()

        return arr.includes(target) ? true: false
    }
}
