/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 596
(module) {

module.exports = ".contentMain {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100svw;\n  height: 100svh;\n  background: #6e6e6e;\n  display: flex;\n  flex-direction: column;\n  font-family: arial;\n  color: #d1d1d1;\n}\n\n.aboutMeLeft {\n  width: 30svw;\n  min-width: 480px;\n  height: 100%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  background: #5e5e5e;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.aboutMeProfileName {\n  display: flex;\n\n  flex-grow: 0;\n  flex-shrink: 0;\n  align-items: center;\n  flex-direction: row;\n  gap: 20px;\n\n  height: fit-content;\n  box-sizing: border-box;\n  font-size: 20px;\n  width: 100%;\n  background: rgb(10, 10, 10);\n  color: rgb(255, 255, 255);\n  padding: 30px 20px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.profilePicture {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 1);\n  border-style: solid;\n  border-width: 3px;\n  border-color: rgba(170, 170, 170, 1);\n  filter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n  /* turn off pointer events here since I don't want unexpected drags */\n  pointer-events: none;\n}\n\n.profileName {\n  font-weight: bold;\n  font-size: 30px;\n  filter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n  /* turn off pointer events here since I don't want unexpected drags */\n  pointer-events: none;\n}\n\n.profileCategories {\n  width: 100%;\n  height: 32px;\n  overflow: scroll;\n  box-sizing: border-box;\n  border-radius: 3px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: row;\n  display: flex;\n}\n\n.profileCategoryTab {\n\twidth: fit-content;\n\theight: 100%;\n\tpadding: 5px 5px;\n\tbox-sizing: border-box;\n\tborder-radius: 10px;\n\tfont-weight: bold;\n\tbackground: #474747;\n\tcolor: #9c9c9c;\n}";

/***/ },

/***/ 255
(module) {

//Webpack compatible version of elements module from gvbvdxx-pack-2
//With some new updates as well.
var __GP_elements = {};
function isDOM(Obj) {
  return Obj instanceof Element;
}
var elements = {
  appendElements: function (elm, appendArray) {
    for (var appendElm of appendArray) {
      elm.append(appendElm);
    }
  },
  getStylelessAJSON(props = {}) {
    return {
      element: "a",
      style: {
        all: "unset",
      },
      ...props,
    };
  },
  removeAllChildren: function (elm) {
    Array.from(elm.children).forEach((elm) => elm.remove());
  },
  appendElementsFromJSON: function (elm, appendJSONArray) {
    var elms = elements.createElementsFromJSON(appendJSONArray);
    elements.appendElements(elm, elms);
    return elms;
  },
  setInnerJSON: function (elm, appendJSONArray) {
    elements.removeAllChildren(elm);
    var elms = elements.createElementsFromJSON(appendJSONArray);
    elements.appendElements(elm, elms);
    return elms;
  },
  createElementsFromJSON: function (jsonelmArray) {
    //converts an array of json's with element properties to a element list.
    function runElements(arry) {
      var myRealElms = [];
      for (var elm of arry) {
        if (!isDOM(elm)) {
          if (typeof elm == "object") {
            var realElm = document.createElement(elm.element);
            for (var attriName of Object.keys(elm)) {
              if (!(attriName == "element" || attriName == "children")) {
                var attributeValue = elm[attriName];
                var setattri = true;
                if (attriName == "gid") {
                  __GP_elements[attributeValue] = realElm;
                  setattri = false;
                }
                if (attriName == "style") {
                  for (var styleName of Object.keys(attributeValue)) {
                    var styleValue = attributeValue[styleName];
                    realElm.style[styleName] = styleValue;
                  }
                  setattri = false;
                }
                if (attriName == "styleProperties") {
                  for (var styleName of Object.keys(attributeValue)) {
                    var styleValue = attributeValue[styleName];
                    realElm.style.setProperty(styleName, styleValue);
                  }
                  setattri = false;
                }
                if (attriName == "dangerouslySetInnerHTML") {
                  realElm.innerHTML = attributeValue;
                  setattri = false;
                } else if (attriName == "innerHTML") {
                  console.trace(
                    'Warning: The "innerHTML" property is deprecated. ' +
                      'Please use "dangerouslySetInnerHTML" instead.',
                  );
                  realElm.innerHTML = attributeValue;
                  setattri = false;
                }
                if (attriName == "textContent") {
                  realElm.textContent = attributeValue;
                  setattri = false;
                }
                if (attriName == "src") {
                  realElm.src = attributeValue;
                  setattri = false;
                }
                if (attriName == "srcObject") {
                  realElm.srcObject = attributeValue;
                  setattri = false;
                }
                if (attriName == "value") {
                  realElm.value = attributeValue;
                  setattri = false;
                }
                if (attriName == "min") {
                  realElm.min = attributeValue;
                  setattri = false;
                }
                if (attriName == "max") {
                  realElm.max = attributeValue;
                  setattri = false;
                }
                if (attriName == "width") {
                  realElm.width = attributeValue;
                  setattri = false;
                }
                if (attriName == "height") {
                  realElm.height = attributeValue;
                  setattri = false;
                }
                if (attriName == "className") {
                  realElm.className = attributeValue;
                  setattri = false;
                }
                if (attriName == "hidden") {
                  if (attributeValue) {
                    realElm.hidden = true;
                  }
                  setattri = false;
                }
                if (attriName == "selected") {
                  if (attributeValue) {
                    realElm.selected = true;
                  }
                  setattri = false;
                }
                if (attriName == "eventListeners") {
                  if (Array.isArray(attributeValue)) {
                    for (var event of attributeValue) {
                      realElm.addEventListener(event.event, event.func);
                    }
                  }
                  setattri = false;
                }
                if (attriName == "GPWhenCreated") {
                  attributeValue.bind(realElm)(realElm); //This seems weird, but first realElm is the "this" value refrence, then the second realElm is for the function value, as well as calling the new binded function.
                  setattri = false;
                }
                if (setattri) {
                  if (typeof realElm[attriName] !== "undefined") {
                    realElm[attriName] = attributeValue;
                    setattri = false;
                  }
                }
                if (setattri) {
                  realElm.setAttribute(attriName, attributeValue);
                }
              }
            }

            if (elm.children) {
              var elmsToAppend = runElements(elm.children);
              for (var elmAppend of elmsToAppend) {
                realElm.append(elmAppend);
              }
            }
            myRealElms.push(realElm);
          } else {
            myRealElms.push(elm);
          }
        } else {
          if (elm) {
            myRealElms.push(elm);
          }
        }
      }
      return myRealElms;
    }
    return runElements(jsonelmArray);
  },
  getById: function (id) {
    return document.getElementById(id);
  },
  setGPId: function (el, id) {
    __GP_elements[id] = el;
    return el;
  },
  disposeGPId: function (id) {
    __GP_elements[id] = undefined;
  },
  getGPId: function (id) {
    if (__GP_elements[id]) {
      return __GP_elements[id];
    }
    return null;
  },
  body: document.body,
  __GP_elements: __GP_elements,
};
module.exports = elements;


/***/ },

/***/ 930
(module, __unused_webpack_exports, __webpack_require__) {

var xml = __webpack_require__(92);

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

var projects = (/* unused pure expression or super */ null && ([]));

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

module.exports = {
  profile,
};


/***/ },

/***/ 92
(module) {

var originalXML = document.getElementById("profileXML");
if (!originalXML) {
  window.alert("No XML was found so the about me profile can't be loaded.");
  throw new Error("No XML was found so the about me profile can't be loaded.");
}

var xml = originalXML.cloneNode(true);

var loadingScreen = document.getElementById("loadingScreen");
if (loadingScreen) {
  loadingScreen.remove();
}

module.exports = xml;


/***/ },

/***/ 452
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(930); //Content needs to be loaded first to prevent glitches.
__webpack_require__(223);


/***/ },

/***/ 522
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(548);

/***/ },

/***/ 548
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);
var { profile } = __webpack_require__(930);

var profileCategories = elements.getGPId("profileCategories");
var selectedId = 0;

function refreshProfileCategoriesButtons() {
	var buttonElements = profile.stories.map((story) => {
		return {
			element: "div",
			className: "profileCategoryTab",
			children: [
				{
					element: "span",
					textContent: story.label
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

/***/ },

/***/ 442
(module) {

//Categories are added after element rendering.

module.exports = [
	{
	    element: "div",
	    className: "profileCategories",
		gid: "profileCategories"
    },	
];

/***/ },

/***/ 259
(module, __unused_webpack_exports, __webpack_require__) {

var { profile } = __webpack_require__(930);

module.exports = [
  {
    element: "div",
    gid: "aboutMeLeft",
    className: "aboutMeLeft",
    children: [
      ...__webpack_require__(37),
      ...__webpack_require__(442),
    ],
  },
];


/***/ },

/***/ 37
(module, __unused_webpack_exports, __webpack_require__) {

var { profile } = __webpack_require__(930);

module.exports = [
  {
    element: "div",
    gid: "aboutMeProfileName",
    className: "aboutMeProfileName",
    style: {
      background: profile.cssBg,
    },
    children: [
      {
        element: "img",
        className: "profilePicture",
        src: profile.picture,
      },
      {
        element: "span",
        className: "profileName",
        dangerouslySetInnerHTML: profile.name,
      },
    ],
  },
];


/***/ },

/***/ 947
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = [
  {
    element: "style",
    textContent: __webpack_require__(596),
  },
  {
    element: "style",
    //Quick hack to get hidden attribute to work even if there is another display attribute set.
    textContent: "[hidden] {display: none;opacity: 0;pointer-events: none;}",
  },

  //Actual content
  {
    element: "div",
    className: "contentMain",
    gid: "contentMain",
    children: [...__webpack_require__(259)],
  },
];


/***/ },

/***/ 223
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(787);


/***/ },

/***/ 787
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);

var jsonContent = __webpack_require__(947);

elements.appendElementsFromJSON(document.body, jsonContent);

__webpack_require__(522);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
__webpack_require__(452);

/******/ })()
;