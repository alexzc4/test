$(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
             $("body").addClass("page-on-scroll");
        } 
        else 
        {
          $("body").removeClass("page-on-scroll");
        }
    });


$(document).ready(function(){
  $('.main-slider').slick({
    arrows:false,
  });
});

$(document).ready(function(){
  $('.part-slider').slick({
    arrows:false,
    autoplay: true,
  autoplaySpeed: 10000,
  });
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {

				$('.scroll-to-top').fadeIn(300);
			} else {

				$('.scroll-to-top').fadeOut(300);
			}
			});
		
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}
	

$('.btn-slide').click(function(){
	$('.top-menu').slideToggle(1);
	$('.fade-menu').slideToggle(1);
	$('body').toggleClass('overflow-h');
});

$('.fade-menu').click(function(){
	$('.top-menu').slideToggle(1);
	$('.fade-menu').slideToggle(1);
	$('body').toggleClass('overflow-h');
})

$(window).load(function() {
   $("#loading").fadeOut(1000);
})

$('.lang_btn').click(function(){
	$('.language_list').slideToggle(1);
})
