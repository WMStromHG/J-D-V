var cav_game1,
    PG1 = {};

function GameLoad1(){

    Dom.loadWord = $("#GameLoad1 .loadw");
    Dom.loadLine = $("#GameLoad1 .line");

    cav_game1 = new CanvasCreate($("#cav_game1"));

    //border
    Loads.loads("border1",  "img/", "border1.png");
    Loads.loads("border2",  "img/", "border2.png");
    Loads.loads("border3",  "img/", "border3.png");
    Loads.loads("border4",  "img/", "border4.png");

    // game
    Loads.loads("game1_bg",  "img/game1/", "bg.png");

    Loads.loads("game1_yun1",  "img/game1/", "yun1.png");
    Loads.loads("game1_yun2",  "img/game1/", "yun2.png");
    Loads.loads("game1_yun3",  "img/game1/", "yun3.png");

    Loads.loads("game1_brain",  "img/game1/", "brain.png");
    Loads.loads("game1_book1",  "img/game1/", "book1.png");
    Loads.loads("game1_book2",  "img/game1/", "book2.png");
    Loads.loads("game1_book3",  "img/game1/", "book3.png");
    Loads.loads("game1_bookshow",  "img/game1/", "bookshow.png");
    Loads.loads("game1_clothes",  "img/game1/", "clothes.png");
    Loads.loads("game1_draw",  "img/game1/", "draw.png");
    Loads.loads("game1_drawer",  "img/game1/", "drawer.png");
    Loads.loads("game1_flower",  "img/game1/", "flower.png");
    Loads.loads("game1_glass1",  "img/game1/", "glass1.png");
    Loads.loads("game1_glass2",  "img/game1/", "glass2.png");
    Loads.loads("game1_rocket",  "img/game1/", "rocket.png");
    Loads.loads("game1_sewing",  "img/game1/", "sewing.png");
    Loads.loads("game1_star",  "img/game1/", "star.png");
    Loads.loads("game1_ufo",  "img/game1/", "ufo.png");
    Loads.loads("game1_ufo_light",  "img/game1/", "ufo_light.png");

    game1_load_mp3();

    Loads.loads("x",  "img/", "x.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad1_cav();
        Room.Game1.ini();

        setTimeout( Room.GameLoad1.ppt , 300);
    };
    Loads.loading();
}

function game1_load_mp3(){
    Loads.loads("mp3_game1_book",  "mp3/game1/", "book.mp3");
    Loads.loads("mp3_game1_bookshow",  "mp3/game1/", "bookshow.mp3");
    Loads.loads("mp3_game1_brain",  "mp3/game1/", "brain.mp3");
    Loads.loads("mp3_game1_clothes",  "mp3/game1/", "clothes.mp3");
    Loads.loads("mp3_game1_draw",  "mp3/game1/", "draw.mp3");
    Loads.loads("mp3_game1_drawer",  "mp3/game1/", "drawer.mp3");
    Loads.loads("mp3_game1_flower",  "mp3/game1/", "flower.mp3");
    Loads.loads("mp3_game1_glass",  "mp3/game1/", "glass.mp3");
    Loads.loads("mp3_game1_sewing",  "mp3/game1/", "sewing.mp3");
    Loads.loads("mp3_game1_ufo",  "mp3/game1/", "ufo.mp3");
    Loads.loads("mp3_game1_ufo_light",  "mp3/game1/", "ufo_light.mp3");
}

function GameLoad1_cav(){

    cav_game1.ccv("game1");
    cav_game1.framerate = 10;

    cav_game1.drawImg("game1_bg");
    cav_game1.drawImg("game1_yun1","",{x:105, y:28});
    cav_game1.drawImg("game1_yun2","",{x:558, y:396});
    cav_game1.drawImg("game1_yun3","",{x:-143, y:925});

    cav_game1.drawSprite("game1_draw","",{
        mov: {
            ini: [0],
            run: [0,12,"back"],
            back:{ frames:[12,12,12,8,3,2,1,0], next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_star","",{
        framerate:6,
        mov: {
            ini: { frames: cv.ping(12)}
        }
    });

    cav_game1.drawSprite("game1_book1","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_book3","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_book2","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_brain","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game1.drawSprite("game1_bookshow","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_sewing","",{
        mov: {
            ini: [0],
            run:[0,12,"stop"],
            stop:[12]
        }
    });

    cav_game1.drawSprite("game1_rocket","",{
        mov: {
            ini: [0],
            run:{ frames: cv.mov(12, 3), next:"ini"}
        }
    });
    //
    cav_game1.drawSprite("game1_glass1","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_glass2","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"},
            no:{ frames: cv.ping(3), next:"ini"}
        }
    });

    cav_game1.drawSprite("game1_drawer","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game1.drawSprite("game1_flower","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game1.drawSprite("game1_ufo","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(19), next:"ini"},
            play:[0,7,"loop"],
            loop:[8,19,"loop"]
        }
    });

    cav_game1.drawSprite("game1_ufo_light","",{
        mov: {
            ini: [0],
            play:[0,7,"loop"],
            loop:[8,19,"loop"]
        }
    });

    cav_game1.drawSprite("game1_clothes","",{
        framerate:8,
        mov: {
            ini: [0],
            run:[0,24,"stop"],
            stop:[24]
        }
    });

    cav_game1.drawImg("border1","",{x:0, y:0});
    cav_game1.drawImg("border2","",{x:0, y:55});
    cav_game1.drawImg("border3","",{x:43, y:1095});
    cav_game1.drawImg("border4","",{x:657, y:55});


    cav_game1.drawArea("game1_draw", "", cv.getArea("game1_draw"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book1", "", cv.getArea("game1_book1"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book2", "", cv.getArea("game1_book2"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book3", "", cv.getArea("game1_book3"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_brain", "", [532,242,123,181], "#ffffff", {alpha: 0.01});

    cav_game1.drawArea("game1_sewing", "", [441,498,143,139], "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_rocket", "", cv.getArea("game1_rocket"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_bookshow", "", [42,649,95,176], "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_glass1", "", [42,423,95,176], "#ffffff", {alpha: 0.01});

    cav_game1.drawArea("game1_drawer", "", cv.getArea("game1_drawer"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_flower", "", [483,965,165,122], "#ffffff", {alpha: 0.01});

    cav_game1.drawArea("game1_ufo", "", [0,0,170,367], "#ffffff", {alpha: 0.01});

    var drawArr = [
        cav_game1.img["game1_bg"],

        cav_game1.sprite["game1_draw"],
        cav_game1.sprite["game1_star"],

        cav_game1.sprite["game1_book1"],
        cav_game1.sprite["game1_book3"],
        cav_game1.sprite["game1_book2"],
        cav_game1.sprite["game1_brain"],

        cav_game1.img["game1_yun1"],
        cav_game1.img["game1_yun2"],

        cav_game1.sprite["game1_sewing"],

        cav_game1.sprite["game1_clothes"],

        cav_game1.sprite["game1_ufo"],
        cav_game1.sprite["game1_ufo_light"],


        cav_game1.sprite["game1_rocket"],
        cav_game1.sprite["game1_bookshow"],
        cav_game1.sprite["game1_glass1"],
        cav_game1.sprite["game1_glass2"],

        cav_game1.sprite["game1_drawer"],
        cav_game1.sprite["game1_flower"],

        cav_game1.img["game1_yun3"],

        cav_game1.img["border1"],
        cav_game1.img["border2"],
        cav_game1.img["border3"],
        cav_game1.img["border4"],

        // btn
        cav_game1.dom["game1_book1"],
        cav_game1.dom["game1_book1"],
        cav_game1.dom["game1_book2"],
        cav_game1.dom["game1_book3"],
        cav_game1.dom["game1_brain"],

        cav_game1.dom["game1_sewing"],
        cav_game1.dom["game1_rocket"],
        cav_game1.dom["game1_bookshow"],
        cav_game1.dom["game1_glass1"],

        cav_game1.dom["game1_drawer"],
        cav_game1.dom["game1_flower"],

        cav_game1.dom["game1_draw"],

        cav_game1.dom["game1_ufo"]
    ];

    cav_game1.draw("game1", drawArr);
    cav_game1.show("game1");

}
