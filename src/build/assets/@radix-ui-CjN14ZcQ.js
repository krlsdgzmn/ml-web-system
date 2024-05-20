import { _ as h } from "./@babel-CCbyfPlC.js";
import { r as t, R as ie, $ as Hn } from "./react-i33jQOB4.js";
import { h as Ue } from "./aria-hidden-DQ5UC2Eg.js";
import { R as Ve } from "./react-remove-scroll-Bs1wwM7Q.js";
import { r as Ie, R as Wn } from "./react-dom-BEqY4yZs.js";
import {
  u as Gn,
  a as zn,
  o as Yn,
  s as Xn,
  f as jn,
  b as qn,
  c as Zn,
  h as Jn,
  l as Qn,
} from "./@floating-ui-BjAKBcZC.js";
function eo(e, o) {
  typeof e == "function" ? e(o) : e != null && (e.current = o);
}
function Be(...e) {
  return (o) => e.forEach((n) => eo(n, o));
}
function M(...e) {
  return t.useCallback(Be(...e), e);
}
const $e = t.forwardRef((e, o) => {
  const { children: n, ...r } = e,
    c = t.Children.toArray(n),
    s = c.find(no);
  if (s) {
    const i = s.props.children,
      a = c.map((d) =>
        d === s
          ? t.Children.count(i) > 1
            ? t.Children.only(null)
            : t.isValidElement(i)
              ? i.props.children
              : null
          : d,
      );
    return t.createElement(
      ot,
      h({}, r, { ref: o }),
      t.isValidElement(i) ? t.cloneElement(i, void 0, a) : null,
    );
  }
  return t.createElement(ot, h({}, r, { ref: o }), n);
});
$e.displayName = "Slot";
const ot = t.forwardRef((e, o) => {
  const { children: n, ...r } = e;
  return t.isValidElement(n)
    ? t.cloneElement(n, { ...oo(r, n.props), ref: o ? Be(o, n.ref) : n.ref })
    : t.Children.count(n) > 1
      ? t.Children.only(null)
      : null;
});
ot.displayName = "SlotClone";
const to = ({ children: e }) => t.createElement(t.Fragment, null, e);
function no(e) {
  return t.isValidElement(e) && e.type === to;
}
function oo(e, o) {
  const n = { ...o };
  for (const r in o) {
    const c = e[r],
      s = o[r];
    /^on[A-Z]/.test(r)
      ? c && s
        ? (n[r] = (...a) => {
            s(...a), c(...a);
          })
        : c && (n[r] = c)
      : r === "style"
        ? (n[r] = { ...c, ...s })
        : r === "className" && (n[r] = [c, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function x(e, o, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (c) {
    if ((e == null || e(c), n === !1 || !c.defaultPrevented))
      return o == null ? void 0 : o(c);
  };
}
function fe(e, o = []) {
  let n = [];
  function r(s, i) {
    const a = t.createContext(i),
      d = n.length;
    n = [...n, i];
    function l(u) {
      const { scope: E, children: v, ...m } = u,
        p = (E == null ? void 0 : E[e][d]) || a,
        b = t.useMemo(() => m, Object.values(m));
      return t.createElement(p.Provider, { value: b }, v);
    }
    function f(u, E) {
      const v = (E == null ? void 0 : E[e][d]) || a,
        m = t.useContext(v);
      if (m) return m;
      if (i !== void 0) return i;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return (l.displayName = s + "Provider"), [l, f];
  }
  const c = () => {
    const s = n.map((i) => t.createContext(i));
    return function (a) {
      const d = (a == null ? void 0 : a[e]) || s;
      return t.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: d } }), [a, d]);
    };
  };
  return (c.scopeName = e), [r, ro(c, ...o)];
}
function ro(...e) {
  const o = e[0];
  if (e.length === 1) return o;
  const n = () => {
    const r = e.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: d, scopeName: l }) => {
        const u = d(s)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return t.useMemo(() => ({ [`__scope${o.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = o.scopeName), n;
}
function Q(e) {
  const o = t.useRef(e);
  return (
    t.useEffect(() => {
      o.current = e;
    }),
    t.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = o.current) === null || r === void 0
            ? void 0
            : r.call(o, ...n);
        },
      [],
    )
  );
}
function me({ prop: e, defaultProp: o, onChange: n = () => {} }) {
  const [r, c] = co({ defaultProp: o, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    a = Q(n),
    d = t.useCallback(
      (l) => {
        if (s) {
          const u = typeof l == "function" ? l(e) : l;
          u !== e && a(u);
        } else c(l);
      },
      [s, e, c, a],
    );
  return [i, d];
}
function co({ defaultProp: e, onChange: o }) {
  const n = t.useState(e),
    [r] = n,
    c = t.useRef(r),
    s = Q(o);
  return (
    t.useEffect(() => {
      c.current !== r && (s(r), (c.current = r));
    }, [r, c, s]),
    n
  );
}
const so = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  O = so.reduce((e, o) => {
    const n = t.forwardRef((r, c) => {
      const { asChild: s, ...i } = r,
        a = s ? $e : o;
      return (
        t.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        t.createElement(a, h({}, i, { ref: c }))
      );
    });
    return (n.displayName = `Primitive.${o}`), { ...e, [o]: n };
  }, {});
function ft(e, o) {
  e && Ie.flushSync(() => e.dispatchEvent(o));
}
function He(e) {
  const o = e + "CollectionProvider",
    [n, r] = fe(o),
    [c, s] = n(o, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (v) => {
      const { scope: m, children: p } = v,
        b = ie.useRef(null),
        g = ie.useRef(new Map()).current;
      return ie.createElement(c, { scope: m, itemMap: g, collectionRef: b }, p);
    },
    a = e + "CollectionSlot",
    d = ie.forwardRef((v, m) => {
      const { scope: p, children: b } = v,
        g = s(a, p),
        $ = M(m, g.collectionRef);
      return ie.createElement($e, { ref: $ }, b);
    }),
    l = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    u = ie.forwardRef((v, m) => {
      const { scope: p, children: b, ...g } = v,
        $ = ie.useRef(null),
        w = M(m, $),
        P = s(l, p);
      return (
        ie.useEffect(
          () => (
            P.itemMap.set($, { ref: $, ...g }), () => void P.itemMap.delete($)
          ),
        ),
        ie.createElement($e, { [f]: "", ref: w }, b)
      );
    });
  function E(v) {
    const m = s(e + "CollectionConsumer", v);
    return ie.useCallback(() => {
      const b = m.collectionRef.current;
      if (!b) return [];
      const g = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(m.itemMap.values()).sort(
        (P, R) => g.indexOf(P.ref.current) - g.indexOf(R.ref.current),
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [{ Provider: i, Slot: d, ItemSlot: u }, E, r];
}
const ao = t.createContext(void 0);
function pt(e) {
  const o = t.useContext(ao);
  return e || o || "ltr";
}
function io(e, o = globalThis == null ? void 0 : globalThis.document) {
  const n = Q(e);
  t.useEffect(() => {
    const r = (c) => {
      c.key === "Escape" && n(c);
    };
    return (
      o.addEventListener("keydown", r),
      () => o.removeEventListener("keydown", r)
    );
  }, [n, o]);
}
const rt = "dismissableLayer.update",
  lo = "dismissableLayer.pointerDownOutside",
  uo = "dismissableLayer.focusOutside";
let Rt;
const Wt = t.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Oe = t.forwardRef((e, o) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: d,
        ...l
      } = e,
      f = t.useContext(Wt),
      [u, E] = t.useState(null),
      v =
        (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, m] = t.useState({}),
      p = M(o, (S) => E(S)),
      b = Array.from(f.layers),
      [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      $ = b.indexOf(g),
      w = u ? b.indexOf(u) : -1,
      P = f.layersWithOutsidePointerEventsDisabled.size > 0,
      R = w >= $,
      A = po((S) => {
        const D = S.target,
          B = [...f.branches].some((H) => H.contains(D));
        !R ||
          B ||
          (s == null || s(S),
          a == null || a(S),
          S.defaultPrevented || d == null || d());
      }, v),
      T = $o((S) => {
        const D = S.target;
        [...f.branches].some((H) => H.contains(D)) ||
          (i == null || i(S),
          a == null || a(S),
          S.defaultPrevented || d == null || d());
      }, v);
    return (
      io((S) => {
        w === f.layers.size - 1 &&
          (c == null || c(S),
          !S.defaultPrevented && d && (S.preventDefault(), d()));
      }, v),
      t.useEffect(() => {
        if (u)
          return (
            r &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rt = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              f.layersWithOutsidePointerEventsDisabled.add(u)),
            f.layers.add(u),
            It(),
            () => {
              r &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = Rt);
            }
          );
      }, [u, v, r, f]),
      t.useEffect(
        () => () => {
          u &&
            (f.layers.delete(u),
            f.layersWithOutsidePointerEventsDisabled.delete(u),
            It());
        },
        [u, f],
      ),
      t.useEffect(() => {
        const S = () => m({});
        return (
          document.addEventListener(rt, S),
          () => document.removeEventListener(rt, S)
        );
      }, []),
      t.createElement(
        O.div,
        h({}, l, {
          ref: p,
          style: {
            pointerEvents: P ? (R ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: x(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: x(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: x(
            e.onPointerDownCapture,
            A.onPointerDownCapture,
          ),
        }),
      )
    );
  }),
  fo = t.forwardRef((e, o) => {
    const n = t.useContext(Wt),
      r = t.useRef(null),
      c = M(o, r);
    return (
      t.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      t.createElement(O.div, h({}, e, { ref: c }))
    );
  });
function po(e, o = globalThis == null ? void 0 : globalThis.document) {
  const n = Q(e),
    r = t.useRef(!1),
    c = t.useRef(() => {});
  return (
    t.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Gt(lo, n, d, { discrete: !0 });
            };
            const d = { originalEvent: a };
            a.pointerType === "touch"
              ? (o.removeEventListener("click", c.current),
                (c.current = l),
                o.addEventListener("click", c.current, { once: !0 }))
              : l();
          } else o.removeEventListener("click", c.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          o.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          o.removeEventListener("pointerdown", s),
          o.removeEventListener("click", c.current);
      };
    }, [o, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function $o(e, o = globalThis == null ? void 0 : globalThis.document) {
  const n = Q(e),
    r = t.useRef(!1);
  return (
    t.useEffect(() => {
      const c = (s) => {
        s.target &&
          !r.current &&
          Gt(uo, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", c),
        () => o.removeEventListener("focusin", c)
      );
    }, [o, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function It() {
  const e = new CustomEvent(rt);
  document.dispatchEvent(e);
}
function Gt(e, o, n, { discrete: r }) {
  const c = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  o && c.addEventListener(e, o, { once: !0 }),
    r ? ft(c, s) : c.dispatchEvent(s);
}
const mo = Oe,
  vo = fo;
let Je = 0;
function We() {
  t.useEffect(() => {
    var e, o;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Ot(),
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (o = n[1]) !== null && o !== void 0 ? o : Ot(),
      ),
      Je++,
      () => {
        Je === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Je--;
      }
    );
  }, []);
}
function Ot() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const Qe = "focusScope.autoFocusOnMount",
  et = "focusScope.autoFocusOnUnmount",
  Dt = { bubbles: !1, cancelable: !0 },
  Ge = t.forwardRef((e, o) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: c,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [a, d] = t.useState(null),
      l = Q(c),
      f = Q(s),
      u = t.useRef(null),
      E = M(o, (p) => d(p)),
      v = t.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    t.useEffect(() => {
      if (r) {
        let p = function (w) {
            if (v.paused || !a) return;
            const P = w.target;
            a.contains(P) ? (u.current = P) : pe(u.current, { select: !0 });
          },
          b = function (w) {
            if (v.paused || !a) return;
            const P = w.relatedTarget;
            P !== null && (a.contains(P) || pe(u.current, { select: !0 }));
          },
          g = function (w) {
            if (document.activeElement === document.body)
              for (const R of w) R.removedNodes.length > 0 && pe(a);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", b);
        const $ = new MutationObserver(g);
        return (
          a && $.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", b),
              $.disconnect();
          }
        );
      }
    }, [r, a, v.paused]),
      t.useEffect(() => {
        if (a) {
          At.add(v);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const g = new CustomEvent(Qe, Dt);
            a.addEventListener(Qe, l),
              a.dispatchEvent(g),
              g.defaultPrevented ||
                (bo(xo(zt(a)), { select: !0 }),
                document.activeElement === p && pe(a));
          }
          return () => {
            a.removeEventListener(Qe, l),
              setTimeout(() => {
                const g = new CustomEvent(et, Dt);
                a.addEventListener(et, f),
                  a.dispatchEvent(g),
                  g.defaultPrevented || pe(p ?? document.body, { select: !0 }),
                  a.removeEventListener(et, f),
                  At.remove(v);
              }, 0);
          };
        }
      }, [a, l, f, v]);
    const m = t.useCallback(
      (p) => {
        if ((!n && !r) || v.paused) return;
        const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          g = document.activeElement;
        if (b && g) {
          const $ = p.currentTarget,
            [w, P] = go($);
          w && P
            ? !p.shiftKey && g === P
              ? (p.preventDefault(), n && pe(w, { select: !0 }))
              : p.shiftKey &&
                g === w &&
                (p.preventDefault(), n && pe(P, { select: !0 }))
            : g === $ && p.preventDefault();
        }
      },
      [n, r, v.paused],
    );
    return t.createElement(
      O.div,
      h({ tabIndex: -1 }, i, { ref: E, onKeyDown: m }),
    );
  });
function bo(e, { select: o = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((pe(r, { select: o }), document.activeElement !== n)) return;
}
function go(e) {
  const o = zt(e),
    n = Mt(o, e),
    r = Mt(o.reverse(), e);
  return [n, r];
}
function zt(e) {
  const o = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const c = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || c
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) o.push(n.currentNode);
  return o;
}
function Mt(e, o) {
  for (const n of e) if (!ho(n, { upTo: o })) return n;
}
function ho(e, { upTo: o }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (o !== void 0 && e === o) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Eo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pe(e, { select: o = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Eo(e) && o && e.select();
  }
}
const At = wo();
function wo() {
  let e = [];
  return {
    add(o) {
      const n = e[0];
      o !== n && (n == null || n.pause()), (e = Ft(e, o)), e.unshift(o);
    },
    remove(o) {
      var n;
      (e = Ft(e, o)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Ft(e, o) {
  const n = [...e],
    r = n.indexOf(o);
  return r !== -1 && n.splice(r, 1), n;
}
function xo(e) {
  return e.filter((o) => o.tagName !== "A");
}
const ee =
    globalThis != null && globalThis.document ? t.useLayoutEffect : () => {},
  Co = Hn.useId || (() => {});
let _o = 0;
function ue(e) {
  const [o, n] = t.useState(Co());
  return (
    ee(() => {
      n((r) => r ?? String(_o++));
    }, [e]),
    o ? `radix-${o}` : ""
  );
}
function Po(e) {
  const [o, n] = t.useState(void 0);
  return (
    ee(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const s = c[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const d = s.borderBoxSize,
              l = Array.isArray(d) ? d[0] : d;
            (i = l.inlineSize), (a = l.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    o
  );
}
const Yt = "Popper",
  [Xt, xe] = fe(Yt),
  [yo, jt] = Xt(Yt),
  To = (e) => {
    const { __scopePopper: o, children: n } = e,
      [r, c] = t.useState(null);
    return t.createElement(yo, { scope: o, anchor: r, onAnchorChange: c }, n);
  },
  So = "PopperAnchor",
  Ro = t.forwardRef((e, o) => {
    const { __scopePopper: n, virtualRef: r, ...c } = e,
      s = jt(So, n),
      i = t.useRef(null),
      a = M(o, i);
    return (
      t.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : t.createElement(O.div, h({}, c, { ref: a }))
    );
  }),
  qt = "PopperContent",
  [Io, Ls] = Xt(qt),
  Oo = t.forwardRef((e, o) => {
    var n, r, c, s, i, a, d, l;
    const {
        __scopePopper: f,
        side: u = "bottom",
        sideOffset: E = 0,
        align: v = "center",
        alignOffset: m = 0,
        arrowPadding: p = 0,
        avoidCollisions: b = !0,
        collisionBoundary: g = [],
        collisionPadding: $ = 0,
        sticky: w = "partial",
        hideWhenDetached: P = !1,
        updatePositionStrategy: R = "optimized",
        onPlaced: A,
        ...T
      } = e,
      S = jt(qt, f),
      [D, B] = t.useState(null),
      H = M(o, (le) => B(le)),
      [F, Y] = t.useState(null),
      C = Po(F),
      I = (n = C == null ? void 0 : C.width) !== null && n !== void 0 ? n : 0,
      W = (r = C == null ? void 0 : C.height) !== null && r !== void 0 ? r : 0,
      X = u + (v !== "center" ? "-" + v : ""),
      z =
        typeof $ == "number"
          ? $
          : { top: 0, right: 0, bottom: 0, left: 0, ...$ },
      _ = Array.isArray(g) ? g : [g],
      V = _.length > 0,
      G = { padding: z, boundary: _.filter(Do), altBoundary: V },
      {
        refs: j,
        floatingStyles: q,
        placement: J,
        isPositioned: oe,
        middlewareData: Z,
      } = Gn({
        strategy: "fixed",
        placement: X,
        whileElementsMounted: (...le) =>
          zn(...le, { animationFrame: R === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          Yn({ mainAxis: E + W, alignmentAxis: m }),
          b &&
            Xn({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? Qn() : void 0,
              ...G,
            }),
          b && jn({ ...G }),
          qn({
            ...G,
            apply: ({
              elements: le,
              rects: Ee,
              availableWidth: Pe,
              availableHeight: Un,
            }) => {
              const { width: Vn, height: Bn } = Ee.reference,
                Ae = le.floating.style;
              Ae.setProperty("--radix-popper-available-width", `${Pe}px`),
                Ae.setProperty("--radix-popper-available-height", `${Un}px`),
                Ae.setProperty("--radix-popper-anchor-width", `${Vn}px`),
                Ae.setProperty("--radix-popper-anchor-height", `${Bn}px`);
            },
          }),
          F && Zn({ element: F, padding: p }),
          Mo({ arrowWidth: I, arrowHeight: W }),
          P && Jn({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [y, N] = Zt(J),
      k = Q(A);
    ee(() => {
      oe && (k == null || k());
    }, [oe, k]);
    const L = (c = Z.arrow) === null || c === void 0 ? void 0 : c.x,
      K = (s = Z.arrow) === null || s === void 0 ? void 0 : s.y,
      U =
        ((i = Z.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [te, ne] = t.useState();
    return (
      ee(() => {
        D && ne(window.getComputedStyle(D).zIndex);
      }, [D]),
      t.createElement(
        "div",
        {
          ref: j.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...q,
            transform: oe ? q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: te,
            "--radix-popper-transform-origin": [
              (a = Z.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (d = Z.transformOrigin) === null || d === void 0 ? void 0 : d.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        t.createElement(
          Io,
          {
            scope: f,
            placedSide: y,
            onArrowChange: Y,
            arrowX: L,
            arrowY: K,
            shouldHideArrow: U,
          },
          t.createElement(
            O.div,
            h({ "data-side": y, "data-align": N }, T, {
              ref: H,
              style: {
                ...T.style,
                animation: oe ? void 0 : "none",
                opacity:
                  (l = Z.hide) !== null && l !== void 0 && l.referenceHidden
                    ? 0
                    : void 0,
              },
            }),
          ),
        ),
      )
    );
  });
function Do(e) {
  return e !== null;
}
const Mo = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(o) {
    var n, r, c, s, i;
    const { placement: a, rects: d, middlewareData: l } = o,
      u =
        ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      E = u ? 0 : e.arrowWidth,
      v = u ? 0 : e.arrowHeight,
      [m, p] = Zt(a),
      b = { start: "0%", center: "50%", end: "100%" }[p],
      g =
        ((r = (c = l.arrow) === null || c === void 0 ? void 0 : c.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        E / 2,
      $ =
        ((s = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        s !== void 0
          ? s
          : 0) +
        v / 2;
    let w = "",
      P = "";
    return (
      m === "bottom"
        ? ((w = u ? b : `${g}px`), (P = `${-v}px`))
        : m === "top"
          ? ((w = u ? b : `${g}px`), (P = `${d.floating.height + v}px`))
          : m === "right"
            ? ((w = `${-v}px`), (P = u ? b : `${$}px`))
            : m === "left" &&
              ((w = `${d.floating.width + v}px`), (P = u ? b : `${$}px`)),
      { data: { x: w, y: P } }
    );
  },
});
function Zt(e) {
  const [o, n = "center"] = e.split("-");
  return [o, n];
}
const $t = To,
  mt = Ro,
  vt = Oo,
  De = t.forwardRef((e, o) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...c
    } = e;
    return r
      ? Wn.createPortal(t.createElement(O.div, h({}, c, { ref: o })), r)
      : null;
  });
function Ao(e, o) {
  return t.useReducer((n, r) => {
    const c = o[n][r];
    return c ?? n;
  }, e);
}
const se = (e) => {
  const { present: o, children: n } = e,
    r = Fo(o),
    c =
      typeof n == "function" ? n({ present: r.isPresent }) : t.Children.only(n),
    s = M(r.ref, c.ref);
  return typeof n == "function" || r.isPresent
    ? t.cloneElement(c, { ref: s })
    : null;
};
se.displayName = "Presence";
function Fo(e) {
  const [o, n] = t.useState(),
    r = t.useRef({}),
    c = t.useRef(e),
    s = t.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, d] = Ao(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    t.useEffect(() => {
      const l = Fe(r.current);
      s.current = a === "mounted" ? l : "none";
    }, [a]),
    ee(() => {
      const l = r.current,
        f = c.current;
      if (f !== e) {
        const E = s.current,
          v = Fe(l);
        e
          ? d("MOUNT")
          : v === "none" || (l == null ? void 0 : l.display) === "none"
            ? d("UNMOUNT")
            : d(f && E !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = e);
      }
    }, [e, d]),
    ee(() => {
      if (o) {
        const l = (u) => {
            const v = Fe(r.current).includes(u.animationName);
            u.target === o && v && Ie.flushSync(() => d("ANIMATION_END"));
          },
          f = (u) => {
            u.target === o && (s.current = Fe(r.current));
          };
        return (
          o.addEventListener("animationstart", f),
          o.addEventListener("animationcancel", l),
          o.addEventListener("animationend", l),
          () => {
            o.removeEventListener("animationstart", f),
              o.removeEventListener("animationcancel", l),
              o.removeEventListener("animationend", l);
          }
        );
      } else d("ANIMATION_END");
    }, [o, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: t.useCallback((l) => {
        l && (r.current = getComputedStyle(l)), n(l);
      }, []),
    }
  );
}
function Fe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const tt = "rovingFocusGroup.onEntryFocus",
  No = { bubbles: !1, cancelable: !0 },
  bt = "RovingFocusGroup",
  [ct, Jt, ko] = He(bt),
  [Lo, Qt] = fe(bt, [ko]),
  [Ko, Uo] = Lo(bt),
  Vo = t.forwardRef((e, o) =>
    t.createElement(
      ct.Provider,
      { scope: e.__scopeRovingFocusGroup },
      t.createElement(
        ct.Slot,
        { scope: e.__scopeRovingFocusGroup },
        t.createElement(Bo, h({}, e, { ref: o })),
      ),
    ),
  ),
  Bo = t.forwardRef((e, o) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: c = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: d,
        onEntryFocus: l,
        ...f
      } = e,
      u = t.useRef(null),
      E = M(o, u),
      v = pt(s),
      [m = null, p] = me({ prop: i, defaultProp: a, onChange: d }),
      [b, g] = t.useState(!1),
      $ = Q(l),
      w = Jt(n),
      P = t.useRef(!1),
      [R, A] = t.useState(0);
    return (
      t.useEffect(() => {
        const T = u.current;
        if (T)
          return T.addEventListener(tt, $), () => T.removeEventListener(tt, $);
      }, [$]),
      t.createElement(
        Ko,
        {
          scope: n,
          orientation: r,
          dir: v,
          loop: c,
          currentTabStopId: m,
          onItemFocus: t.useCallback((T) => p(T), [p]),
          onItemShiftTab: t.useCallback(() => g(!0), []),
          onFocusableItemAdd: t.useCallback(() => A((T) => T + 1), []),
          onFocusableItemRemove: t.useCallback(() => A((T) => T - 1), []),
        },
        t.createElement(
          O.div,
          h({ tabIndex: b || R === 0 ? -1 : 0, "data-orientation": r }, f, {
            ref: E,
            style: { outline: "none", ...e.style },
            onMouseDown: x(e.onMouseDown, () => {
              P.current = !0;
            }),
            onFocus: x(e.onFocus, (T) => {
              const S = !P.current;
              if (T.target === T.currentTarget && S && !b) {
                const D = new CustomEvent(tt, No);
                if ((T.currentTarget.dispatchEvent(D), !D.defaultPrevented)) {
                  const B = w().filter((I) => I.focusable),
                    H = B.find((I) => I.active),
                    F = B.find((I) => I.id === m),
                    C = [H, F, ...B].filter(Boolean).map((I) => I.ref.current);
                  en(C);
                }
              }
              P.current = !1;
            }),
            onBlur: x(e.onBlur, () => g(!1)),
          }),
        ),
      )
    );
  }),
  Ho = "RovingFocusGroupItem",
  Wo = t.forwardRef((e, o) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: c = !1,
        tabStopId: s,
        ...i
      } = e,
      a = ue(),
      d = s || a,
      l = Uo(Ho, n),
      f = l.currentTabStopId === d,
      u = Jt(n),
      { onFocusableItemAdd: E, onFocusableItemRemove: v } = l;
    return (
      t.useEffect(() => {
        if (r) return E(), () => v();
      }, [r, E, v]),
      t.createElement(
        ct.ItemSlot,
        { scope: n, id: d, focusable: r, active: c },
        t.createElement(
          O.span,
          h({ tabIndex: f ? 0 : -1, "data-orientation": l.orientation }, i, {
            ref: o,
            onMouseDown: x(e.onMouseDown, (m) => {
              r ? l.onItemFocus(d) : m.preventDefault();
            }),
            onFocus: x(e.onFocus, () => l.onItemFocus(d)),
            onKeyDown: x(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const p = Yo(m, l.orientation, l.dir);
              if (p !== void 0) {
                m.preventDefault();
                let g = u()
                  .filter(($) => $.focusable)
                  .map(($) => $.ref.current);
                if (p === "last") g.reverse();
                else if (p === "prev" || p === "next") {
                  p === "prev" && g.reverse();
                  const $ = g.indexOf(m.currentTarget);
                  g = l.loop ? Xo(g, $ + 1) : g.slice($ + 1);
                }
                setTimeout(() => en(g));
              }
            }),
          }),
        ),
      )
    );
  }),
  Go = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function zo(e, o) {
  return o !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function Yo(e, o, n) {
  const r = zo(e.key, n);
  if (
    !(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return Go[r];
}
function en(e) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus(), document.activeElement !== o)) return;
}
function Xo(e, o) {
  return e.map((n, r) => e[(o + r) % e.length]);
}
const jo = Vo,
  qo = Wo,
  st = ["Enter", " "],
  Zo = ["ArrowDown", "PageUp", "Home"],
  tn = ["ArrowUp", "PageDown", "End"],
  Jo = [...Zo, ...tn],
  Qo = { ltr: [...st, "ArrowRight"], rtl: [...st, "ArrowLeft"] },
  er = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  ze = "Menu",
  [ye, tr, nr] = He(ze),
  [ve, nn] = fe(ze, [nr, xe, Qt]),
  gt = xe(),
  on = Qt(),
  [or, be] = ve(ze),
  [rr, Me] = ve(ze),
  cr = (e) => {
    const {
        __scopeMenu: o,
        open: n = !1,
        children: r,
        dir: c,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = gt(o),
      [d, l] = t.useState(null),
      f = t.useRef(!1),
      u = Q(s),
      E = pt(c);
    return (
      t.useEffect(() => {
        const v = () => {
            (f.current = !0),
              document.addEventListener("pointerdown", m, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", m, {
                capture: !0,
                once: !0,
              });
          },
          m = () => (f.current = !1);
        return (
          document.addEventListener("keydown", v, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", v, { capture: !0 }),
              document.removeEventListener("pointerdown", m, { capture: !0 }),
              document.removeEventListener("pointermove", m, { capture: !0 });
          }
        );
      }, []),
      t.createElement(
        $t,
        a,
        t.createElement(
          or,
          {
            scope: o,
            open: n,
            onOpenChange: u,
            content: d,
            onContentChange: l,
          },
          t.createElement(
            rr,
            {
              scope: o,
              onClose: t.useCallback(() => u(!1), [u]),
              isUsingKeyboardRef: f,
              dir: E,
              modal: i,
            },
            r,
          ),
        ),
      )
    );
  },
  rn = t.forwardRef((e, o) => {
    const { __scopeMenu: n, ...r } = e,
      c = gt(n);
    return t.createElement(mt, h({}, c, r, { ref: o }));
  }),
  cn = "MenuPortal",
  [sr, sn] = ve(cn, { forceMount: void 0 }),
  ar = (e) => {
    const { __scopeMenu: o, forceMount: n, children: r, container: c } = e,
      s = be(cn, o);
    return t.createElement(
      sr,
      { scope: o, forceMount: n },
      t.createElement(
        se,
        { present: n || s.open },
        t.createElement(De, { asChild: !0, container: c }, r),
      ),
    );
  },
  ce = "MenuContent",
  [ir, ht] = ve(ce),
  lr = t.forwardRef((e, o) => {
    const n = sn(ce, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...c } = e,
      s = be(ce, e.__scopeMenu),
      i = Me(ce, e.__scopeMenu);
    return t.createElement(
      ye.Provider,
      { scope: e.__scopeMenu },
      t.createElement(
        se,
        { present: r || s.open },
        t.createElement(
          ye.Slot,
          { scope: e.__scopeMenu },
          i.modal
            ? t.createElement(dr, h({}, c, { ref: o }))
            : t.createElement(ur, h({}, c, { ref: o })),
        ),
      ),
    );
  }),
  dr = t.forwardRef((e, o) => {
    const n = be(ce, e.__scopeMenu),
      r = t.useRef(null),
      c = M(o, r);
    return (
      t.useEffect(() => {
        const s = r.current;
        if (s) return Ue(s);
      }, []),
      t.createElement(
        Et,
        h({}, e, {
          ref: c,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: x(e.onFocusOutside, (s) => s.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        }),
      )
    );
  }),
  ur = t.forwardRef((e, o) => {
    const n = be(ce, e.__scopeMenu);
    return t.createElement(
      Et,
      h({}, e, {
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      }),
    );
  }),
  Et = t.forwardRef((e, o) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: c,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEntryFocus: d,
        onEscapeKeyDown: l,
        onPointerDownOutside: f,
        onFocusOutside: u,
        onInteractOutside: E,
        onDismiss: v,
        disableOutsideScroll: m,
        ...p
      } = e,
      b = be(ce, n),
      g = Me(ce, n),
      $ = gt(n),
      w = on(n),
      P = tr(n),
      [R, A] = t.useState(null),
      T = t.useRef(null),
      S = M(o, T, b.onContentChange),
      D = t.useRef(0),
      B = t.useRef(""),
      H = t.useRef(0),
      F = t.useRef(null),
      Y = t.useRef("right"),
      C = t.useRef(0),
      I = m ? Ve : t.Fragment,
      W = m ? { as: $e, allowPinchZoom: !0 } : void 0,
      X = (_) => {
        var V, G;
        const j = B.current + _,
          q = P().filter((k) => !k.disabled),
          J = document.activeElement,
          oe =
            (V = q.find((k) => k.ref.current === J)) === null || V === void 0
              ? void 0
              : V.textValue,
          Z = q.map((k) => k.textValue),
          y = Tr(Z, j, oe),
          N =
            (G = q.find((k) => k.textValue === y)) === null || G === void 0
              ? void 0
              : G.ref.current;
        (function k(L) {
          (B.current = L),
            window.clearTimeout(D.current),
            L !== "" && (D.current = window.setTimeout(() => k(""), 1e3));
        })(j),
          N && setTimeout(() => N.focus());
      };
    t.useEffect(() => () => window.clearTimeout(D.current), []), We();
    const z = t.useCallback((_) => {
      var V, G;
      return (
        Y.current ===
          ((V = F.current) === null || V === void 0 ? void 0 : V.side) &&
        Rr(_, (G = F.current) === null || G === void 0 ? void 0 : G.area)
      );
    }, []);
    return t.createElement(
      ir,
      {
        scope: n,
        searchRef: B,
        onItemEnter: t.useCallback(
          (_) => {
            z(_) && _.preventDefault();
          },
          [z],
        ),
        onItemLeave: t.useCallback(
          (_) => {
            var V;
            z(_) ||
              ((V = T.current) === null || V === void 0 || V.focus(), A(null));
          },
          [z],
        ),
        onTriggerLeave: t.useCallback(
          (_) => {
            z(_) && _.preventDefault();
          },
          [z],
        ),
        pointerGraceTimerRef: H,
        onPointerGraceIntentChange: t.useCallback((_) => {
          F.current = _;
        }, []),
      },
      t.createElement(
        I,
        W,
        t.createElement(
          Ge,
          {
            asChild: !0,
            trapped: c,
            onMountAutoFocus: x(s, (_) => {
              var V;
              _.preventDefault(),
                (V = T.current) === null || V === void 0 || V.focus();
            }),
            onUnmountAutoFocus: i,
          },
          t.createElement(
            Oe,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: f,
              onFocusOutside: u,
              onInteractOutside: E,
              onDismiss: v,
            },
            t.createElement(
              jo,
              h({ asChild: !0 }, w, {
                dir: g.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: R,
                onCurrentTabStopIdChange: A,
                onEntryFocus: x(d, (_) => {
                  g.isUsingKeyboardRef.current || _.preventDefault();
                }),
              }),
              t.createElement(
                vt,
                h(
                  {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": fn(b.open),
                    "data-radix-menu-content": "",
                    dir: g.dir,
                  },
                  $,
                  p,
                  {
                    ref: S,
                    style: { outline: "none", ...p.style },
                    onKeyDown: x(p.onKeyDown, (_) => {
                      const G =
                          _.target.closest("[data-radix-menu-content]") ===
                          _.currentTarget,
                        j = _.ctrlKey || _.altKey || _.metaKey,
                        q = _.key.length === 1;
                      G &&
                        (_.key === "Tab" && _.preventDefault(),
                        !j && q && X(_.key));
                      const J = T.current;
                      if (_.target !== J || !Jo.includes(_.key)) return;
                      _.preventDefault();
                      const Z = P()
                        .filter((y) => !y.disabled)
                        .map((y) => y.ref.current);
                      tn.includes(_.key) && Z.reverse(), Pr(Z);
                    }),
                    onBlur: x(e.onBlur, (_) => {
                      _.currentTarget.contains(_.target) ||
                        (window.clearTimeout(D.current), (B.current = ""));
                    }),
                    onPointerMove: x(
                      e.onPointerMove,
                      Te((_) => {
                        const V = _.target,
                          G = C.current !== _.clientX;
                        if (_.currentTarget.contains(V) && G) {
                          const j = _.clientX > C.current ? "right" : "left";
                          (Y.current = j), (C.current = _.clientX);
                        }
                      }),
                    ),
                  },
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }),
  fr = t.forwardRef((e, o) => {
    const { __scopeMenu: n, ...r } = e;
    return t.createElement(O.div, h({}, r, { ref: o }));
  }),
  at = "MenuItem",
  Nt = "menu.itemSelect",
  wt = t.forwardRef((e, o) => {
    const { disabled: n = !1, onSelect: r, ...c } = e,
      s = t.useRef(null),
      i = Me(at, e.__scopeMenu),
      a = ht(at, e.__scopeMenu),
      d = M(o, s),
      l = t.useRef(!1),
      f = () => {
        const u = s.current;
        if (!n && u) {
          const E = new CustomEvent(Nt, { bubbles: !0, cancelable: !0 });
          u.addEventListener(Nt, (v) => (r == null ? void 0 : r(v)), {
            once: !0,
          }),
            ft(u, E),
            E.defaultPrevented ? (l.current = !1) : i.onClose();
        }
      };
    return t.createElement(
      an,
      h({}, c, {
        ref: d,
        disabled: n,
        onClick: x(e.onClick, f),
        onPointerDown: (u) => {
          var E;
          (E = e.onPointerDown) === null || E === void 0 || E.call(e, u),
            (l.current = !0);
        },
        onPointerUp: x(e.onPointerUp, (u) => {
          var E;
          l.current ||
            (E = u.currentTarget) === null ||
            E === void 0 ||
            E.click();
        }),
        onKeyDown: x(e.onKeyDown, (u) => {
          const E = a.searchRef.current !== "";
          n ||
            (E && u.key === " ") ||
            (st.includes(u.key) &&
              (u.currentTarget.click(), u.preventDefault()));
        }),
      }),
    );
  }),
  an = t.forwardRef((e, o) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: c, ...s } = e,
      i = ht(at, n),
      a = on(n),
      d = t.useRef(null),
      l = M(o, d),
      [f, u] = t.useState(!1),
      [E, v] = t.useState("");
    return (
      t.useEffect(() => {
        const m = d.current;
        if (m) {
          var p;
          v(((p = m.textContent) !== null && p !== void 0 ? p : "").trim());
        }
      }, [s.children]),
      t.createElement(
        ye.ItemSlot,
        { scope: n, disabled: r, textValue: c ?? E },
        t.createElement(
          qo,
          h({ asChild: !0 }, a, { focusable: !r }),
          t.createElement(
            O.div,
            h(
              {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
              },
              s,
              {
                ref: l,
                onPointerMove: x(
                  e.onPointerMove,
                  Te((m) => {
                    r
                      ? i.onItemLeave(m)
                      : (i.onItemEnter(m),
                        m.defaultPrevented || m.currentTarget.focus());
                  }),
                ),
                onPointerLeave: x(
                  e.onPointerLeave,
                  Te((m) => i.onItemLeave(m)),
                ),
                onFocus: x(e.onFocus, () => u(!0)),
                onBlur: x(e.onBlur, () => u(!1)),
              },
            ),
          ),
        ),
      )
    );
  }),
  pr = t.forwardRef((e, o) => {
    const { checked: n = !1, onCheckedChange: r, ...c } = e;
    return t.createElement(
      dn,
      { scope: e.__scopeMenu, checked: n },
      t.createElement(
        wt,
        h(
          { role: "menuitemcheckbox", "aria-checked": Ke(n) ? "mixed" : n },
          c,
          {
            ref: o,
            "data-state": xt(n),
            onSelect: x(
              c.onSelect,
              () => (r == null ? void 0 : r(Ke(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 },
            ),
          },
        ),
      ),
    );
  }),
  $r = "MenuRadioGroup",
  [Ks, mr] = ve($r, { value: void 0, onValueChange: () => {} }),
  vr = "MenuRadioItem",
  br = t.forwardRef((e, o) => {
    const { value: n, ...r } = e,
      c = mr(vr, e.__scopeMenu),
      s = n === c.value;
    return t.createElement(
      dn,
      { scope: e.__scopeMenu, checked: s },
      t.createElement(
        wt,
        h({ role: "menuitemradio", "aria-checked": s }, r, {
          ref: o,
          "data-state": xt(s),
          onSelect: x(
            r.onSelect,
            () => {
              var i;
              return (i = c.onValueChange) === null || i === void 0
                ? void 0
                : i.call(c, n);
            },
            { checkForDefaultPrevented: !1 },
          ),
        }),
      ),
    );
  }),
  ln = "MenuItemIndicator",
  [dn, gr] = ve(ln, { checked: !1 }),
  hr = t.forwardRef((e, o) => {
    const { __scopeMenu: n, forceMount: r, ...c } = e,
      s = gr(ln, n);
    return t.createElement(
      se,
      { present: r || Ke(s.checked) || s.checked === !0 },
      t.createElement(
        O.span,
        h({}, c, { ref: o, "data-state": xt(s.checked) }),
      ),
    );
  }),
  Er = t.forwardRef((e, o) => {
    const { __scopeMenu: n, ...r } = e;
    return t.createElement(
      O.div,
      h({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: o }),
    );
  }),
  wr = "MenuSub",
  [Us, un] = ve(wr),
  Ne = "MenuSubTrigger",
  xr = t.forwardRef((e, o) => {
    const n = be(Ne, e.__scopeMenu),
      r = Me(Ne, e.__scopeMenu),
      c = un(Ne, e.__scopeMenu),
      s = ht(Ne, e.__scopeMenu),
      i = t.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: d } = s,
      l = { __scopeMenu: e.__scopeMenu },
      f = t.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      t.useEffect(() => f, [f]),
      t.useEffect(() => {
        const u = a.current;
        return () => {
          window.clearTimeout(u), d(null);
        };
      }, [a, d]),
      t.createElement(
        rn,
        h({ asChild: !0 }, l),
        t.createElement(
          an,
          h(
            {
              id: c.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": n.open,
              "aria-controls": c.contentId,
              "data-state": fn(n.open),
            },
            e,
            {
              ref: Be(o, c.onTriggerChange),
              onClick: (u) => {
                var E;
                (E = e.onClick) === null || E === void 0 || E.call(e, u),
                  !(e.disabled || u.defaultPrevented) &&
                    (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: x(
                e.onPointerMove,
                Te((u) => {
                  s.onItemEnter(u),
                    !u.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !i.current &&
                      (s.onPointerGraceIntentChange(null),
                      (i.current = window.setTimeout(() => {
                        n.onOpenChange(!0), f();
                      }, 100)));
                }),
              ),
              onPointerLeave: x(
                e.onPointerLeave,
                Te((u) => {
                  var E;
                  f();
                  const v =
                    (E = n.content) === null || E === void 0
                      ? void 0
                      : E.getBoundingClientRect();
                  if (v) {
                    var m;
                    const p =
                        (m = n.content) === null || m === void 0
                          ? void 0
                          : m.dataset.side,
                      b = p === "right",
                      g = b ? -5 : 5,
                      $ = v[b ? "left" : "right"],
                      w = v[b ? "right" : "left"];
                    s.onPointerGraceIntentChange({
                      area: [
                        { x: u.clientX + g, y: u.clientY },
                        { x: $, y: v.top },
                        { x: w, y: v.top },
                        { x: w, y: v.bottom },
                        { x: $, y: v.bottom },
                      ],
                      side: p,
                    }),
                      window.clearTimeout(a.current),
                      (a.current = window.setTimeout(
                        () => s.onPointerGraceIntentChange(null),
                        300,
                      ));
                  } else {
                    if ((s.onTriggerLeave(u), u.defaultPrevented)) return;
                    s.onPointerGraceIntentChange(null);
                  }
                }),
              ),
              onKeyDown: x(e.onKeyDown, (u) => {
                const E = s.searchRef.current !== "";
                if (
                  !(e.disabled || (E && u.key === " ")) &&
                  Qo[r.dir].includes(u.key)
                ) {
                  var v;
                  n.onOpenChange(!0),
                    (v = n.content) === null || v === void 0 || v.focus(),
                    u.preventDefault();
                }
              }),
            },
          ),
        ),
      )
    );
  }),
  Cr = "MenuSubContent",
  _r = t.forwardRef((e, o) => {
    const n = sn(ce, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...c } = e,
      s = be(ce, e.__scopeMenu),
      i = Me(ce, e.__scopeMenu),
      a = un(Cr, e.__scopeMenu),
      d = t.useRef(null),
      l = M(o, d);
    return t.createElement(
      ye.Provider,
      { scope: e.__scopeMenu },
      t.createElement(
        se,
        { present: r || s.open },
        t.createElement(
          ye.Slot,
          { scope: e.__scopeMenu },
          t.createElement(
            Et,
            h({ id: a.contentId, "aria-labelledby": a.triggerId }, c, {
              ref: l,
              align: "start",
              side: i.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (f) => {
                var u;
                i.isUsingKeyboardRef.current &&
                  ((u = d.current) === null || u === void 0 || u.focus()),
                  f.preventDefault();
              },
              onCloseAutoFocus: (f) => f.preventDefault(),
              onFocusOutside: x(e.onFocusOutside, (f) => {
                f.target !== a.trigger && s.onOpenChange(!1);
              }),
              onEscapeKeyDown: x(e.onEscapeKeyDown, (f) => {
                i.onClose(), f.preventDefault();
              }),
              onKeyDown: x(e.onKeyDown, (f) => {
                const u = f.currentTarget.contains(f.target),
                  E = er[i.dir].includes(f.key);
                if (u && E) {
                  var v;
                  s.onOpenChange(!1),
                    (v = a.trigger) === null || v === void 0 || v.focus(),
                    f.preventDefault();
                }
              }),
            }),
          ),
        ),
      ),
    );
  });
function fn(e) {
  return e ? "open" : "closed";
}
function Ke(e) {
  return e === "indeterminate";
}
function xt(e) {
  return Ke(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Pr(e) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus(), document.activeElement !== o)) return;
}
function yr(e, o) {
  return e.map((n, r) => e[(o + r) % e.length]);
}
function Tr(e, o, n) {
  const c = o.length > 1 && Array.from(o).every((l) => l === o[0]) ? o[0] : o,
    s = n ? e.indexOf(n) : -1;
  let i = yr(e, Math.max(s, 0));
  c.length === 1 && (i = i.filter((l) => l !== n));
  const d = i.find((l) => l.toLowerCase().startsWith(c.toLowerCase()));
  return d !== n ? d : void 0;
}
function Sr(e, o) {
  const { x: n, y: r } = e;
  let c = !1;
  for (let s = 0, i = o.length - 1; s < o.length; i = s++) {
    const a = o[s].x,
      d = o[s].y,
      l = o[i].x,
      f = o[i].y;
    d > r != f > r && n < ((l - a) * (r - d)) / (f - d) + a && (c = !c);
  }
  return c;
}
function Rr(e, o) {
  if (!o) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Sr(n, o);
}
function Te(e) {
  return (o) => (o.pointerType === "mouse" ? e(o) : void 0);
}
const Ir = cr,
  Or = rn,
  Dr = ar,
  Mr = lr,
  Ar = fr,
  Fr = wt,
  Nr = pr,
  kr = br,
  Lr = hr,
  Kr = Er,
  Ur = xr,
  Vr = _r,
  pn = "DropdownMenu",
  [Br, Vs] = fe(pn, [nn]),
  re = nn(),
  [Hr, $n] = Br(pn),
  Wr = (e) => {
    const {
        __scopeDropdownMenu: o,
        children: n,
        dir: r,
        open: c,
        defaultOpen: s,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      d = re(o),
      l = t.useRef(null),
      [f = !1, u] = me({ prop: c, defaultProp: s, onChange: i });
    return t.createElement(
      Hr,
      {
        scope: o,
        triggerId: ue(),
        triggerRef: l,
        contentId: ue(),
        open: f,
        onOpenChange: u,
        onOpenToggle: t.useCallback(() => u((E) => !E), [u]),
        modal: a,
      },
      t.createElement(
        Ir,
        h({}, d, { open: f, onOpenChange: u, dir: r, modal: a }),
        n,
      ),
    );
  },
  Gr = "DropdownMenuTrigger",
  zr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...c } = e,
      s = $n(Gr, n),
      i = re(n);
    return t.createElement(
      Or,
      h({ asChild: !0 }, i),
      t.createElement(
        O.button,
        h(
          {
            type: "button",
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": s.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
          },
          c,
          {
            ref: Be(o, s.triggerRef),
            onPointerDown: x(e.onPointerDown, (a) => {
              !r &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (s.onOpenToggle(), s.open || a.preventDefault());
            }),
            onKeyDown: x(e.onKeyDown, (a) => {
              r ||
                (["Enter", " "].includes(a.key) && s.onOpenToggle(),
                a.key === "ArrowDown" && s.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) &&
                  a.preventDefault());
            }),
          },
        ),
      ),
    );
  }),
  Yr = (e) => {
    const { __scopeDropdownMenu: o, ...n } = e,
      r = re(o);
    return t.createElement(Dr, h({}, r, n));
  },
  Xr = "DropdownMenuContent",
  jr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = $n(Xr, n),
      s = re(n),
      i = t.useRef(!1);
    return t.createElement(
      Mr,
      h({ id: c.contentId, "aria-labelledby": c.triggerId }, s, r, {
        ref: o,
        onCloseAutoFocus: x(e.onCloseAutoFocus, (a) => {
          var d;
          i.current ||
            (d = c.triggerRef.current) === null ||
            d === void 0 ||
            d.focus(),
            (i.current = !1),
            a.preventDefault();
        }),
        onInteractOutside: x(e.onInteractOutside, (a) => {
          const d = a.detail.originalEvent,
            l = d.button === 0 && d.ctrlKey === !0,
            f = d.button === 2 || l;
          (!c.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      }),
    );
  }),
  qr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Ar, h({}, c, r, { ref: o }));
  }),
  Zr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Fr, h({}, c, r, { ref: o }));
  }),
  Jr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Nr, h({}, c, r, { ref: o }));
  }),
  Qr = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(kr, h({}, c, r, { ref: o }));
  }),
  ec = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Lr, h({}, c, r, { ref: o }));
  }),
  tc = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Kr, h({}, c, r, { ref: o }));
  }),
  nc = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(Ur, h({}, c, r, { ref: o }));
  }),
  oc = t.forwardRef((e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      c = re(n);
    return t.createElement(
      Vr,
      h({}, c, r, {
        ref: o,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      }),
    );
  }),
  Bs = Wr,
  Hs = zr,
  Ws = Yr,
  Gs = jr,
  zs = qr,
  Ys = Zr,
  Xs = Jr,
  js = Qr,
  qs = ec,
  Zs = tc,
  Js = nc,
  Qs = oc,
  mn = "Dialog",
  [vn, ea] = fe(mn),
  [rc, ae] = vn(mn),
  cc = (e) => {
    const {
        __scopeDialog: o,
        children: n,
        open: r,
        defaultOpen: c,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = t.useRef(null),
      d = t.useRef(null),
      [l = !1, f] = me({ prop: r, defaultProp: c, onChange: s });
    return t.createElement(
      rc,
      {
        scope: o,
        triggerRef: a,
        contentRef: d,
        contentId: ue(),
        titleId: ue(),
        descriptionId: ue(),
        open: l,
        onOpenChange: f,
        onOpenToggle: t.useCallback(() => f((u) => !u), [f]),
        modal: i,
      },
      n,
    );
  },
  sc = "DialogTrigger",
  ac = t.forwardRef((e, o) => {
    const { __scopeDialog: n, ...r } = e,
      c = ae(sc, n),
      s = M(o, c.triggerRef);
    return t.createElement(
      O.button,
      h(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": c.open,
          "aria-controls": c.contentId,
          "data-state": Ct(c.open),
        },
        r,
        { ref: s, onClick: x(e.onClick, c.onOpenToggle) },
      ),
    );
  }),
  bn = "DialogPortal",
  [ic, gn] = vn(bn, { forceMount: void 0 }),
  lc = (e) => {
    const { __scopeDialog: o, forceMount: n, children: r, container: c } = e,
      s = ae(bn, o);
    return t.createElement(
      ic,
      { scope: o, forceMount: n },
      t.Children.map(r, (i) =>
        t.createElement(
          se,
          { present: n || s.open },
          t.createElement(De, { asChild: !0, container: c }, i),
        ),
      ),
    );
  },
  it = "DialogOverlay",
  dc = t.forwardRef((e, o) => {
    const n = gn(it, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...c } = e,
      s = ae(it, e.__scopeDialog);
    return s.modal
      ? t.createElement(
          se,
          { present: r || s.open },
          t.createElement(uc, h({}, c, { ref: o })),
        )
      : null;
  }),
  uc = t.forwardRef((e, o) => {
    const { __scopeDialog: n, ...r } = e,
      c = ae(it, n);
    return t.createElement(
      Ve,
      { as: $e, allowPinchZoom: !0, shards: [c.contentRef] },
      t.createElement(
        O.div,
        h({ "data-state": Ct(c.open) }, r, {
          ref: o,
          style: { pointerEvents: "auto", ...r.style },
        }),
      ),
    );
  }),
  Se = "DialogContent",
  fc = t.forwardRef((e, o) => {
    const n = gn(Se, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...c } = e,
      s = ae(Se, e.__scopeDialog);
    return t.createElement(
      se,
      { present: r || s.open },
      s.modal
        ? t.createElement(pc, h({}, c, { ref: o }))
        : t.createElement($c, h({}, c, { ref: o })),
    );
  }),
  pc = t.forwardRef((e, o) => {
    const n = ae(Se, e.__scopeDialog),
      r = t.useRef(null),
      c = M(o, n.contentRef, r);
    return (
      t.useEffect(() => {
        const s = r.current;
        if (s) return Ue(s);
      }, []),
      t.createElement(
        hn,
        h({}, e, {
          ref: c,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: x(e.onCloseAutoFocus, (s) => {
            var i;
            s.preventDefault(),
              (i = n.triggerRef.current) === null || i === void 0 || i.focus();
          }),
          onPointerDownOutside: x(e.onPointerDownOutside, (s) => {
            const i = s.detail.originalEvent,
              a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && s.preventDefault();
          }),
          onFocusOutside: x(e.onFocusOutside, (s) => s.preventDefault()),
        }),
      )
    );
  }),
  $c = t.forwardRef((e, o) => {
    const n = ae(Se, e.__scopeDialog),
      r = t.useRef(!1),
      c = t.useRef(!1);
    return t.createElement(
      hn,
      h({}, e, {
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i;
          if (
            ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, s),
            !s.defaultPrevented)
          ) {
            var a;
            r.current ||
              (a = n.triggerRef.current) === null ||
              a === void 0 ||
              a.focus(),
              s.preventDefault();
          }
          (r.current = !1), (c.current = !1);
        },
        onInteractOutside: (s) => {
          var i, a;
          (i = e.onInteractOutside) === null || i === void 0 || i.call(e, s),
            s.defaultPrevented ||
              ((r.current = !0),
              s.detail.originalEvent.type === "pointerdown" &&
                (c.current = !0));
          const d = s.target;
          ((a = n.triggerRef.current) === null || a === void 0
            ? void 0
            : a.contains(d)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" &&
              c.current &&
              s.preventDefault();
        },
      }),
    );
  }),
  hn = t.forwardRef((e, o) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: c,
        onCloseAutoFocus: s,
        ...i
      } = e,
      a = ae(Se, n),
      d = t.useRef(null),
      l = M(o, d);
    return (
      We(),
      t.createElement(
        t.Fragment,
        null,
        t.createElement(
          Ge,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: c,
            onUnmountAutoFocus: s,
          },
          t.createElement(
            Oe,
            h(
              {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Ct(a.open),
              },
              i,
              { ref: l, onDismiss: () => a.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  }),
  mc = "DialogTitle",
  vc = t.forwardRef((e, o) => {
    const { __scopeDialog: n, ...r } = e,
      c = ae(mc, n);
    return t.createElement(O.h2, h({ id: c.titleId }, r, { ref: o }));
  }),
  bc = "DialogDescription",
  gc = t.forwardRef((e, o) => {
    const { __scopeDialog: n, ...r } = e,
      c = ae(bc, n);
    return t.createElement(O.p, h({ id: c.descriptionId }, r, { ref: o }));
  }),
  hc = "DialogClose",
  Ec = t.forwardRef((e, o) => {
    const { __scopeDialog: n, ...r } = e,
      c = ae(hc, n);
    return t.createElement(
      O.button,
      h({ type: "button" }, r, {
        ref: o,
        onClick: x(e.onClick, () => c.onOpenChange(!1)),
      }),
    );
  });
function Ct(e) {
  return e ? "open" : "closed";
}
const ta = cc,
  na = ac,
  oa = lc,
  ra = dc,
  ca = fc,
  sa = vc,
  aa = gc,
  ia = Ec,
  wc = t.forwardRef((e, o) =>
    t.createElement(
      O.label,
      h({}, e, {
        ref: o,
        onMouseDown: (n) => {
          var r;
          (r = e.onMouseDown) === null || r === void 0 || r.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault();
        },
      }),
    ),
  ),
  la = wc;
function kt(e, [o, n]) {
  return Math.min(n, Math.max(o, e));
}
function xc(e) {
  const o = t.useRef({ value: e, previous: e });
  return t.useMemo(
    () => (
      o.current.value !== e &&
        ((o.current.previous = o.current.value), (o.current.value = e)),
      o.current.previous
    ),
    [e],
  );
}
const _t = t.forwardRef((e, o) =>
    t.createElement(
      O.span,
      h({}, e, {
        ref: o,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      }),
    ),
  ),
  Cc = [" ", "Enter", "ArrowUp", "ArrowDown"],
  _c = [" ", "Enter"],
  Ye = "Select",
  [Xe, je, Pc] = He(Ye),
  [Ce, da] = fe(Ye, [Pc, xe]),
  Pt = xe(),
  [yc, ge] = Ce(Ye),
  [Tc, Sc] = Ce(Ye),
  Rc = (e) => {
    const {
        __scopeSelect: o,
        children: n,
        open: r,
        defaultOpen: c,
        onOpenChange: s,
        value: i,
        defaultValue: a,
        onValueChange: d,
        dir: l,
        name: f,
        autoComplete: u,
        disabled: E,
        required: v,
      } = e,
      m = Pt(o),
      [p, b] = t.useState(null),
      [g, $] = t.useState(null),
      [w, P] = t.useState(!1),
      R = pt(l),
      [A = !1, T] = me({ prop: r, defaultProp: c, onChange: s }),
      [S, D] = me({ prop: i, defaultProp: a, onChange: d }),
      B = t.useRef(null),
      H = p ? !!p.closest("form") : !0,
      [F, Y] = t.useState(new Set()),
      C = Array.from(F)
        .map((I) => I.props.value)
        .join(";");
    return t.createElement(
      $t,
      m,
      t.createElement(
        yc,
        {
          required: v,
          scope: o,
          trigger: p,
          onTriggerChange: b,
          valueNode: g,
          onValueNodeChange: $,
          valueNodeHasChildren: w,
          onValueNodeHasChildrenChange: P,
          contentId: ue(),
          value: S,
          onValueChange: D,
          open: A,
          onOpenChange: T,
          dir: R,
          triggerPointerDownPosRef: B,
          disabled: E,
        },
        t.createElement(
          Xe.Provider,
          { scope: o },
          t.createElement(
            Tc,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: t.useCallback((I) => {
                Y((W) => new Set(W).add(I));
              }, []),
              onNativeOptionRemove: t.useCallback((I) => {
                Y((W) => {
                  const X = new Set(W);
                  return X.delete(I), X;
                });
              }, []),
            },
            n,
          ),
        ),
        H
          ? t.createElement(
              _n,
              {
                key: C,
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: f,
                autoComplete: u,
                value: S,
                onChange: (I) => D(I.target.value),
                disabled: E,
              },
              S === void 0 ? t.createElement("option", { value: "" }) : null,
              Array.from(F),
            )
          : null,
      ),
    );
  },
  Ic = "SelectTrigger",
  Oc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, disabled: r = !1, ...c } = e,
      s = Pt(n),
      i = ge(Ic, n),
      a = i.disabled || r,
      d = M(o, i.onTriggerChange),
      l = je(n),
      [f, u, E] = Pn((m) => {
        const p = l().filter(($) => !$.disabled),
          b = p.find(($) => $.value === i.value),
          g = yn(p, m, b);
        g !== void 0 && i.onValueChange(g.value);
      }),
      v = () => {
        a || (i.onOpenChange(!0), E());
      };
    return t.createElement(
      mt,
      h({ asChild: !0 }, s),
      t.createElement(
        O.button,
        h(
          {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": Cn(i.value) ? "" : void 0,
          },
          c,
          {
            ref: d,
            onClick: x(c.onClick, (m) => {
              m.currentTarget.focus();
            }),
            onPointerDown: x(c.onPointerDown, (m) => {
              const p = m.target;
              p.hasPointerCapture(m.pointerId) &&
                p.releasePointerCapture(m.pointerId),
                m.button === 0 &&
                  m.ctrlKey === !1 &&
                  (v(),
                  (i.triggerPointerDownPosRef.current = {
                    x: Math.round(m.pageX),
                    y: Math.round(m.pageY),
                  }),
                  m.preventDefault());
            }),
            onKeyDown: x(c.onKeyDown, (m) => {
              const p = f.current !== "";
              !(m.ctrlKey || m.altKey || m.metaKey) &&
                m.key.length === 1 &&
                u(m.key),
                !(p && m.key === " ") &&
                  Cc.includes(m.key) &&
                  (v(), m.preventDefault());
            }),
          },
        ),
      ),
    );
  }),
  Dc = "SelectValue",
  Mc = t.forwardRef((e, o) => {
    const {
        __scopeSelect: n,
        className: r,
        style: c,
        children: s,
        placeholder: i = "",
        ...a
      } = e,
      d = ge(Dc, n),
      { onValueNodeHasChildrenChange: l } = d,
      f = s !== void 0,
      u = M(o, d.onValueNodeChange);
    return (
      ee(() => {
        l(f);
      }, [l, f]),
      t.createElement(
        O.span,
        h({}, a, { ref: u, style: { pointerEvents: "none" } }),
        Cn(d.value) ? t.createElement(t.Fragment, null, i) : s,
      )
    );
  }),
  Ac = t.forwardRef((e, o) => {
    const { __scopeSelect: n, children: r, ...c } = e;
    return t.createElement(
      O.span,
      h({ "aria-hidden": !0 }, c, { ref: o }),
      r || "▼",
    );
  }),
  Fc = (e) => t.createElement(De, h({ asChild: !0 }, e)),
  we = "SelectContent",
  Nc = t.forwardRef((e, o) => {
    const n = ge(we, e.__scopeSelect),
      [r, c] = t.useState();
    if (
      (ee(() => {
        c(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? Ie.createPortal(
            t.createElement(
              En,
              { scope: e.__scopeSelect },
              t.createElement(
                Xe.Slot,
                { scope: e.__scopeSelect },
                t.createElement("div", null, e.children),
              ),
            ),
            s,
          )
        : null;
    }
    return t.createElement(kc, h({}, e, { ref: o }));
  }),
  de = 10,
  [En, he] = Ce(we),
  kc = t.forwardRef((e, o) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: c,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: a,
        sideOffset: d,
        align: l,
        alignOffset: f,
        arrowPadding: u,
        collisionBoundary: E,
        collisionPadding: v,
        sticky: m,
        hideWhenDetached: p,
        avoidCollisions: b,
        ...g
      } = e,
      $ = ge(we, n),
      [w, P] = t.useState(null),
      [R, A] = t.useState(null),
      T = M(o, (y) => P(y)),
      [S, D] = t.useState(null),
      [B, H] = t.useState(null),
      F = je(n),
      [Y, C] = t.useState(!1),
      I = t.useRef(!1);
    t.useEffect(() => {
      if (w) return Ue(w);
    }, [w]),
      We();
    const W = t.useCallback(
        (y) => {
          const [N, ...k] = F().map((U) => U.ref.current),
            [L] = k.slice(-1),
            K = document.activeElement;
          for (const U of y)
            if (
              U === K ||
              (U == null || U.scrollIntoView({ block: "nearest" }),
              U === N && R && (R.scrollTop = 0),
              U === L && R && (R.scrollTop = R.scrollHeight),
              U == null || U.focus(),
              document.activeElement !== K)
            )
              return;
        },
        [F, R],
      ),
      X = t.useCallback(() => W([S, w]), [W, S, w]);
    t.useEffect(() => {
      Y && X();
    }, [Y, X]);
    const { onOpenChange: z, triggerPointerDownPosRef: _ } = $;
    t.useEffect(() => {
      if (w) {
        let y = { x: 0, y: 0 };
        const N = (L) => {
            var K, U, te, ne;
            y = {
              x: Math.abs(
                Math.round(L.pageX) -
                  ((K =
                    (U = _.current) === null || U === void 0 ? void 0 : U.x) !==
                    null && K !== void 0
                    ? K
                    : 0),
              ),
              y: Math.abs(
                Math.round(L.pageY) -
                  ((te =
                    (ne = _.current) === null || ne === void 0
                      ? void 0
                      : ne.y) !== null && te !== void 0
                    ? te
                    : 0),
              ),
            };
          },
          k = (L) => {
            y.x <= 10 && y.y <= 10
              ? L.preventDefault()
              : w.contains(L.target) || z(!1),
              document.removeEventListener("pointermove", N),
              (_.current = null);
          };
        return (
          _.current !== null &&
            (document.addEventListener("pointermove", N),
            document.addEventListener("pointerup", k, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerup", k, { capture: !0 });
          }
        );
      }
    }, [w, z, _]),
      t.useEffect(() => {
        const y = () => z(!1);
        return (
          window.addEventListener("blur", y),
          window.addEventListener("resize", y),
          () => {
            window.removeEventListener("blur", y),
              window.removeEventListener("resize", y);
          }
        );
      }, [z]);
    const [V, G] = Pn((y) => {
        const N = F().filter((K) => !K.disabled),
          k = N.find((K) => K.ref.current === document.activeElement),
          L = yn(N, y, k);
        L && setTimeout(() => L.ref.current.focus());
      }),
      j = t.useCallback(
        (y, N, k) => {
          const L = !I.current && !k;
          (($.value !== void 0 && $.value === N) || L) &&
            (D(y), L && (I.current = !0));
        },
        [$.value],
      ),
      q = t.useCallback(() => (w == null ? void 0 : w.focus()), [w]),
      J = t.useCallback(
        (y, N, k) => {
          const L = !I.current && !k;
          (($.value !== void 0 && $.value === N) || L) && H(y);
        },
        [$.value],
      ),
      oe = r === "popper" ? Lt : Lc,
      Z =
        oe === Lt
          ? {
              side: a,
              sideOffset: d,
              align: l,
              alignOffset: f,
              arrowPadding: u,
              collisionBoundary: E,
              collisionPadding: v,
              sticky: m,
              hideWhenDetached: p,
              avoidCollisions: b,
            }
          : {};
    return t.createElement(
      En,
      {
        scope: n,
        content: w,
        viewport: R,
        onViewportChange: A,
        itemRefCallback: j,
        selectedItem: S,
        onItemLeave: q,
        itemTextRefCallback: J,
        focusSelectedItem: X,
        selectedItemText: B,
        position: r,
        isPositioned: Y,
        searchRef: V,
      },
      t.createElement(
        Ve,
        { as: $e, allowPinchZoom: !0 },
        t.createElement(
          Ge,
          {
            asChild: !0,
            trapped: $.open,
            onMountAutoFocus: (y) => {
              y.preventDefault();
            },
            onUnmountAutoFocus: x(c, (y) => {
              var N;
              (N = $.trigger) === null ||
                N === void 0 ||
                N.focus({ preventScroll: !0 }),
                y.preventDefault();
            }),
          },
          t.createElement(
            Oe,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: s,
              onPointerDownOutside: i,
              onFocusOutside: (y) => y.preventDefault(),
              onDismiss: () => $.onOpenChange(!1),
            },
            t.createElement(
              oe,
              h(
                {
                  role: "listbox",
                  id: $.contentId,
                  "data-state": $.open ? "open" : "closed",
                  dir: $.dir,
                  onContextMenu: (y) => y.preventDefault(),
                },
                g,
                Z,
                {
                  onPlaced: () => C(!0),
                  ref: T,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...g.style,
                  },
                  onKeyDown: x(g.onKeyDown, (y) => {
                    const N = y.ctrlKey || y.altKey || y.metaKey;
                    if (
                      (y.key === "Tab" && y.preventDefault(),
                      !N && y.key.length === 1 && G(y.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(y.key))
                    ) {
                      let L = F()
                        .filter((K) => !K.disabled)
                        .map((K) => K.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(y.key) &&
                          (L = L.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(y.key))
                      ) {
                        const K = y.target,
                          U = L.indexOf(K);
                        L = L.slice(U + 1);
                      }
                      setTimeout(() => W(L)), y.preventDefault();
                    }
                  }),
                },
              ),
            ),
          ),
        ),
      ),
    );
  }),
  Lc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, onPlaced: r, ...c } = e,
      s = ge(we, n),
      i = he(we, n),
      [a, d] = t.useState(null),
      [l, f] = t.useState(null),
      u = M(o, (T) => f(T)),
      E = je(n),
      v = t.useRef(!1),
      m = t.useRef(!0),
      {
        viewport: p,
        selectedItem: b,
        selectedItemText: g,
        focusSelectedItem: $,
      } = i,
      w = t.useCallback(() => {
        if (s.trigger && s.valueNode && a && l && p && b && g) {
          const T = s.trigger.getBoundingClientRect(),
            S = l.getBoundingClientRect(),
            D = s.valueNode.getBoundingClientRect(),
            B = g.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const K = B.left - S.left,
              U = D.left - K,
              te = T.left - U,
              ne = T.width + te,
              le = Math.max(ne, S.width),
              Ee = window.innerWidth - de,
              Pe = kt(U, [de, Ee - le]);
            (a.style.minWidth = ne + "px"), (a.style.left = Pe + "px");
          } else {
            const K = S.right - B.right,
              U = window.innerWidth - D.right - K,
              te = window.innerWidth - T.right - U,
              ne = T.width + te,
              le = Math.max(ne, S.width),
              Ee = window.innerWidth - de,
              Pe = kt(U, [de, Ee - le]);
            (a.style.minWidth = ne + "px"), (a.style.right = Pe + "px");
          }
          const H = E(),
            F = window.innerHeight - de * 2,
            Y = p.scrollHeight,
            C = window.getComputedStyle(l),
            I = parseInt(C.borderTopWidth, 10),
            W = parseInt(C.paddingTop, 10),
            X = parseInt(C.borderBottomWidth, 10),
            z = parseInt(C.paddingBottom, 10),
            _ = I + W + Y + z + X,
            V = Math.min(b.offsetHeight * 5, _),
            G = window.getComputedStyle(p),
            j = parseInt(G.paddingTop, 10),
            q = parseInt(G.paddingBottom, 10),
            J = T.top + T.height / 2 - de,
            oe = F - J,
            Z = b.offsetHeight / 2,
            y = b.offsetTop + Z,
            N = I + W + y,
            k = _ - N;
          if (N <= J) {
            const K = b === H[H.length - 1].ref.current;
            a.style.bottom = "0px";
            const U = l.clientHeight - p.offsetTop - p.offsetHeight,
              te = Math.max(oe, Z + (K ? q : 0) + U + X),
              ne = N + te;
            a.style.height = ne + "px";
          } else {
            const K = b === H[0].ref.current;
            a.style.top = "0px";
            const te = Math.max(J, I + p.offsetTop + (K ? j : 0) + Z) + k;
            (a.style.height = te + "px"), (p.scrollTop = N - J + p.offsetTop);
          }
          (a.style.margin = `${de}px 0`),
            (a.style.minHeight = V + "px"),
            (a.style.maxHeight = F + "px"),
            r == null || r(),
            requestAnimationFrame(() => (v.current = !0));
        }
      }, [E, s.trigger, s.valueNode, a, l, p, b, g, s.dir, r]);
    ee(() => w(), [w]);
    const [P, R] = t.useState();
    ee(() => {
      l && R(window.getComputedStyle(l).zIndex);
    }, [l]);
    const A = t.useCallback(
      (T) => {
        T && m.current === !0 && (w(), $ == null || $(), (m.current = !1));
      },
      [w, $],
    );
    return t.createElement(
      Kc,
      {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: v,
        onScrollButtonChange: A,
      },
      t.createElement(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P,
          },
        },
        t.createElement(
          O.div,
          h({}, c, {
            ref: u,
            style: { boxSizing: "border-box", maxHeight: "100%", ...c.style },
          }),
        ),
      ),
    );
  }),
  Lt = t.forwardRef((e, o) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: c = de,
        ...s
      } = e,
      i = Pt(n);
    return t.createElement(
      vt,
      h({}, i, s, {
        ref: o,
        align: r,
        collisionPadding: c,
        style: {
          boxSizing: "border-box",
          ...s.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      }),
    );
  }),
  [Kc, yt] = Ce(we, {}),
  Kt = "SelectViewport",
  Uc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, ...r } = e,
      c = he(Kt, n),
      s = yt(Kt, n),
      i = M(o, c.onViewportChange),
      a = t.useRef(0);
    return t.createElement(
      t.Fragment,
      null,
      t.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      t.createElement(
        Xe.Slot,
        { scope: n },
        t.createElement(
          O.div,
          h({ "data-radix-select-viewport": "", role: "presentation" }, r, {
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...r.style,
            },
            onScroll: x(r.onScroll, (d) => {
              const l = d.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: u } = s;
              if (u != null && u.current && f) {
                const E = Math.abs(a.current - l.scrollTop);
                if (E > 0) {
                  const v = window.innerHeight - de * 2,
                    m = parseFloat(f.style.minHeight),
                    p = parseFloat(f.style.height),
                    b = Math.max(m, p);
                  if (b < v) {
                    const g = b + E,
                      $ = Math.min(v, g),
                      w = g - $;
                    (f.style.height = $ + "px"),
                      f.style.bottom === "0px" &&
                        ((l.scrollTop = w > 0 ? w : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = l.scrollTop;
            }),
          }),
        ),
      ),
    );
  }),
  Vc = "SelectGroup",
  [ua, Bc] = Ce(Vc),
  Hc = "SelectLabel",
  Wc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, ...r } = e,
      c = Bc(Hc, n);
    return t.createElement(O.div, h({ id: c.id }, r, { ref: o }));
  }),
  lt = "SelectItem",
  [Gc, wn] = Ce(lt),
  zc = t.forwardRef((e, o) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: c = !1,
        textValue: s,
        ...i
      } = e,
      a = ge(lt, n),
      d = he(lt, n),
      l = a.value === r,
      [f, u] = t.useState(s ?? ""),
      [E, v] = t.useState(!1),
      m = M(o, (g) => {
        var $;
        return ($ = d.itemRefCallback) === null || $ === void 0
          ? void 0
          : $.call(d, g, r, c);
      }),
      p = ue(),
      b = () => {
        c || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return t.createElement(
      Gc,
      {
        scope: n,
        value: r,
        disabled: c,
        textId: p,
        isSelected: l,
        onItemTextChange: t.useCallback((g) => {
          u(($) => {
            var w;
            return (
              $ ||
              ((w = g == null ? void 0 : g.textContent) !== null && w !== void 0
                ? w
                : ""
              ).trim()
            );
          });
        }, []),
      },
      t.createElement(
        Xe.ItemSlot,
        { scope: n, value: r, disabled: c, textValue: f },
        t.createElement(
          O.div,
          h(
            {
              role: "option",
              "aria-labelledby": p,
              "data-highlighted": E ? "" : void 0,
              "aria-selected": l && E,
              "data-state": l ? "checked" : "unchecked",
              "aria-disabled": c || void 0,
              "data-disabled": c ? "" : void 0,
              tabIndex: c ? void 0 : -1,
            },
            i,
            {
              ref: m,
              onFocus: x(i.onFocus, () => v(!0)),
              onBlur: x(i.onBlur, () => v(!1)),
              onPointerUp: x(i.onPointerUp, b),
              onPointerMove: x(i.onPointerMove, (g) => {
                if (c) {
                  var $;
                  ($ = d.onItemLeave) === null || $ === void 0 || $.call(d);
                } else g.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: x(i.onPointerLeave, (g) => {
                if (g.currentTarget === document.activeElement) {
                  var $;
                  ($ = d.onItemLeave) === null || $ === void 0 || $.call(d);
                }
              }),
              onKeyDown: x(i.onKeyDown, (g) => {
                var $;
                ((($ = d.searchRef) === null || $ === void 0
                  ? void 0
                  : $.current) !== "" &&
                  g.key === " ") ||
                  (_c.includes(g.key) && b(),
                  g.key === " " && g.preventDefault());
              }),
            },
          ),
        ),
      ),
    );
  }),
  ke = "SelectItemText",
  Yc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, className: r, style: c, ...s } = e,
      i = ge(ke, n),
      a = he(ke, n),
      d = wn(ke, n),
      l = Sc(ke, n),
      [f, u] = t.useState(null),
      E = M(
        o,
        (g) => u(g),
        d.onItemTextChange,
        (g) => {
          var $;
          return ($ = a.itemTextRefCallback) === null || $ === void 0
            ? void 0
            : $.call(a, g, d.value, d.disabled);
        },
      ),
      v = f == null ? void 0 : f.textContent,
      m = t.useMemo(
        () =>
          t.createElement(
            "option",
            { key: d.value, value: d.value, disabled: d.disabled },
            v,
          ),
        [d.disabled, d.value, v],
      ),
      { onNativeOptionAdd: p, onNativeOptionRemove: b } = l;
    return (
      ee(() => (p(m), () => b(m)), [p, b, m]),
      t.createElement(
        t.Fragment,
        null,
        t.createElement(O.span, h({ id: d.textId }, s, { ref: E })),
        d.isSelected && i.valueNode && !i.valueNodeHasChildren
          ? Ie.createPortal(s.children, i.valueNode)
          : null,
      )
    );
  }),
  Xc = "SelectItemIndicator",
  jc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, ...r } = e;
    return wn(Xc, n).isSelected
      ? t.createElement(O.span, h({ "aria-hidden": !0 }, r, { ref: o }))
      : null;
  }),
  Ut = "SelectScrollUpButton",
  qc = t.forwardRef((e, o) => {
    const n = he(Ut, e.__scopeSelect),
      r = yt(Ut, e.__scopeSelect),
      [c, s] = t.useState(!1),
      i = M(o, r.onScrollButtonChange);
    return (
      ee(() => {
        if (n.viewport && n.isPositioned) {
          let d = function () {
            const l = a.scrollTop > 0;
            s(l);
          };
          const a = n.viewport;
          return (
            d(),
            a.addEventListener("scroll", d),
            () => a.removeEventListener("scroll", d)
          );
        }
      }, [n.viewport, n.isPositioned]),
      c
        ? t.createElement(
            xn,
            h({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: d } = n;
                a && d && (a.scrollTop = a.scrollTop - d.offsetHeight);
              },
            }),
          )
        : null
    );
  }),
  Vt = "SelectScrollDownButton",
  Zc = t.forwardRef((e, o) => {
    const n = he(Vt, e.__scopeSelect),
      r = yt(Vt, e.__scopeSelect),
      [c, s] = t.useState(!1),
      i = M(o, r.onScrollButtonChange);
    return (
      ee(() => {
        if (n.viewport && n.isPositioned) {
          let d = function () {
            const l = a.scrollHeight - a.clientHeight,
              f = Math.ceil(a.scrollTop) < l;
            s(f);
          };
          const a = n.viewport;
          return (
            d(),
            a.addEventListener("scroll", d),
            () => a.removeEventListener("scroll", d)
          );
        }
      }, [n.viewport, n.isPositioned]),
      c
        ? t.createElement(
            xn,
            h({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: d } = n;
                a && d && (a.scrollTop = a.scrollTop + d.offsetHeight);
              },
            }),
          )
        : null
    );
  }),
  xn = t.forwardRef((e, o) => {
    const { __scopeSelect: n, onAutoScroll: r, ...c } = e,
      s = he("SelectScrollButton", n),
      i = t.useRef(null),
      a = je(n),
      d = t.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      t.useEffect(() => () => d(), [d]),
      ee(() => {
        var l;
        const f = a().find((u) => u.ref.current === document.activeElement);
        f == null ||
          (l = f.ref.current) === null ||
          l === void 0 ||
          l.scrollIntoView({ block: "nearest" });
      }, [a]),
      t.createElement(
        O.div,
        h({ "aria-hidden": !0 }, c, {
          ref: o,
          style: { flexShrink: 0, ...c.style },
          onPointerDown: x(c.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: x(c.onPointerMove, () => {
            var l;
            (l = s.onItemLeave) === null || l === void 0 || l.call(s),
              i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerLeave: x(c.onPointerLeave, () => {
            d();
          }),
        }),
      )
    );
  }),
  Jc = t.forwardRef((e, o) => {
    const { __scopeSelect: n, ...r } = e;
    return t.createElement(O.div, h({ "aria-hidden": !0 }, r, { ref: o }));
  });
function Cn(e) {
  return e === "" || e === void 0;
}
const _n = t.forwardRef((e, o) => {
  const { value: n, ...r } = e,
    c = t.useRef(null),
    s = M(o, c),
    i = xc(n);
  return (
    t.useEffect(() => {
      const a = c.current,
        d = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(d, "value").set;
      if (i !== n && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(u);
      }
    }, [i, n]),
    t.createElement(
      _t,
      { asChild: !0 },
      t.createElement("select", h({}, r, { ref: s, defaultValue: n })),
    )
  );
});
_n.displayName = "BubbleSelect";
function Pn(e) {
  const o = Q(e),
    n = t.useRef(""),
    r = t.useRef(0),
    c = t.useCallback(
      (i) => {
        const a = n.current + i;
        o(a),
          (function d(l) {
            (n.current = l),
              window.clearTimeout(r.current),
              l !== "" && (r.current = window.setTimeout(() => d(""), 1e3));
          })(a);
      },
      [o],
    ),
    s = t.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return t.useEffect(() => () => window.clearTimeout(r.current), []), [n, c, s];
}
function yn(e, o, n) {
  const c = o.length > 1 && Array.from(o).every((l) => l === o[0]) ? o[0] : o,
    s = n ? e.indexOf(n) : -1;
  let i = Qc(e, Math.max(s, 0));
  c.length === 1 && (i = i.filter((l) => l !== n));
  const d = i.find((l) =>
    l.textValue.toLowerCase().startsWith(c.toLowerCase()),
  );
  return d !== n ? d : void 0;
}
function Qc(e, o) {
  return e.map((n, r) => e[(o + r) % e.length]);
}
const fa = Rc,
  pa = Oc,
  $a = Mc,
  ma = Ac,
  va = Fc,
  ba = Nc,
  ga = Uc,
  ha = Wc,
  Ea = zc,
  wa = Yc,
  xa = jc,
  Ca = qc,
  _a = Zc,
  Pa = Jc,
  Tn = "Popover",
  [Sn, ya] = fe(Tn, [xe]),
  Tt = xe(),
  [es, _e] = Sn(Tn),
  ts = (e) => {
    const {
        __scopePopover: o,
        children: n,
        open: r,
        defaultOpen: c,
        onOpenChange: s,
        modal: i = !1,
      } = e,
      a = Tt(o),
      d = t.useRef(null),
      [l, f] = t.useState(!1),
      [u = !1, E] = me({ prop: r, defaultProp: c, onChange: s });
    return t.createElement(
      $t,
      a,
      t.createElement(
        es,
        {
          scope: o,
          contentId: ue(),
          triggerRef: d,
          open: u,
          onOpenChange: E,
          onOpenToggle: t.useCallback(() => E((v) => !v), [E]),
          hasCustomAnchor: l,
          onCustomAnchorAdd: t.useCallback(() => f(!0), []),
          onCustomAnchorRemove: t.useCallback(() => f(!1), []),
          modal: i,
        },
        n,
      ),
    );
  },
  ns = "PopoverTrigger",
  os = t.forwardRef((e, o) => {
    const { __scopePopover: n, ...r } = e,
      c = _e(ns, n),
      s = Tt(n),
      i = M(o, c.triggerRef),
      a = t.createElement(
        O.button,
        h(
          {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": c.open,
            "aria-controls": c.contentId,
            "data-state": On(c.open),
          },
          r,
          { ref: i, onClick: x(e.onClick, c.onOpenToggle) },
        ),
      );
    return c.hasCustomAnchor
      ? a
      : t.createElement(mt, h({ asChild: !0 }, s), a);
  }),
  Rn = "PopoverPortal",
  [rs, cs] = Sn(Rn, { forceMount: void 0 }),
  ss = (e) => {
    const { __scopePopover: o, forceMount: n, children: r, container: c } = e,
      s = _e(Rn, o);
    return t.createElement(
      rs,
      { scope: o, forceMount: n },
      t.createElement(
        se,
        { present: n || s.open },
        t.createElement(De, { asChild: !0, container: c }, r),
      ),
    );
  },
  Re = "PopoverContent",
  as = t.forwardRef((e, o) => {
    const n = cs(Re, e.__scopePopover),
      { forceMount: r = n.forceMount, ...c } = e,
      s = _e(Re, e.__scopePopover);
    return t.createElement(
      se,
      { present: r || s.open },
      s.modal
        ? t.createElement(is, h({}, c, { ref: o }))
        : t.createElement(ls, h({}, c, { ref: o })),
    );
  }),
  is = t.forwardRef((e, o) => {
    const n = _e(Re, e.__scopePopover),
      r = t.useRef(null),
      c = M(o, r),
      s = t.useRef(!1);
    return (
      t.useEffect(() => {
        const i = r.current;
        if (i) return Ue(i);
      }, []),
      t.createElement(
        Ve,
        { as: $e, allowPinchZoom: !0 },
        t.createElement(
          In,
          h({}, e, {
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: x(e.onCloseAutoFocus, (i) => {
              var a;
              i.preventDefault(),
                s.current ||
                  (a = n.triggerRef.current) === null ||
                  a === void 0 ||
                  a.focus();
            }),
            onPointerDownOutside: x(
              e.onPointerDownOutside,
              (i) => {
                const a = i.detail.originalEvent,
                  d = a.button === 0 && a.ctrlKey === !0,
                  l = a.button === 2 || d;
                s.current = l;
              },
              { checkForDefaultPrevented: !1 },
            ),
            onFocusOutside: x(e.onFocusOutside, (i) => i.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          }),
        ),
      )
    );
  }),
  ls = t.forwardRef((e, o) => {
    const n = _e(Re, e.__scopePopover),
      r = t.useRef(!1),
      c = t.useRef(!1);
    return t.createElement(
      In,
      h({}, e, {
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i;
          if (
            ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, s),
            !s.defaultPrevented)
          ) {
            var a;
            r.current ||
              (a = n.triggerRef.current) === null ||
              a === void 0 ||
              a.focus(),
              s.preventDefault();
          }
          (r.current = !1), (c.current = !1);
        },
        onInteractOutside: (s) => {
          var i, a;
          (i = e.onInteractOutside) === null || i === void 0 || i.call(e, s),
            s.defaultPrevented ||
              ((r.current = !0),
              s.detail.originalEvent.type === "pointerdown" &&
                (c.current = !0));
          const d = s.target;
          ((a = n.triggerRef.current) === null || a === void 0
            ? void 0
            : a.contains(d)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" &&
              c.current &&
              s.preventDefault();
        },
      }),
    );
  }),
  In = t.forwardRef((e, o) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: c,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: d,
        onFocusOutside: l,
        onInteractOutside: f,
        ...u
      } = e,
      E = _e(Re, n),
      v = Tt(n);
    return (
      We(),
      t.createElement(
        Ge,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: c,
          onUnmountAutoFocus: s,
        },
        t.createElement(
          Oe,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: a,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onDismiss: () => E.onOpenChange(!1),
          },
          t.createElement(
            vt,
            h(
              { "data-state": On(E.open), role: "dialog", id: E.contentId },
              v,
              u,
              {
                ref: o,
                style: {
                  ...u.style,
                  "--radix-popover-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
              },
            ),
          ),
        ),
      )
    );
  });
function On(e) {
  return e ? "open" : "closed";
}
const Ta = ts,
  Sa = os,
  Ra = ss,
  Ia = as,
  Dn = "ToastProvider",
  [St, ds, us] = He("Toast"),
  [Mn, Oa] = fe("Toast", [us]),
  [fs, qe] = Mn(Dn),
  An = (e) => {
    const {
        __scopeToast: o,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: c = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [a, d] = t.useState(null),
      [l, f] = t.useState(0),
      u = t.useRef(!1),
      E = t.useRef(!1);
    return t.createElement(
      St.Provider,
      { scope: o },
      t.createElement(
        fs,
        {
          scope: o,
          label: n,
          duration: r,
          swipeDirection: c,
          swipeThreshold: s,
          toastCount: l,
          viewport: a,
          onViewportChange: d,
          onToastAdd: t.useCallback(() => f((v) => v + 1), []),
          onToastRemove: t.useCallback(() => f((v) => v - 1), []),
          isFocusedToastEscapeKeyDownRef: u,
          isClosePausedRef: E,
        },
        i,
      ),
    );
  };
An.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const o = `Invalid prop \`label\` supplied to \`${Dn}\`. Expected non-empty \`string\`.`;
      return new Error(o);
    }
    return null;
  },
};
const ps = "ToastViewport",
  $s = ["F8"],
  dt = "toast.viewportPause",
  ut = "toast.viewportResume",
  ms = t.forwardRef((e, o) => {
    const {
        __scopeToast: n,
        hotkey: r = $s,
        label: c = "Notifications ({hotkey})",
        ...s
      } = e,
      i = qe(ps, n),
      a = ds(n),
      d = t.useRef(null),
      l = t.useRef(null),
      f = t.useRef(null),
      u = t.useRef(null),
      E = M(o, u, i.onViewportChange),
      v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      m = i.toastCount > 0;
    t.useEffect(() => {
      const b = (g) => {
        var $;
        r.every((P) => g[P] || g.code === P) &&
          (($ = u.current) === null || $ === void 0 || $.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      t.useEffect(() => {
        const b = d.current,
          g = u.current;
        if (m && b && g) {
          const $ = () => {
              if (!i.isClosePausedRef.current) {
                const A = new CustomEvent(dt);
                g.dispatchEvent(A), (i.isClosePausedRef.current = !0);
              }
            },
            w = () => {
              if (i.isClosePausedRef.current) {
                const A = new CustomEvent(ut);
                g.dispatchEvent(A), (i.isClosePausedRef.current = !1);
              }
            },
            P = (A) => {
              !b.contains(A.relatedTarget) && w();
            },
            R = () => {
              b.contains(document.activeElement) || w();
            };
          return (
            b.addEventListener("focusin", $),
            b.addEventListener("focusout", P),
            b.addEventListener("pointermove", $),
            b.addEventListener("pointerleave", R),
            window.addEventListener("blur", $),
            window.addEventListener("focus", w),
            () => {
              b.removeEventListener("focusin", $),
                b.removeEventListener("focusout", P),
                b.removeEventListener("pointermove", $),
                b.removeEventListener("pointerleave", R),
                window.removeEventListener("blur", $),
                window.removeEventListener("focus", w);
            }
          );
        }
      }, [m, i.isClosePausedRef]);
    const p = t.useCallback(
      ({ tabbingDirection: b }) => {
        const $ = a().map((w) => {
          const P = w.ref.current,
            R = [P, ...Os(P)];
          return b === "forwards" ? R : R.reverse();
        });
        return (b === "forwards" ? $.reverse() : $).flat();
      },
      [a],
    );
    return (
      t.useEffect(() => {
        const b = u.current;
        if (b) {
          const g = ($) => {
            const w = $.altKey || $.ctrlKey || $.metaKey;
            if ($.key === "Tab" && !w) {
              const S = document.activeElement,
                D = $.shiftKey;
              if ($.target === b && D) {
                var R;
                (R = l.current) === null || R === void 0 || R.focus();
                return;
              }
              const F = p({ tabbingDirection: D ? "backwards" : "forwards" }),
                Y = F.findIndex((C) => C === S);
              if (nt(F.slice(Y + 1))) $.preventDefault();
              else {
                var A, T;
                D
                  ? (A = l.current) === null || A === void 0 || A.focus()
                  : (T = f.current) === null || T === void 0 || T.focus();
              }
            }
          };
          return (
            b.addEventListener("keydown", g),
            () => b.removeEventListener("keydown", g)
          );
        }
      }, [a, p]),
      t.createElement(
        vo,
        {
          ref: d,
          role: "region",
          "aria-label": c.replace("{hotkey}", v),
          tabIndex: -1,
          style: { pointerEvents: m ? void 0 : "none" },
        },
        m &&
          t.createElement(Bt, {
            ref: l,
            onFocusFromOutsideViewport: () => {
              const b = p({ tabbingDirection: "forwards" });
              nt(b);
            },
          }),
        t.createElement(
          St.Slot,
          { scope: n },
          t.createElement(O.ol, h({ tabIndex: -1 }, s, { ref: E })),
        ),
        m &&
          t.createElement(Bt, {
            ref: f,
            onFocusFromOutsideViewport: () => {
              const b = p({ tabbingDirection: "backwards" });
              nt(b);
            },
          }),
      )
    );
  }),
  vs = "ToastFocusProxy",
  Bt = t.forwardRef((e, o) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...c } = e,
      s = qe(vs, n);
    return t.createElement(
      _t,
      h({ "aria-hidden": !0, tabIndex: 0 }, c, {
        ref: o,
        style: { position: "fixed" },
        onFocus: (i) => {
          var a;
          const d = i.relatedTarget;
          !((a = s.viewport) !== null && a !== void 0 && a.contains(d)) && r();
        },
      }),
    );
  }),
  Ze = "Toast",
  bs = "toast.swipeStart",
  gs = "toast.swipeMove",
  hs = "toast.swipeCancel",
  Es = "toast.swipeEnd",
  ws = t.forwardRef((e, o) => {
    const { forceMount: n, open: r, defaultOpen: c, onOpenChange: s, ...i } = e,
      [a = !0, d] = me({ prop: r, defaultProp: c, onChange: s });
    return t.createElement(
      se,
      { present: n || a },
      t.createElement(
        Fn,
        h({ open: a }, i, {
          ref: o,
          onClose: () => d(!1),
          onPause: Q(e.onPause),
          onResume: Q(e.onResume),
          onSwipeStart: x(e.onSwipeStart, (l) => {
            l.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: x(e.onSwipeMove, (l) => {
            const { x: f, y: u } = l.detail.delta;
            l.currentTarget.setAttribute("data-swipe", "move"),
              l.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${f}px`,
              ),
              l.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${u}px`,
              );
          }),
          onSwipeCancel: x(e.onSwipeCancel, (l) => {
            l.currentTarget.setAttribute("data-swipe", "cancel"),
              l.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              l.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: x(e.onSwipeEnd, (l) => {
            const { x: f, y: u } = l.detail.delta;
            l.currentTarget.setAttribute("data-swipe", "end"),
              l.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              l.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              l.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${f}px`,
              ),
              l.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${u}px`,
              ),
              d(!1);
          }),
        }),
      ),
    );
  }),
  [xs, Cs] = Mn(Ze, { onClose() {} }),
  Fn = t.forwardRef((e, o) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: c,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: d,
        onResume: l,
        onSwipeStart: f,
        onSwipeMove: u,
        onSwipeCancel: E,
        onSwipeEnd: v,
        ...m
      } = e,
      p = qe(Ze, n),
      [b, g] = t.useState(null),
      $ = M(o, (C) => g(C)),
      w = t.useRef(null),
      P = t.useRef(null),
      R = c || p.duration,
      A = t.useRef(0),
      T = t.useRef(R),
      S = t.useRef(0),
      { onToastAdd: D, onToastRemove: B } = p,
      H = Q(() => {
        var C;
        (b == null ? void 0 : b.contains(document.activeElement)) &&
          ((C = p.viewport) === null || C === void 0 || C.focus()),
          i();
      }),
      F = t.useCallback(
        (C) => {
          !C ||
            C === 1 / 0 ||
            (window.clearTimeout(S.current),
            (A.current = new Date().getTime()),
            (S.current = window.setTimeout(H, C)));
        },
        [H],
      );
    t.useEffect(() => {
      const C = p.viewport;
      if (C) {
        const I = () => {
            F(T.current), l == null || l();
          },
          W = () => {
            const X = new Date().getTime() - A.current;
            (T.current = T.current - X),
              window.clearTimeout(S.current),
              d == null || d();
          };
        return (
          C.addEventListener(dt, W),
          C.addEventListener(ut, I),
          () => {
            C.removeEventListener(dt, W), C.removeEventListener(ut, I);
          }
        );
      }
    }, [p.viewport, R, d, l, F]),
      t.useEffect(() => {
        s && !p.isClosePausedRef.current && F(R);
      }, [s, R, p.isClosePausedRef, F]),
      t.useEffect(() => (D(), () => B()), [D, B]);
    const Y = t.useMemo(() => (b ? Kn(b) : null), [b]);
    return p.viewport
      ? t.createElement(
          t.Fragment,
          null,
          Y &&
            t.createElement(
              _s,
              {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
              },
              Y,
            ),
          t.createElement(
            xs,
            { scope: n, onClose: H },
            Ie.createPortal(
              t.createElement(
                St.ItemSlot,
                { scope: n },
                t.createElement(
                  mo,
                  {
                    asChild: !0,
                    onEscapeKeyDown: x(a, () => {
                      p.isFocusedToastEscapeKeyDownRef.current || H(),
                        (p.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                  },
                  t.createElement(
                    O.li,
                    h(
                      {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": p.swipeDirection,
                      },
                      m,
                      {
                        ref: $,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style,
                        },
                        onKeyDown: x(e.onKeyDown, (C) => {
                          C.key === "Escape" &&
                            (a == null || a(C.nativeEvent),
                            C.nativeEvent.defaultPrevented ||
                              ((p.isFocusedToastEscapeKeyDownRef.current = !0),
                              H()));
                        }),
                        onPointerDown: x(e.onPointerDown, (C) => {
                          C.button === 0 &&
                            (w.current = { x: C.clientX, y: C.clientY });
                        }),
                        onPointerMove: x(e.onPointerMove, (C) => {
                          if (!w.current) return;
                          const I = C.clientX - w.current.x,
                            W = C.clientY - w.current.y,
                            X = !!P.current,
                            z = ["left", "right"].includes(p.swipeDirection),
                            _ = ["left", "up"].includes(p.swipeDirection)
                              ? Math.min
                              : Math.max,
                            V = z ? _(0, I) : 0,
                            G = z ? 0 : _(0, W),
                            j = C.pointerType === "touch" ? 10 : 2,
                            q = { x: V, y: G },
                            J = { originalEvent: C, delta: q };
                          X
                            ? ((P.current = q), Le(gs, u, J, { discrete: !1 }))
                            : Ht(q, p.swipeDirection, j)
                              ? ((P.current = q),
                                Le(bs, f, J, { discrete: !1 }),
                                C.target.setPointerCapture(C.pointerId))
                              : (Math.abs(I) > j || Math.abs(W) > j) &&
                                (w.current = null);
                        }),
                        onPointerUp: x(e.onPointerUp, (C) => {
                          const I = P.current,
                            W = C.target;
                          if (
                            (W.hasPointerCapture(C.pointerId) &&
                              W.releasePointerCapture(C.pointerId),
                            (P.current = null),
                            (w.current = null),
                            I)
                          ) {
                            const X = C.currentTarget,
                              z = { originalEvent: C, delta: I };
                            Ht(I, p.swipeDirection, p.swipeThreshold)
                              ? Le(Es, v, z, { discrete: !0 })
                              : Le(hs, E, z, { discrete: !0 }),
                              X.addEventListener(
                                "click",
                                (_) => _.preventDefault(),
                                { once: !0 },
                              );
                          }
                        }),
                      },
                    ),
                  ),
                ),
              ),
              p.viewport,
            ),
          ),
        )
      : null;
  });
Fn.propTypes = {
  type(e) {
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const o = `Invalid prop \`type\` supplied to \`${Ze}\`. Expected \`foreground | background\`.`;
      return new Error(o);
    }
    return null;
  },
};
const _s = (e) => {
    const { __scopeToast: o, children: n, ...r } = e,
      c = qe(Ze, o),
      [s, i] = t.useState(!1),
      [a, d] = t.useState(!1);
    return (
      Rs(() => i(!0)),
      t.useEffect(() => {
        const l = window.setTimeout(() => d(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      a
        ? null
        : t.createElement(
            De,
            { asChild: !0 },
            t.createElement(
              _t,
              r,
              s && t.createElement(t.Fragment, null, c.label, " ", n),
            ),
          )
    );
  },
  Ps = t.forwardRef((e, o) => {
    const { __scopeToast: n, ...r } = e;
    return t.createElement(O.div, h({}, r, { ref: o }));
  }),
  ys = t.forwardRef((e, o) => {
    const { __scopeToast: n, ...r } = e;
    return t.createElement(O.div, h({}, r, { ref: o }));
  }),
  Ts = "ToastAction",
  Nn = t.forwardRef((e, o) => {
    const { altText: n, ...r } = e;
    return n
      ? t.createElement(
          Ln,
          { altText: n, asChild: !0 },
          t.createElement(kn, h({}, r, { ref: o })),
        )
      : null;
  });
Nn.propTypes = {
  altText(e) {
    return e.altText
      ? null
      : new Error(`Missing prop \`altText\` expected on \`${Ts}\``);
  },
};
const Ss = "ToastClose",
  kn = t.forwardRef((e, o) => {
    const { __scopeToast: n, ...r } = e,
      c = Cs(Ss, n);
    return t.createElement(
      Ln,
      { asChild: !0 },
      t.createElement(
        O.button,
        h({ type: "button" }, r, { ref: o, onClick: x(e.onClick, c.onClose) }),
      ),
    );
  }),
  Ln = t.forwardRef((e, o) => {
    const { __scopeToast: n, altText: r, ...c } = e;
    return t.createElement(
      O.div,
      h(
        {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
        },
        c,
        { ref: o },
      ),
    );
  });
function Kn(e) {
  const o = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && o.push(r.textContent),
        Is(r))
      ) {
        const c = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!c)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && o.push(i);
          } else o.push(...Kn(r));
      }
    }),
    o
  );
}
function Le(e, o, n, { discrete: r }) {
  const c = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  o && c.addEventListener(e, o, { once: !0 }),
    r ? ft(c, s) : c.dispatchEvent(s);
}
const Ht = (e, o, n = 0) => {
  const r = Math.abs(e.x),
    c = Math.abs(e.y),
    s = r > c;
  return o === "left" || o === "right" ? s && r > n : !s && c > n;
};
function Rs(e = () => {}) {
  const o = Q(e);
  ee(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(o)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [o]);
}
function Is(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Os(e) {
  const o = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const c = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || c
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) o.push(n.currentNode);
  return o;
}
function nt(e) {
  const o = document.activeElement;
  return e.some((n) =>
    n === o ? !0 : (n.focus(), document.activeElement !== o),
  );
}
const Da = An,
  Ma = ms,
  Aa = ws,
  Fa = Ps,
  Na = ys,
  ka = Nn,
  La = kn;
export {
  $e as $,
  ba as A,
  ga as B,
  ha as C,
  Ea as D,
  xa as E,
  wa as F,
  Pa as G,
  fa as H,
  $a as I,
  Ra as J,
  Ia as K,
  Ta as L,
  Sa as M,
  Ma as N,
  Aa as O,
  ka as P,
  La as Q,
  Fa as R,
  Na as S,
  Da as T,
  Js as a,
  Qs as b,
  Ws as c,
  Gs as d,
  Ys as e,
  Xs as f,
  qs as g,
  js as h,
  zs as i,
  Zs as j,
  Bs as k,
  Hs as l,
  ra as m,
  ca as n,
  ia as o,
  sa as p,
  aa as q,
  oa as r,
  ta as s,
  na as t,
  la as u,
  pa as v,
  ma as w,
  Ca as x,
  _a as y,
  va as z,
};
