; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        });
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // navbar-click
        $(".menu-item-has-children a").on("click", function () {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
                element.removeClass("show");
                element.children("ul").slideUp(500);
            }
            else {
                element.siblings("li").removeClass('show');
                element.addClass("show");
                element.siblings("li").find("ul").slideUp(500);
                element.children('ul').slideDown(500);
            }
        });

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });


        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click','.search-bar-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });


        // banner //
        var bannerRounderContainer = $('.bannerpiechart');
        if (bannerRounderContainer.length) {
            bannerRounderContainer.each(function () {
            var Self = $(this);
            var value = Self.data('value');
            var size = Self.parent().width();
            var color = Self.data('border-color');

            Self.find('span').each(function () {
            var expertCount = $(this);
            expertCount.appear(function () {
            expertCount.countTo({
            from: 1,
            to: value*100,
            speed: 2000
            });
            });

            });
            Self.appear(function () {         
            Self.circleProgress({
            value: value,
            size: 100,
            thickness: 6,
            emptyFill: '#e8eef1',
            animation: {
            duration: 2000
            },
            fill: {
            color: color
            }
            });
            });
            });
        };

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-right"></i>';
        var leftArrow2 = '<i class="fas fa-arrow-left"></i>';
        var rightArrow2 = '<i class="fas fa-arrow-right"></i>';

        // >> Book Slider Start <<//
        if($('.top-seller-slider').length > 0) {
            const topSellerSlider = new Swiper(".top-seller-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 3,
                    },
                    1399: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // >> top-auction-slider <<//
        if($('.top-auction-slider').length > 0) {
            const topAuctionSlider = new Swiper(".top-auction-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 4,
                    },
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // >> block-chain-gallery-slider <<//
        if($('.block-chain-gallery-slider').length > 0) {
            const topAuctionSlider = new Swiper(".block-chain-gallery-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 5,
                    },
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // >> testimonial slider script <<//
        var mySwiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            centeredSlides: true,
            autoplay: true,
            watchSlidesProgress: true,
            breakpoints: {
                1499: {
                    slidesPerView: 4,
                },
                1399: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView:3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: true,
            navigation: {
                nextEl: ".array1-next",
                prevEl: ".array1-prev",
            },
            thumbs: {
                swiper: mySwiper,
            },
        });

        // >> partner-slider-left <<//
        if($('.partner-slider-left').length > 0) {
            const topAuctionSlider = new Swiper(".partner-slider-left", {
                speed: 5000,
                spaceBetween: 18,
                loop: true,
                autoplay: {
                    delay: 1,
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 7,
                    },
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1.5,
                    },
                },
            });
        }
        // >> partner-slider-right <<//
        if($('.partner-slider-right').length > 0) {
            const topAuctionSlider = new Swiper(".partner-slider-right", {
                spaceBetween: 18,
                speed: 6000,
                autoplay: {
                    disableOnInteraction: true,
                    reverseDirection: true,
                },
                loop: true,
                breakpoints: {
                    1499: {
                        slidesPerView: 7,
                    },
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1.5,
                    },
                },
            });
        }

        // >> advisors-slider <<//
        if($('.advisors-slider').length > 0) {
            const topAuctionSlider = new Swiper(".advisors-slider", {
                speed: 5000,
                spaceBetween: 18,
                loop: true,
                autoplay: {
                    delay: 1,
                },
                navigation: {
                    nextEl: ".array-prev-advisors",
                    prevEl: ".array-next-advisors",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        

        // >> advisors-slider <<//
        if($('.instagram-slider').length > 0) {
            const topAuctionSlider = new Swiper(".instagram-slider", {
                speed: 5000,
                loop: true,
                breakpoints: {
                    1399: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // >> product details slider script <<//
        var swiper = new Swiper(".productmySwiper", {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var swiper2 = new Swiper(".productmySwiper2", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".array1-next",
                prevEl: ".array1-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        
        /*------------------------------------------------
            range slider
        ------------------------------------------------*/
        document.addEventListener('DOMContentLoaded', function() {
            const minInput = document.getElementById('min');
            const maxInput = document.getElementById('max');
            const minValue = document.getElementById('min-value');
            const maxValue = document.getElementById('max-value');
        
            function updateSlider() {
                const min = parseInt(minInput.value);
                const max = parseInt(maxInput.value);
        
                if (min >= max) {
                    minInput.value = max - 1;
                }
        
                minValue.textContent = minInput.value;
                maxValue.textContent = maxInput.value;
            }
        
            minInput.addEventListener('input', updateSlider);
            maxInput.addEventListener('input', updateSlider);
        });


        /**---------------------------------------
         *  QTY Inputs
        * -------------------------------------*/
        $(function() {
            $("div.quantity").append('<a class="inc qty-button">+</a><a class="dec qty-button">-</a>');
            $(".qty-button").on("click", function() {
                console.log('clicked');
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();

                if ($button.text() == "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find("input").val(newVal);
            });
        });



        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn-hover').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });
        

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();

        // ========================= Wishlist Js Start ===================
        $('.product-item__wishlist').on('click', function() {
            $(this).toggleClass('active')
        }); 

        //color-plate
        $('.color-plate span').on('click', function() {
            $('.color-plate span.active').removeClass('active');
            $(this).toggleClass('active');
        }); 

        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

        function navbarFix() {
            $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
                e.preventDefault();
            })
        }

    });
    

    
    /*
    -----------------------------------------------------
    Gsap
    ----------------------------------------------------- 
    */
    gsap.registerPlugin(ScrollTrigger, SplitText, TweenMax);

    const fadeItems = document.querySelectorAll(".fade");
    fadeItems.forEach((fadeItem) => {
    let startPosition = "top 90%",
        tweenOptions = {
        duration: 1.5,
        delay: 0.5,
        opacity: 1,
        };

    let timeline = gsap.timeline({
        scrollTrigger: {
        trigger: fadeItem,
        start: startPosition,
        markers: false,
        },
    });
    timeline.to(fadeItem, tweenOptions);
    });

    const fadeSlideItems = document.querySelectorAll(".fade-slide");

    fadeSlideItems.forEach((fadeSlideItem) => {
    let slideAmount = 80,
        startPosition = "top 90%",
        tweenOptions = {
        duration: 1.3,
        delay: 0.5,
        opacity: 0,
        ease: "power2.out",
        };

    if (fadeSlideItem.hasAttribute("data-slide-amount")) {
        slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
    }

    if (fadeSlideItem.hasAttribute("data-opacity")) {
        tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
    }

    if (fadeSlideItem.hasAttribute("data-ease")) {
        tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
    }

    if (fadeSlideItem.hasAttribute("data-duration")) {
        tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
    }

    if (fadeSlideItem.hasAttribute("data-delay")) {
        tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
    }

    if (fadeSlideItem.classList.contains("right")) {
        tweenOptions.x = slideAmount;
    }

    if (fadeSlideItem.classList.contains("left")) {
        tweenOptions.x = -slideAmount;
    }

    if (fadeSlideItem.classList.contains("top")) {
        tweenOptions.y = -slideAmount;
    }

    if (fadeSlideItem.classList.contains("bottom")) {
        tweenOptions.y = slideAmount;
    }

    let timeline = gsap.timeline({
        scrollTrigger: {
        trigger: fadeSlideItem,
        start: startPosition,
        markers: false,
        },
    });
    timeline.from(fadeSlideItem, tweenOptions);
    });

    const splitChars = document.querySelectorAll(".split_chars");

    splitChars.forEach((item) => {
    let isScrollAble = true,
        tweenOptions = {
        duration: 0.3,
        delay: 0.3,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "power2.out",
        },
        scrollTrigger = {
        trigger: item,
        start: "top 90%",
        markers: false,
        };

    if (item.hasAttribute("data-duration")) {
        tweenOptions.duration = item.getAttribute("data-duration");
    }

    if (item.hasAttribute("data-delay")) {
        tweenOptions.delay = item.getAttribute("data-delay");
    }

    if (item.hasAttribute("data-ease")) {
        tweenOptions.ease = item.getAttribute("data-ease");
    }

    if (item.hasAttribute("data-stagger")) {
        tweenOptions.stagger = item.getAttribute("data-stagger");
    }

    if (item.hasAttribute("data-translateX")) {
        tweenOptions.x = item.getAttribute("data-translateX");
    }

    if (item.hasAttribute("data-translateY")) {
        tweenOptions.y = item.getAttribute("data-translateY");
    }

    if (
        !item.hasAttribute("data-translateX") &&
        !item.hasAttribute("data-translateX")
    ) {
        tweenOptions.x = 0;
    }

    if (item.hasAttribute("data-scroll-trigger")) {
        isScrollAble = item.getAttribute("data-scroll-trigger");
    }

    if (item.hasAttribute("data-trigger-start")) {
        scrollTrigger.start = item.getAttribute("data-trigger-start");
    }

    if (isScrollAble) {
        tweenOptions.scrollTrigger = scrollTrigger;
    }

    let splittedText = new SplitText(item, {
        type: "chars, words",
    });

    gsap.from(splittedText.chars, tweenOptions);
    });

    const moveLine3DItems = document.querySelectorAll(".move-line-3d");

    moveLine3DItems.forEach((item) => {
    let startPosition = "top 90%",
        tweenOptions = {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
        };

    if (item.hasAttribute("data-start")) {
        startPosition = item.getAttribute("data-start");
    }

    if (item.hasAttribute("data-duration")) {
        tweenOptions.duration = item.getAttribute("data-duration");
    }

    if (item.hasAttribute("data-delay")) {
        tweenOptions.delay = item.getAttribute("data-delay");
    }

    if (item.hasAttribute("data-opacity")) {
        tweenOptions.opacity = item.getAttribute("data-opacity");
    }

    if (item.hasAttribute("data-stagger")) {
        tweenOptions.stagger = item.getAttribute("data-stagger");
    }

    if (item.hasAttribute("data-rotate")) {
        tweenOptions.rotationX = item.getAttribute("data-rotate");
    }

    if (item.hasAttribute("data-origin")) {
        tweenOptions.transformOrigin = item.getAttribute("data-origin");
    }

    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: item,
        start: startPosition,
        duration: tweenOptions.duration,
        scrub: false,
        markers: false,
        },
    });

    const splitedText = new SplitText(item, {
        type: "lines",
    }).split({
        type: "lines",
    });
    gsap.set(item, {
        perspective: 400,
    });
    timeline.from(splitedText.lines, tweenOptions);
    });


    /////////////////////////////////////////////////////
    // CURSOR
    var cursor = $(".cursor"),
    follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
            left: posX - 12,
            top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
            left: mouseX,
            top: mouseY
            }
        });
    }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    //circle
    $(".btn").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $(".btn").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });   
    // CURSOR End


})(jQuery);
