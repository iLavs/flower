function togglingSearch() {
    var $searchBar = $('#searchBar');

    $('#searchBtn').click(function () {
        $searchBar.addClass('active');
    });

    $('#searchClose').click(function () {
        $searchBar.removeClass('active');
    });
}

function togglingSlideNav() {
    var $panel = $('#slidePanel');

    $('#burger').click(function () {
        $panel.addClass('active');
    });

    $('#slidePanelClose').click(function () {
        $panel.removeClass('active');
    });
}

function viewToggler() {
    var $viewToggler = $('#viewToggler');
    var togglerLinks = $('#viewToggler .toggler-link');
    var $filterResult = $('#filterResult');

    togglerLinks.click(function (e) {
        e.preventDefault();
        var className = $(this).data('view');

        togglerLinks.parent().removeClass('active');
        $(this).parent().addClass('active');

        if (className === 'grid-view') {
            $filterResult.removeClass('list-view');
            $filterResult.addClass(className);
        }
        else if (className === 'list-view') {
            $filterResult.removeClass('grid-view');
            $filterResult.addClass(className);
        }
    })
}

function inspirationFiltering() {
    var $filterNav = $('#inspirationFilter');
    var filterLinks = $('#inspirationFilter .inspiration-filter-link');


    filterLinks.click(function (e) {
        e.preventDefault();

        filterLinks.parent().removeClass('active');
        $(this).parent().addClass('active');
    })
}

function articleSlider() {
    if ($('.photos-wrap').length > 0) {
        $(".photos-wrap .popup-link").tosrus({
            infinite: true,
            effect: 'fade',
            caption: {
                add: true
            },
        });

        var photosWrap = new Swiper('.photos-wrap', {
            speed: 450,
            nextButton: '.photo-strip-btn.next-btn',
            prevButton: '.photo-strip-btn.prev-btn',
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            onSlideChangeStart: function () {
                var counter = $('slideCounter');
                var index = $('.photos-wrap .swiper-pagination-bullet').index($('.swiper-pagination-bullet-active'));

                $('#activeSlide').html(index + 1);

                //#Remove all slides index insert if you hadnle it by PHP
                $('#allSlides').html(
                    $('.photos-wrap .swiper-pagination-bullet').length
                );

                var slideText = $('.photos-wrap .swiper-slide-active a').attr('title');
                $('#sliderDesciption').text(slideText);
            }
        });
    }
}


function photoStripFunction() {
    if ($('.photo-strip').length > 0) {
        var mobSettings = {
            slidesPerView: 1,
            shortSwipes: true,
            longSwipes: true,
            centeredSlides: true,
            effect: 'fade',
            nextButton: '.photo-strip-btn.next-btn',
            prevButton: '.photo-strip-btn.prev-btn',
            loop: true
        };

        var photoStripSettings = {
            slidesPerView: 'auto',
            shortSwipes: false,
            longSwipes: false,
            simulateTouch: false,
            freeMode: true,
            speed: 450,
            spaceBetween: 0,
            nextButton: '.photo-strip-btn.next-btn',
            prevButton: '.photo-strip-btn.prev-btn',
            loop: true,
            breakpoints: {
                1160: {
                    simulateTouch: true,
                    shortSwipes: true,
                    longSwipes: true,
                }
            }
        };

        var photoStripSlides = $('.photo-strip .swiper-slide').clone();

        photoStripSlides.each(function (i) {
            $('.photo-strip .swiper-wrapper').append(photoStripSlides[i]);
        });

        var photoStrip = new Swiper('.photo-strip', photoStripSettings);

        $(window).resize(function () {
            clearTimeout(window.resizedFinished);

            window.resizedFinished = setTimeout(function () {
                var ww = $(window).width();

                if (ww <= 767) {
                    photoStrip.destroy(true, true);

                    setTimeout(function () {
                        console.log(photoStrip);
                        photoStrip = new Swiper('.photo-strip', mobSettings);
                    }, 200);
                }
                else {
                    photoStrip.destroy(true, true);

                    setTimeout(function () {
                        photoStrip = new Swiper('.photo-strip', photoStripSettings);
                        photoStrip.setWrapperTranslate('auto');
                    }, 200);
                }
            }, 100);
        });

        $(window).trigger('resize');
    }
}



$(document).ready(function () {
    $('a[href="/broken"]').click(function (e) {
        e.preventDefault();
    });

    $(".img-popup-link").tosrus({
        infinite: true,
        effect: 'fade',
        drag: true,
        caption: {
            add: true
        },
    });

    photoStripFunction();

    togglingSearch();

    togglingSlideNav();

    articleSlider();

    viewToggler();

    inspirationFiltering();

    $('select').selectric();

});


