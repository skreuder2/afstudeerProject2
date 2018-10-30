var theImages = new Array()

theImages[0] = "\img\ads\koffie1.png"
theImages[1] = "\img\ads\koffie2.jpg"
theImages[2] = "\img\ads\koffie3.jpg"
theImages[3] = "\img\ads\water1.png"
theImages[4] = "\img\ads\water2.png"
theImages[5] = "\img\ads\water3.png"


var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

//Activate Immediately
$(document).ready(function(){

	//Runs Script each time there is an <li>
	$("div.ad").each(function(){

		//Generates the Image
		var whichImage = Math.round(Math.random()*(p-1));

		//Puts Image in front of everything in <li>
		$(this).append('<img src="'+theImages[whichImage]+'">');

	});

});
