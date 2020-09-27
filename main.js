document.querySelector("#flag_up").addEventListener('click', () => {
    document.querySelector(".flag").classList.add("up")
})
document.querySelector("#flag_down").addEventListener('click', () => {
    document.querySelector(".flag").classList.remove('up')
})

function autoPlay() {
    var myAuto = document.getElementById('bgMusic');
    var btn = document.getElementById('audioBtn');
    if (myAuto.paused) {
        myAuto.play();
        btn.classList.remove("pause");
        btn.classList.add("play");
    } else {
        myAuto.pause();

        btn.classList.remove("play");
        btn.classList.add("pause");
    }

}

function audioAutoPlay() {
    var audio = document.getElementById("bgMusic"),
        play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}