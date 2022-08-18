
function firstPage() {
    var ImageURL = "images/campaign/index_campaign";
    var firstCaption = [["Give a nice day 캠페인 (시즌4)", "- 하루팔찌 신청하기"],
                        ["면생리대 만들기 캠페인", "- 2022 Basic for Girls"], 
                        ["아이의 선택에서 시작되는 후원", "- Chosen 초즌"],
                        ["국내사업 후원 캠페인", "- 10살 지우의 2평짜리 세상"],
                        ["세계 시민 DNA 발견", "- World is One"],
                        ["세계를 위해 고민하는 세계시민", "- FOREST MAKER"]];

    for(var i =0; i<6; i++){
        if(i >= 2){
            $(".campaign").eq(i).show();
        }
        $(".innerImg").eq(i).attr("src", ImageURL+(i+1)+".jpg");
        $("figcaption > h3").eq(i).html(firstCaption[i][0]);
        $("figcaption > p").eq(i).html(firstCaption[i][1]);
    }
}

function secondPage() {
    var ImageURL = "images/campaign/index_campaign";
    var secondCaption = [["위험에 처한 아이들을 도와주세요", "- 우크라이나 난민 지원"],
                        ["현대자동차와 함께하는 e-share", "- 지속가능한 미래 만들기"]];


    for(var i =0; i<6; i++){
        if(i < 2){
            $(".innerImg").eq(i).attr("src", ImageURL+(i+7)+".jpg");
            $("figcaption > h3").eq(i).html(secondCaption[i][0]);
            $("figcaption > p").eq(i).html(secondCaption[i][1]);
        } else{
            $(".campaign").eq(i).hide();
        }
    }
}