class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const columns = new Map();
        const subBoxes = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cellVal = board[r][c];
                const subCell = Math.floor(r / 3) + "," + Math.floor(c / 3);

                if (cellVal === ".") {
                    continue;
                }

                if (!rows.has(r)) {
                    rows.set(r, new Set());
                }
                if (!columns.has(c)) {
                    columns.set(c, new Set());
                }
                if (!subBoxes.has(subCell)) {
                    subBoxes.set(subCell, new Set());
                }

                if (rows.get(r).has(cellVal)) {
                    return false;
                }
                if (columns.get(c).has(cellVal)) {
                    return false;
                }
                if (subBoxes.get(subCell).has(cellVal)) {
                    return false;
                }

                rows.get(r).add(cellVal);
                columns.get(c).add(cellVal);
                subBoxes.get(subCell).add(cellVal);
            }
        }

        return true;
    }
}
