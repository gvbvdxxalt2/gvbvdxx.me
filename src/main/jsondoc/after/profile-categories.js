var elements = require("../../../gp2/elements.js");
var { profile } = require("../../content");

var profileCategories = elements.getGPId("profileCategories");
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

function refreshProfileCategories() {
	refreshProfileCategoriesButtons();
}

profile.stories.forEach((story) => {
	if (story.default) {
		selectedId = story.id;
	}
});

refreshProfileCategories();