// variables
var year = "2025";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("copyright").innerHTML = '© 2024-'+year+' SCUM DOG LTD</span>';
	
	// force game to be played in fullscreen on mobile
	if (isMobile && document.body.contains(document.getElementById("gameContainer"))) {
		document.getElementById("gameContainer").outerHTML = "<a href=\""+document.getElementById("game").src+"\">PLAY NOW</a>";
	}
});