function barchart(targetdivID,data,labels,title) {
for (var i = data.length - 1; i >= 0; i--) {
	console.log('#'+targetdivID);
	$('#'+targetdivID).append('<div class="barcontainer" id="bar'+i+'"></div>');
	
	for (var j = data[i] - 1; j >= 0; j--) {
		
	$('#bar'+i).append('<div class="countpointcontainer"><div class="countsymbol"></div></div>');
	}
	$('#bar'+i).append('<div id="chartbottom" class="chartb" style="position: relative;height: 0px; width: 0px;background-color: white;display: block;">');
}

}
console.log('generator loaded')




function barchartBottomReached(){
console.log(isElementInViewport($('.chartb')))
}



function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


