$(function () {
    
    /* 생년월일 형식 확인 */
    $("#userBirth").change(function (){
        var rexp =  /^[0-9]{8}/;
        var result = rexp.test($(this).val());

        if(result){
            $(this).next().html("")
            return true;
        } else{
            $(this).next().html("생년월일은  yyyymmdd  과 같이 입력해주세요").css("color", "red");
            $(this).focus();
        }
    });

    $("#userTel").change(function (event) {
        var rexp =  /^[0-9]{11}/;
        var result = rexp.test($(this).val());

        if(result){
            $(".inputTelArea > p").css("color", "black");
            return true;
        } else{
            $(".inputTelArea > p").css("color", "red");
            $(this).focus().val("");
        }
    });

    $("#userId").change(function (){
        var rexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;
        var result = rexp.test($(this).val());

        if(result){
            $(".inputIdArea > p").css("color", "black");
            return true;
        } else{
            $(".inputIdArea > p").css("color", "red");
            $(this).focus().val("");
        }
    });

    $("#userPw").change(function (){
        var rexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!*#?_])[A-Za-z\d@!*#?_]{8,12}$/;
        var result = rexp.test($(this).val());

        if(result){
            $(".pwRegxCheck").html("");
            return true;
        } else{
            $(".pwRegxCheck").html("규칙에 맞는 비밀번호를 입력해주세요").css("color", "red");
            $(this).focus().val("");
        }
    });

    $("#userPwCheck").change(function () {
        var pw = $("#userPw").val();
        var pwCheck = $(this).val();
        if(pw === pwCheck){
            $(".pwEqualCheck").html("비밀번호가 일치합니다.").css("color", "blue");
            return true
        } else {
            $(".pwEqualCheck").html("비밀번호가 일치하지 않습니다.").css("color", "red");
            $(this).focus().val("");
        }
    });
    
    $("#emailServer").change(function () {
        var server = $('#emailServer option:selected').val();
        if(server != ""){
            $("#userEmailServer").val(server).attr("disabled", true);
        } else{
            $("#userEmailServer").val("").attr("disabled", false);
        }
    });

    $("#userEmailServer").change(function () {
        var rexp = /[a-zA-Z]+(\.[a-zA-Z]{2,4}){0,2}/;
        var result = rexp.test($(this).val());
        if(!result){
            $(".inputEmailArea > p").html("이메일 서버를 올바르게 입력해주세요").css("color", "red");
            $(this).focus().val("");
        } else{
            $(".inputEmailArea > p").html("");
        }
    })
})