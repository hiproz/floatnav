;(function($) {
    function aj() {
        $(".jd11").click(function () {
            window.open('https://www.taobao.com');
            //window.location.href = "https://www.taobao.com";
        })

        $(".jd22").click(function () {
            window.open("http://weidian.com");
            //window.location.href = "http://weidian.com";
        })
        $(".jd33").hover(function () {
            $(".c2dcode").show()
        }, function () {
            $(".c2dcode").hide()
        })

        $(".jd44").click(function () {
            $('body,html').animate({
                scrollTop: 0
            })
        })
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $(".jd44").fadeIn()
        } else {
            $(".jd44").fadeOut()
        }
    });

    function init() {
        $(window).scroll();
        aj();
    }
    $(document).ready(function() {
        init();
    });
})(jQuery);