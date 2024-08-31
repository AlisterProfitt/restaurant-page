/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAbout: () => (/* binding */ showAbout)\n/* harmony export */ });\nfunction showAbout() {\n    let about = document.querySelector('#content');\n    \n    while (about.firstChild) {\n        about.removeChild(about.firstChild);\n    }\n\n    let header = document.createElement('h1');\n    header.textContent = 'About This Restaurant';\n\n    let paragraph = document.createElement('p');\n    paragraph.textContent = 'This restaurant is made by an apple lover, for apple lovers. I hope you enjoy everything on offer!'\n\n    about.appendChild(header);\n    about.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNob3dBYm91dCgpIHtcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIHdoaWxlIChhYm91dC5maXJzdENoaWxkKSB7XG4gICAgICAgIGFib3V0LnJlbW92ZUNoaWxkKGFib3V0LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBUaGlzIFJlc3RhdXJhbnQnO1xuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVGhpcyByZXN0YXVyYW50IGlzIG1hZGUgYnkgYW4gYXBwbGUgbG92ZXIsIGZvciBhcHBsZSBsb3ZlcnMuIEkgaG9wZSB5b3UgZW5qb3kgZXZlcnl0aGluZyBvbiBvZmZlciEnXG5cbiAgICBhYm91dC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showContent: () => (/* binding */ showContent)\n/* harmony export */ });\n/* harmony import */ var _img_apples_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/apples.jpg */ \"./src/img/apples.jpg\");\n\n\nfunction showContent() {\n    let content = document.querySelector('#content');\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    let header = document.createElement('h1');\n    header.textContent = 'Welcome to Alister\\'s Apple Haven!!!';\n\n    let imageNode = document.createElement('img');\n    imageNode.src = _img_apples_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imageNode.width = '700';\n\n    let paragraph = document.createElement('p');\n    paragraph.textContent = `We have all of your apple needs here. If you like apple in your pie, we have it!\n                If you like apple in your food, we have it! We even have apple-scented bathrooms!\n                If you love apples, then you'll love this restaurant!!!`;\n\n    content.appendChild(header);\n    content.appendChild(imageNode);\n    content.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQzs7QUFFbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDRDQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRlbnQuanM/N2YwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwbGVJbWFnZSBmcm9tICcuL2ltZy9hcHBsZXMuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb250ZW50KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBBbGlzdGVyXFwncyBBcHBsZSBIYXZlbiEhISc7XG5cbiAgICBsZXQgaW1hZ2VOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VOb2RlLnNyYyA9IGFwcGxlSW1hZ2U7XG4gICAgaW1hZ2VOb2RlLndpZHRoID0gJzcwMCc7XG5cbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBXZSBoYXZlIGFsbCBvZiB5b3VyIGFwcGxlIG5lZWRzIGhlcmUuIElmIHlvdSBsaWtlIGFwcGxlIGluIHlvdXIgcGllLCB3ZSBoYXZlIGl0IVxuICAgICAgICAgICAgICAgIElmIHlvdSBsaWtlIGFwcGxlIGluIHlvdXIgZm9vZCwgd2UgaGF2ZSBpdCEgV2UgZXZlbiBoYXZlIGFwcGxlLXNjZW50ZWQgYmF0aHJvb21zIVxuICAgICAgICAgICAgICAgIElmIHlvdSBsb3ZlIGFwcGxlcywgdGhlbiB5b3UnbGwgbG92ZSB0aGlzIHJlc3RhdXJhbnQhISFgO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VOb2RlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/content.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.showContent)();\n\nlet homeButton = document.querySelector('#home');\nlet menuButton = document.querySelector('#menu');\nlet aboutButton = document.querySelector('#about');\n\nhomeButton.addEventListener('click', _content_js__WEBPACK_IMPORTED_MODULE_0__.showContent);\nmenuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.showMenu);\naboutButton.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_2__.showAbout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyQztBQUNOO0FBQ0U7O0FBRXZDLHdEQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsb0RBQVc7QUFDaEQscUNBQXFDLDhDQUFRO0FBQzdDLHNDQUFzQyxnREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dDb250ZW50IH0gZnJvbSAnLi9jb250ZW50LmpzJztcbmltcG9ydCB7IHNob3dNZW51IH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IHNob3dBYm91dCB9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5zaG93Q29udGVudCgpO1xuXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5sZXQgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDb250ZW50KTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBYm91dCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\nfunction showMenu() {\n    let menu = document.querySelector('#content');\n    \n    while (menu.firstChild) {\n        menu.removeChild(menu.firstChild);\n    }\n\n    let header = document.createElement('h1');\n    header.textContent = 'Here are the great items on our menu!'\n\n    let list = document.createElement('ul');\n    let item1 = document.createElement('li');\n    item1.textContent = 'Apple Pie - $2';\n    list.appendChild(item1);\n    let item2 = document.createElement('li');\n    item2.textContent = 'Apple Tart - $1.50';\n    list.appendChild(item2);\n    let item3 = document.createElement('li');\n    item3.textContent = 'Just an Apple - $0.50';\n    list.appendChild(item3);\n    let item4 = document.createElement('li');\n    item4.textContent = 'Apple Smoothie - $1';\n    list.appendChild(item4);\n    let item5 = document.createElement('li');\n    item5.textContent = 'Apple Fries - $0.75';\n    list.appendChild(item5);\n\n    menu.appendChild(header);\n    menu.appendChild(list);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIHdoaWxlIChtZW51LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWVudS5yZW1vdmVDaGlsZChtZW51LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdIZXJlIGFyZSB0aGUgZ3JlYXQgaXRlbXMgb24gb3VyIG1lbnUhJ1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbTEudGV4dENvbnRlbnQgPSAnQXBwbGUgUGllIC0gJDInO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgIGxldCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbTIudGV4dENvbnRlbnQgPSAnQXBwbGUgVGFydCAtICQxLjUwJztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0yKTtcbiAgICBsZXQgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0zLnRleHRDb250ZW50ID0gJ0p1c3QgYW4gQXBwbGUgLSAkMC41MCc7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtMyk7XG4gICAgbGV0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpdGVtNC50ZXh0Q29udGVudCA9ICdBcHBsZSBTbW9vdGhpZSAtICQxJztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW00KTtcbiAgICBsZXQgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW01LnRleHRDb250ZW50ID0gJ0FwcGxlIEZyaWVzIC0gJDAuNzUnO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGlzdCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/img/apples.jpg":
/*!****************************!*\
  !*** ./src/img/apples.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51300112bf7e0c29640a.jpg";

/***/ })

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;