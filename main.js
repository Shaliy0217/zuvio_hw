function sleep(milliseconds) { //sleep函式
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
function Kirby(){
    alert("感謝你的填寫~~");
    sleep(1000);
    window.open("kirby.html");
}