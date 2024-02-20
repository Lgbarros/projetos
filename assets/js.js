// FIXED MENU WHEN SCROLL //

  document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {

			if (window.scrollY > 200) {
				document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').classList.remove('bg-dark');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById("navbar_top").classList.add("bg-dark");
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	}); 

//  SCROLL TO TOP //
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 100);
});

// SCROLL TO TOP WHEN CLICK ON LOGO //

var btn = $('#logo-click');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// FIX ACTIVE MENU WHEN CLICK //

$(".nav-link").on("click", function(){
	$(".nav-link.active").removeClass("active");
	$(this).addClass("active");
});

var mySwiper = new Swiper('.swiper-container', {
observer: true,
observeParents: true,
  //autoplay: true,
  speed: 200,
  loop: true,
  slidesPerView:5,
  spaceBetween: 15,
  slidesPerGroup: 1,
 pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

  breakpoints: {
  960: { 
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    720: { 
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup:1,
    }
  }
})