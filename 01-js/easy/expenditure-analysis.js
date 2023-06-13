/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  const arrLength = transactions.length
  for (i = 0; i < arrLength; i++) {
    function categoryMatch(ctgry) {
      if (ctgry.category === transactions[i].category) {
        return ctgry;
      }
    }
    let Match = arr.find(categoryMatch);
    if (typeof(Match) === "object") {
      continue;
    }
    let totalPrice = 0;
    for (j = 0; j < arrLength; j++) {
      if (transactions[i].category === transactions[j].category) {
        totalPrice += transactions[j].price;
      }
    }
    const output = new Object();
    output.category = transactions[i].category;
    output.totalSpent = totalPrice;
    arr.push(output);
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
