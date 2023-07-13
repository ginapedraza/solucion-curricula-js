//Solicitar ingresos, costos y % de impuestos
var income = parseInt(prompt('Indica tus ingresos'))
var costs = parseInt(prompt('Indica tus costos'))
var taxes = parseInt(prompt('Indica el % de impuestos'))
var grossProfit = income-costs;
var tax = grossProfit*taxes/100
var netIncome = grossProfit-tax;
document.write('Tu ganancia neta es $' + netIncome);
