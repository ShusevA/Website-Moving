let scrollPos = 0;

$(document).ready(function () {

    $(document).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > scrollPos) {
            $('.photo').css({ animationName: "mymove", animationDuration: "1s" });
        } else {
            $('.photo').css({ animationName: "backMymove", animationDuration: "1s" });
            setTimeout(() => {
                $('.photo').css({ animationName: "mymove" });
            }, 1000);
        }
        $('.photo').animate({ animationDuration: "30s" }, 1);
        scrollPos = scrolling;
    });

    $(".main").mousemove(function (e) {
        let position = $('.effect').offset();
        let elLeft = e.pageX - position.top - $(".effect").width() / 2;
        let elTop = e.pageY - position.left - $(".effect").height() / 2;
        $(".effect").css({ transform: "translate(" + elLeft * 0.3 + "px, " + elTop * 0.12 + "px)" });
    });

    $(document).on("click", ".btn", () => {
        $('.language__all').toggle();
    });

});
