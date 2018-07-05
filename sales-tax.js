var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  //for each item of companySalesDates
  var resultsObj = {};

  for (var i = 0; i < salesData.length; i++) {
    var totalSales = calcTotalSales(salesData[i]['sales']); //number
    var province = salesData[i]['province']; // province is the province
    var taxRate = salesTaxRates[province]; //each provinces tax rate
    var totalTax = (totalSales * taxRate); //total tax of that province
    var companyName = salesData[i]['name'];
    if (resultsObj[companyName]) {
      resultsObj[companyName]['totalSales'] += totalSales;
      resultsObj[companyName]['totalTax'] += totalTax;
    } else {
      resultsObj[companyName] = {};
      resultsObj[companyName]['totalSales'] = totalSales;
      resultsObj[companyName]['totalTax'] = totalTax;
    }

  }
  return resultsObj;
}



function calcTotalSales(salesAry) {
  var total = 0;
  for (var i = 0; i < salesAry.length; i++) {
    total += salesAry[i];
  }
  return total;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/