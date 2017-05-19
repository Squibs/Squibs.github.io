// Flip Cards
function rotateCard(btn){
	var $card = $(btn).closest('.card-container');

	// console.log($card);

	if($card.hasClass('hover')){
		$card.removeClass('hover');
	} else {
		$card.addClass('hover');
	}
}

// Form Floating Label
$('input, textarea').on('focus blur', function (e) {
	$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$(function() {
	$(".navbar-nav a").on("click", function() {
		$(".navbar-nav").find(".active").removeClass("active");
		$(this).addClass("active");
	})
});

// Navbar background color based on section
var top1 = $('#Home').offset().top - 56;
var top2 = $('#About').offset().top - 56;
var top3 = $('#Projects').offset().top - 56;
var top4 = $('#Contact').offset().top - 56;

$(document).scroll(function() {
	if ($(document).scrollTop() >= top1 && $(document).scrollTop() < top2) {
		$('#Nav').css('background-color', '#DAF1FF');
		$('#Nav').removeClass("navbar-inverse");
		$('.navbar-nav').children().removeClass("active");
		$('.nav-home').addClass("active");
	} else if ($(document).scrollTop() >= top2 && $(document).scrollTop() < top3) {
		$('#Nav').css('background-color', '#165F88');
		$('#Nav').addClass("navbar-inverse");
		$('.navbar-nav').children().removeClass("active");
		$('.nav-about').addClass("active");
	} else if ($(document).scrollTop() >= top3 && $(document).scrollTop() < top4) {
		$('#Nav').css('background-color', '#2581B2');
		$('.navbar-nav').children().removeClass("active");
		$('.nav-projects').addClass("active");
	} else if ($(document).scrollTop() >= top4) {
		$('#Nav').css('background-color', '#3696C9');
		$('.navbar-nav').children().removeClass("active");
		$('.nav-contact').addClass("active");
	}
});

