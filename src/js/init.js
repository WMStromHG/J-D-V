function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();

    Loads.loads("mp3_bg",  "mp3/", "bg.mp3");
    Loads.complete = function(){
        $("#Index").tap(function(e){
           cc.tap(e);
            mp3_play("bg", 1);
        });
        setTimeout(Room.Loader.ppt, 300);
    };
    Loads.loading();
}
