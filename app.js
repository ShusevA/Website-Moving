
let scrollPos = 0;

 $(document).ready(function () {

    const delta = $('.effect').offset();

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
        let allPage = $('.main').innerWidth() / 2;
        let allElem = delta.left / 1.3;
        let muvRight = parseInt(e.pageX - $('.effect').width());
        if (e.pageX > allPage) {
            if (muvRight < allElem) return;
            $(".effect").animate({ marginLeft: muvRight + 40 }, 300);
        } else {
            if (e.pageX > (allElem + 40)) return;
            $(".effect").animate({ marginLeft: e.pageX - 70 }, 300);
        }
    });

    $(document).on("click", ".btn", () => {
        $('.language__all').toggle();
    });

});






