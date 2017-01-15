$(document).ready(function(){
	

    //메인 슬라이더 구현


    var i = $(".navi .on").index();
    var wid = $(".visual").width();
    var len = $(".navi li").length;


    //버튼에 on 클래스 처리

    $(".navi li").click(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });

    $(".navi li").mouseenter(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });



    //prev 버튼 구현

    $(".prev").click(function(){

        if(i == 0){
            i = len-1;
        }

        else{
            i--;
        }

        Sliding();

    });



    //next 버튼 구현

    $(".next").click(function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i++;
        }

        Sliding();

    });

    //버튼 눌렀을때 해당 슬라이드 화면으로 이동


    $(".navi li").click(function(){

        i = $(this).index();
        Sliding();

    });



    //슬라이드 함수 구현


    function Sliding(){

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        $(".panel").animate({"margin-left": -wid * i},500);

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


    $(".visual").mouseenter(function(){

        clearInterval(auto);

    });

    //마우스리브시 자동 재생 다시 시작



    $(".visual").mouseleave(function(){


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















