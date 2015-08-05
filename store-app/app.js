(function(){
	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [

		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'A beautiful gem',
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Another Beautiful Gem',
			canPurchase: true,
			soldOut: false,
		}

	];
		
})();