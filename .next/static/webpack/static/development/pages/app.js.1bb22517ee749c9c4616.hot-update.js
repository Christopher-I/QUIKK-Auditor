webpackHotUpdate("static/development/pages/app.js",{

/***/ "./pages/components/Sections/landingPageSection1.js":
/*!**********************************************************!*\
  !*** ./pages/components/Sections/landingPageSection1.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/hackathon/auditorFrontEnd/pages/components/Sections/landingPageSection1.js";


var listOfCompilers = ["soljson-v0.3.1+commit.c492d9b.js", "soljson-v0.3.6+commit.3fc68da.js", "soljson-v0.4.24+commit.e67f0147.js", "soljson-v0.4.26+commit.4563c3fc.js", "soljson-v0.5.0+commit.1d4f565a.js", "soljson-v0.5.5+commit.47a71e8f.js", "soljson-v0.5.9+commit.e560f70d.js"];

var landingPageSection1 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(landingPageSection1, _React$Component);

  function landingPageSection1(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, landingPageSection1);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(landingPageSection1).call(this, props));
    _this.state = {
      currentCompiler: '' //this.handleChange = this.handleChange.bind(this);

    };
    return _this;
  } //take contract code from component and pass it to parent
  // storeContractCodeToState(){
  // 	this.props.storeContractCodeToState(this.state.contractCode);
  // }
  //when smart contract code changes update the state of the parent component


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(landingPageSection1, [{
    key: "handleChangeToContractInput",
    value: function handleChangeToContractInput(event) {
      this.props.storeContractCodeToState(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        style: {
          height: '850px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, " QUIKK Smart Contract Auditor"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          color: 'grey'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, " light, open-source smart contract auditor for ethereum"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["TextArea"], {
        onChange: this.handleChangeToContractInput(value),
        style: {
          height: '700px'
        },
        placeholder: "Paste your smart contract code here...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        primary: true,
        floated: "right",
        style: {
          marginTop: '10px'
        },
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Run Audit")));
    }
  }]);

  return landingPageSection1;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (landingPageSection1);

/***/ })

})
//# sourceMappingURL=app.js.1bb22517ee749c9c4616.hot-update.js.map