webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/hackathon/auditorFrontEnd/pages/test.js";



var web3 = {};
var alreadyLoaded = false;
var compiler;
var optimize = 1;
var outterResult = ""; // function loadWeb3() {
//    let web3Injected = window.web3;
//    if(typeof web3Injected !== 'undefined'){
//      console.log("saw injected web3!");
//      web3 = new Web3(web3Injected.currentProvider);
//    } else {
//      console.log("did not see web3 injected!");
//      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//      //console.debug(web3.eth.accounts);
//    }
// }

var Deploy =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Deploy, _Component);

  function Deploy(props, context) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Deploy);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Deploy).call(this, props, context));
    _this.state = {
      users: {},
      thisUser: {},
      thisImage: {},
      newFlag: 0,
      thisNetId: '',
      contractText: '',
      statusMessage: 'loading BrowserSolc compiler...',
      thisTxHash: '',
      thisAddress: '',
      compiler: {}
    };
    _this.RegisterChange = _this.RegisterChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Deploy, [{
    key: "getInfo",
    value: function getInfo() {
      var outerThis = this;

      if (typeof web3.eth !== 'undefined') {
        console.log("saw eth accounts: ");
        console.debug(web3.eth.accounts); //console.debug(web3.eth)
        // web3.eth.getCompilers(function(err,resp){
        //   console.log("available compilers: " + resp);
        // });

        web3.version.getNetwork(function (err, netId) {
          var tempNetId = '';

          if (err) {
            tempNetId = err;
            console.log('web3.version.getNetwork() saw err: ' + err);
          }

          console.log("saw netId:" + netId);

          switch (netId) {
            case "1":
              tempNetId = "mainnet";
              console.log('This is mainnet');
              break;

            case "2":
              tempNetId = "Morden  test network";
              console.log('This is the deprecated Morden test network.');
              break;

            case "3":
              tempNetId = "ropsten test network";
              console.log('This is the ropsten test network.');
              break;

            default:
              tempNetId = "localhost";
              console.log('This is an unknown/localhost network: ' + tempNetId);
          }

          outerThis.setState({
            thisNetId: tempNetId
          });
        });
      }
    }
  }, {
    key: "setupCompiler",
    value: function setupCompiler() {
      var outerThis = this;
      setTimeout(function () {
        // console.debug(window.BrowserSolc);
        window.BrowserSolc.getVersions(function (soljsonSources, soljsonReleases) {
          var compilerVersion = soljsonReleases[lodash__WEBPACK_IMPORTED_MODULE_10___default.a.keys(soljsonReleases)[0]];

          console.log("Browser-solc compiler version : " + compilerVersion);
          window.BrowserSolc.loadVersion(compilerVersion, function (c) {
            compiler = c;
            outerThis.setState({
              statusMessage: "ready!"
            }, function () {
              console.log("Solc Version Loaded: " + compilerVersion);
            });
          });
        });
      }, 1000);
    }
  }, {
    key: "compileAndDeploy",
    value: function compileAndDeploy() {
      var outerThis = this;
      console.log("compileAndDeploy called!");
      this.setState({
        statusMessage: "compiling and deploying!"
      });
      var result = compiler.compile(this.state.contractText, optimize);

      if (result.errors && _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(result.errors).match(/error/i)) {
        outerThis.setState({
          statusMessage: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(result.errors)
        });
      } else {
        console.debug(result); // we need to find which of the contracts contains the bytecode for deployment
        // thisContractSorted = _.sortBy _.map(result.contracts, function(val,key) {
        //   // ugly mapsort in react
        //     return [val['abi'],key];
        //   }
        // ), (val) ->
        //   return -1*parseFloat(val[0])  # this grabs the hidden timestampms from above, to sort by

        var thisMap = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.sortBy(lodash__WEBPACK_IMPORTED_MODULE_10___default.a.map(result.contracts, function (val, key) {
          // ugly mapsort in react
          return [key, val];
        }), function (val) {
          return -1 * _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(val[1].bytecode);
        });

        console.debug(thisMap);
        var abi = JSON.parse(thisMap[0][1].interface);
        var bytecode = "0x" + thisMap[0][1].bytecode;
        var myContract = web3.eth.contract(abi);
        console.log("bytecode: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(bytecode));
        console.log("abi: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(abi));
        console.log("myContract: ");
        console.debug(myContract); //console.log("myAddress: " + web3.eth.accounts[0]);

        web3.eth.getGasPrice(function (err, gasPrice) {
          if (err) {
            console.log("deployment web3.eth.getGasPrice error: " + err);
            outerThis.setState({
              statusMessage: "deployment web3.eth.getGasPrice error: " + err
            });
            return null;
          } else {
            console.log("current gasPrice (gas / ether): " + gasPrice);
            web3.eth.estimateGas({
              data: bytecode
            }, function (err, gasEstimate) {
              if (err) {
                console.log("deployment web3.eth.estimateGas error: " + err);
                outerThis.setState({
                  statusMessage: "deployment web3.eth.estimateGas error: " + err
                });
                return null;
              } else {
                console.log("deployment web3.eth.estimateGas amount: " + gasEstimate);
                var inflatedGasCost = Math.round(1.2 * gasEstimate);
                var ethCost = gasPrice * inflatedGasCost / 10000000000 / 100000000;
                var warnings = "";

                if (result.errors) {
                  warnings = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(result.errors) + ", "; // show warnings if they exist
                }

                outerThis.setState({
                  statusMessage: warnings + "Compiled! (inflated) estimateGas amount: " + inflatedGasCost + " (" + ethCost + " Ether)"
                });
                myContract.new({
                  from: web3.eth.accounts[0],
                  data: bytecode,
                  gas: inflatedGasCost
                }, function (err, newContract) {
                  console.log("newContract: " + newContract);

                  if (err) {
                    console.log("deployment err: " + err);
                    outerThis.setState({
                      statusMessage: "deployment error: " + err
                    });
                    return null;
                  } else {
                    // NOTE: The callback will fire twice!
                    // Once the contract has the transactionHash property set and once its deployed on an address.
                    // e.g. check tx hash on the first call (transaction send)
                    if (!newContract.address) {
                      console.log("Contract transaction send: TransactionHash: " + newContract.transactionHash + " waiting to be mined...");
                      outerThis.setState({
                        statusMessage: "Please wait a minute.",
                        thisTxHash: newContract.transactionHash,
                        thisAddress: "waiting to be mined..."
                      });
                    } else {
                      console.log("Contract mined! Address: " + newContract.address);
                      console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newContract));
                      var thisNewStatus = "Contract Deployed to " + outerThis.state.thisNetId;
                      outerThis.setState({
                        statusMessage: thisNewStatus,
                        thisAddress: newContract.address
                      });
                      return null;
                    }
                  }
                });
              }
            });
          }
        });
      }

      return null;
    }
  }, {
    key: "txHashLink",
    value: function txHashLink(thisTxHash) {
      var thisLink = "https://etherscan.io/tx/" + thisTxHash;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: thisLink,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, thisTxHash);
    }
  }, {
    key: "ethAddressLink",
    value: function ethAddressLink(thisAddress) {
      var thisLink = "https://etherscan.io/address/" + thisAddress;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: thisLink,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, thisAddress);
    }
  }, {
    key: "RegisterChange",
    value: function RegisterChange(e) {
      //console.log('registering change : ' + e.target.name + " - " + e.target.value);
      // this.setState({
      //   [e.target.name]: e.target.value,
      //   "statusMessage": "ready!"
      // }
      var newState = this.state;
      newState[e.target.name] = e.target.value;
      newState["statusMessage"] = "ready!";
      this.setState(newState);
    }
  }, {
    key: "defaultEthAddressLink",
    value: function defaultEthAddressLink() {
      if (typeof web3.eth !== 'undefined') {
        if (typeof web3.eth.accounts !== 'undefined') {
          if (typeof web3.eth.accounts[0] !== 'undefined') {
            var thisLink = "https://etherscan.io/address/" + web3.eth.accounts[0];
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
              href: thisLink,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232
              },
              __self: this
            }, web3.eth.accounts[0]));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 234
              },
              __self: this
            }, " web3.eth.accounts[0] was undefined!");
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          }, " web3.eth.accounts was undefined!");
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, " web3.eth was undefined!");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!alreadyLoaded) {
        // we only want this to happen once upon page load, not every component reload...
        alreadyLoaded = true; // loadWeb3();

        this.getInfo(); //this.setupCompiler();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        style: {
          "minWidth": "70%",
          "textAlign": "center",
          "margin": "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        style: {
          "width": "170px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "http://www.enledger.io/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "http://www.enledger.com/EnLedger_glowy_logo_200x200.png",
        alt: "EnLedger-Logo",
        width: "160px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "http://www.enledger.io/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "EnLedger.io")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        style: {
          "verticalAlign": "middle",
          "textAlign": "center",
          "fontSize": "12px",
          "fontWeight": "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "&"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        style: {
          "width": "450px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://blockgeeks.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "Blockgeeks-blue-black-white.png",
        alt: "Blockgeeks-Logo",
        height: "100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        style: {
          "width": "20px",
          "verticalAlign": "middle",
          "textAlign": "center",
          "fontSize": "12px",
          "fontWeight": "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "present"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          "color": "#84DDFF"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.github.com/Tectract",
        style: {
          "color": "#84DDFF"
        },
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Tectract's"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.github.com/Tectract/EthDeployer",
        style: {
          "color": "#FFFFFF"
        },
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "EthDeployer")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Saw connection to network: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, this.state.thisNetId), "!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Saw default Eth account to use: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, this.defaultEthAddressLink()), "!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        rows: "18",
        cols: "120",
        className: "contractText",
        name: "contractText",
        ref: "contractTextRef",
        style: {
          "backgroundColor": "#E9FEED",
          "whiteSpace": "nowrap",
          "resize": "none",
          "overflowX": "hidden"
        },
        value: this.state.contractText,
        onChange: this.RegisterChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), this.state.statusMessage, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        color: "white",
        className: "Button",
        onClick: function onClick() {
          _this2.compileAndDeploy();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Compile & Deploy"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "new contract TXID: ", this.txHashLink(this.state.thisTxHash)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "new contract address: ", this.ethAddressLink(this.state.thisAddress)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "app-outro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        style: {
          "minWidth": "70%",
          "textAlign": "left",
          "margin": "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        style: {
          "textAlign": "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          "fontSize": "15px",
          "fontWeight": "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Thank you for visiting ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "http://www.enledger.io/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "EnLedger.io"), " and ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.github.com/Tectract/EthDeployer",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Tectract's EthDeployer!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          "fontSize": "13px",
          "fontWeight": "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "To use this tool you'll need a connection to an Ethereum network, via:", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          "padding": "0px 0px 0px 6px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "1. start ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/ethereum/go-ethereum",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Ethereum server"), " or ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/ethereumjs/testrpc",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "testrpc server"), " running at localhost:8545, then reload this page"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          "padding": "0px 0px 0px 6px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "2. Install ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://metamask.io/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Metamask plugin"), ", connect to network of your choice (including Mainnet!), then reload this page"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "notes"), ": for localhost testrpc (testnet), you don't need Metamask running, see ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/Tectract/EthDeployer/blob/master/README.md",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "the README"), " for metamask signing locally & ethereumjs-testrpc notes", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "notes"), ": for compilation to succeed while running against localhost:8545 you'll need solc (solidity compiler) installed locally, see instructions ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://solidity.readthedocs.io/en/v0.3.3/installing-solidity.html",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "here"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "notes"), ": sometimes you may need to reload once or twice for it to see your web3.eth.accounts[0] account", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), "Author: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "http://www.enledger.io/blog/our-team/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Ryan Molecke"), ", sponsored by ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "http://blockgeeks.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "BlockGeeks.com"), "!", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), "Issues, comments, suggestions? Please use ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/Tectract/EthDeployer/issues",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "this page"), " to start an issue ticket, do not email Ryan for help directly :)", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), "If you clone this tool and set up your own EthDeployer, please include the ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/Tectract/EthDeployer/blob/master/LICENSE",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Mozilla Public License 2.0"), " & give me props, thanks! ~Ryan")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      })));
    }
  }]);

  return Deploy;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Deploy);

/***/ })

})
//# sourceMappingURL=test.js.f0da1c220b149460a450.hot-update.js.map