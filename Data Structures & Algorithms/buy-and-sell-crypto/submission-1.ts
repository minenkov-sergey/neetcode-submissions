class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const dayPrices = [...prices];

        return prices.reduce((acc, curr) => {
            const sell = dayPrices.pop();
            const buy = Math.min(...dayPrices);

            const currDayProfit = sell - buy;

            if (acc < currDayProfit) {
                return currDayProfit
            }

            return acc
        }, 0);
    }
}
