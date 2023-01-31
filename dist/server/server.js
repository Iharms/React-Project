/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Layout/Content */ \"./src/shared/Layout/Content/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Layout/Header */ \"./src/shared/Layout/Header/index.ts\");\r\nvar store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var _a = react_1.default.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction useCommentsData(subreddit, postId) {\r\n    var _a = react_1.default.useState({ comments: [] }), commentsData = _a[0], setCommentsData = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        axios_1.default.get(\"https://api.reddit.com/r/\" + subreddit + \"/comments/\" + postId)\r\n            .then(function (response) {\r\n            var result = { comments: [] };\r\n            for (var _i = 0, _a = response.data[1].data.children; _i < _a.length; _i++) {\r\n                var comment = _a[_i];\r\n                result.comments.push({\r\n                    commentId: comment.data.id,\r\n                    author: comment.data.author,\r\n                    created: comment.data.created,\r\n                    karma: comment.data.score,\r\n                    body: comment.data.body\r\n                });\r\n            }\r\n            setCommentsData(result);\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return [commentsData];\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar tokenActions_1 = __webpack_require__(/*! ../store/token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nfunction useToken() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.token.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.default.useEffect(function () {\r\n        var code = window.__code__;\r\n        var clientId = window.__clientId__;\r\n        var redditSecret = window.__redditSecret__;\r\n        if (code) {\r\n            //@ts-ignore\r\n            dispatch(tokenActions_1.saveTokenAsync(code, clientId, redditSecret));\r\n        }\r\n    }, []);\r\n    return { token: token, loading: loading };\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar meActions_1 = __webpack_require__(/*! ../store/me/meActions */ \"./src/store/me/meActions.ts\");\r\nfunction useUserData() {\r\n    var token = react_redux_1.useSelector(function (store) { return store.token.data; });\r\n    var data = react_redux_1.useSelector(function (store) { return store.me.data; });\r\n    var loading = react_redux_1.useSelector(function (store) { return store.me.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.default.useEffect(function () {\r\n        if (!token || token === 'undefined') {\r\n            return;\r\n        }\r\n        // @ts-ignore\r\n        dispatch(meActions_1.meRequestAsync());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         #999999;\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n\\n  --transition-time: .3s;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nh1, h2, h3, h4, h5, h6 {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: normal;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexHtmlTemplate = void 0;\r\nvar indexHtmlTemplate = function (content, code, clientId, redditSecret) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__code__ = '\" + code + \"';\\n    window.__clientId__ = '\" + clientId + \"';\\n    window.__redditSecret__ = '\" + redditSecret + \"';\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\r\nexports.indexHtmlTemplate = indexHtmlTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App()), req.query.code, process.env.CLIEND_ID, process.env.REDDIT_SECRET));\r\n});\r\napp.get('*', function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Sever started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Card.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Card.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/Layout/Content/CardsList/Card/card.css\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/Layout/Content/CardsList/Card/Preview/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/Layout/Content/CardsList/Card/Controls/index.ts\");\r\nfunction Card(props) {\r\n    var postId = props.postId, author = props.author, title = props.title, karma = props.karma, imgUrl = props.imgUrl, created = props.created, commentsQty = props.commentsQty;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { postId: postId, author: author, created: created, title: title }),\r\n        react_1.default.createElement(Preview_1.Preview, { imageUrl: imgUrl }),\r\n        react_1.default.createElement(Controls_1.Controls, { karma: karma, commentsQty: commentsQty })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/ActionButtons.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/ActionButtons.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActionButtons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actionbuttons_css_1 = __importDefault(__webpack_require__(/*! ./actionbuttons.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/actionbuttons.css\"));\r\nvar WrappedIcon_1 = __webpack_require__(/*! ../../../../../../helpers/WrappedIcon */ \"./src/shared/helpers/WrappedIcon/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nfunction ActionButtons() {\r\n    var shareIcon = {\r\n        name: Icon_1.EIcon.Share,\r\n        width: 8,\r\n        height: 12\r\n    };\r\n    var saveIcon = {\r\n        name: Icon_1.EIcon.Save,\r\n        width: 10,\r\n        height: 10\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: actionbuttons_css_1.default.actionButtons },\r\n        react_1.default.createElement(WrappedIcon_1.WrappedIcon, { As: 'button', icon: shareIcon, className: actionbuttons_css_1.default.button }),\r\n        react_1.default.createElement(WrappedIcon_1.WrappedIcon, { As: 'button', icon: saveIcon, className: actionbuttons_css_1.default.button })));\r\n}\r\nexports.ActionButtons = ActionButtons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/ActionButtons.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/actionbuttons.css":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/actionbuttons.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actionButtons\": \"actionbuttons__actionButtons--2glop\",\n\t\"button\": \"actionbuttons__button--Vh8Gl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/actionbuttons.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ActionButtons */ \"./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/ActionButtons.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/commentsbutton.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nfunction CommentsButton(_a) {\r\n    var commentsQty = _a.commentsQty;\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Comments, width: 14, height: 14 }),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.grayC4, children: commentsQty })));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
/*!*********************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/commentsbutton.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--sEqqu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/controls.css\"));\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/Layout/Content/CardsList/Card/Controls/CommentsButton/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Layout/Content/CardsList/Card/Controls/Menu/index.ts\");\r\nvar ActionButtons_1 = __webpack_require__(/*! ./ActionButtons */ \"./src/shared/Layout/Content/CardsList/Card/Controls/ActionButtons/index.ts\");\r\nfunction Controls(_a) {\r\n    var karma = _a.karma, commentsQty = _a.commentsQty;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: karma }),\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, { commentsQty: commentsQty }),\r\n        react_1.default.createElement(ActionButtons_1.ActionButtons, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nfunction KarmaCounter(_a) {\r\n    var karma = _a.karma;\r\n    var isCountVisible = !!karma;\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Up, width: 19, height: 10 })),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.grayC4, children: karma, visible: isCountVisible }),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Up, width: 19, height: 10 }))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--2liPr\",\n\t\"karmaValue\": \"karmacounter__karmaValue--kTItT\",\n\t\"up\": \"karmacounter__up--1q3ng\",\n\t\"down\": \"karmacounter__down--fKZgN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/Menu/Menu.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/Menu/Menu.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/Menu/menu.css\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../../../helpers/GenericList */ \"./src/shared/helpers/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../../../helpers/Dropdown */ \"./src/shared/helpers/Dropdown/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nvar MENU_BUTTONS = [\r\n    {\r\n        As: 'button',\r\n        className: menu_css_1.default.commonButton + \" \" + menu_css_1.default.commentsButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Comments, width: 16, height: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: menu_css_1.default.commonButton + \" \" + menu_css_1.default.shareButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Share, width: 12, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: menu_css_1.default.commonButton + \" \" + menu_css_1.default.hideButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Hide, width: 14, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: menu_css_1.default.commonButton + \" \" + menu_css_1.default.saveButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Save, width: 14, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: menu_css_1.default.commonButton + \" \" + menu_css_1.default.complainButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Warning, width: 16, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\r\n    }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    var _a = react_1.default.useState(false), isDropDownOpen = _a[0], setIsDropDownOpen = _a[1];\r\n    var handleClick = function () {\r\n        setIsDropDownOpen(!isDropDownOpen);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: isDropDownOpen ? menu_css_1.default.menuButton + ' ' + menu_css_1.default.menuButtonActive : menu_css_1.default.menuButton, onClick: handleClick },\r\n                react_1.default.createElement(icons_1.MenuIcon, { width: 5, height: 20 })), isOpen: isDropDownOpen },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdownButtons },\r\n                    react_1.default.createElement(GenericList_1.GenericList, { list: MENU_BUTTONS })),\r\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton, onClick: handleClick },\r\n                    react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/Menu/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/Menu/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Layout/Content/CardsList/Card/Controls/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/Menu/menu.css":
/*!*************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/Menu/menu.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--XhTEa\",\n\t\"menuButton\": \"menu__menuButton--1JQ1p\",\n\t\"menuButtonActive\": \"menu__menuButtonActive--1xMpP\",\n\t\"dropdown\": \"menu__dropdown--3iDYa\",\n\t\"dropdownButtons\": \"menu__dropdownButtons--2rsEA\",\n\t\"commonButton\": \"menu__commonButton--3jwIX\",\n\t\"commentsButton\": \"menu__commentsButton--1_Iun\",\n\t\"button\": \"menu__button--3vI6K\",\n\t\"saveButton\": \"menu__saveButton--1804N\",\n\t\"shareButton\": \"menu__shareButton--1aniV\",\n\t\"closeButton\": \"menu__closeButton--3F_h2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/controls.css":
/*!************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/controls.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2Kv00\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/Layout/Content/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var imageUrl = _a.imageUrl;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: imageUrl, alt: 'post_img' })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/preview.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/preview.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3teus\",\n\t\"previewImg\": \"preview__previewImg--2hX5m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/metadata.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nfunction MetaData(_a) {\r\n    var reversed = _a.reversed, author = _a.author, created = _a.created;\r\n    var publishedBefore = Math.floor((Date.now() - created * 1000) / (1000 * 60));\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData + \" \" + (reversed ? metadata_css_1.default.metaDataReversed : '') },\r\n        react_1.default.createElement(\"div\", { className: metadata_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: metadata_css_1.default.avatar, src: \"https://cdn.dribbble.com/users/4688711/screenshots/18468118/media/81684e0a9cb32d00727f52f01ffb96c8.png?compress=1&resize=400x300&vertical=top\", alt: \"avatar\" }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 10, color: EColor_1.EColor.orange, className: metadata_css_1.default.username, As: 'a', href: '#user-url', children: author })),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 10, color: EColor_1.EColor.gray99, className: metadata_css_1.default.published },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            publishedBefore + ' часа назад')));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/metadata.css":
/*!************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/metadata.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"metadata__metaData--3jRZD\",\n\t\"userLink\": \"metadata__userLink--2qBqS\",\n\t\"avatar\": \"metadata__avatar--3Zdp9\",\n\t\"username\": \"metadata__username--1WqLs\",\n\t\"published\": \"metadata__published--1OVkX\",\n\t\"publishedLabel\": \"metadata__publishedLabel--Xkvmg\",\n\t\"createdAt\": \"metadata__createdAt--fSzbV\",\n\t\"metaDataReversed\": \"metadata__metaDataReversed--1z7eH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/index.ts\");\r\nfunction TextContent(_a) {\r\n    var postId = _a.postId, author = _a.author, title = _a.title, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { reversed: true, author: author, created: created }),\r\n        react_1.default.createElement(Title_1.Title, { postId: postId, title: title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/Comment.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/Comment.tsx ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/comment.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ../../../MetaData */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../../../../../helpers/GenericList */ \"./src/shared/helpers/GenericList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../../../../helpers/Break */ \"./src/shared/helpers/Break/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../../../../Controls/KarmaCounter */ \"./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar commentActions_1 = __webpack_require__(/*! ../../../../../../../../../store/comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar MENU_BUTTONS = [\r\n    {\r\n        As: 'button',\r\n        className: comment_css_1.default.commonButton + \" \" + comment_css_1.default.commentsButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Comments, width: 16, height: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: comment_css_1.default.commonButton + \" \" + comment_css_1.default.shareButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Share, width: 12, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: comment_css_1.default.commonButton + \" \" + comment_css_1.default.complainButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Warning, width: 16, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\r\n    }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Comment(_a) {\r\n    var author = _a.author, created = _a.created, body = _a.body;\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var setFocus = react_hook_form_1.useFormContext().setFocus;\r\n    function handleAnswerClick() {\r\n        dispatch(commentActions_1.updateComment(author + ', '));\r\n        setFocus('commentText');\r\n    }\r\n    MENU_BUTTONS[0] = __assign(__assign({}, MENU_BUTTONS[0]), { onClick: handleAnswerClick });\r\n    return (react_1.default.createElement(\"div\", { className: comment_css_1.default.comment },\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.mainLine },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n            react_1.default.createElement(\"span\", { className: comment_css_1.default.verticalLine })),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.metaData },\r\n                react_1.default.createElement(MetaData_1.MetaData, { author: author, created: created })),\r\n            react_1.default.createElement(Break_1.Break, { size: 12, bottom: true }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, As: 'div' }, body),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, bottom: true }),\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.menuButtons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: MENU_BUTTONS })))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/comment.css":
/*!*********************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/comment.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"comment__comment--7-X3x\",\n\t\"metaData\": \"comment__metaData--3K9Ve\",\n\t\"menuButtons\": \"comment__menuButtons--yiL8K\",\n\t\"commonButton\": \"comment__commonButton--2mOzr\",\n\t\"mainLine\": \"comment__mainLine--2TLWH\",\n\t\"verticalLine\": \"comment__verticalLine--naIri\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/index.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../../../../../../../../UI/CommentForm */ \"./src/shared/UI/CommentForm/index.ts\");\r\nvar commentActions_1 = __webpack_require__(/*! ../../../../../../../../../store/comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nfunction CommentFormContainer() {\r\n    var commentText = react_redux_1.useSelector(function (state) { return state.comment.text; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var handleChange = function (event) {\r\n        dispatch(commentActions_1.updateComment(event.target.value));\r\n    };\r\n    var handleSubmit = function (text) {\r\n        console.log(text);\r\n    };\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { commentText: commentText, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar Comment_1 = __webpack_require__(/*! ./Comment */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Comment/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../../../Controls/KarmaCounter */ \"./src/shared/Layout/Content/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ../../TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../../../helpers/Break */ \"./src/shared/helpers/Break/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../../../../helpers/GenericList */ \"./src/shared/helpers/GenericList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts\");\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../../../../../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar MENU_BUTTONS = [\r\n    {\r\n        As: 'button',\r\n        className: post_css_1.default.commonButton + \" \" + post_css_1.default.commentsButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Comments, width: 16, height: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: post_css_1.default.commonButton + \" \" + post_css_1.default.shareButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Share, width: 12, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: post_css_1.default.commonButton + \" \" + post_css_1.default.hide,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Hide, width: 12, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: post_css_1.default.commonButton + \" \" + post_css_1.default.save,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Save, width: 12, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n    },\r\n    {\r\n        As: 'button',\r\n        className: post_css_1.default.commonButton + \" \" + post_css_1.default.complainButton,\r\n        children: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Warning, width: 16, height: 14 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: EColor_1.EColor.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\r\n    }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Post() {\r\n    var ref = react_1.default.useRef(null);\r\n    var location = react_router_dom_1.useLocation();\r\n    var navigate = react_router_dom_1.useNavigate();\r\n    var path = location.pathname.substr(7);\r\n    var postData = react_redux_1.useSelector(function (store) { return store.posts.data.filter(function (p) { return p.postId === path; }).pop(); });\r\n    if (postData === undefined)\r\n        return react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"There is not post with id = \" + path });\r\n    var postId = postData.postId, title = postData.title, author = postData.author, imgUrl = postData.imgUrl, subreddit = postData.subreddit, created = postData.created;\r\n    var commentsData = useCommentsData_1.useCommentsData(subreddit, postId)[0];\r\n    react_1.default.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                navigate('/');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener(\"click\", handleClick);\r\n        };\r\n    }, []);\r\n    var methods = react_hook_form_1.useForm();\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.textContent },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: 10 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 20, inline: true }),\r\n            react_1.default.createElement(TextContent_1.TextContent, { author: author, postId: postId, title: title, created: created })),\r\n        react_1.default.createElement(\"img\", { className: post_css_1.default.img, src: imgUrl, alt: 'Post_image' }),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.menu },\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.menuButtons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: MENU_BUTTONS })),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, color: EColor_1.EColor.orange }, \"X% \\u041F\\u0440\\u043E\\u0433\\u043E\\u043B\\u043E\\u0441\\u043E\\u0432\\u0430\\u043B\\u0438\")),\r\n        react_1.default.createElement(react_hook_form_1.FormProvider, __assign({}, methods),\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n            commentsData.comments.map(function (comment) {\r\n                return react_1.default.createElement(Comment_1.Comment, { author: comment.author, created: comment.created, body: comment.body, key: comment.commentId });\r\n            })))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--1rTWP\",\n\t\"textContent\": \"post__textContent--3p9D4\",\n\t\"title\": \"post__title--x5AX2\",\n\t\"img\": \"post__img--3SvVj\",\n\t\"menu\": \"post__menu--1bvkq\",\n\t\"menuButtons\": \"post__menuButtons--U-xCU\",\n\t\"commonButton\": \"post__commonButton--3IrYW\",\n\t\"content\": \"post__content--1dajc\",\n\t\"close\": \"post__close--ihNmt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Title(_a) {\r\n    var postId = _a.postId, title = _a.title;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: '/posts/' + postId },\r\n            react_1.default.createElement(Text_1.Text, { As: 'button', size: 20, mobileSize: 16, className: title_css_1.default.title__btn, children: title }))));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"postLink\": \"title__postLink--3g7_3\",\n\t\"title__btn\": \"title__title__btn--1T_Ks\",\n\t\"textContent\": \"title__textContent--f1xWE\",\n\t\"title\": \"title__title--2GdaG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--3oTPz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/card.css":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/card.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--2QuPb\",\n\t\"textContent\": \"card__textContent--14FBZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/Layout/Content/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/CardsList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/CardsList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/Layout/Content/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/Layout/Content/CardsList/Card/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postsActions_1 = __webpack_require__(/*! ../../../../store/posts/postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction CardsList() {\r\n    var token = react_redux_1.useSelector(function (store) { return store.token.data; });\r\n    var _a = react_redux_1.useSelector(function (store) { return store.posts; }), data = _a.data, loading = _a.loading, error = _a.error, after = _a.after, fetchCounter = _a.fetchCounter;\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var bottomOfList = react_1.default.useRef(null);\r\n    react_1.default.useEffect(function () {\r\n        if (!token || token === \"undefined\")\r\n            return;\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting &&\r\n                (fetchCounter % 3 !== 0 || fetchCounter === 0)) {\r\n                // @ts-ignore\r\n                dispatch(postsActions_1.fetchPostsAsync(token, after));\r\n            }\r\n        }, {\r\n            rootMargin: \"20px\",\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [token, bottomOfList.current, after]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        data.length === 0 && !loading && !error && (react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20, As: \"p\", className: cardslist_css_1.default.center }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        data.map(function (p) {\r\n            return (react_1.default.createElement(Card_1.Card, { postId: p.postId, name: p.name, author: p.author, title: p.title, karma: p.karma, imgUrl: p.imgUrl, created: p.created, commentsQty: p.commentsQty, subreddit: p.subreddit, key: p.postId }));\r\n        }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && (react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20, As: \"p\", className: cardslist_css_1.default.center }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        error && (react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20, As: \"p\", className: cardslist_css_1.default.center + \" \" + cardslist_css_1.default.error }, error)),\r\n        fetchCounter % 3 === 0 && fetchCounter !== 0 && (react_1.default.createElement(\"button\", { className: cardslist_css_1.default.moreButton, onClick: function () {\r\n                //@ts-ignore\r\n                dispatch(postsActions_1.fetchPostsAsync(token, after));\r\n            } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\"))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/cardslist.css":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/cardslist.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--26kO7\",\n\t\"center\": \"cardslist__center--3k8t-\",\n\t\"error\": \"cardslist__error--4PyO3\",\n\t\"moreButton\": \"cardslist__moreButton--2aoNy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/Layout/Content/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/Content.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Layout/Content/Content.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Layout/Content/content.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Post_1 = __webpack_require__(/*! ./CardsList/Card/TextContent/Title/Post */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/Layout/Content/CardsList/index.ts\");\r\nfunction Content() {\r\n    var location = react_router_dom_1.useLocation();\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(CardsList_1.CardsList, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: '404 list' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: react_1.default.createElement(Post_1.Post, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: 'Not found 404' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"Path \" + location.pathname + \" does not exist\" }) }))));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/content.css":
/*!***********************************************!*\
  !*** ./src/shared/Layout/Content/content.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--29jAg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/content.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Layout/Content/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Layout/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Layout/Header/Header.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Layout/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Layout/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Layout/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Layout/Header/SortBlock/index.ts\");\r\nfunction Header() {\r\n    return (React.createElement(\"header\", { className: header_css_1.default.header },\r\n        React.createElement(SearchBlock_1.SearchBlock, null),\r\n        React.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        React.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Layout/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock() {\r\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../helpers/Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar EColor_1 = __webpack_require__(/*! ../../../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nvar WrappedIcon_1 = __webpack_require__(/*! ../../../../helpers/WrappedIcon */ \"./src/shared/helpers/WrappedIcon/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\" + 'Et4xB7Zo9Xf3p1KDGBnKiQ' + \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(WrappedIcon_1.WrappedIcon, { As: 'div', className: userblock_css_1.default.avatarImage, icon: { name: Icon_1.EIcon.Anon, width: 30, height: 30 } })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: EColor_1.EColor.gray99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? EColor_1.EColor.black : EColor_1.EColor.gray99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--2YfAi\",\n\t\"avatarBox\": \"userblock__avatarBox--3rX2Q\",\n\t\"avatarImage\": \"userblock__avatarImage--39hsu\",\n\t\"username\": \"userblock__username--1cpLP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/searchblock.css":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/searchblock.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--Tvo2B\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/SortBlock/SortBlock.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Layout/Header/SortBlock/SortBlock.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Layout/Header/SortBlock/sortblock.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(Text_1.Text, { As: 'div', size: 20, mobileSize: 12, className: sortblock_css_1.default.sortBlock }, \"Sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SortBlock/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Layout/Header/SortBlock/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Layout/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/SortBlock/sortblock.css":
/*!**********************************************************!*\
  !*** ./src/shared/Layout/Header/SortBlock/sortblock.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--3igz2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Layout/Header/ThreadTitle/threadtitle.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20, As: 'h1', className: threadtitle_css_1.default.threadTitle }, \"\\u041B\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0431\\u0438\\u043D\\u0435\\u0442\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/threadtitle.css":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/threadtitle.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--1-ZGp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/header.css":
/*!*********************************************!*\
  !*** ./src/shared/Layout/Header/header.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--2rAev\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/header.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Layout/Header/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Layout/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nvar useToken_1 = __webpack_require__(/*! ../../hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    useToken_1.useToken();\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/UI/CommentForm/CommentForm.tsx":
/*!***************************************************!*\
  !*** ./src/shared/UI/CommentForm/CommentForm.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/UI/CommentForm/commentform.css\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nfunction CommentForm(_a) {\r\n    var _b;\r\n    var commentText = _a.commentText, onChange = _a.onChange, onSubmit = _a.onSubmit;\r\n    var _c = react_hook_form_1.useFormContext(), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\r\n        errors && react_1.default.createElement(\"div\", { className: commentform_css_1.default.formErrorMessage }, (_b = errors.commentText) === null || _b === void 0 ? void 0 : _b.message),\r\n        react_1.default.createElement(\"textarea\", __assign({}, register('commentText', {\r\n            required: 'Необходимо ввести текст сообщения',\r\n            minLength: {\r\n                value: 5,\r\n                message: 'Минимальное количество символов: 5'\r\n            }\r\n        }), { className: commentform_css_1.default.input, value: commentText, onChange: onChange })),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/UI/CommentForm/commentform.css":
/*!***************************************************!*\
  !*** ./src/shared/UI/CommentForm/commentform.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--3LqZl\",\n\t\"formErrorMessage\": \"commentform__formErrorMessage--2ala-\",\n\t\"input\": \"commentform__input--1MthZ\",\n\t\"button\": \"commentform__button--1sXFE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/UI/CommentForm/index.ts":
/*!********************************************!*\
  !*** ./src/shared/UI/CommentForm/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/UI/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/NotFoundPage.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/NotFoundPage.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Text_1 = __webpack_require__(/*! ../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar notfoundpage_css_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.css */ \"./src/shared/UI/NotFoundPage/notfoundpage.css\"));\r\nfunction NotFoundPage(_a) {\r\n    var description = _a.description;\r\n    return (react_1.default.createElement(\"div\", { className: notfoundpage_css_1.default.errorPage },\r\n        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, className: notfoundpage_css_1.default.header }, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\"),\r\n        react_1.default.createElement(Text_1.Text, { As: 'p', size: 14, className: notfoundpage_css_1.default.description }, description)));\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/UI/NotFoundPage/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/UI/NotFoundPage/NotFoundPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/index.ts?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/notfoundpage.css":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/notfoundpage.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"errorPage\": \"notfoundpage__errorPage--33KU4\",\n\t\"header\": \"notfoundpage__header--204El\",\n\t\"description\": \"notfoundpage__description--3Kkp-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/notfoundpage.css?");

/***/ }),

/***/ "./src/shared/helpers/Break/Break.tsx":
/*!********************************************!*\
  !*** ./src/shared/helpers/Break/Break.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/helpers/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.bottom, bottom = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.bottom] = bottom, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Break/break.css":
/*!********************************************!*\
  !*** ./src/shared/helpers/Break/break.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s0\": \"break__s0--2Fa35\",\n\t\"s4\": \"break__s4--23WYz\",\n\t\"s8\": \"break__s8--3mefd\",\n\t\"s12\": \"break__s12--2jt0Z\",\n\t\"s16\": \"break__s16--11smA\",\n\t\"s20\": \"break__s20--2blh-\",\n\t\"inline\": \"break__inline--20XJk\",\n\t\"bottom\": \"break__bottom--1juJh\",\n\t\"mobile_s0\": \"break__mobile_s0--1vWaQ\",\n\t\"mobile_s4\": \"break__mobile_s4--1C06I\",\n\t\"mobile_s8\": \"break__mobile_s8--235qd\",\n\t\"mobile_s12\": \"break__mobile_s12--27t_o\",\n\t\"mobile_s16\": \"break__mobile_s16--2dzPZ\",\n\t\"mobile_s20\": \"break__mobile_s20--KHy9e\",\n\t\"tablet_s0\": \"break__tablet_s0--26TSJ\",\n\t\"tablet_s4\": \"break__tablet_s4--S-KqP\",\n\t\"tablet_s8\": \"break__tablet_s8--cJunY\",\n\t\"tablet_s12\": \"break__tablet_s12--RDxwK\",\n\t\"tablet_s16\": \"break__tablet_s16--3vMnm\",\n\t\"tablet_s20\": \"break__tablet_s20--az4RY\",\n\t\"desktop_s0\": \"break__desktop_s0--3Rmfr\",\n\t\"desktop_s4\": \"break__desktop_s4--2rabJ\",\n\t\"desktop_s8\": \"break__desktop_s8--1BAFw\",\n\t\"desktop_s12\": \"break__desktop_s12--1HPhZ\",\n\t\"desktop_s16\": \"break__desktop_s16--2H6ot\",\n\t\"desktop_s20\": \"break__desktop_s20--22yA1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Break/break.css?");

/***/ }),

/***/ "./src/shared/helpers/Break/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/helpers/Break/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/helpers/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Break/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/Dropdown.tsx":
/*!**************************************************!*\
  !*** ./src/shared/helpers/Dropdown/Dropdown.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/helpers/Dropdown/dropdown.css\"));\r\nvar NOOP_1 = __webpack_require__(/*! ../../../utils/js/NOOP */ \"./src/utils/js/NOOP.ts\");\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP_1.NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP_1.NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    // const node = document.querySelector('#modal_root');\r\n    // if (!node) return null;\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/dropdown.css":
/*!**************************************************!*\
  !*** ./src/shared/helpers/Dropdown/dropdown.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--2Ms7s\",\n\t\"listContainer\": \"dropdown__listContainer--un3EB\",\n\t\"list\": \"dropdown__list--1zvc6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/helpers/Dropdown/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/helpers/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/GenericList/GenericList.tsx":
/*!********************************************************!*\
  !*** ./src/shared/helpers/GenericList/GenericList.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar NOOP_1 = __webpack_require__(/*! ../../../utils/js/NOOP */ \"./src/utils/js/NOOP.ts\");\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, id = _a.id, className = _a.className, children = _a.children, _c = _a.onClick, onClick = _c === void 0 ? NOOP_1.NOOP : _c, href = _a.href;\r\n        return (react_1.default.createElement(As, { className: className, onClick: onClick, key: id, href: href }, children));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/helpers/GenericList/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/helpers/GenericList/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/helpers/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Icon/Icon.tsx":
/*!******************************************!*\
  !*** ./src/shared/helpers/Icon/Icon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../icons */ \"./src/shared/icons/index.ts\");\r\nvar KarmaUp_1 = __webpack_require__(/*! ../../icons/KarmaUp */ \"./src/shared/icons/KarmaUp.tsx\");\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"Comments\"] = \"comments\";\r\n    EIcon[\"Hide\"] = \"hide\";\r\n    EIcon[\"Menu\"] = \"menu\";\r\n    EIcon[\"Save\"] = \"save\";\r\n    EIcon[\"Share\"] = \"share\";\r\n    EIcon[\"Warning\"] = \"warning\";\r\n    EIcon[\"Up\"] = \"karmaUp\";\r\n    EIcon[\"Anon\"] = \"anon\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\nfunction Icon(_a) {\r\n    var name = _a.name, width = _a.width, height = _a.height, className = _a.className;\r\n    switch (name) {\r\n        case EIcon.Comments:\r\n            return react_1.default.createElement(icons_1.CommentsIcon, { width: width, height: height });\r\n        case EIcon.Hide:\r\n            return react_1.default.createElement(icons_1.HideIcon, { width: width, height: height });\r\n        case EIcon.Menu:\r\n            return react_1.default.createElement(icons_1.MenuIcon, { width: width, height: height });\r\n        case EIcon.Save:\r\n            return react_1.default.createElement(icons_1.SaveIcon, { width: width, height: height });\r\n        case EIcon.Share:\r\n            return react_1.default.createElement(icons_1.ShareIcon, { width: width, height: height });\r\n        case EIcon.Warning:\r\n            return react_1.default.createElement(icons_1.WarningIcon, { width: width, height: height });\r\n        case EIcon.Up:\r\n            return react_1.default.createElement(KarmaUp_1.KarmaUp, { width: width, height: height });\r\n        case EIcon.Anon:\r\n            return react_1.default.createElement(icons_1.AnonIcon, { width: width, height: height });\r\n    }\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Icon/index.ts":
/*!******************************************!*\
  !*** ./src/shared/helpers/Icon/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/helpers/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Text/Text.tsx":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/Text.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/helpers/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor_1 = __webpack_require__(/*! ../../../types/EColor */ \"./src/types/EColor.tsx\");\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, className = props.className, href = props.href, _f = props.color, color = _f === void 0 ? EColor_1.EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, onClick = props.onClick, _h = props.visible, visible = _h === void 0 ? true : _h;\r\n    // const [isVisible, setIsVisible] = React.useState(true);\r\n    if (!visible) {\r\n        return null;\r\n    }\r\n    var classes = classnames_1.default(className, text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes, href: href, onClick: onClick }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Text/index.ts":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/helpers/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Text/text.css":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/text.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--3ZMFh\",\n\t\"s20\": \"text__s20--hQm7W\",\n\t\"s16\": \"text__s16--30lhK\",\n\t\"s14\": \"text__s14--XXQC3\",\n\t\"s12\": \"text__s12--1CvXT\",\n\t\"s10\": \"text__s10--2dJkb\",\n\t\"black\": \"text__black--3m0cl\",\n\t\"orange\": \"text__orange--2-QQj\",\n\t\"green\": \"text__green--1PqEy\",\n\t\"white\": \"text__white--3jPPB\",\n\t\"grayF4\": \"text__grayF4--3iG17\",\n\t\"greyF3\": \"text__greyF3--3aSbW\",\n\t\"greyD9\": \"text__greyD9--34Mwk\",\n\t\"greyC4\": \"text__greyC4--7ewWF\",\n\t\"grey99\": \"text__grey99--2cru7\",\n\t\"grey66\": \"text__grey66--25URW\",\n\t\"upperCase\": \"text__upperCase--daSm8\",\n\t\"m28\": \"text__m28--2k0Ih\",\n\t\"m20\": \"text__m20--28u9L\",\n\t\"m16\": \"text__m16--p0sbD\",\n\t\"m14\": \"text__m14--2S4bF\",\n\t\"m12\": \"text__m12--1HezQ\",\n\t\"m10\": \"text__m10--3mk6C\",\n\t\"bold\": \"text__bold--2lQkg\",\n\t\"t28\": \"text__t28--2Nk7G\",\n\t\"t20\": \"text__t20--1QUQk\",\n\t\"t16\": \"text__t16--rJe2j\",\n\t\"t14\": \"text__t14--2oic0\",\n\t\"t12\": \"text__t12--rXxed\",\n\t\"t10\": \"text__t10--3kQJ1\",\n\t\"d28\": \"text__d28--1EQa1\",\n\t\"d20\": \"text__d20--eWk8P\",\n\t\"d16\": \"text__d16--1PDk6\",\n\t\"d14\": \"text__d14--3uz2k\",\n\t\"d12\": \"text__d12--3ojRs\",\n\t\"d10\": \"text__d10--vH_nq\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/text.css?");

/***/ }),

/***/ "./src/shared/helpers/WrappedIcon/WrappedIcon.tsx":
/*!********************************************************!*\
  !*** ./src/shared/helpers/WrappedIcon/WrappedIcon.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WrappedIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/helpers/Icon/index.ts\");\r\nfunction WrappedIcon(_a) {\r\n    var As = _a.As, className = _a.className, icon = _a.icon;\r\n    return (react_1.default.createElement(As, { className: className },\r\n        react_1.default.createElement(Icon_1.Icon, { name: icon.name, width: icon.width, height: icon.height })));\r\n}\r\nexports.WrappedIcon = WrappedIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/WrappedIcon/WrappedIcon.tsx?");

/***/ }),

/***/ "./src/shared/helpers/WrappedIcon/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/helpers/WrappedIcon/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./WrappedIcon */ \"./src/shared/helpers/WrappedIcon/WrappedIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/WrappedIcon/index.ts?");

/***/ }),

/***/ "./src/shared/icons/AnonIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/AnonIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnonIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnonIcon = AnonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnonIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentsIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/CommentsIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HideIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction HideIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.HideIcon = HideIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/KarmaUp.tsx":
/*!**************************************!*\
  !*** ./src/shared/icons/KarmaUp.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaUp = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction KarmaUp(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.KarmaUp = KarmaUp;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/KarmaUp.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./HideIcon */ \"./src/shared/icons/HideIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/icons/AnonIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/store/comment/commentActions.ts":
/*!*********************************************!*\
  !*** ./src/store/comment/commentActions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateComment = exports.UPDATE_COMMENT = void 0;\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    text: text\r\n}); };\r\nexports.updateComment = updateComment;\r\n\n\n//# sourceURL=webpack:///./src/store/comment/commentActions.ts?");

/***/ }),

/***/ "./src/store/comment/commentReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/comment/commentReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentReducer = void 0;\r\nvar commentActions_1 = __webpack_require__(/*! ./commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar commentReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case commentActions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { text: action.text });\r\n    }\r\n};\r\nexports.commentReducer = commentReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/comment/commentReducer.ts?");

/***/ }),

/***/ "./src/store/me/meActions.ts":
/*!***********************************!*\
  !*** ./src/store/me/meActions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch(exports.meRequest());\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me.json', {\r\n            headers: { Authorization: \"bearer \" + getState().token.data }\r\n        })\r\n            .then(function (resp) {\r\n            var data = resp.data;\r\n            dispatch(exports.meRequestSuccess({ name: data.name, iconImg: data.icon_img.replaceAll('amp;', '') }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch(exports.meRequestError(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meActions.ts?");

/***/ }),

/***/ "./src/store/me/meReducer.ts":
/*!***********************************!*\
  !*** ./src/store/me/meReducer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar meActions_1 = __webpack_require__(/*! ./meActions */ \"./src/store/me/meActions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case meActions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case meActions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case meActions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meReducer.ts?");

/***/ }),

/***/ "./src/store/posts/postsActions.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPostsAsync = exports.fetchPostsError = exports.FETCH_POSTS_ERROR = exports.fetchPostsSuccess = exports.FETCH_POSTS_SUCCESS = exports.fetchPosts = exports.FETCH_POSTS = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.FETCH_POSTS = 'FETCH_POSTS';\r\nvar fetchPosts = function () { return ({\r\n    type: exports.FETCH_POSTS,\r\n    loading: true,\r\n    error: ''\r\n}); };\r\nexports.fetchPosts = fetchPosts;\r\nexports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';\r\nvar fetchPostsSuccess = function (data) { return ({\r\n    type: exports.FETCH_POSTS_SUCCESS,\r\n    data: data.data,\r\n    after: data.after,\r\n    fetchCounter: data.fetchCounter\r\n}); };\r\nexports.fetchPostsSuccess = fetchPostsSuccess;\r\nexports.FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';\r\nvar fetchPostsError = function (error) { return ({\r\n    type: exports.FETCH_POSTS_ERROR,\r\n    error: error\r\n}); };\r\nexports.fetchPostsError = fetchPostsError;\r\nvar fetchPostsAsync = function (token, after) {\r\n    return function (dispatch, getState) {\r\n        dispatch(exports.fetchPosts());\r\n        function loadPosts() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var resp, posts, error_1;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            _a.trys.push([0, 2, , 3]);\r\n                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json', {\r\n                                    headers: { Authorization: \"bearer \" + token },\r\n                                    params: {\r\n                                        sr_detail: true,\r\n                                        after: after,\r\n                                        limit: 5\r\n                                    }\r\n                                })];\r\n                        case 1:\r\n                            resp = _a.sent();\r\n                            posts = resp.data.data.children.map(function (p) {\r\n                                return {\r\n                                    postId: p.data.id,\r\n                                    name: p.data.name,\r\n                                    author: p.data.author,\r\n                                    title: p.data.title,\r\n                                    karma: p.data.score,\r\n                                    imgUrl: p.data.url_overridden_by_dest,\r\n                                    created: p.data.created,\r\n                                    subreddit: p.data.subreddit,\r\n                                    commentsQty: p.data.num_comments\r\n                                };\r\n                            });\r\n                            dispatch(exports.fetchPostsSuccess({\r\n                                data: posts,\r\n                                after: posts[posts.length - 1].name,\r\n                                fetchCounter: getState().posts.fetchCounter + 1\r\n                            }));\r\n                            return [3 /*break*/, 3];\r\n                        case 2:\r\n                            error_1 = _a.sent();\r\n                            dispatch(exports.fetchPostsError(String(error_1)));\r\n                            return [3 /*break*/, 3];\r\n                        case 3: return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        loadPosts();\r\n    };\r\n};\r\nexports.fetchPostsAsync = fetchPostsAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/postsActions.ts?");

/***/ }),

/***/ "./src/store/posts/postsReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = void 0;\r\nvar postsActions_1 = __webpack_require__(/*! ./postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar postsReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case postsActions_1.FETCH_POSTS:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n            return __assign(__assign({}, state), { data: __spreadArray(__spreadArray([], state.data), action.data), after: action.after, loading: false, fetchCounter: action.fetchCounter });\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/postsReducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar meActions_1 = __webpack_require__(/*! ./me/meActions */ \"./src/store/me/meActions.ts\");\r\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/store/me/meReducer.ts\");\r\nvar tokenReducer_1 = __webpack_require__(/*! ./token/tokenReducer */ \"./src/store/token/tokenReducer.ts\");\r\nvar tokenActions_1 = __webpack_require__(/*! ./token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nvar postsReducer_1 = __webpack_require__(/*! ./posts/postsReducer */ \"./src/store/posts/postsReducer.ts\");\r\nvar postsActions_1 = __webpack_require__(/*! ./posts/postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar commentReducer_1 = __webpack_require__(/*! ./comment/commentReducer */ \"./src/store/comment/commentReducer.ts\");\r\nvar commentActions_1 = __webpack_require__(/*! ./comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar initialState = {\r\n    token: {\r\n        loading: false,\r\n        error: '',\r\n        data: ''\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {\r\n            name: '',\r\n            iconImg: ''\r\n        }\r\n    },\r\n    posts: {\r\n        loading: false,\r\n        error: '',\r\n        data: [],\r\n        after: '',\r\n        fetchCounter: 0\r\n    },\r\n    comment: {\r\n        text: '',\r\n    }\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case tokenActions_1.SAVE_TOKEN:\r\n        case tokenActions_1.SAVE_TOKEN_SUCCESS:\r\n        case tokenActions_1.SAVE_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { token: tokenReducer_1.tokenReducer(state.token, action) });\r\n        case meActions_1.ME_REQUEST:\r\n        case meActions_1.ME_REQUEST_SUCCESS:\r\n        case meActions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: meReducer_1.meReducer(state.me, action) });\r\n        case postsActions_1.FETCH_POSTS:\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { posts: postsReducer_1.postsReducer(state.posts, action) });\r\n        case commentActions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { comment: commentReducer_1.commentReducer(state.comment, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/tokenActions.ts":
/*!*****************************************!*\
  !*** ./src/store/token/tokenActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenAsync = exports.saveTokenError = exports.SAVE_TOKEN_ERROR = exports.saveTokenSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveToken = exports.SAVE_TOKEN = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.SAVE_TOKEN = 'TOKEN_REQUEST';\r\nvar saveToken = function () { return ({\r\n    type: exports.SAVE_TOKEN\r\n}); };\r\nexports.saveToken = saveToken;\r\nexports.SAVE_TOKEN_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar saveTokenSuccess = function (data) { return ({\r\n    type: exports.SAVE_TOKEN_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.saveTokenSuccess = saveTokenSuccess;\r\nexports.SAVE_TOKEN_ERROR = 'TOKEN_REQUEST_ERROR';\r\nvar saveTokenError = function (error) { return ({\r\n    type: exports.SAVE_TOKEN_ERROR,\r\n    error: error\r\n}); };\r\nexports.saveTokenError = saveTokenError;\r\nvar saveTokenAsync = function (code, clientId, redditSecret) {\r\n    return function (dispatch) {\r\n        if (code === 'undefined')\r\n            return;\r\n        dispatch(exports.saveToken());\r\n        axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n            auth: {\r\n                username: clientId,\r\n                password: redditSecret\r\n            },\r\n            headers: {\r\n                'Content-Type': 'application/x-www-form-urlencoded'\r\n            }\r\n        })\r\n            .then(function (resp) {\r\n            dispatch(exports.saveTokenSuccess(resp.data.access_token));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch(exports.saveTokenError(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.saveTokenAsync = saveTokenAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/token/tokenActions.ts?");

/***/ }),

/***/ "./src/store/token/tokenReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/token/tokenReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = void 0;\r\nvar tokenActions_1 = __webpack_require__(/*! ./tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nvar tokenReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case tokenActions_1.SAVE_TOKEN:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case tokenActions_1.SAVE_TOKEN_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case tokenActions_1.SAVE_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/token/tokenReducer.ts?");

/***/ }),

/***/ "./src/types/EColor.tsx":
/*!******************************!*\
  !*** ./src/types/EColor.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColor = void 0;\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"grayF4\"] = \"grayF4\";\r\n    EColor[\"grayF3\"] = \"grayF3\";\r\n    EColor[\"grayD9\"] = \"grayD9\";\r\n    EColor[\"grayC4\"] = \"grayC4\";\r\n    EColor[\"gray99\"] = \"gray99\";\r\n    EColor[\"gray66\"] = \"gray66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n\n\n//# sourceURL=webpack:///./src/types/EColor.tsx?");

/***/ }),

/***/ "./src/utils/js/NOOP.ts":
/*!******************************!*\
  !*** ./src/utils/js/NOOP.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NOOP = void 0;\r\nfunction NOOP() { }\r\nexports.NOOP = NOOP;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/NOOP.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substr(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\nvar generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });