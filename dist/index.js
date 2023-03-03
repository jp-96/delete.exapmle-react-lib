(() => {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire54d2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire54d2"] = parcelRequire;
}
parcelRequire.register("51lsI", function(module, exports) {

$parcel$export(module.exports, "Fragment", () => $3a7db1b100aaf44b$export$ffb0004e005737fa, (v) => $3a7db1b100aaf44b$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "jsx", () => $3a7db1b100aaf44b$export$34b9dba7ce09269b, (v) => $3a7db1b100aaf44b$export$34b9dba7ce09269b = v);
$parcel$export(module.exports, "jsxs", () => $3a7db1b100aaf44b$export$25062201e9e25d76, (v) => $3a7db1b100aaf44b$export$25062201e9e25d76 = v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $3a7db1b100aaf44b$export$ffb0004e005737fa;
var $3a7db1b100aaf44b$export$34b9dba7ce09269b;
var $3a7db1b100aaf44b$export$25062201e9e25d76;
"use strict";

var $kr2Bq = parcelRequire("kr2Bq");
var $3a7db1b100aaf44b$var$k = Symbol.for("react.element"), $3a7db1b100aaf44b$var$l = Symbol.for("react.fragment"), $3a7db1b100aaf44b$var$m = Object.prototype.hasOwnProperty, $3a7db1b100aaf44b$var$n = $kr2Bq.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $3a7db1b100aaf44b$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $3a7db1b100aaf44b$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$3a7db1b100aaf44b$var$m.call(a, b) && !$3a7db1b100aaf44b$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $3a7db1b100aaf44b$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $3a7db1b100aaf44b$var$n.current
    };
}
$3a7db1b100aaf44b$export$ffb0004e005737fa = $3a7db1b100aaf44b$var$l;
$3a7db1b100aaf44b$export$34b9dba7ce09269b = $3a7db1b100aaf44b$var$q;
$3a7db1b100aaf44b$export$25062201e9e25d76 = $3a7db1b100aaf44b$var$q;

});
parcelRequire.register("kr2Bq", function(module, exports) {
"use strict";

module.exports = (parcelRequire("43CGU"));

});
parcelRequire.register("43CGU", function(module, exports) {

$parcel$export(module.exports, "Children", () => $2f45747bee5a068b$export$dca3b0875bd9a954, (v) => $2f45747bee5a068b$export$dca3b0875bd9a954 = v);
$parcel$export(module.exports, "Component", () => $2f45747bee5a068b$export$16fa2f45be04daa8, (v) => $2f45747bee5a068b$export$16fa2f45be04daa8 = v);
$parcel$export(module.exports, "Fragment", () => $2f45747bee5a068b$export$ffb0004e005737fa, (v) => $2f45747bee5a068b$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Profiler", () => $2f45747bee5a068b$export$e2c29f18771995cb, (v) => $2f45747bee5a068b$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "PureComponent", () => $2f45747bee5a068b$export$221d75b3f55bb0bd, (v) => $2f45747bee5a068b$export$221d75b3f55bb0bd = v);
$parcel$export(module.exports, "StrictMode", () => $2f45747bee5a068b$export$5f8d39834fd61797, (v) => $2f45747bee5a068b$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $2f45747bee5a068b$export$74bf444e3cd11ea5, (v) => $2f45747bee5a068b$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $2f45747bee5a068b$export$ae55be85d98224ed, (v) => $2f45747bee5a068b$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "cloneElement", () => $2f45747bee5a068b$export$e530037191fcd5d7, (v) => $2f45747bee5a068b$export$e530037191fcd5d7 = v);
$parcel$export(module.exports, "createContext", () => $2f45747bee5a068b$export$fd42f52fd3ae1109, (v) => $2f45747bee5a068b$export$fd42f52fd3ae1109 = v);
$parcel$export(module.exports, "createElement", () => $2f45747bee5a068b$export$c8a8987d4410bf2d, (v) => $2f45747bee5a068b$export$c8a8987d4410bf2d = v);
$parcel$export(module.exports, "createFactory", () => $2f45747bee5a068b$export$d38cd72104c1f0e9, (v) => $2f45747bee5a068b$export$d38cd72104c1f0e9 = v);
$parcel$export(module.exports, "createRef", () => $2f45747bee5a068b$export$7d1e3a5e95ceca43, (v) => $2f45747bee5a068b$export$7d1e3a5e95ceca43 = v);
$parcel$export(module.exports, "forwardRef", () => $2f45747bee5a068b$export$257a8862b851cb5b, (v) => $2f45747bee5a068b$export$257a8862b851cb5b = v);
$parcel$export(module.exports, "isValidElement", () => $2f45747bee5a068b$export$a8257692ac88316c, (v) => $2f45747bee5a068b$export$a8257692ac88316c = v);
$parcel$export(module.exports, "lazy", () => $2f45747bee5a068b$export$488013bae63b21da, (v) => $2f45747bee5a068b$export$488013bae63b21da = v);
$parcel$export(module.exports, "memo", () => $2f45747bee5a068b$export$7c73462e0d25e514, (v) => $2f45747bee5a068b$export$7c73462e0d25e514 = v);
$parcel$export(module.exports, "startTransition", () => $2f45747bee5a068b$export$7568632d0d33d16d, (v) => $2f45747bee5a068b$export$7568632d0d33d16d = v);
$parcel$export(module.exports, "unstable_act", () => $2f45747bee5a068b$export$88948ce120ea2619, (v) => $2f45747bee5a068b$export$88948ce120ea2619 = v);
$parcel$export(module.exports, "useCallback", () => $2f45747bee5a068b$export$35808ee640e87ca7, (v) => $2f45747bee5a068b$export$35808ee640e87ca7 = v);
$parcel$export(module.exports, "useContext", () => $2f45747bee5a068b$export$fae74005e78b1a27, (v) => $2f45747bee5a068b$export$fae74005e78b1a27 = v);
$parcel$export(module.exports, "useDebugValue", () => $2f45747bee5a068b$export$dc8fbce3eb94dc1e, (v) => $2f45747bee5a068b$export$dc8fbce3eb94dc1e = v);
$parcel$export(module.exports, "useDeferredValue", () => $2f45747bee5a068b$export$6a7bc4e911dc01cf, (v) => $2f45747bee5a068b$export$6a7bc4e911dc01cf = v);
$parcel$export(module.exports, "useEffect", () => $2f45747bee5a068b$export$6d9c69b0de29b591, (v) => $2f45747bee5a068b$export$6d9c69b0de29b591 = v);
$parcel$export(module.exports, "useId", () => $2f45747bee5a068b$export$f680877a34711e37, (v) => $2f45747bee5a068b$export$f680877a34711e37 = v);
$parcel$export(module.exports, "useImperativeHandle", () => $2f45747bee5a068b$export$d5a552a76deda3c2, (v) => $2f45747bee5a068b$export$d5a552a76deda3c2 = v);
$parcel$export(module.exports, "useInsertionEffect", () => $2f45747bee5a068b$export$aaabe4eda9ed9969, (v) => $2f45747bee5a068b$export$aaabe4eda9ed9969 = v);
$parcel$export(module.exports, "useLayoutEffect", () => $2f45747bee5a068b$export$e5c5a5f917a5871c, (v) => $2f45747bee5a068b$export$e5c5a5f917a5871c = v);
$parcel$export(module.exports, "useMemo", () => $2f45747bee5a068b$export$1538c33de8887b59, (v) => $2f45747bee5a068b$export$1538c33de8887b59 = v);
$parcel$export(module.exports, "useReducer", () => $2f45747bee5a068b$export$13e3392192263954, (v) => $2f45747bee5a068b$export$13e3392192263954 = v);
$parcel$export(module.exports, "useRef", () => $2f45747bee5a068b$export$b8f5890fc79d6aca, (v) => $2f45747bee5a068b$export$b8f5890fc79d6aca = v);
$parcel$export(module.exports, "useState", () => $2f45747bee5a068b$export$60241385465d0a34, (v) => $2f45747bee5a068b$export$60241385465d0a34 = v);
$parcel$export(module.exports, "useSyncExternalStore", () => $2f45747bee5a068b$export$306c0aa65ff9ec16, (v) => $2f45747bee5a068b$export$306c0aa65ff9ec16 = v);
$parcel$export(module.exports, "useTransition", () => $2f45747bee5a068b$export$7b286972b8d8ccbf, (v) => $2f45747bee5a068b$export$7b286972b8d8ccbf = v);
$parcel$export(module.exports, "version", () => $2f45747bee5a068b$export$83d89fbfd8236492, (v) => $2f45747bee5a068b$export$83d89fbfd8236492 = v);
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $2f45747bee5a068b$export$dca3b0875bd9a954;
var $2f45747bee5a068b$export$16fa2f45be04daa8;
var $2f45747bee5a068b$export$ffb0004e005737fa;
var $2f45747bee5a068b$export$e2c29f18771995cb;
var $2f45747bee5a068b$export$221d75b3f55bb0bd;
var $2f45747bee5a068b$export$5f8d39834fd61797;
var $2f45747bee5a068b$export$74bf444e3cd11ea5;
var $2f45747bee5a068b$export$ae55be85d98224ed;
var $2f45747bee5a068b$export$e530037191fcd5d7;
var $2f45747bee5a068b$export$fd42f52fd3ae1109;
var $2f45747bee5a068b$export$c8a8987d4410bf2d;
var $2f45747bee5a068b$export$d38cd72104c1f0e9;
var $2f45747bee5a068b$export$7d1e3a5e95ceca43;
var $2f45747bee5a068b$export$257a8862b851cb5b;
var $2f45747bee5a068b$export$a8257692ac88316c;
var $2f45747bee5a068b$export$488013bae63b21da;
var $2f45747bee5a068b$export$7c73462e0d25e514;
var $2f45747bee5a068b$export$7568632d0d33d16d;
var $2f45747bee5a068b$export$88948ce120ea2619;
var $2f45747bee5a068b$export$35808ee640e87ca7;
var $2f45747bee5a068b$export$fae74005e78b1a27;
var $2f45747bee5a068b$export$dc8fbce3eb94dc1e;
var $2f45747bee5a068b$export$6a7bc4e911dc01cf;
var $2f45747bee5a068b$export$6d9c69b0de29b591;
var $2f45747bee5a068b$export$f680877a34711e37;
var $2f45747bee5a068b$export$d5a552a76deda3c2;
var $2f45747bee5a068b$export$aaabe4eda9ed9969;
var $2f45747bee5a068b$export$e5c5a5f917a5871c;
var $2f45747bee5a068b$export$1538c33de8887b59;
var $2f45747bee5a068b$export$13e3392192263954;
var $2f45747bee5a068b$export$b8f5890fc79d6aca;
var $2f45747bee5a068b$export$60241385465d0a34;
var $2f45747bee5a068b$export$306c0aa65ff9ec16;
var $2f45747bee5a068b$export$7b286972b8d8ccbf;
var $2f45747bee5a068b$export$83d89fbfd8236492;
"use strict";
var $2f45747bee5a068b$var$l = Symbol.for("react.element"), $2f45747bee5a068b$var$n = Symbol.for("react.portal"), $2f45747bee5a068b$var$p = Symbol.for("react.fragment"), $2f45747bee5a068b$var$q = Symbol.for("react.strict_mode"), $2f45747bee5a068b$var$r = Symbol.for("react.profiler"), $2f45747bee5a068b$var$t = Symbol.for("react.provider"), $2f45747bee5a068b$var$u = Symbol.for("react.context"), $2f45747bee5a068b$var$v = Symbol.for("react.forward_ref"), $2f45747bee5a068b$var$w = Symbol.for("react.suspense"), $2f45747bee5a068b$var$x = Symbol.for("react.memo"), $2f45747bee5a068b$var$y = Symbol.for("react.lazy"), $2f45747bee5a068b$var$z = Symbol.iterator;
function $2f45747bee5a068b$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $2f45747bee5a068b$var$z && a[$2f45747bee5a068b$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $2f45747bee5a068b$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $2f45747bee5a068b$var$C = Object.assign, $2f45747bee5a068b$var$D = {};
function $2f45747bee5a068b$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $2f45747bee5a068b$var$D;
    this.updater = e || $2f45747bee5a068b$var$B;
}
$2f45747bee5a068b$var$E.prototype.isReactComponent = {};
$2f45747bee5a068b$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$2f45747bee5a068b$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $2f45747bee5a068b$var$F() {}
$2f45747bee5a068b$var$F.prototype = $2f45747bee5a068b$var$E.prototype;
function $2f45747bee5a068b$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $2f45747bee5a068b$var$D;
    this.updater = e || $2f45747bee5a068b$var$B;
}
var $2f45747bee5a068b$var$H = $2f45747bee5a068b$var$G.prototype = new $2f45747bee5a068b$var$F;
$2f45747bee5a068b$var$H.constructor = $2f45747bee5a068b$var$G;
$2f45747bee5a068b$var$C($2f45747bee5a068b$var$H, $2f45747bee5a068b$var$E.prototype);
$2f45747bee5a068b$var$H.isPureReactComponent = !0;
var $2f45747bee5a068b$var$I = Array.isArray, $2f45747bee5a068b$var$J = Object.prototype.hasOwnProperty, $2f45747bee5a068b$var$K = {
    current: null
}, $2f45747bee5a068b$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $2f45747bee5a068b$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$2f45747bee5a068b$var$J.call(b, d) && !$2f45747bee5a068b$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $2f45747bee5a068b$var$K.current
    };
}
function $2f45747bee5a068b$var$N(a, b) {
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $2f45747bee5a068b$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $2f45747bee5a068b$var$l;
}
function $2f45747bee5a068b$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $2f45747bee5a068b$var$P = /\/+/g;
function $2f45747bee5a068b$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $2f45747bee5a068b$var$escape("" + a.key) : b.toString(36);
}
function $2f45747bee5a068b$var$R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case $2f45747bee5a068b$var$l:
                case $2f45747bee5a068b$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $2f45747bee5a068b$var$Q(h, 0) : d, $2f45747bee5a068b$var$I(c) ? (e = "", null != a && (e = a.replace($2f45747bee5a068b$var$P, "$&/") + "/"), $2f45747bee5a068b$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($2f45747bee5a068b$var$O(c) && (c = $2f45747bee5a068b$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($2f45747bee5a068b$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($2f45747bee5a068b$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $2f45747bee5a068b$var$Q(k, g);
        h += $2f45747bee5a068b$var$R(k, b, e, f, c);
    }
    else if (f = $2f45747bee5a068b$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $2f45747bee5a068b$var$Q(k, g++), h += $2f45747bee5a068b$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $2f45747bee5a068b$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $2f45747bee5a068b$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $2f45747bee5a068b$var$T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $2f45747bee5a068b$var$U = {
    current: null
}, $2f45747bee5a068b$var$V = {
    transition: null
}, $2f45747bee5a068b$var$W = {
    ReactCurrentDispatcher: $2f45747bee5a068b$var$U,
    ReactCurrentBatchConfig: $2f45747bee5a068b$var$V,
    ReactCurrentOwner: $2f45747bee5a068b$var$K
};
$2f45747bee5a068b$export$dca3b0875bd9a954 = {
    map: $2f45747bee5a068b$var$S,
    forEach: function(a, b, e) {
        $2f45747bee5a068b$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $2f45747bee5a068b$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $2f45747bee5a068b$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$2f45747bee5a068b$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$2f45747bee5a068b$export$16fa2f45be04daa8 = $2f45747bee5a068b$var$E;
$2f45747bee5a068b$export$ffb0004e005737fa = $2f45747bee5a068b$var$p;
$2f45747bee5a068b$export$e2c29f18771995cb = $2f45747bee5a068b$var$r;
$2f45747bee5a068b$export$221d75b3f55bb0bd = $2f45747bee5a068b$var$G;
$2f45747bee5a068b$export$5f8d39834fd61797 = $2f45747bee5a068b$var$q;
$2f45747bee5a068b$export$74bf444e3cd11ea5 = $2f45747bee5a068b$var$w;
$2f45747bee5a068b$export$ae55be85d98224ed = $2f45747bee5a068b$var$W;
$2f45747bee5a068b$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $2f45747bee5a068b$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $2f45747bee5a068b$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$2f45747bee5a068b$var$J.call(b, f) && !$2f45747bee5a068b$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$2f45747bee5a068b$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $2f45747bee5a068b$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $2f45747bee5a068b$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$2f45747bee5a068b$export$c8a8987d4410bf2d = $2f45747bee5a068b$var$M;
$2f45747bee5a068b$export$d38cd72104c1f0e9 = function(a) {
    var b = $2f45747bee5a068b$var$M.bind(null, a);
    b.type = a;
    return b;
};
$2f45747bee5a068b$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$2f45747bee5a068b$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $2f45747bee5a068b$var$v,
        render: a
    };
};
$2f45747bee5a068b$export$a8257692ac88316c = $2f45747bee5a068b$var$O;
$2f45747bee5a068b$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $2f45747bee5a068b$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $2f45747bee5a068b$var$T
    };
};
$2f45747bee5a068b$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $2f45747bee5a068b$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$2f45747bee5a068b$export$7568632d0d33d16d = function(a) {
    var b = $2f45747bee5a068b$var$V.transition;
    $2f45747bee5a068b$var$V.transition = {};
    try {
        a();
    } finally{
        $2f45747bee5a068b$var$V.transition = b;
    }
};
$2f45747bee5a068b$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$2f45747bee5a068b$export$35808ee640e87ca7 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useCallback(a, b);
};
$2f45747bee5a068b$export$fae74005e78b1a27 = function(a) {
    return $2f45747bee5a068b$var$U.current.useContext(a);
};
$2f45747bee5a068b$export$dc8fbce3eb94dc1e = function() {};
$2f45747bee5a068b$export$6a7bc4e911dc01cf = function(a) {
    return $2f45747bee5a068b$var$U.current.useDeferredValue(a);
};
$2f45747bee5a068b$export$6d9c69b0de29b591 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useEffect(a, b);
};
$2f45747bee5a068b$export$f680877a34711e37 = function() {
    return $2f45747bee5a068b$var$U.current.useId();
};
$2f45747bee5a068b$export$d5a552a76deda3c2 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useImperativeHandle(a, b, e);
};
$2f45747bee5a068b$export$aaabe4eda9ed9969 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useInsertionEffect(a, b);
};
$2f45747bee5a068b$export$e5c5a5f917a5871c = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useLayoutEffect(a, b);
};
$2f45747bee5a068b$export$1538c33de8887b59 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useMemo(a, b);
};
$2f45747bee5a068b$export$13e3392192263954 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useReducer(a, b, e);
};
$2f45747bee5a068b$export$b8f5890fc79d6aca = function(a) {
    return $2f45747bee5a068b$var$U.current.useRef(a);
};
$2f45747bee5a068b$export$60241385465d0a34 = function(a) {
    return $2f45747bee5a068b$var$U.current.useState(a);
};
$2f45747bee5a068b$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useSyncExternalStore(a, b, e);
};
$2f45747bee5a068b$export$7b286972b8d8ccbf = function() {
    return $2f45747bee5a068b$var$U.current.useTransition();
};
$2f45747bee5a068b$export$83d89fbfd8236492 = "18.2.0";

});



var $a8fb58f1308f9358$exports = {};

$parcel$defineInteropFlag($a8fb58f1308f9358$exports);

$parcel$export($a8fb58f1308f9358$exports, "default", () => $a8fb58f1308f9358$export$2e2bcd8739ae039);
var $95e690a3037e1728$exports = {};
"use strict";

$95e690a3037e1728$exports = (parcelRequire("51lsI"));


parcelRequire("kr2Bq");

parcelRequire("kr2Bq");
const $d293d23f0a4ab3b1$var$Logo = (props)=>{
    const optionSvgAtr = {};
    if (props.className) optionSvgAtr["className"] = props.className;
    return(// logo.svg
    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 841.9 595.3",
        ...optionSvgAtr,
        children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("g", {
            fill: "#61DAFB",
            children: [
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("path", {
                    d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"
                }),
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                    cx: "420.9",
                    cy: "296.5",
                    r: "45.7"
                }),
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("path", {
                    d: "M520.5 78.1z"
                })
            ]
        })
    }));
};
var $d293d23f0a4ab3b1$export$2e2bcd8739ae039 = $d293d23f0a4ab3b1$var$Logo;


//import './App.css';
function $373194229f523168$var$App() {
    return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("div", {
        className: "App",
        children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("header", {
            className: "App-header",
            children: [
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)((0, $d293d23f0a4ab3b1$export$2e2bcd8739ae039), {
                    className: "App-logo"
                }),
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("p", {
                    children: [
                        "Edit ",
                        /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("code", {
                            children: "src/app/App.tsx"
                        }),
                        " and save to reload."
                    ]
                }),
                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("a", {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Learn React"
                })
            ]
        })
    });
}
var $373194229f523168$export$2e2bcd8739ae039 = $373194229f523168$var$App;


var $a8fb58f1308f9358$export$2e2bcd8739ae039 = (0, $373194229f523168$export$2e2bcd8739ae039);

})();
//# sourceMappingURL=index.js.map
