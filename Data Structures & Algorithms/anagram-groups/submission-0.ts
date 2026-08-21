class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();

        strs.forEach((word) => {
            const sortedWord = word.split("").sort().join();

            if (map.has(sortedWord)) {
                const currMapVal = map.get(sortedWord);
                map.set(sortedWord, [...currMapVal, word]);
            } else {
                map.set(sortedWord, [word]);
            }
        });

        const arr = Array.from(map.values());

        return arr;
    }
}
