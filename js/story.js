$(function () {
    var btn =false;
    $("#more").click(function () {
        btn = !btn;
        if(btn){
            $("#moreArea").insertAfter("#moreImageArea");
            $("#moreImageArea").slideDown("normal", function () {
                $("#more").addClass("up");
            });
            
        } else{
            $("#moreImageArea").slideUp("normal", function () {
                $("#moreArea").insertBefore("#moreImageArea");
                $("#more").removeClass("up");
            });
        }
    })
});
