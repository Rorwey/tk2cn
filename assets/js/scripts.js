jQuery(document).ready(function() {

	/*
	    Background slideshow
	*/
	now = new Date(), hour = now.getHours()
	console.log(now);
	if(hour < 4) {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba35fd4c2e3e.jpg" //-1-1
			, "https://i.loli.net/2018/09/20/5ba35fd516513.jpg" //1-3
			, "https://i.loli.net/2018/09/20/5ba360498c3af.jpg" //21-23
		], {
			duration: 3000,
			fade: 750
		});
	} else if(hour < 8) {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba35fd4c64ef.jpg" //3-5
			, "https://i.loli.net/2018/09/20/5ba35fd4e852e.jpg" //5-7
			, "https://i.loli.net/2018/09/20/5ba35fd4418ef.jpg" //7-9
		], {
			duration: 3000,
			fade: 750
		});
	} else if(hour < 12) {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba35fd4418ef.jpg" //7-9
			, "https://i.loli.net/2018/09/20/5ba3604946aa2.jpg" //9-11
			, "https://i.loli.net/2018/09/20/5ba36049b83c3.jpg" //11-13
		], {
			duration: 3000,
			fade: 750
		});
	} else if(hour < 16) {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba36049b83c3.jpg" //11-13
			, "https://i.loli.net/2018/09/20/5ba36049e7f7a.jpg" //13-15
			, "https://i.loli.net/2018/09/20/5ba36049cae2e.jpg" //15-17
		], {
			duration: 3000,
			fade: 750
		});
	} else if(hour < 20) {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba36049cae2e.jpg" //15-17
			, "https://i.loli.net/2018/09/20/5ba3604987483.jpg" //17-19
			, "https://i.loli.net/2018/09/20/5ba360497d43d.jpg" //19-21
		], {
			duration: 3000,
			fade: 750
		});
	} else {
		$('.top-content').backstretch([
			"https://i.loli.net/2018/09/20/5ba360497d43d.jpg" //19-21
			, "https://i.loli.net/2018/09/20/5ba360498c3af.jpg" //21-23
			, "https://i.loli.net/2018/09/20/5ba35fd4c2e3e.jpg" //-1-1
		], {
			duration: 3000,
			fade: 750
		});
	}

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
				if(json.valid == 0) {
					$('.success-message').hide();
					$('.error-message').hide();
					$('.error-message').html(json.message);
					$('.error-message').fadeIn('fast', function() {
						$('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
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