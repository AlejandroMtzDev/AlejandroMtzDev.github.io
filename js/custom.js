(function ($) {
    "use strict";

    //MENU
    $('.navbar-collapse a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    //CUSTOM LINK
    $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, header_height){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $('body, html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });

    $(window).on('scroll', function() {
        function isScrollIntoView(elem, index) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(window).height() * .5;

            if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
                $(elem).addClass('active');
            }

            if (!(elemBottom <= docViewBottom)) {
                $(elem).removeClass('active');
            }

            var mainTimelineContainer = $('#vertical-scrollable-timeline')[0];
            var mainTimelineContainerBottom = mainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * .62;
            $(mainTimelineContainer).find('.inner').css('height', mainTimelineContainerBottom + 'px');
        }

        var timeline = $('#vertical-scrollable-timeline li');
        Array.from(timeline).forEach(isScrollIntoView);

        function isScrollIntoView2(elem, index) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(window).height() * .5;

            if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
                $(elem).addClass('active');
            }

            if (!(elemBottom <= docViewBottom)) {
                $(elem).removeClass('active');
            }

            var mainTimelineContainer = $('#vertical-scrollable-timeline-web-app')[0];
            var mainTimelineContainerBottom = mainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * .62;
            $(mainTimelineContainer).find('.inner').css('height', mainTimelineContainerBottom + 'px');
        }

        var timeline2 = $('#vertical-scrollable-timeline-web-app li');
        Array.from(timeline2).forEach(isScrollIntoView2);
    })
})(window.jQuery);