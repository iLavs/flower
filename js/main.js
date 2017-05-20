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

var mySwiper = new Swiper('.photo-strip', {
    slidesPerView: 'auto',
    centeredSlides: true,
    shortSwipes: false,
    longSwipes: false,
    simulateTouch: false,
    speed: 350,
    nextButton: '.photo-strip-btn.next-btn',
    prevButton: '.photo-strip-btn.prev-btn',
    loop: true
});

function frostedEffect() {

}


$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    togglingSearch();
    togglingSlideNav();
    frostedEffect();

});


