(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) fe(L);
  new MutationObserver((L) => {
    for (const Q of L)
      if (Q.type === "childList")
        for (const ae of Q.addedNodes)
          ae.tagName === "LINK" && ae.rel === "modulepreload" && fe(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(L) {
    const Q = {};
    return (
      L.integrity && (Q.integrity = L.integrity),
      L.referrerPolicy && (Q.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (Q.credentials = "include")
        : L.crossOrigin === "anonymous"
        ? (Q.credentials = "omit")
        : (Q.credentials = "same-origin"),
      Q
    );
  }
  function fe(L) {
    if (L.ep) return;
    L.ep = !0;
    const Q = m(L);
    fetch(L.href, Q);
  }
})();
function Of(T) {
  return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default")
    ? T.default
    : T;
}
var _o = { exports: {} },
  yr = {},
  Co = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Df() {
  if (Na) return O;
  Na = 1;
  var T = Symbol.for("react.element"),
    D = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    fe = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    Q = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    de = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    we = Symbol.for("react.memo"),
    le = Symbol.for("react.lazy"),
    K = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (K && c[K]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    b = {};
  function Y(c, g, R) {
    (this.props = c),
      (this.context = g),
      (this.refs = b),
      (this.updater = R || $e);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, g) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, g, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function vt() {}
  vt.prototype = Y.prototype;
  function st(c, g, R) {
    (this.props = c),
      (this.context = g),
      (this.refs = b),
      (this.updater = R || $e);
  }
  var qe = (st.prototype = new vt());
  (qe.constructor = st), We(qe, Y.prototype), (qe.isPureReactComponent = !0);
  var ke = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, g, R) {
    var F,
      A = {},
      V = null,
      G = null;
    if (g != null)
      for (F in (g.ref !== void 0 && (G = g.ref),
      g.key !== void 0 && (V = "" + g.key),
      g))
        be.call(g, F) && !je.hasOwnProperty(F) && (A[F] = g[F]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = R;
    else if (1 < $) {
      for (var ee = Array($), Ue = 0; Ue < $; Ue++) ee[Ue] = arguments[Ue + 2];
      A.children = ee;
    }
    if (c && c.defaultProps)
      for (F in (($ = c.defaultProps), $)) A[F] === void 0 && (A[F] = $[F]);
    return {
      $$typeof: T,
      type: c,
      key: V,
      ref: G,
      props: A,
      _owner: Ne.current,
    };
  }
  function Tt(c, g) {
    return {
      $$typeof: T,
      type: c.type,
      key: g,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === T;
  }
  function Yt(c) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (R) {
        return g[R];
      })
    );
  }
  var at = /\/+/g;
  function Fe(c, g) {
    return typeof c == "object" && c !== null && c.key != null
      ? Yt("" + c.key)
      : g.toString(36);
  }
  function et(c, g, R, F, A) {
    var V = typeof c;
    (V === "undefined" || V === "boolean") && (c = null);
    var G = !1;
    if (c === null) G = !0;
    else
      switch (V) {
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case T:
            case D:
              G = !0;
          }
      }
    if (G)
      return (
        (G = c),
        (A = A(G)),
        (c = F === "" ? "." + Fe(G, 0) : F),
        ke(A)
          ? ((R = ""),
            c != null && (R = c.replace(at, "$&/") + "/"),
            et(A, g, R, "", function (Ue) {
              return Ue;
            }))
          : A != null &&
            (yt(A) &&
              (A = Tt(
                A,
                R +
                  (!A.key || (G && G.key === A.key)
                    ? ""
                    : ("" + A.key).replace(at, "$&/") + "/") +
                  c
              )),
            g.push(A)),
        1
      );
    if (((G = 0), (F = F === "" ? "." : F + ":"), ke(c)))
      for (var $ = 0; $ < c.length; $++) {
        V = c[$];
        var ee = F + Fe(V, $);
        G += et(V, g, R, ee, A);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), $ = 0; !(V = c.next()).done; )
        (V = V.value), (ee = F + Fe(V, $++)), (G += et(V, g, R, ee, A));
    else if (V === "object")
      throw (
        ((g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : g) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return G;
  }
  function ct(c, g, R) {
    if (c == null) return c;
    var F = [],
      A = 0;
    return (
      et(c, F, "", "", function (V) {
        return g.call(R, V, A++);
      }),
      F
    );
  }
  function ze(c) {
    if (c._status === -1) {
      var g = c._result;
      (g = g()),
        g.then(
          function (R) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = R));
          },
          function (R) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = R));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = g));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ie = { current: null },
    w = { transition: null },
    I = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: w,
      ReactCurrentOwner: Ne,
    };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (O.Children = {
      map: ct,
      forEach: function (c, g, R) {
        ct(
          c,
          function () {
            g.apply(this, arguments);
          },
          R
        );
      },
      count: function (c) {
        var g = 0;
        return (
          ct(c, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (c) {
        return (
          ct(c, function (g) {
            return g;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (O.Component = Y),
    (O.Fragment = m),
    (O.Profiler = L),
    (O.PureComponent = st),
    (O.StrictMode = fe),
    (O.Suspense = H),
    (O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (O.act = E),
    (O.cloneElement = function (c, g, R) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var F = We({}, c.props),
        A = c.key,
        V = c.ref,
        G = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((V = g.ref), (G = Ne.current)),
          g.key !== void 0 && (A = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (ee in g)
          be.call(g, ee) &&
            !je.hasOwnProperty(ee) &&
            (F[ee] = g[ee] === void 0 && $ !== void 0 ? $[ee] : g[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) F.children = R;
      else if (1 < ee) {
        $ = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) $[Ue] = arguments[Ue + 2];
        F.children = $;
      }
      return { $$typeof: T, type: c.type, key: A, ref: V, props: F, _owner: G };
    }),
    (O.createContext = function (c) {
      return (
        (c = {
          $$typeof: ae,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: Q, _context: c }),
        (c.Consumer = c)
      );
    }),
    (O.createElement = Qe),
    (O.createFactory = function (c) {
      var g = Qe.bind(null, c);
      return (g.type = c), g;
    }),
    (O.createRef = function () {
      return { current: null };
    }),
    (O.forwardRef = function (c) {
      return { $$typeof: de, render: c };
    }),
    (O.isValidElement = yt),
    (O.lazy = function (c) {
      return { $$typeof: le, _payload: { _status: -1, _result: c }, _init: ze };
    }),
    (O.memo = function (c, g) {
      return { $$typeof: we, type: c, compare: g === void 0 ? null : g };
    }),
    (O.startTransition = function (c) {
      var g = w.transition;
      w.transition = {};
      try {
        c();
      } finally {
        w.transition = g;
      }
    }),
    (O.unstable_act = E),
    (O.useCallback = function (c, g) {
      return ie.current.useCallback(c, g);
    }),
    (O.useContext = function (c) {
      return ie.current.useContext(c);
    }),
    (O.useDebugValue = function () {}),
    (O.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c);
    }),
    (O.useEffect = function (c, g) {
      return ie.current.useEffect(c, g);
    }),
    (O.useId = function () {
      return ie.current.useId();
    }),
    (O.useImperativeHandle = function (c, g, R) {
      return ie.current.useImperativeHandle(c, g, R);
    }),
    (O.useInsertionEffect = function (c, g) {
      return ie.current.useInsertionEffect(c, g);
    }),
    (O.useLayoutEffect = function (c, g) {
      return ie.current.useLayoutEffect(c, g);
    }),
    (O.useMemo = function (c, g) {
      return ie.current.useMemo(c, g);
    }),
    (O.useReducer = function (c, g, R) {
      return ie.current.useReducer(c, g, R);
    }),
    (O.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (O.useState = function (c) {
      return ie.current.useState(c);
    }),
    (O.useSyncExternalStore = function (c, g, R) {
      return ie.current.useSyncExternalStore(c, g, R);
    }),
    (O.useTransition = function () {
      return ie.current.useTransition();
    }),
    (O.version = "18.3.1"),
    O
  );
}
var Ta;
function Io() {
  return Ta || ((Ta = 1), (Co.exports = Df())), Co.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Ff() {
  if (Pa) return yr;
  Pa = 1;
  var T = Io(),
    D = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    fe = Object.prototype.hasOwnProperty,
    L = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(de, H, we) {
    var le,
      K = {},
      q = null,
      $e = null;
    we !== void 0 && (q = "" + we),
      H.key !== void 0 && (q = "" + H.key),
      H.ref !== void 0 && ($e = H.ref);
    for (le in H) fe.call(H, le) && !Q.hasOwnProperty(le) && (K[le] = H[le]);
    if (de && de.defaultProps)
      for (le in ((H = de.defaultProps), H))
        K[le] === void 0 && (K[le] = H[le]);
    return {
      $$typeof: D,
      type: de,
      key: q,
      ref: $e,
      props: K,
      _owner: L.current,
    };
  }
  return (yr.Fragment = m), (yr.jsx = ae), (yr.jsxs = ae), yr;
}
var ja;
function Uf() {
  return ja || ((ja = 1), (_o.exports = Ff())), _o.exports;
}
var P = Uf(),
  gt = Io();
const Da = Of(gt);
var jl = {},
  No = { exports: {} },
  De = {},
  To = { exports: {} },
  Po = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Af() {
  return (
    za ||
      ((za = 1),
      (function (T) {
        function D(w, I) {
          var E = w.length;
          w.push(I);
          e: for (; 0 < E; ) {
            var c = (E - 1) >>> 1,
              g = w[c];
            if (0 < L(g, I)) (w[c] = I), (w[E] = g), (E = c);
            else break e;
          }
        }
        function m(w) {
          return w.length === 0 ? null : w[0];
        }
        function fe(w) {
          if (w.length === 0) return null;
          var I = w[0],
            E = w.pop();
          if (E !== I) {
            w[0] = E;
            e: for (var c = 0, g = w.length, R = g >>> 1; c < R; ) {
              var F = 2 * (c + 1) - 1,
                A = w[F],
                V = F + 1,
                G = w[V];
              if (0 > L(A, E))
                V < g && 0 > L(G, A)
                  ? ((w[c] = G), (w[V] = E), (c = V))
                  : ((w[c] = A), (w[F] = E), (c = F));
              else if (V < g && 0 > L(G, E)) (w[c] = G), (w[V] = E), (c = V);
              else break e;
            }
          }
          return I;
        }
        function L(w, I) {
          var E = w.sortIndex - I.sortIndex;
          return E !== 0 ? E : w.id - I.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var Q = performance;
          T.unstable_now = function () {
            return Q.now();
          };
        } else {
          var ae = Date,
            de = ae.now();
          T.unstable_now = function () {
            return ae.now() - de;
          };
        }
        var H = [],
          we = [],
          le = 1,
          K = null,
          q = 3,
          $e = !1,
          We = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          vt = typeof clearTimeout == "function" ? clearTimeout : null,
          st = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(w) {
          for (var I = m(we); I !== null; ) {
            if (I.callback === null) fe(we);
            else if (I.startTime <= w)
              fe(we), (I.sortIndex = I.expirationTime), D(H, I);
            else break;
            I = m(we);
          }
        }
        function ke(w) {
          if (((b = !1), qe(w), !We))
            if (m(H) !== null) (We = !0), ze(be);
            else {
              var I = m(we);
              I !== null && ie(ke, I.startTime - w);
            }
        }
        function be(w, I) {
          (We = !1), b && ((b = !1), vt(Qe), (Qe = -1)), ($e = !0);
          var E = q;
          try {
            for (
              qe(I), K = m(H);
              K !== null && (!(K.expirationTime > I) || (w && !Yt()));

            ) {
              var c = K.callback;
              if (typeof c == "function") {
                (K.callback = null), (q = K.priorityLevel);
                var g = c(K.expirationTime <= I);
                (I = T.unstable_now()),
                  typeof g == "function"
                    ? (K.callback = g)
                    : K === m(H) && fe(H),
                  qe(I);
              } else fe(H);
              K = m(H);
            }
            if (K !== null) var R = !0;
            else {
              var F = m(we);
              F !== null && ie(ke, F.startTime - I), (R = !1);
            }
            return R;
          } finally {
            (K = null), (q = E), ($e = !1);
          }
        }
        var Ne = !1,
          je = null,
          Qe = -1,
          Tt = 5,
          yt = -1;
        function Yt() {
          return !(T.unstable_now() - yt < Tt);
        }
        function at() {
          if (je !== null) {
            var w = T.unstable_now();
            yt = w;
            var I = !0;
            try {
              I = je(!0, w);
            } finally {
              I ? Fe() : ((Ne = !1), (je = null));
            }
          } else Ne = !1;
        }
        var Fe;
        if (typeof st == "function")
          Fe = function () {
            st(at);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            ct = et.port2;
          (et.port1.onmessage = at),
            (Fe = function () {
              ct.postMessage(null);
            });
        } else
          Fe = function () {
            Y(at, 0);
          };
        function ze(w) {
          (je = w), Ne || ((Ne = !0), Fe());
        }
        function ie(w, I) {
          Qe = Y(function () {
            w(T.unstable_now());
          }, I);
        }
        (T.unstable_IdlePriority = 5),
          (T.unstable_ImmediatePriority = 1),
          (T.unstable_LowPriority = 4),
          (T.unstable_NormalPriority = 3),
          (T.unstable_Profiling = null),
          (T.unstable_UserBlockingPriority = 2),
          (T.unstable_cancelCallback = function (w) {
            w.callback = null;
          }),
          (T.unstable_continueExecution = function () {
            We || $e || ((We = !0), ze(be));
          }),
          (T.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Tt = 0 < w ? Math.floor(1e3 / w) : 5);
          }),
          (T.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (T.unstable_getFirstCallbackNode = function () {
            return m(H);
          }),
          (T.unstable_next = function (w) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = q;
            }
            var E = q;
            q = I;
            try {
              return w();
            } finally {
              q = E;
            }
          }),
          (T.unstable_pauseExecution = function () {}),
          (T.unstable_requestPaint = function () {}),
          (T.unstable_runWithPriority = function (w, I) {
            switch (w) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                w = 3;
            }
            var E = q;
            q = w;
            try {
              return I();
            } finally {
              q = E;
            }
          }),
          (T.unstable_scheduleCallback = function (w, I, E) {
            var c = T.unstable_now();
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay),
                  (E = typeof E == "number" && 0 < E ? c + E : c))
                : (E = c),
              w)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = E + g),
              (w = {
                id: le++,
                callback: I,
                priorityLevel: w,
                startTime: E,
                expirationTime: g,
                sortIndex: -1,
              }),
              E > c
                ? ((w.sortIndex = E),
                  D(we, w),
                  m(H) === null &&
                    w === m(we) &&
                    (b ? (vt(Qe), (Qe = -1)) : (b = !0), ie(ke, E - c)))
                : ((w.sortIndex = g), D(H, w), We || $e || ((We = !0), ze(be))),
              w
            );
          }),
          (T.unstable_shouldYield = Yt),
          (T.unstable_wrapCallback = function (w) {
            var I = q;
            return function () {
              var E = q;
              q = I;
              try {
                return w.apply(this, arguments);
              } finally {
                q = E;
              }
            };
          });
      })(Po)),
    Po
  );
}
var Ia;
function Vf() {
  return Ia || ((Ia = 1), (To.exports = Af())), To.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Bf() {
  if (Ma) return De;
  Ma = 1;
  var T = Io(),
    D = Vf();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var fe = new Set(),
    L = {};
  function Q(e, t) {
    ae(e, t), ae(e + "Capture", t);
  }
  function ae(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) fe.add(t[e]);
  }
  var de = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    H = Object.prototype.hasOwnProperty,
    we =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    le = {},
    K = {};
  function q(e) {
    return H.call(K, e)
      ? !0
      : H.call(le, e)
      ? !1
      : we.test(e)
      ? (K[e] = !0)
      : ((le[e] = !0), !1);
  }
  function $e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, t, n, r) {
    if (t === null || typeof t > "u" || $e(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Y[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Y[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(vt, st);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(vt, st);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(vt, st);
      Y[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function qe(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (We(t, n, l, r) && (n = null),
      r || l === null
        ? q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ke = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    je = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Tt = Symbol.for("react.profiler"),
    yt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ct = Symbol.for("react.memo"),
    ze = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    w = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (w && e[w]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var E = Object.assign,
    c;
  function g(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var R = !1;
  function F(e, t) {
    if (!e || R) return "";
    R = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (R = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = F(e.type, !1)), e;
      case 11:
        return (e = F(e.type.render, !1)), e;
      case 1:
        return (e = F(e.type, !0)), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case Ne:
        return "Portal";
      case Tt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case yt:
          return (e._context.displayName || "Context") + ".Provider";
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ct:
          return (
            (t = e.displayName || null), t !== null ? t : V(e.type) || "Memo"
          );
        case ze:
          (t = e._payload), (e = e._init);
          try {
            return V(e(t));
          } catch {}
      }
    return null;
  }
  function G(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ue(e) {
    var t = ee(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Mo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function wr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zl(e, t) {
    var n = t.checked;
    return E({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Lo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = $(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Ro(e, t) {
    (t = t.checked), t != null && qe(e, "checked", t, !1);
  }
  function Il(e, t) {
    Ro(e, t);
    var n = $(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, $(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Oo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || wr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ln = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + $(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ll(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return E({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Do(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Ln(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: $(n) };
  }
  function Fo(e, t) {
    var n = $(t.value),
      r = $(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Uo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ao(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ao(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var kr,
    Vo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Rn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ua = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function (e) {
    Ua.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
    });
  });
  function Bo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bo(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Aa = E(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ol(e, t) {
    if (t) {
      if (Aa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Dl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    an = null,
    cn = null;
  function $o(e) {
    if ((e = rr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Wr(t)), Al(e.stateNode, e.type, t));
    }
  }
  function Wo(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Qo() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), $o(e), t)) for (e = 0; e < t.length; e++) $o(t[e]);
    }
  }
  function Ko(e, t) {
    return e(t);
  }
  function Yo() {}
  var Vl = !1;
  function Go(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Ko(e, t, n);
    } finally {
      (Vl = !1), (an !== null || cn !== null) && (Yo(), Qo());
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (de)
    try {
      var Fn = {};
      Object.defineProperty(Fn, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Fn, Fn),
        window.removeEventListener("test", Fn, Fn);
    } catch {
      Bl = !1;
    }
  function Va(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (v) {
      this.onError(v);
    }
  }
  var Un = !1,
    xr = null,
    Er = !1,
    Hl = null,
    Ba = {
      onError: function (e) {
        (Un = !0), (xr = e);
      },
    };
  function Ha(e, t, n, r, l, i, o, u, s) {
    (Un = !1), (xr = null), Va.apply(Ba, arguments);
  }
  function $a(e, t, n, r, l, i, o, u, s) {
    if ((Ha.apply(this, arguments), Un)) {
      if (Un) {
        var p = xr;
        (Un = !1), (xr = null);
      } else throw Error(m(198));
      Er || ((Er = !0), (Hl = p));
    }
  }
  function Gt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Jo(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function Wa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Jo(l), e;
          if (i === r) return Jo(l), t;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              (o = !0), (n = i), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = i), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return (e = Wa(e)), e !== null ? qo(e) : null;
  }
  function qo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bo = D.unstable_scheduleCallback,
    eu = D.unstable_cancelCallback,
    Qa = D.unstable_shouldYield,
    Ka = D.unstable_requestPaint,
    ue = D.unstable_now,
    Ya = D.unstable_getCurrentPriorityLevel,
    $l = D.unstable_ImmediatePriority,
    tu = D.unstable_UserBlockingPriority,
    _r = D.unstable_NormalPriority,
    Ga = D.unstable_LowPriority,
    nu = D.unstable_IdlePriority,
    Cr = null,
    ft = null;
  function Xa(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : qa,
    Ja = Math.log,
    Za = Math.LN2;
  function qa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ja(e) / Za) | 0)) | 0;
  }
  var Nr = 64,
    Tr = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = An(u)) : ((i &= o), i !== 0 && (r = An(i)));
    } else (o = n & ~l), o !== 0 ? (r = An(o)) : i !== 0 && (r = An(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function ba(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ec(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - tt(i),
        u = 1 << o,
        s = l[o];
      s === -1
        ? (!(u & n) || u & r) && (l[o] = ba(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u);
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ru() {
    var e = Nr;
    return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
  }
  function Ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n);
  }
  function tc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var W = 0;
  function lu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var iu,
    Yl,
    ou,
    uu,
    su,
    Gl = !1,
    jr = [],
    Pt = null,
    jt = null,
    zt = null,
    Bn = new Map(),
    Hn = new Map(),
    It = [],
    nc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Pt = $n(Pt, e, t, n, r, l)), !0;
      case "dragenter":
        return (jt = $n(jt, e, t, n, r, l)), !0;
      case "mouseover":
        return (zt = $n(zt, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Bn.set(i, $n(Bn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function cu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xo(n)), t !== null)) {
            (e.blockedOn = t),
              su(e.priority, function () {
                ou(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Fl = r), n.target.dispatchEvent(r), (Fl = null);
      } else return (t = rr(n)), t !== null && Yl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function fu(e, t, n) {
    zr(e) && n.delete(t);
  }
  function lc() {
    (Gl = !1),
      Pt !== null && zr(Pt) && (Pt = null),
      jt !== null && zr(jt) && (jt = null),
      zt !== null && zr(zt) && (zt = null),
      Bn.forEach(fu),
      Hn.forEach(fu);
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl ||
        ((Gl = !0),
        D.unstable_scheduleCallback(D.unstable_NormalPriority, lc)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < jr.length) {
      Wn(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Wn(Pt, e),
        jt !== null && Wn(jt, e),
        zt !== null && Wn(zt, e),
        Bn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < It.length;
      n++
    )
      (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
      cu(n), n.blockedOn === null && It.shift();
  }
  var fn = ke.ReactCurrentBatchConfig,
    Ir = !0;
  function ic(e, t, n, r) {
    var l = W,
      i = fn.transition;
    fn.transition = null;
    try {
      (W = 1), Xl(e, t, n, r);
    } finally {
      (W = l), (fn.transition = i);
    }
  }
  function oc(e, t, n, r) {
    var l = W,
      i = fn.transition;
    fn.transition = null;
    try {
      (W = 4), Xl(e, t, n, r);
    } finally {
      (W = l), (fn.transition = i);
    }
  }
  function Xl(e, t, n, r) {
    if (Ir) {
      var l = Jl(e, t, n, r);
      if (l === null) pi(e, t, r, Mr, n), au(e, r);
      else if (rc(l, e, t, n, r)) r.stopPropagation();
      else if ((au(e, r), t & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null; ) {
          var i = rr(l);
          if (
            (i !== null && iu(i),
            (i = Jl(e, t, n, r)),
            i === null && pi(e, t, r, Mr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else pi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (((Mr = null), (e = Ul(r)), (e = Xt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Mr = e), null;
  }
  function du(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ya()) {
          case $l:
            return 1;
          case tu:
            return 4;
          case _r:
          case Ga:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    Zl = null,
    Lr = null;
  function pu() {
    if (Lr) return Lr;
    var e,
      t = Zl,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Lr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Rr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Or() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, i, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Or
          : mu),
        (this.isPropagationStopped = mu),
        this
      );
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Or));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Or));
        },
        persist: function () {},
        isPersistent: Or,
      }),
      t
    );
  }
  var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ae(dn),
    Kn = E({}, dn, { view: 0, detail: 0 }),
    uc = Ae(Kn),
    bl,
    ei,
    Yn,
    Dr = E({}, Kn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ni,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((bl = e.screenX - Yn.screenX), (ei = e.screenY - Yn.screenY))
                : (ei = bl = 0),
              (Yn = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ei;
      },
    }),
    hu = Ae(Dr),
    sc = E({}, Dr, { dataTransfer: 0 }),
    ac = Ae(sc),
    cc = E({}, Kn, { relatedTarget: 0 }),
    ti = Ae(cc),
    fc = E({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = Ae(fc),
    pc = E({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mc = Ae(pc),
    hc = E({}, dn, { data: 0 }),
    gu = Ae(hc),
    gc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    vc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    yc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Sc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = yc[e])
      ? !!t[e]
      : !1;
  }
  function ni() {
    return Sc;
  }
  var wc = E({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = gc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? vc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ni,
      charCode: function (e) {
        return e.type === "keypress" ? Rr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Rr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    kc = Ae(wc),
    xc = E({}, Dr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vu = Ae(xc),
    Ec = E({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ni,
    }),
    _c = Ae(Ec),
    Cc = E({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Ae(Cc),
    Tc = E({}, Dr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pc = Ae(Tc),
    jc = [9, 13, 27, 32],
    ri = de && "CompositionEvent" in window,
    Gn = null;
  de && "documentMode" in document && (Gn = document.documentMode);
  var zc = de && "TextEvent" in window && !Gn,
    yu = de && (!ri || (Gn && 8 < Gn && 11 >= Gn)),
    Su = " ",
    wu = !1;
  function ku(e, t) {
    switch (e) {
      case "keyup":
        return jc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return xu(t);
      case "keypress":
        return t.which !== 32 ? null : ((wu = !0), Su);
      case "textInput":
        return (e = t.data), e === Su && wu ? null : e;
      default:
        return null;
    }
  }
  function Mc(e, t) {
    if (pn)
      return e === "compositionend" || (!ri && ku(e, t))
        ? ((e = pu()), (Lr = Zl = Mt = null), (pn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Lc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Lc[e.type] : t === "textarea";
  }
  function _u(e, t, n, r) {
    Wo(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new ql("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Xn = null,
    Jn = null;
  function Rc(e) {
    Hu(e, 0);
  }
  function Fr(e) {
    var t = yn(e);
    if (Mo(t)) return e;
  }
  function Oc(e, t) {
    if (e === "change") return t;
  }
  var Cu = !1;
  if (de) {
    var li;
    if (de) {
      var ii = "oninput" in document;
      if (!ii) {
        var Nu = document.createElement("div");
        Nu.setAttribute("oninput", "return;"),
          (ii = typeof Nu.oninput == "function");
      }
      li = ii;
    } else li = !1;
    Cu = li && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    Xn && (Xn.detachEvent("onpropertychange", Pu), (Jn = Xn = null));
  }
  function Pu(e) {
    if (e.propertyName === "value" && Fr(Jn)) {
      var t = [];
      _u(t, Jn, e, Ul(e)), Go(Rc, t);
    }
  }
  function Dc(e, t, n) {
    e === "focusin"
      ? (Tu(), (Xn = t), (Jn = n), Xn.attachEvent("onpropertychange", Pu))
      : e === "focusout" && Tu();
  }
  function Fc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fr(Jn);
  }
  function Uc(e, t) {
    if (e === "click") return Fr(t);
  }
  function Ac(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function Vc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Vc;
  function Zn(e, t) {
    if (nt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!H.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zu(e, t) {
    var n = ju(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ju(n);
    }
  }
  function Iu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Iu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Mu() {
    for (var e = window, t = wr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Bc(e) {
    var t = Mu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Iu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && oi(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = zu(n, i));
          var o = zu(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Hc = de && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ui = null,
    qn = null,
    si = !1;
  function Lu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    si ||
      mn == null ||
      mn !== wr(r) ||
      ((r = mn),
      "selectionStart" in r && oi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qn && Zn(qn, r)) ||
        ((qn = r),
        (r = Br(ui, "onSelect")),
        0 < r.length &&
          ((t = new ql("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    ai = {},
    Ru = {};
  de &&
    ((Ru = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (ai[e]) return ai[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ru) return (ai[e] = t[n]);
    return e;
  }
  var Ou = Ar("animationend"),
    Du = Ar("animationiteration"),
    Fu = Ar("animationstart"),
    Uu = Ar("transitionend"),
    Au = new Map(),
    Vu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Lt(e, t) {
    Au.set(e, t), Q(t, [e]);
  }
  for (var ci = 0; ci < Vu.length; ci++) {
    var fi = Vu[ci],
      $c = fi.toLowerCase(),
      Wc = fi[0].toUpperCase() + fi.slice(1);
    Lt($c, "on" + Wc);
  }
  Lt(Ou, "onAnimationEnd"),
    Lt(Du, "onAnimationIteration"),
    Lt(Fu, "onAnimationStart"),
    Lt("dblclick", "onDoubleClick"),
    Lt("focusin", "onFocus"),
    Lt("focusout", "onBlur"),
    Lt(Uu, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
    Q(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Q(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Q(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Q(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Q(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Qc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bn)
    );
  function Bu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), $a(r, t, void 0, e), (e.currentTarget = null);
  }
  function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              p = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped()))
              break e;
            Bu(l, u, p), (i = s);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (p = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            Bu(l, u, p), (i = s);
          }
      }
    }
    if (Er) throw ((e = Hl), (Er = !1), (Hl = null), e);
  }
  function J(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($u(t, e, 2, !1), n.add(r));
  }
  function di(e, t, n) {
    var r = 0;
    t && (r |= 4), $u(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      (e[Vr] = !0),
        fe.forEach(function (n) {
          n !== "selectionchange" && (Qc.has(n) || di(n, !1, e), di(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), di("selectionchange", !1, t));
    }
  }
  function $u(e, t, n, r) {
    switch (du(t)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = oc;
        break;
      default:
        l = Xl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Bl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function pi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Xt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Go(function () {
      var p = i,
        v = Ul(n),
        y = [];
      e: {
        var h = Au.get(e);
        if (h !== void 0) {
          var k = ql,
            _ = e;
          switch (e) {
            case "keypress":
              if (Rr(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = kc;
              break;
            case "focusin":
              (_ = "focus"), (k = ti);
              break;
            case "focusout":
              (_ = "blur"), (k = ti);
              break;
            case "beforeblur":
            case "afterblur":
              k = ti;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = _c;
              break;
            case Ou:
            case Du:
            case Fu:
              k = dc;
              break;
            case Uu:
              k = Nc;
              break;
            case "scroll":
              k = uc;
              break;
            case "wheel":
              k = Pc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = vu;
          }
          var C = (t & 4) !== 0,
            se = !C && e === "scroll",
            f = C ? (h !== null ? h + "Capture" : null) : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (
              (d.tag === 5 &&
                S !== null &&
                ((d = S),
                f !== null &&
                  ((S = Dn(a, f)), S != null && C.push(tr(a, S, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((h = new k(h, _, null, n, v)), y.push({ event: h, listeners: C }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Fl &&
              (_ = n.relatedTarget || n.fromElement) &&
              (Xt(_) || _[St]))
          )
            break e;
          if (
            (k || h) &&
            ((h =
              v.window === v
                ? v
                : (h = v.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            k
              ? ((_ = n.relatedTarget || n.toElement),
                (k = p),
                (_ = _ ? Xt(_) : null),
                _ !== null &&
                  ((se = Gt(_)), _ !== se || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((k = null), (_ = p)),
            k !== _)
          ) {
            if (
              ((C = hu),
              (S = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = vu),
                (S = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (se = k == null ? h : yn(k)),
              (d = _ == null ? h : yn(_)),
              (h = new C(S, a + "leave", k, n, v)),
              (h.target = se),
              (h.relatedTarget = d),
              (S = null),
              Xt(v) === p &&
                ((C = new C(f, a + "enter", _, n, v)),
                (C.target = d),
                (C.relatedTarget = se),
                (S = C)),
              (se = S),
              k && _)
            )
              t: {
                for (C = k, f = _, a = 0, d = C; d; d = gn(d)) a++;
                for (d = 0, S = f; S; S = gn(S)) d++;
                for (; 0 < a - d; ) (C = gn(C)), a--;
                for (; 0 < d - a; ) (f = gn(f)), d--;
                for (; a--; ) {
                  if (C === f || (f !== null && C === f.alternate)) break t;
                  (C = gn(C)), (f = gn(f));
                }
                C = null;
              }
            else C = null;
            k !== null && Wu(y, h, k, C, !1),
              _ !== null && se !== null && Wu(y, se, _, C, !0);
          }
        }
        e: {
          if (
            ((h = p ? yn(p) : window),
            (k = h.nodeName && h.nodeName.toLowerCase()),
            k === "select" || (k === "input" && h.type === "file"))
          )
            var N = Oc;
          else if (Eu(h))
            if (Cu) N = Ac;
            else {
              N = Fc;
              var j = Dc;
            }
          else
            (k = h.nodeName) &&
              k.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (N = Uc);
          if (N && (N = N(e, p))) {
            _u(y, N, n, v);
            break e;
          }
          j && j(e, h, p),
            e === "focusout" &&
              (j = h._wrapperState) &&
              j.controlled &&
              h.type === "number" &&
              Ml(h, "number", h.value);
        }
        switch (((j = p ? yn(p) : window), e)) {
          case "focusin":
            (Eu(j) || j.contentEditable === "true") &&
              ((mn = j), (ui = p), (qn = null));
            break;
          case "focusout":
            qn = ui = mn = null;
            break;
          case "mousedown":
            si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (si = !1), Lu(y, n, v);
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Lu(y, n, v);
        }
        var z;
        if (ri)
          e: {
            switch (e) {
              case "compositionstart":
                var M = "onCompositionStart";
                break e;
              case "compositionend":
                M = "onCompositionEnd";
                break e;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break e;
            }
            M = void 0;
          }
        else
          pn
            ? ku(e, n) && (M = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (M = "onCompositionStart");
        M &&
          (yu &&
            n.locale !== "ko" &&
            (pn || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && pn && (z = pu())
              : ((Mt = v),
                (Zl = "value" in Mt ? Mt.value : Mt.textContent),
                (pn = !0))),
          (j = Br(p, M)),
          0 < j.length &&
            ((M = new gu(M, e, null, n, v)),
            y.push({ event: M, listeners: j }),
            z ? (M.data = z) : ((z = xu(n)), z !== null && (M.data = z)))),
          (z = zc ? Ic(e, n) : Mc(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((v = new gu("onBeforeInput", "beforeinput", null, n, v)),
              y.push({ event: v, listeners: p }),
              (v.data = z)));
      }
      Hu(y, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Dn(e, n)),
        i != null && r.unshift(tr(e, i, l)),
        (i = Dn(e, t)),
        i != null && r.push(tr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = Dn(n, i)), s != null && o.unshift(tr(n, s, u)))
          : l || ((s = Dn(n, i)), s != null && o.push(tr(n, s, u)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Kc = /\r\n?/g,
    Yc = /\u0000|\uFFFD/g;
  function Qu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Kc,
        `
`
      )
      .replace(Yc, "");
  }
  function Hr(e, t, n) {
    if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
  var mi = null,
    hi = null;
  function gi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vi = typeof setTimeout == "function" ? setTimeout : void 0,
    Gc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ku = typeof Promise == "function" ? Promise : void 0,
    Xc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ku < "u"
        ? function (e) {
            return Ku.resolve(null).then(e).catch(Jc);
          }
        : vi;
  function Jc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function yi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Qn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Rt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vn = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + vn,
    nr = "__reactProps$" + vn,
    St = "__reactContainer$" + vn,
    Si = "__reactEvents$" + vn,
    Zc = "__reactListeners$" + vn,
    qc = "__reactHandles$" + vn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[dt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Yu(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = Yu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[dt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var wi = [],
    Sn = -1;
  function Ot(e) {
    return { current: e };
  }
  function Z(e) {
    0 > Sn || ((e.current = wi[Sn]), (wi[Sn] = null), Sn--);
  }
  function X(e, t) {
    Sn++, (wi[Sn] = e.current), (e.current = t);
  }
  var Dt = {},
    xe = Ot(Dt),
    Ie = Ot(!1),
    Jt = Dt;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Me(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Qr() {
    Z(Ie), Z(xe);
  }
  function Gu(e, t, n) {
    if (xe.current !== Dt) throw Error(m(168));
    X(xe, t), X(Ie, n);
  }
  function Xu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, G(e) || "Unknown", l));
    return E({}, n, r);
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dt),
      (Jt = xe.current),
      X(xe, e),
      X(Ie, Ie.current),
      !0
    );
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n
      ? ((e = Xu(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Ie),
        Z(xe),
        X(xe, e))
      : Z(Ie),
      X(Ie, n);
  }
  var wt = null,
    Yr = !1,
    ki = !1;
  function Zu(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function bc(e) {
    (Yr = !0), Zu(e);
  }
  function Ft() {
    if (!ki && wt !== null) {
      ki = !0;
      var e = 0,
        t = W;
      try {
        var n = wt;
        for (W = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (wt = null), (Yr = !1);
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), bo($l, Ft), l);
      } finally {
        (W = t), (ki = !1);
      }
    }
    return null;
  }
  var kn = [],
    xn = 0,
    Gr = null,
    Xr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    kt = 1,
    xt = "";
  function qt(e, t) {
    (kn[xn++] = Xr), (kn[xn++] = Gr), (Gr = e), (Xr = t);
  }
  function qu(e, t, n) {
    (Ke[Ye++] = kt), (Ke[Ye++] = xt), (Ke[Ye++] = Zt), (Zt = e);
    var r = kt;
    e = xt;
    var l = 32 - tt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (kt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (xt = i + e);
    } else (kt = (1 << i) | (n << l) | r), (xt = e);
  }
  function xi(e) {
    e.return !== null && (qt(e, 1), qu(e, 1, 0));
  }
  function Ei(e) {
    for (; e === Gr; )
      (Gr = kn[--xn]), (kn[xn] = null), (Xr = kn[--xn]), (kn[xn] = null);
    for (; e === Zt; )
      (Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (xt = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null);
  }
  var Ve = null,
    Be = null,
    te = !1,
    rt = null;
  function bu(e, t) {
    var n = Ze(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function es(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ve = e), (Be = Rt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: kt, overflow: xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ze(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ci(e) {
    if (te) {
      var t = Be;
      if (t) {
        var n = t;
        if (!es(e, t)) {
          if (_i(e)) throw Error(m(418));
          t = Rt(n.nextSibling);
          var r = Ve;
          t && es(e, t)
            ? bu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
        }
      } else {
        if (_i(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e);
      }
    }
  }
  function ts(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ve = e;
  }
  function Jr(e) {
    if (e !== Ve) return !1;
    if (!te) return ts(e), (te = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (_i(e)) throw (ns(), Error(m(418)));
      for (; t; ) bu(e, t), (t = Rt(t.nextSibling));
    }
    if ((ts(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Rt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ve ? Rt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = Be; e; ) e = Rt(e.nextSibling);
  }
  function En() {
    (Be = Ve = null), (te = !1);
  }
  function Ni(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var ef = ke.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function rs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ls(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Qt(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, S) {
      return a === null || a.tag !== 6
        ? ((a = yo(d, f.mode, S)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, S) {
      var N = d.type;
      return N === je
        ? v(f, a, d.props.children, S, d.key)
        : a !== null &&
          (a.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === ze &&
              rs(N) === a.type))
        ? ((S = l(a, d.props)), (S.ref = lr(f, a, d)), (S.return = f), S)
        : ((S = kl(d.type, d.key, d.props, null, f.mode, S)),
          (S.ref = lr(f, a, d)),
          (S.return = f),
          S);
    }
    function p(f, a, d, S) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = So(d, f.mode, S)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, S, N) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, S, N)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function y(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = yo("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return (a = So(a, f.mode, d)), (a.return = f), a;
          case ze:
            var S = a._init;
            return y(f, S(a._payload), d);
        }
        if (Ln(a) || I(a))
          return (a = un(a, f.mode, d, null)), (a.return = f), a;
        Zr(f, a);
      }
      return null;
    }
    function h(f, a, d, S) {
      var N = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return N !== null ? null : u(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(f, a, d, S) : null;
          case Ne:
            return d.key === N ? p(f, a, d, S) : null;
          case ze:
            return (N = d._init), h(f, a, N(d._payload), S);
        }
        if (Ln(d) || I(d)) return N !== null ? null : v(f, a, d, S, null);
        Zr(f, d);
      }
      return null;
    }
    function k(f, a, d, S, N) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (f = f.get(d) || null), u(a, f, "" + S, N);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case be:
            return (
              (f = f.get(S.key === null ? d : S.key) || null), s(a, f, S, N)
            );
          case Ne:
            return (
              (f = f.get(S.key === null ? d : S.key) || null), p(a, f, S, N)
            );
          case ze:
            var j = S._init;
            return k(f, a, d, j(S._payload), N);
        }
        if (Ln(S) || I(S)) return (f = f.get(d) || null), v(a, f, S, N, null);
        Zr(a, S);
      }
      return null;
    }
    function _(f, a, d, S) {
      for (
        var N = null, j = null, z = a, M = (a = 0), ve = null;
        z !== null && M < d.length;
        M++
      ) {
        z.index > M ? ((ve = z), (z = null)) : (ve = z.sibling);
        var B = h(f, z, d[M], S);
        if (B === null) {
          z === null && (z = ve);
          break;
        }
        e && z && B.alternate === null && t(f, z),
          (a = i(B, a, M)),
          j === null ? (N = B) : (j.sibling = B),
          (j = B),
          (z = ve);
      }
      if (M === d.length) return n(f, z), te && qt(f, M), N;
      if (z === null) {
        for (; M < d.length; M++)
          (z = y(f, d[M], S)),
            z !== null &&
              ((a = i(z, a, M)),
              j === null ? (N = z) : (j.sibling = z),
              (j = z));
        return te && qt(f, M), N;
      }
      for (z = r(f, z); M < d.length; M++)
        (ve = k(z, f, M, d[M], S)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              z.delete(ve.key === null ? M : ve.key),
            (a = i(ve, a, M)),
            j === null ? (N = ve) : (j.sibling = ve),
            (j = ve));
      return (
        e &&
          z.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, M),
        N
      );
    }
    function C(f, a, d, S) {
      var N = I(d);
      if (typeof N != "function") throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var j = (N = null), z = a, M = (a = 0), ve = null, B = d.next();
        z !== null && !B.done;
        M++, B = d.next()
      ) {
        z.index > M ? ((ve = z), (z = null)) : (ve = z.sibling);
        var Kt = h(f, z, B.value, S);
        if (Kt === null) {
          z === null && (z = ve);
          break;
        }
        e && z && Kt.alternate === null && t(f, z),
          (a = i(Kt, a, M)),
          j === null ? (N = Kt) : (j.sibling = Kt),
          (j = Kt),
          (z = ve);
      }
      if (B.done) return n(f, z), te && qt(f, M), N;
      if (z === null) {
        for (; !B.done; M++, B = d.next())
          (B = y(f, B.value, S)),
            B !== null &&
              ((a = i(B, a, M)),
              j === null ? (N = B) : (j.sibling = B),
              (j = B));
        return te && qt(f, M), N;
      }
      for (z = r(f, z); !B.done; M++, B = d.next())
        (B = k(z, f, M, B.value, S)),
          B !== null &&
            (e && B.alternate !== null && z.delete(B.key === null ? M : B.key),
            (a = i(B, a, M)),
            j === null ? (N = B) : (j.sibling = B),
            (j = B));
      return (
        e &&
          z.forEach(function (Rf) {
            return t(f, Rf);
          }),
        te && qt(f, M),
        N
      );
    }
    function se(f, a, d, S) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === je &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var N = d.key, j = a; j !== null; ) {
                if (j.key === N) {
                  if (((N = d.type), N === je)) {
                    if (j.tag === 7) {
                      n(f, j.sibling),
                        (a = l(j, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    j.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === ze &&
                      rs(N) === j.type)
                  ) {
                    n(f, j.sibling),
                      (a = l(j, d.props)),
                      (a.ref = lr(f, j, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, j);
                  break;
                } else t(f, j);
                j = j.sibling;
              }
              d.type === je
                ? ((a = un(d.props.children, f.mode, S, d.key)),
                  (a.return = f),
                  (f = a))
                : ((S = kl(d.type, d.key, d.props, null, f.mode, S)),
                  (S.ref = lr(f, a, d)),
                  (S.return = f),
                  (f = S));
            }
            return o(f);
          case Ne:
            e: {
              for (j = d.key; a !== null; ) {
                if (a.key === j)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    n(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              (a = So(d, f.mode, S)), (a.return = f), (f = a);
            }
            return o(f);
          case ze:
            return (j = d._init), se(f, a, j(d._payload), S);
        }
        if (Ln(d)) return _(f, a, d, S);
        if (I(d)) return C(f, a, d, S);
        Zr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = yo(d, f.mode, S)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return se;
  }
  var _n = ls(!0),
    is = ls(!1),
    qr = Ot(null),
    br = null,
    Cn = null,
    Ti = null;
  function Pi() {
    Ti = Cn = br = null;
  }
  function ji(e) {
    var t = qr.current;
    Z(qr), (e._currentValue = t);
  }
  function zi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    (br = e),
      (Ti = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Le = !0), (e.firstContext = null));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Ti !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (br === null) throw Error(m(308));
        (Cn = e), (br.dependencies = { lanes: 0, firstContext: e });
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Ii(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ii(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Mi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function _t(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), U & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ii(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function el(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  function ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      (s.next = null), o === null ? (i = p) : (o.next = p), (o = s);
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (u = v.lastBaseUpdate),
        u !== o &&
          (u === null ? (v.firstBaseUpdate = p) : (u.next = p),
          (v.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var y = l.baseState;
      (o = 0), (v = p = s = null), (u = i);
      do {
        var h = u.lane,
          k = u.eventTime;
        if ((r & h) === h) {
          v !== null &&
            (v = v.next =
              {
                eventTime: k,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var _ = e,
              C = u;
            switch (((h = t), (k = n), C.tag)) {
              case 1:
                if (((_ = C.payload), typeof _ == "function")) {
                  y = _.call(k, y, h);
                  break e;
                }
                y = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = C.payload),
                  (h = typeof _ == "function" ? _.call(k, y, h) : _),
                  h == null)
                )
                  break e;
                y = E({}, y, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [u]) : h.push(u));
        } else
          (k = {
            eventTime: k,
            lane: h,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            v === null ? ((p = v = k), (s = y)) : (v = v.next = k),
            (o |= h);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (h = u),
            (u = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (v === null && (s = y),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = v),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (nn |= o), (e.lanes = o), (e.memoizedState = y);
    }
  }
  function as(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ir = {},
    pt = Ot(ir),
    or = Ot(ir),
    ur = Ot(ir);
  function en(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Li(e, t) {
    switch ((X(ur, t), X(or, e), X(pt, ir), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rl(t, e));
    }
    Z(pt), X(pt, t);
  }
  function Tn() {
    Z(pt), Z(or), Z(ur);
  }
  function cs(e) {
    en(ur.current);
    var t = en(pt.current),
      n = Rl(t, e.type);
    t !== n && (X(or, e), X(pt, n));
  }
  function Ri(e) {
    or.current === e && (Z(pt), Z(or));
  }
  var ne = Ot(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Oi = [];
  function Di() {
    for (var e = 0; e < Oi.length; e++)
      Oi[e]._workInProgressVersionPrimary = null;
    Oi.length = 0;
  }
  var rl = ke.ReactCurrentDispatcher,
    Fi = ke.ReactCurrentBatchConfig,
    tn = 0,
    re = null,
    pe = null,
    he = null,
    ll = !1,
    sr = !1,
    ar = 0,
    tf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Ai(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? of : uf),
      (e = n(r, l)),
      sr)
    ) {
      i = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= i)) throw Error(m(301));
        (i += 1),
          (he = pe = null),
          (t.updateQueue = null),
          (rl.current = sf),
          (e = n(r, l));
      } while (sr);
    }
    if (
      ((rl.current = ul),
      (t = pe !== null && pe.next !== null),
      (tn = 0),
      (he = pe = re = null),
      (ll = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vi() {
    var e = ar !== 0;
    return (ar = 0), e;
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return he === null ? (re.memoizedState = he = e) : (he = he.next = e), he;
  }
  function Xe() {
    if (pe === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null) (he = t), (pe = e);
    else {
      if (e === null) throw Error(m(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        he === null ? (re.memoizedState = he = e) : (he = he.next = e);
    }
    return he;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = pe,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var u = (o = null),
        s = null,
        p = i;
      do {
        var v = p.lane;
        if ((tn & v) === v)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var y = {
            lane: v,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((u = s = y), (o = r)) : (s = s.next = y),
            (re.lanes |= v),
            (nn |= v);
        }
        p = p.next;
      } while (p !== null && p !== i);
      s === null ? (o = r) : (s.next = u),
        nt(r, t.memoizedState) || (Le = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (re.lanes |= i), (nn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== l);
      nt(i, t.memoizedState) || (Le = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function fs() {}
  function ds(e, t) {
    var n = re,
      r = Xe(),
      l = t(),
      i = !nt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Le = !0)),
      (r = r.queue),
      $i(hs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        fr(9, ms.bind(null, n, r, l, t), void 0, null),
        ge === null)
      )
        throw Error(m(349));
      tn & 30 || ps(n, t, l);
    }
    return l;
  }
  function ps(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (re.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ms(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), gs(t) && vs(e);
  }
  function hs(e, t, n) {
    return n(function () {
      gs(t) && vs(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = Et(e, 1);
    t !== null && ut(t, e, 1, -1);
  }
  function ys(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lf.bind(null, re, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ss() {
    return Xe().memoizedState;
  }
  function il(e, t, n, r) {
    var l = mt();
    (re.flags |= e),
      (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ol(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (pe !== null) {
      var o = pe.memoizedState;
      if (((i = o.destroy), r !== null && Ui(r, o.deps))) {
        l.memoizedState = fr(t, n, i, r);
        return;
      }
    }
    (re.flags |= e), (l.memoizedState = fr(1 | t, n, i, r));
  }
  function ws(e, t) {
    return il(8390656, 8, e, t);
  }
  function $i(e, t) {
    return ol(2048, 8, e, t);
  }
  function ks(e, t) {
    return ol(4, 2, e, t);
  }
  function xs(e, t) {
    return ol(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function _s(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ol(4, 4, Es.bind(null, t, e), n)
    );
  }
  function Wi() {}
  function Cs(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ns(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ts(e, t, n) {
    return tn & 21
      ? (nt(n, t) ||
          ((n = ru()), (re.lanes |= n), (nn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
  }
  function nf(e, t) {
    var n = W;
    (W = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Fi.transition;
    Fi.transition = {};
    try {
      e(!1), t();
    } finally {
      (W = n), (Fi.transition = r);
    }
  }
  function Ps() {
    return Xe().memoizedState;
  }
  function rf(e, t, n) {
    var r = $t(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      js(e))
    )
      zs(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = Pe();
      ut(n, e, r, l), Is(n, t, r);
    }
  }
  function lf(e, t, n) {
    var r = $t(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (js(e)) zs(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), nt(u, o))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), Ii(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = os(e, t, l, r)),
        n !== null && ((l = Pe()), ut(n, e, r, l), Is(n, t, r));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function zs(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Is(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  var ul = {
      readContext: Ge,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ge,
      useCallback: function (e, t) {
        return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ge,
      useEffect: ws,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          il(4194308, 4, Es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = mt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = mt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rf.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ys,
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return (e = nf.bind(null, e[1])), (mt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = re,
          l = mt();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(m(349));
          tn & 30 || ps(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          ws(hs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          fr(9, ms.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = ge.identifierPrefix;
        if (te) {
          var n = xt,
            r = kt;
          (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = tf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: $i,
      useImperativeHandle: _s,
      useInsertionEffect: ks,
      useLayoutEffect: xs,
      useMemo: Ns,
      useReducer: Bi,
      useRef: Ss,
      useState: function () {
        return Bi(cr);
      },
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        var t = Xe();
        return Ts(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Bi(cr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: $i,
      useImperativeHandle: _s,
      useInsertionEffect: ks,
      useLayoutEffect: xs,
      useMemo: Ns,
      useReducer: Hi,
      useRef: Ss,
      useState: function () {
        return Hi(cr);
      },
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        var t = Xe();
        return pe === null ? (t.memoizedState = e) : Ts(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(cr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      (t = E({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Qi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : E({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = $t(e),
        i = _t(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (ut(t, e, l, r), el(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = $t(e),
        i = _t(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (ut(t, e, l, r), el(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = $t(e),
        l = _t(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ut(t, e, r, n), el(t, e, r));
    },
  };
  function Ms(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Zn(n, r) || !Zn(l, i)
        : !0
    );
  }
  function Ls(e, t, n) {
    var r = !1,
      l = Dt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Me(t) ? Jt : xe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? wn(e, l) : Dt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Rs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Ki(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Me(t) ? Jt : xe.current), (l.context = wn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Qi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += A(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Yi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, t, n) {
    (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        hl || ((hl = !0), (ao = r)), Gi(e, t);
      }),
      n
    );
  }
  function Ds(e, t, n) {
    (n = _t(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Gi(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Gi(e, t),
            typeof r != "function" &&
              (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
  }
  function Us(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = _t(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var cf = ke.ReactCurrentOwner,
    Le = !1;
  function Te(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Nn(t, l),
      (r = Ai(e, t, n, r, i, l)),
      (n = Vi()),
      e !== null && !Le
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ct(e, t, l))
        : (te && n && xi(t), (t.flags |= 1), Te(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !vo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Hs(e, t, i, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Zn), n(o, r) && e.ref === t.ref)
      )
        return Ct(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Qt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Zn(i, r) && e.ref === t.ref)
        if (((Le = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Le = !0);
        else return (t.lanes = e.lanes), Ct(e, t, l);
    }
    return Xi(e, t, n, r, l);
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          X(zn, He),
          (He |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            X(zn, He),
            (He |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          X(zn, He),
          (He |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(zn, He),
        (He |= r);
    return Te(e, t, l, n), t.child;
  }
  function Ws(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Xi(e, t, n, r, l) {
    var i = Me(n) ? Jt : xe.current;
    return (
      (i = wn(t, i)),
      Nn(t, l),
      (n = Ai(e, t, n, r, i, l)),
      (r = Vi()),
      e !== null && !Le
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ct(e, t, l))
        : (te && r && xi(t), (t.flags |= 1), Te(e, t, n, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (Me(n)) {
      var i = !0;
      Kr(t);
    } else i = !1;
    if ((Nn(t, l), t.stateNode === null))
      cl(e, t), Ls(t, n, r), Ki(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = Me(n) ? Jt : xe.current), (p = wn(t, p)));
      var v = n.getDerivedStateFromProps,
        y =
          typeof v == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      y ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && Rs(t, o, r, p)),
        (Ut = !1);
      var h = t.memoizedState;
      (o.state = h),
        tl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || h !== s || Ie.current || Ut
          ? (typeof v == "function" && (Qi(t, n, v, r), (s = t.memoizedState)),
            (u = Ut || Ms(t, n, u, r, h, s, p))
              ? (y ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        us(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : lt(t.type, u)),
        (o.props = p),
        (y = t.pendingProps),
        (h = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Me(n) ? Jt : xe.current), (s = wn(t, s)));
      var k = n.getDerivedStateFromProps;
      (v =
        typeof k == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== y || h !== s) && Rs(t, o, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (o.state = h),
        tl(t, r, o, l);
      var _ = t.memoizedState;
      u !== y || h !== _ || Ie.current || Ut
        ? (typeof k == "function" && (Qi(t, n, k, r), (_ = t.memoizedState)),
          (p = Ut || Ms(t, n, p, r, h, _, s) || !1)
            ? (v ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, _, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, _, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (o.props = r),
          (o.state = _),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ji(e, t, n, r, i, l);
  }
  function Ji(e, t, n, r, l, i) {
    Ws(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ju(t, n, !1), Ct(e, t, i);
    (r = t.stateNode), (cf.current = t);
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, u, i)))
        : Te(e, t, u, i),
      (t.memoizedState = r.state),
      l && Ju(t, n, !0),
      t.child
    );
  }
  function Ks(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gu(e, t.context, !1),
      Li(e, t.containerInfo);
  }
  function Ys(e, t, n, r, l) {
    return En(), Ni(l), (t.flags |= 256), Te(e, t, n, r), t.child;
  }
  var Zi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = ne.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      X(ne, l & 1),
      e === null)
    )
      return (
        Ci(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = xl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = qi(n)),
                (t.memoizedState = Zi),
                e)
              : bi(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return ff(e, t, o, r, u, l, n);
    if (i) {
      (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Qt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? qi(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Zi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Qt(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function bi(e, t) {
    return (
      (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Ni(r),
      _n(t, e.child, null, n),
      (e = bi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yi(Error(m(422)))), al(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = un(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && _n(t, e.child, null, o),
          (t.child.memoizedState = qi(o)),
          (t.memoizedState = Zi),
          i);
    if (!(t.mode & 1)) return al(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (i = Error(m(419))), (r = Yi(i, r, void 0)), al(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Le || u)) {
      if (((r = ge), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Et(e, l), ut(r, e, l, -1));
      }
      return go(), (r = Yi(Error(m(421)))), al(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = _f.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Be = Rt(l.nextSibling)),
        (Ve = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = kt),
          (Ke[Ye++] = xt),
          (Ke[Ye++] = Zt),
          (kt = e.id),
          (xt = e.overflow),
          (Zt = t)),
        (t = bi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zi(e.return, t, n);
  }
  function eo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Te(e, t, r.children, n), (r = ne.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
          else if (e.tag === 19) Xs(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((X(ne, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && nl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            eo(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          eo(t, !0, n, null, i);
          break;
        case "together":
          eo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Qt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        Ks(t), En();
        break;
      case 5:
        cs(t);
        break;
      case 1:
        Me(t.type) && Kr(t);
        break;
      case 4:
        Li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        X(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(ne, ne.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Gs(e, t, n)
            : (X(ne, ne.current & 1),
              (e = Ct(e, t, n)),
              e !== null ? e.sibling : null);
        X(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), $s(e, t, n);
    }
    return Ct(e, t, n);
  }
  var Zs, to, qs, bs;
  (Zs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (to = function () {}),
    (qs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), en(pt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = zl(e, l)), (r = zl(e, r)), (i = []);
            break;
          case "select":
            (l = E({}, l, { value: void 0 })),
              (r = E({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Ll(e, l)), (r = Ll(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = $r);
        }
        Ol(n, r);
        var o;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var u = l[p];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (L.hasOwnProperty(p)
                  ? i || (i = [])
                  : (i = i || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((u = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== u && (s != null || u != null))
          )
            if (p === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s)
                  s.hasOwnProperty(o) &&
                    u[o] !== s[o] &&
                    (n || (n = {}), (n[o] = s[o]));
              } else n || (i || (i = []), i.push(p, n)), (n = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (i = i || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (L.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && J("scroll", e),
                      i || u === s || (i = []))
                    : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (bs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function dr(e, t) {
    if (!te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function pf(e, t, n) {
    var r = t.pendingProps;
    switch ((Ei(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return Me(t.type) && Qr(), _e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Tn(),
          Z(Ie),
          Z(xe),
          Di(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), rt !== null && (po(rt), (rt = null)))),
          to(e, t),
          _e(t),
          null
        );
      case 5:
        Ri(t);
        var l = en(ur.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          qs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return _e(t), null;
          }
          if (((e = en(pt.current)), Jr(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[dt] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                J("cancel", r), J("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) J(bn[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", r), J("load", r);
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                Lo(r, i), J("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  J("invalid", r);
                break;
              case "textarea":
                Do(r, i), J("invalid", r);
            }
            Ol(n, i), (l = null);
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : L.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    J("scroll", r);
              }
            switch (n) {
              case "input":
                Sr(r), Oo(r, i, !0);
                break;
              case "textarea":
                Sr(r), Uo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ao(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[dt] = t),
              (e[nr] = r),
              Zs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Dl(n, r)), n)) {
                case "dialog":
                  J("cancel", e), J("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  J("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) J(bn[l], e);
                  l = r;
                  break;
                case "source":
                  J("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  J("error", e), J("load", e), (l = r);
                  break;
                case "details":
                  J("toggle", e), (l = r);
                  break;
                case "input":
                  Lo(e, r), (l = zl(e, r)), J("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    J("invalid", e);
                  break;
                case "textarea":
                  Do(e, r), (l = Ll(e, r)), J("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ol(n, l), (u = l);
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Ho(e, s)
                    : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Vo(e, s))
                    : i === "children"
                    ? typeof s == "string"
                      ? (n !== "textarea" || s !== "") && Rn(e, s)
                      : typeof s == "number" && Rn(e, "" + s)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (L.hasOwnProperty(i)
                        ? s != null && i === "onScroll" && J("scroll", e)
                        : s != null && qe(e, i, s, o));
                }
              switch (n) {
                case "input":
                  Sr(e), Oo(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), Uo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? sn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        sn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return _e(t), null;
      case 6:
        if (e && t.stateNode != null) bs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(ur.current)), en(pt.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r);
        }
        return _e(t), null;
      case 13:
        if (
          (Z(ne),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
            ns(), En(), (t.flags |= 98560), (i = !1);
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(m(317));
              i[dt] = t;
            } else
              En(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (i = !1);
          } else rt !== null && (po(rt), (rt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ne.current & 1 ? me === 0 && (me = 3) : go())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (
          Tn(),
          to(e, t),
          e === null && er(t.stateNode.containerInfo),
          _e(t),
          null
        );
      case 10:
        return ji(t.type._context), _e(t), null;
      case 17:
        return Me(t.type) && Qr(), _e(t), null;
      case 19:
        if ((Z(ne), (i = t.memoizedState), i === null)) return _e(t), null;
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) dr(i, !1);
          else {
            if (me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = nl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      dr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return X(ne, (ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ue() > In &&
              ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !te)
              )
                return _e(t), null;
            } else
              2 * ue() - i.renderingStartTime > In &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ue()),
            (t.sibling = null),
            (n = ne.current),
            X(ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          ho(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? He & 1073741824 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function mf(e, t) {
    switch ((Ei(t), t.tag)) {
      case 1:
        return (
          Me(t.type) && Qr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Tn(),
          Z(Ie),
          Z(xe),
          Di(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ri(t), null;
      case 13:
        if (
          (Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Z(ne), null;
      case 4:
        return Tn(), null;
      case 10:
        return ji(t.type._context), null;
      case 22:
      case 23:
        return ho(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    Ce = !1,
    hf = typeof WeakSet == "function" ? WeakSet : Set,
    x = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          oe(e, t, r);
        }
      else n.current = null;
  }
  function no(e, t, n) {
    try {
      n();
    } catch (r) {
      oe(e, t, r);
    }
  }
  var ea = !1;
  function gf(e, t) {
    if (((mi = Ir), (e = Mu()), oi(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              p = 0,
              v = 0,
              y = e,
              h = null;
            t: for (;;) {
              for (
                var k;
                y !== n || (l !== 0 && y.nodeType !== 3) || (u = o + l),
                  y !== i || (r !== 0 && y.nodeType !== 3) || (s = o + r),
                  y.nodeType === 3 && (o += y.nodeValue.length),
                  (k = y.firstChild) !== null;

              )
                (h = y), (y = k);
              for (;;) {
                if (y === e) break t;
                if (
                  (h === n && ++p === l && (u = o),
                  h === i && ++v === r && (s = o),
                  (k = y.nextSibling) !== null)
                )
                  break;
                (y = h), (h = y.parentNode);
              }
              y = k;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      hi = { focusedElem: e, selectionRange: n }, Ir = !1, x = t;
      x !== null;

    )
      if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (x = e);
      else
        for (; x !== null; ) {
          t = x;
          try {
            var _ = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps,
                      se = _.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? C : lt(t.type, C),
                        se
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (S) {
            oe(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (x = e);
            break;
          }
          x = t.return;
        }
    return (_ = ea), (ea = !1), _;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && no(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ro(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ta(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ta(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[dt],
          delete t[nr],
          delete t[Si],
          delete t[Zc],
          delete t[qc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (lo(e, t, n), e = e.sibling; e !== null; )
        lo(e, t, n), (e = e.sibling);
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (io(e, t, n), e = e.sibling; e !== null; )
        io(e, t, n), (e = e.sibling);
  }
  var ye = null,
    it = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) la(e, t, n), (n = n.sibling);
  }
  function la(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(Cr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ce || jn(n, t);
      case 6:
        var r = ye,
          l = it;
        (ye = null),
          Vt(e, t, n),
          (ye = r),
          (it = l),
          ye !== null &&
            (it
              ? ((e = ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ye.removeChild(n.stateNode));
        break;
      case 18:
        ye !== null &&
          (it
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? yi(e.parentNode, n)
                : e.nodeType === 1 && yi(e, n),
              Qn(e))
            : yi(ye, n.stateNode));
        break;
      case 4:
        (r = ye),
          (l = it),
          (ye = n.stateNode.containerInfo),
          (it = !0),
          Vt(e, t, n),
          (ye = r),
          (it = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ce &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            (i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && no(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (
          !Ce &&
          (jn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            oe(n, t, u);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ce = (r = Ce) || n.memoizedState !== null), Vt(e, t, n), (Ce = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new hf()),
        t.forEach(function (r) {
          var l = Cf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (ye = u.stateNode), (it = !1);
                break e;
              case 3:
                (ye = u.stateNode.containerInfo), (it = !0);
                break e;
              case 4:
                (ye = u.stateNode.containerInfo), (it = !0);
                break e;
            }
            u = u.return;
          }
          if (ye === null) throw Error(m(160));
          la(i, o, l), (ye = null), (it = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          oe(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) oa(t, e), (t = t.sibling);
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ot(t, e), ht(e), r & 4)) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (C) {
            oe(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            oe(e, e.return, C);
          }
        }
        break;
      case 1:
        ot(t, e), ht(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (
          (ot(t, e),
          ht(e),
          r & 512 && n !== null && jn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Rn(l, "");
          } catch (C) {
            oe(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === "input" && i.type === "radio" && i.name != null && Ro(l, i),
                Dl(u, o);
              var p = Dl(u, i);
              for (o = 0; o < s.length; o += 2) {
                var v = s[o],
                  y = s[o + 1];
                v === "style"
                  ? Ho(l, y)
                  : v === "dangerouslySetInnerHTML"
                  ? Vo(l, y)
                  : v === "children"
                  ? Rn(l, y)
                  : qe(l, v, y, p);
              }
              switch (u) {
                case "input":
                  Il(l, i);
                  break;
                case "textarea":
                  Fo(l, i);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var k = i.value;
                  k != null
                    ? sn(l, !!i.multiple, k, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? sn(l, !!i.multiple, i.defaultValue, !0)
                        : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[nr] = i;
            } catch (C) {
              oe(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((ot(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (C) {
            oe(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Qn(t.containerInfo);
          } catch (C) {
            oe(e, e.return, C);
          }
        break;
      case 4:
        ot(t, e), ht(e);
        break;
      case 13:
        ot(t, e),
          ht(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (so = ue())),
          r & 4 && ia(e);
        break;
      case 22:
        if (
          ((v = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ce = (p = Ce) || v), ot(t, e), (Ce = p)) : ot(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !v && e.mode & 1)
          )
            for (x = e, v = e.child; v !== null; ) {
              for (y = x = v; x !== null; ) {
                switch (((h = x), (k = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    jn(h, h.return);
                    var _ = h.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (_.props = t.memoizedProps),
                          (_.state = t.memoizedState),
                          _.componentWillUnmount();
                      } catch (C) {
                        oe(r, n, C);
                      }
                    }
                    break;
                  case 5:
                    jn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      aa(y);
                      continue;
                    }
                }
                k !== null ? ((k.return = h), (x = k)) : aa(y);
              }
              v = v.sibling;
            }
          e: for (v = null, y = e; ; ) {
            if (y.tag === 5) {
              if (v === null) {
                v = y;
                try {
                  (l = y.stateNode),
                    p
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = y.stateNode),
                        (s = y.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = Bo("display", o)));
                } catch (C) {
                  oe(e, e.return, C);
                }
              }
            } else if (y.tag === 6) {
              if (v === null)
                try {
                  y.stateNode.nodeValue = p ? "" : y.memoizedProps;
                } catch (C) {
                  oe(e, e.return, C);
                }
            } else if (
              ((y.tag !== 22 && y.tag !== 23) ||
                y.memoizedState === null ||
                y === e) &&
              y.child !== null
            ) {
              (y.child.return = y), (y = y.child);
              continue;
            }
            if (y === e) break e;
            for (; y.sibling === null; ) {
              if (y.return === null || y.return === e) break e;
              v === y && (v = null), (y = y.return);
            }
            v === y && (v = null),
              (y.sibling.return = y.return),
              (y = y.sibling);
          }
        }
        break;
      case 19:
        ot(t, e), ht(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        ot(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
            var i = ra(e);
            io(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = ra(e);
            lo(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vf(e, t, n) {
    (x = e), ua(e);
  }
  function ua(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
      var l = x,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ce;
          u = fl;
          var p = Ce;
          if (((fl = o), (Ce = s) && !p))
            for (x = l; x !== null; )
              (o = x),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ca(l)
                  : s !== null
                  ? ((s.return = o), (x = s))
                  : ca(l);
          for (; i !== null; ) (x = i), ua(i), (i = i.sibling);
          (x = l), (fl = u), (Ce = p);
        }
        sa(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : sa(e);
    }
  }
  function sa(e) {
    for (; x !== null; ) {
      var t = x;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ce || dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ce)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && as(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  as(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var p = t.alternate;
                  if (p !== null) {
                    var v = p.memoizedState;
                    if (v !== null) {
                      var y = v.dehydrated;
                      y !== null && Qn(y);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Ce || (t.flags & 512 && ro(t));
        } catch (h) {
          oe(t, t.return, h);
        }
      }
      if (t === e) {
        x = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (x = n);
        break;
      }
      x = t.return;
    }
  }
  function aa(e) {
    for (; x !== null; ) {
      var t = x;
      if (t === e) {
        x = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (x = n);
        break;
      }
      x = t.return;
    }
  }
  function ca(e) {
    for (; x !== null; ) {
      var t = x;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              oe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(t, l, s);
              }
            }
            var i = t.return;
            try {
              ro(t);
            } catch (s) {
              oe(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              ro(t);
            } catch (s) {
              oe(t, o, s);
            }
        }
      } catch (s) {
        oe(t, t.return, s);
      }
      if (t === e) {
        x = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (x = u);
        break;
      }
      x = t.return;
    }
  }
  var yf = Math.ceil,
    pl = ke.ReactCurrentDispatcher,
    oo = ke.ReactCurrentOwner,
    Je = ke.ReactCurrentBatchConfig,
    U = 0,
    ge = null,
    ce = null,
    Se = 0,
    He = 0,
    zn = Ot(0),
    me = 0,
    mr = null,
    nn = 0,
    ml = 0,
    uo = 0,
    hr = null,
    Re = null,
    so = 0,
    In = 1 / 0,
    Nt = null,
    hl = !1,
    ao = null,
    Bt = null,
    gl = !1,
    Ht = null,
    vl = 0,
    gr = 0,
    co = null,
    yl = -1,
    Sl = 0;
  function Pe() {
    return U & 6 ? ue() : yl !== -1 ? yl : (yl = ue());
  }
  function $t(e) {
    return e.mode & 1
      ? U & 2 && Se !== 0
        ? Se & -Se
        : ef.transition !== null
        ? (Sl === 0 && (Sl = ru()), Sl)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
          e)
      : 1;
  }
  function ut(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (co = null), Error(m(185)));
    Vn(e, n, r),
      (!(U & 2) || e !== ge) &&
        (e === ge && (!(U & 2) && (ml |= n), me === 4 && Wt(e, Se)),
        Oe(e, r),
        n === 1 && U === 0 && !(t.mode & 1) && ((In = ue() + 500), Yr && Ft()));
  }
  function Oe(e, t) {
    var n = e.callbackNode;
    ec(e, t);
    var r = Pr(e, e === ge ? Se : 0);
    if (r === 0)
      n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eu(n), t === 1))
        e.tag === 0 ? bc(da.bind(null, e)) : Zu(da.bind(null, e)),
          Xc(function () {
            !(U & 6) && Ft();
          }),
          (n = null);
      else {
        switch (lu(r)) {
          case 1:
            n = $l;
            break;
          case 4:
            n = tu;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = nu;
            break;
          default:
            n = _r;
        }
        n = wa(n, fa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function fa(e, t) {
    if (((yl = -1), (Sl = 0), U & 6)) throw Error(m(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Pr(e, e === ge ? Se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
    else {
      t = r;
      var l = U;
      U |= 2;
      var i = ma();
      (ge !== e || Se !== t) && ((Nt = null), (In = ue() + 500), ln(e, t));
      do
        try {
          kf();
          break;
        } catch (u) {
          pa(e, u);
        }
      while (!0);
      Pi(),
        (pl.current = i),
        (U = l),
        ce !== null ? (t = 0) : ((ge = null), (Se = 0), (t = me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (t = fo(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), Wt(e, r), Oe(e, ue()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Sf(l) &&
            ((t = wl(e, r)),
            t === 2 && ((i = Wl(e)), i !== 0 && ((r = i), (t = fo(e, i)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), Wt(e, r), Oe(e, ue()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Re, Nt);
            break;
          case 3:
            if (
              (Wt(e, r),
              (r & 130023424) === r && ((t = so + 500 - ue()), 10 < t))
            ) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Pe(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = vi(on.bind(null, e, Re, Nt), t);
              break;
            }
            on(e, Re, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - tt(r);
              (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * yf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = vi(on.bind(null, e, Re, Nt), r);
              break;
            }
            on(e, Re, Nt);
            break;
          case 5:
            on(e, Re, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Oe(e, ue()), e.callbackNode === n ? fa.bind(null, e) : null;
  }
  function fo(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = wl(e, t)),
      e !== 2 && ((t = Re), (Re = n), t !== null && po(t)),
      e
    );
  }
  function po(e) {
    Re === null ? (Re = e) : Re.push.apply(Re, e);
  }
  function Sf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!nt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Wt(e, t) {
    for (
      t &= ~uo,
        t &= ~ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function da(e) {
    if (U & 6) throw Error(m(327));
    Mn();
    var t = Pr(e, 0);
    if (!(t & 1)) return Oe(e, ue()), null;
    var n = wl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wl(e);
      r !== 0 && ((t = r), (n = fo(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), Wt(e, t), Oe(e, ue()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Re, Nt),
      Oe(e, ue()),
      null
    );
  }
  function mo(e, t) {
    var n = U;
    U |= 1;
    try {
      return e(t);
    } finally {
      (U = n), U === 0 && ((In = ue() + 500), Yr && Ft());
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && !(U & 6) && Mn();
    var t = U;
    U |= 1;
    var n = Je.transition,
      r = W;
    try {
      if (((Je.transition = null), (W = 1), e)) return e();
    } finally {
      (W = r), (Je.transition = n), (U = t), !(U & 6) && Ft();
    }
  }
  function ho() {
    (He = zn.current), Z(zn);
  }
  function ln(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gc(n)), ce !== null))
      for (n = ce.return; n !== null; ) {
        var r = n;
        switch ((Ei(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Qr();
            break;
          case 3:
            Tn(), Z(Ie), Z(xe), Di();
            break;
          case 5:
            Ri(r);
            break;
          case 4:
            Tn();
            break;
          case 13:
            Z(ne);
            break;
          case 19:
            Z(ne);
            break;
          case 10:
            ji(r.type._context);
            break;
          case 22:
          case 23:
            ho();
        }
        n = n.return;
      }
    if (
      ((ge = e),
      (ce = e = Qt(e.current, null)),
      (Se = He = t),
      (me = 0),
      (mr = null),
      (uo = ml = nn = 0),
      (Re = hr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            (i.next = l), (r.next = o);
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function pa(e, t) {
    do {
      var n = ce;
      try {
        if ((Pi(), (rl.current = ul), ll)) {
          for (var r = re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((tn = 0),
          (he = pe = re = null),
          (sr = !1),
          (ar = 0),
          (oo.current = null),
          n === null || n.return === null)
        ) {
          (me = 1), (mr = t), (ce = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = Se),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              v = u,
              y = v.tag;
            if (!(v.mode & 1) && (y === 0 || y === 11 || y === 15)) {
              var h = v.alternate;
              h
                ? ((v.updateQueue = h.updateQueue),
                  (v.memoizedState = h.memoizedState),
                  (v.lanes = h.lanes))
                : ((v.updateQueue = null), (v.memoizedState = null));
            }
            var k = Us(o);
            if (k !== null) {
              (k.flags &= -257),
                As(k, o, u, i, t),
                k.mode & 1 && Fs(i, p, t),
                (t = k),
                (s = p);
              var _ = t.updateQueue;
              if (_ === null) {
                var C = new Set();
                C.add(s), (t.updateQueue = C);
              } else _.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Fs(i, p, t), go();
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var se = Us(o);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256),
                As(se, o, u, i, t),
                Ni(Pn(s, u));
              break e;
            }
          }
          (i = s = Pn(s, u)),
            me !== 4 && (me = 2),
            hr === null ? (hr = [i]) : hr.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var f = Os(i, s, t);
                ss(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bt === null || !Bt.has(d))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var S = Ds(i, u, t);
                  ss(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ga(n);
      } catch (N) {
        (t = N), ce === n && n !== null && (ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = pl.current;
    return (pl.current = ul), e === null ? ul : e;
  }
  function go() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
      ge === null || (!(nn & 268435455) && !(ml & 268435455)) || Wt(ge, Se);
  }
  function wl(e, t) {
    var n = U;
    U |= 2;
    var r = ma();
    (ge !== e || Se !== t) && ((Nt = null), ln(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if ((Pi(), (U = n), (pl.current = r), ce !== null)) throw Error(m(261));
    return (ge = null), (Se = 0), me;
  }
  function wf() {
    for (; ce !== null; ) ha(ce);
  }
  function kf() {
    for (; ce !== null && !Qa(); ) ha(ce);
  }
  function ha(e) {
    var t = Sa(e.alternate, e, He);
    (e.memoizedProps = e.pendingProps),
      t === null ? ga(e) : (ce = t),
      (oo.current = null);
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = mf(n, t)), n !== null)) {
          (n.flags &= 32767), (ce = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (me = 6), (ce = null);
          return;
        }
      } else if (((n = pf(n, t, He)), n !== null)) {
        ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    me === 0 && (me = 5);
  }
  function on(e, t, n) {
    var r = W,
      l = Je.transition;
    try {
      (Je.transition = null), (W = 1), xf(e, t, n, r);
    } finally {
      (Je.transition = l), (W = r);
    }
    return null;
  }
  function xf(e, t, n, r) {
    do Mn();
    while (Ht !== null);
    if (U & 6) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (tc(e, i),
      e === ge && ((ce = ge = null), (Se = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        gl ||
        ((gl = !0),
        wa(_r, function () {
          return Mn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Je.transition), (Je.transition = null);
      var o = W;
      W = 1;
      var u = U;
      (U |= 4),
        (oo.current = null),
        gf(e, n),
        oa(n, e),
        Bc(hi),
        (Ir = !!mi),
        (hi = mi = null),
        (e.current = n),
        vf(n),
        Ka(),
        (U = u),
        (W = o),
        (Je.transition = i);
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Ht = e), (vl = l)),
      (i = e.pendingLanes),
      i === 0 && (Bt = null),
      Xa(n.stateNode),
      Oe(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = ao), (ao = null), e);
    return (
      vl & 1 && e.tag !== 0 && Mn(),
      (i = e.pendingLanes),
      i & 1 ? (e === co ? gr++ : ((gr = 0), (co = e))) : (gr = 0),
      Ft(),
      null
    );
  }
  function Mn() {
    if (Ht !== null) {
      var e = lu(vl),
        t = Je.transition,
        n = W;
      try {
        if (((Je.transition = null), (W = 16 > e ? 16 : e), Ht === null))
          var r = !1;
        else {
          if (((e = Ht), (Ht = null), (vl = 0), U & 6)) throw Error(m(331));
          var l = U;
          for (U |= 4, x = e.current; x !== null; ) {
            var i = x,
              o = i.child;
            if (x.flags & 16) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (x = p; x !== null; ) {
                    var v = x;
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, v, i);
                    }
                    var y = v.child;
                    if (y !== null) (y.return = v), (x = y);
                    else
                      for (; x !== null; ) {
                        v = x;
                        var h = v.sibling,
                          k = v.return;
                        if ((ta(v), v === p)) {
                          x = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = k), (x = h);
                          break;
                        }
                        x = k;
                      }
                  }
                }
                var _ = i.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var se = C.sibling;
                      (C.sibling = null), (C = se);
                    } while (C !== null);
                  }
                }
                x = i;
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
            else
              e: for (; x !== null; ) {
                if (((i = x), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  (f.return = i.return), (x = f);
                  break e;
                }
                x = i.return;
              }
          }
          var a = e.current;
          for (x = a; x !== null; ) {
            o = x;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
            else
              e: for (o = a; x !== null; ) {
                if (((u = x), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, u);
                    }
                  } catch (N) {
                    oe(u, u.return, N);
                  }
                if (u === o) {
                  x = null;
                  break e;
                }
                var S = u.sibling;
                if (S !== null) {
                  (S.return = u.return), (x = S);
                  break e;
                }
                x = u.return;
              }
          }
          if (
            ((U = l), Ft(), ft && typeof ft.onPostCommitFiberRoot == "function")
          )
            try {
              ft.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (W = n), (Je.transition = t);
      }
    }
    return !1;
  }
  function va(e, t, n) {
    (t = Pn(n, t)),
      (t = Os(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Pe()),
      e !== null && (Vn(e, 1, t), Oe(e, t));
  }
  function oe(e, t, n) {
    if (e.tag === 3) va(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          va(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bt === null || !Bt.has(r)))
          ) {
            (e = Pn(n, e)),
              (e = Ds(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Pe()),
              t !== null && (Vn(t, 1, e), Oe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (Se & n) === n &&
        (me === 4 || (me === 3 && (Se & 130023424) === Se && 500 > ue() - so)
          ? ln(e, 0)
          : (uo |= n)),
      Oe(e, t);
  }
  function ya(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Tr), (Tr <<= 1), !(Tr & 130023424) && (Tr = 4194304))
        : (t = 1));
    var n = Pe();
    (e = Et(e, t)), e !== null && (Vn(e, t, n), Oe(e, n));
  }
  function _f(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ya(e, n);
  }
  function Cf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ya(e, n);
  }
  var Sa;
  Sa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), df(e, t, n);
        Le = !!(e.flags & 131072);
      }
    else (Le = !1), te && t.flags & 1048576 && qu(t, Xr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        cl(e, t), (e = t.pendingProps);
        var l = wn(t, xe.current);
        Nn(t, n), (l = Ai(null, t, r, e, l, n));
        var i = Vi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Me(r) ? ((i = !0), Kr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mi(t),
              (l.updater = sl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ki(t, r, e, n),
              (t = Ji(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && xi(t), Te(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Tf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Xi(null, t, r, e, n);
              break e;
            case 1:
              t = Qs(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Xi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ks(t), e === null)) throw Error(m(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            us(e, t),
            tl(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Pn(Error(m(423)), t)), (t = Ys(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Pn(Error(m(424)), t)), (t = Ys(e, t, r, n, l));
              break e;
            } else
              for (
                Be = Rt(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  te = !0,
                  rt = null,
                  n = is(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((En(), r === l)) {
              t = Ct(e, t, n);
              break e;
            }
            Te(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          cs(t),
          e === null && Ci(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
          Ws(e, t),
          Te(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && Ci(t), null;
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          Li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Te(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Vs(e, t, r, l, n)
        );
      case 7:
        return Te(e, t, t.pendingProps, n), t.child;
      case 8:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            X(qr, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (nt(i.value, o)) {
              if (i.children === l.children && !Ie.current) {
                t = Ct(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        (s = _t(-1, n & -n)), (s.tag = 2);
                        var p = i.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var v = p.pending;
                          v === null
                            ? (s.next = s)
                            : ((s.next = v.next), (v.next = s)),
                            (p.pending = s);
                        }
                      }
                      (i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        zi(i.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(m(341));
                  (o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    zi(o, n, t),
                    (o = i.sibling);
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          Te(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          Te(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = lt(r, t.pendingProps)),
          (l = lt(r.type, l)),
          Bs(e, t, r, l, n)
        );
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          cl(e, t),
          (t.tag = 1),
          Me(r) ? ((e = !0), Kr(t)) : (e = !1),
          Nn(t, n),
          Ls(t, r, l),
          Ki(t, r, l, n),
          Ji(null, t, r, !0, e, n)
        );
      case 19:
        return Js(e, t, n);
      case 22:
        return $s(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return bo(e, t);
  }
  function Nf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ze(e, t, n, r) {
    return new Nf(e, t, n, r);
  }
  function vo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Tf(e) {
    if (typeof e == "function") return vo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ze(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function kl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) vo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case je:
          return un(n.children, l, i, t);
        case Qe:
          (o = 8), (l |= 8);
          break;
        case Tt:
          return (
            (e = Ze(12, n, t, l | 2)), (e.elementType = Tt), (e.lanes = i), e
          );
        case Fe:
          return (e = Ze(13, n, t, l)), (e.elementType = Fe), (e.lanes = i), e;
        case et:
          return (e = Ze(19, n, t, l)), (e.elementType = et), (e.lanes = i), e;
        case ie:
          return xl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yt:
                o = 10;
                break e;
              case Yt:
                o = 9;
                break e;
              case at:
                o = 11;
                break e;
              case ct:
                o = 14;
                break e;
              case ze:
                (o = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ze(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function un(e, t, n, r) {
    return (e = Ze(7, e, r, t)), (e.lanes = n), e;
  }
  function xl(e, t, n, r) {
    return (
      (e = Ze(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yo(e, t, n) {
    return (e = Ze(6, e, null, t)), (e.lanes = n), e;
  }
  function So(e, t, n) {
    return (
      (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wo(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Pf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Ze(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mi(i),
      e
    );
  }
  function jf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ka(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Me(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Me(n)) return Xu(e, n, t);
    }
    return t;
  }
  function xa(e, t, n, r, l, i, o, u, s) {
    return (
      (e = wo(n, r, !0, e, l, i, o, u, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = Pe()),
      (l = $t(n)),
      (i = _t(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Oe(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      o = $t(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (ut(e, l, o, i), el(e, l, o)),
      o
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ko(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function zf() {
    return null;
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xo(e) {
    this._internalRoot = e;
  }
  (Cl.prototype.render = xo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      El(e, t, null, null);
    }),
    (Cl.prototype.unmount = xo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          rn(function () {
            El(null, e, null, null);
          }),
            (t[St] = null);
        }
      });
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
      It.splice(n, 0, e), n === 0 && cu(e);
    }
  };
  function Eo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = _l(o);
          i.call(p);
        };
      }
      var o = xa(t, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = o),
        (e[St] = o.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = _l(s);
        u.call(p);
      };
    }
    var s = wo(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        El(t, s, n, r);
      }),
      s
    );
  }
  function Tl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = _l(o);
          u.call(s);
        };
      }
      El(t, o, e, l);
    } else o = If(n, t, e, l, r);
    return _l(o);
  }
  (iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 &&
            (Kl(t, n | 1), Oe(t, ue()), !(U & 6) && ((In = ue() + 500), Ft()));
        }
        break;
      case 13:
        rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Pe();
            ut(r, e, 1, l);
          }
        }),
          ko(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ut(t, e, 134217728, n);
        }
        ko(e, 134217728);
      }
    }),
    (ou = function (e) {
      if (e.tag === 13) {
        var t = $t(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Pe();
          ut(n, e, t, r);
        }
        ko(e, t);
      }
    }),
    (uu = function () {
      return W;
    }),
    (su = function (e, t) {
      var n = W;
      try {
        return (W = e), t();
      } finally {
        W = n;
      }
    }),
    (Al = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Il(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Wr(r);
                if (!l) throw Error(m(90));
                Mo(r), Il(r, l);
              }
            }
          }
          break;
        case "textarea":
          Fo(e, n);
          break;
        case "select":
          (t = n.value), t != null && sn(e, !!n.multiple, t, !1);
      }
    }),
    (Ko = mo),
    (Yo = rn);
  var Mf = { usingClientEntryPoint: !1, Events: [rr, yn, Wr, Wo, Qo, mo] },
    vr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Lf = {
      bundleType: vr.bundleType,
      version: vr.version,
      rendererPackageName: vr.rendererPackageName,
      rendererConfig: vr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Zo(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: vr.findFiberByHostInstance || zf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        (Cr = Pl.inject(Lf)), (ft = Pl);
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf),
    (De.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Eo(t)) throw Error(m(200));
      return jf(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!Eo(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = _a;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = wo(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new xo(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Zo(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (De.flushSync = function (e) {
      return rn(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Tl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!Eo(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = _a;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = xa(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[St] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Cl(t);
    }),
    (De.render = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Tl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            Tl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[St] = null);
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = mo),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Tl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var La;
function Hf() {
  if (La) return No.exports;
  La = 1;
  function T() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (D) {
        console.error(D);
      }
  }
  return T(), (No.exports = Bf()), No.exports;
}
var Ra;
function $f() {
  if (Ra) return jl;
  Ra = 1;
  var T = Hf();
  return (jl.createRoot = T.createRoot), (jl.hydrateRoot = T.hydrateRoot), jl;
}
var Wf = $f();
function Qf() {
  const T = gt.useRef(null),
    D = gt.useRef(null);
  return (
    gt.useEffect(() => {
      console.log(T.current);
    }, [T, D]),
    P.jsxs("div", {
      children: [
        P.jsx(Jf, { refs: { portfolio: T, contact: D } }),
        P.jsx(Zf, {}),
        P.jsx(qf, { ref: T }),
        P.jsx(bf, { ref: D }),
      ],
    })
  );
}
const Fa = {
    name: "unnati singhania",
    imageUrl: "/hands-on-portfolio/images/profile.jpg",
  },
  Kf = [
    { id: 1, href: "#", text: "home" },
    { id: 2, href: "#", text: "portfolio" },
    { id: 3, href: "#", text: "contact" },
  ],
  Oa = { title: "unnati singhania", subtitle: "junior @jpis" },
  jo = { title: "about me.", subtitle: "Hey, I'm Akshat!", emoji: "👋🏻" },
  zo = {
    intro:
      "I’m a student at JPIS, Jaipur, and I’m currently interested in developing solutions that make tech and education accessible 📚💡. I’m also a <strong>founder</strong>, empowering tens of blind students in education and employment through affordable smart glasses 🕶️.",
    researchInterests:
      "My research interests lie in improving accessible technology for disabled people ♿. I’m also super passionate about <strong>autonomous systems</strong> 🤖 and <strong>artificial intelligence in space exploration</strong> 🚀 and <strong>clean energy</strong> 🌱.",
    pastProjects:
      "In the past, I’ve explored <strong>nuclear fission disruption systems</strong> ⚛️, engineered plant-based wastewater solutions for textile industries 🌱, built AI-driven CCTV security systems for low-resource environments 🛡️, and launched model rockets to 1km altitude 🚀. I’ve also worked with the <strong>Ministry of Education</strong> 🇮🇳, and worked as a junior engineer for <strong>Skillstrainer.in</strong> 💻.",
  },
  Yf = { src: "https://placehold.co/600x800", alt: "Profile photo" },
  Gf = "my recent projects.",
  Xf = [
    {
      title:
        "SightSense: affordable ai assistive glasses for the visually impaired",
      items: [
        {
          imgSrc: "/hands-on-portfolio/images/projects/sightsense.png",
          description: "getting feedback from blind students",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t18.jpeg",
          description: "",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t42.png", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/b6.jpeg",
          description: "winning Tie Rajasthan 2024",
        },
        { imgSrc: "/hands-on-portfolio/images/b6-1.jpeg", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/hack.jpg",
          description:
            "invited to and awarded at a government bootcamp in Poornima university, Jaipur",
        },
        {
          imgSrc: "/hands-on-portfolio/images/mp2.jpeg",
          description:
            "meeting and discussing sightsense with member of parliament of jaipur",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t38.jpg",
          description: "explaining my glasses to juniors",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t16.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t3.jpg",
          description: "Global Social Leaders Winner 2024",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t30.jpeg",
          description:
            "SightSense featured in local newspaper for Tie Rajasthan win",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t10.jpeg",
          description: "recognized in School's Annual Day",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t44.png",
          description:
            "discussing newly implemented features in SightSense glasses with assistant director of Innovation",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t2.jpg",
          description: "Smart India Hackathon selection, top 19 in the nation",
        },
        {
          imgSrc: "/hands-on-portfolio/images/3rd-graders/1.jpeg",
          description:
            "Session on social impact with technology with 3rd graders",
        },
        {
          imgSrc: "/hands-on-portfolio/images/3rd-graders/2.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/3rd-graders/3.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/udyamahotsav/1.JPG",
          description: "Interview with Apex University, Jaipur",
        },
        {
          imgSrc: "/hands-on-portfolio/images/udyamahotsav/2.JPG",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/udyamahotsav/3.JPG",
          description: "",
        },
        {
          pdfSrc:
            "https://drive.google.com/file/d/1jaGMkH78oYFgRHkYJnnGAuoAmmFAbC8s/preview",
          description: "LOR from Member of Parliament, Manju Sharma",
        },
      ],
    },
    {
      title: "Rocket Science Club",
      items: [
        { imgSrc: "/hands-on-portfolio/images/drive/t33.jpg", description: "" },
        { imgSrc: "/hands-on-portfolio/images/rocket1.png", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t21.jpeg",
          description: "",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t39.jpg", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t17.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t24.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t12.jpeg",
          description: "",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t52.jpg", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t13.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t25.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t14.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t22.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t19.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t15.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t11.jpeg",
          description: "RSC featured in school's annual day",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t8.jpeg", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t9.jpeg", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/rsc-apogee.png",
          description:
            "Predicting apogee using kalman filters for recovery system deployment",
        },
      ],
    },
    {
      title: "IIT Guwahati",
      items: [
        {
          imgSrc: "/hands-on-portfolio/images/b2.jpeg",
          description: "speaking about the Brachistochrone curve",
        },
        { imgSrc: "/hands-on-portfolio/images/b3.jpg", description: "" },
      ],
    },
    {
      title: "Teaching Assistant under Stanford lecturer Dr. David Zhu",
      items: [
        { imgSrc: "images/interview_photo.png", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t40.jpg", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/drive/plan.png",
          description: "",
        },
      ],
    },
    {
      title:
        "SecureSense: Weapon detection in low-quality low-processing power CCTV cameras",
      items: [
        { imgSrc: "/hands-on-portfolio/images/drive/t49.png", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t48.png", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t46.png", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t47.png", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t45.png", description: "" },
      ],
    },
    {
      title: "Competitive Programming",
      items: [
        { imgSrc: "/hands-on-portfolio/images/drive/t5.jpg", description: "" },
        { imgSrc: "/hands-on-portfolio/images/drive/t36.jpg", description: "" },
      ],
    },
    {
      title: "ByteBuilders",
      items: [
        {
          imgSrc: "/hands-on-portfolio/images/drive/t29.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t26.jpeg",
          description: "",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t50.png", description: "" },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t28.jpeg",
          description: "",
        },
      ],
    },
    {
      title: "RiverRescue",
      items: [
        {
          imgSrc: "/hands-on-portfolio/images/conf1.jpeg",
          description:
            "at the clean air energy conference with the rajasthan state pollution control board",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t4.jpg", description: "" },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        {
          imgSrc: "/hands-on-portfolio/images/drive/t51.png",
          description: "shadowing a vc for a day",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t27.jpeg",
          description: "",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t43.png",
          description: "literary competition",
        },
        {
          imgSrc: "/hands-on-portfolio/images/drive/t31.jpg",
          description: "won mayday event at epoch 2023 by hackclub",
        },
        { imgSrc: "/hands-on-portfolio/images/drive/t32.jpg", description: "" },
      ],
    },
  ],
  Jf = ({ refs: T }) => {
    const [D, m] = gt.useState(!1),
      fe = (L) => {
        L.current.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    return P.jsxs("div", {
      children: [
        P.jsxs("nav", {
          className:
            "bg-opacity-55 bg-white container px-24 flex items-center justify-between z-10 top-0 fixed shadow-lg lg:shadow-none",
          children: [
            P.jsx("div", {
              className: "flex items-center gap-2 py-4",
              children: P.jsx("span", {
                className: "text-black font-medium",
                children: Fa.name,
              }),
            }),
            P.jsx("div", {
              className:
                "  lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 absolute lg:relative w-full lg:w-auto left-0 top-full lg:top-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none",
              children: Kf.map((L) =>
                P.jsx(
                  "a",
                  {
                    className:
                      "text-black hover:opacity-75 py-2 lg:py-0 cursor-pointer",
                    onClick: () => {
                      T && console.log(T), fe(T[L.text]);
                    },
                    children: L.text,
                  },
                  L.id
                )
              ),
            }),
          ],
        }),
        P.jsx("section", {
          id: "navbar_hero",
          className: "mt-14 bg-gradient-to-b from-[#B7E9F7] to-[#ABC7FF]",
          children: P.jsxs("div", {
            className: "container mx-auto px-4 text-center pt-20 pb-8",
            children: [
              P.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold mb-2",
                children: Oa.title,
              }),
              P.jsx("p", {
                className: "text-base md:text-lg",
                children: Oa.subtitle,
              }),
            ],
          }),
        }),
      ],
    });
  },
  Zf = () =>
    P.jsxs("section", {
      id: "about",
      className: "py-8 sm:py-16 container mx-auto px-4",
      children: [
        P.jsx("h2", {
          className: "text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center",
          children: jo.title,
        }),
        P.jsxs("div", {
          className:
            "flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto",
          children: [
            P.jsxs("div", {
              className: "ml-40 max-w-[25rem] flex-1 space-y-4 sm:space-y-6",
              children: [
                P.jsxs("div", {
                  className: "flex items-center gap-2 mb-2 sm:mb-4",
                  children: [
                    P.jsx("span", {
                      className: "text-xl sm:text-2xl",
                      children: jo.emoji,
                    }),
                    P.jsx("h3", {
                      className: "text-lg sm:text-xl font-semibold",
                      children: jo.subtitle,
                    }),
                  ],
                }),
                P.jsx("p", {
                  className: "text-gray-800 text-sm sm:text-base",
                  dangerouslySetInnerHTML: { __html: zo.intro },
                }),
                P.jsx("p", {
                  className: "text-gray-800 text-sm sm:text-base",
                  dangerouslySetInnerHTML: { __html: zo.researchInterests },
                }),
                P.jsx("p", {
                  className: "text-gray-800 text-sm sm:text-base",
                  dangerouslySetInnerHTML: { __html: zo.pastProjects },
                }),
              ],
            }),
            P.jsx("div", {
              className: "flex-1 mt-8 lg:mt-0",
              children: P.jsx("img", {
                src: Fa.imageUrl,
                alt: Yf.name,
                className:
                  "ml-auto max-w-lg object-contain rounded-lg w-full h-1/6",
              }),
            }),
          ],
        }),
      ],
    }),
  qf = Da.forwardRef((T, D) =>
    P.jsxs("section", {
      className: "py-8 sm:py-12 md:py-16 container mx-auto px-4",
      ref: D,
      children: [
        P.jsx("h2", {
          className:
            "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center",
          children: Gf,
        }),
        P.jsx("div", {
          className: "space-y-8 sm:space-y-10 md:space-y-12 mx-auto",
          children: Xf.map((m, fe) =>
            P.jsxs(
              "div",
              {
                children: [
                  P.jsx("h3", {
                    className:
                      "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center",
                    children: m.title,
                  }),
                  P.jsx("div", {
                    className: `grid grid-cols-1 sm:grid-cols-2 ${
                      m.items.length > 2 ? "md:grid-cols-3" : ""
                    } gap-4 sm:gap-6`,
                    children: m.items.map((L, Q) =>
                      P.jsxs(
                        "div",
                        {
                          children: [
                            L.pdfSrc
                              ? P.jsx("iframe", {
                                  src: L.pdfSrc,
                                  title: L.description,
                                  className:
                                    "w-full h-48 sm:h-56 md:h-64 object-contain rounded",
                                })
                              : P.jsx("img", {
                                  src: L.imgSrc,
                                  alt: L.alt,
                                  className:
                                    "w-full h-48 sm:h-56 md:h-64 object-contain rounded",
                                }),
                            P.jsx("p", {
                              className:
                                "text-black text-xs sm:text-sm text-center",
                              children: L.description,
                            }),
                          ],
                        },
                        Q
                      )
                    ),
                  }),
                ],
              },
              fe
            )
          ),
        }),
      ],
    })
  ),
  bf = Da.forwardRef((T, D) => {
    const [m, fe] = gt.useState({
        name: "unnati singhania",
        image: "https://placehold.co/32x32",
      }),
      [L, Q] = gt.useState([
        { platform: "LinkedIn", handle: "@akshatsinghania" },
      ]),
      [ae, de] = gt.useState([
        { type: "General", email: "singhaniaakshat1@gmail.com" },
        { type: "Academic", email: "asinghania2@jpischool.com" },
      ]),
      [H, we] = gt.useState({
        copyright:
          "Copyright © 2024 unnati singhania, Inc. All rights reserved.",
      });
    return P.jsx("section", {
      id: "contact",
      className: "py-16 container mx-auto px-4",
      ref: D,
      children: P.jsxs("div", {
        className:
          "flex flex-col items-center justify-center max-w-6xl mx-auto space-y-8",
        children: [
          P.jsxs("div", {
            className:
              "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
            children: [
              P.jsx("div", {
                className: "flex items-center gap-2",
                children: P.jsx("span", {
                  className: "text-gray-700",
                  children: m.name,
                }),
              }),
              P.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  P.jsx("h3", {
                    className: "text-sm font-medium text-gray-900",
                    children: "socials",
                  }),
                  P.jsx("div", {
                    className: "space-y-1",
                    children: L.map((le, K) =>
                      P.jsx(
                        "p",
                        {
                          className: "text-sm text-gray-500",
                          children: `${le.platform.toLowerCase()} ${le.handle}`,
                        },
                        K
                      )
                    ),
                  }),
                ],
              }),
              P.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  P.jsx("h3", {
                    className: "text-sm font-medium text-gray-900",
                    children: "contact",
                  }),
                  P.jsx("div", {
                    className: "space-y-1",
                    children: ae.map((le, K) =>
                      P.jsxs(
                        "p",
                        {
                          className: "text-sm text-gray-500 break-words",
                          children: [
                            le.email,
                            " (",
                            le.type.toLowerCase(),
                            ")",
                          ],
                        },
                        K
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          P.jsx("div", {
            className: "w-full border-t pt-4",
            children: P.jsx("p", {
              className: "text-sm text-gray-500 text-center sm:text-left",
              children: H.copyright,
            }),
          }),
        ],
      }),
    });
  });
Wf.createRoot(document.getElementById("root")).render(
  P.jsx(gt.StrictMode, { children: P.jsx(Qf, {}) })
);
