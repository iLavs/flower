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

function viewToggler() {
    var viewToggler = $('#viewToggler');
    var togglerLinks = viewToggler.find('.toggler-link');
    var filterResult = $('#filterResult');

    togglerLinks.click(function (e) {
        e.preventDefault();
        var className = $(this).data('view');

        togglerLinks.parent().removeClass('active');
        $(this).parent().addClass('active');

        if(className === 'grid-view') {
            filterResult.removeClass('list-view');
            filterResult.addClass(className);
        }
        else if (className === 'list-view') {
            filterResult.removeClass('grid-view');
            filterResult.addClass(className);
        }


    })
}

function frostedEffect() {

}


$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    togglingSearch();
    togglingSlideNav();
    frostedEffect();
    viewToggler();

});


