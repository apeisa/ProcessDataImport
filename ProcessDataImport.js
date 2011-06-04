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
						path = path + $(this).data('path');
					}
				}
			});
			$(this).append($("#fields").clone().removeAttr("id").attr('name', path));
			console.log(path);
		});
		//$(this).parent().find('a').;
		
	});
});
