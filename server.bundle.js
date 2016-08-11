/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(13);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _reactRedux = __webpack_require__(7);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var express = __webpack_require__(22);
	var path = __webpack_require__(23);
	var compression = __webpack_require__(25);

	var app = express();

	var file_path = __dirname + '/www';

	// 指定静态资源路径，例如 index.css
	app.use(express.static('www', { index: false }));

	app.use(compression());

	// 所有请求都发送给 index.html 因此 React Router 的 browserHistory 可以正常工作
	app.get('*', function (req, res) {

	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            // RouterContext 是 Router 所渲染的内容
	            // Router 将 props 保存在 state 中监听 'browserHistroy'
	            // 但服务端是无状态程序，所以我们需要使用 'match' 在渲染之前获取 props
	            // let initialState = {
	            //   postsBySubreddit:"1",
	            //   selectedSubreddit:"2",
	            //   setJumpUrl:"3",
	            //   routing:"4",
	            //   count:20
	            // }
	            var initialState = {};
	            var store = (0, _configureStore2.default)(initialState);

	            var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.RouterContext, props)));
	            // Grab the initial state from our Redux store
	            var finalState = store.getState();
	            // console.log(111);
	            res.send(renderPage(appHtml, finalState));
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	});

	function renderPage(appHtml, initialState) {
	    return '\n  <!doctype html>\n  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->\n  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->\n  <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->\n  <!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->\n      <head>\n          <meta charset="utf-8">\n          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n          <title></title>\n          <meta name="description" content="">\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <link rel="apple-touch-icon" href="apple-touch-icon.png">\n\n          <style>\n              body {\n                  padding-top: 50px;\n\n                  padding-bottom: 20px;\n              }\n          </style>\n          <link rel="stylesheet" href="/css/common.css">\n          <link rel="stylesheet" href="/css/index.css">\n\n          <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>\n      </head>\n      <body>\n          <!--[if lt IE 8]>\n              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href=\'http://browsehappy.com/\'>upgrade your browser</a> to improve your experience.</p>\n          <![endif]-->\n\n\n          <div id="app">' + appHtml + 'BBB</div>\n            <script>\n              window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n            </script>\n          <script src="/js/commons.js"></script>\n          <script src="/js/index.js"></script>\n      </body>\n  </html>\n\n   ';
	}

	var PORT = ({"NODE_ENV":"production"}).PORT || 8080;
	app.listen(PORT, function () {
	    console.log('Production Express server running at localhost : ' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	var _Tabs = __webpack_require__(9);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	//
	// import WordList from '../js/containers/views/WordList/WordList.js'
	// import DataPanel from '../js/containers/views/DataPanel/DataPanel.js'
	// import InputWord from '../js/containers/views/DataPanel/InputWord.js'

	// import UserPage from './containers/UserPage'
	// import RepoPage from './containers/RepoPage'
	//
	// import SecondView from '../js/containers/views/SecondView.jsx'
	// // import ThirdlyVIew from '../js/containers/views/ThirdlyVIew.jsx'
	// import Repos from '../js/containers/views/Repos.js'
	// import Repo from '../js/containers/views/Repo.js'
	exports.default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'tabs', component: _Tabs2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default })));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'container' },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // let unsubscribe = this.context.store.subscribe(() => {
	            //
	            //     // 状态变更后实时保存状态到本地
	            //
	            //     let reduxState = this.context.store.getState();
	            //     // this.setState({dataArray: reduxState.content});
	            //     this.keyIndex++;
	            //     localStorage.setItem('keyIndex', this.keyIndex);
	            //     localStorage.setItem('store', JSON.stringify(reduxState));
	            // });
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	App.defaultProps = {};
	App.propTypes = {};

	App.contextTypes = {
	    store: _react2.default.PropTypes.object.isRequired
	};
	exports.default = (0, _reactRedux.connect)()(App);

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(7);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    // 设置 state 初始属性

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

	    _this.state = {};

	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, '3232222222121222');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }]);

	  return Home;
	}(_react2.default.Component);
	// 设置属性默认值

	Home.defaultProps = {};
	// 限制属性类型
	Home.propTypes = {};

	//import { setVisibilityFilter } from '../actions'
	//import Link from '../components/Link'

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    //active: ownProps.filter === state.visibilityFilter
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      //dispatch(setVisibilityFilter(ownProps.filter))
	    }
	  };
	};

	var HomeWrap = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

	exports.default = HomeWrap;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _NavLink = __webpack_require__(10);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _MainBoard = __webpack_require__(11);

	var _MainBoard2 = _interopRequireDefault(_MainBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tabs = function (_React$Component) {
	    _inherits(Tabs, _React$Component);

	    function Tabs(props) {
	        _classCallCheck(this, Tabs);

	        // 设置 state 初始属性

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(Tabs, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _NavLink2.default,
	                            { to: '/tabs/wordlist' },
	                            'WordList'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _NavLink2.default,
	                            { to: '/tabs/datapanel' },
	                            'DataPanel'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _NavLink2.default,
	                            { to: '/tabs/datapanel/add' },
	                            'InputWord'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _MainBoard2.default,
	                    null,
	                    this.props.children
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }]);

	    return Tabs;
	}(_react2.default.Component);
	// 设置属性默认值


	Tabs.defaultProps = {};
	// 限制属性类型
	Tabs.propTypes = {};

	//
	// const mapStateToProps = (state, ownProps) => {
	//   return {
	//     active: ownProps.filter === state.visibilityFilter
	//   }
	// }
	//
	// const mapDispatchToProps = (dispatch, ownProps) => {
	//   return {
	//     onClick: () => {
	//       dispatch(setVisibilityFilter(ownProps.filter))
	//     }
	//   }
	// }

	var TabsContainer = (0, _reactRedux.connect)()(Tabs);

	exports.default = TabsContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _react2.default.createClass({
	    displayName: 'NavLink',
	    render: function render() {
	        return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'link-active-name' }));
	    }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(12);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	// require('../../../css/component/common/MainBoard.css')

	var MainBoard = function (_React$Component) {
	    _inherits(MainBoard, _React$Component);

	    function MainBoard(props) {
	        _classCallCheck(this, MainBoard);

	        // 设置 state 初始属性

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainBoard).call(this, props));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(MainBoard, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { className: 'main-board' }, this.props.children);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }]);

	    return MainBoard;
	}(_react2.default.Component);
	// 设置属性默认值

	MainBoard.defaultProps = {};
	// 限制属性类型
	MainBoard.propTypes = {};
	MainBoard.contextTypes = {
	    store: _react2.default.PropTypes.object.isRequired
	};
	exports.default = MainBoard;

/***/ },
/* 12 */
/***/ function(module, exports) {

	

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Use DefinePlugin (Webpack) or loose-envify (Browserify)
	// together with Uglify to strip the dev branch in prod build.

	if (true) {
	  module.exports = __webpack_require__(14);
	} else {
	  module.exports = require('./configureStore.dev');
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(15);

	var _index = __webpack_require__(16);

	var _index2 = _interopRequireDefault(_index);

	var _reduxThunk = __webpack_require__(21);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function configureStore(initialState) {
	    return (0, _redux.createStore)(_index2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default // lets us dispatch() functions
	    ));
	}

	// Middleware you want to use in production

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectedSubreddit = selectedSubreddit;
	exports.posts = posts;
	exports.postsBySubreddit = postsBySubreddit;
	exports.setJumpUrl = setJumpUrl;

	var _redux = __webpack_require__(15);

	var _reactRouterRedux = __webpack_require__(17);

	var _action = __webpack_require__(18);

	var _DataPanel = __webpack_require__(20);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function selectedSubreddit() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 'reactjs' : arguments[0];
	  var action = arguments[1];

	  //  if (!action) {
	  //      return state
	  //  }
	  switch (action.type) {
	    case _action.SELECT_SUBREDDIT:
	      return action.subreddit;
	    default:
	      return state;
	  }
	}

	function posts() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    didInvalidate: false,
	    items: []
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _action.INVALIDATE_SUBREDDIT:
	      return _extends({}, state, {
	        didInvalidate: true
	      });
	    case _action.REQUEST_POSTS:
	      return _extends({}, state, {
	        isFetching: true,
	        didInvalidate: false
	      });
	    case _action.RECEIVE_POSTS:
	      return _extends({}, state, {
	        isFetching: false,
	        didInvalidate: false,
	        items: action.posts,
	        lastUpdated: action.receivedAt
	      });
	    default:
	      return state;
	  }
	}

	function postsBySubreddit() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _action.INVALIDATE_SUBREDDIT:
	    case _action.RECEIVE_POSTS:
	    case _action.REQUEST_POSTS:

	      return _extends({}, state, _defineProperty({}, action.subreddit, posts(state[action.subreddit], action)));
	    default:
	      return state;
	  }
	}

	function setJumpUrl() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SETURL':
	      return _extends({}, state, {
	        value: action.url
	      });
	      break;
	    default:
	      return state;
	  }
	}

	// function wordList (state=['1','2','3'],action){
	//     return state
	// }

	var rootReducer = (0, _redux.combineReducers)({
	  postsBySubreddit: postsBySubreddit,
	  selectedSubreddit: selectedSubreddit,
	  setJumpUrl: setJumpUrl,
	  routing: _reactRouterRedux.routerReducer,
	  wordList: _DataPanel.wordList,
	  dataPanel: _DataPanel.dataPanel,
	  count: function count() {
	    return 0;
	  }
	});
	exports.default = rootReducer;

	// export {
	//     selectedSubreddit,
	//     posts,
	//     postsBySubreddit,
	//     setJumpUrl
	// }

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RECEIVE_POSTS = exports.REQUEST_POSTS = exports.INVALIDATE_SUBREDDIT = exports.SELECT_SUBREDDIT = undefined;
	exports.selectSubreddit = selectSubreddit;
	exports.invalidateSubreddit = invalidateSubreddit;
	exports.requestPosts = requestPosts;
	exports.receivePosts = receivePosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
	exports.setJumpUrl = setJumpUrl;

	var _isomorphicFetch = __webpack_require__(19);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SELECT_SUBREDDIT = exports.SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
	function selectSubreddit(subreddit) {
	    return {
	        type: SELECT_SUBREDDIT,
	        subreddit: subreddit
	    };
	}

	// when press a "refresh" button to update it
	var INVALIDATE_SUBREDDIT = exports.INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
	function invalidateSubreddit(subreddit) {
	    return {
	        type: INVALIDATE_SUBREDDIT,
	        subreddit: subreddit
	    };
	}

	// when it's time to fetch the posts for some subreddit,we will dispatch a REQUEST_POSTS action
	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	function requestPosts(subreddit) {
	    return {
	        type: REQUEST_POSTS,
	        subreddit: subreddit
	    };
	}

	// when the network request comes through,we will dispatch RECEIVE_POSTS

	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
	function receivePosts(subreddit, json) {

	    return {
	        type: RECEIVE_POSTS,
	        subreddit: subreddit,
	        posts: json.data.children.map(function (child) {
	            return child.data;
	        }),
	        receivedAt: Date.now()
	    };
	}

	// 我们的第一个 thunk action creator
	// 尽管与其他的 creator 有些不一样，但你可以像其他 creator 一样使用：
	// store.dispatch(fetchPosts('reactjs'))
	function fetchPosts(subreddit) {

	    //Thunk 中间件固定处理格式，使你可以在 creator 内使用 dispatch (在返回的 function 中) 。

	    return function (dispatch) {

	        // 先抛出一个 dispatch 通知应用程序状态需要更新
	        // 这 API 的调用表明开始执行操作
	        dispatch(requestPosts(subreddit));

	        // thunk 中间件调用的这个方法可以返回值，
	        // 他会被传递作为dispatch 方法的返回值

	        // 在这个例子，我们返回 promise 。
	        // 可以在调用 fetchPosts 的位置继续使用 then 处理结果。
	        return (0, _isomorphicFetch2.default)('http://www.reddit.com/r/' + subreddit + '.json').then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            return(

	                // 我们可以 dispatch 多次
	                // 这里，我们更新 app state 为 API 调用返回的结果
	                // store.dispatch(fetchPosts('reactjs')).then(() =>
	                //   console.log(store.getState())
	                // )

	                dispatch(receivePosts(subreddit, json))
	            );
	        });
	    };
	}

	function shouldFetchPosts(state, subreddit) {
	    var posts = state.postsBySubreddit[subreddit];
	    if (!posts) {
	        return true;
	    } else if (posts.isFetching) {
	        return false;
	    } else {
	        return posts.didInvalidate;
	    }
	}

	function fetchPostsIfNeeded(subreddit) {
	    // Note that the function also receives getState()
	    // which lets you choose what to dispatch next.

	    // This is useful for avoiding a network request if
	    // a cached value is already available.
	    console.log(222);
	    return function (dispatch, getState) {

	        if (shouldFetchPosts(getState(), subreddit)) {
	            // Dispatch a thunk from thunk!
	            console.log(111);
	            return dispatch(fetchPosts(subreddit));
	        } else {
	            // Let the calling code know there's nothing to wait for.
	            return Promise.resolve();
	        }
	    };
	}

	function setJumpUrl(url) {
	    return {
	        type: 'SETURL',
	        url: url
	    };
	}

	// Fetches a page of stargazers for a particular repo.
	// Bails out if page is cached and user didn’t specifically request next page.
	// Relies on Redux Thunk middleware.
	// export function loadStargazers(fullName, nextPage) {
	//   return (dispatch, getState) => {
	//     const {
	//       nextPageUrl = `repos/${fullName}/stargazers`,
	//       pageCount = 0
	//     } = getState().pagination.stargazersByRepo[fullName] || {}
	//
	//     if (pageCount > 0 && !nextPage) {
	//       return null
	//     }
	//
	//     return dispatch(fetchStargazers(fullName, nextPageUrl))
	//   }
	// }

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addWord = addWord;
	// 添加单词
	var ADD_WORD = exports.ADD_WORD = 'ADD_WORD';
	function addWord(word, describe) {
	    return {
	        type: ADD_WORD,
	        word: word,
	        describe: describe
	    };
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);