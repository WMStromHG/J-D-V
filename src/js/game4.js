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
};
Room.Game4.ppt = function(){
    // cc.ppt(["Game3", "GameLoad4"] , function(after , callback){
    //     cc.m["Game3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
    //     cc.m["GameLoad4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
    //         after.go();
    //     }});
    // })
};

Room.Game4.ini = function(){

    //loop
    console.log(cav_game4.cc["game4_1"]);
    cav_game4.cc["game4_1"].regX = 464;
    cav_game4.cc["game4_1"].regY = 1104;
    cav_game4.cc["game4_1"].x = 464;
    cav_game4.cc["game4_1"].y = 1104;
    cvtw.get(cav_game4.cc["game4_1"], {loop:true}).to({rotation:1.5 }, 1000).to({rotation:0 }, 1050).to({rotation:-1.5 }, 1100).to({rotation:0 }, 1000);

    cvtw.get(cav_game4.img["game4_plant1_2"], {loop:true}).to({rotation:1.5 }, 1390).to({rotation:0 }, 1300).to({rotation:-1.5 }, 1310).to({rotation:0 }, 1370);

    cvtw.get(cav_game4.img["game4_plant1_1"], {loop:true}).to({rotation:2 }, 1510).to({rotation:0 }, 1550);
    cvtw.get(cav_game4.img["game4_plant1_3"], {loop:true}).to({rotation:-1.3 }, 1010).to({rotation:0 }, 1050).to({rotation:1.3 }, 1030).to({rotation:0 }, 1070);
    cvtw.get(cav_game4.img["game4_plant1_4"], {loop:true}).to({rotation:-2 }, 1010).to({rotation:0 }, 1050).to({rotation:2 }, 1030).to({rotation:0 }, 1070);

    //main
    time_run("game4_z1_1", "game4_z1_2", 100);
    time_run("game4_z2_1", "game4_z2_2", 30);
    time_run("game4_z3_1", "game4_z3_2", 70);
    time_run("game4_z4_1", "game4_z4_2", 200);
    time_run("game4_z5_1", "game4_z5_2", 10);
    time_run("game4_z6_1", "game4_z6_2", 130);
    time_run("game4_z7_1", "game4_z7_2", 60);

    function time_run(dom1, dom2, time){
        setInterval(function(){
            if(cav_game4.img[dom2].rotation == 360){

                if(cav_game4.img[dom1].rotation == 360) cav_game4.img[dom1].rotation = 0;

                cvtw.get(cav_game4.img[dom1]).to({rotation:cav_game4.img[dom1].rotation+6 }, time*30);
                cav_game4.img[dom2].rotation = 0;
            }
            cav_game4.img[dom2].rotation+= 6;
        }, time);
    }


};
