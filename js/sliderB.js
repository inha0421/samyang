$(document).ready(function(){
	

    //메인 슬라이더 구현


    var i = $(".s_navi .on").index();
    var wid = $(".s_visual").width();
    var len = $(".s_navi li").length;


    //버튼에 on 클래스 처리

    $(".s_navi li").click(function(){

        $(".s_navi li").removeClass("on");
        $(this).addClass("on");

    });

    $(".s_navi li").mouseenter(function(){

        $(".s_navi li").removeClass("on");
        $(this).addClass("on");

    });



    //버튼 눌렀을때 해당 슬라이드 화면으로 이동


    $(".s_navi li").click(function(e){

        e.preventDefault();

        i = $(this).index();
        Sliding();

    });



    //슬라이드 함수 구현


    function Sliding(){

        $(".s_navi li").removeClass("on");
        $(".s_navi li").eq(i).addClass("on");
        $(".s_panel").animate({"margin-left": -wid * i},500);

    }


    //자동 재생 구현

    var auto = setInterval (function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i++;
        }

        Sliding();


    },2000);


    //마우스 오버시 자동 재생 정지


    $(".s_visual").mouseenter(function(){

        clearInterval(auto);

    });

    //마우스리브시 자동 재생 다시 시작



    $(".s_visual").mouseleave(function(){


        auto = setInterval (function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i++;
        }

        Sliding();


    },2000);

    });


});

