webpackHotUpdate("static/development/pages/app.js",{

/***/ "./Ethereum/web3.js":
/*!**************************!*\
  !*** ./Ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== undefined) {
  //we are in the browser and metamask is running.
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
  console.log("metamask is running");
} else {
  //we are on the server or the user is not running metamask
  //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
  console.log("infura is running");
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=app.js.11ea26b40a19fd476e44.hot-update.js.map