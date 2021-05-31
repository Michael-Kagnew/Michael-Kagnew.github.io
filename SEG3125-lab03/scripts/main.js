
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(restrictionName,slct2, organicSelect, orderSelect) {
    // var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(organicSelect);
	var s4 = document.getElementById(orderSelect);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
	s2.id = "displayProduct";
	
	//Obtain the checked/unchecked boxes
	var restrictions = _mainRestriction(restrictionName);

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restrictions, s3);
	 _priceSortOrder(optionArray, s4.value);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var photo = optionArray[i].pic;

		//Create the card with the photo
		var itemContainer = document.createElement("div");
		itemContainer.className += "itemCard";
		var image = document.createElement("img");
		image.src = photo;
		itemContainer.appendChild(image);


		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		itemContainer.appendChild(document.createElement("br"));
		itemContainer.appendChild(checkbox);
		
		// create a label for the checkbox, also add it to the item container
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " $" + productPrice));
		itemContainer.appendChild(label);

		//append the item container to the html element that will contain all the other item containers
		s2.appendChild(itemContainer);
		
		// create a breakline node and add in HTML DOM
		//s2.appendChild(document.createElement("br"));    
	}
}

function _mainRestriction(restrictionName){
	let categoryElement = document.getElementsByName(restrictionName);

	let obj = {}

	for(let child of categoryElement){
		obj[child.value] = child.checked;
	}
	return obj;
	
}

//Check the sort selection on the Client tab
function _priceSortOrder(prods, order){
	//  var displayedProducts = document.getElementById(prodId);
	// var list = document.querySelector('#' + prodId);
	if (order == "asc"){
		 prods.sort((item1, item2) => (item1.price > item2.price ? 1 : (item1.price == item2.price) ? ((item1.name > item2.name) ? 1 : -1) : -1 ));
		// [...list.children]
		// .sort((a,b)=>a.innerText.substr(a.innerText.indexOf("$")+1) > b.innerText.substr(b.innerText.indexOf("$")+1) ?1:-1)
		// .forEach(node=>list.appendChild(node));	
	} else if (order =="dsc"){
		 prods.sort((item1, item2) => (item1.price > item2.price ? -1 : (item1.price == item2.price) ? ((item1.name > item2.name) ? -1 : 1) : 1 ));
	}
}

//Will auto pull the checkboxes and check what is selected and not

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + Math.round(getTotalPrice(chosenProducts))));
		
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }

  function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	
	document.getElementById("main").style.marginLeft = "250px";
  }

  window.onload = function(){
	document.getElementById('default').click();
  }