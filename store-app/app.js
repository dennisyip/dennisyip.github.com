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
			images: [
				{
					full: 'blue-gem.jpg',
					thumb: 'blue-gem.jpg'
				}
			],
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Another Beautiful Gem',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'red-gem.jpg',
					thumb: 'blue-gem.jpg'
				}
			],
		}

	];

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
		
})();