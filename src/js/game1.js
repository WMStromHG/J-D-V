Room.GameLoad1 = {};
Room.GameLoad1.ppt = function(){
    cc.ppt(["GameLoad1", "Game1"] , function(after , callback){
        cc.m["GameLoad1"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game1"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game1 = {};
Room.Game1.dom = function(){
    $("#Game1 ._next .btn").tap(function(e){
        cc.tap(e);
        Room.Game1.ppt();
    })
};
Room.Game1.ppt = function(){
    cc.ppt(["Game1", "GameLoad2"] , function(after , callback){
        cc.m["Game1"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad2();
        }});
    })
};
Room.Game1.go_after = function(){
    clearInterval(Hand.game1_yun1);
    clearInterval(Hand.game1_yun2);
    clearInterval(Hand.game1_yun3);
    cav_game1.sprite["game1_star"].stop();
    cav_game1.sprite["game1_ufo"].stop();
};
Room.Game1.ini = function(){
    // main
    cav_game1.dom["game1_book2"].on("click", function () {
        mp3_play("game1_book");
        cav_game1.sprite["game1_book2"].gotoAndPlay("run");
        PG1.glass = 1;
    });

    cav_game1.dom["game1_book3"].on("click", function () {
        mp3_play("game1_book");
        cav_game1.sprite["game1_book3"].gotoAndPlay("run");
        PG1.ufo = 1;
    });

    cav_game1.dom["game1_glass1"].on("click", function () {
        if(PG1.ufo && PG1.ufo_play) {
            if(PG1.glass){
                mp3_play("game1_glass");
                cav_game1.sprite["game1_glass2"].gotoAndPlay("run");
                cav_game1.spriteMovEnd("game1_glass2", function(){
                    cvtw.get(cav_game1.sprite["game1_ufo_light"]).to({alpha:0 }, 700);

                    mp3_play("game1_clothes");
                    cav_game1.sprite["game1_clothes"].gotoAndPlay("run");
                    $("#Game1 ._next").css("opacity",0).show().velocity({ opacity: 1}, {delay:3000, duration: 1000 });
                });
            }else cav_game1.sprite["game1_glass2"].gotoAndPlay("no");

        }else {
            mp3_play("game1_glass");
            cav_game1.sprite["game1_glass1"].gotoAndPlay("run");
        }
    });
    cav_game1.dom["game1_ufo"].on("click", function () {
        PG1.ufo_play = 1;
        if(PG1.ufo) {
            mp3_play("game1_ufo");
            mp3_play("game1_ufo_light");
            cav_game1.sprite["game1_ufo"].gotoAndPlay("play");
            cav_game1.sprite["game1_ufo_light"].gotoAndPlay("play");
        }
        else {
            mp3_play("game1_ufo");
            cav_game1.sprite["game1_ufo"].gotoAndPlay("run");
        }
    });


    // else
    cav_game1.dom["game1_brain"].on("click", function () {
        mp3_play("game1_brain");
        cav_game1.sprite["game1_brain"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_book1"].on("click", function () {
        mp3_play("game1_book");
        cav_game1.sprite["game1_book1"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_draw"].on("click", function () {
        mp3_play("game1_draw");
        cav_game1.sprite["game1_draw"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_bookshow"].on("click", function () {
        mp3_play("game1_bookshow");
        cav_game1.sprite["game1_bookshow"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_rocket"].on("click", function () {
        cav_game1.sprite["game1_rocket"].gotoAndPlay("run");
        cvtw.removeTweens(cav_game1.sprite["game1_rocket"]);
        cvtw.get(cav_game1.sprite["game1_rocket"]).wait(1200).to({alpha:0 }, 500).to({alpha:1 }, 700);
    });

    cav_game1.dom["game1_sewing"].on("click", function () {
        mp3_play("game1_sewing");
        cav_game1.sprite["game1_sewing"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_drawer"].on("click", function () {
        mp3_play("game1_drawer");
        cav_game1.sprite["game1_drawer"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_flower"].on("click", function () {
        mp3_play("game1_flower");
        cav_game1.sprite["game1_flower"].gotoAndPlay("run");
    });

    //mov
    Hand.game1_yun1 = cv.movWiggle(cav_game1.img["game1_yun1"], 15,5);
    Hand.game1_yun2 = cv.movWiggle(cav_game1.img["game1_yun2"], 25,10);
    Hand.game1_yun3 = cv.movWiggle(cav_game1.img["game1_yun3"], 35,15);

};
