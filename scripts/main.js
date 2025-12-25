// variables
var year = "2025";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const socials = [
	{
		name: "Newgrounds",
		url: "https://scumdogllc.newgrounds.com/",
		icon: "newgrounds",
	},
	{
		name: "Itch.io",
		url: "https://scumdogllc.itch.io/",
		icon: "itch",
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/scumdogllc/",
		icon: "instagram",
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/scum.dog",
		icon: "bluesky",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/scumdogllc",
		icon: "twitter",
	},
];

document.addEventListener("DOMContentLoaded", (event) => {
	const copyright = document.getElementById("copyright");
	copyright.innerHTML = '© 2024-'+year+' SCUM DOG LLC</span>';

	const links = document.createElement("div");
	links.className = "links";

	links.innerHTML = socials.map(social => `
	<a href="${social.url}" title="${social.name}" target="_blank">
		<img src="/images/icons/${social.icon}.png" draggable="false" />
	</a>
	`).join("");

	copyright.parentNode.insertBefore(links, copyright);

	// Force game to be played in fullscreen on mobile
	if (isMobile && document.body.contains(document.getElementById("gameContainer"))) {
		const game = document.getElementById("gameArea").getAttribute("data-game");
		document.getElementById("gameContainer").outerHTML = `
			<div id="gameContainer" class="mobile" style="background-image:url('../../images/games/${game}.png');"><a href="${document.getElementById("game").src}">PLAY NOW</a></div>
		`;
	}
});