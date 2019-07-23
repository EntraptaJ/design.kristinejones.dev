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
})({"../ui/Components/LoadingComponent/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Loading = () => {
  return _react.default.createElement("div", {
    style: {
      top: '50%',
      left: '50%'
    }
  }, _react.default.createElement(_CircularProgress.default, null));
};

exports.Loading = Loading;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/LoadingComponent/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/Components/PropProvider/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropProvider = exports.setProps = exports.setNewProps = exports.PropContext = exports.resetProps = exports.Props = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

let Props;
exports.Props = Props;

const resetProps = () => {
  // @ts-ignore
  exports.Props = Props = undefined;
};

exports.resetProps = resetProps;
const PropContext = (0, _react.createContext)({
  useProps: props => {
    exports.Props = Props = props();
  },
  // @ts-ignore
  props: Props,
  sessionProps: [],
  ctx: undefined
});
exports.PropContext = PropContext;
let setNewProps;
exports.setNewProps = setNewProps;
let setProps;
exports.setProps = setProps;

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const PropProvider = prop => {
  const {
    ctx,
    children,
    sessionProps
  } = prop;
  const [pageProps, setPageProps] = (0, _react.useState)(prop.props);

  const useProps = newProp => {
    const oldProps = sessionProps.find(({
      path: pth
    }) => pth === (ctx ? ctx.path : _router.globalHistory.location.pathname));
    if (oldProps) exports.Props = Props = oldProps.props;else exports.Props = Props = newProp(ctx);
  };

  exports.setProps = setProps = props => setPageProps(props);

  exports.setNewProps = setNewProps = async c => {
    const oldProps = sessionProps.find(({
      path: pth
    }) => pth === c.location.pathname);

    if (oldProps) {
      setPageProps(oldProps.props || {}); // @ts-ignore

      exports.Props = Props = undefined;
      return true;
    } else {
      await timeout(50);
      if (typeof (await Props) === 'undefined') return false;
      const localProps = await Props;
      sessionProps.push({
        path: c.location.pathname,
        props: localProps || {}
      });
      setPageProps(localProps || {});
    } // @ts-ignore


    exports.Props = Props = undefined;
    return false;
  };

  return _react.default.createElement(PropContext.Provider, {
    value: {
      useProps,
      props: pageProps,
      sessionProps,
      ctx
    }
  }, children);
};

exports.PropProvider = PropProvider;

__signature__(PropProvider, "useState{[pageProps, setPageProps](prop.props)}");

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Props, "Props", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(resetProps, "resetProps", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(PropContext, "PropContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(setNewProps, "setNewProps", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(setProps, "setProps", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(timeout, "timeout", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
  reactHotLoader.register(PropProvider, "PropProvider", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/PropProvider/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/Components/HeadProvider/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadProvider = HeadProvider;
exports.useAddTag = useAddTag;
exports.useTitle = useTitle;
exports.useMetaTag = useMetaTag;
exports.clearHead = exports.Hashes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _server = _interopRequireDefault(require("@hot-loader/react-dom/server"));

var _hashIt = _interopRequireDefault(require("hash-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const HeadContext = (0, _react.createContext)({
  tags: [],
  addTag: () => {},
  hashes: []
});
let Hashes;
exports.Hashes = Hashes;

const clearHead = ids => ids.map((id, index) => {
  const currentElement = document.querySelector(`[data-id="${id}"]`);
  if (currentElement) currentElement.remove();
  if (index === ids.length - 1) ids = [];
});

exports.clearHead = clearHead;

function HeadProvider(props) {
  const {
    children,
    tags,
    hashes
  } = props;
  exports.Hashes = Hashes = hashes;
  return _react.default.createElement(HeadContext.Provider, {
    value: {
      tags,
      hashes,
      addTag: (_ref) => {
        let params = Object.assign({}, _ref);

        if (params.type === 'title') {
          const elem = _react.default.createElement("title", null, params.text);

          const id = (0, _hashIt.default)(JSON.stringify(elem.props));

          const element = _react.default.createElement("title", {
            "data-id": id
          }, params.text);

          hashes.push(id);

          if (typeof window !== 'undefined') {
            const currentElement = document.querySelector(`[data-id="${id}"]`);
            if (currentElement) return;
            document.head.insertAdjacentHTML('beforeend', _server.default.renderToString(element));
          } else {
            if (tags.find(itm => itm.props['data-id'] === id)) return;
            tags.push(element);
          }
        } else if (params.type === 'meta') {
          const elem = _react.default.createElement("meta", {
            name: params.name,
            content: params.content
          });

          const id = (0, _hashIt.default)(JSON.stringify(elem.props));

          const element = _react.default.createElement("meta", {
            "data-id": id,
            name: params.name,
            content: params.content
          });

          hashes.push(id);

          if (typeof window !== 'undefined') {
            const currentElement = document.querySelector(`[data-id="${id}"]`);
            if (currentElement) return;
            document.head.insertAdjacentHTML('beforeend', _server.default.renderToString(element));
          } else {
            if (tags.find(itm => itm.props['data-id'] === id)) return;
            tags.push(element);
          }
        } else if (params.type === 'script') {
          const elem = _react.default.createElement("script", {
            type: params.texttype,
            dangerouslySetInnerHTML: {
              __html: params.script
            }
          });

          const id = (0, _hashIt.default)(JSON.stringify(elem.props));

          const element = _react.default.createElement("script", {
            "data-id": id,
            type: params.texttype,
            dangerouslySetInnerHTML: {
              __html: params.script
            }
          });

          hashes.push(id);

          if (typeof window !== 'undefined') {
            const currentElement = document.querySelector(`[data-id="${id}"]`);
            if (currentElement) return;
            document.head.insertAdjacentHTML('beforeend', _server.default.renderToString(element));
          } else {
            if (tags.find(itm => itm.props['data-id'] === id)) return;
            tags.push(element);
          }
        }
      }
    }
  }, children);
}

function useAddTag(params) {
  return (0, _react.useContext)(HeadContext).addTag(_objectSpread({}, params));
}

__signature__(useAddTag, "useContext{}");

function useTitle(title) {
  return (0, _react.useContext)(HeadContext).addTag({
    type: 'title',
    text: title
  });
}

__signature__(useTitle, "useContext{}");

function useMetaTag(params) {
  return (0, _react.useContext)(HeadContext).addTag(_objectSpread({}, params, {
    type: 'meta'
  }));
}

__signature__(useMetaTag, "useContext{}");

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HeadContext, "HeadContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(Hashes, "Hashes", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(clearHead, "clearHead", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(HeadProvider, "HeadProvider", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(useAddTag, "useAddTag", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(useTitle, "useTitle", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
  reactHotLoader.register(useMetaTag, "useMetaTag", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/HeadProvider/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/lib/Styles.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldStyle = exports.BoxStyle = exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const drawerWidth = 240;
const useStyles = (0, _styles.makeStyles)(theme => (0, _styles.createStyles)({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appTitle: {
    flexGrow: 1
  },
  button: {
    marginTop: '1em'
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  box: {
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '325px',
    borderRadius: '1em',
    padding: '1em',
    boxShadow: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
    margin: '1.5rem'
  },
  drawer: {
    // Good
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    // Good
    width: drawerWidth
  },
  content: {
    // Good
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    justifyContent: 'center',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    willChange: 'margin-left',
    width: '100%'
  },
  contentShift: {
    // Good
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: theme.mixins.toolbar,
  redButton: {
    color: _colors.red['A700']
  }
}));
exports.useStyles = useStyles;
const BoxStyle = {
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '325px',
  borderRadius: '1em',
  padding: '1em',
  boxShadow: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
  margin: '1.5rem'
};
exports.BoxStyle = BoxStyle;
const FieldStyle = {
  marginTop: '1em',
  width: '100%'
};
exports.FieldStyle = FieldStyle;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(drawerWidth, "drawerWidth", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/Styles.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/Styles.tsx");
  reactHotLoader.register(BoxStyle, "BoxStyle", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/Styles.tsx");
  reactHotLoader.register(FieldStyle, "FieldStyle", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/Styles.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/Components/Styles/Box.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Styles = require("../../lib/Styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Box = ({
  children,
  title
}) => {
  const classes = (0, _Styles.useStyles)();
  return _react.default.createElement(_Paper.default, {
    className: classes.box,
    elevation: 7,
    style: _Styles.BoxStyle
  }, _react.default.createElement(_Typography.default, {
    variant: 'h4'
  }, title), children);
};

exports.Box = Box;

__signature__(Box, "useStyles{classes}", () => [_Styles.useStyles]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Box, "Box", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Styles/Box.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../lib/Styles":"../ui/lib/Styles.tsx"}],"../ui/routes/Home/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PropProvider = require("../../Components/PropProvider");

var _HeadProvider = require("../../Components/HeadProvider");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = require("../../Components/Styles/Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const HomeRoute = () => {
  const {
    useProps,
    props
  } = (0, _react.useContext)(_PropProvider.PropContext);
  (0, _HeadProvider.useTitle)(`Kristian's Design`);
  useProps(async () => ({
    title: `Kristian's Design`
  }));
  return _react.default.createElement(_Box.Box, {
    title: props.title
  }, _react.default.createElement(_Typography.default, {
    variant: 'subtitle1',
    color: 'textSecondary'
  }, "by KristianFJones"), _react.default.createElement(_Typography.default, {
    variant: 'body1'
  }, "This is a demo my custom design templates"));
};

__signature__(HomeRoute, "useContext{{ useProps, props }}\nuseTitle{}\nuseProps{}", () => [_HeadProvider.useTitle]);

const _default = HomeRoute;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomeRoute, "HomeRoute", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Home/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Home/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Components/PropProvider":"../ui/Components/PropProvider/index.tsx","../../Components/HeadProvider":"../ui/Components/HeadProvider/index.tsx","../../Components/Styles/Box":"../ui/Components/Styles/Box.tsx"}],"../ui/lib/GraphQL/isAuthed.graphql":[function(require,module,exports) {
"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "isAuthed"
        },
        "arguments": [],
        "directives": []
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 21
  }
};
},{}],"../ui/lib/GraphQL/loginUser.graphql":[function(require,module,exports) {
"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "login"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "username"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "password"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "loginUser"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "username"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "password"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "password"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "success"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "token"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 141
  }
};
},{}],"../ui/Components/SessionProvider/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLogout = exports.useLogin = exports.useToken = exports.useSession = exports.SessionProvider = exports.useIsAuthed = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHooks = require("@apollo/react-hooks");

var _isAuthed = _interopRequireDefault(require("../../lib/GraphQL/isAuthed.graphql"));

var _loginUser = _interopRequireDefault(require("../../lib/GraphQL/loginUser.graphql"));

var _reactCookie = require("react-cookie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const SessionContext = (0, _react.createContext)({
  isAuthed: false,
  recheck: async () => {}
});

const useIsAuthed = () => {
  const {
    data,
    loading,
    refetch
  } = (0, _reactHooks.useQuery)(_isAuthed.default);
  const client = (0, _reactHooks.useApolloClient)();
  const isAuthed = !loading && data ? data.isAuthed : false;

  const recheck = async () => {
    await client.cache.reset();
    await refetch();
  };

  return {
    isAuthed,
    recheck
  };
};

exports.useIsAuthed = useIsAuthed;

__signature__(useIsAuthed, "useQuery{{ data, loading, refetch }}\nuseApolloClient{client}", () => [_reactHooks.useQuery, _reactHooks.useApolloClient]);

const SessionProvider = ({
  children
}) => {
  const {
    isAuthed,
    recheck
  } = useIsAuthed();
  const sessionValue = {
    isAuthed,
    recheck
  };
  return _react.default.createElement(SessionContext.Provider, {
    value: sessionValue
  }, children);
};

exports.SessionProvider = SessionProvider;

__signature__(SessionProvider, "useIsAuthed{{ isAuthed, recheck }}", () => [useIsAuthed]);

const useSession = () => {
  return (0, _react.useContext)(SessionContext);
};

exports.useSession = useSession;

__signature__(useSession, "useContext{}");

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const useToken = () => {
  const [token, setCookieToken, deleteCookieToken] = (0, _reactCookie.useCookies)();

  const setToken = token => setCookieToken('token', token, {
    path: '/'
  });

  const deleteToken = () => deleteCookieToken('token');

  return [token['token'], setToken, deleteToken];
};

exports.useToken = useToken;

__signature__(useToken, "useCookies{[token, setCookieToken, deleteCookieToken]}", () => [_reactCookie.useCookies]);

const useLogin = () => {
  const [, setToken] = useToken();
  const [loginUser, {
    data,
    ...extra
  }] = (0, _reactHooks.useMutation)(_loginUser.default);

  const LoginFN = async ({
    username,
    password
  }) => {
    const response = await loginUser({
      variables: {
        username,
        password
      }
    });

    if (response && response.data && response.data.loginUser.success) {
      setToken(response.data.loginUser.token);
      return true;
    } else return false;
  };

  return [LoginFN, _objectSpread({}, extra)];
};

exports.useLogin = useLogin;

__signature__(useLogin, "useToken{[, setToken]}\nuseMutation{[loginUser, { data, ...extra }]}", () => [useToken, _reactHooks.useMutation]);

const useLogout = () => {
  const [,, deleteToken] = useToken();

  const LogoutFN = async () => {
    await deleteToken();
    window.location.href = '/';
  };

  return [LogoutFN];
};

exports.useLogout = useLogout;

__signature__(useLogout, "useToken{[, , deleteToken]}", () => [useToken]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SessionContext, "SessionContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(useIsAuthed, "useIsAuthed", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(SessionProvider, "SessionProvider", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(useSession, "useSession", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(timeout, "timeout", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(useToken, "useToken", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(useLogin, "useLogin", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
  reactHotLoader.register(useLogout, "useLogout", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/SessionProvider/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../lib/GraphQL/isAuthed.graphql":"../ui/lib/GraphQL/isAuthed.graphql","../../lib/GraphQL/loginUser.graphql":"../ui/lib/GraphQL/loginUser.graphql"}],"../ui/Components/Forms/LoginForm/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireWildcard(require("react"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _Styles = require("../../../lib/Styles");

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

const AuthError = `GraphQL error: Access denied! You don't have permission for this action!`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors
  } = (0, _reactHookForm.default)();
  const [loginUser, {
    error
  }] = (0, _SessionProvider.useLogin)();
  const [invalid, setInvalid] = (0, _react.useState)({
    field: undefined,
    message: undefined
  });

  const onSubmit = async data => {
    const response = await loginUser(data);
    if (response) window.location.href = '/';
  };

  const isInvalid = field => invalid.field === field;

  (0, _react.useEffect)(() => {
    if (typeof error !== 'undefined') {
      if (error.message === AuthError) setInvalid({
        field: 'Password',
        message: 'Password is Invalid'
      });else if (error.graphQLErrors[0].extensions && error.graphQLErrors[0].extensions.code === 'INVALID_USER') setInvalid({
        field: 'Username',
        message: 'Username is invalid'
      });
    }
  }, [error]);
  return _react.default.createElement("form", {
    style: _Styles.BoxStyle,
    onSubmit: handleSubmit(onSubmit)
  }, _react.default.createElement(_Typography.default, {
    variant: 'h4',
    gutterBottom: true
  }, "Login"), invalid.field && _react.default.createElement(_FormHelperText.default, {
    error: true,
    style: {
      color: '#b00020'
    }
  }, invalid.message), _react.default.createElement(_TextField.default, {
    style: _Styles.FieldStyle,
    error: isInvalid('Username'),
    variant: 'outlined',
    label: 'Username',
    name: 'username',
    autoComplete: 'username',
    inputRef: register
  }), _react.default.createElement(_TextField.default, {
    style: _Styles.FieldStyle,
    error: isInvalid('Password'),
    label: 'Password',
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
    inputRef: register,
    variant: 'outlined'
  }), _react.default.createElement(_Button.default, {
    color: 'primary',
    variant: 'contained',
    style: _Styles.FieldStyle,
    type: 'submit'
  }, "Login"));
};

exports.LoginForm = LoginForm;

__signature__(LoginForm, "useForm{{ register, handleSubmit, errors }}\nuseLogin{[loginUser, { error }]}\nuseState{[invalid, setInvalid]({ field: undefined, message: undefined })}\nuseEffect{}", () => [_reactHookForm.default, _SessionProvider.useLogin]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthError, "AuthError", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Forms/LoginForm/index.tsx");
  reactHotLoader.register(LoginForm, "LoginForm", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Forms/LoginForm/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../../lib/Styles":"../ui/lib/Styles.tsx","../../SessionProvider":"../ui/Components/SessionProvider/index.tsx"}],"../ui/routes/Authentication/Login.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoginForm = require("../../Components/Forms/LoginForm");

var _HeadProvider = require("../../Components/HeadProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const LoginRoute = () => {
  (0, _HeadProvider.useTitle)('Login');
  return _react.default.createElement(_LoginForm.LoginForm, null);
};

__signature__(LoginRoute, "useTitle{}", () => [_HeadProvider.useTitle]);

const _default = LoginRoute;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginRoute, "LoginRoute", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Authentication/Login.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Authentication/Login.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Components/Forms/LoginForm":"../ui/Components/Forms/LoginForm/index.tsx","../../Components/HeadProvider":"../ui/Components/HeadProvider/index.tsx"}],"../ui/Components/Forms/RegisterForm/registerUser.graphql":[function(require,module,exports) {
"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "registerUser"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "username"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "password"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "registerUser"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "username"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "password"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "password"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "username"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 142
  }
};
},{}],"../ui/Components/Forms/RegisterForm/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _Styles = require("../../../lib/Styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _registerUser = _interopRequireDefault(require("./registerUser.graphql"));

var _reactHooks = require("@apollo/react-hooks");

var _router = require("@reach/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    errors
  } = (0, _reactHookForm.default)();
  const [loginUser] = (0, _reactHooks.useMutation)(_registerUser.default);
  const {
    cache
  } = (0, _reactHooks.useApolloClient)();

  const onSubmit = async data => {
    const response = await loginUser({
      variables: data
    });

    if (response && response.data && response.data.registerUser.username) {
      await cache.reset();
      await (0, _router.navigate)('/Login');
    }
  };

  return _react.default.createElement("form", {
    style: _Styles.BoxStyle,
    onSubmit: handleSubmit(onSubmit)
  }, _react.default.createElement(_Typography.default, {
    variant: 'h4',
    gutterBottom: true
  }, "Register"), _react.default.createElement(_TextField.default, {
    style: _Styles.FieldStyle,
    variant: 'outlined',
    label: 'Username',
    name: 'username',
    autoComplete: 'username',
    inputRef: register
  }), _react.default.createElement(_TextField.default, {
    style: _Styles.FieldStyle,
    label: 'Password',
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
    inputRef: register,
    variant: 'outlined'
  }), _react.default.createElement(_Button.default, {
    color: 'primary',
    variant: 'contained',
    style: _Styles.FieldStyle,
    type: 'submit'
  }, "Register"));
};

exports.RegisterForm = RegisterForm;

__signature__(RegisterForm, "useForm{{ register, handleSubmit, errors }}\nuseMutation{[loginUser]}\nuseApolloClient{{ cache }}", () => [_reactHookForm.default, _reactHooks.useMutation, _reactHooks.useApolloClient]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RegisterForm, "RegisterForm", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Forms/RegisterForm/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../../lib/Styles":"../ui/lib/Styles.tsx","./registerUser.graphql":"../ui/Components/Forms/RegisterForm/registerUser.graphql"}],"../ui/routes/Authentication/Register.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeadProvider = require("../../Components/HeadProvider");

var _RegisterForm = require("../../Components/Forms/RegisterForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const RegisterRoute = () => {
  (0, _HeadProvider.useTitle)('Project Manager Register');
  return _react.default.createElement(_RegisterForm.RegisterForm, null);
};

__signature__(RegisterRoute, "useTitle{}", () => [_HeadProvider.useTitle]);

const _default = RegisterRoute;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RegisterRoute, "RegisterRoute", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Authentication/Register.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Authentication/Register.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Components/HeadProvider":"../ui/Components/HeadProvider/index.tsx","../../Components/Forms/RegisterForm":"../ui/Components/Forms/RegisterForm/index.tsx"}],"../ui/lib/GraphQL/Users.graphql":[function(require,module,exports) {
"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Users"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "search"
        }
      },
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "users"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "search"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "User"
            },
            "directives": []
          }]
        }
      }]
    }
  }, {
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "User"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "User"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "_id"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "username"
        },
        "arguments": [],
        "directives": []
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 159
  }
};
},{}],"../ui/Components/User/useUser/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUsers = void 0;

var _reactHooks = require("@apollo/react-hooks");

var _Users = _interopRequireDefault(require("../../../lib/GraphQL/Users.graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const useUsers = search => {
  const opts = {
    variables: {
      search
    }
  };
  const {
    data,
    loading
  } = (0, _reactHooks.useQuery)(_Users.default, opts);
  if (!data && loading) return {
    loading: true,
    error: false,
    Users: undefined
  };else if (data && !loading) return {
    loading: false,
    error: false,
    Users: data.users
  };
  return {
    loading: false,
    error: true,
    Users: undefined
  };
};

exports.useUsers = useUsers;

__signature__(useUsers, "useQuery{{ data, loading }}", () => [_reactHooks.useQuery]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useUsers, "useUsers", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/User/useUser/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../../lib/GraphQL/Users.graphql":"../ui/lib/GraphQL/Users.graphql"}],"../ui/Components/User/SearchPage.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSearchPage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useUser = require("./useUser");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = require("../Styles/Box");

var _Styles = require("../../lib/Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const UserSearchPage = () => {
  const [filter, setFilter] = (0, _react.useState)();
  const Users = (0, _useUser.useUsers)(filter);
  return _react.default.createElement(_Box.Box, {
    title: 'Users'
  }, _react.default.createElement(_TextField.default, {
    style: _Styles.FieldStyle,
    variant: 'outlined',
    label: 'Username',
    value: filter,
    onChange: ({
      target
    }) => setFilter(target.value)
  }), !Users.loading ? !Users.error ? _react.default.createElement(_List.default, null, Users.Users.map(({
    username,
    _id
  }) => _react.default.createElement(_ListItem.default, {
    button: true,
    style: {
      width: '100%'
    }
  }, username))) : _react.default.createElement(_react.default.Fragment, null) : _react.default.createElement("div", null, "Create Error Screen"));
};

exports.UserSearchPage = UserSearchPage;

__signature__(UserSearchPage, "useState{[filter, setFilter]}\nuseUsers{Users}", () => [_useUser.useUsers]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSearchPage, "UserSearchPage", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/User/SearchPage.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"./useUser":"../ui/Components/User/useUser/index.tsx","../Styles/Box":"../ui/Components/Styles/Box.tsx","../../lib/Styles":"../ui/lib/Styles.tsx"}],"../ui/routes/Users/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchPage = require("../../Components/User/SearchPage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const UsersRoute = () => {
  return _react.default.createElement(_SearchPage.UserSearchPage, null);
};

const _default = UsersRoute;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UsersRoute, "UsersRoute", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Users/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/Users/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Components/User/SearchPage":"../ui/Components/User/SearchPage.tsx"}],"../ui/Components/Forms/Button/BaseButton/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Styles = require("../../../../lib/Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const BaseButton = (_ref) => {
  let {
    label,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "children"]);

  const classes = (0, _Styles.useStyles)();
  return _react.default.createElement(_Button.default, Object.assign({
    className: classes.button
  }, props, {
    style: _objectSpread({}, props.style, {
      marginTop: '1em'
    })
  }), children, label);
};

exports.BaseButton = BaseButton;

__signature__(BaseButton, "useStyles{classes}", () => [_Styles.useStyles]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BaseButton, "BaseButton", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Forms/Button/BaseButton/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../../../lib/Styles":"../ui/lib/Styles.tsx"}],"../ui/Components/Forms/Button/ProgressButton/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _BaseButton = require("../BaseButton");

var _Styles = require("../../../../lib/Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const ProgressButton = (_ref) => {
  let {
    label,
    mainColor,
    loading
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "mainColor", "loading"]);

  const classes = (0, _Styles.useStyles)();
  const style = {
    color: mainColor
  };
  return _react.default.createElement(_BaseButton.BaseButton, Object.assign({
    label: label
  }, props, {
    style: _objectSpread({}, props.style, {}, style)
  }), loading === true && _react.default.createElement(_CircularProgress.default, {
    size: 18,
    className: classes.leftIcon
  }));
};

exports.ProgressButton = ProgressButton;

__signature__(ProgressButton, "useStyles{classes}", () => [_Styles.useStyles]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProgressButton, "ProgressButton", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Forms/Button/ProgressButton/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../BaseButton":"../ui/Components/Forms/Button/BaseButton/index.tsx","../../../../lib/Styles":"../ui/lib/Styles.tsx"}],"../ui/Components/DesignExamples/Buttons/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BaseButton = require("../../Forms/Button/BaseButton");

var _ProgressButton = require("../../Forms/Button/ProgressButton");

var _Box = require("../../Styles/Box");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const ButtonDesignExample = () => {
  const [loading, setLoading] = (0, _react.useState)(false);

  const simulateLoad = () => {
    console.log();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Box.Box, {
    title: 'Buttons'
  }, _react.default.createElement(_BaseButton.BaseButton, {
    variant: 'contained',
    label: 'Hello World',
    onClick: () => console.log('Hello')
  }), _react.default.createElement(_ProgressButton.ProgressButton, {
    label: 'Confirm',
    mainColor: 'red',
    loading: loading,
    onClick: () => simulateLoad()
  })));
};

__signature__(ButtonDesignExample, "useState{[loading, setLoading](false)}");

const _default = ButtonDesignExample;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ButtonDesignExample, "ButtonDesignExample", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/DesignExamples/Buttons/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/DesignExamples/Buttons/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Forms/Button/BaseButton":"../ui/Components/Forms/Button/BaseButton/index.tsx","../../Forms/Button/ProgressButton":"../ui/Components/Forms/Button/ProgressButton/index.tsx","../../Styles/Box":"../ui/Components/Styles/Box.tsx"}],"../ui/Components/AppRoutes.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppRoutes = exports.MyLoadable = void 0;

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _LoadingComponent = require("./LoadingComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const MyLoadable = opts => (0, _reactLoadable.default)(Object.assign({
  loading: _LoadingComponent.Loading,
  delay: 200,
  timeout: 10000
}, opts));

exports.MyLoadable = MyLoadable;
const AppRoutes = [{
  path: '/',
  to: '/',
  label: 'Home',
  Loadable: MyLoadable({
    loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("../routes/Home"))),
    modules: ['routes/Home/index.tsx']
  })
}, {
  path: '/Login',
  to: '/Login',
  label: 'Login',
  authMode: false,
  Loadable: MyLoadable({
    loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("../routes/Authentication/Login"))),
    modules: ['routes/Authentication/Login.tsx']
  })
}, {
  path: '/Register',
  to: '/Register',
  label: 'Register',
  authMode: false,
  Loadable: MyLoadable({
    loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("../routes/Authentication/Register"))),
    modules: ['routes/Authentication/Register.tsx']
  })
}, {
  path: '/Users',
  to: '/Users',
  label: 'Users',
  Loadable: MyLoadable({
    loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("../routes/Users"))),
    modules: ['routes/Users/index.tsx']
  })
}, {
  path: '/Buttons',
  to: '/Buttons',
  label: 'Buttons',
  Loadable: MyLoadable({
    loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("./DesignExamples/Buttons"))),
    modules: ['Components/DesignExamples/Buttons/index.tsx']
  })
}];
exports.AppRoutes = AppRoutes;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyLoadable, "MyLoadable", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/AppRoutes.tsx");
  reactHotLoader.register(AppRoutes, "AppRoutes", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/AppRoutes.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"./LoadingComponent":"../ui/Components/LoadingComponent/index.tsx","../routes/Home":"../ui/routes/Home/index.tsx","../routes/Authentication/Login":"../ui/routes/Authentication/Login.tsx","../routes/Authentication/Register":"../ui/routes/Authentication/Register.tsx","../routes/Users":"../ui/routes/Users/index.tsx","./DesignExamples/Buttons":"../ui/Components/DesignExamples/Buttons/index.tsx"}],"../ui/routes/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _router = require("@reach/router");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _AppRoutes = require("../Components/AppRoutes");

var _Styles = require("../lib/Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const HandleRoutes = (routes, parent = '/') => {
  let Routes = [];

  for (const Route of routes) {
    if (Route.children) Routes = [...Routes, _react.default.createElement(Route.Loadable, {
      key: Route.path,
      path: Route.path
    }), HandleRoutes(Route.children, `${parent}${Route.path}`)];else Routes = [...Routes, _react.default.createElement(Route.Loadable, {
      key: Route.path,
      path: `${parent}${Route.path}`
    })];
  }

  return Routes;
};

const Routes = () => {
  const classes = (0, _Styles.useStyles)();
  return _react.default.createElement(_router.Router, {
    className: (0, _clsx.default)(classes.content),
    id: 'app_content'
  }, HandleRoutes(_AppRoutes.AppRoutes));
};

exports.Routes = Routes;

__signature__(Routes, "useStyles{classes}", () => [_Styles.useStyles]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HandleRoutes, "HandleRoutes", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/index.tsx");
  reactHotLoader.register(Routes, "Routes", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/routes/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../Components/AppRoutes":"../ui/Components/AppRoutes.tsx","../lib/Styles":"../ui/lib/Styles.tsx"}],"../ui/Components/Layout/Nav/useNav.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNav = exports.useNavContext = exports.NavContext = void 0;

var _react = require("react");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const NavContext = (0, _react.createContext)({
  navOpen: false,
  setNavOpen: () => {}
});
exports.NavContext = NavContext;

const useNavContext = initial => {
  const [navOpen, setNavOpen] = (0, _react.useState)(initial);
  return {
    navOpen,
    setNavOpen
  };
};

exports.useNavContext = useNavContext;

__signature__(useNavContext, "useState{[navOpen, setNavOpen](initial)}");

const useNav = () => {
  const {
    navOpen,
    setNavOpen
  } = (0, _react.useContext)(NavContext);

  const openNav = () => setNavOpen(true);

  const closeNav = () => setNavOpen(false);

  const toggleNav = () => setNavOpen(open => !open);

  return {
    navOpen,
    openNav,
    closeNav,
    toggleNav
  };
};

exports.useNav = useNav;

__signature__(useNav, "useContext{{ navOpen, setNavOpen }}");

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavContext, "NavContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/useNav.tsx");
  reactHotLoader.register(useNavContext, "useNavContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/useNav.tsx");
  reactHotLoader.register(useNav, "useNav", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Layout/Nav/useNav.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/Components/Layout/AppBar/index.tsx":[function(require,module,exports) {
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
},{"../../../lib/Styles":"../ui/lib/Styles.tsx","../../SessionProvider":"../ui/Components/SessionProvider/index.tsx"}],"../ui/Components/Layout/Nav/index.tsx":[function(require,module,exports) {
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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

const NavMenuItem = (_ref) => {
  let {
    label,
    to,
    Loadable
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "to", "Loadable"]);

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

  const handleNavItems = routes => routes.map((_ref2) => {
    let {
      authMode
    } = _ref2,
        route = _objectWithoutProperties(_ref2, ["authMode"]);

    return route.hidden ? _react.default.createElement(_react.Fragment, {
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
    });
  });

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
},{"../../AppRoutes":"../ui/Components/AppRoutes.tsx","../../../lib/Styles":"../ui/lib/Styles.tsx","./useNav":"../ui/Components/Layout/Nav/useNav.tsx","../../SessionProvider":"../ui/Components/SessionProvider/index.tsx"}],"../ui/App.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _routes = require("./routes");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _LoadingComponent = require("./Components/LoadingComponent");

var _useNav = require("./Components/Layout/Nav/useNav");

var _SessionProvider = require("./Components/SessionProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const AppBar = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("./Components/Layout/AppBar"))),
  modules: ["./Components/Layout/AppBar"],
  webpack: () => [require.resolveWeak("./Components/Layout/AppBar")],
  modules: ['Components/Layout/AppBar/index.tsx'],
  loading: _LoadingComponent.Loading
});
const Nav = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => _interopRequireWildcard(require("./Components/Layout/Nav"))),
  modules: ["./Components/Layout/Nav"],
  webpack: () => [require.resolveWeak("./Components/Layout/Nav")],
  modules: ['Components/Layout/Nav/index.tsx'],
  loading: _LoadingComponent.Loading
});

const App = () => {
  const navContext = (0, _useNav.useNavContext)(false);
  return _react.default.createElement(_SessionProvider.SessionProvider, null, _react.default.createElement(AppBar, {
    appName: 'Project Management'
  }), _react.default.createElement(_useNav.NavContext.Provider, {
    value: navContext
  }, _react.default.createElement("div", {
    className: 'main-content',
    style: {
      display: 'flex',
      flex: '1 1',
      position: 'relative'
    }
  }, _react.default.createElement(Nav, null), _react.default.createElement(_routes.Routes, null))));
};

__signature__(App, "useNavContext{navContext}", () => [_useNav.useNavContext]);

const _default = App;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppBar, "AppBar", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/App.tsx");
  reactHotLoader.register(Nav, "Nav", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/App.tsx");
  reactHotLoader.register(App, "App", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/App.tsx");
  reactHotLoader.register(_default, "default", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/App.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"./routes":"../ui/routes/index.tsx","./Components/LoadingComponent":"../ui/Components/LoadingComponent/index.tsx","./Components/Layout/Nav/useNav":"../ui/Components/Layout/Nav/useNav.tsx","./Components/SessionProvider":"../ui/Components/SessionProvider/index.tsx","./Components/Layout/AppBar":"../ui/Components/Layout/AppBar/index.tsx","./Components/Layout/Nav":"../ui/Components/Layout/Nav/index.tsx"}],"../ui/fragmentTypes.json":[function(require,module,exports) {
"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  "__schema": {
    "types": [{
      "kind": "UNION",
      "name": "Children",
      "possibleTypes": [{
        "name": "Folder"
      }, {
        "name": "Project"
      }]
    }, {
      "kind": "INTERFACE",
      "name": "MutationResponse",
      "possibleTypes": [{
        "name": "LoginUserMutationResponse"
      }]
    }]
  }
};
},{}],"../ui/lib/initApollo.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initApollo = void 0;

var _apolloClient = require("apollo-client");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _fragmentTypes = _interopRequireDefault(require("../fragmentTypes.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
  introspectionQueryResultData: _fragmentTypes.default
});

const initApollo = ({
  baseUrl,
  initialState,
  token
}) => new _apolloClient.ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  link: (0, _apolloLinkHttp.createHttpLink)({
    uri: `${baseUrl}/graphql`,
    headers: token ? {
      Authorization: `Bearer ${token}`
    } : {}
  }),
  cache: new _apolloCacheInmemory.InMemoryCache({
    fragmentMatcher
  }).restore(initialState || {})
});

exports.initApollo = initApollo;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fragmentMatcher, "fragmentMatcher", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/initApollo.tsx");
  reactHotLoader.register(initApollo, "initApollo", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/initApollo.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../fragmentTypes.json":"../ui/fragmentTypes.json"}],"../ui/Components/Theme.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#18ffff',
      light: '#76ffff',
      dark: '#00cbcc'
    },
    secondary: {
      main: '#1de9b6',
      light: '#6effe8',
      dark: '#00b686'
    },
    background: {
      default: '#111111'
    }
  }
});
exports.theme = theme;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(theme, "theme", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/Theme.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/Components/ConfigProvider/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigProvider = ConfigProvider;
exports.useConfig = useConfig;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const ConfigContext = (0, _react.createContext)({
  baseUrl: 'http://localhost'
});

function ConfigProvider(props) {
  const {
    children
  } = props,
        configValue = _objectWithoutProperties(props, ["children"]);

  return _react.default.createElement(ConfigContext.Provider, {
    value: configValue
  }, children);
}

function useConfig() {
  return (0, _react.useContext)(ConfigContext);
}

__signature__(useConfig, "useContext{}");

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfigContext, "ConfigContext", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/ConfigProvider/index.tsx");
  reactHotLoader.register(ConfigProvider, "ConfigProvider", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/ConfigProvider/index.tsx");
  reactHotLoader.register(useConfig, "useConfig", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/Components/ConfigProvider/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{}],"../ui/lib/ApolloProvider/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApolloProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHooks = require("@apollo/react-hooks");

var _SessionProvider = require("../../Components/SessionProvider");

var _initApollo = require("../initApollo");

var _ConfigProvider = require("../../Components/ConfigProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const ApolloProvider = ({
  children,
  client,
  state
}) => {
  const [token] = (0, _SessionProvider.useToken)();
  const {
    baseUrl
  } = (0, _ConfigProvider.useConfig)();
  if (!client) client = (0, _initApollo.initApollo)({
    baseUrl,
    token,
    initialState: state
  });
  return _react.default.createElement(_reactHooks.ApolloProvider, {
    client: client
  }, children);
};

exports.ApolloProvider = ApolloProvider;

__signature__(ApolloProvider, "useToken{[token]}\nuseConfig{{ baseUrl }}", () => [_SessionProvider.useToken, _ConfigProvider.useConfig]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ApolloProvider, "ApolloProvider", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/ui/lib/ApolloProvider/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../../Components/SessionProvider":"../ui/Components/SessionProvider/index.tsx","../initApollo":"../ui/lib/initApollo.tsx","../../Components/ConfigProvider":"../ui/Components/ConfigProvider/index.tsx"}],"server.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiServer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = require("react-loadable");

var _reactHooks = require("@apollo/react-hooks");

var _server = require("@jesstelford/react-portal-universal/server");

var _router = require("@reach/router");

var _server2 = require("@hot-loader/react-dom/server");

var _fsExtra = require("fs-extra");

var _App = _interopRequireDefault(require("../ui/App"));

var _PropProvider = require("../ui/Components/PropProvider");

var _HeadProvider = require("../ui/Components/HeadProvider");

require("isomorphic-unfetch");

var _initApollo = require("../ui/lib/initApollo");

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _Theme = require("../ui/Components/Theme");

var _reactCookie = require("react-cookie");

var _ApolloProvider = require("../ui/lib/ApolloProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const uiServer = async (ctx, config) => {
  await (0, _reactLoadable.preloadAll)();
  await (0, _PropProvider.resetProps)();
  ctx.respond = false;
  ctx.status = 200;
  const manifestFile = `dist/public/parcel-manifest.json`;
  const cssFile = `dist/CSS.json`;
  const [parcelManifest, cssManifest] = await Promise.all([(0, _fsExtra.readJSON)(manifestFile), (0, _fsExtra.readJSON)(cssFile)]);
  const sources = [{
    type: 'script',
    src: parcelManifest['client.tsx']
  }, {
    type: 'style',
    src: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
  }, {
    type: 'style',
    src: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  }];
  const modules = [];
  let sessionProps = [];
  let localProps;
  const head = [];
  const hashes = [];
  const client = (0, _initApollo.initApollo)({
    baseUrl: config.baseUrl,
    token: ctx.cookies.get('token')
  });
  const sheets = new _styles.ServerStyleSheets();

  try {
    (0, _server2.renderToString)(_react.default.createElement(_router.ServerLocation, {
      url: ctx.url
    }, _react.default.createElement(_core.MuiThemeProvider, {
      theme: _Theme.theme
    }, _react.default.createElement(_reactCookie.CookiesProvider, {
      cookies: ctx.universalCookies
    }, _react.default.createElement(_ApolloProvider.ApolloProvider, {
      client: client
    }, _react.default.createElement(_PropProvider.PropProvider, {
      ctx: ctx,
      sessionProps: sessionProps,
      props: {}
    }, _react.default.createElement(_HeadProvider.HeadProvider, {
      tags: head,
      hashes: hashes
    }, _react.default.createElement(_App.default, null)))))))); // Pre-render to get Modules and shit

    await (0, _reactHooks.getDataFromTree)(_react.default.createElement(_router.ServerLocation, {
      url: ctx.url
    }, _react.default.createElement(_reactLoadable.Capture, {
      report: moduleName => modules.push(moduleName)
    }, _react.default.createElement(_core.MuiThemeProvider, {
      theme: _Theme.theme
    }, _react.default.createElement(_reactCookie.CookiesProvider, {
      cookies: ctx.universalCookies
    }, _react.default.createElement(_ApolloProvider.ApolloProvider, {
      client: client
    }, _react.default.createElement(_PropProvider.PropProvider, {
      ctx: ctx,
      sessionProps: sessionProps,
      props: {}
    }, _react.default.createElement(_HeadProvider.HeadProvider, {
      tags: head,
      hashes: hashes
    }, _react.default.createElement(_App.default, null)))))))));
    localProps = (await _PropProvider.Props) || {};
    sessionProps = [{
      path: ctx.path,
      props: (await _PropProvider.Props) || {}
    }];
  } catch (e) {
    if ((0, _router.isRedirect)(e)) {
      ctx.redirect(e.uri);
      ctx.res.end();
      return;
    }

    localProps = (await _PropProvider.Props) || {};
    sessionProps = [{
      path: ctx.path,
      props: (await _PropProvider.Props) || {}
    }];
  }

  modules.map(moduleName => Object.entries(parcelManifest).filter(([a, b]) => a === moduleName || cssManifest[moduleName] === b).map(([modulePath, file]) => sources.unshift({
    src: file,
    type: file.includes('.js') ? 'script' : 'style'
  })));

  const MainApp = _react.default.createElement(_router.ServerLocation, {
    url: ctx.url
  }, _react.default.createElement(_core.MuiThemeProvider, {
    theme: _Theme.theme
  }, _react.default.createElement(_reactCookie.CookiesProvider, {
    cookies: ctx.universalCookies
  }, _react.default.createElement(_ApolloProvider.ApolloProvider, {
    client: client
  }, _react.default.createElement(_PropProvider.PropProvider, {
    ctx: ctx,
    sessionProps: sessionProps,
    props: localProps
  }, _react.default.createElement(_HeadProvider.HeadProvider, {
    tags: head,
    hashes: hashes
  }, _react.default.createElement(_App.default, null)))))));

  const portals = new _server.ServerPortal();
  const element = portals.collectPortals(MainApp);
  const testElem = (0, _server2.renderToString)(sheets.collect(element));
  const test = portals.appendUniversalPortals(testElem);
  const componentStream = (0, _server2.renderToNodeStream)(_react.default.createElement(_react.default.Fragment, null));
  const mainCSS = `
  #app {
    display: flex;
    flex-direction: column;
  }

  #full-closed + #app_content {
    margin-left: -240px;
  }

  #full-open + #app_content {
    margin-left: 0;
  }

  html,body,#app {
    background: #eee;
    margin: 0;
    height: 100%;
  }
  nav li {
    display: table-cell;
    padding: 0 14px;
  }
  nav ol {
    padding: 0;
    display: table;
    flex-wrap: unset !important;
    align-items: unset !important;
    width: max-content;
  }
  nav {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  nav::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
  }

  nav li a {
    white-space: nowrap;
  }`;
  const Head = (0, _server2.renderToString)(_react.default.createElement("head", null, _react.default.createElement("link", {
    rel: 'manifest',
    href: '/manifest.json'
  }), _react.default.createElement("meta", {
    content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
    name: 'viewport'
  }), head, sources && sources.map(({
    src,
    type
  }, index) => _react.default.createElement("link", {
    rel: 'preload',
    href: src,
    as: type,
    key: index
  })), sources && sources.filter(({
    type
  }) => type === 'style').map(({
    src
  }, index) => _react.default.createElement("link", {
    rel: 'stylesheet',
    type: 'text/css',
    href: src,
    key: index
  })), _react.default.createElement("style", {
    id: 'jss-server-side',
    dangerouslySetInnerHTML: {
      __html: sheets.toString()
    }
  }), _react.default.createElement("style", {
    type: 'text/css',
    dangerouslySetInnerHTML: {
      __html: mainCSS
    }
  })));
  const htmlStart = `
  <!doctype html>
    <html>
      ${Head}
      <body>
      <div id="app">`;
  ctx.res.write(htmlStart);
  componentStream.pipe(ctx.res, {
    end: false
  });
  const appState = {
    SESSION_PROPS: sessionProps,
    PROPS: localProps,
    APOLLO_STATE: client.cache.extract(),
    CONFIG: config
  };
  const htmlEnd = `</div>
    <script type="text/javascript">window.APP_STATE = ${JSON.stringify(appState)}</script>
    ${(0, _server2.renderToString)(_react.default.createElement(_react.default.Fragment, null, ' ', sources && sources.filter(({
    type
  }) => type === 'script').reverse().map(({
    src
  }, index) => _react.default.createElement("script", {
    async: true,
    type: 'text/javascript',
    charSet: 'utf-8',
    key: index,
    src: src
  }))))}
  </body>
  </html>`;
  componentStream.on('end', () => {
    ctx.res.write(test);
    ctx.res.write(htmlEnd);
    ctx.res.end();
  });
};

exports.uiServer = uiServer;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(uiServer, "uiServer", "/Users/kristianjones/Projects/TypeScript/design.kristianjones.dev/services/UI/server/server.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"../ui/App":"../ui/App.tsx","../ui/Components/PropProvider":"../ui/Components/PropProvider/index.tsx","../ui/Components/HeadProvider":"../ui/Components/HeadProvider/index.tsx","../ui/lib/initApollo":"../ui/lib/initApollo.tsx","../ui/Components/Theme":"../ui/Components/Theme.tsx","../ui/lib/ApolloProvider":"../ui/lib/ApolloProvider/index.tsx"}]},{},["server.tsx"], null)