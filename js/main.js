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

var mySwiper = new Swiper ('.photo-strip', {
    // Optional parameters
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    loop: true
});

$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    togglingSearch();
    togglingSlideNav();

});