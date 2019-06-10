webpackHotUpdate("static/development/pages/app.js",{

/***/ "./pages/components/landingPage.js":
/*!*****************************************!*\
  !*** ./pages/components/landingPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _auditor_Auditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auditor/Auditor */ "./pages/auditor/Auditor.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony import */ var _renderedModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderedModal */ "./pages/components/renderedModal.js");
/* harmony import */ var _Sections_landingPageSection1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sections/landingPageSection1 */ "./pages/components/Sections/landingPageSection1.js");
/* harmony import */ var _Sections_landingPageSection2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sections/landingPageSection2 */ "./pages/components/Sections/landingPageSection2.js");
/* harmony import */ var _sampleContract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../sampleContract */ "./sampleContract.js");







var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/hackathon/auditorFrontEnd/pages/components/landingPage.js";










var landingPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(landingPage, _React$Component);

  function landingPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, landingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(landingPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      currentCompiler: '',
      contractCode: Object(_sampleContract__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      creationCost: '',
      executionCost: '',
      gasEstimate: '',
      timeOfAudit: '',
      fileSize: '',
      vunerabiltiesFound: '',
      noOfLines: '',
      percent: '',
      errorMessage: '',
      successMessage: '',
      renderedList: "",
      loading: false,
      suggestions: [],
      userName: '',
      userContactInfo: '',
      userSuggestion: '',
      modalOpen: false //get Time of Audit

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setTimeOfAudit", function () {
      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + ' ' + time;

      _this.setState({
        timeOfAudit: dateTime
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "selectCompiler", function (compiler) {
      _this.setState({
        currentCompiler: compiler
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "storeContractCodeToState", function (contractCode) {
      console.log(contractCode);

      _this.setState({
        contractCode: contractCode
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "removeErrorMessage", function () {
      _this.setState({
        warningsList: '',
        creationCost: '',
        executionCost: '',
        gasEstimate: '',
        timeOfAudit: '',
        fileSize: '',
        vunerabiltiesFound: '',
        noOfLines: '',
        percent: '',
        errorMessage: '',
        successMessage: '',
        renderedList: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWarningList", function (warnings) {
      //update loading bar
      _this.setState({
        percent: '75',
        warningsList: warnings.length
      });

      var list = warnings.map(function (warnings) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["List"].Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["List"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["List"].Header, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "line ", warnings.key), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["List"].Description, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, warnings.value)));
      }); //update loading bar

      _this.setState({
        percent: '100',
        renderedList: list
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "auditCode", function (dataArray) {
      return Object(_auditor_Auditor__WEBPACK_IMPORTED_MODULE_9__["default"])(dataArray);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function () {
      //check if compiler is selected by user else notify user
      if (_this.state.currentCompiler) {
        _this.setTimeOfAudit();

        var self = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this); //notify user of progress


        _this.setState({
          loading: true,
          errorMessage: '',
          successMessage: ''
        }); //store contract code to state and prepare for compile and audit


        var source = _this.state.contractCode; //split code into array based on each new line

        var dataArray = source.split("\n");
        var dataArrayLength = dataArray.length; //update loading bar

        self.setState({
          percent: '25'
        }); //printlist of available compilers
        // BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
        //   //console.log(soljsonSources);
        //   //console.log(soljsonReleases);
        // });
        //Load a chosen compiler version

        BrowserSolc.loadVersion.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this))(_this.state.currentCompiler, function (compiler) {
          var optimize = 1;
          var result = compiler.compile(source, optimize); // console.log(result);
          // console.log(result.sources[""]);
          //console.log(result.contracts);
          //check for errrors in compilation

          if (result.errors && !result.sources[""]) {
            //save all warning and errors to state
            self.setState({
              errorMessage: result.errors[0]
            });
          } else {
            //check for warnings in compilation
            if (result.errors) {
              //save all warning and errors to state
              self.setState({
                errorMessage: result.errors[0]
              });
            } //compilation was succesful, auditing and updating general stats begins at this point 
            //compute total gas cost which is the estimated creation cost plus the execution cost
            //let totalGasCost = result.contracts[":Migrations"].gasEstimates.creation[0]+result.contracts[":Migrations"].gasEstimates.creation[1];


            self.setState({
              noOfLines: dataArrayLength,
              // creationCost:result.contracts[":Migrations"].gasEstimates.creation[0],
              // executionCost:result.contracts[":Migrations"].gasEstimates.creation[1],
              // gasEstimate : totalGasCost,
              percent: 50,
              successMessage: "Audit Complete!"
            }); //send contract code to auditor and await feed back of array of warnings

            var warnings = self.auditCode(dataArray); //send array of warnings to renderList function to create organized JSX and update state

            self.renderWarningList(warnings);
          }
        });
      } else {
        _this.setState({
          errorMessage: "Please select a compiler"
        });
      }

      _this.setState({
        loading: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "saveUserSuggestionToState", function () {
      var userSuggestion = {};
      userSuggestion.name = _this.state.userName;
      userSuggestion.contactInfo = _this.state.userContactInfo;
      userSuggestion.suggestion = _this.state.userSuggestion;
      var currentSuggestions = _this.state.suggestions;
      currentSuggestions.push(userSuggestion);

      _this.setState({
        suggestions: currentSuggestions,
        modalOpen: false
      });

      console.log(_this.state.suggestions);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "userNameToState", function (event) {
      _this.setState({
        userName: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "userContactInfoToState", function (event) {
      _this.setState({
        userContactInfo: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "userSuggestionToState", function (event) {
      _this.setState({
        userSuggestion: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOpen", function () {
      return _this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      return _this.setState({
        modalOpen: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(landingPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        style: {
          width: '1300px',
          marginTop: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 11,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sections_landingPageSection1__WEBPACK_IMPORTED_MODULE_13__["default"], {
        contractCode: this.state.contractCode,
        removeErrorMessage: this.removeErrorMessage,
        loading: this.state.loading,
        successMessage: this.state.successMessage,
        errorMessage: this.state.errorMessage,
        percent: this.state.percent,
        storeContractCodeToState: this.storeContractCodeToState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sections_landingPageSection2__WEBPACK_IMPORTED_MODULE_14__["default"], {
        warningsList: this.state.warningsList,
        renderedList: this.state.renderedList,
        gasEstimate: this.state.gasEstimate,
        removeErrorMessage: this.removeErrorMessage,
        loading: this.state.loading,
        noOfLines: this.state.noOfLines,
        timeOfAudit: this.state.timeOfAudit,
        onSubmit: this.onSubmit,
        selectCompiler: this.selectCompiler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        open: this.state.modalOpen,
        onClose: this.handleClose,
        trigger: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: this.handleOpen,
          style: {
            marginTop: '775px'
          },
          basic: true,
          circular: true,
          icon: "comment alternate outline",
          size: "huge",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, "Suggestion Box"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        style: {
          fontSize: '19px',
          color: 'grey'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Thank you for taking the time to leave some feedback, I am a solo enthusiast who created this auditor for fun and to contribute to our beautiful ecosystem, I appreciate all suggestions, contributions and feedback to help improve this platform."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Modal"].Content, {
        image: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Modal"].Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.userNameToState,
        value: this.state.userName,
        label: "Name(optional)",
        placeholder: "John Doe.....",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.userContactInfoToState,
        value: this.state.userContactInfo,
        label: "Contact Information",
        placeholder: "Email, Telegram,Git..etc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["TextArea"], {
        onChange: this.userSuggestionToState,
        value: this.state.userSuggestion,
        style: {
          width: '850px',
          height: '100px'
        },
        placeholder: "Please enter your message here...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        floated: "right",
        secondary: true,
        onClick: this.saveUserSuggestionToState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        style: {
          color: 'gray'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "ETH Address: 0x001FabDCb503f618ceE9d79D949301EEBC170647")))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        style: {
          marginLeft: '380px',
          color: 'gray'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Suggestions and Contributions are welcome ETH Address: 0x001FabDCb503f618ceE9d79D949301EEBC170647"));
    }
  }]);

  return landingPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (landingPage);

/***/ })

})
//# sourceMappingURL=app.js.05c678a01c7737c7ae2e.hot-update.js.map