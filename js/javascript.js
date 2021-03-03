
$(window).scroll(function(e){
  parallax();
  showImages('.showFade');
});
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 300 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image


// if the image in the window of browser when scrolling the page, show that image
function parallax(){
  var scrolled = $(window).scrollTop();
  $('section.product').css('background-position-y',"-550" -(scrolled*0.25));
}


function moveToHash() {
    var locationHash = location.href.split("#", 2)[1];
    var target = $("[name=" + locationHash + "]");
    var menuheight = $('.menu').innerHeight();

    if (locationHash != undefined && (locationHash.indexOf("download") > -1 || locationHash.indexOf("compatibility") > -1 || locationHash.indexOf("features") > -1)) {
        $('html,body').animate({
            scrollTop: target.offset().top - menuheight
        }, 1000);

        $(".menu").removeClass("visina");
    }
};

$(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});

$(document).ready(function (){
	showImages('.showFade');
    var vidLink = document.getElementById('videoLink');
    if (vidLink != null) {
        vidLink.addEventListener('click', playVideo);

        if (window.location.href.indexOf("#justwalkaway") > -1) {
            var event = new Event('playVideo');
            playVideo(event);
        }
    }

    moveToHash(); 
	
	$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
	  navigation: true,
    navigationText: [
      "<img src='img/success-previous-button.svg' class='prev rotate180'>",
      "<img src='img/success-previous-button.svg' class='next'>"
      ],
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
  $("#owl-demo-news").owlCarousel({
autoPlay: 5000,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
});
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
}); 
});

var tablet = 864;

$(function () {

    $(".mobilenav").click(function () {
        $(".menu").toggleClass("visina").not("active").addClass("active");
        return false;
    });

//    $(".share-hover")
//        .hover(function () {
//            $("#share-hov").animate({
//                visibility: hidden
//            });
//        }, function () {
//            $("#share-hov").animate({
//                visibility: visible
//            });
//        });

//	$(".download.mac").bind('click', function() {
//	   alert('By downloading Near Lock you are agreeing to the Near Lock Terms of Use');
//	});

    var menuheight = $('.menu').innerHeight();

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - menuheight
                }, 1000);
                $(".menu").removeClass("visina");
                return false;
            }
        }
    });
});

var fixed = false;
var tablet = 864;

$(document).scroll(function () {
    if ($(window).width() > tablet && $(this).scrollTop() >= 50) {
        if (!fixed) {
            fixed = true;
            $(".menu").addClass("active");
        }
    } else {
        if (fixed) {
            fixed = false;
            $(".menu").removeClass("active");
        }
    }

    var y_scroll_pos = window.pageYOffset + $(window).height();

    var position_menubar = $(".menubar").offset().top + $(".menubar").height();
    var position_widget = $(".widgetiphone").offset().top + $(".widgetiphone").height();

    if (y_scroll_pos > position_menubar) {
        $(".menubar .slika").animate({
            'background-position-x': '100%',
            'background-position-y': '0em',
            'border-color': 'transparent'
        }, 2000, 'easeOutQuad')
    }

	if (y_scroll_pos > position_widget) {
	    $(".widgetblur1").animate({'height': '27.344em'}, 2000, 'easeOutQuad');
	    $(".widgetblur2").animate({'margin-top': '0em'}, 2000, 'easeOutQuad');
    }
});