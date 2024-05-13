$(document).ready(function () {
    $('.droplink1').click(function () {
        console.log("test1");
        var menu = $('.submenu1');
        if ($(menu).is(":visible")) {
            $(menu).animate({ height: 0 }, 500, function () { $(menu).hide(); });
        } else {
            $(menu).show().animate({ height: 190 }, 500);
        }
    });

    $('.droplink2').click(function () {
        console.log("test2");
        var menu = $('.submenu2');
        if ($(menu).is(":visible")) {
            $(menu).animate({ height: 0 }, 500, function () { $(menu).hide(); });
        } else {
            $(menu).show().animate({ height: 190 }, 500);
        }
    });
});