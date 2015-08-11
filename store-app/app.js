(function(){
	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('GalleryController', function(){
    	this.current = 0;

    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    	};
  	});

	var gems = [{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'A beautiful gem',
			images: [
					'blue-gem.jpg'	
			],
			reviews: [{
					stars:5,
					body: "I love this product!",
					author: "coolguy@me.com"

				}]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Another Beautiful Gem',
			images: [
					'red-gem.jpg'
			],
			reviews: [
				{
					stars:4,
					body: "beautiful gem colors",
					author: "email@me.com"

				}
			]
		}

	];

	app.controller("TabController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
		
})();



