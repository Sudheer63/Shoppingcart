$(document).ready(function() {
				updateCartItemCount();

		    $.ajax({
		        url: 'http://localhost:8080/Shoppingcart/AllProductsServlet',
		        method: 'GET',
		        success: function(data) {
		            //$('#item').empty();
		            data = JSON.parse(data);
					console.log(data);
		            $.each(data.AllProducts, function(index, element) {
		                
		                var div='<div class="col-md-3 col-sm-4">'+
						'<div class="single-new-arrival">'+
						'<div class="single-new-arrival-bg">'+
						'<img src="../images/' + element[3] + '" alt="' + element[3] + '">'+
							'<div class="single-new-arrival-bg-overlay"></div>'+
							'<div class="new-arrival-cart">'+
								'<p>'+
									'<span class="lnr lnr-cart"></span>'+
									'<a href="#">'+element[1]+'</a>'+
								'</p>'+
								'<p class="arrival-review pull-right">'+
									'<span class="lnr lnr-heart"></span>'+
									'<span class="lnr lnr-frame-expand"></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<h4>' + element[1] + '</h4>'+
						'<p class="arrival-product-price">' + element[2] + '</p>'+
						'<div class="counter">'+
					        '<button id="inc" class="count">+</button>'+
					        '<input type="number" min="1" max="10" value=1 readonly>'+
					        '<button id="dec" class="count">-</button>'+
    					'</div>'+
						'<button class="cart" id="'+element[0]+'">Add to Cart</button>'+
					'</div>'+
				'</div>';
		                $('.row').append(div);
		            });
		        },
		        error: function(xhr, status, error) {
		            console.error('AJAX request failed:', error);
		        }
		    });
		
		});

$(document).ready(function() {
			var url = 'http://localhost:8080/Shoppingcart/CategoriesServlet';
		    $.ajax({
		        url: url,
		        method: 'GET',
		        success: function(data) {
		            //$('#category').empty();
		            data = JSON.parse(data);
		            $.each(data, function(index, element) {
		                
						var options='<option value='+element+'>'+index+'</option>';
		                $('#category').append(options);
		            });
		        },
		        error: function(xhr, status, error) {
		            console.error('AJAX request failed:', error);
		        }
		    });
		
		});
		
$(document).on('change', '#category', function() {
		    		var scv=$("#category").val();
					console.log(scv)
				     $.ajax({
				        url: 'http://localhost:8080/Shoppingcart/AllProdByIdServlet',
				        method: 'GET',
						data: {val:scv},
				    success: function(data) {
		            $('.row').empty();
		            data = JSON.parse(data);
					console.log(data);
		            $.each(data.AllProducts, function(index, element) {
		                
		                var div='<div class="col-md-3 col-sm-4">'+
						'<div class="single-new-arrival">'+
						'<div class="single-new-arrival-bg">'+
						'<img src="../images/' + element[3] + '" alt="' + element[3] + '">'+
							'<div class="single-new-arrival-bg-overlay"></div>'+
							'<div class="new-arrival-cart">'+
								'<p>'+
									'<span class="lnr lnr-cart"></span>'+
									'<a href="#">'+element[1]+'</a>'+
								'</p>'+
								'<p class="arrival-review pull-right">'+
									'<span class="lnr lnr-heart"></span>'+
									'<span class="lnr lnr-frame-expand"></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<h4>' + element[1] + '</h4>'+
						'<div class="counter">'+
					        '<button id="inc" class="count">+</button>'+
					        '<input type="number" min="1" max="10" value=1 readonly>'+
					        '<button id="dec" class="count">-</button>'+
    					'</div>'+
						'<p class="arrival-product-price">' + element[2] + '</p>'+
						'<button class="cart" id="'+element[0]+'">Add to Cart</button>'+
					'</div>'+
				'</div>';
		                $('.row').append(div);
		            });
		        },
				        error: function(xhr, status, error) {
				            console.error('AJAX request failed:', error);
				        }
				    });		
				    
				    });
 $(document).on('click', '.single-new-arrival #inc', function() {
  
    var inputElement = $(this).closest('.single-new-arrival').find('input');
    var currentValue = parseInt(inputElement.val());

    
    if (!isNaN(currentValue) && currentValue<=9) {
        var newValue = currentValue + 1;
        inputElement.val(newValue);
    }
});


$(document).on('click', '.single-new-arrival #dec', function() {
   
    var inputElement = $(this).closest('.single-new-arrival').find('input');
    var currentValue = parseInt(inputElement.val());

   
    if (!isNaN(currentValue) && currentValue > 1) {
        var newValue = currentValue - 1;
        inputElement.val(newValue);
    }
});

$(document).on('click', '.single-new-arrival .cart', function() {
   
    var itemCard = $(this).closest('.single-new-arrival');
    var itemname = itemCard.find('h4').text();
    var itemprice = itemCard.find('.arrival-product-price').text();
    var itemCard2 = itemCard.find('.single-new-arrival-bg');
    var itemimage = itemCard2.find('img').attr('src');
    var itemQuantity=itemCard.find('input').val();
    
    console.log(itemname + " " + itemprice + " " + itemimage+" "+itemQuantity);
     var itemData = {
        itemname: itemname,
        itemprice: itemprice,
        itemimage: itemimage,
        itemQuantity: itemQuantity
    };

	var productId=$(this).attr('id');

    var itemJSON = JSON.stringify(itemData);

    localStorage.setItem(productId, itemJSON);
	
	updateCartItemCount();

    console.log('Item added to cart:', itemname);
    window.alert("Added");
    
});
function updateCartItemCount() {
   
    $('.cart-icon .badge').text(localStorage.length);
}

  $(document).ready(function () { 
            $(".cart").click(function () { 
                alert("This is an alert message!"); 
            }); 
        });
$(document).on('change', '#sort', function() {
					console.log("ook");
		    		var scv=$("#category").val();
		    		var ssv=$("#sort").val();
					console.log(scv+" "+ssv)
				     $.ajax({
				        url: 'http://localhost:8080/Shoppingcart/SortProdServlet',
				        method: 'GET',
						data: {'val1':scv,'val2':ssv},
				    success: function(data) {
		            $('.row').empty();
		            data = JSON.parse(data);
					console.log(data);
		            $.each(data.AllProducts, function(index, element) {
		                
		                var div='<div class="col-md-3 col-sm-4">'+
						'<div class="single-new-arrival">'+
						'<div class="single-new-arrival-bg">'+
						'<img src="../images/' + element[3] + '" alt="' + element[3] + '">'+
							'<div class="single-new-arrival-bg-overlay"></div>'+
							'<div class="new-arrival-cart">'+
								'<p>'+
									'<span class="lnr lnr-cart"></span>'+
									'<a href="#">'+element[1]+'</a>'+
								'</p>'+
								'<p class="arrival-review pull-right">'+
									'<span class="lnr lnr-heart"></span>'+
									'<span class="lnr lnr-frame-expand"></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<h4>' + element[1] + '</h4>'+
						'<div class="counter">'+
					        '<button id="inc" class="count">+</button>'+
					        '<input type="number" min="1" max="10" value=1 readonly>'+
					        '<button id="dec" class="count">-</button>'+
    					'</div>'+
						'<p class="arrival-product-price">' + element[2] + '</p>'+
						'<button class="cart" id="'+element[0]+'">Add to Cart</button>'+
					'</div>'+
				'</div>';
		                $('.row').append(div);
		            });
		        },
				        error: function(xhr, status, error) {
				            console.error('AJAX request failed:', error);
				        }
		});		
				    
});




