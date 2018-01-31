window.addEventListener("load", init, false);

var previousImage = "";

function init() {
	var images = 
	document.querySelectorAll("img");
	
	
	var img1 = images[0];
	var img2 = images[1];
	var img3 = images[2];
	var img4 = images[3];
	var img5 = images[4];
	var img6 = images[5];
	var img7 = images[6];
	var img8 = images[7];
	var img9 = images[8];
	
	img1.addEventListener("click", function(e){changeImage(img1)},false);
	img2.addEventListener("click", function(e){changeImage(img2)},false);
	img3.addEventListener("click", function(e){changeImage(img3)},false);
	img4.addEventListener("click", function(e){changeImage(img4)},false);
	img5.addEventListener("click", function(e){changeImage(img5)},false);
	img6.addEventListener("click", function(e){changeImage(img6)},false);
	img7.addEventListener("click", function(e){changeImage(img7)},false);
	img8.addEventListener("click", function(e){changeImage(img8)},false);
	img9.addEventListener("click", function(e){changeImage(img9)},false);
	
	document.getElementById("reset").addEventListener("click", function(e){reset(images)}, false);
}

function changeImage(image) {

	if (previousImage == "" || previousImage == "x") {
		image.src = "images/circle.jpg";
		previousImage = "circle";
	} 
	else if (previousImage == "circle") {
		image.src = "images/x.png";
		previousImage = "x";
	}
}

function reset(imgs) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "images/white.png";
        previousImage = "";
    } 
}