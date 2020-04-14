$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
  });
});

$(document).ready(function(){

  $('.tab_item').not(':first').hide();
  $('.tabs_conteiner .tab').click(function(){
    $('.tabs_conteiner .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.tab_item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');
});
$(document).ready(function(){
				$(".group1").colorbox({rel:'group1'});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});
			});