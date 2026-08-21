class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();

        nums.forEach((num) => {
            if (map.has(num)) {
                const currVal = map.get(num);
                map.set(num, currVal + 1);
            } else {
                map.set(num, 1);
            }
        });

        const arr = Array.from(map.entries())
            .sort((a, b) => a[1] - b[1])
            .reverse()
            .slice(0, k)
            .flatMap((el) => el[0]);

        console.log("map", map);

        return arr;
    }
}
