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
})({"../node_modules/@material-ui/core/esm/AppBar/AppBar.js":[function(require,module,exports) {
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

var _helpers = require("../utils/helpers");

var _Paper = _interopRequireDefault(require("../Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

exports.styles = styles;

var AppBar = _react.default.forwardRef(function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "color", "position"]);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    component: "header",
    elevation: 4,
    className: (0, _clsx.default)(classes.root, classes["position".concat((0, _helpers.capitalize)(position))], className, color !== 'inherit' && classes["color".concat((0, _helpers.capitalize)(color))], position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});

"development" !== "production" ? AppBar.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'default']),

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative'])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAppBar'
})(AppBar);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../utils/helpers":"../node_modules/@material-ui/core/esm/utils/helpers.js","../Paper":"../node_modules/@material-ui/core/esm/Paper/index.js"}],"../node_modules/@material-ui/core/esm/AppBar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _AppBar.default;
  }
});

var _AppBar = _interopRequireDefault(require("./AppBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./AppBar":"../node_modules/@material-ui/core/esm/AppBar/AppBar.js"}],"../node_modules/@material-ui/core/esm/Toolbar/Toolbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: (0, _defineProperty2.default)({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};

exports.styles = styles;

var Toolbar = _react.default.forwardRef(function Toolbar(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "disableGutters", "variant"]);
  var className = (0, _clsx.default)(classes.root, classes[variant], classNameProp, !disableGutters && classes.gutters);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className,
    ref: ref
  }, other));
});

"development" !== "production" ? Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['regular', 'dense'])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiToolbar'
})(Toolbar);

exports.default = _default;
},{"@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js"}],"../node_modules/@material-ui/core/esm/Toolbar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Toolbar.default;
  }
});

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/Toolbar.js"}],"../node_modules/@material-ui/icons/AccountCircle.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
}), 'AccountCircle');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({}, theme.typography.subtitle1, {
      minHeight: 48,
      paddingTop: 4,
      paddingBottom: 4,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }),

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: {
      minHeight: 'auto'
    }
  };
};

exports.styles = styles;

var MenuItem = _react.default.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "disableGutters", "role", "selected", "tabIndex"]);
  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return _react.default.createElement(_ListItem.default, (0, _extends2.default)({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: {
      dense: classes.dense
    },
    className: (0, _clsx.default)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});

"development" !== "production" ? MenuItem.propTypes = {
  /**
   * Menu item contents.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes.default.bool,

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  selected: _propTypes.default.bool,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.number
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMenuItem'
})(MenuItem);

exports.default = _default;
},{"@babel/runtime/helpers/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/objectWithoutProperties.js","@babel/runtime/helpers/extends":"../node_modules/@babel/runtime/helpers/extends.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","../styles/withStyles":"../node_modules/@material-ui/core/esm/styles/withStyles.js","../ListItem":"../node_modules/@material-ui/core/esm/ListItem/index.js"}],"../node_modules/@material-ui/core/esm/MenuItem/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _MenuItem.default;
  }
});

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js"}],"../node_modules/@material-ui/core/esm/Menu/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Menu.default;
  }
});

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Menu":"../node_modules/@material-ui/core/esm/Menu/Menu.js"}],"Components/Layout/AppBar/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireWildcard(require("react"));

var _Styles = require("../../../lib/Styles");

var _styles = require("@material-ui/styles");

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _SessionProvider = require("../../SessionProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const AppBar = ({
  appName
}) => {
  const theme = (0, _styles.useTheme)();
  const {
    isAuthed
  } = (0, _SessionProvider.useSession)();
  const [logoutFN] = (0, _SessionProvider.useLogout)();
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const classes = (0, _Styles.useStyles)();
  const open = Boolean(anchorEl);

  const handleMenu = ({
    currentTarget
  }) => setAnchorEl(currentTarget);

  const handleClose = () => setAnchorEl(null);

  const onMenuItem = option => () => {
    if (option === 'Logout') logoutFN();
    console.log(option);
    handleClose();
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_AppBar.default, {
    className: classes.appBar,
    style: {
      zIndex: theme.zIndex.modal + 5
    },
    position: 'fixed',
    color: 'primary'
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement("div", {
    id: 'navActions'
  }, _react.default.createElement(_react.default.Fragment, null)), _react.default.createElement(_Typography.default, {
    variant: 'h6',
    className: classes.appTitle
  }, appName), isAuthed && _react.default.createElement("div", null, _react.default.createElement(_IconButton.default, {
    "aria-label": 'Account of current user',
    "aria-controls": 'menu-appbar',
    "aria-haspopup": 'true',
    onClick: handleMenu,
    color: 'inherit'
  }, _react.default.createElement(_AccountCircle.default, null)), _react.default.createElement(_Menu.default, {
    id: 'menu-appbar',
    anchorEl: anchorEl,
    getContentAnchorEl: null,
    style: {
      zIndex: theme.zIndex.modal + 6
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    PaperProps: {
      style: {
        top: '4.05em'
      }
    },
    open: open,
    onClose: handleClose
  }, _react.default.createElement(_MenuItem.default, {
    onClick: onMenuItem('Profile')
  }, "Profile"), _react.default.createElement(_MenuItem.default, {
    onClick: onMenuItem('Logout')
  }, "Logout"))))), _react.default.createElement("div", {
    className: classes.toolbar
  }));
};

__signature__(AppBar, "useTheme{theme}\nuseSession{{ isAuthed }}\nuseLogout{[logoutFN]}\nuseState{[anchorEl, setAnchorEl](null)}\nuseStyles{classes}", () => [_styles.useTheme, _SessionProvider.useSession, _SessionProvider.useLogout, _Styles.useStyles]);

const _default = AppBar;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppBar, "AppBar", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/AppBar/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/AppBar/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"react-hot-loader":"../node_modules/react-hot-loader/index.js","@material-ui/core/AppBar":"../node_modules/@material-ui/core/esm/AppBar/index.js","@material-ui/core/Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","react":"../node_modules/react/index.js","../../../lib/Styles":"lib/Styles.tsx","@material-ui/styles":"../node_modules/@material-ui/styles/esm/index.js","@material-ui/icons/AccountCircle":"../node_modules/@material-ui/icons/AccountCircle.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/core/Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","../../SessionProvider":"Components/SessionProvider/index.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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