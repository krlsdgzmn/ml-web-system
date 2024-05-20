function d(n, e) {
  return n == null || e == null
    ? NaN
    : n < e
      ? -1
      : n > e
        ? 1
        : n >= e
          ? 0
          : NaN;
}
function R(n, e) {
  return n == null || e == null
    ? NaN
    : e < n
      ? -1
      : e > n
        ? 1
        : e >= n
          ? 0
          : NaN;
}
function A(n) {
  let e, i, f;
  n.length !== 2
    ? ((e = d), (i = (u, r) => d(n(u), r)), (f = (u, r) => n(u) - r))
    : ((e = n === d || n === R ? n : B), (i = n), (f = n));
  function c(u, r, t = 0, M = u.length) {
    if (t < M) {
      if (e(r, r) !== 0) return M;
      do {
        const h = (t + M) >>> 1;
        i(u[h], r) < 0 ? (t = h + 1) : (M = h);
      } while (t < M);
    }
    return t;
  }
  function o(u, r, t = 0, M = u.length) {
    if (t < M) {
      if (e(r, r) !== 0) return M;
      do {
        const h = (t + M) >>> 1;
        i(u[h], r) <= 0 ? (t = h + 1) : (M = h);
      } while (t < M);
    }
    return t;
  }
  function l(u, r, t = 0, M = u.length) {
    const h = c(u, r, t, M - 1);
    return h > t && f(u[h - 1], r) > -f(u[h], r) ? h - 1 : h;
  }
  return { left: c, center: l, right: o };
}
function B() {
  return 0;
}
function S(n) {
  return n === null ? NaN : +n;
}
function* E(n, e) {
  for (let i of n) i != null && (i = +i) >= i && (yield i);
}
const F = A(d),
  G = F.right;
A(S).center;
function L(n = d) {
  if (n === d) return x;
  if (typeof n != "function") throw new TypeError("compare is not a function");
  return (e, i) => {
    const f = n(e, i);
    return f || f === 0 ? f : (n(i, i) === 0) - (n(e, e) === 0);
  };
}
function x(n, e) {
  return (
    (n == null || !(n >= n)) - (e == null || !(e >= e)) ||
    (n < e ? -1 : n > e ? 1 : 0)
  );
}
const T = Math.sqrt(50),
  j = Math.sqrt(10),
  C = Math.sqrt(2);
function N(n, e, i) {
  const f = (e - n) / Math.max(0, i),
    c = Math.floor(Math.log10(f)),
    o = f / Math.pow(10, c),
    l = o >= T ? 10 : o >= j ? 5 : o >= C ? 2 : 1;
  let u, r, t;
  return (
    c < 0
      ? ((t = Math.pow(10, -c) / l),
        (u = Math.round(n * t)),
        (r = Math.round(e * t)),
        u / t < n && ++u,
        r / t > e && --r,
        (t = -t))
      : ((t = Math.pow(10, c) * l),
        (u = Math.round(n / t)),
        (r = Math.round(e / t)),
        u * t < n && ++u,
        r * t > e && --r),
    r < u && 0.5 <= i && i < 2 ? N(n, e, i * 2) : [u, r, t]
  );
}
function H(n, e, i) {
  if (((e = +e), (n = +n), (i = +i), !(i > 0))) return [];
  if (n === e) return [n];
  const f = e < n,
    [c, o, l] = f ? N(e, n, i) : N(n, e, i);
  if (!(o >= c)) return [];
  const u = o - c + 1,
    r = new Array(u);
  if (f)
    if (l < 0) for (let t = 0; t < u; ++t) r[t] = (o - t) / -l;
    else for (let t = 0; t < u; ++t) r[t] = (o - t) * l;
  else if (l < 0) for (let t = 0; t < u; ++t) r[t] = (c + t) / -l;
  else for (let t = 0; t < u; ++t) r[t] = (c + t) * l;
  return r;
}
function g(n, e, i) {
  return (e = +e), (n = +n), (i = +i), N(n, e, i)[2];
}
function J(n, e, i) {
  (e = +e), (n = +n), (i = +i);
  const f = e < n,
    c = f ? g(e, n, i) : g(n, e, i);
  return (f ? -1 : 1) * (c < 0 ? 1 / -c : c);
}
function q(n, e) {
  let i;
  for (const f of n)
    f != null && (i < f || (i === void 0 && f >= f)) && (i = f);
  return i;
}
function s(n, e) {
  let i;
  for (const f of n)
    f != null && (i > f || (i === void 0 && f >= f)) && (i = f);
  return i;
}
function z(n, e, i = 0, f = 1 / 0, c) {
  if (
    ((e = Math.floor(e)),
    (i = Math.floor(Math.max(0, i))),
    (f = Math.floor(Math.min(n.length - 1, f))),
    !(i <= e && e <= f))
  )
    return n;
  for (c = c === void 0 ? x : L(c); f > i; ) {
    if (f - i > 600) {
      const r = f - i + 1,
        t = e - i + 1,
        M = Math.log(r),
        h = 0.5 * Math.exp((2 * M) / 3),
        m = 0.5 * Math.sqrt((M * h * (r - h)) / r) * (t - r / 2 < 0 ? -1 : 1),
        D = Math.max(i, Math.floor(e - (t * h) / r + m)),
        I = Math.min(f, Math.floor(e + ((r - t) * h) / r + m));
      z(n, e, D, I, c);
    }
    const o = n[e];
    let l = i,
      u = f;
    for (w(n, i, e), c(n[f], o) > 0 && w(n, i, f); l < u; ) {
      for (w(n, l, u), ++l, --u; c(n[l], o) < 0; ) ++l;
      for (; c(n[u], o) > 0; ) --u;
    }
    c(n[i], o) === 0 ? w(n, i, u) : (++u, w(n, u, f)),
      u <= e && (i = u + 1),
      e <= u && (f = u - 1);
  }
  return n;
}
function w(n, e, i) {
  const f = n[e];
  (n[e] = n[i]), (n[i] = f);
}
function K(n, e, i) {
  if (((n = Float64Array.from(E(n))), !(!(f = n.length) || isNaN((e = +e))))) {
    if (e <= 0 || f < 2) return s(n);
    if (e >= 1) return q(n);
    var f,
      c = (f - 1) * e,
      o = Math.floor(c),
      l = q(z(n, o).subarray(0, o + 1)),
      u = s(n.subarray(o + 1));
    return l + (u - l) * (c - o);
  }
}
function O(n, e, i = S) {
  if (!(!(f = n.length) || isNaN((e = +e)))) {
    if (e <= 0 || f < 2) return +i(n[0], 0, n);
    if (e >= 1) return +i(n[f - 1], f - 1, n);
    var f,
      c = (f - 1) * e,
      o = Math.floor(c),
      l = +i(n[o], o, n),
      u = +i(n[o + 1], o + 1, n);
    return l + (u - l) * (c - o);
  }
}
function P(n, e, i) {
  (n = +n),
    (e = +e),
    (i = (c = arguments.length) < 2 ? ((e = n), (n = 0), 1) : c < 3 ? 1 : +i);
  for (
    var f = -1, c = Math.max(0, Math.ceil((e - n) / i)) | 0, o = new Array(c);
    ++f < c;

  )
    o[f] = n + f * i;
  return o;
}
export { H as a, G as b, g as c, d, K as e, A as f, O as q, P as r, J as t };
