jQuery(document).ready(function() {

	var imgArr = ["https://s1.ax1x.com/2020/07/20/U4oDk4.jpg" //23-1
		,"https://s1.ax1x.com/2020/07/20/U4o5Ae.jpg" //1-3
		,"https://s1.ax1x.com/2020/07/20/U4ow0U.jpg" //3-5
		,"https://s1.ax1x.com/2020/07/20/U4o07F.jpg" //5-7
		,"https://s1.ax1x.com/2020/07/20/U4ortJ.jpg" //7-9
		,"https://s1.ax1x.com/2020/07/20/U4og6x.jpg" //9-11
		,"https://s1.ax1x.com/2020/07/20/U4oWnK.jpg" //11-13
		,"https://s1.ax1x.com/2020/07/20/U4oohd.jpg" //13-15
		,"https://s1.ax1x.com/2020/07/20/U4oItH.jpg" //15-17
		,"https://s1.ax1x.com/2020/07/20/U4of0O.jpg" //17-19
		,"https://s1.ax1x.com/2020/07/20/U4oh7D.jpg" //19-21
		,"https://s1.ax1x.com/2020/07/20/U4o2X6.jpg" //21-23
	];
	
	/*
	    Background slideshow
	*/
	var now = new Date();
	// var hour = now.getHours();
	// console.log(now);
	// var k=Math.ceil(hour/2)%12;
	var k=getSign();
	$('.top-content').backstretch([
		imgArr[k],imgArr[(k+1)%12],imgArr[(k-1+12)%12]
	], {
		duration: 3000,
		fade: 750
	});

	$('#top-navbar-1').on('shown.bs.collapse', function() {
		$('.top-content').backstretch("resize");
	});
	$('#top-navbar-1').on('hidden.bs.collapse', function() {
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
				if (json.valid == 0) {
					$('.success-message').hide();
					$('.error-message').hide();
					$('.error-message').html(json.message);
					$('.error-message').fadeIn('fast', function() {
						$('.subscribe form').addClass('animated shake').one(
							'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
							function() {
								$(this).removeClass('animated shake');
							});
					});
				} else {
					$('.error-message').hide();
					$('.success-message').hide();
					$('.subscribe form').hide();
					$('.success-message').html(json.message);
					$('.success-message').fadeIn('fast', function() {
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
