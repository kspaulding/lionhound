$(document).foundation();

document.body.addEventListener('touchstart',function(){},false);

/* Fit Text */

$("h4.fitext").fitText(2.3, { minFontSize: '16px' });
$(".intro p").fitText(2.7, { minFontSize: '24px', maxFontSize: '30px' });

$(document).ready(function(){
  $('#main').addClass('loaded');
});

$(document).ready(function() {     
    $('#ridgeback-act').hover(function(){     
        $('#bg-fill, #h1').addClass('show-me');    
    },     
    function(){    
        $('#bg-fill, #h1').removeClass('show-me');     
    });
}); 


/* Menu Icon Toggle */

$(document).ready(function(){
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
	});
});


/* Add Scrolled Class to Main Nav */

$(function() {
  var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('clearHeader').addClass("scrolled");
        } else {
            header.removeClass("scrolled").addClass('clearHeader');
        }
    });
});

var $grid = $('.work-grid').masonry({
  itemSelector: '.cell',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$('.grid').masonry({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  // use element for option
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});
});  



if ( $(window).width() > 739) {      
	$(document).bind('mousemove', function(e){
	    $('#tail-prev').css({
	        left: e.pageX + 0,
	        top: e.pageY - 36
	    });
	});
	$(document).bind('mousemove', function(e){
	    $('#tail-next').css({
	        left: e.pageX - 144,
	        top: e.pageY - 36
	    });
	});

	$(document).ready(function() {     
	    $('.prev-wrap').hover(function(){     
	        $('#tail-prev').addClass('show');    
	    },     
	    function(){    
	        $('#tail-prev').removeClass('show');     
	    });
	});  

	$(document).ready(function() {     
	    $('.next-wrap').hover(function(){     
	        $('#tail-next').addClass('show');    
	    },     
	    function(){    
	        $('#tail-next').removeClass('show');     
	    });
	});
} 


