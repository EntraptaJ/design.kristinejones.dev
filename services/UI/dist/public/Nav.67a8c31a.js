// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@material-ui/core/esm/Collapse/Collapse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _transitions = require("../styles/transitions");

var _utils = require("../transitions/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },

    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
      visibility: 'hidden'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


exports.styles = styles;

var Collapse = _react.default.forwardRef(function Collapse(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$collapsedHeigh = props.collapsedHeight,
      collapsedHeight = _props$collapsedHeigh === void 0 ? '0px' : _props$collapsedHeigh,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExiting = props.onExiting,
      style = props.style,
      theme = props.theme,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? _transitions.duration.standard : _props$timeout,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "collapsedHeight", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "theme", "timeout"]);

  var timer = _react.default.useRef();

  var wrapperRef = _react.default.useRef(null);

  var autoTransitionDuration = _react.default.useRef();

  _react.default.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);

  var handleEnter = function handleEnter(node) {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node);
    }
  };

  var handleEntering = function handleEntering(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps = (0, _utils.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = "".concat(wrapperHeight, "px");

    if (onEntering) {
      onEntering(node);
    }
  };

  var handleEntered = function handleEntered(node) {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node);
    }
  };

  var handleExit = function handleExit(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");

    if (onExit) {
      onExit(node);
    }
  };

  var handleExiting = function handleExiting(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps2 = (0, _utils.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  };

  var addEndListener = function addEndListener(_, next) {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return _react.default.createElement(_reactTransitionGroup.Transition, (0, _extends2.default)({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _clsx.default)(classes.container, className, state === 'entered' && classes.entered, state === 'exited' && !inProp && collapsedHeight === '0px' && classes.hidden),
      style: (0, _extends2.default)({
        minHeight: collapsedHeight
      }, style),
      ref: ref
    }, childProps), _react.default.createElement("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, _react.default.createElement("div", {
      className: classes.wrapperInner
    }, children)));
  });
});

"development" !== "production" ? Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntered: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExiting: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : void 0;
Collapse.muiSupportAuto = true;

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","prop-types":"../node_modules/prop-types/index.js","react-transition-group":"../node_modules/react-transition-group/esm/index.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../styles/transitions":"../node_modules/@material-ui/core/esm/styles/transitions.js","../transitions/utils":"../node_modules/@material-ui/core/esm/transitions/utils.js"}],"../node_modules/@material-ui/core/esm/Collapse/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Collapse.default;
  }
});

var _Collapse = _interopRequireDefault(require("./Collapse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Collapse":"../node_modules/@material-ui/core/esm/Collapse/Collapse.js"}],"../node_modules/@material-ui/core/esm/Fade/Fade.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _transitions = require("../styles/transitions");

var _useTheme = _interopRequireDefault(require("../styles/useTheme"));

var _utils = require("../transitions/utils");

var _reactHelpers = require("../utils/reactHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _transitions.duration.enteringScreen,
  exit: _transitions.duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = _react.default.forwardRef(function Fade(props, ref) {
  var children = props.children,
      inProp = props.in,
      onEnter = props.onEnter,
      onExit = props.onExit,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);
  var theme = (0, _useTheme.default)();
  var handleRef = (0, _reactHelpers.useForkRef)(children.ref, ref);

  var handleEnter = function handleEnter(node) {
    (0, _utils.reflow)(node); // So the animation always start from the start.

    var transitionProps = (0, _utils.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node);
    }
  };

  var handleExit = function handleExit(node) {
    var transitionProps = (0, _utils.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  };

  return _react.default.createElement(_reactTransitionGroup.Transition, (0, _extends2.default)({
    appear: true,
    in: inProp,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout: timeout
  }, other), function (state, childProps) {
    return _react.default.cloneElement(children, (0, _extends2.default)({
      style: (0, _extends2.default)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});

"development" !== "production" ? Fade.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes.default.element,

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : void 0;
var _default = Fade;
exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","react-transition-group":"../node_modules/react-transition-group/esm/index.js","../styles/transitions":"../node_modules/@material-ui/core/esm/styles/transitions.js","../styles/useTheme":"../node_modules/@material-ui/core/esm/styles/useTheme.js","../transitions/utils":"../node_modules/@material-ui/core/esm/transitions/utils.js","../utils/reactHelpers":"../node_modules/@material-ui/core/esm/utils/reactHelpers.js"}],"../node_modules/@material-ui/core/esm/Fade/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Fade.default;
  }
});

var _Fade = _interopRequireDefault(require("./Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Fade":"../node_modules/@material-ui/core/esm/Fade/Fade.js"}],"../node_modules/@material-ui/core/esm/Backdrop/Backdrop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Fade = _interopRequireDefault(require("../Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
exports.styles = styles;

var Backdrop = _react.default.forwardRef(function Backdrop(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
  return _react.default.createElement(_Fade.default, (0, _extends2.default)({
    in: open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }));
});

"development" !== "production" ? Backdrop.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../Fade":"../node_modules/@material-ui/core/esm/Fade/index.js"}],"../node_modules/@material-ui/core/esm/Backdrop/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Backdrop.default;
  }
});

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Backdrop":"../node_modules/@material-ui/core/esm/Backdrop/Backdrop.js"}],"../node_modules/@material-ui/core/esm/Slide/Slide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTranslateValue = setTranslateValue;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _debounce = _interopRequireDefault(require("../utils/debounce"));

var _reactTransitionGroup = require("react-transition-group");

var _utils = require("@material-ui/utils");

var _reactHelpers = require("../utils/reactHelpers");

var _useTheme = _interopRequireDefault(require("../styles/useTheme"));

var _transitions = require("../styles/transitions");

var _utils2 = require("../transitions/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`
function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(".concat(window.innerWidth, "px) translateX(-").concat(rect.left - offsetX, "px)");
  }

  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }

  if (direction === 'up') {
    return "translateY(".concat(window.innerHeight, "px) translateY(-").concat(rect.top - offsetY, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}

function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}

var defaultTimeout = {
  enter: _transitions.duration.enteringScreen,
  exit: _transitions.duration.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = _react.default.forwardRef(function Slide(props, ref) {
  var children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'down' : _props$direction,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "direction", "in", "onEnter", "onEntering", "onExit", "onExited", "style", "timeout"]);
  var theme = (0, _useTheme.default)();

  var childrenRef = _react.default.useRef(null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */


  var handleOwnRef = _react.default.useCallback(function (instance) {
    // #StrictMode ready
    childrenRef.current = _reactDom.default.findDOMNode(instance);
  }, []);

  var handleRefIntermediary = (0, _reactHelpers.useForkRef)(children.ref, handleOwnRef);
  var handleRef = (0, _reactHelpers.useForkRef)(handleRefIntermediary, ref);

  var handleEnter = function handleEnter() {
    var node = childrenRef.current;
    setTranslateValue(direction, node);
    (0, _utils2.reflow)(node);

    if (onEnter) {
      onEnter(node);
    }
  };

  var handleEntering = function handleEntering() {
    var node = childrenRef.current;
    var transitionProps = (0, _utils2.getTransitionProps)({
      timeout: timeout,
      style: style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _extends2.default)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', (0, _extends2.default)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node);
    }
  };

  var handleExit = function handleExit() {
    var node = childrenRef.current;
    var transitionProps = (0, _utils2.getTransitionProps)({
      timeout: timeout,
      style: style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _extends2.default)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', (0, _extends2.default)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  };

  var handleExited = function handleExited() {
    var node = childrenRef.current; // No need for transitions when the component is hidden

    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  };

  var updatePosition = _react.default.useCallback(function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);

  _react.default.useEffect(function () {
    // Skip configuration where the position is screen size invariant.
    if (!inProp && direction !== 'down' && direction !== 'right') {
      var handleResize = (0, _debounce.default)(function () {
        if (childrenRef.current) {
          setTranslateValue(direction, childrenRef.current);
        }
      });
      window.addEventListener('resize', handleResize);
      return function () {
        handleResize.clear();
        window.removeEventListener('resize', handleResize);
      };
    }

    return undefined;
  }, [direction, inProp]);

  _react.default.useEffect(function () {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);

  return _react.default.createElement(_reactTransitionGroup.Transition, (0, _extends2.default)({
    onEnter: handleEnter,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), function (state, childProps) {
    return _react.default.cloneElement(children, (0, _extends2.default)({
      ref: handleRef,
      style: (0, _extends2.default)({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, children.props.style)
    }, childProps));
  });
});

"development" !== "production" ? Slide.propTypes = {
  /**
   * A single child content element.
   */
  children: _utils.elementAcceptingRef,

  /**
   * Direction the child node will enter from.
   */
  direction: _propTypes.default.oneOf(['left', 'right', 'up', 'down']),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExited: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : void 0;
var _default = Slide;
exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","react-dom":"../node_modules/react-dom/index.js","../utils/debounce":"../node_modules/@material-ui/core/esm/utils/debounce.js","react-transition-group":"../node_modules/react-transition-group/esm/index.js","@material-ui/utils":"../node_modules/@material-ui/utils/esm/index.js","../utils/reactHelpers":"../node_modules/@material-ui/core/esm/utils/reactHelpers.js","../styles/useTheme":"../node_modules/@material-ui/core/esm/styles/useTheme.js","../styles/transitions":"../node_modules/@material-ui/core/esm/styles/transitions.js","../transitions/utils":"../node_modules/@material-ui/core/esm/transitions/utils.js"}],"../node_modules/@material-ui/core/esm/Slide/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Slide.default;
  }
});

var _Slide = _interopRequireDefault(require("./Slide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Slide":"../node_modules/@material-ui/core/esm/Slide/Slide.js"}],"../node_modules/@material-ui/core/esm/Drawer/Drawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHorizontal = isHorizontal;
exports.getAnchor = getAnchor;
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Slide = _interopRequireDefault(require("../Slide"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _helpers = require("../utils/helpers");

var _transitions = require("../styles/transitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 'none'
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` & `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="top"` & `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="right"` & `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` & `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};

exports.styles = styles;
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};

function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}

function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}

var defaultTransitionDuration = {
  enter: _transitions.duration.enteringScreen,
  exit: _transitions.duration.leavingScreen
};
/**
 * The properties of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = _react.default.forwardRef(function Drawer(props, ref) {
  var _props$anchor = props.anchor,
      anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
      BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 16 : _props$elevation,
      _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
  var BackdropPropsProp = _props$ModalProps.BackdropProps,
      ModalProps = (0, _objectWithoutProperties2.default)(_props$ModalProps, ["BackdropProps"]),
      onClose = props.onClose,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      PaperProps = props.PaperProps,
      SlideProps = props.SlideProps,
      theme = props.theme,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'temporary' : _props$variant,
      other = (0, _objectWithoutProperties2.default)(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  var mounted = _react.default.useRef(false);

  _react.default.useEffect(function () {
    mounted.current = true;
  }, []);

  var anchor = getAnchor(theme, anchorProp);

  var drawer = _react.default.createElement(_Paper.default, (0, _extends2.default)({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true,
    className: (0, _clsx.default)(classes.paper, classes["paperAnchor".concat((0, _helpers.capitalize)(anchor))], variant !== 'temporary' && classes["paperAnchorDocked".concat((0, _helpers.capitalize)(anchor))])
  }, PaperProps), children);

  if (variant === 'permanent') {
    return _react.default.createElement("div", (0, _extends2.default)({
      className: (0, _clsx.default)(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }

  var slidingDrawer = _react.default.createElement(_Slide.default, (0, _extends2.default)({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);

  if (variant === 'persistent') {
    return _react.default.createElement("div", (0, _extends2.default)({
      className: (0, _clsx.default)(classes.root, classes.docked, className)
    }, other), slidingDrawer);
  } // variant === temporary


  return _react.default.createElement(_Modal.default, (0, _extends2.default)({
    BackdropProps: (0, _extends2.default)({}, BackdropProps, BackdropPropsProp, {
      transitionDuration: transitionDuration
    }),
    BackdropComponent: _Backdrop.default,
    className: (0, _clsx.default)(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});

"development" !== "production" ? Drawer.propTypes = {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * @ignore
   */
  BackdropProps: _propTypes.default.object,

  /**
   * The contents of the drawer.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The elevation of the drawer.
   */
  elevation: _propTypes.default.number,

  /**
   * Properties applied to the [`Modal`](/api/modal/) element.
   */
  ModalProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes.default.bool,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Properties applied to the [`Slide`](/api/slide/) element.
   */
  SlideProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['permanent', 'persistent', 'temporary'])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDrawer',
  flip: false,
  withTheme: true
})(Drawer);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../Modal":"../node_modules/@material-ui/core/esm/Modal/index.js","../Backdrop":"../node_modules/@material-ui/core/esm/Backdrop/index.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../Slide":"../node_modules/@material-ui/core/esm/Slide/index.js","../Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","../utils/helpers":"../node_modules/@material-ui/core/esm/utils/helpers.js","../styles/transitions":"../node_modules/@material-ui/core/esm/styles/transitions.js"}],"../node_modules/@material-ui/core/esm/Drawer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Drawer.default;
  }
});

var _Drawer = _interopRequireDefault(require("./Drawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Drawer":"../node_modules/@material-ui/core/esm/Drawer/Drawer.js"}],"../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ListContext = _interopRequireDefault(require("../List/ListContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
exports.styles = styles;

var ListItemText = _react.default.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = _react.default.useContext(_ListContext.default),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography.default && !disableTypography) {
    primary = _react.default.createElement(_Typography.default, (0, _extends2.default)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography.default && !disableTypography) {
    secondary = _react.default.createElement(_Typography.default, (0, _extends2.default)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary"
    }, secondaryTypographyProps), secondary);
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});

"development" !== "production" ? ListItemText.propTypes = {
  /**
   * Alias for the `primary` property.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: _propTypes.default.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: _propTypes.default.bool,

  /**
   * The main content element.
   */
  primary: _propTypes.default.node,

  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: _propTypes.default.object,

  /**
   * The secondary content element.
   */
  secondary: _propTypes.default.node,

  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: _propTypes.default.object
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItemText'
})(ListItemText);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../List/ListContext":"../node_modules/@material-ui/core/esm/List/ListContext.js"}],"../node_modules/@material-ui/core/esm/ListItemText/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ListItemText.default;
  }
});

var _ListItemText = _interopRequireDefault(require("./ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./ListItemText":"../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"}],"../node_modules/@material-ui/icons/ExpandLess.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/ExpandMore.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/Menu.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"Components/Layout/Nav/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactPortalUniversal = require("@jesstelford/react-portal-universal");

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _styles = require("@material-ui/core/styles");

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _router = require("@reach/router");

var _react = _interopRequireWildcard(require("react"));

var _AppRoutes = require("../../AppRoutes");

var _Styles = require("../../../lib/Styles");

var _useNav = require("./useNav");

var _SessionProvider = require("../../SessionProvider");

var _styles2 = require("@material-ui/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const useListStyles = (0, _styles.makeStyles)(theme => (0, _styles.createStyles)({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const ParentListItem = ({
  label,
  children
}) => {
  const [open, setOpen] = (0, _react.useState)(false);
  const classes = useListStyles();

  const handleClick = () => setOpen(!open);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ListItem.default, {
    button: true,
    onClick: handleClick
  }, _react.default.createElement(_ListItemText.default, {
    primary: label
  }), open ? _react.default.createElement(_ExpandLess.default, null) : _react.default.createElement(_ExpandMore.default, null)), _react.default.createElement(_Collapse.default, {
    in: open,
    timeout: 'auto',
    unmountOnExit: true
  }, _react.default.createElement(_List.default, {
    component: 'div',
    disablePadding: true,
    className: classes.nested
  }, children)));
};

__signature__(ParentListItem, "useState{[open, setOpen](false)}\nuseListStyles{classes}", () => [useListStyles]);

const NavMenuItem = ({
  label,
  to,
  Loadable,
  ...props
}) => {
  return _react.default.createElement(_ListItem.default, Object.assign({
    button: true
  }, props), _react.default.createElement(_ListItemText.default, {
    primary: label
  }));
};

const Nav = props => {
  const {
    isAuthed
  } = (0, _SessionProvider.useSession)();
  const {
    navOpen,
    toggleNav,
    closeNav
  } = (0, _useNav.useNav)();
  const isMobileState = typeof window === 'undefined' ? true : window.matchMedia('(max-width: 640px)').matches;
  const theme = (0, _styles2.useTheme)();
  const classes = (0, _Styles.useStyles)();

  const modal = _react.default.createElement(_reactPortalUniversal.UniversalPortal, {
    selector: '#navActions'
  }, _react.default.createElement(_IconButton.default, {
    edge: 'start',
    id: 'navActions',
    onClick: toggleNav
  }, _react.default.createElement(_Menu.default, null)));

  const NavItemClick = to => {
    (0, _router.navigate)(to);
    closeNav();
  };

  const handleNavItems = routes => routes.map(({
    authMode,
    ...route
  }) => route.hidden ? _react.default.createElement(_react.Fragment, {
    key: route.to
  }) : route.children ? typeof authMode === 'undefined' || authMode === isAuthed ? _react.default.createElement(ParentListItem, {
    label: route.label,
    key: route.to
  }, _react.default.createElement(NavMenuItem, Object.assign({
    onClick: () => NavItemClick(route.to)
  }, route)), " ", handleNavItems(route.children)) : _react.default.createElement(_react.default.Fragment, null) : typeof authMode === 'undefined' || authMode === isAuthed ? _react.default.createElement(NavMenuItem, Object.assign({
    key: route.to,
    onClick: () => NavItemClick(route.to)
  }, route)) : _react.default.createElement(_react.Fragment, {
    key: route.path
  }));

  return _react.default.createElement(_react.default.Fragment, null, modal, _react.default.createElement(_Drawer.default, {
    className: classes.drawer,
    variant: isMobileState ? 'temporary' : 'persistent',
    onClose: closeNav,
    open: navOpen,
    classes: {
      paper: classes.drawerPaper
    },
    id: !isMobileState ? !navOpen ? 'full-closed' : 'full-open' : undefined,
    style: {
      zIndex: theme.zIndex.modal + 1
    }
  }, _react.default.createElement("div", {
    className: classes.toolbar
  }), handleNavItems(_AppRoutes.AppRoutes)));
};

__signature__(Nav, "useSession{{ isAuthed }}\nuseNav{{ navOpen, toggleNav, closeNav }}\nuseTheme{theme}\nuseStyles{classes}", () => [_SessionProvider.useSession, _useNav.useNav, _styles2.useTheme, _Styles.useStyles]);

const _default = Nav;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useListStyles, "useListStyles", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/index.tsx");
  reactHotLoader.register(ParentListItem, "ParentListItem", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/index.tsx");
  reactHotLoader.register(NavMenuItem, "NavMenuItem", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/index.tsx");
  reactHotLoader.register(Nav, "Nav", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"react-hot-loader":"../node_modules/react-hot-loader/index.js","@jesstelford/react-portal-universal":"../node_modules/@jesstelford/react-portal-universal/index.js","@material-ui/core/Collapse":"../node_modules/@material-ui/core/esm/Collapse/index.js","@material-ui/core/Drawer":"../node_modules/@material-ui/core/esm/Drawer/index.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","@material-ui/core/List":"../node_modules/@material-ui/core/esm/List/index.js","@material-ui/core/ListItem":"../node_modules/@material-ui/core/esm/ListItem/index.js","@material-ui/core/ListItemText":"../node_modules/@material-ui/core/esm/ListItemText/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/icons/ExpandLess":"../node_modules/@material-ui/icons/ExpandLess.js","@material-ui/icons/ExpandMore":"../node_modules/@material-ui/icons/ExpandMore.js","@material-ui/icons/Menu":"../node_modules/@material-ui/icons/Menu.js","@reach/router":"../node_modules/@reach/router/es/index.js","react":"../node_modules/react/index.js","../../AppRoutes":"Components/AppRoutes.tsx","../../../lib/Styles":"lib/Styles.tsx","./useNav":"Components/Layout/Nav/useNav.tsx","../../SessionProvider":"Components/SessionProvider/index.tsx","@material-ui/styles":"../node_modules/@material-ui/styles/esm/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49645" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)