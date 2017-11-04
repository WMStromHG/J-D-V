var cav_game4,
    PG4 = {};

function GameLoad4(){

    try{
        cav_game3.stage.removeAllChildren();
        cav_game3.stage.clear();
        cav_game3 = "";
        Loads.loaded = [];
        Loads.list = [];
    }catch(e){}


    Dom.loadWord = $("#GameLoad4 .loadw");
    Dom.loadLine = $("#GameLoad4 .line");

    cav_game4 = new CanvasCreate($("#cav_game4"));

    Loads.loads("game4_border1",  "img/", "border1.png");
    Loads.loads("game4_border2",  "img/", "border2.png");
    Loads.loads("game4_border3",  "img/", "border3.png");
    Loads.loads("game4_border4",  "img/", "border4.png");
    // game
    Loads.loads("game4_bg",  "img/game4/", "bg.png");
    Loads.loads("game4_box",  "img/game4/", "box.png");

    for(var i =1 ; i<=15; i++)
        Loads.loads("game4_box_open_"+i,  "img/game4/box_open/", "box_open ("+i+").png");

    for(var i =1 ; i<=7; i++){
        Loads.loads("game4_clock"+i,  "img/game4/", "clock"+i+".png");
        Loads.loads("game4_z"+i+"_1",  "img/game4/", "z"+i+"_1.png");
        Loads.loads("game4_z"+i+"_2",  "img/game4/", "z"+i+"_2.png");
    }

    Loads.loads("game4_plant0",  "img/game4/plant/", "plant0.png");
    Loads.loads("game4_plant0_1",  "img/game4/plant/", "plant0_1.png");
    Loads.loads("game4_plant1_1",  "img/game4/plant/", "plant1_1.png");
    Loads.loads("game4_plant1_2",  "img/game4/plant/", "plant1_2.png");
    Loads.loads("game4_plant1_3",  "img/game4/plant/", "plant1_3.png");
    Loads.loads("game4_plant1_4",  "img/game4/plant/", "plant1_4.png");

    Loads.loads("game4_butterfly",  "img/game4/", "butterfly.png");

    Loads.loads("game4_ci1",  "img/game4/", "ci1.png");
    Loads.loads("game4_ci2",  "img/game4/", "ci2.png");
    Loads.loads("game4_ci3",  "img/game4/", "ci3.png");
    Loads.loads("game4_ci4",  "img/game4/", "ci4.png");
    Loads.loads("game4_ball",  "img/game4/", "ball.png");

    Loads.loads("x4",  "img/", "x.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad4_cav();
        Room.Game4.ini();

        setTimeout( Room.GameLoad4.ppt , 300);
    };
    setTimeout(Loads.loading, 200);
}

function GameLoad4_cav(){

    cav_game4.ccv("game4");
    cav_game4.framerate = 10;


    cav_game4.drawImg("game4_bg");
    //加载到页面

    cav_game4.drawPhotos("game4_box_open","","game4_box_open_",15,{
        frames:[0,0,700,1140],
        framerate:6,
        mov: {
            ini:[0],
            run:[0,14,"stop"],
            stop:[14]
        },
        conf:{alpha:0}
    });

    cav_game4.drawSprite("game4_butterfly1","",{
        mov: {
            ini: [0, 24, "ini"]
        },
        conf:{ x:74, y:312, rotation:45, scaleX:0.8, scaleY:0.8}
    },[Loads.loaded["game4_butterfly"]], "game4_butterfly");

    cav_game4.drawSprite("game4_butterfly2","",{
        mov: {
            ini: [25, 25+24, "ini"]
        },
        conf:{ x:454, y:872, rotation:-45}
    },[Loads.loaded["game4_butterfly"]], "game4_butterfly");

    cav_game4.drawSprite("game4_butterfly3","",{
        mov: {
            ini: [25+24+1, 25+24+1+24, "ini"]
        },
        conf:{ x:565, y:530, rotation:-40, scaleX:0.8, scaleY:0.8}
    },[Loads.loaded["game4_butterfly"]], "game4_butterfly");

    cav_game4.drawImg("game4_ci1","",{x:287+74  , y:193+75 , regX:74, regY:75});
    cav_game4.drawImg("game4_ci2","",{x:158+42  , y:390+42 , regX:42, regY:42});
    cav_game4.drawImg("game4_ci3","",{x:405+57 , y:820+57 , regX:57, regY:57});
    cav_game4.drawImg("game4_ci4","",{x:485+44 , y:768+42 , regX:44, regY:42});
    cav_game4.drawImg("game4_ball12","",{ alpha:0},Loads.loaded["game4_ball"]);
    cav_game4.drawImg("game4_ball1","",{ alpha:0},Loads.loaded["game4_ball"]);
    cav_game4.drawImg("game4_ball2","",{ alpha:0},Loads.loaded["game4_ball"]);
    cav_game4.drawImg("game4_ball7","",{ alpha:0},Loads.loaded["game4_ball"]);

    cav_game4.drawImg("game4_plant0");
    cav_game4.drawImg("game4_plant0_1","",{x:405, y:797+343, regY:343});
    cav_game4.drawImg("game4_plant1_1","",{x:418+260, y:310+221, regX:260, regY:221});
    cav_game4.drawImg("game4_plant1_2","",{x:401+180, y:635+200, regX:180, regY:200});
    cav_game4.drawImg("game4_plant1_3","",{x:53, y:741+399, regX:53, regY:399});
    cav_game4.drawImg("game4_plant1_4","",{x:31+100, y:748+136, regX:100, regY:136});

    cav_game4.drawImg("game4_box","",{x:188, y:157});

    cav_game4.drawImg("game4_clock1","",{x:100, y:204});
    cav_game4.drawImg("game4_clock2","",{x:93, y:474});
    cav_game4.drawImg("game4_clock3","",{x:-37, y:616 });
    cav_game4.drawImg("game4_clock4","",{x:281  , y:852  });
    cav_game4.drawImg("game4_clock5","",{x:592 , y:763 });
    cav_game4.drawImg("game4_clock6","",{x:473 , y:654 });
    cav_game4.drawImg("game4_clock7","",{x:463 , y:532 });

    cav_game4.drawImg("game4_z1_1","",{x:172+1, y:244+33, regX:1, regY:33});
    cav_game4.drawImg("game4_z2_1","",{x:176+5, y:516+47, regX:5, regY:47});
    cav_game4.drawImg("game4_z3_1","",{x:54+9, y:678+35, regX:9, regY:35});
    cav_game4.drawImg("game4_z4_1","",{x:358+8, y:904+34, regX:8, regY:34});
    cav_game4.drawImg("game4_z5_1","",{x:646+4, y:800+20, regX:4, regY:20});
    cav_game4.drawImg("game4_z6_1","",{x:542+4, y:691+39, regX:4, regY:39});
    cav_game4.drawImg("game4_z7_1","",{x:536+7, y:583+31, regX:7, regY:31});

    cav_game4.drawImg("game4_z1_2","",{x:172+1, y:227+50, regX:1, regY:50});
    cav_game4.drawImg("game4_z2_2","",{x:176+5, y:494+68, regX:5, regY:68});
    cav_game4.drawImg("game4_z3_2","",{x:54+9, y:655+59, regX:9, regY:59});
    cav_game4.drawImg("game4_z4_2","",{x:358+8, y:882+55, regX:8, regY:55});
    cav_game4.drawImg("game4_z5_2","",{x:646+4, y:788+33, regX:4, regY:33});
    cav_game4.drawImg("game4_z6_2","",{x:541+5, y:669+61, regX:5, regY:61});
    cav_game4.drawImg("game4_z7_2","",{x:540+4, y:572+42, regX:4, regY:42});


    //边框
    cav_game4.drawImg("game4_border1","",{x:0, y:0});
    cav_game4.drawImg("game4_border2","",{x:0, y:55});
    cav_game4.drawImg("game4_border3","",{x:43, y:1095});
    cav_game4.drawImg("game4_border4","",{x:657, y:55});

    var drawArr = [
        cav_game4.img["game4_bg"],

        cav_game4.img["game4_ci1"],
        cav_game4.img["game4_ci2"],
        cav_game4.img["game4_ci3"],
        cav_game4.img["game4_ci4"],

        cav_game4.img["game4_clock1"],
        cav_game4.img["game4_z1_2"],
        cav_game4.img["game4_z1_1"],


        cav_game4.img["game4_clock2"],
        cav_game4.img["game4_z2_2"],
        cav_game4.img["game4_z2_1"],


        cav_game4.img["game4_clock4"],
        cav_game4.img["game4_z4_2"],
        cav_game4.img["game4_z4_1"],


        cav_game4.img["game4_clock5"],
        cav_game4.img["game4_z5_2"],
        cav_game4.img["game4_z5_1"],


        cav_game4.img["game4_clock7"],
        cav_game4.img["game4_z7_2"],
        cav_game4.img["game4_z7_1"],


        cav_game4.img["game4_clock6"],
        cav_game4.img["game4_z6_2"],
        cav_game4.img["game4_z6_1"],

        cav_game4.img["game4_box"],
        cav_game4.sprite["game4_box_open"],

        cav_game4.img["game4_plant0"],


        cav_game4.img["game4_clock3"],
        cav_game4.img["game4_z3_2"],
        cav_game4.img["game4_z3_1"],


        cav_game4.img["game4_plant1_1"],
        cav_game4.img["game4_plant1_2"],
        cav_game4.img["game4_plant1_4"],
        cav_game4.img["game4_plant1_3"],

        cav_game4.sprite["game4_butterfly1"],

        cav_game4.sprite["game4_butterfly3"]


    ];

    cav_game4.draw("game4", drawArr);
    cav_game4.show("game4");


    cav_game4.ccv("game4_1");
    cav_game4.framerate = 10;

    drawArr = [
        cav_game4.img["game4_plant0_1"],
        cav_game4.sprite["game4_butterfly2"]
    ];
    cav_game4.draw("game4_1", drawArr);
    cav_game4.show("game4_1","", "", 1);


    cav_game4.ccv("game4_2");
    drawArr = [
        cav_game4.img["game4_ball12"],
        cav_game4.img["game4_ball1"],
        cav_game4.img["game4_ball2"],
        cav_game4.img["game4_ball7"],
        cav_game4.img["game4_border1"],
        cav_game4.img["game4_border2"],
        cav_game4.img["game4_border3"],
        cav_game4.img["game4_border4"]
    ];
    cav_game4.draw("game4_2", drawArr);
    cav_game4.show("game4_2","", "", 2);


}
