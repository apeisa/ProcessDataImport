$(document).ready(function() {
	$li = $("ul.di li div");
	$li.live("click", function(){
		$("ul.di li").removeClass("active");
		$(this).parent().addClass("active");
		$("ul.di select").remove();
		
		// We look for each value field there is (values are only a tags in the list)
		$(this).parent().find('a').each(function(){
			var path = '';
			
			// We look the parents of that value field
			$(this).parents().each(function(){
				
				// And we are interested only to our "root", so we end this loop when we go upper
				if($(this).hasClass("active")) {
					return false;
				} else {
					
					// And finally we save the data-path so that we know how to find this value
					if($(this).data('path')) {
						path = $(this).data('path') + path;
					}
				}
			});
			$(this).append($("#fields").clone().removeAttr("id").attr('name', 'fields['+path+']'));
			console.log(path);
		});
		
		
		
		
		
		
		//$(this).parent().find('a').;
		
	});
	
	$('#map').submit(function(){
		$(this).find('select option:selected').each(function(){
			//alert($(this).value);
			if ($(this).text() == '') {
				$(this).parent().remove();
			}
		});
		var data_root = $("ul.di li.active").data('path');
		
		$("ul.di li.active").parents().each(function(){
			if ($(this).data('path') == undefined) {
				// only items with data-path attr
			} else {
				data_root = data_root + $(this).data('path');
			}
		});
		
		$('<input type="hidden" name="data_root" value="'+data_root+'"></input>').appendTo('#map');
	});	
});
