class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const set = new Set(s);

        if (s.length !== t.length) {
            return false;
        }

        const hashMapS = new Map();
        const hashMapT = new Map();

        for (let i = 0; i <= s.length - 1; i++) {
            if (hashMapS.has(s[i])) {
                let currVal = Number(hashMapS.get(s[i]));
                hashMapS.set(s[i], currVal+1);
            } else {
                hashMapS.set(s[i], 1);
            }
            if (hashMapT.has(t[i])) {
                let currVal = Number(hashMapT.get(t[i]));
                hashMapT.set(t[i], currVal+1);
            } else {
                hashMapT.set(t[i], 1);
            }
        }

        // for (let i = 0; i <= t.length - 1; i++) {
        //     if (hashMapT.has(t[i])) {
        //         let currVal = Number(hashMapT.get(t[i]));
        //         hashMapT.set(t[i], currVal+1);
        //     } else {
        //         hashMapT.set(t[i], 1);
        //     }
        // }

        console.log(hashMapS);
        console.log(hashMapT);

        for (let i of hashMapS.keys()) {
            console.log(i)
            if (hashMapS.get(i) !== hashMapT.get(i)) {
                return false;
            }
        }

        return true;
    }
}
