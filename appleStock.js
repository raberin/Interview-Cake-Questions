// Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

//Greedy Approach
//O(n) - time O(1) space
const getMaxProfit = prices => {

    //Initialize minPrice and maxProfit 
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];
    
    //Start at i = 1 since we already did the first buy/sell cycle
    for(let i = 1; i < prices.length; i++){
        let currentPrice = prices[i];

        //Check if the difference between current price and minPrice
        let potentialProfit = currentPrice - minPrice;

        //Check/Set maxProfit to the higher number 
        maxProfit = Math.max(maxProfit, potentialProfit);

        //Update minPrice to the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
    
}

//Can also do a nested loop to compare each value