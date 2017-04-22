class OrderRepository {
	getAllOrders() {
	  	return fetch('https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6')
	  		.then((response) => response.json())
	  		.then((responseJson) => {
	  			return responseJson.orders;
	  		})
	  		.catch((error) => {
	  			console.log(error);
	  		});
	}

	getTotalPriceForEveryOrder() {
		return this.getAllOrders()
				.then((orders) => {
					return orders.map((order) => {
						return Number(order.total_price);
					});
				})
				.catch((error) => {
					console.log(error);
				})
	}

	getTotalOrderRevenue() {
		return this.getTotalPriceForEveryOrder()
				.then((totalPrices) => {
					const totalOrderRevenue = totalPrices.reduce((prev, curr) => prev + curr, 0);
					return totalOrderRevenue.toFixed(2);
				})
				.catch((error) => {
					console.log(error);
				});
	}

	getAllLineItems() {
		return this.getAllOrders()
				.then((orders) => {
					const lineItemsArray = orders.map((order) => {
						return order.line_items;
					});

					return [].concat(...lineItemsArray);
				})
				.catch((error) => {
					console.log(error);
				})
	}

	getQuantityOfAerodynamicCottonKeyboards() {
		return this.getAllLineItems()
				.then((lineItems) => {
					const fullfillableQuantities = lineItems.map((lineItem) => {
						if (lineItem.title === 'Aerodynamic Cotton Keyboard')
							return lineItem.fulfillable_quantity;
						else return null;
					});

					return fullfillableQuantities
							.filter((quantity) => quantity !== null)
							.reduce((prev, curr) => prev + curr, 0);
				})
				.catch((error) => {
					console.log(error);
				})
	}
}

export default new OrderRepository();