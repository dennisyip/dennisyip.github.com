$( document ).ready(function() {
 
   //alert( "Thanks for visiting!" );

   $('.details').on("click", function() {
		$(this).parent().find('.description').slideToggle();

	});

   $("img").click(function() {
 		$("img").fadeOut("slow");
 	});

   $(".eu-toggle").on("click",function(){
   		$(".eu").show();
   		$(".us").hide();
   })
   $(".us-toggle").on("click", function(){
   		$(".us").show();
   		$(".eu").hide();
   })


var cart = [];

$(".addtocart").on("click", function(){
      var productClass = $(this).closest(".product");
      var nameOfProduct = productClass.find("h2").text();
      var skuOfProduct = productClass.data("sku");

      if ($(".us").is(":visible")){
            var priceOfProduct = productClass.find(".us").text();
      } else{
            var priceOfProduct = productClass.find(".eu").text();
      }

      priceOfProduct = priceOfProduct.slice(1,3);
      priceOfProduct = parseFloat(priceOfProduct);

      var cartItem = { name: nameOfProduct,
                        sku: skuOfProduct,
                        price: priceOfProduct,
                        quantity: 1 };


      // Use JSON method to convert to string
        var cartArrayString = JSON.stringify(cart);

        //Use indexOf of the string to see if the object already exists in array. If so push cartItem.
        if (cartArrayString.indexOf(skuOfProduct) === -1 || cart.length === 0){
                        cart.push(cartItem);
        } else {
      //Use grep to search array and find where sku matches button click. Add one to quantity of found object.
                var cartSearch = $.grep(cart, function(n, i){
                        if (n.sku === skuOfProduct) {
                                n.quantity++;
                        }
                });
        }

        
        function refreshCart(){
                total = 0;        
                $("#cart").empty();

                for(var i = 0; i < cart.length; i++) {
                                 var cartItem = cart[i];
                                 var quantity = cartItem.quantity;
                                 var price = cartItem.price;
                                 var name = cartItem.name;
                                 var sku = cartItem.sku;
                                 var itemDiv = $("<div>").addClass("cart-item");

                                 var skuString = $(".cart-item").children(".sku-text").text();

                                 var priceText = $("<div>").addClass("cart-price").text("$" + price + " x " + quantity);
                                 var nameText = $("<p>").text(name);
                                 var skuText = $("<p>").addClass("sku-text").text(sku);
                                 var itemText = $(itemDiv).append(priceText).append(nameText).append(skuText);

                                $("#cart").append(itemText);

                                total += quantity * price;

                } //end of for loop

        }

        refreshCart();
        
                if ($(".us").is(":visible")){
                        $(".cart-total").text("Total $" + total);
                } else {
                        $(".cart-total").text("Total \u20AC" + total);
                }

   }); //end of on click function



});