function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();

    Dom.loadWord = $("#Loader .word");
    Dom.loadLine = $("#Loader .lineX");

    Loads.loads("mp3_bg",  "mp3/", "bg.mp3");

    Loads.loads("index_rules",  "img/index/", "rules.png");
    Loads.loads("index_top",  "img/index/", "top.png");
    Loads.loads("index_topWheel",  "img/index/", "topwheel.png");
    Loads.loads("index_bottom",  "img/index/", "bottom.png");
    Loads.loads("index_bottomWheel",  "img/index/", "bottomwheel.png");
    Loads.loads("index_pic",  "img/index/", "pic.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("top", 155-(e.loaded*155));
    };

    Loads.complete = function(){

        $("#Index .top").html(Loads.get("index_top"));
        $("#Index .topWheel").html(Loads.get("index_topWheel"));
        $("#Index .bottom").html(Loads.get("index_bottom"));
        $("#Index .bottomWheel").html(Loads.get("index_bottomWheel"));

        $("#Index .pic").html(Loads.get("index_pic"));
        $("#Read .bg").html(Loads.get("index_rules"));

        mp3_play("bg", 1);
        setTimeout(Room.Loader.ppt, 300);
    };
    Loads.loading();
}
