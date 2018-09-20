
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch([
	                     "assets/img/backgrounds/01.jpg"
	                   , "assets/img/backgrounds/02.jpg"
	                   , "assets/img/backgrounds/03.jpg"
	                   , "assets/img/backgrounds/04.jpg"
	                   , "assets/img/backgrounds/05.jpg"
	                   , "assets/img/backgrounds/06.jpg"
	                   , "assets/img/backgrounds/07.jpg"
	                   , "assets/img/backgrounds/08.jpg"
	                   , "assets/img/backgrounds/09.jpg"
	                   , "assets/img/backgrounds/10.jpg"
	                   , "assets/img/backgrounds/11.jpg"
	                   , "assets/img/backgrounds/12.jpg"
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
