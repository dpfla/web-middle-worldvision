
window.onload = function () {

    var adWidth;

    /* 메인 광고 슬라이드 영역 - 사진 width*/
    $(".sliderAdvertiseImage").append($(".advertiseImage").first().clone());
    $(".sliderAdvertiseImage").prepend($(".advertiseImage").eq(-2).clone());
    var adIndex = 1;

    function sliderImageSize() {
        var AdvertiseImage = document.querySelectorAll(".advertiseImage");
        var slideAd = document.querySelector(".sliderAdvertiseImage");
        var windowWidth = window.innerWidth;
        if(1400 < windowWidth && windowWidth < 2400){
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = window.innerWidth+"px";
            }
        } else if(windowWidth <= 1400){
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = "1400px";
            }
        } else {
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = "2400px";
            }
        }

        slideAd.style.width = parseInt($(".advertiseImage").css("width")) * 6 +"px";
    };
    sliderImageSize();
    window.addEventListener('resize', sliderImageSize);

    /* 메인 광고 슬라이드 영역 - 슬라이더*/
    adWidth = parseInt($(".advertiseImage").css("width"));

    moveSlider(adIndex);
    autoSlider();
    
    $(".adUnderBar").click(function () {
        adIndex = $(this).index();
        moveSlider(adIndex+1);
    })

    $("#btnPrevAd").click(function() {
        if(adIndex > 1){
            adIndex --;
        } else{
            $(".sliderAdvertiseImage").css("left", -(adWidth * 6));
            adIndex = 4;
        }
        moveSlider(adIndex);
    });
    $("#btnNextAd").click(function() {
        if(adIndex < 4){
            adIndex ++;
        } else{
            $(".sliderAdvertiseImage").css("left", 0);
            adIndex = 1;
        }
        moveSlider(adIndex);
    });

    function autoSlider() {
        setInterval(function () {
            $("#btnNextAd").trigger("click");
        }, 5000);
    }
    function moveSlider(i) {
        $(".sliderAdvertiseImage").stop(true, true).animate({
            left: -(i*adWidth)
        }, "slow");
        $(".adUnderBar").removeClass("active");
        $(".adUnderBar").eq(i-1).addClass("active");
    }
    

    /* 스토리 슬라이드 */
    $("#btnPrevStory").click(function () {

        $(".storySliderImage").prepend($(".storyALink").last());
        $(".sliderTextArea").prepend($(".slider_text").last());
        
        $(".storyALink").removeClass();
        $(".storySliderImage > a").addClass("storyALink");

        for(var i=0; i<$(".storySliderImage > a").length; i++){  
            $(".storySliderImage > a").eq(i).addClass( function () {
                return "story" + (i+1)
            });
        }
        $(".story2").css("transition", "margin-left 0.5s");

        $(".slider_text").eq(1).css({
            transition: "margin-left 0.5s"
        });

    });

    $("#btnNextStory").click(function () {
        $(".storySliderImage").append($(".storyALink").first());
        $(".sliderTextArea").append($(".slider_text").first());
        
        $(".storyALink").removeClass();
        $(".storySliderImage > a").addClass("storyALink");

        for(var i=0; i<$(".storySliderImage > a").length; i++){  
            $(".storySliderImage > a").eq(i).addClass( function () {
                return "story" + (i+1)
            });
        }
        $(".story2").css("transition", "margin-right 0.5s");
        $(".slider_text").eq(1).css({
            transition: "margin-right 0.5s"
        });
    });

    /* 후원 영역 */
    $("#donateArea > section").click(donate);
    
    var donateIndex=0;
    donateBtnWork(donateIndex);

    $("#btnPrevDonate").click(function () {
        if(donateIndex === 0){
            donateIndex=$("#donateArea > section").length-1;
        }else {
            donateIndex--;
        }
        donateBtnWork(donateIndex);
    });
    $("#btnNextDonate").click(function () {
        if(donateIndex >= $("#donateArea > section").length-1){
            donateIndex=0
        }else {
            donateIndex++;
        }
        donateBtnWork(donateIndex);
    });

    function donateBtnWork(i){
        $("#donateArea > section").css("z-index", 0);
        $("#donateArea > section").find("h3 > a").removeClass("target");
        $("#donateArea > section").eq(i).css("z-index", 10);
        $("#donateArea > section").eq(i).find("h3 > a").addClass("target");
    }
    function donate() {
        donateIndex = $(this).index()-1;
        donateBtnWork(donateIndex);
    }

}