Room.GameLoad4 = {};
Room.GameLoad4.ppt = function(){
    cc.ppt(["GameLoad4", "Game4"] , function(after , callback){
        cc.m["GameLoad4"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game4 = {};
Room.Game4.dom = function(){
    $("#Game4 ._next .btn").tap(function(e){
        cc.tap(e);
        Room.Game4.ppt();
    })

    $(".bottomWheel").tap(function(e){
        cc.tap(e);
        setCookie("JDVGameTime", 9545);

        window.location.href = "http://wx.cdh5.cn/50464/index.php";
    })
};
Room.Game4.ppt = function(){
    // cc.ppt(["Game3", "GameLoad4"] , function(after , callback){
    //     cc.m["Game3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
    //     cc.m["GameLoad4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
    //         after.go();
    //     }});
    // })
    Dom.game.game4_end = new Date();

    var time = (Dom.game.game1_end-Dom.game.game1_start) + (Dom.game.game2_end-Dom.game.game2_start) + (Dom.game.game3_end-Dom.game.game3_start) + (Dom.game.game4_end-Dom.game.game4_start);
    setCookie("JDVGameTime", time);

    window.location.href = "http://wx.cdh5.cn/50464/index.php";

};
Room.Game4.come_before = function(next){
    Dom.game.game4_start = new Date();
    next();
};

Room.Game4.ini = function(){

    PG4.ballPlay = 0;
    Room.Game4.orientation();
    //loop
    mp3_play("game4_time",1);
    cav_game4.cc["game4_1"].regX = 464;
    cav_game4.cc["game4_1"].regY = 1104;
    cav_game4.cc["game4_1"].x = 464;
    cav_game4.cc["game4_1"].y = 1104;
    cvtw.get(cav_game4.cc["game4_1"], {loop:true}).to({rotation:1.5 }, 1000).to({rotation:0 }, 1050).to({rotation:-1.5 }, 1100).to({rotation:0 }, 1000);

    cvtw.get(cav_game4.img["game4_plant1_2"], {loop:true}).to({rotation:1.5 }, 1390).to({rotation:0 }, 1300).to({rotation:-1.5 }, 1310).to({rotation:0 }, 1370);

    cvtw.get(cav_game4.img["game4_plant1_1"], {loop:true}).to({rotation:2 }, 1510).to({rotation:0 }, 1550);
    cvtw.get(cav_game4.img["game4_plant1_3"], {loop:true}).to({rotation:-1.3 }, 1010).to({rotation:0 }, 1050).to({rotation:1.3 }, 1030).to({rotation:0 }, 1070);
    cvtw.get(cav_game4.img["game4_plant1_4"], {loop:true}).to({rotation:-2 }, 1010).to({rotation:0 }, 1050).to({rotation:2 }, 1030).to({rotation:0 }, 1070);

    cvtw.get(cav_game4.img["game4_ci1"], {loop:true}).to({rotation:359 }, 13000);
    cvtw.get(cav_game4.img["game4_ci2"], {loop:true}).to({rotation:359 }, 5000);
    cvtw.get(cav_game4.img["game4_ci3"], {loop:true}).to({rotation:359 }, 13000);
    cvtw.get(cav_game4.img["game4_ci4"], {loop:true}).to({rotation:-359 }, 10000);

    //main
    time_run("game4_clock1", "game4_z1_1", "game4_z1_2", 100);
    time_run("game4_clock2", "game4_z2_1", "game4_z2_2", 30);
    time_run("game4_clock3", "game4_z3_1", "game4_z3_2", 70);
    time_run("game4_clock4", "game4_z4_1", "game4_z4_2", 200);
    time_run("game4_clock5", "game4_z5_1", "game4_z5_2", 10);
    time_run("game4_clock6", "game4_z6_1", "game4_z6_2", 130);
    time_run("game4_clock7", "game4_z7_1", "game4_z7_2", 60);

    function time_run(clock, dom1, dom2, time){
        setInterval(function(){
            if(PG4[clock]) return;

            if(cav_game4.img[dom2].rotation >= 360) cav_game4.img[dom2].rotation = 0;
            if(cav_game4.img[dom1].rotation >= 360) cav_game4.img[dom1].rotation = 0;

            cav_game4.img[dom2].rotation+= 6;
            cav_game4.img[dom1].rotation+= 0.5;

        }, time);

        cav_game4.img[clock].on("click", function () {
            if(PG4.ballMove) return;

            PG4[clock] = 1;

            if(cav_game4.img[dom2].rotation>=360-(6*2) || cav_game4.img[dom2].rotation<=6*2){

                if(cav_game4.img[dom1].rotation>=360-6  || cav_game4.img[dom1].rotation<=6 ){
                    if(PG4.ballPlay12) return;
                    PG4.ballPlay12 = 1;
                    ball(12);
                }

                if(cav_game4.img[dom1].rotation>=30-6  && cav_game4.img[dom1].rotation<=30+6 ){
                    if(PG4.ballPlay1) return;
                    PG4.ballPlay1 = 1;
                    ball(1);
                }
                if(cav_game4.img[dom1].rotation>=(30*2)-6  && cav_game4.img[dom1].rotation<=(30*2)+6 ){
                    if(PG4.ballPlay2) return;
                    PG4.ballPlay2 = 1;
                    ball(2);
                }
                if(cav_game4.img[dom1].rotation>=(30*7)-6  && cav_game4.img[dom1].rotation<=(30*7)+6 ){
                    if(PG4.ballPlay7) return;
                    PG4.ballPlay7 = 1;
                    ball(7);
                }

            }

            setTimeout(function(){
                PG4[clock] = 0
            }, 3000);
        });
    }

    function ball(x){
        var nx = Dom.OriX;
        var ny = Dom.OriY;

        PG4.ballGo = x;

        cvtw.get(cav_game4.img["game4_ball"+PG4.ballGo]).to({alpha:0, x:342, y:555 }, 0).to({alpha:1, x:700*(nx+30)/60, y:1140*(ny-10)/50 }, 500).call(function(){
            PG4.ballMove = 1;
        });
    }

};

Room.Game4.orientation = function(){
    window.addEventListener("deviceorientation", handleOrientation, true);
};

function handleOrientation(event) {

    var x = event.gamma;  // In degree in the range [-180,180]
    var y = event.beta; // In degree in the range [-90,90]
    Dom.OriX = x;
    Dom.OriY = y;

    if(!PG4.ballMove || !PG4.ballGo) return;

    if(y>10 && y<60 && x>-30 && x<30){

        cav_game4.img["game4_ball"+PG4.ballGo].x = 700*(x+30)/60;
        cav_game4.img["game4_ball"+PG4.ballGo].y = 1140*(y-10)/50;

        var xGo = 0;
        var yGo = 0;

        if(PG4.ballGo==12){
            xGo = 362;
            yGo = 435;
        }
        if(PG4.ballGo==1){
            xGo = 303;
            yGo = 664;
        }
        if(PG4.ballGo==2){
            xGo = 303;
            yGo = 435;
        }
        if(PG4.ballGo==7){
            xGo = 362;
            yGo = 664;
        }

        if(xGo && yGo
            && cav_game4.img["game4_ball"+PG4.ballGo].x>=xGo-5 && cav_game4.img["game4_ball"+PG4.ballGo].x<=xGo+5
            && cav_game4.img["game4_ball"+PG4.ballGo].y>=yGo-5 && cav_game4.img["game4_ball"+PG4.ballGo].y<=yGo+5){
            PG4.ballMove = 0;
            cvtw.get(cav_game4.img["game4_ball"+PG4.ballGo]).to({alpha:0.8,  x:xGo, y:yGo }, 300).call(function(){
                PG4.ballPlay++;
                if(PG4.ballPlay==4) GameFinish();
            });

        }

    }

}

function GameFinish(){
    cav_game4.img["game4_ball12"].alpha = 0;
    cav_game4.img["game4_ball1"].alpha = 0;
    cav_game4.img["game4_ball2"].alpha = 0;
    cav_game4.img["game4_ball7"].alpha = 0;
    cav_game4.sprite["game4_box_open"].alpha = 1;
    mp3_play("game4_open");
    cav_game4.sprite["game4_box_open"].gotoAndPlay("run");

    $("#Game4 ._next").css("opacity",0).show().velocity({ opacity: 1}, {delay:3000, duration: 1000 });
}