import { r as S } from "./react-i33jQOB4.js";
import { r as Nt } from "./react-dom-BEqY4yZs.js";
const Vt = ["top", "right", "bottom", "left"],
  H = Math.min,
  D = Math.max,
  rt = Math.round,
  ot = Math.floor,
  I = (t) => ({ x: t, y: t }),
  $t = { left: "right", right: "left", bottom: "top", top: "bottom" },
  zt = { start: "end", end: "start" };
function ut(t, e, n) {
  return D(t, H(e, n));
}
function z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function _(t) {
  return t.split("-")[0];
}
function J(t) {
  return t.split("-")[1];
}
function mt(t) {
  return t === "x" ? "y" : "x";
}
function gt(t) {
  return t === "y" ? "height" : "width";
}
function Q(t) {
  return ["top", "bottom"].includes(_(t)) ? "y" : "x";
}
function ht(t) {
  return mt(Q(t));
}
function _t(t, e, n) {
  n === void 0 && (n = !1);
  const o = J(t),
    i = ht(t),
    r = gt(i);
  let s =
    i === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return e.reference[r] > e.floating[r] && (s = st(s)), [s, st(s)];
}
function jt(t) {
  const e = st(t);
  return [dt(t), e, dt(e)];
}
function dt(t) {
  return t.replace(/start|end/g, (e) => zt[e]);
}
function It(t, e, n) {
  const o = ["left", "right"],
    i = ["right", "left"],
    r = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? (e ? i : o) : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function Yt(t, e, n, o) {
  const i = J(t);
  let r = It(_(t), n === "start", o);
  return (
    i && ((r = r.map((s) => s + "-" + i)), e && (r = r.concat(r.map(dt)))), r
  );
}
function st(t) {
  return t.replace(/left|right|bottom|top/g, (e) => $t[e]);
}
function Xt(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Pt(t) {
  return typeof t != "number"
    ? Xt(t)
    : { top: t, right: t, bottom: t, left: t };
}
function ct(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n,
  };
}
function vt(t, e, n) {
  let { reference: o, floating: i } = t;
  const r = Q(e),
    s = ht(e),
    l = gt(s),
    c = _(e),
    f = r === "y",
    d = o.x + o.width / 2 - i.width / 2,
    u = o.y + o.height / 2 - i.height / 2,
    m = o[l] / 2 - i[l] / 2;
  let a;
  switch (c) {
    case "top":
      a = { x: d, y: o.y - i.height };
      break;
    case "bottom":
      a = { x: d, y: o.y + o.height };
      break;
    case "right":
      a = { x: o.x + o.width, y: u };
      break;
    case "left":
      a = { x: o.x - i.width, y: u };
      break;
    default:
      a = { x: o.x, y: o.y };
  }
  switch (J(e)) {
    case "start":
      a[s] -= m * (n && f ? -1 : 1);
      break;
    case "end":
      a[s] += m * (n && f ? -1 : 1);
      break;
  }
  return a;
}
const qt = async (t, e, n) => {
  const {
      placement: o = "bottom",
      strategy: i = "absolute",
      middleware: r = [],
      platform: s,
    } = n,
    l = r.filter(Boolean),
    c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let f = await s.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: d, y: u } = vt(f, o, c),
    m = o,
    a = {},
    g = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: w, fn: p } = l[h],
      {
        x: y,
        y: v,
        data: b,
        reset: x,
      } = await p({
        x: d,
        y: u,
        initialPlacement: o,
        placement: m,
        strategy: i,
        middlewareData: a,
        rects: f,
        platform: s,
        elements: { reference: t, floating: e },
      });
    (d = y ?? d),
      (u = v ?? u),
      (a = { ...a, [w]: { ...a[w], ...b } }),
      x &&
        g <= 50 &&
        (g++,
        typeof x == "object" &&
          (x.placement && (m = x.placement),
          x.rects &&
            (f =
              x.rects === !0
                ? await s.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i,
                  })
                : x.rects),
          ({ x: d, y: u } = vt(f, m, c))),
        (h = -1));
  }
  return { x: d, y: u, placement: m, strategy: i, middlewareData: a };
};
async function tt(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: r, rects: s, elements: l, strategy: c } = t,
    {
      boundary: f = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: u = "floating",
      altBoundary: m = !1,
      padding: a = 0,
    } = z(e, t),
    g = Pt(a),
    w = l[m ? (u === "floating" ? "reference" : "floating") : u],
    p = ct(
      await r.getClippingRect({
        element:
          (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (r.getDocumentElement == null
                ? void 0
                : r.getDocumentElement(l.floating))),
        boundary: f,
        rootBoundary: d,
        strategy: c,
      }),
    ),
    y =
      u === "floating"
        ? { x: o, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (r.getOffsetParent == null
      ? void 0
      : r.getOffsetParent(l.floating)),
    b = (await (r.isElement == null ? void 0 : r.isElement(v)))
      ? (await (r.getScale == null ? void 0 : r.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    x = ct(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: v,
            strategy: c,
          })
        : y,
    );
  return {
    top: (p.top - x.top + g.top) / b.y,
    bottom: (x.bottom - p.bottom + g.bottom) / b.y,
    left: (p.left - x.left + g.left) / b.x,
    right: (x.right - p.right + g.right) / b.x,
  };
}
const Ut = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: n,
          y: o,
          placement: i,
          rects: r,
          platform: s,
          elements: l,
          middlewareData: c,
        } = e,
        { element: f, padding: d = 0 } = z(t, e) || {};
      if (f == null) return {};
      const u = Pt(d),
        m = { x: n, y: o },
        a = ht(i),
        g = gt(a),
        h = await s.getDimensions(f),
        w = a === "y",
        p = w ? "top" : "left",
        y = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        b = r.reference[g] + r.reference[a] - m[a] - r.floating[g],
        x = m[a] - r.reference[a],
        A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
      let O = A ? A[v] : 0;
      (!O || !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
        (O = l.floating[v] || r.floating[g]);
      const P = b / 2 - x / 2,
        B = O / 2 - h[g] / 2 - 1,
        k = H(u[p], B),
        F = H(u[y], B),
        C = k,
        $ = O - h[g] - F,
        L = O / 2 - h[g] / 2 + P,
        E = ut(C, L, $),
        T =
          !c.arrow &&
          J(i) != null &&
          L !== E &&
          r.reference[g] / 2 - (L < C ? k : F) - h[g] / 2 < 0,
        R = T ? (L < C ? L - C : L - $) : 0;
      return {
        [a]: m[a] + R,
        data: {
          [a]: E,
          centerOffset: L - E - R,
          ...(T && { alignmentOffset: R }),
        },
        reset: T,
      };
    },
  }),
  Kt = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n, o;
          const {
              placement: i,
              middlewareData: r,
              rects: s,
              initialPlacement: l,
              platform: c,
              elements: f,
            } = e,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: m,
              fallbackStrategy: a = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: h = !0,
              ...w
            } = z(t, e);
          if ((n = r.arrow) != null && n.alignmentOffset) return {};
          const p = _(i),
            y = _(l) === l,
            v = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
            b = m || (y || !h ? [st(l)] : jt(l));
          !m && g !== "none" && b.push(...Yt(l, h, g, v));
          const x = [l, ...b],
            A = await tt(e, w),
            O = [];
          let P = ((o = r.flip) == null ? void 0 : o.overflows) || [];
          if ((d && O.push(A[p]), u)) {
            const C = _t(i, s, v);
            O.push(A[C[0]], A[C[1]]);
          }
          if (
            ((P = [...P, { placement: i, overflows: O }]),
            !O.every((C) => C <= 0))
          ) {
            var B, k;
            const C = (((B = r.flip) == null ? void 0 : B.index) || 0) + 1,
              $ = x[C];
            if ($)
              return {
                data: { index: C, overflows: P },
                reset: { placement: $ },
              };
            let L =
              (k = P.filter((E) => E.overflows[0] <= 0).sort(
                (E, T) => E.overflows[1] - T.overflows[1],
              )[0]) == null
                ? void 0
                : k.placement;
            if (!L)
              switch (a) {
                case "bestFit": {
                  var F;
                  const E =
                    (F = P.map((T) => [
                      T.placement,
                      T.overflows
                        .filter((R) => R > 0)
                        .reduce((R, q) => R + q, 0),
                    ]).sort((T, R) => T[1] - R[1])[0]) == null
                      ? void 0
                      : F[0];
                  E && (L = E);
                  break;
                }
                case "initialPlacement":
                  L = l;
                  break;
              }
            if (i !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function bt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function At(t) {
  return Vt.some((e) => t[e] >= 0);
}
const Gt = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e,
          { strategy: o = "referenceHidden", ...i } = z(t, e);
        switch (o) {
          case "referenceHidden": {
            const r = await tt(e, { ...i, elementContext: "reference" }),
              s = bt(r, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: At(s) },
            };
          }
          case "escaped": {
            const r = await tt(e, { ...i, altBoundary: !0 }),
              s = bt(r, n.floating);
            return { data: { escapedOffsets: s, escaped: At(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Jt(t, e) {
  const { placement: n, platform: o, elements: i } = t,
    r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)),
    s = _(n),
    l = J(n),
    c = Q(n) === "y",
    f = ["left", "top"].includes(s) ? -1 : 1,
    d = r && c ? -1 : 1,
    u = z(e, t);
  let {
    mainAxis: m,
    crossAxis: a,
    alignmentAxis: g,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
  return (
    l && typeof g == "number" && (a = l === "end" ? g * -1 : g),
    c ? { x: a * d, y: m * f } : { x: m * f, y: a * d }
  );
}
const Qt = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var n, o;
          const { x: i, y: r, placement: s, middlewareData: l } = e,
            c = await Jt(e, t);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (o = l.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: i + c.x, y: r + c.y, data: { ...c, placement: s } };
        },
      }
    );
  },
  Zt = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: o, placement: i } = e,
            {
              mainAxis: r = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: p, y } = w;
                  return { x: p, y };
                },
              },
              ...c
            } = z(t, e),
            f = { x: n, y: o },
            d = await tt(e, c),
            u = Q(_(i)),
            m = mt(u);
          let a = f[m],
            g = f[u];
          if (r) {
            const w = m === "y" ? "top" : "left",
              p = m === "y" ? "bottom" : "right",
              y = a + d[w],
              v = a - d[p];
            a = ut(y, a, v);
          }
          if (s) {
            const w = u === "y" ? "top" : "left",
              p = u === "y" ? "bottom" : "right",
              y = g + d[w],
              v = g - d[p];
            g = ut(y, g, v);
          }
          const h = l.fn({ ...e, [m]: a, [u]: g });
          return { ...h, data: { x: h.x - n, y: h.y - o } };
        },
      }
    );
  },
  te = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(e) {
          const { x: n, y: o, placement: i, rects: r, middlewareData: s } = e,
            { offset: l = 0, mainAxis: c = !0, crossAxis: f = !0 } = z(t, e),
            d = { x: n, y: o },
            u = Q(i),
            m = mt(u);
          let a = d[m],
            g = d[u];
          const h = z(l, e),
            w =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            const v = m === "y" ? "height" : "width",
              b = r.reference[m] - r.floating[v] + w.mainAxis,
              x = r.reference[m] + r.reference[v] - w.mainAxis;
            a < b ? (a = b) : a > x && (a = x);
          }
          if (f) {
            var p, y;
            const v = m === "y" ? "width" : "height",
              b = ["top", "left"].includes(_(i)),
              x =
                r.reference[u] -
                r.floating[v] +
                ((b && ((p = s.offset) == null ? void 0 : p[u])) || 0) +
                (b ? 0 : w.crossAxis),
              A =
                r.reference[u] +
                r.reference[v] +
                (b ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) -
                (b ? w.crossAxis : 0);
            g < x ? (g = x) : g > A && (g = A);
          }
          return { [m]: a, [u]: g };
        },
      }
    );
  },
  ee = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          const { placement: n, rects: o, platform: i, elements: r } = e,
            { apply: s = () => {}, ...l } = z(t, e),
            c = await tt(e, l),
            f = _(n),
            d = J(n),
            u = Q(n) === "y",
            { width: m, height: a } = o.floating;
          let g, h;
          f === "top" || f === "bottom"
            ? ((g = f),
              (h =
                d ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(r.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = f), (g = d === "end" ? "top" : "bottom"));
          const w = a - c.top - c.bottom,
            p = m - c.left - c.right,
            y = H(a - c[g], w),
            v = H(m - c[h], p),
            b = !e.middlewareData.shift;
          let x = y,
            A = v;
          if (
            (u ? (A = d || b ? H(v, p) : p) : (x = d || b ? H(y, w) : w),
            b && !d)
          ) {
            const P = D(c.left, 0),
              B = D(c.right, 0),
              k = D(c.top, 0),
              F = D(c.bottom, 0);
            u
              ? (A = m - 2 * (P !== 0 || B !== 0 ? P + B : D(c.left, c.right)))
              : (x = a - 2 * (k !== 0 || F !== 0 ? k + F : D(c.top, c.bottom)));
          }
          await s({ ...e, availableWidth: A, availableHeight: x });
          const O = await i.getDimensions(r.floating);
          return m !== O.width || a !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Z(t) {
  return Tt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function M(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function j(t) {
  var e;
  return (e = (Tt(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Tt(t) {
  return t instanceof Node || t instanceof M(t).Node;
}
function N(t) {
  return t instanceof Element || t instanceof M(t).Element;
}
function V(t) {
  return t instanceof HTMLElement || t instanceof M(t).HTMLElement;
}
function Rt(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof M(t).ShadowRoot;
}
function nt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = W(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
    !["inline", "contents"].includes(i)
  );
}
function ne(t) {
  return ["table", "td", "th"].includes(Z(t));
}
function pt(t) {
  const e = wt(),
    n = W(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!e && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o),
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o),
    )
  );
}
function oe(t) {
  let e = Y(t);
  for (; V(e) && !G(e); ) {
    if (pt(e)) return e;
    e = Y(e);
  }
  return null;
}
function wt() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function G(t) {
  return ["html", "body", "#document"].includes(Z(t));
}
function W(t) {
  return M(t).getComputedStyle(t);
}
function ft(t) {
  return N(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Y(t) {
  if (Z(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Rt(t) && t.host) || j(t);
  return Rt(e) ? e.host : e;
}
function Dt(t) {
  const e = Y(t);
  return G(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : V(e) && nt(e)
      ? e
      : Dt(e);
}
function et(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Dt(t),
    r = i === ((o = t.ownerDocument) == null ? void 0 : o.body),
    s = M(i);
  return r
    ? e.concat(
        s,
        s.visualViewport || [],
        nt(i) ? i : [],
        s.frameElement && n ? et(s.frameElement) : [],
      )
    : e.concat(i, et(i, [], n));
}
function Mt(t) {
  const e = W(t);
  let n = parseFloat(e.width) || 0,
    o = parseFloat(e.height) || 0;
  const i = V(t),
    r = i ? t.offsetWidth : n,
    s = i ? t.offsetHeight : o,
    l = rt(n) !== r || rt(o) !== s;
  return l && ((n = r), (o = s)), { width: n, height: o, $: l };
}
function xt(t) {
  return N(t) ? t : t.contextElement;
}
function K(t) {
  const e = xt(t);
  if (!V(e)) return I(1);
  const n = e.getBoundingClientRect(),
    { width: o, height: i, $: r } = Mt(e);
  let s = (r ? rt(n.width) : n.width) / o,
    l = (r ? rt(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const ie = I(0);
function kt(t) {
  const e = M(t);
  return !wt() || !e.visualViewport
    ? ie
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function re(t, e, n) {
  return e === void 0 && (e = !1), !n || (e && n !== M(t)) ? !1 : e;
}
function X(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(),
    r = xt(t);
  let s = I(1);
  e && (o ? N(o) && (s = K(o)) : (s = K(t)));
  const l = re(r, n, o) ? kt(r) : I(0);
  let c = (i.left + l.x) / s.x,
    f = (i.top + l.y) / s.y,
    d = i.width / s.x,
    u = i.height / s.y;
  if (r) {
    const m = M(r),
      a = o && N(o) ? M(o) : o;
    let g = m,
      h = g.frameElement;
    for (; h && o && a !== g; ) {
      const w = K(h),
        p = h.getBoundingClientRect(),
        y = W(h),
        v = p.left + (h.clientLeft + parseFloat(y.paddingLeft)) * w.x,
        b = p.top + (h.clientTop + parseFloat(y.paddingTop)) * w.y;
      (c *= w.x),
        (f *= w.y),
        (d *= w.x),
        (u *= w.y),
        (c += v),
        (f += b),
        (g = M(h)),
        (h = g.frameElement);
    }
  }
  return ct({ width: d, height: u, x: c, y: f });
}
const se = [":popover-open", ":modal"];
function yt(t) {
  return se.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function ce(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const r = i === "fixed",
    s = j(o),
    l = e ? yt(e.floating) : !1;
  if (o === s || (l && r)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    f = I(1);
  const d = I(0),
    u = V(o);
  if ((u || (!u && !r)) && ((Z(o) !== "body" || nt(s)) && (c = ft(o)), V(o))) {
    const m = X(o);
    (f = K(o)), (d.x = m.x + o.clientLeft), (d.y = m.y + o.clientTop);
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + d.x,
    y: n.y * f.y - c.scrollTop * f.y + d.y,
  };
}
function le(t) {
  return Array.from(t.getClientRects());
}
function Ft(t) {
  return X(j(t)).left + ft(t).scrollLeft;
}
function fe(t) {
  const e = j(t),
    n = ft(t),
    o = t.ownerDocument.body,
    i = D(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
    r = D(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Ft(t);
  const l = -n.scrollTop;
  return (
    W(o).direction === "rtl" && (s += D(e.clientWidth, o.clientWidth) - i),
    { width: i, height: r, x: s, y: l }
  );
}
function ae(t, e) {
  const n = M(t),
    o = j(t),
    i = n.visualViewport;
  let r = o.clientWidth,
    s = o.clientHeight,
    l = 0,
    c = 0;
  if (i) {
    (r = i.width), (s = i.height);
    const f = wt();
    (!f || (f && e === "fixed")) && ((l = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: r, height: s, x: l, y: c };
}
function ue(t, e) {
  const n = X(t, !0, e === "fixed"),
    o = n.top + t.clientTop,
    i = n.left + t.clientLeft,
    r = V(t) ? K(t) : I(1),
    s = t.clientWidth * r.x,
    l = t.clientHeight * r.y,
    c = i * r.x,
    f = o * r.y;
  return { width: s, height: l, x: c, y: f };
}
function Ot(t, e, n) {
  let o;
  if (e === "viewport") o = ae(t, n);
  else if (e === "document") o = fe(j(t));
  else if (N(e)) o = ue(e, n);
  else {
    const i = kt(t);
    o = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return ct(o);
}
function Wt(t, e) {
  const n = Y(t);
  return n === e || !N(n) || G(n) ? !1 : W(n).position === "fixed" || Wt(n, e);
}
function de(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = et(t, [], !1).filter((l) => N(l) && Z(l) !== "body"),
    i = null;
  const r = W(t).position === "fixed";
  let s = r ? Y(t) : t;
  for (; N(s) && !G(s); ) {
    const l = W(s),
      c = pt(s);
    !c && l.position === "fixed" && (i = null),
      (
        r
          ? !c && !i
          : (!c &&
              l.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (nt(s) && !c && Wt(t, s))
      )
        ? (o = o.filter((d) => d !== s))
        : (i = l),
      (s = Y(s));
  }
  return e.set(t, o), o;
}
function me(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = [
      ...(n === "clippingAncestors"
        ? yt(e)
          ? []
          : de(e, this._c)
        : [].concat(n)),
      o,
    ],
    l = s[0],
    c = s.reduce(
      (f, d) => {
        const u = Ot(e, d, i);
        return (
          (f.top = D(u.top, f.top)),
          (f.right = H(u.right, f.right)),
          (f.bottom = H(u.bottom, f.bottom)),
          (f.left = D(u.left, f.left)),
          f
        );
      },
      Ot(e, l, i),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function ge(t) {
  const { width: e, height: n } = Mt(t);
  return { width: e, height: n };
}
function he(t, e, n) {
  const o = V(e),
    i = j(e),
    r = n === "fixed",
    s = X(t, !0, r, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = I(0);
  if (o || (!o && !r))
    if (((Z(e) !== "body" || nt(i)) && (l = ft(e)), o)) {
      const u = X(e, !0, r, e);
      (c.x = u.x + e.clientLeft), (c.y = u.y + e.clientTop);
    } else i && (c.x = Ft(i));
  const f = s.left + l.scrollLeft - c.x,
    d = s.top + l.scrollTop - c.y;
  return { x: f, y: d, width: s.width, height: s.height };
}
function at(t) {
  return W(t).position === "static";
}
function Ct(t, e) {
  return !V(t) || W(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Bt(t, e) {
  const n = M(t);
  if (yt(t)) return n;
  if (!V(t)) {
    let i = Y(t);
    for (; i && !G(i); ) {
      if (N(i) && !at(i)) return i;
      i = Y(i);
    }
    return n;
  }
  let o = Ct(t, e);
  for (; o && ne(o) && at(o); ) o = Ct(o, e);
  return o && G(o) && at(o) && !pt(o) ? n : o || oe(t) || n;
}
const pe = async function (t) {
  const e = this.getOffsetParent || Bt,
    n = this.getDimensions,
    o = await n(t.floating);
  return {
    reference: he(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function we(t) {
  return W(t).direction === "rtl";
}
const xe = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ce,
  getDocumentElement: j,
  getClippingRect: me,
  getOffsetParent: Bt,
  getElementRects: pe,
  getClientRects: le,
  getDimensions: ge,
  getScale: K,
  isElement: N,
  isRTL: we,
};
function ye(t, e) {
  let n = null,
    o;
  const i = j(t);
  function r() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), r();
    const { left: f, top: d, width: u, height: m } = t.getBoundingClientRect();
    if ((l || e(), !u || !m)) return;
    const a = ot(d),
      g = ot(i.clientWidth - (f + u)),
      h = ot(i.clientHeight - (d + m)),
      w = ot(f),
      y = {
        rootMargin: -a + "px " + -g + "px " + -h + "px " + -w + "px",
        threshold: D(0, H(1, c)) || 1,
      };
    let v = !0;
    function b(x) {
      const A = x[0].intersectionRatio;
      if (A !== c) {
        if (!v) return s();
        A
          ? s(!1, A)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(b, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, y);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function Re(t, e, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: r = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = o,
    f = xt(t),
    d = i || r ? [...(f ? et(f) : []), ...et(e)] : [];
  d.forEach((p) => {
    i && p.addEventListener("scroll", n, { passive: !0 }),
      r && p.addEventListener("resize", n);
  });
  const u = f && l ? ye(f, n) : null;
  let m = -1,
    a = null;
  s &&
    ((a = new ResizeObserver((p) => {
      let [y] = p;
      y &&
        y.target === f &&
        a &&
        (a.unobserve(e),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var v;
          (v = a) == null || v.observe(e);
        }))),
        n();
    })),
    f && !c && a.observe(f),
    a.observe(e));
  let g,
    h = c ? X(t) : null;
  c && w();
  function w() {
    const p = X(t);
    h &&
      (p.x !== h.x ||
        p.y !== h.y ||
        p.width !== h.width ||
        p.height !== h.height) &&
      n(),
      (h = p),
      (g = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var p;
      d.forEach((y) => {
        i && y.removeEventListener("scroll", n),
          r && y.removeEventListener("resize", n);
      }),
        u == null || u(),
        (p = a) == null || p.disconnect(),
        (a = null),
        c && cancelAnimationFrame(g);
    }
  );
}
const Oe = Qt,
  Ce = Zt,
  Ee = Kt,
  Se = ee,
  Le = Gt,
  Et = Ut,
  Pe = te,
  ve = (t, e, n) => {
    const o = new Map(),
      i = { platform: xe, ...n },
      r = { ...i.platform, _c: o };
    return qt(t, e, { ...i, platform: r });
  },
  Te = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(n) {
        const { element: o, padding: i } = typeof t == "function" ? t(n) : t;
        return o && e(o)
          ? o.current != null
            ? Et({ element: o.current, padding: i }).fn(n)
            : {}
          : o
            ? Et({ element: o, padding: i }).fn(n)
            : {};
      },
    };
  };
var it = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function lt(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == "function" && t.toString() === e.toString()) return !0;
  let n, o, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (o = n; o-- !== 0; ) if (!lt(t[o], e[o])) return !1;
      return !0;
    }
    if (((i = Object.keys(t)), (n = i.length), n !== Object.keys(e).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(e, i[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const r = i[o];
      if (!(r === "_owner" && t.$$typeof) && !lt(t[r], e[r])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Ht(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function St(t, e) {
  const n = Ht(t);
  return Math.round(e * n) / n;
}
function Lt(t) {
  const e = S.useRef(t);
  return (
    it(() => {
      e.current = t;
    }),
    e
  );
}
function De(t) {
  t === void 0 && (t = {});
  const {
      placement: e = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: i,
      elements: { reference: r, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: c,
      open: f,
    } = t,
    [d, u] = S.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, a] = S.useState(o);
  lt(m, o) || a(o);
  const [g, h] = S.useState(null),
    [w, p] = S.useState(null),
    y = S.useCallback((R) => {
      R !== A.current && ((A.current = R), h(R));
    }, []),
    v = S.useCallback((R) => {
      R !== O.current && ((O.current = R), p(R));
    }, []),
    b = r || g,
    x = s || w,
    A = S.useRef(null),
    O = S.useRef(null),
    P = S.useRef(d),
    B = c != null,
    k = Lt(c),
    F = Lt(i),
    C = S.useCallback(() => {
      if (!A.current || !O.current) return;
      const R = { placement: e, strategy: n, middleware: m };
      F.current && (R.platform = F.current),
        ve(A.current, O.current, R).then((q) => {
          const U = { ...q, isPositioned: !0 };
          $.current &&
            !lt(P.current, U) &&
            ((P.current = U),
            Nt.flushSync(() => {
              u(U);
            }));
        });
    }, [m, e, n, F]);
  it(() => {
    f === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), u((R) => ({ ...R, isPositioned: !1 })));
  }, [f]);
  const $ = S.useRef(!1);
  it(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    [],
  ),
    it(() => {
      if ((b && (A.current = b), x && (O.current = x), b && x)) {
        if (k.current) return k.current(b, x, C);
        C();
      }
    }, [b, x, C, k, B]);
  const L = S.useMemo(
      () => ({ reference: A, floating: O, setReference: y, setFloating: v }),
      [y, v],
    ),
    E = S.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    T = S.useMemo(() => {
      const R = { position: n, left: 0, top: 0 };
      if (!E.floating) return R;
      const q = St(E.floating, d.x),
        U = St(E.floating, d.y);
      return l
        ? {
            ...R,
            transform: "translate(" + q + "px, " + U + "px)",
            ...(Ht(E.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: q, top: U };
    }, [n, l, E.floating, d.x, d.y]);
  return S.useMemo(
    () => ({ ...d, update: C, refs: L, elements: E, floatingStyles: T }),
    [d, C, L, E, T],
  );
}
export {
  Re as a,
  Se as b,
  Te as c,
  Ee as f,
  Le as h,
  Pe as l,
  Oe as o,
  Ce as s,
  De as u,
};
