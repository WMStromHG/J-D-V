var cav_game3,
    PG3 = {};

function GameLoad3(){
    try{
        cav_game2.stage.removeAllChildren();
        cav_game2.stage.clear();
        cav_game2 = "";
        Loads.loaded = [];
        Loads.list = [];
    }catch(e){}

    Dom.loadWord = $("#GameLoad3 .loadw");
    Dom.loadLine = $("#GameLoad3 .line");

    cav_game3 = new CanvasCreate($("#cav_game3"));

    Loads.loads("game3_border1",  "img/", "border1.png");
    Loads.loads("game3_border2",  "img/", "border2.png");
    Loads.loads("game3_border3",  "img/", "border3.png");
    Loads.loads("game3_border4",  "img/", "border4.png");
    // game
    Loads.loads("game3_bg",  "img/game3/", "bg.png");
    Loads.loads("game3_book",  "img/game3/", "book.png");
    Loads.loads("game3_book2",  "img/game3/", "book2.png");
    Loads.loads("game3_lamp",  "img/game3/", "lamp.png");
    Loads.loads("game3_light1",  "img/game3/", "light1.png");
    Loads.loads("game3_light2",  "img/game3/", "light2.png");
    Loads.loads("game3_light3",  "img/game3/", "light3.png");
    Loads.loads("game3_light4",  "img/game3/", "light4.png");
    Loads.loads("game3_light5",  "img/game3/", "light5.png");

    for(var i =1 ; i<=25; i++)
        Loads.loads("game3_ok"+i,  "img/game3/ok/", "ok ("+i+").png");

    Loads.loads("game3_box1",  "img/game3/", "box1.png");
    Loads.loads("game3_box2",  "img/game3/", "box2.png");
    Loads.loads("game3_box3",  "img/game3/", "box3.png");
    Loads.loads("game3_box4",  "img/game3/", "box4.png");
    Loads.loads("game3_box5",  "img/game3/", "box5.png");
    Loads.loads("game3_box6",  "img/game3/", "box6.png");
    Loads.loads("game3_box7",  "img/game3/", "box7.png");
    Loads.loads("game3_box8",  "img/game3/", "box8.png");
    Loads.loads("game3_box9",  "img/game3/", "box9.png");
    Loads.loads("game3_box10",  "img/game3/", "box10.png");
    Loads.loads("game3_box11",  "img/game3/", "box11.png");
    Loads.loads("game3_box12",  "img/game3/", "box12.png");
    Loads.loads("game3_box13",  "img/game3/", "box13.png");

    Loads.loads("game3_lamp0",  "img/game3/", "lamp0.png");
    Loads.loads("game3_desk",  "img/game3/", "desk.png");

    game3_load_mp3();

    Loads.loads("x3",  "img/", "x.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad3_cav();
        Room.Game3.ini();

        setTimeout( Room.GameLoad3.ppt , 300);
    };
    Loads.loading();
}

function game3_load_mp3(){
    Loads.loads("mp3_game3_book",  "mp3/game3/", "book.mp3");
    Loads.loads("mp3_game3_fire",  "mp3/game3/", "fire.mp3");
    Loads.loads("mp3_game3_light",  "mp3/game3/", "light.mp3");
    Loads.loads("mp3_game3_light1",  "mp3/game3/", "light1.mp3");
    Loads.loads("mp3_game3_magic",  "mp3/game3/", "magic.mp3");
}

function GameLoad3_cav(){

    cav_game3.ccv("game3");
    cav_game3.framerate = 10;


    cav_game3.drawImg("game3_bg");
    //加载到页面

    cav_game3.drawImg("game3_box1","",{x:33, y:34, alpha: 0.01});
    cav_game3.drawImg("game3_box2","",{x:136, y:33,alpha: 0.01});
    cav_game3.drawImg("game3_box3","",{x:240, y:33,alpha: 0.01});
    cav_game3.drawImg("game3_box4","",{x:353, y:32,alpha: 0.01});
    cav_game3.drawImg("game3_box5","",{x:519, y:30,alpha: 0.01});
    cav_game3.drawImg("game3_box6","",{x:34, y:281,alpha: 0.01});
    cav_game3.drawImg("game3_box7","",{x:353, y:277,alpha: 0.01});
    cav_game3.drawImg("game3_box8","",{x:519, y:278,alpha: 0.01});
    cav_game3.drawImg("game3_box9","",{x:34, y:520,alpha: 0.01});
    cav_game3.drawImg("game3_box10","",{x:188, y:523,alpha: 0.01});
    cav_game3.drawImg("game3_box11","",{x:355, y:668,alpha: 0.01});
    cav_game3.drawImg("game3_box12","",{x:519, y:667,alpha: 0.01});
    cav_game3.drawImg("game3_box13","",{x:33, y:913,alpha: 0.01});

    cav_game3.drawImg("game3_lamp0","",{x:371, y:0});

    var gra1 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,109,154);
    cav_game3.drawMark("game3_lamp",gra1,{x:367+55, y:510+77, regX:55, regY:77});
    cav_game3.drawImgMark("game3_lamp","",{x:371, y:0});
    cav_game3.mark["game3_lamp"].scaleX = 0.01;
    cav_game3.mark["game3_lamp"].scaleY = 0.01;

    cav_game3.drawImg("game3_desk","",{x:221, y:878});

    cav_game3.drawSprite("game3_light1","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:54,y:149, scaleX:0.7, scaleY:0.7}
    },[Loads.loaded["game3_light2"]], "game3_light2");

    cav_game3.drawSprite("game3_light2","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:139,y:99}
    },[Loads.loaded["game3_light4"]], "game3_light4");

    cav_game3.drawSprite("game3_light3","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:220,y:95}
    },[Loads.loaded["game3_light3"]], "game3_light3");

    cav_game3.drawSprite("game3_light4","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:343,y:98}
    },[Loads.loaded["game3_light2"]], "game3_light2");

    cav_game3.drawSprite("game3_light5","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:588,y:115}
    },[Loads.loaded["game3_light1"]], "game3_light1");

    cav_game3.drawSprite("game3_light6","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:64,y:341}
    },[Loads.loaded["game3_light5"]], "game3_light5");

    cav_game3.drawSprite("game3_light7","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:419,y:305}
    },[Loads.loaded["game3_light3"]], "game3_light3");


    cav_game3.drawSprite("game3_light8","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:530,y:295}
    },[Loads.loaded["game3_light1"]], "game3_light1");


    cav_game3.drawSprite("game3_light11","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:417,y:709}
    },[Loads.loaded["game3_light5"]], "game3_light5");


    cav_game3.drawSprite("game3_light12","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:564,y:722}
    },[Loads.loaded["game3_light1"]], "game3_light1");

    cav_game3.drawSprite("game3_book","",{
        framerate:8,
        mov: {
            ini:[0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game3.drawSprite("game3_book2","",{
        mov: {
            ini:[0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game3.drawSprite("game3_lightEnd","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:510,y:814}
    },[Loads.loaded["game3_light1"]], "game3_light1");

    cav_game3.drawPhotos("game3_ok","","game3_ok",25,{
        frames:[0,0,700,1140],
        framerate:8,
        mov: {
            ini:[0],
            run:[0,24,"stop"],
            stop:[24]
        }
    });


    //边框
    cav_game3.drawImg("game3_border1","",{x:0, y:0});
    cav_game3.drawImg("game3_border2","",{x:0, y:55});
    cav_game3.drawImg("game3_border3","",{x:43, y:1095});
    cav_game3.drawImg("game3_border4","",{x:657, y:55});

    cav_game3.drawArea("game3_book", "", cv.getArea("game3_book"), "#ffffff", {alpha: 0.01});
    cav_game3.drawArea("game3_book2", "", cv.getArea("game3_book2"), "#ffffff", {alpha: 0.01});
    cav_game3.drawArea("game3_lamp", "", [367,510,109,154], "#ffffff", {alpha: 0.01});
    cav_game3.drawArea("game3_box11", "", [384,697,120,171], "#ffffff", {alpha: 0.01});

    cav_game3.drawArea("game3_box12", "", [582, 684,93, 156 ], "#ffffff", {alpha: 0.01});
    cav_game3.drawArea("game3_lightEnd", "", [504, 840,110, 157 ], "#ffffff", {alpha: 0.01});

    var drawArr = [
        cav_game3.img["game3_bg"],
        
        cav_game3.img["game3_box1"],
        cav_game3.img["game3_box2"],
        cav_game3.img["game3_box3"],
        cav_game3.img["game3_box4"],
        cav_game3.img["game3_box5"],
        cav_game3.img["game3_box6"],
        cav_game3.img["game3_box7"],
        cav_game3.img["game3_box8"],
        cav_game3.img["game3_box9"],
        cav_game3.img["game3_box10"],
        cav_game3.img["game3_box11"],
        cav_game3.img["game3_box12"],
        cav_game3.img["game3_box13"],

        cav_game3.sprite["game3_book"],
        cav_game3.sprite["game3_book2"],

        cav_game3.sprite["game3_light1"],
        cav_game3.sprite["game3_light2"],
        cav_game3.sprite["game3_light3"],
        cav_game3.sprite["game3_light4"],
        cav_game3.sprite["game3_light5"],
        cav_game3.sprite["game3_light6"],
        cav_game3.sprite["game3_light7"],
        cav_game3.sprite["game3_light8"],
        cav_game3.sprite["game3_light11"],
        cav_game3.sprite["game3_light12"],

        cav_game3.img["game3_lamp0"],
        cav_game3.img["game3_lamp"],
        cav_game3.img["game3_desk"],

        cav_game3.sprite["game3_lightEnd"],
        cav_game3.sprite["game3_ok"],

        cav_game3.dom["game3_book"],
        cav_game3.dom["game3_book2"],

        cav_game3.dom["game3_box11"],
        cav_game3.dom["game3_box12"],
        cav_game3.dom["game3_lamp"],
        cav_game3.dom["game3_lightEnd"],

        //边框
        cav_game3.img["game3_border1"],
        cav_game3.img["game3_border2"],
        cav_game3.img["game3_border3"],
        cav_game3.img["game3_border4"]

    ];

    cav_game3.draw("game3", drawArr);
    cav_game3.show("game3");

}
