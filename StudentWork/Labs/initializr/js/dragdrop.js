//select id item
	//bind dragstart inside
	//hover for item
	
//select id cart	
	//bind dragover
	//bind dragenter
	//bind drop event 
		//get data within
		
			item = $('#' + id),
			cartList = $("#cart ul"),
			total = $("#total span"),
			price = $('p:eq(1) span', item).text(),
			prevCartItem = null,
			notInCart = (function () {
				var lis = $('li', cartList),
					len = lis.length,
					i;

				for (i = 0; i < len; i++ ) {
					var temp = $(lis[i]);
					if (temp.data('id') === id) {
						prevCartItem = temp;
						return false;
					}
				}
				return true;
			
	//end curly brace for bind drop  
			
			()),
			quantLeftEl, quantBoughtEl, quantLeft;

		$("h2").fadeOut('fast');

		if (notInCart) {
			prevCartItem = $('<li />', {
				text : $('p:first', item).text(),
				data : { id : id }
			}).prepend($('<span />', {
				'class' : 'quantity',
				text : '0'
			})).prepend($('<span />', {
				'class' : 'price',
				text : price
			})).appendTo(cartList);
		}

		quantLeftEl = $('p:last span', item);
		quantLeft   = parseInt(quantLeftEl.text(), 10) - 1;
		quantBoughtEl = $('.quantity', prevCartItem);
		quantBoughtEl.text(parseInt(quantBoughtEl.text(), 10) + 1);
		quantLeftEl.text(quantLeft);

		if (quantLeft === 0) {
			item.fadeOut('fast');
		}

		total.text((parseFloat(total.text(), 10) + parseFloat(price.split('$')[1])).toFixed(2));

		evt.stopPropagation();
		return false;
	});