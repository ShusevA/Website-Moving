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

    let elemTop = $(".circle").offset()
    $(".contaner").mousemove(function (e) {
        let allPage = ($('.contaner').innerHeight() / 2) + ($('.circle').innerHeight() / 2);
        let muvRight = parseInt(e.pageY - ($('.circle').innerHeight() / 2));
        if (e.pageY > allPage) {
            if (e.pageY > ($('.contaner').innerHeight() - (elemTop.top / 2))) return;
            $(".circle").animate({ top: muvRight }, 200);
        } else {
            if (e.pageY > elemTop.top || e.pageY < (elemTop.top / 2)) return;
            $(".circle").animate({ top: e.pageY + ($('.circle').innerHeight() / 2) }, 200);
        }
    });

    $(document).on("click", ".btn", () => {
        $('.language__all').toggle();
    });

});
