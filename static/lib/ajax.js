function initTick(){
    streamTick();
    $(".videoStream").get(0).play();
    setInterval(function(){
       streamTick();
    }, 30*1000);
}

function streamTick(){
    $.get("/ajax",function(position){
        $(".videoStream").get(0).currentTime = position;
    })
}

$(document).ready(function(){
    $.get("/source",function(source){
       setTimeout(function(){
           $(".videoStream").attr('src',source);
           initTick();
       },3000);
    });
});