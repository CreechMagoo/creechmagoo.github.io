// list of artworks
const artworkList = [
	{
		id: 0,
		name: "Terracotta pelike",
		url: "https://www.metmuseum.org/art/collection/search/254523",
	},
	{
		id: 1,
		name: "Terracotta kantharos",
		url: "https://www.metmuseum.org/art/collection/search/254181",
	},
	{
		id: 2,
		name: "Fragment",
		url: "https://www.metmuseum.org/art/collection/search/216505",
	},
	{
		id: 3,
		name: "Cover",
		url: "https://www.metmuseum.org/art/collection/search/443035",
	},
	{
		id: 4,
		name: "Bronze statuette of drunken Herakles",
		url: "https://www.metmuseum.org/art/collection/search/249036",
	},
	{
		id: 5,
		name: "Fragment of the marble stele of a hoplite",
		url: "https://www.metmuseum.org/art/collection/search/253566",
	},
	{
		id: 6,
		name: "Fragment of the marble stele of a youth",
		url: "https://www.metmuseum.org/art/collection/search/248643",
	},
	{
		id: 7,
		name: "Neptune",
		url: "https://www.metmuseum.org/art/collection/search/204851",
	},
	{
		id: 8,
		name: "The Return from the Hunt",
		url: "https://www.metmuseum.org/art/collection/search/437284",
	},
	{
		id: 9,
		name: "Madonna and Child",
		url: "https://www.metmuseum.org/art/collection/search/436334",
	},
	{
		id: 10,
		name: "Madonna and Child",
		url: "https://www.metmuseum.org/art/collection/search/436892",
	},
	{
		id: 11,
		name: "The Assumption of the Virgin",
		url: "https://www.metmuseum.org/art/collection/search/435656",
	},
	{
		id: 12,
		name: "The Crucifixion",
		url: "https://www.metmuseum.org/art/collection/search/437007",
	},
	{
		id: 13,
		name: "Scenes from the Story of the Argonauts",
		url: "https://www.metmuseum.org/art/collection/search/435665",
	},
	{
		id: 14,
		name: "The Nativity",
		url: "https://www.metmuseum.org/art/collection/search/435584",
	},
	{
		id: 15,
		name: "The Nativity",
		url: "https://www.metmuseum.org/art/collection/search/459001",
	},
	{
		id: 16,
		name: "Cynocephalus Amulet",
		url: "https://www.metmuseum.org/art/collection/search/549266",
	},
	{
		id: 17,
		name: "Wedjat Eye Amulet",
		url: "https://www.metmuseum.org/art/collection/search/552491",
	},
	{
		id: 18,
		name: "Shabti of Painedjem I",
		url: "https://www.metmuseum.org/art/collection/search/553549",
	},
	{
		id: 19,
		name: "Bes-image",
		url: "https://www.metmuseum.org/art/collection/search/547564",
	},
	{
		id: 20,
		name: "Toilet jar",
		url: "https://www.metmuseum.org/art/collection/search/546936",
	},
	{
		id: 21,
		name: "Scarab Inscribed With the Name of Queen Ahhotep",
		url: "https://www.metmuseum.org/art/collection/search/544439",
	},
	{
		id: 22,
		name: "Toe stall",
		url: "https://www.metmuseum.org/art/collection/search/576565",
	},
	{
		id: 23,
		name: "Scarab of Sithathoryunet with the Name of Amenemhat III",
		url: "https://www.metmuseum.org/art/collection/search/545529",
	},
	{
		id: 24,
		name: "Sphinx of Amenhotep III",
		url: "https://www.metmuseum.org/art/collection/search/544498",
	},
	{
		id: 25,
		name: "Scarab Inscribed with Hieroglyphs",
		url: "https://www.metmuseum.org/art/collection/search/545235",
	},
	{
		id: 26,
		name: "Funerary Cone of Ahmose",
		url: "https://www.metmuseum.org/art/collection/search/554741",
	},
	{
		id: 27,
		name: "Element with name and epithets of the Aten",
		url: "https://www.metmuseum.org/art/collection/search/567655",
	},
	{
		id: 28,
		name: "Vase",
		url: "https://www.metmuseum.org/art/collection/search/551252",
	},
	{
		id: 29,
		name: "Cosmetic Vessel in the Shape of a Cat",
		url: "https://www.metmuseum.org/art/collection/search/544039",
	},
	{
		id: 30,
		name: "Cat with kittens amulet",
		url: "https://www.metmuseum.org/art/collection/search/545955",
	},
	{
		id: 31,
		name: "Cat figurine",
		url: "https://www.metmuseum.org/art/collection/search/545725",
	},
	{
		id: 32,
		name: "Figurine of a Dog",
		url: "https://www.metmuseum.org/art/collection/search/555715",
	},
	{
		id: 33,
		name: "Standing Hippopotamus",
		url: "https://www.metmuseum.org/art/collection/search/545724",
	},
	{
		id: 34,
		name: "Sarcophagus of Harkhebit",
		url: "https://www.metmuseum.org/art/collection/search/548211",
	},
	{
		id: 35,
		name: "Isis and Wepwawet",
		url: "https://www.metmuseum.org/art/collection/search/544742",
	},
	{
		id: 36,
		name: "Cat Killing a Serpent",
		url: "https://www.metmuseum.org/art/collection/search/548564",
	},
	{
		id: 37,
		name: "Winemaking",
		url: "https://www.metmuseum.org/art/collection/search/548573",
	},
	{
		id: 38,
		name: "The Mother and Wife of Userhat",
		url: "https://www.metmuseum.org/art/collection/search/557804",
	},
	{
		id: 46,
		name: "Mynah Birds",
		url: "https://www.metmuseum.org/art/collection/search/78221",
	},
	{
		id: 47,
		name: "Kosode with Shells and Sea Grasses",
		url: "https://www.metmuseum.org/art/collection/search/50688",
	},
	{
		id: 48,
		name: "Nuihaku with Phoenixes and Peonies",
		url: "https://www.metmuseum.org/art/collection/search/65353",
	},
	{
		id: 49,
		name: "The First Nakamura Nakazo in the Role of Chinzei Hachiro",
		url: "https://www.metmuseum.org/art/collection/search/56872",
	},
	{
		id: 50,
		name: "The Second Nakamura Sukegoro as an Outlaw",
		url: "https://www.metmuseum.org/art/collection/search/36868",
	},
	{
		id: 51,
		name: "Kabuki Actor Ichikawa Danzo III",
		url: "https://www.metmuseum.org/art/collection/search/36903",
	},
	{
		id: 52,
		name: "The Exile of Yukihira at Suma",
		url: "https://www.metmuseum.org/art/collection/search/37275",
	},
	{
		id: 53,
		name: "The Actor Nakamura Tomijuro as a Woman Wearing a Red Cape",
		url: "https://www.metmuseum.org/art/collection/search/55507",
	},
	{
		id: 54,
		name: "Cock, Hen, and Chickens",
		url: "https://www.metmuseum.org/art/collection/search/37188",
	},
	{
		id: 55,
		name: "Musk Cat",
		url: "https://www.metmuseum.org/art/collection/search/53222",
	},
	{
		id: 56,
		name: "Diana",
		url: "https://www.metmuseum.org/art/collection/search/10171",
	},
	{
		id: 57,
		name: "Beside the Sea",
		url: "https://www.metmuseum.org/art/collection/search/191807",
	},
	{
		id: 58,
		name: "Washerwoman",
		url: "https://www.metmuseum.org/art/collection/search/490026",
	},
	{
		id: 59,
		name: "Dancer Putting on Her Stocking (Third State)",
		url: "https://www.metmuseum.org/art/collection/search/196451",
	},
];

// grab and validate url params
const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
var param = -1;
if (params[""] !== null) var param = Number(params[""]);

// redirect to artwork url
var paramIndex = artworkList.findIndex(artwork => artwork.id === param);
if (paramIndex > -1) window.location.href = artworkList[paramIndex].url;

document.addEventListener("DOMContentLoaded", (event) => {
	const container = document.getElementById("artworks");
	artworkList.forEach((artwork) => {
		const artworkElement = createArtworkElement(artwork);
		container.appendChild(artworkElement);
	});

	function createArtworkElement(artwork) {
		const { id, name, url } = artwork;

		const artworkElement = document.createElement("div");
		artworkElement.className = "artwork";

		artworkElement.innerHTML = `
			<h2>${name}</h2>

			<img src="../../images/art/${id}.png" />

			<div class="links">
				<a href="?=${id}" title="View">View</a>
				<a href="https://web.archive.org/web/${url}" title="Archive">Archive</a>
			</div>
		`;
		return artworkElement;
	}
});