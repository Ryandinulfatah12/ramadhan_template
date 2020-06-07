window.addEventListener('DOMContentLoaded', () => {
	Swal.fire({
		  title: 'Ramadhan Kareem!',
		  text: 'text ucapan disini ucapan.',
		  imageUrl: 'src/img/night ramadhan.png',
		  imageWidth: 400,
		  imageAlt: 'Custom image',
		})
	console.log('DOM Fully Loaded');
})

$(document).on('click', 'a', function(){
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top -4
	}, 1250);
});

// Back To TOp
var $backTOp = $("#backTop");
$backTOp.hide();
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$backTOp.fadeIn();
	} else {
		$backTOp.fadeOut();
	}
});

$backTOp.on('click', function (e) {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
});