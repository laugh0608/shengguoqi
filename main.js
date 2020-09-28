/*
 * @Atthor: DaBaiLuoBo
 * @Date: 2020-09-27 22:11:00
 */
// 国旗升降
document.querySelector("#flag_up").addEventListener('click', () => {
    document.querySelector(".flag").classList.add("up");
    // 弹窗延时打开
    setTimeout(function () {
        document.querySelector("#peopleNum").classList.remove("peopleNumStyle");
    }, 9000);
});
document.querySelector("#flag_down").addEventListener('click', () => {
    document.querySelector(".flag").classList.remove('up');
});
// 播放器控制开关
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