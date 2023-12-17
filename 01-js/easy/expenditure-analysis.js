/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  let categoryFound;
  for (let i = 0; i < transactions.length; i++) {
    categoryFound = false;
    indexes2 = output.length;
    for (let j = 0; j < indexes2; j++) {
      if (transactions[i]["category"] == output[j]["category"]) {
        output[j]["totalSpent"] =
          transactions[i]["price"] + output[j]["totalSpent"];
        categoryFound = true;
        break;
      }
    }
    if (categoryFound == false) {
      output.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"],
      });
    }
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
