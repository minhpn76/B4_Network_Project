$(document).ready(function () {
    let wHeight = screen.height,
        wWidth = screen.width;
    $('#section-video').css('padding-bottom', 'calc(' + wHeight / wWidth + ' * 100%)');
});

$(document).ready(function () {

    let counters = $(".count input"),
        targets = $(".count h2 span")
    countersQuantity = counters.length,
        counter = [];
    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseFloat(counters[i].value);
    }

    let count = function (start, value, id, timeout) {
        let localStart = start;

        setInterval(function () {
            localStart++;
            if (localStart > value) {
                localStart = value;
            }
            targets[id].innerHTML = localStart;
        }, timeout);
    }

    for (j = 0; j < countersQuantity; j++) {
        let timeout;
        if (counter[j] < 10) {
            timeout = 200;
        } else if (counter[j] < 200) {
            timeout = 40
        } else if (counter[j] >= 1000) {
            timeout = 0.5
        }
        count(0, counter[j], j, timeout);
    }
});

$(document).ready(function () {
    var swiper = new Swiper('#section-our-project .swiper-container', {
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    });
    let text_length = '';
    if (swiper.slides.length < 10) {
        text_length = '0' + swiper.slides.length;
    } else {
        text_length = swiper.slides.length;
    }
    $('.swiper-pagination').html('<span class="swiper-pagination-current">01</span> /<span class="swiper-pagination-total">' + text_length + '</span>');
    var current = '';
    swiper.on('slideChange', function () {
        current = (swiper.activeIndex < 10) ? '0' + parseInt(swiper.activeIndex + 1) : swiper.activeIndex;
        $('.swiper-pagination-current').html(current);
    });
});

$(document).ready(function () {
    var swiper = new Swiper('#section-news .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    });

    let text_length = '';
    if (swiper.slides.length < 10) {
        text_length = '0' + swiper.slides.length;
    } else {
        text_length = swiper.slides.length;
    }
    $('.swiper-pagination').html('<span class="swiper-pagination-current">01</span> /<span class="swiper-pagination-total">' + text_length + '</span>');
    var current = '';
    swiper.on('slideChange', function () {
        current = (swiper.activeIndex < 10) ? '0' + parseInt(swiper.activeIndex + 1) : swiper.activeIndex;
        $('.swiper-pagination-current').html(current);
    });
});

$(document).ready(function () {
    var swiperClients = new Swiper('#section-our-clients .swiper-container', {
        pagination: {
            el: '.swiper-pagination-client',
            clickable: true,
        },
    });
});