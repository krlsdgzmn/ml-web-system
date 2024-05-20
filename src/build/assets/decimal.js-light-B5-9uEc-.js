var U = 1e9,
  ne = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Q,
  v = !0,
  A = "[DecimalError] ",
  S = A + "Invalid argument: ",
  K = A + "Exponent out of range: ",
  F = Math.floor,
  x = Math.pow,
  oe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  L,
  D = 1e7,
  w = 7,
  z = 9007199254740991,
  Z = F(z / w),
  c = {};
c.absoluteValue = c.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
c.comparedTo = c.cmp = function (e) {
  var r,
    o,
    t,
    n,
    i = this;
  if (((e = new i.constructor(e)), i.s !== e.s)) return i.s || -e.s;
  if (i.e !== e.e) return (i.e > e.e) ^ (i.s < 0) ? 1 : -1;
  for (t = i.d.length, n = e.d.length, r = 0, o = t < n ? t : n; r < o; ++r)
    if (i.d[r] !== e.d[r]) return (i.d[r] > e.d[r]) ^ (i.s < 0) ? 1 : -1;
  return t === n ? 0 : (t > n) ^ (i.s < 0) ? 1 : -1;
};
c.decimalPlaces = c.dp = function () {
  var e = this,
    r = e.d.length - 1,
    o = (r - e.e) * w;
  if (((r = e.d[r]), r)) for (; r % 10 == 0; r /= 10) o--;
  return o < 0 ? 0 : o;
};
c.dividedBy = c.div = function (e) {
  return I(this, new this.constructor(e));
};
c.dividedToIntegerBy = c.idiv = function (e) {
  var r = this,
    o = r.constructor;
  return p(I(r, new o(e), 0, 1), o.precision);
};
c.equals = c.eq = function (e) {
  return !this.cmp(e);
};
c.exponent = function () {
  return N(this);
};
c.greaterThan = c.gt = function (e) {
  return this.cmp(e) > 0;
};
c.greaterThanOrEqualTo = c.gte = function (e) {
  return this.cmp(e) >= 0;
};
c.isInteger = c.isint = function () {
  return this.e > this.d.length - 2;
};
c.isNegative = c.isneg = function () {
  return this.s < 0;
};
c.isPositive = c.ispos = function () {
  return this.s > 0;
};
c.isZero = function () {
  return this.s === 0;
};
c.lessThan = c.lt = function (e) {
  return this.cmp(e) < 0;
};
c.lessThanOrEqualTo = c.lte = function (e) {
  return this.cmp(e) < 1;
};
c.logarithm = c.log = function (e) {
  var r,
    o = this,
    t = o.constructor,
    n = t.precision,
    i = n + 5;
  if (e === void 0) e = new t(10);
  else if (((e = new t(e)), e.s < 1 || e.eq(L))) throw Error(A + "NaN");
  if (o.s < 1) throw Error(A + (o.s ? "NaN" : "-Infinity"));
  return o.eq(L)
    ? new t(0)
    : ((v = !1), (r = I(b(o, i), b(e, i), i)), (v = !0), p(r, n));
};
c.minus = c.sub = function (e) {
  var r = this;
  return (
    (e = new r.constructor(e)), r.s == e.s ? re(r, e) : y(r, ((e.s = -e.s), e))
  );
};
c.modulo = c.mod = function (e) {
  var r,
    o = this,
    t = o.constructor,
    n = t.precision;
  if (((e = new t(e)), !e.s)) throw Error(A + "NaN");
  return o.s
    ? ((v = !1), (r = I(o, e, 0, 1).times(e)), (v = !0), o.minus(r))
    : p(new t(o), n);
};
c.naturalExponential = c.exp = function () {
  return ee(this);
};
c.naturalLogarithm = c.ln = function () {
  return b(this);
};
c.negated = c.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
c.plus = c.add = function (e) {
  var r = this;
  return (
    (e = new r.constructor(e)), r.s == e.s ? y(r, e) : re(r, ((e.s = -e.s), e))
  );
};
c.precision = c.sd = function (e) {
  var r,
    o,
    t,
    n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(S + e);
  if (
    ((r = N(n) + 1), (t = n.d.length - 1), (o = t * w + 1), (t = n.d[t]), t)
  ) {
    for (; t % 10 == 0; t /= 10) o--;
    for (t = n.d[0]; t >= 10; t /= 10) o++;
  }
  return e && r > o ? r : o;
};
c.squareRoot = c.sqrt = function () {
  var e,
    r,
    o,
    t,
    n,
    i,
    s,
    f = this,
    u = f.constructor;
  if (f.s < 1) {
    if (!f.s) return new u(0);
    throw Error(A + "NaN");
  }
  for (
    e = N(f),
      v = !1,
      n = Math.sqrt(+f),
      n == 0 || n == 1 / 0
        ? ((r = q(f.d)),
          (r.length + e) % 2 == 0 && (r += "0"),
          (n = Math.sqrt(r)),
          (e = F((e + 1) / 2) - (e < 0 || e % 2)),
          n == 1 / 0
            ? (r = "5e" + e)
            : ((r = n.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (t = new u(r)))
        : (t = new u(n.toString())),
      o = u.precision,
      n = s = o + 3;
    ;

  )
    if (
      ((i = t),
      (t = i.plus(I(f, i, s + 2)).times(0.5)),
      q(i.d).slice(0, s) === (r = q(t.d)).slice(0, s))
    ) {
      if (((r = r.slice(s - 3, s + 1)), n == s && r == "4999")) {
        if ((p(i, o + 1, 0), i.times(i).eq(f))) {
          t = i;
          break;
        }
      } else if (r != "9999") break;
      s += 4;
    }
  return (v = !0), p(t, o);
};
c.times = c.mul = function (e) {
  var r,
    o,
    t,
    n,
    i,
    s,
    f,
    u,
    h,
    l = this,
    d = l.constructor,
    O = l.d,
    a = (e = new d(e)).d;
  if (!l.s || !e.s) return new d(0);
  for (
    e.s *= l.s,
      o = l.e + e.e,
      u = O.length,
      h = a.length,
      u < h && ((i = O), (O = a), (a = i), (s = u), (u = h), (h = s)),
      i = [],
      s = u + h,
      t = s;
    t--;

  )
    i.push(0);
  for (t = h; --t >= 0; ) {
    for (r = 0, n = u + t; n > t; )
      (f = i[n] + a[t] * O[n - t - 1] + r),
        (i[n--] = f % D | 0),
        (r = (f / D) | 0);
    i[n] = (i[n] + r) % D | 0;
  }
  for (; !i[--s]; ) i.pop();
  return r ? ++o : i.shift(), (e.d = i), (e.e = o), v ? p(e, d.precision) : e;
};
c.toDecimalPlaces = c.todp = function (e, r) {
  var o = this,
    t = o.constructor;
  return (
    (o = new t(o)),
    e === void 0
      ? o
      : (k(e, 0, U),
        r === void 0 ? (r = t.rounding) : k(r, 0, 8),
        p(o, e + N(o) + 1, r))
  );
};
c.toExponential = function (e, r) {
  var o,
    t = this,
    n = t.constructor;
  return (
    e === void 0
      ? (o = T(t, !0))
      : (k(e, 0, U),
        r === void 0 ? (r = n.rounding) : k(r, 0, 8),
        (t = p(new n(t), e + 1, r)),
        (o = T(t, !0, e + 1))),
    o
  );
};
c.toFixed = function (e, r) {
  var o,
    t,
    n = this,
    i = n.constructor;
  return e === void 0
    ? T(n)
    : (k(e, 0, U),
      r === void 0 ? (r = i.rounding) : k(r, 0, 8),
      (t = p(new i(n), e + N(n) + 1, r)),
      (o = T(t.abs(), !1, e + N(t) + 1)),
      n.isneg() && !n.isZero() ? "-" + o : o);
};
c.toInteger = c.toint = function () {
  var e = this,
    r = e.constructor;
  return p(new r(e), N(e) + 1, r.rounding);
};
c.toNumber = function () {
  return +this;
};
c.toPower = c.pow = function (e) {
  var r,
    o,
    t,
    n,
    i,
    s,
    f = this,
    u = f.constructor,
    h = 12,
    l = +(e = new u(e));
  if (!e.s) return new u(L);
  if (((f = new u(f)), !f.s)) {
    if (e.s < 1) throw Error(A + "Infinity");
    return f;
  }
  if (f.eq(L)) return f;
  if (((t = u.precision), e.eq(L))) return p(f, t);
  if (((r = e.e), (o = e.d.length - 1), (s = r >= o), (i = f.s), s)) {
    if ((o = l < 0 ? -l : l) <= z) {
      for (
        n = new u(L), r = Math.ceil(t / w + 4), v = !1;
        o % 2 && ((n = n.times(f)), j(n.d, r)), (o = F(o / 2)), o !== 0;

      )
        (f = f.times(f)), j(f.d, r);
      return (v = !0), e.s < 0 ? new u(L).div(n) : p(n, t);
    }
  } else if (i < 0) throw Error(A + "NaN");
  return (
    (i = i < 0 && e.d[Math.max(r, o)] & 1 ? -1 : 1),
    (f.s = 1),
    (v = !1),
    (n = e.times(b(f, t + h))),
    (v = !0),
    (n = ee(n)),
    (n.s = i),
    n
  );
};
c.toPrecision = function (e, r) {
  var o,
    t,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? ((o = N(n)), (t = T(n, o <= i.toExpNeg || o >= i.toExpPos)))
      : (k(e, 1, U),
        r === void 0 ? (r = i.rounding) : k(r, 0, 8),
        (n = p(new i(n), e, r)),
        (o = N(n)),
        (t = T(n, e <= o || o <= i.toExpNeg, e))),
    t
  );
};
c.toSignificantDigits = c.tosd = function (e, r) {
  var o = this,
    t = o.constructor;
  return (
    e === void 0
      ? ((e = t.precision), (r = t.rounding))
      : (k(e, 1, U), r === void 0 ? (r = t.rounding) : k(r, 0, 8)),
    p(new t(o), e, r)
  );
};
c.toString =
  c.valueOf =
  c.val =
  c.toJSON =
  c[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        r = N(e),
        o = e.constructor;
      return T(e, r <= o.toExpNeg || r >= o.toExpPos);
    };
function y(e, r) {
  var o,
    t,
    n,
    i,
    s,
    f,
    u,
    h,
    l = e.constructor,
    d = l.precision;
  if (!e.s || !r.s) return r.s || (r = new l(e)), v ? p(r, d) : r;
  if (
    ((u = e.d),
    (h = r.d),
    (s = e.e),
    (n = r.e),
    (u = u.slice()),
    (i = s - n),
    i)
  ) {
    for (
      i < 0
        ? ((t = u), (i = -i), (f = h.length))
        : ((t = h), (n = s), (f = u.length)),
        s = Math.ceil(d / w),
        f = s > f ? s + 1 : f + 1,
        i > f && ((i = f), (t.length = 1)),
        t.reverse();
      i--;

    )
      t.push(0);
    t.reverse();
  }
  for (
    f = u.length,
      i = h.length,
      f - i < 0 && ((i = f), (t = h), (h = u), (u = t)),
      o = 0;
    i;

  )
    (o = ((u[--i] = u[i] + h[i] + o) / D) | 0), (u[i] %= D);
  for (o && (u.unshift(o), ++n), f = u.length; u[--f] == 0; ) u.pop();
  return (r.d = u), (r.e = n), v ? p(r, d) : r;
}
function k(e, r, o) {
  if (e !== ~~e || e < r || e > o) throw Error(S + e);
}
function q(e) {
  var r,
    o,
    t,
    n = e.length - 1,
    i = "",
    s = e[0];
  if (n > 0) {
    for (i += s, r = 1; r < n; r++)
      (t = e[r] + ""), (o = w - t.length), o && (i += R(o)), (i += t);
    (s = e[r]), (t = s + ""), (o = w - t.length), o && (i += R(o));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return i + s;
}
var I = (function () {
  function e(t, n) {
    var i,
      s = 0,
      f = t.length;
    for (t = t.slice(); f--; )
      (i = t[f] * n + s), (t[f] = i % D | 0), (s = (i / D) | 0);
    return s && t.unshift(s), t;
  }
  function r(t, n, i, s) {
    var f, u;
    if (i != s) u = i > s ? 1 : -1;
    else
      for (f = u = 0; f < i; f++)
        if (t[f] != n[f]) {
          u = t[f] > n[f] ? 1 : -1;
          break;
        }
    return u;
  }
  function o(t, n, i) {
    for (var s = 0; i--; )
      (t[i] -= s), (s = t[i] < n[i] ? 1 : 0), (t[i] = s * D + t[i] - n[i]);
    for (; !t[0] && t.length > 1; ) t.shift();
  }
  return function (t, n, i, s) {
    var f,
      u,
      h,
      l,
      d,
      O,
      a,
      P,
      g,
      E,
      B,
      M,
      V,
      H,
      G,
      $,
      C,
      W,
      X = t.constructor,
      te = t.s == n.s ? 1 : -1,
      _ = t.d,
      m = n.d;
    if (!t.s) return new X(t);
    if (!n.s) throw Error(A + "Division by zero");
    for (
      u = t.e - n.e,
        C = m.length,
        G = _.length,
        a = new X(te),
        P = a.d = [],
        h = 0;
      m[h] == (_[h] || 0);

    )
      ++h;
    if (
      (m[h] > (_[h] || 0) && --u,
      i == null
        ? (M = i = X.precision)
        : s
          ? (M = i + (N(t) - N(n)) + 1)
          : (M = i),
      M < 0)
    )
      return new X(0);
    if (((M = (M / w + 2) | 0), (h = 0), C == 1))
      for (l = 0, m = m[0], M++; (h < G || l) && M--; h++)
        (V = l * D + (_[h] || 0)), (P[h] = (V / m) | 0), (l = V % m | 0);
    else {
      for (
        l = (D / (m[0] + 1)) | 0,
          l > 1 &&
            ((m = e(m, l)), (_ = e(_, l)), (C = m.length), (G = _.length)),
          H = C,
          g = _.slice(0, C),
          E = g.length;
        E < C;

      )
        g[E++] = 0;
      (W = m.slice()), W.unshift(0), ($ = m[0]), m[1] >= D / 2 && ++$;
      do
        (l = 0),
          (f = r(m, g, C, E)),
          f < 0
            ? ((B = g[0]),
              C != E && (B = B * D + (g[1] || 0)),
              (l = (B / $) | 0),
              l > 1
                ? (l >= D && (l = D - 1),
                  (d = e(m, l)),
                  (O = d.length),
                  (E = g.length),
                  (f = r(d, g, O, E)),
                  f == 1 && (l--, o(d, C < O ? W : m, O)))
                : (l == 0 && (f = l = 1), (d = m.slice())),
              (O = d.length),
              O < E && d.unshift(0),
              o(g, d, E),
              f == -1 &&
                ((E = g.length),
                (f = r(m, g, C, E)),
                f < 1 && (l++, o(g, C < E ? W : m, E))),
              (E = g.length))
            : f === 0 && (l++, (g = [0])),
          (P[h++] = l),
          f && g[0] ? (g[E++] = _[H] || 0) : ((g = [_[H]]), (E = 1));
      while ((H++ < G || g[0] !== void 0) && M--);
    }
    return P[0] || P.shift(), (a.e = u), p(a, s ? i + N(a) + 1 : i);
  };
})();
function ee(e, r) {
  var o,
    t,
    n,
    i,
    s,
    f,
    u = 0,
    h = 0,
    l = e.constructor,
    d = l.precision;
  if (N(e) > 16) throw Error(K + N(e));
  if (!e.s) return new l(L);
  for (
    r == null ? ((v = !1), (f = d)) : (f = r), s = new l(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(s)), (h += 5);
  for (
    t = ((Math.log(x(2, h)) / Math.LN10) * 2 + 5) | 0,
      f += t,
      o = n = i = new l(L),
      l.precision = f;
    ;

  ) {
    if (
      ((n = p(n.times(e), f)),
      (o = o.times(++u)),
      (s = i.plus(I(n, o, f))),
      q(s.d).slice(0, f) === q(i.d).slice(0, f))
    ) {
      for (; h--; ) i = p(i.times(i), f);
      return (l.precision = d), r == null ? ((v = !0), p(i, d)) : i;
    }
    i = s;
  }
}
function N(e) {
  for (var r = e.e * w, o = e.d[0]; o >= 10; o /= 10) r++;
  return r;
}
function J(e, r, o) {
  if (r > e.LN10.sd())
    throw (
      ((v = !0),
      o && (e.precision = o),
      Error(A + "LN10 precision limit exceeded"))
    );
  return p(new e(e.LN10), r);
}
function R(e) {
  for (var r = ""; e--; ) r += "0";
  return r;
}
function b(e, r) {
  var o,
    t,
    n,
    i,
    s,
    f,
    u,
    h,
    l,
    d = 1,
    O = 10,
    a = e,
    P = a.d,
    g = a.constructor,
    E = g.precision;
  if (a.s < 1) throw Error(A + (a.s ? "NaN" : "-Infinity"));
  if (a.eq(L)) return new g(0);
  if ((r == null ? ((v = !1), (h = E)) : (h = r), a.eq(10)))
    return r == null && (v = !0), J(g, h);
  if (
    ((h += O),
    (g.precision = h),
    (o = q(P)),
    (t = o.charAt(0)),
    (i = N(a)),
    Math.abs(i) < 15e14)
  ) {
    for (; (t < 7 && t != 1) || (t == 1 && o.charAt(1) > 3); )
      (a = a.times(e)), (o = q(a.d)), (t = o.charAt(0)), d++;
    (i = N(a)),
      t > 1 ? ((a = new g("0." + o)), i++) : (a = new g(t + "." + o.slice(1)));
  } else
    return (
      (u = J(g, h + 2, E).times(i + "")),
      (a = b(new g(t + "." + o.slice(1)), h - O).plus(u)),
      (g.precision = E),
      r == null ? ((v = !0), p(a, E)) : a
    );
  for (
    f = s = a = I(a.minus(L), a.plus(L), h), l = p(a.times(a), h), n = 3;
    ;

  ) {
    if (
      ((s = p(s.times(l), h)),
      (u = f.plus(I(s, new g(n), h))),
      q(u.d).slice(0, h) === q(f.d).slice(0, h))
    )
      return (
        (f = f.times(2)),
        i !== 0 && (f = f.plus(J(g, h + 2, E).times(i + ""))),
        (f = I(f, new g(d), h)),
        (g.precision = E),
        r == null ? ((v = !0), p(f, E)) : f
      );
    (f = u), (n += 2);
  }
}
function Y(e, r) {
  var o, t, n;
  for (
    (o = r.indexOf(".")) > -1 && (r = r.replace(".", "")),
      (t = r.search(/e/i)) > 0
        ? (o < 0 && (o = t), (o += +r.slice(t + 1)), (r = r.substring(0, t)))
        : o < 0 && (o = r.length),
      t = 0;
    r.charCodeAt(t) === 48;

  )
    ++t;
  for (n = r.length; r.charCodeAt(n - 1) === 48; ) --n;
  if (((r = r.slice(t, n)), r)) {
    if (
      ((n -= t),
      (o = o - t - 1),
      (e.e = F(o / w)),
      (e.d = []),
      (t = (o + 1) % w),
      o < 0 && (t += w),
      t < n)
    ) {
      for (t && e.d.push(+r.slice(0, t)), n -= w; t < n; )
        e.d.push(+r.slice(t, (t += w)));
      (r = r.slice(t)), (t = w - r.length);
    } else t -= n;
    for (; t--; ) r += "0";
    if ((e.d.push(+r), v && (e.e > Z || e.e < -Z))) throw Error(K + o);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function p(e, r, o) {
  var t,
    n,
    i,
    s,
    f,
    u,
    h,
    l,
    d = e.d;
  for (s = 1, i = d[0]; i >= 10; i /= 10) s++;
  if (((t = r - s), t < 0)) (t += w), (n = r), (h = d[(l = 0)]);
  else {
    if (((l = Math.ceil((t + 1) / w)), (i = d.length), l >= i)) return e;
    for (h = i = d[l], s = 1; i >= 10; i /= 10) s++;
    (t %= w), (n = t - w + s);
  }
  if (
    (o !== void 0 &&
      ((i = x(10, s - n - 1)),
      (f = (h / i) % 10 | 0),
      (u = r < 0 || d[l + 1] !== void 0 || h % i),
      (u =
        o < 4
          ? (f || u) && (o == 0 || o == (e.s < 0 ? 3 : 2))
          : f > 5 ||
            (f == 5 &&
              (o == 4 ||
                u ||
                (o == 6 &&
                  (t > 0 ? (n > 0 ? h / x(10, s - n) : 0) : d[l - 1]) % 10 &
                    1) ||
                o == (e.s < 0 ? 8 : 7))))),
    r < 1 || !d[0])
  )
    return (
      u
        ? ((i = N(e)),
          (d.length = 1),
          (r = r - i - 1),
          (d[0] = x(10, (w - (r % w)) % w)),
          (e.e = F(-r / w) || 0))
        : ((d.length = 1), (d[0] = e.e = e.s = 0)),
      e
    );
  if (
    (t == 0
      ? ((d.length = l), (i = 1), l--)
      : ((d.length = l + 1),
        (i = x(10, w - t)),
        (d[l] = n > 0 ? ((h / x(10, s - n)) % x(10, n) | 0) * i : 0)),
    u)
  )
    for (;;)
      if (l == 0) {
        (d[0] += i) == D && ((d[0] = 1), ++e.e);
        break;
      } else {
        if (((d[l] += i), d[l] != D)) break;
        (d[l--] = 0), (i = 1);
      }
  for (t = d.length; d[--t] === 0; ) d.pop();
  if (v && (e.e > Z || e.e < -Z)) throw Error(K + N(e));
  return e;
}
function re(e, r) {
  var o,
    t,
    n,
    i,
    s,
    f,
    u,
    h,
    l,
    d,
    O = e.constructor,
    a = O.precision;
  if (!e.s || !r.s) return r.s ? (r.s = -r.s) : (r = new O(e)), v ? p(r, a) : r;
  if (
    ((u = e.d),
    (d = r.d),
    (t = r.e),
    (h = e.e),
    (u = u.slice()),
    (s = h - t),
    s)
  ) {
    for (
      l = s < 0,
        l
          ? ((o = u), (s = -s), (f = d.length))
          : ((o = d), (t = h), (f = u.length)),
        n = Math.max(Math.ceil(a / w), f) + 2,
        s > n && ((s = n), (o.length = 1)),
        o.reverse(),
        n = s;
      n--;

    )
      o.push(0);
    o.reverse();
  } else {
    for (n = u.length, f = d.length, l = n < f, l && (f = n), n = 0; n < f; n++)
      if (u[n] != d[n]) {
        l = u[n] < d[n];
        break;
      }
    s = 0;
  }
  for (
    l && ((o = u), (u = d), (d = o), (r.s = -r.s)),
      f = u.length,
      n = d.length - f;
    n > 0;
    --n
  )
    u[f++] = 0;
  for (n = d.length; n > s; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = D - 1;
      --u[i], (u[n] += D);
    }
    u[n] -= d[n];
  }
  for (; u[--f] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --t;
  return u[0] ? ((r.d = u), (r.e = t), v ? p(r, a) : r) : new O(0);
}
function T(e, r, o) {
  var t,
    n = N(e),
    i = q(e.d),
    s = i.length;
  return (
    r
      ? (o && (t = o - s) > 0
          ? (i = i.charAt(0) + "." + i.slice(1) + R(t))
          : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
        (i = i + (n < 0 ? "e" : "e+") + n))
      : n < 0
        ? ((i = "0." + R(-n - 1) + i), o && (t = o - s) > 0 && (i += R(t)))
        : n >= s
          ? ((i += R(n + 1 - s)),
            o && (t = o - n - 1) > 0 && (i = i + "." + R(t)))
          : ((t = n + 1) < s && (i = i.slice(0, t) + "." + i.slice(t)),
            o && (t = o - s) > 0 && (n + 1 === s && (i += "."), (i += R(t)))),
    e.s < 0 ? "-" + i : i
  );
}
function j(e, r) {
  if (e.length > r) return (e.length = r), !0;
}
function ie(e) {
  var r, o, t;
  function n(i) {
    var s = this;
    if (!(s instanceof n)) return new n(i);
    if (((s.constructor = n), i instanceof n)) {
      (s.s = i.s), (s.e = i.e), (s.d = (i = i.d) ? i.slice() : i);
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0) throw Error(S + i);
      if (i > 0) s.s = 1;
      else if (i < 0) (i = -i), (s.s = -1);
      else {
        (s.s = 0), (s.e = 0), (s.d = [0]);
        return;
      }
      if (i === ~~i && i < 1e7) {
        (s.e = 0), (s.d = [i]);
        return;
      }
      return Y(s, i.toString());
    } else if (typeof i != "string") throw Error(S + i);
    if (
      (i.charCodeAt(0) === 45 ? ((i = i.slice(1)), (s.s = -1)) : (s.s = 1),
      oe.test(i))
    )
      Y(s, i);
    else throw Error(S + i);
  }
  if (
    ((n.prototype = c),
    (n.ROUND_UP = 0),
    (n.ROUND_DOWN = 1),
    (n.ROUND_CEIL = 2),
    (n.ROUND_FLOOR = 3),
    (n.ROUND_HALF_UP = 4),
    (n.ROUND_HALF_DOWN = 5),
    (n.ROUND_HALF_EVEN = 6),
    (n.ROUND_HALF_CEIL = 7),
    (n.ROUND_HALF_FLOOR = 8),
    (n.clone = ie),
    (n.config = n.set = se),
    e === void 0 && (e = {}),
    e)
  )
    for (
      t = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], r = 0;
      r < t.length;

    )
      e.hasOwnProperty((o = t[r++])) || (e[o] = this[o]);
  return n.config(e), n;
}
function se(e) {
  if (!e || typeof e != "object") throw Error(A + "Object expected");
  var r,
    o,
    t,
    n = [
      "precision",
      1,
      U,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (r = 0; r < n.length; r += 3)
    if ((t = e[(o = n[r])]) !== void 0)
      if (F(t) === t && t >= n[r + 1] && t <= n[r + 2]) this[o] = t;
      else throw Error(S + o + ": " + t);
  if ((t = e[(o = "LN10")]) !== void 0)
    if (t == Math.LN10) this[o] = new this(t);
    else throw Error(S + o + ": " + t);
  return this;
}
var Q = ie(ne);
L = new Q(1);
const fe = Q;
export { fe as D };
