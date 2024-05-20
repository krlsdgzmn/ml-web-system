import { r, $ as z } from "./react-i33jQOB4.js";
import { a as A } from "./react-dom-BEqY4yZs.js";
import {
  m as B,
  D as H,
  a as M,
  R as K,
  u as W,
  N as $,
  b as G,
  c as X,
  d as Y,
  e as q,
} from "./react-router-DKlqA7ma.js";
import {
  c as J,
  b as Q,
  E as Z,
  s as ee,
  d as U,
} from "./@remix-run-CA71pd9M.js";
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        }),
    C.apply(this, arguments)
  );
}
function te(e, i) {
  if (e == null) return {};
  var t = {},
    a = Object.keys(e),
    n,
    s;
  for (s = 0; s < a.length; s++)
    (n = a[s]), !(i.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
function ne(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function re(e, i) {
  return e.button === 0 && (!i || i === "_self") && !ne(e);
}
const ie = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ae = "6";
try {
  window.__reactRouterVersion = ae;
} catch {}
function Te(e, i) {
  return J({
    basename: void 0,
    future: C({}, void 0, { v7_prependBasename: !0 }),
    history: Q({ window: void 0 }),
    hydrationData: se(),
    routes: e,
    mapRouteProperties: B,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function se() {
  var e;
  let i = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return i && i.errors && (i = C({}, i, { errors: oe(i.errors) })), i;
}
function oe(e) {
  if (!e) return null;
  let i = Object.entries(e),
    t = {};
  for (let [a, n] of i)
    if (n && n.__type === "RouteErrorResponse")
      t[a] = new Z(n.status, n.statusText, n.data, n.internal === !0);
    else if (n && n.__type === "Error") {
      if (n.__subType) {
        let s = window[n.__subType];
        if (typeof s == "function")
          try {
            let u = new s(n.message);
            (u.stack = ""), (t[a] = u);
          } catch {}
      }
      if (t[a] == null) {
        let s = new Error(n.message);
        (s.stack = ""), (t[a] = s);
      }
    } else t[a] = n;
  return t;
}
const le = r.createContext({ isTransitioning: !1 }),
  ue = r.createContext(new Map()),
  ce = "startTransition",
  O = z[ce],
  fe = "flushSync",
  D = A[fe];
function de(e) {
  O ? O(e) : e();
}
function x(e) {
  D ? D(e) : e();
}
class pe {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((i, t) => {
        (this.resolve = (a) => {
          this.status === "pending" && ((this.status = "resolved"), i(a));
        }),
          (this.reject = (a) => {
            this.status === "pending" && ((this.status = "rejected"), t(a));
          });
      }));
  }
}
function Ee(e) {
  let { fallbackElement: i, router: t, future: a } = e,
    [n, s] = r.useState(t.state),
    [u, h] = r.useState(),
    [f, o] = r.useState({ isTransitioning: !1 }),
    [c, w] = r.useState(),
    [d, T] = r.useState(),
    [m, b] = r.useState(),
    E = r.useRef(new Map()),
    { v7_startTransition: P } = a || {},
    L = r.useCallback(
      (l) => {
        P ? de(l) : l();
      },
      [P],
    ),
    p = r.useCallback(
      (l, S) => {
        let {
          deletedFetchers: v,
          unstable_flushSync: k,
          unstable_viewTransitionOpts: R,
        } = S;
        v.forEach((g) => E.current.delete(g)),
          l.fetchers.forEach((g, N) => {
            g.data !== void 0 && E.current.set(N, g.data);
          });
        let j =
          t.window == null ||
          t.window.document == null ||
          typeof t.window.document.startViewTransition != "function";
        if (!R || j) {
          k ? x(() => s(l)) : L(() => s(l));
          return;
        }
        if (k) {
          x(() => {
            d && (c && c.resolve(), d.skipTransition()),
              o({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: R.currentLocation,
                nextLocation: R.nextLocation,
              });
          });
          let g = t.window.document.startViewTransition(() => {
            x(() => s(l));
          });
          g.finished.finally(() => {
            x(() => {
              w(void 0), T(void 0), h(void 0), o({ isTransitioning: !1 });
            });
          }),
            x(() => T(g));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            b({
              state: l,
              currentLocation: R.currentLocation,
              nextLocation: R.nextLocation,
            }))
          : (h(l),
            o({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: R.currentLocation,
              nextLocation: R.nextLocation,
            }));
      },
      [t.window, d, c, E, L],
    );
  r.useLayoutEffect(() => t.subscribe(p), [t, p]),
    r.useEffect(() => {
      f.isTransitioning && !f.flushSync && w(new pe());
    }, [f]),
    r.useEffect(() => {
      if (c && u && t.window) {
        let l = u,
          S = c.promise,
          v = t.window.document.startViewTransition(async () => {
            L(() => s(l)), await S;
          });
        v.finished.finally(() => {
          w(void 0), T(void 0), h(void 0), o({ isTransitioning: !1 });
        }),
          T(v);
      }
    }, [L, u, c, t.window]),
    r.useEffect(() => {
      c && u && n.location.key === u.location.key && c.resolve();
    }, [c, d, n.location, u]),
    r.useEffect(() => {
      !f.isTransitioning &&
        m &&
        (h(m.state),
        o({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        b(void 0));
    }, [f.isTransitioning, m]),
    r.useEffect(() => {}, []);
  let y = r.useMemo(
      () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: (l) => t.navigate(l),
        push: (l, S, v) =>
          t.navigate(l, {
            state: S,
            preventScrollReset: v == null ? void 0 : v.preventScrollReset,
          }),
        replace: (l, S, v) =>
          t.navigate(l, {
            replace: !0,
            state: S,
            preventScrollReset: v == null ? void 0 : v.preventScrollReset,
          }),
      }),
      [t],
    ),
    _ = t.basename || "/",
    V = r.useMemo(
      () => ({ router: t, navigator: y, static: !1, basename: _ }),
      [t, y, _],
    );
  return r.createElement(
    r.Fragment,
    null,
    r.createElement(
      H.Provider,
      { value: V },
      r.createElement(
        M.Provider,
        { value: n },
        r.createElement(
          ue.Provider,
          { value: E.current },
          r.createElement(
            le.Provider,
            { value: f },
            r.createElement(
              K,
              {
                basename: _,
                location: n.location,
                navigationType: n.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: t.future.v7_relativeSplatPath },
              },
              n.initialized || t.future.v7_partialHydration
                ? r.createElement(ve, {
                    routes: t.routes,
                    future: t.future,
                    state: n,
                  })
                : i,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function ve(e) {
  let { routes: i, future: t, state: a } = e;
  return W(i, void 0, a, t);
}
const he =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  we = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Le = r.forwardRef(function (i, t) {
    let {
        onClick: a,
        relative: n,
        reloadDocument: s,
        replace: u,
        state: h,
        target: f,
        to: o,
        preventScrollReset: c,
        unstable_viewTransition: w,
      } = i,
      d = te(i, ie),
      { basename: T } = r.useContext($),
      m,
      b = !1;
    if (typeof o == "string" && we.test(o) && ((m = o), he))
      try {
        let p = new URL(window.location.href),
          y = o.startsWith("//") ? new URL(p.protocol + o) : new URL(o),
          _ = ee(y.pathname, T);
        y.origin === p.origin && _ != null
          ? (o = _ + y.search + y.hash)
          : (b = !0);
      } catch {}
    let E = G(o, { relative: n }),
      P = me(o, {
        replace: u,
        state: h,
        target: f,
        preventScrollReset: c,
        relative: n,
        unstable_viewTransition: w,
      });
    function L(p) {
      a && a(p), p.defaultPrevented || P(p);
    }
    return r.createElement(
      "a",
      C({}, d, { href: m || E, onClick: b || s ? a : L, ref: t, target: f }),
    );
  });
var F;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(F || (F = {}));
var I;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(I || (I = {}));
function me(e, i) {
  let {
      target: t,
      replace: a,
      state: n,
      preventScrollReset: s,
      relative: u,
      unstable_viewTransition: h,
    } = i === void 0 ? {} : i,
    f = X(),
    o = Y(),
    c = q(e, { relative: u });
  return r.useCallback(
    (w) => {
      if (re(w, t)) {
        w.preventDefault();
        let d = a !== void 0 ? a : U(o) === U(c);
        f(e, {
          replace: d,
          state: n,
          preventScrollReset: s,
          relative: u,
          unstable_viewTransition: h,
        });
      }
    },
    [o, f, c, a, n, t, e, s, u, h],
  );
}
export { Le as L, Ee as R, Te as c };
