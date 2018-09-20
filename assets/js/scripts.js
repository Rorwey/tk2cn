
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch([
	                     "https://i.loli.net/2018/09/20/5ba35fd4c2e3e.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba35fd516513.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba35fd4c64ef.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba35fd4e852e.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba35fd4418ef.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba3604946aa2.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba36049b83c3.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba36049e7f7a.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba36049cae2e.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba3604987483.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba360497d43d.jpg"
	                   , "https://i.loli.net/2018/09/20/5ba360498c3af.jpg"
	                  ], {duration: 3000, fade: 750});
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
    
    /*
	    Countdown initializer
	*/
	var now = new Date();
	// var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf(); 
	var countTo = 22 * 24 * 60 * 60 * 1000 + now.valueOf();   
	siteTime();
//	$('.timer').countdown(countTo, function(event) {
//		$(this).find('.days').text(event.offset.totalDays);
//		$(this).find('.hours').text(event.offset.hours);
//		$(this).find('.minutes').text(event.offset.minutes);
//		$(this).find('.seconds').text(event.offset.seconds);
//	});
    	
	/*
	    Subscription form
	*/	
	$('.subscribe form').submit(function(e) {
		e.preventDefault();
	    var postdata = $('.subscribe form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/subscribe.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.valid == 0) {
	                $('.success-message').hide();
	                $('.error-message').hide();
	                $('.error-message').html(json.message);
	                $('.error-message').fadeIn('fast', function(){
	                	$('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	            			$(this).removeClass('animated shake');
	            		});
	                });
	            }
	            else {
	                $('.error-message').hide();
	                $('.success-message').hide();
	                $('.subscribe form').hide();
	                $('.success-message').html(json.message);
	                $('.success-message').fadeIn('fast', function(){
	                	$('.top-content').backstretch("resize");
	                });
	            }
	        }
	    });
	});

});


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
});
