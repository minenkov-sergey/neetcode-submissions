class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        const dayPrices = [...prices];

        for (let i = 0; i <= prices.length; i++) {
            const sell = dayPrices.pop();
            const buy = Math.min(...dayPrices);

            console.log(sell);
            console.log(buy);

            if (profit < sell - buy) {
                profit = sell - buy;
            }

            console.log("profit", profit);
        }

        return profit;
    }
}
