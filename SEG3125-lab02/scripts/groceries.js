	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "cookies",
		nut: true,
		lactose: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		nut: false,
		lactose: false,
		organic: false,
		price: 2.35
	},
	{
		name: "cheese",
		nut: false,
		lactose: true,
		organic: true,
		price: 9.00
	},
	{
		name: "orange",
		nut: false,
		lactose: false,
		organic: true,
		price: 5.51
	},
	{
		name: "crackers",
		nut: false,
		lactose: false,
		organic: false,
		price: 13.25
	},
	{
		name: "blueberry",
		nut: false,
		lactose: false,
		organic: true,
		price: 1.00
	},
	{
		name: "cake",
		nut: true,
		lactose: true,
		organic: false,
		price: 34.01
	},
	{
		name: "trail mix",
		nut: true,
		lactose: false,
		organic: true,
		price: 5.55
	},
	{
		name: "beef jerky",
		nut: false,
		lactose: false,
		organic: false,
		price: 19.79
	},
	{
		name: "ice cream",
		nut: true,
		lactose: true,
		organic: true,
		price: 15.45
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	restricted_prods = [];


	for (let i=0; i<prods.length; i+=1) {
		if ((restriction["nut-free"] == true && restriction["lactose-free"] == false) && (prods[i].nut == false)){
			_organicCheck(prods[i],organic);
		}

		else if ((restriction["lactose-free"] == true && restriction["nut-free"] == false) && (prods[i].lactose == false)){
			_organicCheck(prods[i],organic);
		}

		else if((restriction["lactose-free"] == true && restriction["nut-free"] == true) && (prods[i].lactose == false && prods[i].nut == false)) {
			_organicCheck(prods[i],organic);
		}

		else if(restriction["none"] == true){
			_organicCheck(prods[i],organic);
		}

	}
	return restricted_prods;
}


//Is the final check for organicness, before adding to array, to be used in RestrictListProducts function
function _organicCheck(item, organicBool){
	if(organicBool == "true" && item.organic == true){
		restricted_prods.push(item);
	} else if (organicBool == "false") {
		restricted_prods.push(item);
	}
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}