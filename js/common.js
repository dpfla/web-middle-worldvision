$(function () {
    
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if(page === "join.html"){
        $(".userArea").css("min-width", 1200);
        console.log(page)
    } else{
        $(".userArea").css("min-width", 1400);
    }

    $(".mainMenu> li").hover(function() {
        $("header").stop().animate({
            height: 380
        });
        $(".underMenu").stop().slideDown();
    }, function () {
        $("header").stop().animate({
            height: 80
        });
        $(".underMenu").stop().slideUp();
    });

    $(window).scroll(function () {
        $("header").css("left", 0-$(this).scrollLeft());
    })

    

});