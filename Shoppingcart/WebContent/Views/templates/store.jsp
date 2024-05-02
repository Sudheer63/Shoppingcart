<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en">

    <head>
        <!-- meta data -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!--font-family-->
		<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
        
        <!-- title of site -->
        <title>ShopAll</title>
        
        <!--style.css-->
        <link rel="stylesheet" href="../css/style.css">
        
        <!--bootstrap cdn link-->
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    	<script src="../javascript/script.js"></script>
    </head>
	
	<body>
		<!--new-arrivals start -->
		<section id="new-arrivals" class="new-arrivals">
			<div class="container">
				<div class="section-header">
					<h2>Products</h2>
				</div>
				<div class="first">
				<div>
					 <span style="display: inline-block; margin-bottom: 10px;">
        					<h3 style="margin: 0;">Categories</h3>
    				</span>
				    <span style="display: inline-block; background-color: grey; width: 180px; height: 40px; border-radius: 5px; color: white;">
				        <select style="width: 100%; height: 100%;border-radius:5px; background-color:grey; color: white;" id="category">
				            <option value="0" >All Products</option>
				        </select> 
				    </span>
				</div>
				<div>
					 <span style="display: inline-block; margin-bottom: 10px;">
        					<h3 style="margin: 0;">Sort By</h3>
    				</span>
				    <span style="display: inline-block; background-color: grey; width: 180px; height: 40px; border-radius: 5px; color: white;">
				        <select style="width: 100%; height: 100%;border-radius:5px; background-color:grey; color: white;" id="sort">
				            <option value="0" >select option</option>
							<option value="1" >High-Low</option>
							<option value="2" >Low-High</option>
				        </select> 
				    </span>
				    </div>
				<div class="cart-icon">
    						<a href="cart.jsp"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIxvCHpV8MJPZSHlR4xA5PrDLEIN3tN7B-w&usqp=CAU" class="fa-shopping-cart"></a>
    		<p class="badge">0</p>
				</div>
			</div>	
				<div class="new-arrivals-content">
					<div class="row"></div>
			</div>
			</div>			
		</section>
    </body>
    <script></script>
	
</html>