	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "cookies",
		nut: true,
		lactose: true,
		organic: false,
		price: 1.99,
		pic: "../images/cookies.jpg"
	},
	{
		name: "bread",
		nut: false,
		lactose: false,
		organic: false,
		price: 2.35,
		pic: "../images/bread.jpg"
	},
	{
		name: "cheese",
		nut: false,
		lactose: true,
		organic: true,
		price: 9.00,
		pic: "../images/cheese.jpg"
	},
	{
		name: "orange",
		nut: false,
		lactose: false,
		organic: true,
		price: 5.51,
		pic: "../images/orange.jpg"
	},
	{
		name: "crackers",
		nut: false,
		lactose: false,
		organic: false,
		price: 13.25,
		pic: "../images/crackers.jpg"
	},
	{
		name: "blueberry",
		nut: false,
		lactose: false,
		organic: true,
		price: 1.00,
		pic: "../images/blueberries.jpg"
	},
	{
		name: "cake",
		nut: true,
		lactose: true,
		organic: false,
		price: 34.01,
		pic: "../images/cake.jpg"
	},
	{
		name: "trail mix",
		nut: true,
		lactose: false,
		organic: true,
		price: 5.55,
		pic: "../images/trailmix.jpg"
	},
	{
		name: "beef jerky",
		nut: false,
		lactose: false,
		organic: false,
		price: 19.79,
		pic: "../images/beefjerky.jpg"
	},
	{
		name: "ice cream",
		nut: true,
		lactose: true,
		organic: true,
		price: 15.45,
		pic: "../images/icecream.jpg"
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
	if(organicBool.checked && item.organic == true){
		restricted_prods.push(item);
	} else if (!(organicBool.checked)) {
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
	return Math.round((totalPrice * 100)) /100;
}