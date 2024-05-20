var H = { exports: {} },
  J = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (l) {
  function P(n, e) {
    var t = n.length;
    n.push(e);
    n: for (; 0 < t; ) {
      var i = (t - 1) >>> 1,
        r = n[i];
      if (0 < h(r, e)) (n[i] = e), (n[t] = r), (t = i);
      else break n;
    }
  }
  function o(n) {
    return n.length === 0 ? null : n[0];
  }
  function _(n) {
    if (n.length === 0) return null;
    var e = n[0],
      t = n.pop();
    if (t !== e) {
      n[0] = t;
      n: for (var i = 0, r = n.length, w = r >>> 1; i < w; ) {
        var v = 2 * (i + 1) - 1,
          N = n[v],
          b = v + 1,
          I = n[b];
        if (0 > h(N, t))
          b < r && 0 > h(I, N)
            ? ((n[i] = I), (n[b] = t), (i = b))
            : ((n[i] = N), (n[v] = t), (i = v));
        else if (b < r && 0 > h(I, t)) (n[i] = I), (n[b] = t), (i = b);
        else break n;
      }
    }
    return e;
  }
  function h(n, e) {
    var t = n.sortIndex - e.sortIndex;
    return t !== 0 ? t : n.id - e.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var K = performance;
    l.unstable_now = function () {
      return K.now();
    };
  } else {
    var R = Date,
      O = R.now();
    l.unstable_now = function () {
      return R.now() - O;
    };
  }
  var f = [],
    c = [],
    Q = 1,
    a = null,
    u = 3,
    m = !1,
    s = !1,
    y = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    B = typeof clearTimeout == "function" ? clearTimeout : null,
    D = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function T(n) {
    for (var e = o(c); e !== null; ) {
      if (e.callback === null) _(c);
      else if (e.startTime <= n)
        _(c), (e.sortIndex = e.expirationTime), P(f, e);
      else break;
      e = o(c);
    }
  }
  function E(n) {
    if (((y = !1), T(n), !s))
      if (o(f) !== null) (s = !0), M(C);
      else {
        var e = o(c);
        e !== null && F(E, e.startTime - n);
      }
  }
  function C(n, e) {
    (s = !1), y && ((y = !1), B(d), (d = -1)), (m = !0);
    var t = u;
    try {
      for (
        T(e), a = o(f);
        a !== null && (!(a.expirationTime > e) || (n && !A()));

      ) {
        var i = a.callback;
        if (typeof i == "function") {
          (a.callback = null), (u = a.priorityLevel);
          var r = i(a.expirationTime <= e);
          (e = l.unstable_now()),
            typeof r == "function" ? (a.callback = r) : a === o(f) && _(f),
            T(e);
        } else _(f);
        a = o(f);
      }
      if (a !== null) var w = !0;
      else {
        var v = o(c);
        v !== null && F(E, v.startTime - e), (w = !1);
      }
      return w;
    } finally {
      (a = null), (u = t), (m = !1);
    }
  }
  var k = !1,
    p = null,
    d = -1,
    q = 5,
    z = -1;
  function A() {
    return !(l.unstable_now() - z < q);
  }
  function L() {
    if (p !== null) {
      var n = l.unstable_now();
      z = n;
      var e = !0;
      try {
        e = p(!0, n);
      } finally {
        e ? g() : ((k = !1), (p = null));
      }
    } else k = !1;
  }
  var g;
  if (typeof D == "function")
    g = function () {
      D(L);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      S = G.port2;
    (G.port1.onmessage = L),
      (g = function () {
        S.postMessage(null);
      });
  } else
    g = function () {
      j(L, 0);
    };
  function M(n) {
    (p = n), k || ((k = !0), g());
  }
  function F(n, e) {
    d = j(function () {
      n(l.unstable_now());
    }, e);
  }
  (l.unstable_IdlePriority = 5),
    (l.unstable_ImmediatePriority = 1),
    (l.unstable_LowPriority = 4),
    (l.unstable_NormalPriority = 3),
    (l.unstable_Profiling = null),
    (l.unstable_UserBlockingPriority = 2),
    (l.unstable_cancelCallback = function (n) {
      n.callback = null;
    }),
    (l.unstable_continueExecution = function () {
      s || m || ((s = !0), M(C));
    }),
    (l.unstable_forceFrameRate = function (n) {
      0 > n || 125 < n
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (q = 0 < n ? Math.floor(1e3 / n) : 5);
    }),
    (l.unstable_getCurrentPriorityLevel = function () {
      return u;
    }),
    (l.unstable_getFirstCallbackNode = function () {
      return o(f);
    }),
    (l.unstable_next = function (n) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var e = 3;
          break;
        default:
          e = u;
      }
      var t = u;
      u = e;
      try {
        return n();
      } finally {
        u = t;
      }
    }),
    (l.unstable_pauseExecution = function () {}),
    (l.unstable_requestPaint = function () {}),
    (l.unstable_runWithPriority = function (n, e) {
      switch (n) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          n = 3;
      }
      var t = u;
      u = n;
      try {
        return e();
      } finally {
        u = t;
      }
    }),
    (l.unstable_scheduleCallback = function (n, e, t) {
      var i = l.unstable_now();
      switch (
        (typeof t == "object" && t !== null
          ? ((t = t.delay), (t = typeof t == "number" && 0 < t ? i + t : i))
          : (t = i),
        n)
      ) {
        case 1:
          var r = -1;
          break;
        case 2:
          r = 250;
          break;
        case 5:
          r = 1073741823;
          break;
        case 4:
          r = 1e4;
          break;
        default:
          r = 5e3;
      }
      return (
        (r = t + r),
        (n = {
          id: Q++,
          callback: e,
          priorityLevel: n,
          startTime: t,
          expirationTime: r,
          sortIndex: -1,
        }),
        t > i
          ? ((n.sortIndex = t),
            P(c, n),
            o(f) === null &&
              n === o(c) &&
              (y ? (B(d), (d = -1)) : (y = !0), F(E, t - i)))
          : ((n.sortIndex = r), P(f, n), s || m || ((s = !0), M(C))),
        n
      );
    }),
    (l.unstable_shouldYield = A),
    (l.unstable_wrapCallback = function (n) {
      var e = u;
      return function () {
        var t = u;
        u = e;
        try {
          return n.apply(this, arguments);
        } finally {
          u = t;
        }
      };
    });
})(J);
H.exports = J;
var U = H.exports;
export { U as s };
