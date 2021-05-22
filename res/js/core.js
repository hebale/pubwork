$(function(){
    // 타이틀
    textShadow('.title');
})






// 타이틀
var textShadow = function(target){
    var $this = $(target),
        shaColor = "tomato",
        shaLen = 50,
        textSha = "";

    for( var i =0; i < shaLen; i++){
        textSha += (textSha? ",":"") + i + 'px ' + i + 'px ' +'0 ' + shaColor;
    }

    $this.css({'text-shadow': textSha});
};

