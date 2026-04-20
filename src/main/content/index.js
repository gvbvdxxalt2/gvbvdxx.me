var xml = require("../get-xml.js");

//Everything will use innerHTML or getAttribute from the xml, just easiest way to write profiles without bloating the site with markdown parsers.

var profile = {
	name: "Name",
	picture: "favicon.png",
	links: [
		{
			name: "Link",
			logo: "favicon.png",
			href: "https://google.com", //Placeholder until data is read.
		}
	]
};

var profilePages = [];
var projects = [];

function readProfileSection(p) {
	if (!p) {
		return;
	}
	var name = p.querySelector("name").innerHTML;
	var pfp = p.querySelector("pfp").getAttribute("src");
	var bg = p.querySelector("bg").getAttribute("css");
	
	profile.name = name;
	profile.picture = pfp;
	profile.cssBg = bg;

	var socialLinks = p.querySelector("social");
	var linksArray = [];
	for (var link of socialLinks.children) {
		linksArray.push({
			name: link.getAttribute("label"),
			href: link.getAttribute("goto"),
			logo: link.getAttribute("logo"),
		});
	}

	profile.links = linksArray;
}

readProfileSection(xml.querySelector("profile"));

module.exports = {
	profile	
};