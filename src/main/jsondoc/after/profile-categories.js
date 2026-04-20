var elements = require("../../../gp2/elements.js");
var { profile } = require("../../content");

var profileCategories = elements.getGPId("profileCategories");
var profileStoryContent = elements.getGPId("profileStoryContent");
var selectedId = 0;

function refreshProfileCategoriesButtons() {
	var buttonElements = profile.stories.map((story) => {
		return {
			element: "div",
			className: "profileCategoryTab",
			...(story.id == selectedId ? {GPWhenCreated: (e) => {e.setAttribute("selected","")}} : {}),
			children: [
				{
					element: "span",
					textContent: story.label
				}
			],
			eventListeners: [
				{
					event: "click",
					func: function () {
						selectedId = story.id;
						refreshProfileCategories();
					}
				}
			]
		};
	});
	elements.setInnerJSON(profileCategories,buttonElements);
}

function refreshProfileCategoriesContent() {
	var story = profile.stories.find((story) => story.id == selectedId);
	profileStoryContent.innerHTML = story.content;
}

function refreshProfileCategories() {
	refreshProfileCategoriesButtons();
	refreshProfileCategoriesContent();
}

profile.stories.forEach((story) => {
	if (story.default) {
		selectedId = story.id;
	}
});

refreshProfileCategories();