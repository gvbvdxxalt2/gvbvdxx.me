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
    },
  ],
	stories: [
		{
			label: "Index story",
			content: "Your intro here",
			default: true,
		}
	]
};

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

	var stories = p.querySelector("stories");
	var storiesArray = [];
	var storyIdNumber = 0;
	for (var storyElement of stories.children) {
		storiesArray.push({
			content: storyElement.innerHTML,
			label: storyElement.getAttribute("label"),
			default: storyElement.hasAttribute("default"),
			id: storyIdNumber
		});
		storyIdNumber += 1;
	}

	profile.stories = storiesArray;
}

readProfileSection(xml.querySelector("profile"));

function readProjectsSection(p) {
	if (!p) {
    return;
  }
	projects = Array.from(p.children).map((projectXML) => {
		var labelXml = projectXML.querySelector("label");
		var thumbnailXml = projectXML.querySelector("thumbnail");
		var descriptionXml = projectXML.querySelector("description");
		var linksXml = projectXML.querySelector("links");
		return {
			label: labelXml.innerHTML,
			thumbnail: thumbnailXml.getAttribute("src"),
			description: descriptionXml.innerHTML,
			links: Array.from(linksXml.children).map((linkXml) => {
				return {
					label: linkXml.innerHTML,
					href: linkXml.getAttribute("goto")
				};
			})
		};
	});
}

readProjectsSection(xml.querySelector("projects"));

module.exports = {
  profile,
  projects
};
