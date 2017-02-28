$(document).ready(function () {

    /************** Navigation Scripts **************/

    // Shrink nav on scroll

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('nav').addClass('shrink-nav');
        } else {
            $('nav').removeClass('shrink-nav');
        }
    });

    // Mobile Toggle Control

    $('.mobile-toggle').click(function () {
        $('nav').toggleClass('open-nav');
    });

    $('.has-dropdown').click(function () {
        if ($('.mobile-toggle').is(":visible")) {
            if ($(this).children('.subnav').hasClass('open-nav')) {
                $(this).children('.subnav').removeClass('open-nav');
            } else {
                $('.subnav').removeClass('open-nav');
                $(this).children('.subnav').addClass('open-nav');
            }
        }
    });


    // Inner links

    $('.inner-link').smoothScroll({
        speed: 900,
        offset: -68
    });

    // Disable default behaviour on href='#' links

    $('a').click(function () {
        if ($(this).attr('href') === '#') {
            return false;
        }
    });

    /************** Slider Scripts **************/

    // Initialize Sliders

    $('.hero-slider').flexslider({
        start: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').addClass('animatedd fadeInUp');
            });
        },
        before: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').removeClass('animatedd fadeInUp');
            });
        },
        after: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').addClass('animated fadeInUp');
            });
        }
    });

    $('.testimonials-slider').flexslider({
        directionNav: false
    });

    $('.slider').flexslider({});

    $('.clients-slider').flexslider({
        animation: "slide",
        minItems: 1,
        maxItems: 5,
        itemWidth: 50,
        itemMargin: 0,
        move: 1,
        directionNav: false,
        controlNav: false
    });

    $('.work-carousel').flexslider({
        animation: "slide",
        minItems: 3,
        maxItems: 3,
        itemWidth: 350,
        itemMargin: 0,
        move: 1,
        controlNav: false
    });



    // Adjust slide height for .slider-fullscreen sliders

    $('.slider-fullscreen .slides li').each(function () {
        $(this).css('height', $(window).height());
    });

    $('.slides li').each(function () {

        // Append background-image <img>'s as li item CSS background for better responsive performance

        if ($(this).children('.background-image').length) {
            var imgSrc = jQuery(this).children('.background-image').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.background-image').remove();
            $(this).css('background-position', '50% 0%');
            // Check if the slider has a color scheme attached, if so, apply it to the slider nav

        }

        // Center Slide Content vertically

        if ($('.overlay-nav').length && !$('nav').hasClass('nav-transparent')) {
            $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2) + $('.overlay-nav').height());
        } else {
            $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2));
        }

    });

    $(window).resize(function () {

        $('.slides li').each(function () {
            if ($('.overlay-nav').length && !$('nav').hasClass('nav-transparent')) {
                $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2) + $('.overlay-nav').height());
            } else {
                $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2));
            }

        });
    });



    // Adjust the slide heights for fullscreen slider class

    $('.slider-fullscreen .slides li').each(function () {
        $(this).css('height', $(window).height());
    });

    $(window).resize(function () {
        $('.slider-fullscreen .slides li').each(function () {
            $(this).css('height', $(window).height());
        });
    });

    /************** Divider Scripts **************/

    $('.divider-background').each(function () {

        // Append background-image <img>'s as li item CSS background for better responsive performance

        if ($(this).children('.background-image').length) {
            var imgSrc = jQuery(this).children('.background-image').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.background-image').remove();
            $(this).css('background-position', '50% 0%');
            // Check if the slider has a color scheme attached, if so, apply it to the slider nav

        }

    });

    // Give the header some extra padding to compensate for the overlay menu

    if ($('header').length && $('.overlay-nav').length) {
        //if(!$('nav').hasClass('nav-transparent')){
        var padAmount = parseInt($('header').css('padding-top')) + $('.overlay-nav').outerHeight() - 8;
        $('header').css('padding-top', padAmount);
        //}
    }

    // If there is no header or hero slider at the top of the page, pad the first section

    if ($('nav').length && !$('nav').next().hasClass('hero-slider') && !$('nav').next().is('header')) {
        $('.pad-first').removeClass('pad-first');
        $('nav').next().addClass('pad-first');
    }

    /************** Fullscreen Elements Scripts **************/

    $('.fullscreen-element').each(function () {
        $(this).css('height', $(window).height());
        var padTop = $(window).height() / 2 - $(this).children('.row').height();
        $(this).children('.row').css('padding-top', padTop);
    });


    /************** Accordion Scripts **************/

    $('.panel-holder').click(function () {

        $(this).closest('.accordion').find('.panel-holder').removeClass('active-panel');
        $(this).addClass('active-panel');

    });

    /************** Tabs Scripts **************/

    $('.tabs-holder li').click(function () {
        var tabID = $(this).attr('data-tab-id');
        $(this).closest('.tabbed-content').find('.tabs-holder li').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tabbed-content').find('.content-holder').children('.tab-content').removeClass('active').siblings('.tab-content[data-tab-id=' + tabID + ']').addClass('active');
    });

    /************** Feature Selector Scripts **************/

    $('.feature-selector-tabs li').click(function () {
        var tabID = $(this).attr('data-feature-id');
        $(this).closest('.feature-selector-holder').find('.feature-selector-tabs li').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.feature-selector-holder').find('.feature-selector-content').children('li').removeClass('active').siblings('li[data-feature-id=' + tabID + ']').addClass('active');
        $('.feature-selector-content').css('height', $('.feature-selector-content').find('.active').height());
    });

    $('.feature-selector-content').css('height', $('.feature-selector-content').find('.active').height());

    /************** Video Dividers Scripts **************/

    // Set the videos height at the wrappers width so it takes up the whole space of the divider

    $('.video-wrapper').each(function () {
        var height = $(this).width();
        $(this).css('height', height);

        if ($(this).width() < $('.row').width()) {
            $(this).css('width', height * 2);
        }

        if ($(this).width() > $('.row').width()) {
            $(this).css('width', height * 1.5);
        }
    });

    // and do this on resize!

    $(window).resize(function () {
        $('.video-wrapper').each(function () {
            var height = $(this).width();
            $(this).css('height', height);
        });
    });


    /************** Parallax Scripts **************/

    $('.background-parallax').each(function () {
        var top = Math.round($(this).offset().top);
        var width = Math.round($(this).outerWidth());
        var height = Math.round($(this).outerHeight());
        var windowHeight = $(window).height();

        if (height > windowHeight || height == windowHeight) {
            $(this).attr('data-bottom-top', 'background-position: 50% -200px');
            $(this).attr('data-center', 'background-position: 50% 0px');
            $(this).attr('data-top-bottom', 'background-position: 50% 200px');

        } else {

            if (height > width) {
                $(this).attr('data-bottom-top', 'background-position: 50% -100px');
                $(this).attr('data-center', 'background-position: 50% 0px');
                if (top != 0) {
                    $(this).attr('data-top-bottom', 'background-position: 50% 100px');
                } else {
                    $(this).attr('data-top', 'background-position: 50% 0px');
                    $(this).attr('data-top-bottom', 'background-position: 50% 100px');
                }
            } else {
                $(this).attr('data-bottom-top', 'background-position: 50% -200px');
                $(this).attr('data-center', 'background-position: 50% -100px');
                if (top != 0) {
                    $(this).attr('data-top-bottom', 'background-position: 50% 0px');
                } else {
                    $(this).attr('data-top', 'background-position: 50% 0px');
                    $(this).attr('data-top-bottom', 'background-position: 50% 100px');
                }
            }

        }

    });

    $('.parallax-scroll').each(function () {
        $(this).attr('data-bottom-top', 'transform: translateY(150px)');
        $(this).attr('data-center', 'transform: translateY(50px)');
        $(this).attr('data-top-bottom', 'transform: translateY(0px)');
    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }

    /************** Map Scripts **************/

    $('.map .overlay').click(function () {
        $(this).hide();
    });

    $(window).scroll(function () {
        $('.map .overlay').show();
    });

	
    /************** Instagram Scripts **************/

    jQuery.fn.spectragram.accessData = {
        accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
        clientID: 'fedaafacf224447e8aef74872d3820a1'
    };

    $('.instafeed').each(function () {
        $(this).children('ul').spectragram('getUserFeed', {
            query: $(this).attr('data-user-name')
        });

    });	

});

$(window).load(function () {

    /************** Loader Scripts **************/

    setTimeout(function () {

        $('.loader').addClass('show-content');
        setTimeout(function () {
            $('.loader').hide();
            $('.animate').each(function () {
                $(this).addClass('animated fadeInUp');
            });
        }, 200);

    }, 600);

    /************** Navigation Scripts **************/

    // Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.row').width());
        var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
        $(this).css('left', subNavOffset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.row').width());
            var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
            $(this).css('left', subNavOffset);
        });
    });

    /************** Portfolio Scripts **************/

    setTimeout(function () {

        $('figure .cover-wrapper').each(function () {

            var padHeight = ($(this).outerHeight() / 2) - ($(this).children('.hover-state').children('.hover-content').height() / 2);
            $(this).children('.hover-state').css('padding-top', padHeight);
        });

    }, 1000);

    $(window).resize(function () {
        setTimeout(function () {

            $('figure .cover-wrapper').each(function () {

                var padHeight = ($(this).outerHeight() / 2) - ($(this).children('.hover-state').children('.hover-content').height() / 2);
                $(this).children('.hover-state').css('padding-top', padHeight);
            });

        }, 1000);
    });

    /*************** Isotope Scripts **************/

    $('.work-wrapper').isotope({
        itemSelector: 'figure',
        layoutMode: 'masonry',
        onLayout: function () {

        }
    });

    $('.blog-masonry-wrapper').isotope({
        itemSelector: 'article',
        layoutMode: 'masonry'
    });

    $('.filters li a').click(function () {
        
        var selector = $(this).attr('data-filter');
        var container = $(this).closest('.work-instance-wrapper').find('.work-wrapper');
        container.isotope({
            filter: selector
        });
        $(this).closest('.filters').children('li').removeClass('active');
        $(this).parent('li').addClass('active');
		return false;
    });   
    
});
