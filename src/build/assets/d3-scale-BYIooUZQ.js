import { I as C } from "./internmap-BkD7Hj8s.js";
import {
  r as gn,
  b as A,
  t as mn,
  a as T,
  c as pn,
  d as X,
  q as hn,
  e as dn,
} from "./d3-array-g_qRI3rN.js";
import { t as yn, u as vn } from "./d3-time-format-BKO53YJi.js";
import {
  s as Z,
  t as Mn,
  a as wn,
  b as kn,
  c as Nn,
  d as bn,
  e as qn,
  f as An,
  g as Sn,
  u as In,
  h as Dn,
  i as Rn,
  j as Fn,
  k as On,
  l as En,
  m as Tn,
  n as $n,
} from "./d3-time-QpEiTrED.js";
import { i as Ln, a as L, b as P, p as Pn } from "./d3-interpolate-CvRPKVI0.js";
import {
  f as nn,
  p as jn,
  a as zn,
  b as Yn,
  c as Hn,
  d as tn,
} from "./d3-format-CzD4bSOQ.js";
function M(n, r) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(r).domain(n);
      break;
  }
  return this;
}
function N(n, r) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof n == "function" ? this.interpolator(n) : this.range(n);
      break;
    }
    default: {
      this.domain(n),
        typeof r == "function" ? this.interpolator(r) : this.range(r);
      break;
    }
  }
  return this;
}
const U = Symbol("implicit");
function rn() {
  var n = new C(),
    r = [],
    u = [],
    t = U;
  function a(e) {
    let i = n.get(e);
    if (i === void 0) {
      if (t !== U) return t;
      n.set(e, (i = r.push(e) - 1));
    }
    return u[i % u.length];
  }
  return (
    (a.domain = function (e) {
      if (!arguments.length) return r.slice();
      (r = []), (n = new C());
      for (const i of e) n.has(i) || n.set(i, r.push(i) - 1);
      return a;
    }),
    (a.range = function (e) {
      return arguments.length ? ((u = Array.from(e)), a) : u.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((t = e), a) : t;
    }),
    (a.copy = function () {
      return rn(r, u).unknown(t);
    }),
    M.apply(a, arguments),
    a
  );
}
function en() {
  var n = rn().unknown(void 0),
    r = n.domain,
    u = n.range,
    t = 0,
    a = 1,
    e,
    i,
    l = !1,
    s = 0,
    o = 0,
    g = 0.5;
  delete n.unknown;
  function f() {
    var c = r().length,
      p = a < t,
      d = p ? a : t,
      m = p ? t : a;
    (e = (m - d) / Math.max(1, c - s + o * 2)),
      l && (e = Math.floor(e)),
      (d += (m - d - e * (c - s)) * g),
      (i = e * (1 - s)),
      l && ((d = Math.round(d)), (i = Math.round(i)));
    var w = gn(c).map(function (v) {
      return d + e * v;
    });
    return u(p ? w.reverse() : w);
  }
  return (
    (n.domain = function (c) {
      return arguments.length ? (r(c), f()) : r();
    }),
    (n.range = function (c) {
      return arguments.length
        ? (([t, a] = c), (t = +t), (a = +a), f())
        : [t, a];
    }),
    (n.rangeRound = function (c) {
      return ([t, a] = c), (t = +t), (a = +a), (l = !0), f();
    }),
    (n.bandwidth = function () {
      return i;
    }),
    (n.step = function () {
      return e;
    }),
    (n.round = function (c) {
      return arguments.length ? ((l = !!c), f()) : l;
    }),
    (n.padding = function (c) {
      return arguments.length ? ((s = Math.min(1, (o = +c))), f()) : s;
    }),
    (n.paddingInner = function (c) {
      return arguments.length ? ((s = Math.min(1, c)), f()) : s;
    }),
    (n.paddingOuter = function (c) {
      return arguments.length ? ((o = +c), f()) : o;
    }),
    (n.align = function (c) {
      return arguments.length ? ((g = Math.max(0, Math.min(1, c))), f()) : g;
    }),
    (n.copy = function () {
      return en(r(), [t, a]).round(l).paddingInner(s).paddingOuter(o).align(g);
    }),
    M.apply(f(), arguments)
  );
}
function un(n) {
  var r = n.copy;
  return (
    (n.padding = n.paddingOuter),
    delete n.paddingInner,
    delete n.paddingOuter,
    (n.copy = function () {
      return un(r());
    }),
    n
  );
}
function bt() {
  return un(en.apply(null, arguments).paddingInner(1));
}
function Bn(n) {
  return function () {
    return n;
  };
}
function R(n) {
  return +n;
}
var Q = [0, 1];
function y(n) {
  return n;
}
function $(n, r) {
  return (r -= n = +n)
    ? function (u) {
        return (u - n) / r;
      }
    : Bn(isNaN(r) ? NaN : 0.5);
}
function Cn(n, r) {
  var u;
  return (
    n > r && ((u = n), (n = r), (r = u)),
    function (t) {
      return Math.max(n, Math.min(r, t));
    }
  );
}
function Un(n, r, u) {
  var t = n[0],
    a = n[1],
    e = r[0],
    i = r[1];
  return (
    a < t ? ((t = $(a, t)), (e = u(i, e))) : ((t = $(t, a)), (e = u(e, i))),
    function (l) {
      return e(t(l));
    }
  );
}
function Qn(n, r, u) {
  var t = Math.min(n.length, r.length) - 1,
    a = new Array(t),
    e = new Array(t),
    i = -1;
  for (
    n[t] < n[0] && ((n = n.slice().reverse()), (r = r.slice().reverse()));
    ++i < t;

  )
    (a[i] = $(n[i], n[i + 1])), (e[i] = u(r[i], r[i + 1]));
  return function (l) {
    var s = A(n, l, 1, t) - 1;
    return e[s](a[s](l));
  };
}
function S(n, r) {
  return r
    .domain(n.domain())
    .range(n.range())
    .interpolate(n.interpolate())
    .clamp(n.clamp())
    .unknown(n.unknown());
}
function F() {
  var n = Q,
    r = Q,
    u = L,
    t,
    a,
    e,
    i = y,
    l,
    s,
    o;
  function g() {
    var c = Math.min(n.length, r.length);
    return (
      i !== y && (i = Cn(n[0], n[c - 1])),
      (l = c > 2 ? Qn : Un),
      (s = o = null),
      f
    );
  }
  function f(c) {
    return c == null || isNaN((c = +c))
      ? e
      : (s || (s = l(n.map(t), r, u)))(t(i(c)));
  }
  return (
    (f.invert = function (c) {
      return i(a((o || (o = l(r, n.map(t), Ln)))(c)));
    }),
    (f.domain = function (c) {
      return arguments.length ? ((n = Array.from(c, R)), g()) : n.slice();
    }),
    (f.range = function (c) {
      return arguments.length ? ((r = Array.from(c)), g()) : r.slice();
    }),
    (f.rangeRound = function (c) {
      return (r = Array.from(c)), (u = P), g();
    }),
    (f.clamp = function (c) {
      return arguments.length ? ((i = c ? !0 : y), g()) : i !== y;
    }),
    (f.interpolate = function (c) {
      return arguments.length ? ((u = c), g()) : u;
    }),
    (f.unknown = function (c) {
      return arguments.length ? ((e = c), f) : e;
    }),
    function (c, p) {
      return (t = c), (a = p), g();
    }
  );
}
function j() {
  return F()(y, y);
}
function Wn(n, r, u, t) {
  var a = mn(n, r, u),
    e;
  switch (((t = nn(t ?? ",f")), t.type)) {
    case "s": {
      var i = Math.max(Math.abs(n), Math.abs(r));
      return (
        t.precision == null && !isNaN((e = Yn(a, i))) && (t.precision = e),
        Hn(t, i)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      t.precision == null &&
        !isNaN((e = zn(a, Math.max(Math.abs(n), Math.abs(r))))) &&
        (t.precision = e - (t.type === "e"));
      break;
    }
    case "f":
    case "%": {
      t.precision == null &&
        !isNaN((e = jn(a))) &&
        (t.precision = e - (t.type === "%") * 2);
      break;
    }
  }
  return tn(t);
}
function b(n) {
  var r = n.domain;
  return (
    (n.ticks = function (u) {
      var t = r();
      return T(t[0], t[t.length - 1], u ?? 10);
    }),
    (n.tickFormat = function (u, t) {
      var a = r();
      return Wn(a[0], a[a.length - 1], u ?? 10, t);
    }),
    (n.nice = function (u) {
      u == null && (u = 10);
      var t = r(),
        a = 0,
        e = t.length - 1,
        i = t[a],
        l = t[e],
        s,
        o,
        g = 10;
      for (
        l < i && ((o = i), (i = l), (l = o), (o = a), (a = e), (e = o));
        g-- > 0;

      ) {
        if (((o = pn(i, l, u)), o === s)) return (t[a] = i), (t[e] = l), r(t);
        if (o > 0) (i = Math.floor(i / o) * o), (l = Math.ceil(l / o) * o);
        else if (o < 0) (i = Math.ceil(i * o) / o), (l = Math.floor(l * o) / o);
        else break;
        s = o;
      }
      return n;
    }),
    n
  );
}
function _n() {
  var n = j();
  return (
    (n.copy = function () {
      return S(n, _n());
    }),
    M.apply(n, arguments),
    b(n)
  );
}
function xn(n) {
  var r;
  function u(t) {
    return t == null || isNaN((t = +t)) ? r : t;
  }
  return (
    (u.invert = u),
    (u.domain = u.range =
      function (t) {
        return arguments.length ? ((n = Array.from(t, R)), u) : n.slice();
      }),
    (u.unknown = function (t) {
      return arguments.length ? ((r = t), u) : r;
    }),
    (u.copy = function () {
      return xn(n).unknown(r);
    }),
    (n = arguments.length ? Array.from(n, R) : [0, 1]),
    b(u)
  );
}
function an(n, r) {
  n = n.slice();
  var u = 0,
    t = n.length - 1,
    a = n[u],
    e = n[t],
    i;
  return (
    e < a && ((i = u), (u = t), (t = i), (i = a), (a = e), (e = i)),
    (n[u] = r.floor(a)),
    (n[t] = r.ceil(e)),
    n
  );
}
function W(n) {
  return Math.log(n);
}
function _(n) {
  return Math.exp(n);
}
function Gn(n) {
  return -Math.log(-n);
}
function Jn(n) {
  return -Math.exp(-n);
}
function Kn(n) {
  return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
}
function Vn(n) {
  return n === 10 ? Kn : n === Math.E ? Math.exp : (r) => Math.pow(n, r);
}
function Xn(n) {
  return n === Math.E
    ? Math.log
    : (n === 10 && Math.log10) ||
        (n === 2 && Math.log2) ||
        ((n = Math.log(n)), (r) => Math.log(r) / n);
}
function x(n) {
  return (r, u) => -n(-r, u);
}
function z(n) {
  const r = n(W, _),
    u = r.domain;
  let t = 10,
    a,
    e;
  function i() {
    return (
      (a = Xn(t)),
      (e = Vn(t)),
      u()[0] < 0 ? ((a = x(a)), (e = x(e)), n(Gn, Jn)) : n(W, _),
      r
    );
  }
  return (
    (r.base = function (l) {
      return arguments.length ? ((t = +l), i()) : t;
    }),
    (r.domain = function (l) {
      return arguments.length ? (u(l), i()) : u();
    }),
    (r.ticks = (l) => {
      const s = u();
      let o = s[0],
        g = s[s.length - 1];
      const f = g < o;
      f && ([o, g] = [g, o]);
      let c = a(o),
        p = a(g),
        d,
        m;
      const w = l == null ? 10 : +l;
      let v = [];
      if (!(t % 1) && p - c < w) {
        if (((c = Math.floor(c)), (p = Math.ceil(p)), o > 0)) {
          for (; c <= p; ++c)
            for (d = 1; d < t; ++d)
              if (((m = c < 0 ? d / e(-c) : d * e(c)), !(m < o))) {
                if (m > g) break;
                v.push(m);
              }
        } else
          for (; c <= p; ++c)
            for (d = t - 1; d >= 1; --d)
              if (((m = c > 0 ? d / e(-c) : d * e(c)), !(m < o))) {
                if (m > g) break;
                v.push(m);
              }
        v.length * 2 < w && (v = T(o, g, w));
      } else v = T(c, p, Math.min(p - c, w)).map(e);
      return f ? v.reverse() : v;
    }),
    (r.tickFormat = (l, s) => {
      if (
        (l == null && (l = 10),
        s == null && (s = t === 10 ? "s" : ","),
        typeof s != "function" &&
          (!(t % 1) && (s = nn(s)).precision == null && (s.trim = !0),
          (s = tn(s))),
        l === 1 / 0)
      )
        return s;
      const o = Math.max(1, (t * l) / r.ticks().length);
      return (g) => {
        let f = g / e(Math.round(a(g)));
        return f * t < t - 0.5 && (f *= t), f <= o ? s(g) : "";
      };
    }),
    (r.nice = () =>
      u(
        an(u(), {
          floor: (l) => e(Math.floor(a(l))),
          ceil: (l) => e(Math.ceil(a(l))),
        }),
      )),
    r
  );
}
function Zn() {
  const n = z(F()).domain([1, 10]);
  return (n.copy = () => S(n, Zn()).base(n.base())), M.apply(n, arguments), n;
}
function G(n) {
  return function (r) {
    return Math.sign(r) * Math.log1p(Math.abs(r / n));
  };
}
function J(n) {
  return function (r) {
    return Math.sign(r) * Math.expm1(Math.abs(r)) * n;
  };
}
function Y(n) {
  var r = 1,
    u = n(G(r), J(r));
  return (
    (u.constant = function (t) {
      return arguments.length ? n(G((r = +t)), J(r)) : r;
    }),
    b(u)
  );
}
function nt() {
  var n = Y(F());
  return (
    (n.copy = function () {
      return S(n, nt()).constant(n.constant());
    }),
    M.apply(n, arguments)
  );
}
function K(n) {
  return function (r) {
    return r < 0 ? -Math.pow(-r, n) : Math.pow(r, n);
  };
}
function tt(n) {
  return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
}
function rt(n) {
  return n < 0 ? -n * n : n * n;
}
function H(n) {
  var r = n(y, y),
    u = 1;
  function t() {
    return u === 1 ? n(y, y) : u === 0.5 ? n(tt, rt) : n(K(u), K(1 / u));
  }
  return (
    (r.exponent = function (a) {
      return arguments.length ? ((u = +a), t()) : u;
    }),
    b(r)
  );
}
function on() {
  var n = H(F());
  return (
    (n.copy = function () {
      return S(n, on()).exponent(n.exponent());
    }),
    M.apply(n, arguments),
    n
  );
}
function qt() {
  return on.apply(null, arguments).exponent(0.5);
}
function V(n) {
  return Math.sign(n) * n * n;
}
function et(n) {
  return Math.sign(n) * Math.sqrt(Math.abs(n));
}
function ut() {
  var n = j(),
    r = [0, 1],
    u = !1,
    t;
  function a(e) {
    var i = et(n(e));
    return isNaN(i) ? t : u ? Math.round(i) : i;
  }
  return (
    (a.invert = function (e) {
      return n.invert(V(e));
    }),
    (a.domain = function (e) {
      return arguments.length ? (n.domain(e), a) : n.domain();
    }),
    (a.range = function (e) {
      return arguments.length
        ? (n.range((r = Array.from(e, R)).map(V)), a)
        : r.slice();
    }),
    (a.rangeRound = function (e) {
      return a.range(e).round(!0);
    }),
    (a.round = function (e) {
      return arguments.length ? ((u = !!e), a) : u;
    }),
    (a.clamp = function (e) {
      return arguments.length ? (n.clamp(e), a) : n.clamp();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((t = e), a) : t;
    }),
    (a.copy = function () {
      return ut(n.domain(), r).round(u).clamp(n.clamp()).unknown(t);
    }),
    M.apply(a, arguments),
    b(a)
  );
}
function at() {
  var n = [],
    r = [],
    u = [],
    t;
  function a() {
    var i = 0,
      l = Math.max(1, r.length);
    for (u = new Array(l - 1); ++i < l; ) u[i - 1] = hn(n, i / l);
    return e;
  }
  function e(i) {
    return i == null || isNaN((i = +i)) ? t : r[A(u, i)];
  }
  return (
    (e.invertExtent = function (i) {
      var l = r.indexOf(i);
      return l < 0
        ? [NaN, NaN]
        : [l > 0 ? u[l - 1] : n[0], l < u.length ? u[l] : n[n.length - 1]];
    }),
    (e.domain = function (i) {
      if (!arguments.length) return n.slice();
      n = [];
      for (let l of i) l != null && !isNaN((l = +l)) && n.push(l);
      return n.sort(X), a();
    }),
    (e.range = function (i) {
      return arguments.length ? ((r = Array.from(i)), a()) : r.slice();
    }),
    (e.unknown = function (i) {
      return arguments.length ? ((t = i), e) : t;
    }),
    (e.quantiles = function () {
      return u.slice();
    }),
    (e.copy = function () {
      return at().domain(n).range(r).unknown(t);
    }),
    M.apply(e, arguments)
  );
}
function it() {
  var n = 0,
    r = 1,
    u = 1,
    t = [0.5],
    a = [0, 1],
    e;
  function i(s) {
    return s != null && s <= s ? a[A(t, s, 0, u)] : e;
  }
  function l() {
    var s = -1;
    for (t = new Array(u); ++s < u; )
      t[s] = ((s + 1) * r - (s - u) * n) / (u + 1);
    return i;
  }
  return (
    (i.domain = function (s) {
      return arguments.length
        ? (([n, r] = s), (n = +n), (r = +r), l())
        : [n, r];
    }),
    (i.range = function (s) {
      return arguments.length
        ? ((u = (a = Array.from(s)).length - 1), l())
        : a.slice();
    }),
    (i.invertExtent = function (s) {
      var o = a.indexOf(s);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [n, t[0]]
          : o >= u
            ? [t[u - 1], r]
            : [t[o - 1], t[o]];
    }),
    (i.unknown = function (s) {
      return arguments.length && (e = s), i;
    }),
    (i.thresholds = function () {
      return t.slice();
    }),
    (i.copy = function () {
      return it().domain([n, r]).range(a).unknown(e);
    }),
    M.apply(b(i), arguments)
  );
}
function ot() {
  var n = [0.5],
    r = [0, 1],
    u,
    t = 1;
  function a(e) {
    return e != null && e <= e ? r[A(n, e, 0, t)] : u;
  }
  return (
    (a.domain = function (e) {
      return arguments.length
        ? ((n = Array.from(e)), (t = Math.min(n.length, r.length - 1)), a)
        : n.slice();
    }),
    (a.range = function (e) {
      return arguments.length
        ? ((r = Array.from(e)), (t = Math.min(n.length, r.length - 1)), a)
        : r.slice();
    }),
    (a.invertExtent = function (e) {
      var i = r.indexOf(e);
      return [n[i - 1], n[i]];
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((u = e), a) : u;
    }),
    (a.copy = function () {
      return ot().domain(n).range(r).unknown(u);
    }),
    M.apply(a, arguments)
  );
}
function ct(n) {
  return new Date(n);
}
function lt(n) {
  return n instanceof Date ? +n : +new Date(+n);
}
function B(n, r, u, t, a, e, i, l, s, o) {
  var g = j(),
    f = g.invert,
    c = g.domain,
    p = o(".%L"),
    d = o(":%S"),
    m = o("%I:%M"),
    w = o("%I %p"),
    v = o("%a %d"),
    I = o("%b %d"),
    D = o("%B"),
    sn = o("%Y");
  function fn(h) {
    return (
      s(h) < h
        ? p
        : l(h) < h
          ? d
          : i(h) < h
            ? m
            : e(h) < h
              ? w
              : t(h) < h
                ? a(h) < h
                  ? v
                  : I
                : u(h) < h
                  ? D
                  : sn
    )(h);
  }
  return (
    (g.invert = function (h) {
      return new Date(f(h));
    }),
    (g.domain = function (h) {
      return arguments.length ? c(Array.from(h, lt)) : c().map(ct);
    }),
    (g.ticks = function (h) {
      var k = c();
      return n(k[0], k[k.length - 1], h ?? 10);
    }),
    (g.tickFormat = function (h, k) {
      return k == null ? fn : o(k);
    }),
    (g.nice = function (h) {
      var k = c();
      return (
        (!h || typeof h.range != "function") &&
          (h = r(k[0], k[k.length - 1], h ?? 10)),
        h ? c(an(k, h)) : g
      );
    }),
    (g.copy = function () {
      return S(g, B(n, r, u, t, a, e, i, l, s, o));
    }),
    g
  );
}
function At() {
  return M.apply(
    B(Sn, An, qn, bn, Nn, kn, wn, Mn, Z, yn).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function St() {
  return M.apply(
    B($n, Tn, En, On, Fn, Rn, Dn, In, Z, vn).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function O() {
  var n = 0,
    r = 1,
    u,
    t,
    a,
    e,
    i = y,
    l = !1,
    s;
  function o(f) {
    return f == null || isNaN((f = +f))
      ? s
      : i(
          a === 0
            ? 0.5
            : ((f = (e(f) - u) * a), l ? Math.max(0, Math.min(1, f)) : f),
        );
  }
  (o.domain = function (f) {
    return arguments.length
      ? (([n, r] = f),
        (u = e((n = +n))),
        (t = e((r = +r))),
        (a = u === t ? 0 : 1 / (t - u)),
        o)
      : [n, r];
  }),
    (o.clamp = function (f) {
      return arguments.length ? ((l = !!f), o) : l;
    }),
    (o.interpolator = function (f) {
      return arguments.length ? ((i = f), o) : i;
    });
  function g(f) {
    return function (c) {
      var p, d;
      return arguments.length ? (([p, d] = c), (i = f(p, d)), o) : [i(0), i(1)];
    };
  }
  return (
    (o.range = g(L)),
    (o.rangeRound = g(P)),
    (o.unknown = function (f) {
      return arguments.length ? ((s = f), o) : s;
    }),
    function (f) {
      return (
        (e = f), (u = f(n)), (t = f(r)), (a = u === t ? 0 : 1 / (t - u)), o
      );
    }
  );
}
function q(n, r) {
  return r
    .domain(n.domain())
    .interpolator(n.interpolator())
    .clamp(n.clamp())
    .unknown(n.unknown());
}
function st() {
  var n = b(O()(y));
  return (
    (n.copy = function () {
      return q(n, st());
    }),
    N.apply(n, arguments)
  );
}
function ft() {
  var n = z(O()).domain([1, 10]);
  return (
    (n.copy = function () {
      return q(n, ft()).base(n.base());
    }),
    N.apply(n, arguments)
  );
}
function gt() {
  var n = Y(O());
  return (
    (n.copy = function () {
      return q(n, gt()).constant(n.constant());
    }),
    N.apply(n, arguments)
  );
}
function cn() {
  var n = H(O());
  return (
    (n.copy = function () {
      return q(n, cn()).exponent(n.exponent());
    }),
    N.apply(n, arguments)
  );
}
function It() {
  return cn.apply(null, arguments).exponent(0.5);
}
function mt() {
  var n = [],
    r = y;
  function u(t) {
    if (t != null && !isNaN((t = +t)))
      return r((A(n, t, 1) - 1) / (n.length - 1));
  }
  return (
    (u.domain = function (t) {
      if (!arguments.length) return n.slice();
      n = [];
      for (let a of t) a != null && !isNaN((a = +a)) && n.push(a);
      return n.sort(X), u;
    }),
    (u.interpolator = function (t) {
      return arguments.length ? ((r = t), u) : r;
    }),
    (u.range = function () {
      return n.map((t, a) => r(a / (n.length - 1)));
    }),
    (u.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (a, e) => dn(n, e / t));
    }),
    (u.copy = function () {
      return mt(r).domain(n);
    }),
    N.apply(u, arguments)
  );
}
function E() {
  var n = 0,
    r = 0.5,
    u = 1,
    t = 1,
    a,
    e,
    i,
    l,
    s,
    o = y,
    g,
    f = !1,
    c;
  function p(m) {
    return isNaN((m = +m))
      ? c
      : ((m = 0.5 + ((m = +g(m)) - e) * (t * m < t * e ? l : s)),
        o(f ? Math.max(0, Math.min(1, m)) : m));
  }
  (p.domain = function (m) {
    return arguments.length
      ? (([n, r, u] = m),
        (a = g((n = +n))),
        (e = g((r = +r))),
        (i = g((u = +u))),
        (l = a === e ? 0 : 0.5 / (e - a)),
        (s = e === i ? 0 : 0.5 / (i - e)),
        (t = e < a ? -1 : 1),
        p)
      : [n, r, u];
  }),
    (p.clamp = function (m) {
      return arguments.length ? ((f = !!m), p) : f;
    }),
    (p.interpolator = function (m) {
      return arguments.length ? ((o = m), p) : o;
    });
  function d(m) {
    return function (w) {
      var v, I, D;
      return arguments.length
        ? (([v, I, D] = w), (o = Pn(m, [v, I, D])), p)
        : [o(0), o(0.5), o(1)];
    };
  }
  return (
    (p.range = d(L)),
    (p.rangeRound = d(P)),
    (p.unknown = function (m) {
      return arguments.length ? ((c = m), p) : c;
    }),
    function (m) {
      return (
        (g = m),
        (a = m(n)),
        (e = m(r)),
        (i = m(u)),
        (l = a === e ? 0 : 0.5 / (e - a)),
        (s = e === i ? 0 : 0.5 / (i - e)),
        (t = e < a ? -1 : 1),
        p
      );
    }
  );
}
function pt() {
  var n = b(E()(y));
  return (
    (n.copy = function () {
      return q(n, pt());
    }),
    N.apply(n, arguments)
  );
}
function ht() {
  var n = z(E()).domain([0.1, 1, 10]);
  return (
    (n.copy = function () {
      return q(n, ht()).base(n.base());
    }),
    N.apply(n, arguments)
  );
}
function dt() {
  var n = Y(E());
  return (
    (n.copy = function () {
      return q(n, dt()).constant(n.constant());
    }),
    N.apply(n, arguments)
  );
}
function ln() {
  var n = H(E());
  return (
    (n.copy = function () {
      return q(n, ln()).exponent(n.exponent());
    }),
    N.apply(n, arguments)
  );
}
function Dt() {
  return ln.apply(null, arguments).exponent(0.5);
}
export {
  St as A,
  Wn as B,
  ht as a,
  en as b,
  ln as c,
  pt as d,
  Dt as e,
  dt as f,
  U as g,
  Zn as h,
  xn as i,
  on as j,
  it as k,
  _n as l,
  ft as m,
  cn as n,
  rn as o,
  bt as p,
  at as q,
  ut as r,
  st as s,
  mt as t,
  It as u,
  gt as v,
  qt as w,
  nt as x,
  ot as y,
  At as z,
};
