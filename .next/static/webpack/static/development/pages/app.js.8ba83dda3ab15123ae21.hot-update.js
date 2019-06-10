webpackHotUpdate("static/development/pages/app.js",{

/***/ "./sampleContract.js":
/*!***************************!*\
  !*** ./sampleContract.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return "pragma solidity ^0.4.0;" + "\n" + "\n" + "contract SampleContract{" + "\n" + "address public owner;" + "\n" + "uint public last_completed_SampleContract;" + "\n" + "\n" + "constructor() public {" + "\n" + "owner = msg.sender;" + "\n" + "}" + "\n" + "\n" + "modifier restricted() {" + "\n" + "if (msg.sender == owner) _;" + "\n" + "}" + "\n" + "\n" + "function setCompleted(uint completed) public restricted {" + "\n" + "last_completed_SampleContract = completed;" + "\n" + "}" + "\n" + "\n" + "function upgrade(address new_address) public restricted {" + "\n" + " SampleContract upgraded = SampleContract(new_address);" + "\n" + "upgraded.setCompleted(last_completed_SampleContract);" + "\n" + "}" + "\n" + "}";
});

/***/ })

})
//# sourceMappingURL=app.js.8ba83dda3ab15123ae21.hot-update.js.map