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


// scale, projector, project onto different surfaces;
// presentation will happen over zoom
// 99% => installed situation will be day prior
// images for website => something simple
// think about it as an opp to install
// colored lenses => tile tabloid paper
	// up the saccarhin quality
	// unbound structure => rubberband 
	//makeup cases => doll packaging
	// finding a container to put it in
	// OR structing in a book form
	// swapping in type styles
	// finding a handful of typefaces
	// try to put together a style guide
	// figure out four or five typefaces across all my dp work
	// do a color palette/treatment styling
	//k-confucian scale!!!!