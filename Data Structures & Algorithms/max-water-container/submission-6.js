class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;

        let lP = 0;
        let rP = heights.length - 1;

        while (lP < rP) {
            let fV = heights[lP];
            let sV = heights[rP];

            const currWater = Math.abs(lP - rP) * Math.min(fV, sV);

            if (currWater > maxWater) {
                maxWater = currWater;
            }

            if (fV <= sV) {
                lP++
            } else {
                rP--
            }
        }

        return maxWater;
    }
}
