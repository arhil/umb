$('.carousel').carousel({
	pause : "false" 
});
// =====================================
// 				 navigasi
// =====================================
$(document).ready(function(){
  // Tambahkan bergulir mulus ke semua link di navbar + link footer
  $(".to-top a").on('click', function() {
    	// Store hash
    	var hash = this.hash;

    	// Menggunakan bernyawa jQuery () metode untuk menambahkan halaman halus gulir
    	//Jumlah opsional (1000) menentukan jumlah milidetik dibutuhkan untuk menggulir ke area yang ditentukan
	 	$('html, body').animate({
	      	scrollTop: $(hash).offset().top
	    }, 1000, function(){

      // Tambahkan hash (#) ke URL bila dilakukan bergulir (default perilaku klik)
    });
  });
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	if (wScroll >= 100) {
		$('.navbar').addClass('fixed-top');
		$('.navbar').addClass('navanim');
		$('.to-top').fadeIn();
	}
	else{
		$('.to-top').fadeOut();
		$('.navbar').removeClass('fixed-top');
		$('.navbar').removeClass('navanim');
	}
  	console.log(wScroll);
});
  // console.log($(window).height());
  // console.log($(window).width());
