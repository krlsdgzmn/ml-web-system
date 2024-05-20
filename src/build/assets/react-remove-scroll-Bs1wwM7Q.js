import { _ as z, a as B, b as j } from "./tslib-CDuPK5Eb.js";
import { r as a } from "./react-i33jQOB4.js";
import { f as Q, z as _, R as q } from "./react-remove-scroll-bar-Ds1-x277.js";
import { c as G, e as J } from "./use-sidecar-BH8984ZT.js";
import { u as K } from "./use-callback-ref-CSz67WH8.js";
import { s as O } from "./react-style-singleton-CANWrM8C.js";
var V = G(),
  M = function () {},
  X = a.forwardRef(function (e, t) {
    var n = a.useRef(null),
      o = a.useState({
        onScrollCapture: M,
        onWheelCapture: M,
        onTouchMoveCapture: M,
      }),
      u = o[0],
      s = o[1],
      v = e.forwardProps,
      c = e.children,
      S = e.className,
      g = e.removeScrollBar,
      C = e.enabled,
      b = e.shards,
      y = e.sideCar,
      w = e.noIsolation,
      R = e.inert,
      r = e.allowPinchZoom,
      l = e.as,
      f = l === void 0 ? "div" : l,
      h = z(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      d = y,
      m = K([n, t]),
      i = B(B({}, h), u);
    return a.createElement(
      a.Fragment,
      null,
      C &&
        a.createElement(d, {
          sideCar: V,
          removeScrollBar: g,
          shards: b,
          noIsolation: w,
          inert: R,
          setCallbacks: s,
          allowPinchZoom: !!r,
          lockRef: n,
        }),
      v
        ? a.cloneElement(a.Children.only(c), B(B({}, i), { ref: m }))
        : a.createElement(f, B({}, i, { className: S, ref: m }), c),
    );
  });
X.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
X.classNames = { fullWidth: Q, zeroRight: _ };
var W = !1;
if (typeof window < "u")
  try {
    var T = Object.defineProperty({}, "passive", {
      get: function () {
        return (W = !0), !0;
      },
    });
    window.addEventListener("test", T, T),
      window.removeEventListener("test", T, T);
  } catch {
    W = !1;
  }
var E = W ? { passive: !1 } : !1,
  U = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Z = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !U(e) && n[t] === "visible")
    );
  },
  $ = function (e) {
    return Z(e, "overflowY");
  },
  p = function (e) {
    return Z(e, "overflowX");
  },
  I = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = F(e, n);
      if (o) {
        var u = x(e, n),
          s = u[1],
          v = u[2];
        if (s > v) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  ee = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  re = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  F = function (e, t) {
    return e === "v" ? $(t) : p(t);
  },
  x = function (e, t) {
    return e === "v" ? ee(t) : re(t);
  },
  te = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ae = function (e, t, n, o, u) {
    var s = te(e, window.getComputedStyle(t).direction),
      v = s * o,
      c = n.target,
      S = t.contains(c),
      g = !1,
      C = v > 0,
      b = 0,
      y = 0;
    do {
      var w = x(e, c),
        R = w[0],
        r = w[1],
        l = w[2],
        f = r - l - s * R;
      (R || f) && F(e, c) && ((b += f), (y += R)), (c = c.parentNode);
    } while ((!S && c !== document.body) || (S && (t.contains(c) || t === c)));
    return ((C && (b === 0 || !u)) || (!C && (y === 0 || !u))) && (g = !0), g;
  },
  N = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  A = function (e) {
    return [e.deltaX, e.deltaY];
  },
  H = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ne = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  le = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  oe = 0,
  k = [];
function ce(e) {
  var t = a.useRef([]),
    n = a.useRef([0, 0]),
    o = a.useRef(),
    u = a.useState(oe++)[0],
    s = a.useState(function () {
      return O();
    })[0],
    v = a.useRef(e);
  a.useEffect(
    function () {
      v.current = e;
    },
    [e],
  ),
    a.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(u));
          var r = j([e.lockRef.current], (e.shards || []).map(H), !0).filter(
            Boolean,
          );
          return (
            r.forEach(function (l) {
              return l.classList.add("allow-interactivity-".concat(u));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(u)),
                r.forEach(function (l) {
                  return l.classList.remove("allow-interactivity-".concat(u));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var c = a.useCallback(function (r, l) {
      if ("touches" in r && r.touches.length === 2)
        return !v.current.allowPinchZoom;
      var f = N(r),
        h = n.current,
        d = "deltaX" in r ? r.deltaX : h[0] - f[0],
        m = "deltaY" in r ? r.deltaY : h[1] - f[1],
        i,
        Y = r.target,
        P = Math.abs(d) > Math.abs(m) ? "h" : "v";
      if ("touches" in r && P === "h" && Y.type === "range") return !1;
      var L = I(P, Y);
      if (!L) return !0;
      if ((L ? (i = P) : ((i = P === "v" ? "h" : "v"), (L = I(P, Y))), !L))
        return !1;
      if (
        (!o.current && "changedTouches" in r && (d || m) && (o.current = i), !i)
      )
        return !0;
      var D = o.current || i;
      return ae(D, l, r, D === "h" ? d : m, !0);
    }, []),
    S = a.useCallback(function (r) {
      var l = r;
      if (!(!k.length || k[k.length - 1] !== s)) {
        var f = "deltaY" in l ? A(l) : N(l),
          h = t.current.filter(function (i) {
            return i.name === l.type && i.target === l.target && ne(i.delta, f);
          })[0];
        if (h && h.should) {
          l.cancelable && l.preventDefault();
          return;
        }
        if (!h) {
          var d = (v.current.shards || [])
              .map(H)
              .filter(Boolean)
              .filter(function (i) {
                return i.contains(l.target);
              }),
            m = d.length > 0 ? c(l, d[0]) : !v.current.noIsolation;
          m && l.cancelable && l.preventDefault();
        }
      }
    }, []),
    g = a.useCallback(function (r, l, f, h) {
      var d = { name: r, delta: l, target: f, should: h };
      t.current.push(d),
        setTimeout(function () {
          t.current = t.current.filter(function (m) {
            return m !== d;
          });
        }, 1);
    }, []),
    C = a.useCallback(function (r) {
      (n.current = N(r)), (o.current = void 0);
    }, []),
    b = a.useCallback(function (r) {
      g(r.type, A(r), r.target, c(r, e.lockRef.current));
    }, []),
    y = a.useCallback(function (r) {
      g(r.type, N(r), r.target, c(r, e.lockRef.current));
    }, []);
  a.useEffect(function () {
    return (
      k.push(s),
      e.setCallbacks({
        onScrollCapture: b,
        onWheelCapture: b,
        onTouchMoveCapture: y,
      }),
      document.addEventListener("wheel", S, E),
      document.addEventListener("touchmove", S, E),
      document.addEventListener("touchstart", C, E),
      function () {
        (k = k.filter(function (r) {
          return r !== s;
        })),
          document.removeEventListener("wheel", S, E),
          document.removeEventListener("touchmove", S, E),
          document.removeEventListener("touchstart", C, E);
      }
    );
  }, []);
  var w = e.removeScrollBar,
    R = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    R ? a.createElement(s, { styles: le(u) }) : null,
    w ? a.createElement(q, { gapMode: "margin" }) : null,
  );
}
const ie = J(V, ce);
var ue = a.forwardRef(function (e, t) {
  return a.createElement(X, B({}, e, { ref: t, sideCar: ie }));
});
ue.classNames = X.classNames;
export { ue as R };
