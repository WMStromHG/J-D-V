var cav_game2,
    PG2 = {};

function GameLoad2(){
    try{
        cav_game1.stage.removeAllChildren();
        cav_game1.stage.clear();
        cav_game1 = "";
        Loads.loaded = [];
        Loads.list = [];
    }catch(e){}

    Dom.loadWord = $("#GameLoad2 .loadw");
    Dom.loadLine = $("#GameLoad2 .line");

    cav_game2 = new CanvasCreate($("#cav_game2"));

    //border
    Loads.loads("game2_border1",  "img/", "border1.png");
    Loads.loads("game2_border2",  "img/", "border2.png");
    Loads.loads("game2_border3",  "img/", "border3.png");
    Loads.loads("game2_border4",  "img/", "border4.png");
    // game
    Loads.loads("game2_eye0",  "img/game2/", "eye0.png");
    Loads.loads("game2_gamedoor_no",  "img/game2/", "gamedoor_no.png");
    Loads.loads("game2_m1",  "img/game2/", "m1.png");
    Loads.loads("game2_m2",  "img/game2/", "m2.png");
    Loads.loads("game2_m3",  "img/game2/", "m3.png");
    Loads.loads("game2_key0",  "img/game2/", "key0.png");


    Loads.loads("game2_bg",  "img/game2/", "bg.png");
    Loads.loads("game2_brain",  "img/game2/", "brain.png");
    Loads.loads("game2_camera",  "img/game2/", "camera.png");
    Loads.loads("game2_curtain",  "img/game2/", "curtain.png");
    Loads.loads("game2_door",  "img/game2/", "door.png");
    Loads.loads("game2_drawer",  "img/game2/", "drawer.png");
    Loads.loads("game2_eye",  "img/game2/", "eye.png");
    Loads.loads("game2_gamedoor",  "img/game2/", "gamedoor.png");
    Loads.loads("game2_glass",  "img/game2/", "glass.png");
    Loads.loads("game2_heart",  "img/game2/", "heart.png");
    Loads.loads("game2_key",  "img/game2/", "key.png");
    Loads.loads("game2_tv",  "img/game2/", "tv.png");

    game2_load_mp3();

    Loads.loads("x2",  "img/", "x.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad2_cav();
        Room.Game2.ini();

        setTimeout( Room.GameLoad2.ppt , 300);
    };
    Loads.loading();
}

function game2_load_mp3(){
    Loads.loads("mp3_game2_brain",  "mp3/game2/", "brain.mp3");
    Loads.loads("mp3_game2_camera",  "mp3/game2/", "camera.mp3");
    Loads.loads("mp3_game2_curtain",  "mp3/game2/", "curtain.mp3");
    Loads.loads("mp3_game2_door",  "mp3/game2/", "door.mp3");
    Loads.loads("mp3_game2_drawer",  "mp3/game2/", "drawer.mp3");
    Loads.loads("mp3_game2_gamedoor",  "mp3/game2/", "gamedoor.mp3");
    Loads.loads("mp3_game2_glass",  "mp3/game2/", "glass.mp3");
    Loads.loads("mp3_game2_heart",  "mp3/game2/", "heart.mp3");
    Loads.loads("mp3_game2_key",  "mp3/game2/", "key.mp3");
    Loads.loads("mp3_game2_tv",  "mp3/game2/", "tv.mp3");
    Loads.loads("mp3_game2_tv2",  "mp3/game2/", "tv2.mp3");
}

function GameLoad2_cav(){

    cav_game2.ccv("game2");
    cav_game2.framerate = 10;

    cav_game2.drawImg("game2_bg");

    cav_game2.drawSprite("game2_eye","",{
        mov: {
            ini: [0],
            run:[0,12,"ini"]
        },
        conf:{ alpha:0 }
    });
    cav_game2.drawImg("game2_eye0","",{x:119+37, y:74+37, regX:37, regY:37,  scaleX:0.2, scaleY:0.2, alpha:0});

    cav_game2.drawSprite("game2_glass","",{
        mov: {
            ini: [0],
            run:[0,12,"stop"],
            stop:[12],
            back:{ frames: cv.back(12), next:"ini"}
        }
    });
    cav_game2.drawSprite("game2_drawer","",{
        framerate:8,
        mov: {
            ini: [0],
            run:[0,12,"stop"],
            stop:[12],
            back:{ frames: cv.back(12), next:"ini"},
            no:{ frames: cv.ping(3), next:"ini"}
        }
    });
    cav_game2.drawSprite("game2_brain","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game2.drawSprite("game2_gamedoor","",{
        framerate:8,
        mov: {
            ini: [0],
            run: [0,12,"stop"],
            stop:[12]
        }
    });

    cav_game2.drawImg("game2_gamedoor_no","",{x:235, y:434});

    cav_game2.drawSprite("game2_curtain","",{
        mov: {
            ini: [0],
            run:[0,12,"stop"],
            stop:[12],
            back:{ frames: cv.back(12), next:"ini"}
        }
    });

    cav_game2.drawSprite("game2_heart","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game2.drawSprite("game2_door","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game2.drawSprite("game2_camera","",{
        mov: {
            ini: [0],
            run:[0,8,"stop"],
            stop:[8],
            down:[9,14,"ini"]

        }
    });
    cav_game2.drawSprite("game2_key","",{
        mov: {
            ini: [0],
            run:[0,12,"stop"],
            stop:[12],
            back:{ frames: cv.back(12), next:"ini"}
        }
    });

    cav_game2.drawSprite("game2_tv","",{
        mov: {
            ini: [0],
            run:[0,12,"ini"]
        }
    });

    cav_game2.drawImg("game2_m1","",{x:420-700, y:62, alpha: 0});
    cav_game2.drawImg("game2_m2","",{x:101-700, y:295, alpha: 0});
    cav_game2.drawImg("game2_m3","",{x:68-700, y:964, alpha: 0});
    cav_game2.drawImg("game2_key0","",{x:570-700, y:971, alpha: 0});

    //边框
    cav_game2.drawImg("game2_border1","",{x:0, y:0});
    cav_game2.drawImg("game2_border2","",{x:0, y:55});
    cav_game2.drawImg("game2_border3","",{x:43, y:1095});
    cav_game2.drawImg("game2_border4","",{x:657, y:55});

    cav_game2.drawArea("game2_drawer", "", cv.getArea("game2_drawer"), "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_eye", "", [81,34,155,162], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_glass", "", [272,90,156,308], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_curtain", "", [498,324,158,279], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_brain", "", [92,672,109,89], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_camera", "", [60,831,132,121], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_tv", "", [236,774,192,152], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_heart", "", [172,971,138,100], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_door", "", [350,953,78,144], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_key", "", [498,634,158,221], "#ffffff", {alpha: 0.01});

    cav_game2.drawArea("game2_m3", "", [46,943,88,104], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_m1", "", [425,27,92,115], "#ffffff", {alpha: 0.01});
    cav_game2.drawArea("game2_m2", "", [56,259,107,126], "#ffffff", {alpha: 0.01});

    cav_game2.drawArea("game2_key0", "", [570,971,43,119], "#ffffff", {alpha: 0.01});

    var drawArr = [
        cav_game2.img["game2_bg"],

        cav_game2.sprite["game2_eye"],
        cav_game2.img["game2_eye0"],

        cav_game2.sprite["game2_glass"],
        cav_game2.sprite["game2_drawer"],
        cav_game2.sprite["game2_brain"],
        cav_game2.sprite["game2_gamedoor"],
        cav_game2.img["game2_gamedoor_no"],

        cav_game2.sprite["game2_curtain"],
        cav_game2.sprite["game2_tv"],
        cav_game2.sprite["game2_heart"],
        cav_game2.sprite["game2_door"],
        cav_game2.sprite["game2_camera"],
        cav_game2.sprite["game2_key"],

        cav_game2.dom["game2_drawer"],
        cav_game2.dom["game2_eye"],
        cav_game2.dom["game2_glass"],
        cav_game2.dom["game2_curtain"],
        cav_game2.dom["game2_brain"],
        cav_game2.dom["game2_camera"],
        cav_game2.dom["game2_tv"],
        cav_game2.dom["game2_heart"],
        cav_game2.dom["game2_door"],
        cav_game2.dom["game2_key"],

        cav_game2.dom["game2_m1"],
        cav_game2.dom["game2_m2"],
        cav_game2.dom["game2_m3"],

        cav_game2.dom["game2_key0"],

        cav_game2.img["game2_m1"],
        cav_game2.img["game2_m2"],
        cav_game2.img["game2_m3"],
        cav_game2.img["game2_key0"],

        cav_game2.img["game2_border1"],
        cav_game2.img["game2_border2"],
        cav_game2.img["game2_border3"],
        cav_game2.img["game2_border4"]
    ];

    cav_game2.draw("game2", drawArr);
    cav_game2.show("game2");

}
