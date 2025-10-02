// variables
var year = "2025";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const socials = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/scumdoggames/",
		icon: "instagram",
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/scum.dog",
		icon: "bluesky",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/scumdoggames",
		icon: "twitter",
	},
	{
		name: "Newgrounds",
		url: "https://scumdoggames.newgrounds.com/",
		icon: "newgrounds",
	},
	{
		name: "Itch.io",
		url: "https://scumdoggames.itch.io/",
		icon: "itch",
	},
];

document.addEventListener("DOMContentLoaded", (event) => {
	const copyright = document.getElementById("copyright");
	copyright.innerHTML = '© 2024-'+year+' SCUM DOG LTD</span>';

	const links = document.createElement("div");
	links.className = "links";

	links.innerHTML = socials.map(social => `
	<a href="${social.url}" title="${social.name}" target="_blank">
		<img src="/images/icons/${social.icon}.png" draggable="false" />
	</a>
	`).join("");

	copyright.parentNode.insertBefore(links, copyright);

	// force game to be played in fullscreen on mobile
	if (isMobile && document.body.contains(document.getElementById("gameContainer"))) {
		document.getElementById("gameContainer").outerHTML = "<a href=\""+document.getElementById("game").src+"\">PLAY NOW</a>";
	}
});