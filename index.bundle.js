/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 882
(module) {

module.exports = ".contentMain {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100svw;\n\theight: 100svh;\n\tbackground: #6e6e6e;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: arial;\n\tcolor: #d1d1d1;\n}\n\n.aboutMeLeft {\n\twidth: 30svw;\n\tmin-width: 480px;\n\theight: 100%;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tbackground: #5e5e5e;\n\tborder-top-right-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: column;\n\t\n}\n\n.aboutMeProfileName {\n\tdisplay: flex;\n\t\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\talign-items: center;\n\tflex-direction: row;\n\tgap: 20px;\n\t\n\theight: fit-content;\n\tbox-sizing: border-box;\n\tfont-size: 20px;\n\twidth: 100%;\n\tbackground: rgb(10,10,10);\n\tcolor: rgb(255,255,255);\n\tpadding: 30px 20px;\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n\n.profilePicture {\n\twidth: 100px;\n\theight: 100px;\n\tborder-radius: 50%;\n\tbackground: rgba(255,255,255,1);\n\tborder-style: solid;\n\tborder-width: 3px;\n\tborder-color: rgba(170,170,170,1);\n\tfilter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n\t/* turn off pointer events here since I don't want unexpected drags */\n\tpointer-events: none;\n}\n\n.profileName {\n\tfont-weight: bold;\n\tfont-size: 30px;\n\tfilter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n\t/* turn off pointer events here since I don't want unexpected drags */\n\tpointer-events: none;\n}\n\n.profileCategories {\n\twidth: 100%;\n\theight: 64px;\n\toverflow: scroll;\n\tbox-sizing: border-box;\n\tbackground: rgba(0,0,0,0.3);\n\tborder-radius: 3px;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n}";

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
		}
	]
};

var profilePages = (/* unused pure expression or super */ null && ([]));
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
}

readProfileSection(xml.querySelector("profile"));

module.exports = {
	profile	
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

/***/ 471
(module, __unused_webpack_exports, __webpack_require__) {

var {profile} = __webpack_require__(930);

module.exports = [
	{
		element: "div",
		gid: "aboutMeLeft",
		className: "aboutMeLeft",
		children: [
			
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
					}
				]
			},

			{
				element: "div",
				className: "profileCategories",
			}
			
		]
	}	
];

/***/ },

/***/ 999
(module, __unused_webpack_exports, __webpack_require__) {


module.exports = [
	{
		element: "style",
		textContent: __webpack_require__(882),
	},
	{
		element: "style",
		//Quick hack to get hidden attribute to work even if there is another display attribute set.
		textContent: "[hidden] {display: none;opacity: 0;pointer-events: none;}"
	},

	//Actual content
	{
		element: "div",
		className: "contentMain",
		gid: "contentMain",
		children: [
			...__webpack_require__(471)
		]
	}
];

/***/ },

/***/ 223
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(787);

/***/ },

/***/ 787
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);

var jsonContent = __webpack_require__(999);

elements.appendElementsFromJSON(document.body,jsonContent);

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