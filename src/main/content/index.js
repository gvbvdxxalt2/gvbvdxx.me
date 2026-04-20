var xml = require("../get-xml.js");

var profile = {
	name: "Name",
	picture: "favicon.png",
	links: [
		{
			name: "Link",
			href: "https://google.com", //Placeholder until data is read.
		}
	]
};

var profilePages = [];
var projects = [];

var profile = xml.querySelector("profile");
window.alert(""+profile);