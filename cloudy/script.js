$(document).ready(function(){

$('#intro').mousemove(function(event) {

    console.log(event.pageX, event.pageY);

    let cursorX = event.pageX / $(this).width();
    let cursorY = 1 - (event.pageY) / $(this).height();

    let settingX = Math.floor(cursorX * wdthmax);
    let settingY = Math.floor(cursorY * wghtmax);

    // console.log( settingX, settingY)

    $("#bigletters").css({
        "--wdth": settingX,
        "--wght": settingY
    });
    
});
});

