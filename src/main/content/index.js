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
  var nameElement = p.querySelector("name");
  var pfpElement = p.querySelector("pfp");
  var bgElement = p.querySelector("bg");
  
  var name = nameElement ? nameElement.innerHTML : "(Unknown)";
  var pfp = pfpElement ? (pfpElement.getAttribute("src") || "favicon.png") : "favicon.png";
  var bg = bgElement ? bgElement.getAttribute("css") : "";

  profile.name = name;
  profile.picture = pfp;
  profile.cssBg = bg;

  var socialElement = p.querySelector("social");
  var socialElementChildren = socialElement ? socialElement.children : [];
  var linksArray = [];
  for (var link of socialElementChildren) {
    linksArray.push({
      name: link.getAttribute("label") || "Link",
      href: link.getAttribute("goto") || "https://google.com",
      logo: link.getAttribute("logo") || "favicon.png",
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

		var tagsElement = projectXML.querySelector("tags");
		var tagElements = tagsElement ? tagsElement.children : [];
		return {
			label: labelXml.innerHTML,
			textLabel: labelXml.textContent,
			thumbnail: thumbnailXml.getAttribute("src"),
			description: descriptionXml.innerHTML,
			links: Array.from(linksXml.children).map((linkXml) => {
				return {
					label: linkXml.innerHTML,
					href: linkXml.getAttribute("goto")
				};
			}),
			tags: Array.from(tagElements).map((tagElm) => {
				return tagElm.textContent; //text content only because this is used by search, and not actually rendered.
			})
		};
	});
}

readProjectsSection(xml.querySelector("projects"));

module.exports = {
  profile,
  projects
};
