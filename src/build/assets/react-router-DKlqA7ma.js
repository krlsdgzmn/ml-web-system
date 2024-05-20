import { r as n } from "./react-i33jQOB4.js";
import {
  i as g,
  g as L,
  r as j,
  j as R,
  m as _,
  A as T,
  p as w,
  s as S,
  a as z,
} from "./@remix-run-CA71pd9M.js";
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
          return e;
        }),
    P.apply(this, arguments)
  );
}
const B = n.createContext(null),
  W = n.createContext(null),
  b = n.createContext(null),
  U = n.createContext(null),
  E = n.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  M = n.createContext(null);
function le(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  y() || g(!1);
  let { basename: o, navigator: i } = n.useContext(b),
    { hash: u, pathname: a, search: f } = q(e, { relative: r }),
    c = a;
  return (
    o !== "/" && (c = a === "/" ? o : R([o, a])),
    i.createHref({ pathname: c, search: f, hash: u })
  );
}
function y() {
  return n.useContext(U) != null;
}
function O() {
  return y() || g(!1), n.useContext(U).location;
}
function D(e) {
  n.useContext(b).static || n.useLayoutEffect(e);
}
function oe() {
  let { isDataRoute: e } = n.useContext(E);
  return e ? te() : $();
}
function $() {
  y() || g(!1);
  let e = n.useContext(B),
    { basename: t, future: r, navigator: o } = n.useContext(b),
    { matches: i } = n.useContext(E),
    { pathname: u } = O(),
    a = JSON.stringify(L(i, r.v7_relativeSplatPath)),
    f = n.useRef(!1);
  return (
    D(() => {
      f.current = !0;
    }),
    n.useCallback(
      function (m, s) {
        if ((s === void 0 && (s = {}), !f.current)) return;
        if (typeof m == "number") {
          o.go(m);
          return;
        }
        let l = j(m, JSON.parse(a), u, s.relative === "path");
        e == null &&
          t !== "/" &&
          (l.pathname = l.pathname === "/" ? t : R([t, l.pathname])),
          (s.replace ? o.replace : o.push)(l, s.state, s);
      },
      [t, o, a, u, e],
    )
  );
}
function q(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: o } = n.useContext(b),
    { matches: i } = n.useContext(E),
    { pathname: u } = O(),
    a = JSON.stringify(L(i, o.v7_relativeSplatPath));
  return n.useMemo(() => j(e, JSON.parse(a), u, r === "path"), [e, a, u, r]);
}
function ie(e, t, r, o) {
  y() || g(!1);
  let { navigator: i } = n.useContext(b),
    { matches: u } = n.useContext(E),
    a = u[u.length - 1],
    f = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let m = O(),
    s;
  s = m;
  let l = s.pathname || "/",
    v = l;
  if (c !== "/") {
    let d = c.replace(/^\//, "").split("/");
    v = "/" + l.replace(/^\//, "").split("/").slice(d.length).join("/");
  }
  let h = _(e, { pathname: v });
  return X(
    h &&
      h.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, f, d.params),
          pathname: R([
            c,
            i.encodeLocation
              ? i.encodeLocation(d.pathname).pathname
              : d.pathname,
          ]),
          pathnameBase:
            d.pathnameBase === "/"
              ? c
              : R([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(d.pathnameBase).pathname
                    : d.pathnameBase,
                ]),
        }),
      ),
    u,
    r,
    o,
  );
}
function G() {
  let e = ee(),
    t = z(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return n.createElement(
    n.Fragment,
    null,
    n.createElement("h2", null, "Unexpected Application Error!"),
    n.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? n.createElement("pre", { style: i }, r) : null,
    null,
  );
}
const K = n.createElement(G, null);
class Q extends n.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? n.createElement(
          E.Provider,
          { value: this.props.routeContext },
          n.createElement(M.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function V(e) {
  let { routeContext: t, match: r, children: o } = e,
    i = n.useContext(B);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    n.createElement(E.Provider, { value: t }, o)
  );
}
function X(e, t, r, o) {
  var i;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    o === void 0 && (o = null),
    e == null)
  ) {
    var u;
    if ((u = r) != null && u.errors) e = r.matches;
    else return null;
  }
  let a = e,
    f = (i = r) == null ? void 0 : i.errors;
  if (f != null) {
    let s = a.findIndex(
      (l) => l.route.id && (f == null ? void 0 : f[l.route.id]) !== void 0,
    );
    s >= 0 || g(!1), (a = a.slice(0, Math.min(a.length, s + 1)));
  }
  let c = !1,
    m = -1;
  if (r && o && o.v7_partialHydration)
    for (let s = 0; s < a.length; s++) {
      let l = a[s];
      if (
        ((l.route.HydrateFallback || l.route.hydrateFallbackElement) && (m = s),
        l.route.id)
      ) {
        let { loaderData: v, errors: h } = r,
          p =
            l.route.loader &&
            v[l.route.id] === void 0 &&
            (!h || h[l.route.id] === void 0);
        if (l.route.lazy || p) {
          (c = !0), m >= 0 ? (a = a.slice(0, m + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((s, l, v) => {
    let h,
      p = !1,
      d = null,
      C = null;
    r &&
      ((h = f && l.route.id ? f[l.route.id] : void 0),
      (d = l.route.errorElement || K),
      c &&
        (m < 0 && v === 0
          ? (re("route-fallback"), (p = !0), (C = null))
          : m === v &&
            ((p = !0), (C = l.route.hydrateFallbackElement || null))));
    let F = t.concat(a.slice(0, v + 1)),
      I = () => {
        let x;
        return (
          h
            ? (x = d)
            : p
              ? (x = C)
              : l.route.Component
                ? (x = n.createElement(l.route.Component, null))
                : l.route.element
                  ? (x = l.route.element)
                  : (x = s),
          n.createElement(V, {
            match: l,
            routeContext: { outlet: s, matches: F, isDataRoute: r != null },
            children: x,
          })
        );
      };
    return r && (l.route.ErrorBoundary || l.route.errorElement || v === 0)
      ? n.createElement(Q, {
          location: r.location,
          revalidation: r.revalidation,
          component: d,
          error: h,
          children: I(),
          routeContext: { outlet: null, matches: F, isDataRoute: !0 },
        })
      : I();
  }, null);
}
var J = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(J || {}),
  N = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(N || {});
function Y(e) {
  let t = n.useContext(B);
  return t || g(!1), t;
}
function Z(e) {
  let t = n.useContext(W);
  return t || g(!1), t;
}
function H(e) {
  let t = n.useContext(E);
  return t || g(!1), t;
}
function A(e) {
  let t = H(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || g(!1), r.route.id;
}
function ee() {
  var e;
  let t = n.useContext(M),
    r = Z(N.UseRouteError),
    o = A(N.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[o];
}
function te() {
  let { router: e } = Y(J.UseNavigateStable),
    t = A(N.UseNavigateStable),
    r = n.useRef(!1);
  return (
    D(() => {
      r.current = !0;
    }),
    n.useCallback(
      function (i, u) {
        u === void 0 && (u = {}),
          r.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, P({ fromRouteId: t }, u)));
      },
      [e, t],
    )
  );
}
const k = {};
function re(e, t, r) {
  k[e] || (k[e] = !0);
}
function se(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: o,
    navigationType: i = T.Pop,
    navigator: u,
    static: a = !1,
    future: f,
  } = e;
  y() && g(!1);
  let c = t.replace(/^\/*/, "/"),
    m = n.useMemo(
      () => ({
        basename: c,
        navigator: u,
        static: a,
        future: P({ v7_relativeSplatPath: !1 }, f),
      }),
      [c, f, u, a],
    );
  typeof o == "string" && (o = w(o));
  let {
      pathname: s = "/",
      search: l = "",
      hash: v = "",
      state: h = null,
      key: p = "default",
    } = o,
    d = n.useMemo(() => {
      let C = S(s, c);
      return C == null
        ? null
        : {
            location: { pathname: C, search: l, hash: v, state: h, key: p },
            navigationType: i,
          };
    }, [c, s, l, v, h, p, i]);
  return d == null
    ? null
    : n.createElement(
        b.Provider,
        { value: m },
        n.createElement(U.Provider, { children: r, value: d }),
      );
}
new Promise(() => {});
function ue(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: n.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: n.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: n.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
export {
  B as D,
  b as N,
  se as R,
  W as a,
  le as b,
  oe as c,
  O as d,
  q as e,
  ue as m,
  ie as u,
};
