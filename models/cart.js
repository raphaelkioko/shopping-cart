//creating a constructor to our sessions
module.exports = function Cart(oldCart) {
	//initialization of objects already stored in our cart
	this.items = oldCart.items || {};
	this.totalQty = oldCart.totalQty || 0;
	this.totalPrice = oldCart.totalPrice || 0;

	//function for adding items into our cart
	this.add = function (item, id) {
		var storedItem = this.items[id];
		//checks if the item exists in the old cart, and creates new item if it doesn't
		if (!storedItem){
			storedItem = this.items[id] = {item: item, qty: 0, price: 0};
		}
		storedItem.qty++;
		storedItem.price = storedItem.item.price*storedItem.qty;
		this.totalQty++;
		this.totalPrice += storedItem.item.price;
	};

        //removes a single item
        this.reduceByOne = function (id) {
        	this.items[id].qty--;
        	this.items[id].price -= this.items[id].item.price;
        	this.totalQty--;
        	this.totalPrice -= this.items[id].item.price;
        	
        	if (this.items[id].qty <= 0) {
        		delete this.items[id];
        	}
        };

        //removes all items at once 
        this.removeItem = function (id) {
        	this.totalQty -= this.items[id].qty;
        	this.totalPrice -= this.items[id].price;
        	delete this.items[id];
        }
        
	//generating an array to enable us output items in the cart
	this.generateArray = function () {
	var arr = [];
	for(var id in this.items) {
		arr.push(this.items[id]);
	};
	return arr;
  };
};