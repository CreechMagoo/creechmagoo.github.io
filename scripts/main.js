// variables
var year = "2025";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("copyright").innerHTML = '© 2024-'+year+' SCUM DOG LTD</span>';
	
	// mobile check
	if (isMobile) {
		document.getElementById("gameContainer").outerHTML = "<a href=\""+document.getElementById("game").src+"\">PLAY NOW</a>";
	}
});