/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function I() {
  return (
    (I = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        }),
    I.apply(this, arguments)
  );
}
var O;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(O || (O = {}));
const wt = "popstate";
function ra(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: f, search: l, hash: u } = r.location;
    return Oe(
      "",
      { pathname: f, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function a(r, o) {
    return typeof o == "string" ? o : Be(o);
  }
  return dr(t, a, null, e);
}
function F(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function xe(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function lr() {
  return Math.random().toString(36).substr(2, 8);
}
function bt(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Oe(e, t, a, r) {
  return (
    a === void 0 && (a = null),
    I(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ye(t) : t,
      { state: a, key: (t && t.key) || r || lr() },
    )
  );
}
function Be(e) {
  let { pathname: t = "/", search: a = "", hash: r = "" } = e;
  return (
    a && a !== "?" && (t += a.charAt(0) === "?" ? a : "?" + a),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ye(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((t.hash = e.substr(a)), (e = e.substr(0, a)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function dr(e, t, a, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: f = !1 } = r,
    l = o.history,
    u = O.Pop,
    c = null,
    w = p();
  w == null && ((w = 0), l.replaceState(I({}, l.state, { idx: w }), ""));
  function p() {
    return (l.state || { idx: null }).idx;
  }
  function y() {
    u = O.Pop;
    let L = p(),
      T = L == null ? null : L - w;
    (w = L), c && c({ action: u, location: S.location, delta: T });
  }
  function m(L, T) {
    u = O.Push;
    let N = Oe(S.location, L, T);
    w = p() + 1;
    let Y = bt(N, w),
      le = S.createHref(N);
    try {
      l.pushState(Y, "", le);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError") throw te;
      o.location.assign(le);
    }
    f && c && c({ action: u, location: S.location, delta: 1 });
  }
  function C(L, T) {
    u = O.Replace;
    let N = Oe(S.location, L, T);
    w = p();
    let Y = bt(N, w),
      le = S.createHref(N);
    l.replaceState(Y, "", le),
      f && c && c({ action: u, location: S.location, delta: 0 });
  }
  function M(L) {
    let T = o.location.origin !== "null" ? o.location.origin : o.location.href,
      N = typeof L == "string" ? L : Be(L);
    return (
      (N = N.replace(/ $/, "%20")),
      F(
        T,
        "No window.location.(origin|href) available to create URL for href: " +
          N,
      ),
      new URL(N, T)
    );
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(L) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(wt, y),
        (c = L),
        () => {
          o.removeEventListener(wt, y), (c = null);
        }
      );
    },
    createHref(L) {
      return t(o, L);
    },
    createURL: M,
    encodeLocation(L) {
      let T = M(L);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: m,
    replace: C,
    go(L) {
      return l.go(L);
    },
  };
  return S;
}
var j;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(j || (j = {}));
const sr = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ur(e) {
  return e.index === !0;
}
function rt(e, t, a, r) {
  return (
    a === void 0 && (a = []),
    r === void 0 && (r = {}),
    e.map((o, f) => {
      let l = [...a, f],
        u = typeof o.id == "string" ? o.id : l.join("-");
      if (
        (F(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        F(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        ur(o))
      ) {
        let c = I({}, o, t(o), { id: u });
        return (r[u] = c), c;
      } else {
        let c = I({}, o, t(o), { id: u, children: void 0 });
        return (
          (r[u] = c), o.children && (c.children = rt(o.children, t, l, r)), c
        );
      }
    })
  );
}
function Ae(e, t, a) {
  a === void 0 && (a = "/");
  let r = typeof t == "string" ? ye(t) : t,
    o = Ge(r.pathname || "/", a);
  if (o == null) return null;
  let f = It(e);
  cr(f);
  let l = null;
  for (let u = 0; l == null && u < f.length; ++u) {
    let c = Er(o);
    l = Rr(f[u], c);
  }
  return l;
}
function fr(e, t) {
  let { route: a, pathname: r, params: o } = e;
  return { id: a.id, pathname: r, params: o, data: t[a.id], handle: a.handle };
}
function It(e, t, a, r) {
  t === void 0 && (t = []), a === void 0 && (a = []), r === void 0 && (r = "");
  let o = (f, l, u) => {
    let c = {
      relativePath: u === void 0 ? f.path || "" : u,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: l,
      route: f,
    };
    c.relativePath.startsWith("/") &&
      (F(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let w = ze([r, c.relativePath]),
      p = a.concat(c);
    f.children &&
      f.children.length > 0 &&
      (F(
        f.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + w + '".'),
      ),
      It(f.children, t, p, w)),
      !(f.path == null && !f.index) &&
        t.push({ path: w, score: wr(w, f.index), routesMeta: p });
  };
  return (
    e.forEach((f, l) => {
      var u;
      if (f.path === "" || !((u = f.path) != null && u.includes("?"))) o(f, l);
      else for (let c of At(f.path)) o(f, l, c);
    }),
    t
  );
}
function At(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...r] = t,
    o = a.endsWith("?"),
    f = a.replace(/\?$/, "");
  if (r.length === 0) return o ? [f, ""] : [f];
  let l = At(r.join("/")),
    u = [];
  return (
    u.push(...l.map((c) => (c === "" ? f : [f, c].join("/")))),
    o && u.push(...l),
    u.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function cr(e) {
  e.sort((t, a) =>
    t.score !== a.score
      ? a.score - t.score
      : br(
          t.routesMeta.map((r) => r.childrenIndex),
          a.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const hr = /^:[\w-]+$/,
  pr = 3,
  mr = 2,
  gr = 1,
  yr = 10,
  vr = -2,
  Rt = (e) => e === "*";
function wr(e, t) {
  let a = e.split("/"),
    r = a.length;
  return (
    a.some(Rt) && (r += vr),
    t && (r += mr),
    a
      .filter((o) => !Rt(o))
      .reduce((o, f) => o + (hr.test(f) ? pr : f === "" ? gr : yr), r)
  );
}
function br(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Rr(e, t) {
  let { routesMeta: a } = e,
    r = {},
    o = "/",
    f = [];
  for (let l = 0; l < a.length; ++l) {
    let u = a[l],
      c = l === a.length - 1,
      w = o === "/" ? t : t.slice(o.length) || "/",
      p = Sr(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        w,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let y = u.route;
    f.push({
      params: r,
      pathname: ze([o, p.pathname]),
      pathnameBase: Tr(ze([o, p.pathnameBase])),
      route: y,
    }),
      p.pathnameBase !== "/" && (o = ze([o, p.pathnameBase]));
  }
  return f;
}
function Sr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, r] = Dr(e.path, e.caseSensitive, e.end),
    o = t.match(a);
  if (!o) return null;
  let f = o[0],
    l = f.replace(/(.)\/+$/, "$1"),
    u = o.slice(1);
  return {
    params: r.reduce((w, p, y) => {
      let { paramName: m, isOptional: C } = p;
      if (m === "*") {
        let S = u[y] || "";
        l = f.slice(0, f.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const M = u[y];
      return (
        C && !M ? (w[m] = void 0) : (w[m] = (M || "").replace(/%2F/g, "/")), w
      );
    }, {}),
    pathname: f,
    pathnameBase: l,
    pattern: e,
  };
}
function Dr(e, t, a) {
  t === void 0 && (t = !1),
    a === void 0 && (a = !0),
    xe(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, u, c) => (
            r.push({ paramName: u, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Er(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      xe(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Ge(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(a);
  return r && r !== "/" ? null : e.slice(a) || "/";
}
function xr(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: a,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? ye(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : Mr(a, t)) : t,
    search: Fr(r),
    hash: Cr(o),
  };
}
function Mr(e, t) {
  let a = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Ze(e, t, a, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + a + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zt(e) {
  return e.filter(
    (t, a) => a === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Pr(e, t) {
  let a = zt(e);
  return t
    ? a.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : a.map((r) => r.pathnameBase);
}
function Lr(e, t, a, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ye(e))
    : ((o = I({}, e)),
      F(
        !o.pathname || !o.pathname.includes("?"),
        Ze("?", "pathname", "search", o),
      ),
      F(
        !o.pathname || !o.pathname.includes("#"),
        Ze("#", "pathname", "hash", o),
      ),
      F(!o.search || !o.search.includes("#"), Ze("#", "search", "hash", o)));
  let f = e === "" || o.pathname === "",
    l = f ? "/" : o.pathname,
    u;
  if (l == null) u = a;
  else {
    let y = t.length - 1;
    if (!r && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (y -= 1);
      o.pathname = m.join("/");
    }
    u = y >= 0 ? t[y] : "/";
  }
  let c = xr(o, u),
    w = l && l !== "/" && l.endsWith("/"),
    p = (f || l === ".") && a.endsWith("/");
  return !c.pathname.endsWith("/") && (w || p) && (c.pathname += "/"), c;
}
const ze = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Tr = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Fr = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Cr = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Nt {
  constructor(t, a, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = a || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ot(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bt = ["post", "put", "patch", "delete"],
  _r = new Set(Bt),
  Ur = ["get", ...Bt],
  jr = new Set(Ur),
  Ir = new Set([301, 302, 303, 307, 308]),
  Ar = new Set([307, 308]),
  et = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zr = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  je = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  it = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nr = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ht = "remix-router-transitions";
function aa(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    a =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !a;
  F(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let n = e.detectErrorBoundary;
    o = (i) => ({ hasErrorBoundary: n(i) });
  } else o = Nr;
  let f = {},
    l = rt(e.routes, o, void 0, f),
    u,
    c = e.basename || "/",
    w = e.unstable_dataStrategy || Wr,
    p = I(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    y = null,
    m = new Set(),
    C = null,
    M = null,
    S = null,
    L = e.hydrationData != null,
    T = Ae(l, e.history.location, c),
    N = null;
  if (T == null) {
    let n = Q(404, { pathname: e.history.location.pathname }),
      { matches: i, route: d } = Ct(l);
    (T = i), (N = { [d.id]: n });
  }
  let Y,
    le = T.some((n) => n.route.lazy),
    te = T.some((n) => n.route.loader);
  if (le) Y = !1;
  else if (!te) Y = !0;
  else if (p.v7_partialHydration) {
    let n = e.hydrationData ? e.hydrationData.loaderData : null,
      i = e.hydrationData ? e.hydrationData.errors : null,
      d = (h) =>
        h.route.loader
          ? typeof h.route.loader == "function" && h.route.loader.hydrate === !0
            ? !1
            : (n && n[h.route.id] !== void 0) || (i && i[h.route.id] !== void 0)
          : !0;
    if (i) {
      let h = T.findIndex((g) => i[g.route.id] !== void 0);
      Y = T.slice(0, h + 1).every(d);
    } else Y = T.every(d);
  } else Y = e.hydrationData != null;
  let ve,
    s = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: Y,
      navigation: et,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || N,
      fetchers: new Map(),
      blockers: new Map(),
    },
    K = O.Pop,
    A = !1,
    _,
    V = !1,
    J = new Map(),
    ae = null,
    X = !1,
    ne = !1,
    He = [],
    We = [],
    z = new Map(),
    $e = 0,
    Me = -1,
    we = new Map(),
    oe = new Set(),
    be = new Map(),
    Pe = new Map(),
    ie = new Set(),
    ce = new Map(),
    he = new Map(),
    Xe = !1;
  function Vt() {
    if (
      ((y = e.history.listen((n) => {
        let { action: i, location: d, delta: h } = n;
        if (Xe) {
          Xe = !1;
          return;
        }
        xe(
          he.size === 0 || h != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let g = mt({
          currentLocation: s.location,
          nextLocation: d,
          historyAction: i,
        });
        if (g && h != null) {
          (Xe = !0),
            e.history.go(h * -1),
            Ke(g, {
              state: "blocked",
              location: d,
              proceed() {
                Ke(g, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d,
                }),
                  e.history.go(h);
              },
              reset() {
                let E = new Map(s.blockers);
                E.set(g, je), G({ blockers: E });
              },
            });
          return;
        }
        return pe(i, d);
      })),
      a)
    ) {
      ea(t, J);
      let n = () => ta(t, J);
      t.addEventListener("pagehide", n),
        (ae = () => t.removeEventListener("pagehide", n));
    }
    return s.initialized || pe(O.Pop, s.location, { initialHydration: !0 }), ve;
  }
  function Yt() {
    y && y(),
      ae && ae(),
      m.clear(),
      _ && _.abort(),
      s.fetchers.forEach((n, i) => ke(i)),
      s.blockers.forEach((n, i) => pt(i));
  }
  function Jt(n) {
    return m.add(n), () => m.delete(n);
  }
  function G(n, i) {
    i === void 0 && (i = {}), (s = I({}, s, n));
    let d = [],
      h = [];
    p.v7_fetcherPersist &&
      s.fetchers.forEach((g, E) => {
        g.state === "idle" && (ie.has(E) ? h.push(E) : d.push(E));
      }),
      [...m].forEach((g) =>
        g(s, {
          deletedFetchers: h,
          unstable_viewTransitionOpts: i.viewTransitionOpts,
          unstable_flushSync: i.flushSync === !0,
        }),
      ),
      p.v7_fetcherPersist &&
        (d.forEach((g) => s.fetchers.delete(g)), h.forEach((g) => ke(g)));
  }
  function Le(n, i, d) {
    var h, g;
    let { flushSync: E } = d === void 0 ? {} : d,
      b =
        s.actionData != null &&
        s.navigation.formMethod != null &&
        ee(s.navigation.formMethod) &&
        s.navigation.state === "loading" &&
        ((h = n.state) == null ? void 0 : h._isRedirect) !== !0,
      v;
    i.actionData
      ? Object.keys(i.actionData).length > 0
        ? (v = i.actionData)
        : (v = null)
      : b
        ? (v = s.actionData)
        : (v = null);
    let x = i.loaderData
        ? Tt(s.loaderData, i.loaderData, i.matches || [], i.errors)
        : s.loaderData,
      D = s.blockers;
    D.size > 0 && ((D = new Map(D)), D.forEach((R, U) => D.set(U, je)));
    let H =
      A === !0 ||
      (s.navigation.formMethod != null &&
        ee(s.navigation.formMethod) &&
        ((g = n.state) == null ? void 0 : g._isRedirect) !== !0);
    u && ((l = u), (u = void 0)),
      X ||
        K === O.Pop ||
        (K === O.Push
          ? e.history.push(n, n.state)
          : K === O.Replace && e.history.replace(n, n.state));
    let W;
    if (K === O.Pop) {
      let R = J.get(s.location.pathname);
      R && R.has(n.pathname)
        ? (W = { currentLocation: s.location, nextLocation: n })
        : J.has(n.pathname) &&
          (W = { currentLocation: n, nextLocation: s.location });
    } else if (V) {
      let R = J.get(s.location.pathname);
      R
        ? R.add(n.pathname)
        : ((R = new Set([n.pathname])), J.set(s.location.pathname, R)),
        (W = { currentLocation: s.location, nextLocation: n });
    }
    G(
      I({}, i, {
        actionData: v,
        loaderData: x,
        historyAction: K,
        location: n,
        initialized: !0,
        navigation: et,
        revalidation: "idle",
        restoreScrollPosition: yt(n, i.matches || s.matches),
        preventScrollReset: H,
        blockers: D,
      }),
      { viewTransitionOpts: W, flushSync: E === !0 },
    ),
      (K = O.Pop),
      (A = !1),
      (V = !1),
      (X = !1),
      (ne = !1),
      (He = []),
      (We = []);
  }
  async function dt(n, i) {
    if (typeof n == "number") {
      e.history.go(n);
      return;
    }
    let d = at(
        s.location,
        s.matches,
        c,
        p.v7_prependBasename,
        n,
        p.v7_relativeSplatPath,
        i == null ? void 0 : i.fromRouteId,
        i == null ? void 0 : i.relative,
      ),
      {
        path: h,
        submission: g,
        error: E,
      } = St(p.v7_normalizeFormMethod, !1, d, i),
      b = s.location,
      v = Oe(s.location, h, i && i.state);
    v = I({}, v, e.history.encodeLocation(v));
    let x = i && i.replace != null ? i.replace : void 0,
      D = O.Push;
    x === !0
      ? (D = O.Replace)
      : x === !1 ||
        (g != null &&
          ee(g.formMethod) &&
          g.formAction === s.location.pathname + s.location.search &&
          (D = O.Replace));
    let H =
        i && "preventScrollReset" in i ? i.preventScrollReset === !0 : void 0,
      W = (i && i.unstable_flushSync) === !0,
      R = mt({ currentLocation: b, nextLocation: v, historyAction: D });
    if (R) {
      Ke(R, {
        state: "blocked",
        location: v,
        proceed() {
          Ke(R, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: v,
          }),
            dt(n, i);
        },
        reset() {
          let U = new Map(s.blockers);
          U.set(R, je), G({ blockers: U });
        },
      });
      return;
    }
    return await pe(D, v, {
      submission: g,
      pendingError: E,
      preventScrollReset: H,
      replace: i && i.replace,
      enableViewTransition: i && i.unstable_viewTransition,
      flushSync: W,
    });
  }
  function Gt() {
    if (
      (qe(),
      G({ revalidation: "loading" }),
      s.navigation.state !== "submitting")
    ) {
      if (s.navigation.state === "idle") {
        pe(s.historyAction, s.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      pe(K || s.historyAction, s.navigation.location, {
        overrideNavigation: s.navigation,
      });
    }
  }
  async function pe(n, i, d) {
    _ && _.abort(),
      (_ = null),
      (K = n),
      (X = (d && d.startUninterruptedRevalidation) === !0),
      nr(s.location, s.matches),
      (A = (d && d.preventScrollReset) === !0),
      (V = (d && d.enableViewTransition) === !0);
    let h = u || l,
      g = d && d.overrideNavigation,
      E = Ae(h, i, c),
      b = (d && d.flushSync) === !0;
    if (!E) {
      let R = Q(404, { pathname: i.pathname }),
        { matches: U, route: B } = Ct(h);
      Qe(),
        Le(
          i,
          { matches: U, loaderData: {}, errors: { [B.id]: R } },
          { flushSync: b },
        );
      return;
    }
    if (
      s.initialized &&
      !ne &&
      Jr(s.location, i) &&
      !(d && d.submission && ee(d.submission.formMethod))
    ) {
      Le(i, { matches: E }, { flushSync: b });
      return;
    }
    _ = new AbortController();
    let v = Ee(e.history, i, _.signal, d && d.submission),
      x;
    if (d && d.pendingError)
      x = [Ne(E).route.id, { type: j.error, error: d.pendingError }];
    else if (d && d.submission && ee(d.submission.formMethod)) {
      let R = await Xt(v, i, d.submission, E, {
        replace: d.replace,
        flushSync: b,
      });
      if (R.shortCircuited) return;
      (x = R.pendingActionResult),
        (g = tt(i, d.submission)),
        (b = !1),
        (v = Ee(e.history, v.url, v.signal));
    }
    let {
      shortCircuited: D,
      loaderData: H,
      errors: W,
    } = await qt(
      v,
      i,
      E,
      g,
      d && d.submission,
      d && d.fetcherSubmission,
      d && d.replace,
      d && d.initialHydration === !0,
      b,
      x,
    );
    D ||
      ((_ = null),
      Le(i, I({ matches: E }, Ft(x), { loaderData: H, errors: W })));
  }
  async function Xt(n, i, d, h, g) {
    g === void 0 && (g = {}), qe();
    let E = Qr(i, d);
    G({ navigation: E }, { flushSync: g.flushSync === !0 });
    let b,
      v = ot(h, i);
    if (!v.route.action && !v.route.lazy)
      b = {
        type: j.error,
        error: Q(405, {
          method: n.method,
          pathname: i.pathname,
          routeId: v.route.id,
        }),
      };
    else if (((b = (await Fe("action", n, [v], h))[0]), n.signal.aborted))
      return { shortCircuited: !0 };
    if (ge(b)) {
      let x;
      return (
        g && g.replace != null
          ? (x = g.replace)
          : (x =
              Mt(b.response.headers.get("Location"), new URL(n.url), c) ===
              s.location.pathname + s.location.search),
        await Te(n, b, { submission: d, replace: x }),
        { shortCircuited: !0 }
      );
    }
    if (me(b)) throw Q(400, { type: "defer-action" });
    if (Z(b)) {
      let x = Ne(h, v.route.id);
      return (
        (g && g.replace) !== !0 && (K = O.Push),
        { pendingActionResult: [x.route.id, b] }
      );
    }
    return { pendingActionResult: [v.route.id, b] };
  }
  async function qt(n, i, d, h, g, E, b, v, x, D) {
    let H = h || tt(i, g),
      W = g || E || jt(H),
      R = u || l,
      [U, B] = Dt(
        e.history,
        s,
        d,
        W,
        i,
        p.v7_partialHydration && v === !0,
        p.unstable_skipActionErrorRevalidation,
        ne,
        He,
        We,
        ie,
        be,
        oe,
        R,
        c,
        D,
      );
    if (
      (Qe(
        (P) =>
          !(d && d.some((k) => k.route.id === P)) ||
          (U && U.some((k) => k.route.id === P)),
      ),
      (Me = ++$e),
      U.length === 0 && B.length === 0)
    ) {
      let P = ct();
      return (
        Le(
          i,
          I(
            {
              matches: d,
              loaderData: {},
              errors: D && Z(D[1]) ? { [D[0]]: D[1].error } : null,
            },
            Ft(D),
            P ? { fetchers: new Map(s.fetchers) } : {},
          ),
          { flushSync: x },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!X && (!p.v7_partialHydration || !v)) {
      B.forEach((k) => {
        let q = s.fetchers.get(k.key),
          $ = Ie(void 0, q ? q.data : void 0);
        s.fetchers.set(k.key, $);
      });
      let P;
      D && !Z(D[1])
        ? (P = { [D[0]]: D[1].data })
        : s.actionData &&
          (Object.keys(s.actionData).length === 0
            ? (P = null)
            : (P = s.actionData)),
        G(
          I(
            { navigation: H },
            P !== void 0 ? { actionData: P } : {},
            B.length > 0 ? { fetchers: new Map(s.fetchers) } : {},
          ),
          { flushSync: x },
        );
    }
    B.forEach((P) => {
      z.has(P.key) && se(P.key), P.controller && z.set(P.key, P.controller);
    });
    let _e = () => B.forEach((P) => se(P.key));
    _ && _.signal.addEventListener("abort", _e);
    let { loaderResults: ue, fetcherResults: Re } = await st(
      s.matches,
      d,
      U,
      B,
      n,
    );
    if (n.signal.aborted) return { shortCircuited: !0 };
    _ && _.signal.removeEventListener("abort", _e),
      B.forEach((P) => z.delete(P.key));
    let Se = _t([...ue, ...Re]);
    if (Se) {
      if (Se.idx >= U.length) {
        let P = B[Se.idx - U.length].key;
        oe.add(P);
      }
      return await Te(n, Se.result, { replace: b }), { shortCircuited: !0 };
    }
    let { loaderData: De, errors: re } = Lt(s, d, U, ue, D, B, Re, ce);
    ce.forEach((P, k) => {
      P.subscribe((q) => {
        (q || P.done) && ce.delete(k);
      });
    }),
      p.v7_partialHydration &&
        v &&
        s.errors &&
        Object.entries(s.errors)
          .filter((P) => {
            let [k] = P;
            return !U.some((q) => q.route.id === k);
          })
          .forEach((P) => {
            let [k, q] = P;
            re = Object.assign(re || {}, { [k]: q });
          });
    let Ve = ct(),
      Ye = ht(Me),
      Je = Ve || Ye || B.length > 0;
    return I(
      { loaderData: De, errors: re },
      Je ? { fetchers: new Map(s.fetchers) } : {},
    );
  }
  function Qt(n, i, d, h) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    z.has(n) && se(n);
    let g = (h && h.unstable_flushSync) === !0,
      E = u || l,
      b = at(
        s.location,
        s.matches,
        c,
        p.v7_prependBasename,
        d,
        p.v7_relativeSplatPath,
        i,
        h == null ? void 0 : h.relative,
      ),
      v = Ae(E, b, c);
    if (!v) {
      Ce(n, i, Q(404, { pathname: b }), { flushSync: g });
      return;
    }
    let {
      path: x,
      submission: D,
      error: H,
    } = St(p.v7_normalizeFormMethod, !0, b, h);
    if (H) {
      Ce(n, i, H, { flushSync: g });
      return;
    }
    let W = ot(v, x);
    if (((A = (h && h.preventScrollReset) === !0), D && ee(D.formMethod))) {
      Zt(n, i, x, W, v, g, D);
      return;
    }
    be.set(n, { routeId: i, path: x }), er(n, i, x, W, v, g, D);
  }
  async function Zt(n, i, d, h, g, E, b) {
    if ((qe(), be.delete(n), !h.route.action && !h.route.lazy)) {
      let $ = Q(405, { method: b.formMethod, pathname: d, routeId: i });
      Ce(n, i, $, { flushSync: E });
      return;
    }
    let v = s.fetchers.get(n);
    de(n, Zr(b, v), { flushSync: E });
    let x = new AbortController(),
      D = Ee(e.history, d, x.signal, b);
    z.set(n, x);
    let H = $e,
      R = (await Fe("action", D, [h], g))[0];
    if (D.signal.aborted) {
      z.get(n) === x && z.delete(n);
      return;
    }
    if (p.v7_fetcherPersist && ie.has(n)) {
      if (ge(R) || Z(R)) {
        de(n, fe(void 0));
        return;
      }
    } else {
      if (ge(R))
        if ((z.delete(n), Me > H)) {
          de(n, fe(void 0));
          return;
        } else
          return oe.add(n), de(n, Ie(b)), Te(D, R, { fetcherSubmission: b });
      if (Z(R)) {
        Ce(n, i, R.error);
        return;
      }
    }
    if (me(R)) throw Q(400, { type: "defer-action" });
    let U = s.navigation.location || s.location,
      B = Ee(e.history, U, x.signal),
      _e = u || l,
      ue =
        s.navigation.state !== "idle"
          ? Ae(_e, s.navigation.location, c)
          : s.matches;
    F(ue, "Didn't find any matches after fetcher action");
    let Re = ++$e;
    we.set(n, Re);
    let Se = Ie(b, R.data);
    s.fetchers.set(n, Se);
    let [De, re] = Dt(
      e.history,
      s,
      ue,
      b,
      U,
      !1,
      p.unstable_skipActionErrorRevalidation,
      ne,
      He,
      We,
      ie,
      be,
      oe,
      _e,
      c,
      [h.route.id, R],
    );
    re
      .filter(($) => $.key !== n)
      .forEach(($) => {
        let Ue = $.key,
          vt = s.fetchers.get(Ue),
          ir = Ie(void 0, vt ? vt.data : void 0);
        s.fetchers.set(Ue, ir),
          z.has(Ue) && se(Ue),
          $.controller && z.set(Ue, $.controller);
      }),
      G({ fetchers: new Map(s.fetchers) });
    let Ve = () => re.forEach(($) => se($.key));
    x.signal.addEventListener("abort", Ve);
    let { loaderResults: Ye, fetcherResults: Je } = await st(
      s.matches,
      ue,
      De,
      re,
      B,
    );
    if (x.signal.aborted) return;
    x.signal.removeEventListener("abort", Ve),
      we.delete(n),
      z.delete(n),
      re.forEach(($) => z.delete($.key));
    let P = _t([...Ye, ...Je]);
    if (P) {
      if (P.idx >= De.length) {
        let $ = re[P.idx - De.length].key;
        oe.add($);
      }
      return Te(B, P.result);
    }
    let { loaderData: k, errors: q } = Lt(
      s,
      s.matches,
      De,
      Ye,
      void 0,
      re,
      Je,
      ce,
    );
    if (s.fetchers.has(n)) {
      let $ = fe(R.data);
      s.fetchers.set(n, $);
    }
    ht(Re),
      s.navigation.state === "loading" && Re > Me
        ? (F(K, "Expected pending action"),
          _ && _.abort(),
          Le(s.navigation.location, {
            matches: ue,
            loaderData: k,
            errors: q,
            fetchers: new Map(s.fetchers),
          }))
        : (G({
            errors: q,
            loaderData: Tt(s.loaderData, k, ue, q),
            fetchers: new Map(s.fetchers),
          }),
          (ne = !1));
  }
  async function er(n, i, d, h, g, E, b) {
    let v = s.fetchers.get(n);
    de(n, Ie(b, v ? v.data : void 0), { flushSync: E });
    let x = new AbortController(),
      D = Ee(e.history, d, x.signal);
    z.set(n, x);
    let H = $e,
      R = (await Fe("loader", D, [h], g))[0];
    if (
      (me(R) && (R = (await Kt(R, D.signal, !0)) || R),
      z.get(n) === x && z.delete(n),
      !D.signal.aborted)
    ) {
      if (ie.has(n)) {
        de(n, fe(void 0));
        return;
      }
      if (ge(R))
        if (Me > H) {
          de(n, fe(void 0));
          return;
        } else {
          oe.add(n), await Te(D, R);
          return;
        }
      if (Z(R)) {
        Ce(n, i, R.error);
        return;
      }
      F(!me(R), "Unhandled fetcher deferred data"), de(n, fe(R.data));
    }
  }
  async function Te(n, i, d) {
    let {
      submission: h,
      fetcherSubmission: g,
      replace: E,
    } = d === void 0 ? {} : d;
    i.response.headers.has("X-Remix-Revalidate") && (ne = !0);
    let b = i.response.headers.get("Location");
    F(b, "Expected a Location header on the redirect Response"),
      (b = Mt(b, new URL(n.url), c));
    let v = Oe(s.location, b, { _isRedirect: !0 });
    if (a) {
      let U = !1;
      if (i.response.headers.has("X-Remix-Reload-Document")) U = !0;
      else if (it.test(b)) {
        const B = e.history.createURL(b);
        U = B.origin !== t.location.origin || Ge(B.pathname, c) == null;
      }
      if (U) {
        E ? t.location.replace(b) : t.location.assign(b);
        return;
      }
    }
    _ = null;
    let x = E === !0 ? O.Replace : O.Push,
      { formMethod: D, formAction: H, formEncType: W } = s.navigation;
    !h && !g && D && H && W && (h = jt(s.navigation));
    let R = h || g;
    if (Ar.has(i.response.status) && R && ee(R.formMethod))
      await pe(x, v, {
        submission: I({}, R, { formAction: b }),
        preventScrollReset: A,
      });
    else {
      let U = tt(v, h);
      await pe(x, v, {
        overrideNavigation: U,
        fetcherSubmission: g,
        preventScrollReset: A,
      });
    }
  }
  async function Fe(n, i, d, h) {
    try {
      let g = await $r(w, n, i, d, h, f, o);
      return await Promise.all(
        g.map((E, b) => {
          if (Gr(E)) {
            let v = E.result;
            return {
              type: j.redirect,
              response: Vr(v, i, d[b].route.id, h, c, p.v7_relativeSplatPath),
            };
          }
          return Kr(E);
        }),
      );
    } catch (g) {
      return d.map(() => ({ type: j.error, error: g }));
    }
  }
  async function st(n, i, d, h, g) {
    let [E, ...b] = await Promise.all([
      d.length ? Fe("loader", g, d, i) : [],
      ...h.map((v) => {
        if (v.matches && v.match && v.controller) {
          let x = Ee(e.history, v.path, v.controller.signal);
          return Fe("loader", x, [v.match], v.matches).then((D) => D[0]);
        } else
          return Promise.resolve({
            type: j.error,
            error: Q(404, { pathname: v.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Ut(
          n,
          d,
          E,
          E.map(() => g.signal),
          !1,
          s.loaderData,
        ),
        Ut(
          n,
          h.map((v) => v.match),
          b,
          h.map((v) => (v.controller ? v.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: E, fetcherResults: b }
    );
  }
  function qe() {
    (ne = !0),
      He.push(...Qe()),
      be.forEach((n, i) => {
        z.has(i) && (We.push(i), se(i));
      });
  }
  function de(n, i, d) {
    d === void 0 && (d = {}),
      s.fetchers.set(n, i),
      G(
        { fetchers: new Map(s.fetchers) },
        { flushSync: (d && d.flushSync) === !0 },
      );
  }
  function Ce(n, i, d, h) {
    h === void 0 && (h = {});
    let g = Ne(s.matches, i);
    ke(n),
      G(
        { errors: { [g.route.id]: d }, fetchers: new Map(s.fetchers) },
        { flushSync: (h && h.flushSync) === !0 },
      );
  }
  function ut(n) {
    return (
      p.v7_fetcherPersist &&
        (Pe.set(n, (Pe.get(n) || 0) + 1), ie.has(n) && ie.delete(n)),
      s.fetchers.get(n) || zr
    );
  }
  function ke(n) {
    let i = s.fetchers.get(n);
    z.has(n) && !(i && i.state === "loading" && we.has(n)) && se(n),
      be.delete(n),
      we.delete(n),
      oe.delete(n),
      ie.delete(n),
      s.fetchers.delete(n);
  }
  function tr(n) {
    if (p.v7_fetcherPersist) {
      let i = (Pe.get(n) || 0) - 1;
      i <= 0 ? (Pe.delete(n), ie.add(n)) : Pe.set(n, i);
    } else ke(n);
    G({ fetchers: new Map(s.fetchers) });
  }
  function se(n) {
    let i = z.get(n);
    F(i, "Expected fetch controller: " + n), i.abort(), z.delete(n);
  }
  function ft(n) {
    for (let i of n) {
      let d = ut(i),
        h = fe(d.data);
      s.fetchers.set(i, h);
    }
  }
  function ct() {
    let n = [],
      i = !1;
    for (let d of oe) {
      let h = s.fetchers.get(d);
      F(h, "Expected fetcher: " + d),
        h.state === "loading" && (oe.delete(d), n.push(d), (i = !0));
    }
    return ft(n), i;
  }
  function ht(n) {
    let i = [];
    for (let [d, h] of we)
      if (h < n) {
        let g = s.fetchers.get(d);
        F(g, "Expected fetcher: " + d),
          g.state === "loading" && (se(d), we.delete(d), i.push(d));
      }
    return ft(i), i.length > 0;
  }
  function rr(n, i) {
    let d = s.blockers.get(n) || je;
    return he.get(n) !== i && he.set(n, i), d;
  }
  function pt(n) {
    s.blockers.delete(n), he.delete(n);
  }
  function Ke(n, i) {
    let d = s.blockers.get(n) || je;
    F(
      (d.state === "unblocked" && i.state === "blocked") ||
        (d.state === "blocked" && i.state === "blocked") ||
        (d.state === "blocked" && i.state === "proceeding") ||
        (d.state === "blocked" && i.state === "unblocked") ||
        (d.state === "proceeding" && i.state === "unblocked"),
      "Invalid blocker state transition: " + d.state + " -> " + i.state,
    );
    let h = new Map(s.blockers);
    h.set(n, i), G({ blockers: h });
  }
  function mt(n) {
    let { currentLocation: i, nextLocation: d, historyAction: h } = n;
    if (he.size === 0) return;
    he.size > 1 && xe(!1, "A router only supports one blocker at a time");
    let g = Array.from(he.entries()),
      [E, b] = g[g.length - 1],
      v = s.blockers.get(E);
    if (
      !(v && v.state === "proceeding") &&
      b({ currentLocation: i, nextLocation: d, historyAction: h })
    )
      return E;
  }
  function Qe(n) {
    let i = [];
    return (
      ce.forEach((d, h) => {
        (!n || n(h)) && (d.cancel(), i.push(h), ce.delete(h));
      }),
      i
    );
  }
  function ar(n, i, d) {
    if (((C = n), (S = i), (M = d || null), !L && s.navigation === et)) {
      L = !0;
      let h = yt(s.location, s.matches);
      h != null && G({ restoreScrollPosition: h });
    }
    return () => {
      (C = null), (S = null), (M = null);
    };
  }
  function gt(n, i) {
    return (
      (M &&
        M(
          n,
          i.map((h) => fr(h, s.loaderData)),
        )) ||
      n.key
    );
  }
  function nr(n, i) {
    if (C && S) {
      let d = gt(n, i);
      C[d] = S();
    }
  }
  function yt(n, i) {
    if (C) {
      let d = gt(n, i),
        h = C[d];
      if (typeof h == "number") return h;
    }
    return null;
  }
  function or(n) {
    (f = {}), (u = rt(n, o, void 0, f));
  }
  return (
    (ve = {
      get basename() {
        return c;
      },
      get future() {
        return p;
      },
      get state() {
        return s;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: Vt,
      subscribe: Jt,
      enableScrollRestoration: ar,
      navigate: dt,
      fetch: Qt,
      revalidate: Gt,
      createHref: (n) => e.history.createHref(n),
      encodeLocation: (n) => e.history.encodeLocation(n),
      getFetcher: ut,
      deleteFetcher: tr,
      dispose: Yt,
      getBlocker: rr,
      deleteBlocker: pt,
      _internalFetchControllers: z,
      _internalActiveDeferreds: ce,
      _internalSetRoutes: or,
    }),
    ve
  );
}
function Or(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function at(e, t, a, r, o, f, l, u) {
  let c, w;
  if (l) {
    c = [];
    for (let y of t)
      if ((c.push(y), y.route.id === l)) {
        w = y;
        break;
      }
  } else (c = t), (w = t[t.length - 1]);
  let p = Lr(o || ".", Pr(c, f), Ge(e.pathname, a) || e.pathname, u === "path");
  return (
    o == null && ((p.search = e.search), (p.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      w &&
      w.route.index &&
      !lt(p.search) &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      a !== "/" &&
      (p.pathname = p.pathname === "/" ? a : ze([a, p.pathname])),
    Be(p)
  );
}
function St(e, t, a, r) {
  if (!r || !Or(r)) return { path: a };
  if (r.formMethod && !qr(r.formMethod))
    return { path: a, error: Q(405, { method: r.formMethod }) };
  let o = () => ({ path: a, error: Q(400, { type: "invalid-body" }) }),
    f = r.formMethod || "get",
    l = e ? f.toUpperCase() : f.toLowerCase(),
    u = $t(a);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ee(l)) return o();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((C, M) => {
                let [S, L] = M;
                return (
                  "" +
                  C +
                  S +
                  "=" +
                  L +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: a,
        submission: {
          formMethod: l,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ee(l)) return o();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: a,
          submission: {
            formMethod: l,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  F(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let c, w;
  if (r.formData) (c = nt(r.formData)), (w = r.formData);
  else if (r.body instanceof FormData) (c = nt(r.body)), (w = r.body);
  else if (r.body instanceof URLSearchParams) (c = r.body), (w = Pt(c));
  else if (r.body == null) (c = new URLSearchParams()), (w = new FormData());
  else
    try {
      (c = new URLSearchParams(r.body)), (w = Pt(c));
    } catch {
      return o();
    }
  let p = {
    formMethod: l,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: w,
    json: void 0,
    text: void 0,
  };
  if (ee(p.formMethod)) return { path: a, submission: p };
  let y = ye(a);
  return (
    t && y.search && lt(y.search) && c.append("index", ""),
    (y.search = "?" + c),
    { path: Be(y), submission: p }
  );
}
function Br(e, t) {
  let a = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (a = e.slice(0, r));
  }
  return a;
}
function Dt(e, t, a, r, o, f, l, u, c, w, p, y, m, C, M, S) {
  let L = S ? (Z(S[1]) ? S[1].error : S[1].data) : void 0,
    T = e.createURL(t.location),
    N = e.createURL(o),
    Y = S && Z(S[1]) ? S[0] : void 0,
    le = Y ? Br(a, Y) : a,
    te = S ? S[1].statusCode : void 0,
    ve = l && te && te >= 400,
    s = le.filter((A, _) => {
      let { route: V } = A;
      if (V.lazy) return !0;
      if (V.loader == null) return !1;
      if (f)
        return typeof V.loader != "function" || V.loader.hydrate
          ? !0
          : t.loaderData[V.id] === void 0 &&
              (!t.errors || t.errors[V.id] === void 0);
      if (Hr(t.loaderData, t.matches[_], A) || c.some((X) => X === A.route.id))
        return !0;
      let J = t.matches[_],
        ae = A;
      return Et(
        A,
        I(
          {
            currentUrl: T,
            currentParams: J.params,
            nextUrl: N,
            nextParams: ae.params,
          },
          r,
          {
            actionResult: L,
            unstable_actionStatus: te,
            defaultShouldRevalidate: ve
              ? !1
              : u ||
                T.pathname + T.search === N.pathname + N.search ||
                T.search !== N.search ||
                Wt(J, ae),
          },
        ),
      );
    }),
    K = [];
  return (
    y.forEach((A, _) => {
      if (f || !a.some((ne) => ne.route.id === A.routeId) || p.has(_)) return;
      let V = Ae(C, A.path, M);
      if (!V) {
        K.push({
          key: _,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let J = t.fetchers.get(_),
        ae = ot(V, A.path),
        X = !1;
      m.has(_)
        ? (X = !1)
        : w.includes(_)
          ? (X = !0)
          : J && J.state !== "idle" && J.data === void 0
            ? (X = u)
            : (X = Et(
                ae,
                I(
                  {
                    currentUrl: T,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: N,
                    nextParams: a[a.length - 1].params,
                  },
                  r,
                  {
                    actionResult: L,
                    unstable_actionStatus: te,
                    defaultShouldRevalidate: ve ? !1 : u,
                  },
                ),
              )),
        X &&
          K.push({
            key: _,
            routeId: A.routeId,
            path: A.path,
            matches: V,
            match: ae,
            controller: new AbortController(),
          });
    }),
    [s, K]
  );
}
function Hr(e, t, a) {
  let r = !t || a.route.id !== t.route.id,
    o = e[a.route.id] === void 0;
  return r || o;
}
function Wt(e, t) {
  let a = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (a != null && a.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Et(e, t) {
  if (e.route.shouldRevalidate) {
    let a = e.route.shouldRevalidate(t);
    if (typeof a == "boolean") return a;
  }
  return t.defaultShouldRevalidate;
}
async function xt(e, t, a) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = a[e.id];
  F(o, "No route found in manifest");
  let f = {};
  for (let l in r) {
    let c = o[l] !== void 0 && l !== "hasErrorBoundary";
    xe(
      !c,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.'),
    ),
      !c && !sr.has(l) && (f[l] = r[l]);
  }
  Object.assign(o, f), Object.assign(o, I({}, t(o), { lazy: void 0 }));
}
function Wr(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function $r(e, t, a, r, o, f, l, u) {
  let c = r.reduce((y, m) => y.add(m.route.id), new Set()),
    w = new Set(),
    p = await e({
      matches: o.map((y) => {
        let m = c.has(y.route.id);
        return I({}, y, {
          shouldLoad: m,
          resolve: (M) => (
            w.add(y.route.id),
            m
              ? kr(t, a, y, f, l, M, u)
              : Promise.resolve({ type: j.data, result: void 0 })
          ),
        });
      }),
      request: a,
      params: o[0].params,
      context: u,
    });
  return (
    o.forEach((y) =>
      F(
        w.has(y.route.id),
        '`match.resolve()` was not called for route id "' +
          y.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    p.filter((y, m) => c.has(o[m].route.id))
  );
}
async function kr(e, t, a, r, o, f, l) {
  let u,
    c,
    w = (p) => {
      let y,
        m = new Promise((S, L) => (y = L));
      (c = () => y()), t.signal.addEventListener("abort", c);
      let C = (S) =>
          typeof p != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + a.route.id + "]"),
                ),
              )
            : p(
                { request: t, params: a.params, context: l },
                ...(S !== void 0 ? [S] : []),
              ),
        M;
      return (
        f
          ? (M = f((S) => C(S)))
          : (M = (async () => {
              try {
                return { type: "data", result: await C() };
              } catch (S) {
                return { type: "error", result: S };
              }
            })()),
        Promise.race([M, m])
      );
    };
  try {
    let p = a.route[e];
    if (a.route.lazy)
      if (p) {
        let y,
          [m] = await Promise.all([
            w(p).catch((C) => {
              y = C;
            }),
            xt(a.route, o, r),
          ]);
        if (y !== void 0) throw y;
        u = m;
      } else if ((await xt(a.route, o, r), (p = a.route[e]), p)) u = await w(p);
      else if (e === "action") {
        let y = new URL(t.url),
          m = y.pathname + y.search;
        throw Q(405, { method: t.method, pathname: m, routeId: a.route.id });
      } else return { type: j.data, result: void 0 };
    else if (p) u = await w(p);
    else {
      let y = new URL(t.url),
        m = y.pathname + y.search;
      throw Q(404, { pathname: m });
    }
    F(
      u.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          a.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (p) {
    return { type: j.error, result: p };
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  return u;
}
async function Kr(e) {
  let { result: t, type: a, status: r } = e;
  if (kt(t)) {
    let l;
    try {
      let u = t.headers.get("Content-Type");
      u && /\bapplication\/json\b/.test(u)
        ? t.body == null
          ? (l = null)
          : (l = await t.json())
        : (l = await t.text());
    } catch (u) {
      return { type: j.error, error: u };
    }
    return a === j.error
      ? {
          type: j.error,
          error: new Nt(t.status, t.statusText, l),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: j.data, data: l, statusCode: t.status, headers: t.headers };
  }
  if (a === j.error)
    return { type: j.error, error: t, statusCode: Ot(t) ? t.status : r };
  if (Xr(t)) {
    var o, f;
    return {
      type: j.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((f = t.init) == null ? void 0 : f.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: j.data, data: t, statusCode: r };
}
function Vr(e, t, a, r, o, f) {
  let l = e.headers.get("Location");
  if (
    (F(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !it.test(l))
  ) {
    let u = r.slice(0, r.findIndex((c) => c.route.id === a) + 1);
    (l = at(new URL(t.url), u, o, !0, l, f)), e.headers.set("Location", l);
  }
  return e;
}
function Mt(e, t, a) {
  if (it.test(e)) {
    let r = e,
      o = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      f = Ge(o.pathname, a) != null;
    if (o.origin === t.origin && f) return o.pathname + o.search + o.hash;
  }
  return e;
}
function Ee(e, t, a, r) {
  let o = e.createURL($t(t)).toString(),
    f = { signal: a };
  if (r && ee(r.formMethod)) {
    let { formMethod: l, formEncType: u } = r;
    (f.method = l.toUpperCase()),
      u === "application/json"
        ? ((f.headers = new Headers({ "Content-Type": u })),
          (f.body = JSON.stringify(r.json)))
        : u === "text/plain"
          ? (f.body = r.text)
          : u === "application/x-www-form-urlencoded" && r.formData
            ? (f.body = nt(r.formData))
            : (f.body = r.formData);
  }
  return new Request(o, f);
}
function nt(e) {
  let t = new URLSearchParams();
  for (let [a, r] of e.entries())
    t.append(a, typeof r == "string" ? r : r.name);
  return t;
}
function Pt(e) {
  let t = new FormData();
  for (let [a, r] of e.entries()) t.append(a, r);
  return t;
}
function Yr(e, t, a, r, o, f) {
  let l = {},
    u = null,
    c,
    w = !1,
    p = {},
    y = r && Z(r[1]) ? r[1].error : void 0;
  return (
    a.forEach((m, C) => {
      let M = t[C].route.id;
      if (
        (F(!ge(m), "Cannot handle redirect results in processLoaderData"), Z(m))
      ) {
        let S = m.error;
        y !== void 0 && ((S = y), (y = void 0)), (u = u || {});
        {
          let L = Ne(e, M);
          u[L.route.id] == null && (u[L.route.id] = S);
        }
        (l[M] = void 0),
          w || ((w = !0), (c = Ot(m.error) ? m.error.status : 500)),
          m.headers && (p[M] = m.headers);
      } else
        me(m)
          ? (o.set(M, m.deferredData),
            (l[M] = m.deferredData.data),
            m.statusCode != null &&
              m.statusCode !== 200 &&
              !w &&
              (c = m.statusCode),
            m.headers && (p[M] = m.headers))
          : ((l[M] = m.data),
            m.statusCode && m.statusCode !== 200 && !w && (c = m.statusCode),
            m.headers && (p[M] = m.headers));
    }),
    y !== void 0 && r && ((u = { [r[0]]: y }), (l[r[0]] = void 0)),
    { loaderData: l, errors: u, statusCode: c || 200, loaderHeaders: p }
  );
}
function Lt(e, t, a, r, o, f, l, u) {
  let { loaderData: c, errors: w } = Yr(t, a, r, o, u);
  for (let p = 0; p < f.length; p++) {
    let { key: y, match: m, controller: C } = f[p];
    F(
      l !== void 0 && l[p] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let M = l[p];
    if (!(C && C.signal.aborted))
      if (Z(M)) {
        let S = Ne(e.matches, m == null ? void 0 : m.route.id);
        (w && w[S.route.id]) || (w = I({}, w, { [S.route.id]: M.error })),
          e.fetchers.delete(y);
      } else if (ge(M)) F(!1, "Unhandled fetcher revalidation redirect");
      else if (me(M)) F(!1, "Unhandled fetcher deferred data");
      else {
        let S = fe(M.data);
        e.fetchers.set(y, S);
      }
  }
  return { loaderData: c, errors: w };
}
function Tt(e, t, a, r) {
  let o = I({}, t);
  for (let f of a) {
    let l = f.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (o[l] = t[l])
        : e[l] !== void 0 && f.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Ft(e) {
  return e
    ? Z(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ne(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ct(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Q(e, t) {
  let { pathname: a, routeId: r, method: o, type: f } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        o && a && r
          ? (u =
              "You made a " +
              o +
              ' request to "' +
              a +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : f === "defer-action"
            ? (u = "defer() is not supported in actions")
            : f === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((l = "Forbidden"),
          (u = 'Route "' + r + '" does not match URL "' + a + '"'))
        : e === 404
          ? ((l = "Not Found"), (u = 'No route matches URL "' + a + '"'))
          : e === 405 &&
            ((l = "Method Not Allowed"),
            o && a && r
              ? (u =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  a +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (u = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Nt(e || 500, l, new Error(u), !0)
  );
}
function _t(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let a = e[t];
    if (ge(a)) return { result: a, idx: t };
  }
}
function $t(e) {
  let t = typeof e == "string" ? ye(e) : e;
  return Be(I({}, t, { hash: "" }));
}
function Jr(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Gr(e) {
  return kt(e.result) && Ir.has(e.result.status);
}
function me(e) {
  return e.type === j.deferred;
}
function Z(e) {
  return e.type === j.error;
}
function ge(e) {
  return (e && e.type) === j.redirect;
}
function Xr(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function kt(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function qr(e) {
  return jr.has(e.toLowerCase());
}
function ee(e) {
  return _r.has(e.toLowerCase());
}
async function Ut(e, t, a, r, o, f) {
  for (let l = 0; l < a.length; l++) {
    let u = a[l],
      c = t[l];
    if (!c) continue;
    let w = e.find((y) => y.route.id === c.route.id),
      p = w != null && !Wt(w, c) && (f && f[c.route.id]) !== void 0;
    if (me(u) && (o || p)) {
      let y = r[l];
      F(y, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Kt(u, y, o).then((m) => {
          m && (a[l] = m || a[l]);
        });
    }
  }
}
async function Kt(e, t, a) {
  if ((a === void 0 && (a = !1), !(await e.deferredData.resolveData(t)))) {
    if (a)
      try {
        return { type: j.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: j.error, error: o };
      }
    return { type: j.data, data: e.deferredData.data };
  }
}
function lt(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ot(e, t) {
  let a = typeof t == "string" ? ye(t).search : t.search;
  if (e[e.length - 1].route.index && lt(a || "")) return e[e.length - 1];
  let r = zt(e);
  return r[r.length - 1];
}
function jt(e) {
  let {
    formMethod: t,
    formAction: a,
    formEncType: r,
    text: o,
    formData: f,
    json: l,
  } = e;
  if (!(!t || !a || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (f != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: r,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: a,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function tt(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Qr(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ie(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Zr(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function fe(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function ea(e, t) {
  try {
    let a = e.sessionStorage.getItem(Ht);
    if (a) {
      let r = JSON.parse(a);
      for (let [o, f] of Object.entries(r || {}))
        f && Array.isArray(f) && t.set(o, new Set(f || []));
    }
  } catch {}
}
function ta(e, t) {
  if (t.size > 0) {
    let a = {};
    for (let [r, o] of t) a[r] = [...o];
    try {
      e.sessionStorage.setItem(Ht, JSON.stringify(a));
    } catch (r) {
      xe(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
export {
  O as A,
  Nt as E,
  Ot as a,
  ra as b,
  aa as c,
  Be as d,
  Pr as g,
  F as i,
  ze as j,
  Ae as m,
  ye as p,
  Lr as r,
  Ge as s,
};
