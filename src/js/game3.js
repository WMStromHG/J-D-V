Room.GameLoad3 = {};
Room.GameLoad3.ppt = function(){
    cc.ppt(["GameLoad3", "Game3"] , function(after , callback){
        cc.m["GameLoad3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game3"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game3 = {};
Room.Game3.dom = function(){
    $("#Game3 ._next .btn").tap(function(e){
        cc.tap(e);
        Room.Game3.ppt();
    })
};
Room.Game3.ppt = function(){
    cc.ppt(["Game3", "GameLoad4"] , function(after , callback){
        cc.m["Game3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad4();
        }});
    })
};
Room.Game3.go_after = function(){
    clearTimeout(Hand.game3_lamp);
    clearTimeout(Hand.game3_lightEnd);

    for(var i=1; i<=13; i++)
        if(Hand["game3_light"+i]) clearTimeout(Hand["game3_light"+i]);
        if(cav_game3.img["game3_box"+i]) cvtw.removeTweens(cav_game3.img["game3_box"+i]);

    cvtw.removeTweens(cav_game3.img["game3_lamp0"]);
    cvtw.removeTweens(cav_game3.img["game3_lamp"]);
};

Room.Game3.ini = function(){

    //main
    var light_time = 7000;
    PG3.play = 0;

    function game3_play(i){
        switch(i)
        {
            case 1:
                PG3.play = 1;
                break;
            case 2:
                if(!PG3.light4 || PG3.play!=1) {
                    PG3.play = 0;
                    return false;
                }
                PG3.play = 2;
                break;
            case 3:
                if(!PG3.light4 || !PG3.light5 || PG3.play!=2) {
                    PG3.play = 0;
                    return false;
                }
                PG3.play = 3;
                break;
            case 4:
                if(!PG3.light4 || !PG3.light5 || !PG3.light8 || PG3.play!=3) {
                    PG3.play = 0;
                    return false;
                }
                PG3.play = 4;
                break;
            case 5:
                if(!PG3.light4 || !PG3.light5 || !PG3.light8 || !PG3.light7 || PG3.play!=4) {
                    PG3.play = 0;
                    return false;
                }
                PG3.play = 5;
                break;
            case 6:
                if(!PG3.light4 || !PG3.light5 || !PG3.light8 || !PG3.light7 || !PG3.lamp || PG3.play!=5) {
                    PG3.play = 0;
                    return false;
                }
                PG3.play = 6;
                break;
            case 7:
                if(!PG3.light4 || !PG3.light5 || !PG3.light8 || !PG3.light7 || !PG3.lamp || !PG3.light11 ||  PG3.play!=5) {
                    PG3.play = 0;
                    return false;
                }

                game3_finish();
                break;

        }
    }

    function game3_finish(){
        mp3_play("game3_magic");
        cav_game3.sprite["game3_ok"].gotoAndPlay("run");
        $("#Game3 ._next").css("opacity",0).show().velocity({ opacity: 1}, {delay:3000, duration: 1000 });
    }

    //l1
    box_click(4, 1);

    //l2
    box_click(5, 2);

    //l3
    box_click(8, 3);

    //l4
    box_click(7, 4);

    //l5
    cav_game3.dom["game3_lamp"].on("click", function () {
        if(!PG3.lamp){
            PG3.lamp = 1;
            game3_play(5);

            mp3_play("game3_light1");
            cvtw.get(cav_game3.mark["game3_lamp"]).to({scaleX:1, scaleY:1 }, 0);

            Hand.game3_lamp = setTimeout(function(){
                PG3.lamp = 0;
                cvtw.get(cav_game3.mark["game3_lamp"]).to({scaleX:0.01, scaleY:0.01 },0);
            },light_time)
        }else{
            clearTimeout(Hand.game3_lamp);
            PG3.lamp = 0;
            cvtw.get(cav_game3.mark["game3_lamp"]).to({scaleX:0.01, scaleY:0.01 }, 0);
        }
    });

    // l6
    box_click(6, 6);

    // l7
    cav_game3.dom["game3_lightEnd"].on("click", function () {
        if(!PG3.lightEnd){
            PG3.lightEnd = 1;
            game3_play(7);

            mp3_stop("game3_fire");
            mp3_play("game3_fire");
            cav_game3.sprite["game3_lightEnd"].gotoAndPlay("run");
            cvtw.get(cav_game3.sprite["game3_lightEnd"]).to({alpha:1 }, 700);

            Hand.game3_lightEnd = setTimeout(function(){
                PG3.lightEnd = 0;
                cvtw.get(cav_game3.sprite["game3_lightEnd"]).to({alpha:0 }, 700);
            },light_time)
        }else{
            clearTimeout(Hand.game3_lightEnd);
            PG3.lightEnd = 0;
            cvtw.get(cav_game3.sprite["game3_lightEnd"]).to({alpha:0 }, 700);
        }
    });


    //else
    box_click(1);
    box_click(2);
    box_click(3);
    box_click(11);


    function box_click(i, play){
        cav_game3.img["game3_box"+i].on("click", function () {
            if(!PG3["light"+i]){
                PG3["light"+i] = 1;
                if(play) game3_play(play);

                mp3_stop("game3_fire");
                mp3_play("game3_fire");
                cav_game3.sprite["game3_light"+i].gotoAndPlay("run");
                cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:1 }, 700);
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:1 }, 700).call(function(){
                    cvtw.get(cav_game3.img["game3_box"+i], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
                });

                Hand["game3_light"+i] = setTimeout(function(){
                    PG3["light"+i] = 0;
                    cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:0 }, 700);
                    cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                    cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
                },light_time)
            }else{
                clearTimeout(Hand["game3_light"+i]);
                PG3["light"+i] = 0;
                cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:0 }, 700);
                cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
            }
        });

    }

    box_click2(9);
    box_click2(10);
    box_click2(13);

    function box_click2(i){
        cav_game3.img["game3_box"+i].on("click", function () {
            if(!PG3["light"+i]){
                PG3["light"+i] = 1;

                mp3_stop("game3_light");
                mp3_play("game3_light");
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:1 }, 700).call(function(){
                    cvtw.get(cav_game3.img["game3_box"+i], {loop:true}).to({alpha:0.85}, 600).to({alpha:1 }, 600);
                });

                Hand["game3_light"+i] = setTimeout(function(){
                    PG3["light"+i] = 0;
                    cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                    cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
                },light_time)
            }else{
                clearTimeout(Hand["game3_light"+i]);
                PG3["light"+i] = 0;
                cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
            }
        });

    }

    box_click3(11);
    box_click3(12);
    function box_click3(i){
        cav_game3.dom["game3_box"+i].on("click", function () {
            if(!PG3["light"+i]){
                PG3["light"+i] = 1;

                mp3_stop("game3_fire");
                mp3_play("game3_fire");
                cav_game3.sprite["game3_light"+i].gotoAndPlay("run");
                cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:1 }, 700);
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:1 }, 700).call(function(){
                    cvtw.get(cav_game3.img["game3_box"+i], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
                });

                Hand["game3_light"+i] = setTimeout(function(){
                    PG3["light"+i] = 0;
                    cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:0 }, 700);
                    cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                    cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
                },light_time)
            }else{
                clearTimeout(Hand["game3_light"+i]);
                PG3["light"+i] = 0;
                cvtw.get(cav_game3.sprite["game3_light"+i]).to({alpha:0 }, 700);
                cvtw.removeTweens(cav_game3.img["game3_box"+i]);
                cvtw.get(cav_game3.img["game3_box"+i]).to({alpha:0.01}, 700);
            }
        });

    }

    cav_game3.dom["game3_book"].on("click", function () {
        mp3_play("game3_book");
        cav_game3.sprite["game3_book"].gotoAndPlay("run");
    });

    cav_game3.dom["game3_book2"].on("click", function () {
        mp3_play("game3_book");
        cav_game3.sprite["game3_book2"].gotoAndPlay("run");
    });

    cvtw.get(cav_game3.img["game3_lamp0"], {loop:true}).to({rotation:0.5 }, 2000).to({rotation:0 }, 2000).to({rotation:-0.5 }, 2000).to({rotation:0 }, 2000);
    cvtw.get(cav_game3.img["game3_lamp"], {loop:true}).to({rotation:0.5 }, 2000).to({rotation:0 }, 2000).to({rotation:-0.5 }, 2000).to({rotation:0 }, 2000);
};
