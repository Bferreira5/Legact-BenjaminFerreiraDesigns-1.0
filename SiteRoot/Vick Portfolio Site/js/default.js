(function($) {
$(function () {

	/* Preloader */

	var loadedImages = 0,
	images =[
		"stylesheets/assets/vic_logo1.jpg",
		
			];

	function updateProgress() {
		if (++loadedImages == images.length) return masterCallback();
		var percent = loadedImages * 100 / images.length;
		$('.loader').css('width', percent + '%');
		$('.percent').text(percent +'%');
	}
	/* IE7&8 on load stuck issue fix 24.09.2012 */
	$(window).load( function() {
		masterCallback();
	});
	/* End of IE7&8 on load stuck issue fix 24.09.2012 */
	
	function masterCallback() {
		$('.overlay').fadeOut();
	}

	$.each(images, function(i, src) {
		var img = new Image();
		img.onload = img.onerror = updateProgress;
		img.src = src;
	});

	var inmotion;
	
	function dimensiuni() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var lungime = ((windowWidth - 20)/156);
		var lungimeReal = Math.floor(lungime) * 156;
		$(".projectDtl .items div").css("width", windowWidth).css("height", windowHeight);	
		$(".linesH, #footer").css("width", lungimeReal);
	};
	
	dimensiuni();

	$(".items div").each(function() {
		if(!$(this).hasClass('visible')){
			$(this).css('display', 'none');
		}
	});

	function updateInactives() {
		// Offset inactive slides by their current width		
		$(".projectDtl").each(function() {
			if(!$(this).hasClass('active')){
				$(this).css('display', 'none');
			}
		});
	}
	updateInactives();
	
	$(window).resize(function() {
		setTimeout(dimensiuni, 200);
	});

	$(".leftCol div").each(function(){
		var whatProject = $(this).attr("class");
		var countImgs = $("#" + whatProject + " .items div").length;
		$(this).find(".ofy").html(countImgs);
		startImg = 1;
		
		$(this).find(".next").click(function(){
			if(inmotion) return false;
			else inmotion = true;

			if (startImg == countImgs) {
				if (($(".vixen").is(":visible")) && ($(".vixen02").hasClass("visible"))) {
					$("#cardinal").find(".items div").removeClass("visible");
					$("#cardinal").find(".items div:first").addClass("visible");
					$("#cardinal").find(".items div").each(function() {
						if(!$(this).hasClass('visible')){
							$(this).fadeOut(900);
						} else {
							$(this).fadeIn(1000);
						}
					});

					$(".projects li").removeClass("active");
					$('.projects li a').each(function(){
						if($(this).attr("href") == 'cardinal') {
							$(this).parent().addClass("active");
						}
					});
					$(".projectDtl.active").fadeOut(900).removeClass("active");
					$('#cardinal').fadeIn(1000, function(){
						updateInactives();
						inmotion = false;
					}).addClass("active");
					$(".leftCol div").hide();
					$(".leftCol div.cardinal").show();
					startImg = 1;
					$(".cardinal").find(".xof").html(startImg);
				} else {
					$("#" + whatProject + "").next().find(".items div").removeClass("visible");
					$("#" + whatProject + "").next().find(".items div:first").addClass("visible");
					$("#" + whatProject + "").next().find(".items div").each(function() {
						if(!$(this).hasClass('visible')){
							$(this).fadeOut(900);
						} else {
							$(this).fadeIn(1000);
						}
					});
					
					$(".projects li").removeClass("active");
					$('.projects li a').each(function(){
						if($(this).attr("href") == whatProject) {
							$(this).parent().next().addClass("active");
						}
					});
					$(".projectDtl.active").stop().fadeOut(900).removeClass("active");
					$('#' + whatProject + '').next().stop().fadeIn(1000, function(){
						updateInactives();
						inmotion = false;
					}).addClass("active");
					$(".leftCol div").hide();
					$(".leftCol div." + whatProject + "").next().show();
				};
				startImg = 1;
				$("." + whatProject + "").next().find(".xof").html(startImg);
			} else {
				$("#" + whatProject + " .items div.visible").stop().fadeOut(900).removeClass("visible").next().fadeIn(1000, function(){
					//updateInactives();
					inmotion = false;
				}).addClass("visible");
				startImg += 1;
				$(this).parent().find(".xof").html(startImg);
			}
			return false;
		});
		
		$(this).find(".prev").click(function(){
			if(inmotion) return false;
			else inmotion = true;

			if (startImg == 1) {
				if (($(".cardinal").is(":visible")) && ($(".cardinal01").hasClass("visible"))) {
					// nimic, suntem la capat
					inmotion = false;
					return false;
				} else {
					$("#" + whatProject + "").prev().find(".items div").removeClass("visible");
					$("#" + whatProject + "").prev().find(".items div:last").addClass("visible");
					$("#" + whatProject + "").prev().find(".items div").each(function() {
						if(!$(this).hasClass('visible')){
							$(this).fadeOut(900);
						} else {
							$(this).fadeIn(1000);
						}
					});

					$(".projects li").removeClass("active");
					$('.projects li a').each(function(){
						if($(this).attr("href") == whatProject) {
							$(this).parent().prev().addClass("active");
						}
					});
					$(".projectDtl.active").fadeOut(900).removeClass("active");
					$('#' + whatProject + '').prev().stop().fadeIn(1000, function(){
						updateInactives();
						inmotion = false;
					}).addClass("active");
					$(".leftCol div").hide();
					$(".leftCol div." + whatProject + "").prev().show();
				};
				startImg = $("#" + whatProject + "").prev().find(".items div").length;
				$("." + whatProject + "").prev().find(".xof").html(startImg);
			} else {
				$("#" + whatProject + " .items div.visible").stop().fadeOut(900).removeClass("visible").prev().fadeIn(1000, function(){
					//updateInactives();
					inmotion = false;
				}).addClass("visible");
				startImg -= 1;
				$(this).parent().find(".xof").html(startImg);
			}
			return false;
		});
		
	});

	$(".projects a").click(function(){
		startImg = 1;

		var showMe = $(this).attr("href");
		if ($(this).parent().hasClass('active')) {
			return false;
		} else {
			$("." + showMe + "").find(".xof").html(startImg);
			$("#" + showMe + "").find(".items div").removeClass("visible");
			$("#" + showMe + "").find(".items div:first").addClass("visible");
			$("#" + showMe + "").find(".items div").each(function() {
				if(!$(this).hasClass('visible')){
					$(this).fadeOut();
				} else {
					$(this).fadeIn();
				}
			});

			$(".projects li").removeClass("active");
			$('.projects li a').each(function(){
				if($(this).attr("href") == showMe) {
					$(this).parent().addClass("active");
				}
			});
			
			$(".projectDtl.active").stop().fadeOut(900).removeClass("active");

			$('#' + showMe + '').stop().fadeIn(1000, function(){
				updateInactives();
			}).addClass("active");
			$(".leftCol div").hide();
			$(".leftCol div." + showMe + "").show();
		}
		return false;
	});
	
	
	$(".showAbout").click(function(){
		$("#contact").fadeOut();
		$("#about").fadeIn();
		return false;
	});
	
	$(".showContact").click(function(){
		$("#contact").fadeIn();
		$("#about").fadeOut();
		return false;
	});
	
	$(".closeOver").click(function(){
		$("#about, #contact").fadeOut();
		return false;
	});
	
})
})(jQuery);// JavaScript Document