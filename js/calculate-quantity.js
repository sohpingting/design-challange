$(document).ready(function() {
    
    $('#add-quantity').click(addQuantity);
    $('#minus-quantity').click(minusQuantity);
    $('#change-quantity').keyup(changeQuantity);
    
    
    //Detect keyup  event for #add-quantity and update the quanity in #quantity and payable amount in #total
    function addQuantity(){
		//console.log("add pressed");
		
		var quantity = parseInt($('#change-quantity').val());
		var payable = parseFloat($('#price').val()).toFixed(2);
		
		//console.log("Quantity is ", quantity) 
		//console.log("payable is ", payable)
		
		if (quantity >= 1) {
			quantity++;
			//console.log("Quantity is now", quantity) 
			$('#change-quantity').val(quantity);
		
			payable = $('#price').val() * quantity;
			$('#price-payable-amount').text(payable.toFixed(2));
	    
		} else {
			 $('#change-quantity').val('1');	 
			$('#price-payable-amount').text(payable);
		};
		
		 $('#add-quantity').focusout();
	};
	
	//Detect keyup  event for #minus-quantity and update the quanity in #quantity and payable amount in #total
	
	function minusQuantity(){
		//console.log("minus pressed");
		
		var quantity = parseInt($('#change-quantity').val());
		var payable = parseFloat($('#price').val()).toFixed(2);
		
		//console.log("Quantity is ", quantity) 
		//console.log("payable is ", payable)
		
		if (quantity > 1) {
			quantity--;
			//console.log("Quantity is now", quantity) 
			$('#change-quantity').val(quantity);
		
			payable = $('#price').val() * quantity;
			$('#price-payable-amount').text(payable.toFixed(2));
	    
		} else {
			 $('#change-quantity').val('1');	 
			$('#price-payable-amount').text(payable);
		};
		
		$('#minus-quantity').focusout();
	};
	
	//Detect keyup  event for #quantity and update the quantity in payable amount in #total
	function changeQuantity(){
		console.log("Quantity changed");
		
		var quantity = parseInt($('#change-quantity').val());
		var payable = parseFloat($('#price').val()).toFixed(2);
		
		if(isNaN(quantity)) {
			quantity = 1
		};
		
		console.log("Quantity is ", quantity) 
		console.log("payable is ", payable)
		
		if (quantity >= 1) {
			payable = $('#price').val() * quantity;
			$('#price-payable-amount').text(payable.toFixed(2));
		} else {
			$('#change-quantity').val('1');
			$('#price-payable-amount').text(payable);

		};
	};
});