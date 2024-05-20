import { P as ot } from "./d3-path-CimkQT29.js";
function a(t) {
  return function () {
    return t;
  };
}
const V = Math.cos,
  w = Math.sin,
  g = Math.sqrt,
  k = Math.PI,
  P = 2 * k;
function L(t) {
  let n = 3;
  return (
    (t.digits = function (i) {
      if (!arguments.length) return n;
      if (i == null) n = null;
      else {
        const o = Math.floor(i);
        if (!(o >= 0)) throw new RangeError(`invalid digits: ${i}`);
        n = o;
      }
      return t;
    }),
    () => new ot(n)
  );
}
function X(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function F(t) {
  this._context = t;
}
F.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
        break;
    }
  },
};
function G(t) {
  return new F(t);
}
function H(t) {
  return t[0];
}
function J(t) {
  return t[1];
}
function st(t, n) {
  var i = a(!0),
    o = null,
    s = G,
    e = null,
    h = L(r);
  (t = typeof t == "function" ? t : t === void 0 ? H : a(t)),
    (n = typeof n == "function" ? n : n === void 0 ? J : a(n));
  function r(c) {
    var l,
      _ = (c = X(c)).length,
      u,
      f = !1,
      v;
    for (o == null && (e = s((v = h()))), l = 0; l <= _; ++l)
      !(l < _ && i((u = c[l]), l, c)) === f &&
        ((f = !f) ? e.lineStart() : e.lineEnd()),
        f && e.point(+t(u, l, c), +n(u, l, c));
    if (v) return (e = null), v + "" || null;
  }
  return (
    (r.x = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : a(+c)), r)
        : t;
    }),
    (r.y = function (c) {
      return arguments.length
        ? ((n = typeof c == "function" ? c : a(+c)), r)
        : n;
    }),
    (r.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : a(!!c)), r)
        : i;
    }),
    (r.curve = function (c) {
      return arguments.length ? ((s = c), o != null && (e = s(o)), r) : s;
    }),
    (r.context = function (c) {
      return arguments.length
        ? (c == null ? (o = e = null) : (e = s((o = c))), r)
        : o;
    }),
    r
  );
}
function Tt(t, n, i) {
  var o = null,
    s = a(!0),
    e = null,
    h = G,
    r = null,
    c = L(l);
  (t = typeof t == "function" ? t : t === void 0 ? H : a(+t)),
    (n = typeof n == "function" ? n : a(n === void 0 ? 0 : +n)),
    (i = typeof i == "function" ? i : i === void 0 ? J : a(+i));
  function l(u) {
    var f,
      v,
      m,
      y = (u = X(u)).length,
      d,
      x = !1,
      A,
      M = new Array(y),
      B = new Array(y);
    for (e == null && (r = h((A = c()))), f = 0; f <= y; ++f) {
      if (!(f < y && s((d = u[f]), f, u)) === x)
        if ((x = !x)) (v = f), r.areaStart(), r.lineStart();
        else {
          for (r.lineEnd(), r.lineStart(), m = f - 1; m >= v; --m)
            r.point(M[m], B[m]);
          r.lineEnd(), r.areaEnd();
        }
      x &&
        ((M[f] = +t(d, f, u)),
        (B[f] = +n(d, f, u)),
        r.point(o ? +o(d, f, u) : M[f], i ? +i(d, f, u) : B[f]));
    }
    if (A) return (r = null), A + "" || null;
  }
  function _() {
    return st().defined(s).curve(h).context(e);
  }
  return (
    (l.x = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : a(+u)), (o = null), l)
        : t;
    }),
    (l.x0 = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : a(+u)), l)
        : t;
    }),
    (l.x1 = function (u) {
      return arguments.length
        ? ((o = u == null ? null : typeof u == "function" ? u : a(+u)), l)
        : o;
    }),
    (l.y = function (u) {
      return arguments.length
        ? ((n = typeof u == "function" ? u : a(+u)), (i = null), l)
        : n;
    }),
    (l.y0 = function (u) {
      return arguments.length
        ? ((n = typeof u == "function" ? u : a(+u)), l)
        : n;
    }),
    (l.y1 = function (u) {
      return arguments.length
        ? ((i = u == null ? null : typeof u == "function" ? u : a(+u)), l)
        : i;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return _().x(t).y(n);
      }),
    (l.lineY1 = function () {
      return _().x(t).y(i);
    }),
    (l.lineX1 = function () {
      return _().x(o).y(n);
    }),
    (l.defined = function (u) {
      return arguments.length
        ? ((s = typeof u == "function" ? u : a(!!u)), l)
        : s;
    }),
    (l.curve = function (u) {
      return arguments.length ? ((h = u), e != null && (r = h(e)), l) : h;
    }),
    (l.context = function (u) {
      return arguments.length
        ? (u == null ? (e = r = null) : (r = h((e = u))), l)
        : e;
    }),
    l
  );
}
class K {
  constructor(n, i) {
    (this._context = n), (this._x = i);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(n, i) {
    switch (((n = +n), (i = +i), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + n) / 2),
              this._y0,
              this._x0,
              i,
              n,
              i,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + i) / 2),
              n,
              this._y0,
              n,
              i,
            );
        break;
      }
    }
    (this._x0 = n), (this._y0 = i);
  }
}
function gt(t) {
  return new K(t, !0);
}
function vt(t) {
  return new K(t, !1);
}
const rt = {
    draw(t, n) {
      const i = g(n / k);
      t.moveTo(i, 0), t.arc(0, 0, i, 0, P);
    },
  },
  mt = {
    draw(t, n) {
      const i = g(n / 5) / 2;
      t.moveTo(-3 * i, -i),
        t.lineTo(-i, -i),
        t.lineTo(-i, -3 * i),
        t.lineTo(i, -3 * i),
        t.lineTo(i, -i),
        t.lineTo(3 * i, -i),
        t.lineTo(3 * i, i),
        t.lineTo(i, i),
        t.lineTo(i, 3 * i),
        t.lineTo(-i, 3 * i),
        t.lineTo(-i, i),
        t.lineTo(-3 * i, i),
        t.closePath();
    },
  },
  Q = g(1 / 3),
  ht = Q * 2,
  yt = {
    draw(t, n) {
      const i = g(n / ht),
        o = i * Q;
      t.moveTo(0, -i),
        t.lineTo(o, 0),
        t.lineTo(0, i),
        t.lineTo(-o, 0),
        t.closePath();
    },
  },
  dt = {
    draw(t, n) {
      const i = g(n),
        o = -i / 2;
      t.rect(o, o, i, i);
    },
  },
  ut = 0.8908130915292852,
  U = w(k / 10) / w((7 * k) / 10),
  ct = w(P / 10) * U,
  lt = -V(P / 10) * U,
  xt = {
    draw(t, n) {
      const i = g(n * ut),
        o = ct * i,
        s = lt * i;
      t.moveTo(0, -i), t.lineTo(o, s);
      for (let e = 1; e < 5; ++e) {
        const h = (P * e) / 5,
          r = V(h),
          c = w(h);
        t.lineTo(c * i, -r * i), t.lineTo(r * o - c * s, c * o + r * s);
      }
      t.closePath();
    },
  },
  O = g(3),
  bt = {
    draw(t, n) {
      const i = -g(n / (O * 3));
      t.moveTo(0, i * 2),
        t.lineTo(-O * i, -i),
        t.lineTo(O * i, -i),
        t.closePath();
    },
  },
  p = -0.5,
  T = g(3) / 2,
  q = 1 / g(12),
  at = (q / 2 + 1) * 3,
  wt = {
    draw(t, n) {
      const i = g(n / at),
        o = i / 2,
        s = i * q,
        e = o,
        h = i * q + i,
        r = -e,
        c = h;
      t.moveTo(o, s),
        t.lineTo(e, h),
        t.lineTo(r, c),
        t.lineTo(p * o - T * s, T * o + p * s),
        t.lineTo(p * e - T * h, T * e + p * h),
        t.lineTo(p * r - T * c, T * r + p * c),
        t.lineTo(p * o + T * s, p * s - T * o),
        t.lineTo(p * e + T * h, p * h - T * e),
        t.lineTo(p * r + T * c, p * c - T * r),
        t.closePath();
    },
  };
function kt(t, n) {
  let i = null,
    o = L(s);
  (t = typeof t == "function" ? t : a(t || rt)),
    (n = typeof n == "function" ? n : a(n === void 0 ? 64 : +n));
  function s() {
    let e;
    if (
      (i || (i = e = o()),
      t.apply(this, arguments).draw(i, +n.apply(this, arguments)),
      e)
    )
      return (i = null), e + "" || null;
  }
  return (
    (s.type = function (e) {
      return arguments.length
        ? ((t = typeof e == "function" ? e : a(e)), s)
        : t;
    }),
    (s.size = function (e) {
      return arguments.length
        ? ((n = typeof e == "function" ? e : a(+e)), s)
        : n;
    }),
    (s.context = function (e) {
      return arguments.length ? ((i = e ?? null), s) : i;
    }),
    s
  );
}
function N() {}
function S(t, n, i) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + i) / 6,
  );
}
function Z(t) {
  this._context = t;
}
Z.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        S(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        S(this, t, n);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = t),
      (this._y0 = this._y1),
      (this._y1 = n);
  },
};
function Nt(t) {
  return new Z(t);
}
function $(t) {
  this._context = t;
}
$.prototype = {
  areaStart: N,
  areaEnd: N,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = t), (this._y2 = n);
        break;
      case 1:
        (this._point = 2), (this._x3 = t), (this._y3 = n);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = t),
          (this._y4 = n),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + t) / 6,
            (this._y0 + 4 * this._y1 + n) / 6,
          );
        break;
      default:
        S(this, t, n);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = t),
      (this._y0 = this._y1),
      (this._y1 = n);
  },
};
function St(t) {
  return new $(t);
}
function j(t) {
  this._context = t;
}
j.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t) / 6,
          o = (this._y0 + 4 * this._y1 + n) / 6;
        this._line ? this._context.lineTo(i, o) : this._context.moveTo(i, o);
        break;
      case 3:
        this._point = 4;
      default:
        S(this, t, n);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = t),
      (this._y0 = this._y1),
      (this._y1 = n);
  },
};
function Et(t) {
  return new j(t);
}
function tt(t) {
  this._context = t;
}
tt.prototype = {
  areaStart: N,
  areaEnd: N,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (t, n) {
    (t = +t),
      (n = +n),
      this._point
        ? this._context.lineTo(t, n)
        : ((this._point = 1), this._context.moveTo(t, n));
  },
};
function Pt(t) {
  return new tt(t);
}
function Y(t) {
  return t < 0 ? -1 : 1;
}
function R(t, n, i) {
  var o = t._x1 - t._x0,
    s = n - t._x1,
    e = (t._y1 - t._y0) / (o || (s < 0 && -0)),
    h = (i - t._y1) / (s || (o < 0 && -0)),
    r = (e * s + h * o) / (o + s);
  return (
    (Y(e) + Y(h)) * Math.min(Math.abs(e), Math.abs(h), 0.5 * Math.abs(r)) || 0
  );
}
function W(t, n) {
  var i = t._x1 - t._x0;
  return i ? ((3 * (t._y1 - t._y0)) / i - n) / 2 : n;
}
function z(t, n, i) {
  var o = t._x0,
    s = t._y0,
    e = t._x1,
    h = t._y1,
    r = (e - o) / 3;
  t._context.bezierCurveTo(o + r, s + r * n, e - r, h - r * i, e, h);
}
function E(t) {
  this._context = t;
}
E.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        z(this, this._t0, W(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, n) {
    var i = NaN;
    if (((t = +t), (n = +n), !(t === this._x1 && n === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), z(this, W(this, (i = R(this, t, n))), i);
          break;
        default:
          z(this, this._t0, (i = R(this, t, n)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n),
        (this._t0 = i);
    }
  },
};
function nt(t) {
  this._context = new it(t);
}
(nt.prototype = Object.create(E.prototype)).point = function (t, n) {
  E.prototype.point.call(this, n, t);
};
function it(t) {
  this._context = t;
}
it.prototype = {
  moveTo: function (t, n) {
    this._context.moveTo(n, t);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (t, n) {
    this._context.lineTo(n, t);
  },
  bezierCurveTo: function (t, n, i, o, s, e) {
    this._context.bezierCurveTo(n, t, o, i, e, s);
  },
};
function Ct(t) {
  return new E(t);
}
function At(t) {
  return new nt(t);
}
function et(t) {
  this._context = t;
}
et.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var t = this._x,
      n = this._y,
      i = t.length;
    if (i)
      if (
        (this._line
          ? this._context.lineTo(t[0], n[0])
          : this._context.moveTo(t[0], n[0]),
        i === 2)
      )
        this._context.lineTo(t[1], n[1]);
      else
        for (var o = D(t), s = D(n), e = 0, h = 1; h < i; ++e, ++h)
          this._context.bezierCurveTo(
            o[0][e],
            s[0][e],
            o[1][e],
            s[1][e],
            t[h],
            n[h],
          );
    (this._line || (this._line !== 0 && i === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (t, n) {
    this._x.push(+t), this._y.push(+n);
  },
};
function D(t) {
  var n,
    i = t.length - 1,
    o,
    s = new Array(i),
    e = new Array(i),
    h = new Array(i);
  for (s[0] = 0, e[0] = 2, h[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n)
    (s[n] = 1), (e[n] = 4), (h[n] = 4 * t[n] + 2 * t[n + 1]);
  for (
    s[i - 1] = 2, e[i - 1] = 7, h[i - 1] = 8 * t[i - 1] + t[i], n = 1;
    n < i;
    ++n
  )
    (o = s[n] / e[n - 1]), (e[n] -= o), (h[n] -= o * h[n - 1]);
  for (s[i - 1] = h[i - 1] / e[i - 1], n = i - 2; n >= 0; --n)
    s[n] = (h[n] - s[n + 1]) / e[n];
  for (e[i - 1] = (t[i] + s[i - 1]) / 2, n = 0; n < i - 1; ++n)
    e[n] = 2 * t[n + 1] - s[n + 1];
  return [s, e];
}
function Mt(t) {
  return new et(t);
}
function C(t, n) {
  (this._context = t), (this._t = n);
}
C.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, n), this._context.lineTo(t, n);
        else {
          var i = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, n);
        }
        break;
      }
    }
    (this._x = t), (this._y = n);
  },
};
function Bt(t) {
  return new C(t, 0.5);
}
function Ot(t) {
  return new C(t, 0);
}
function zt(t) {
  return new C(t, 1);
}
function b(t, n) {
  if ((h = t.length) > 1)
    for (var i = 1, o, s, e = t[n[0]], h, r = e.length; i < h; ++i)
      for (s = e, e = t[n[i]], o = 0; o < r; ++o)
        e[o][1] += e[o][0] = isNaN(s[o][1]) ? s[o][0] : s[o][1];
}
function I(t) {
  for (var n = t.length, i = new Array(n); --n >= 0; ) i[n] = n;
  return i;
}
function ft(t, n) {
  return t[n];
}
function _t(t) {
  const n = [];
  return (n.key = t), n;
}
function qt() {
  var t = a([]),
    n = I,
    i = b,
    o = ft;
  function s(e) {
    var h = Array.from(t.apply(this, arguments), _t),
      r,
      c = h.length,
      l = -1,
      _;
    for (const u of e)
      for (r = 0, ++l; r < c; ++r)
        (h[r][l] = [0, +o(u, h[r].key, l, e)]).data = u;
    for (r = 0, _ = X(n(h)); r < c; ++r) h[_[r]].index = r;
    return i(h, _), h;
  }
  return (
    (s.keys = function (e) {
      return arguments.length
        ? ((t = typeof e == "function" ? e : a(Array.from(e))), s)
        : t;
    }),
    (s.value = function (e) {
      return arguments.length
        ? ((o = typeof e == "function" ? e : a(+e)), s)
        : o;
    }),
    (s.order = function (e) {
      return arguments.length
        ? ((n = e == null ? I : typeof e == "function" ? e : a(Array.from(e))),
          s)
        : n;
    }),
    (s.offset = function (e) {
      return arguments.length ? ((i = e ?? b), s) : i;
    }),
    s
  );
}
function Lt(t, n) {
  if ((o = t.length) > 0) {
    for (var i, o, s = 0, e = t[0].length, h; s < e; ++s) {
      for (h = i = 0; i < o; ++i) h += t[i][s][1] || 0;
      if (h) for (i = 0; i < o; ++i) t[i][s][1] /= h;
    }
    b(t, n);
  }
}
function Xt(t, n) {
  if ((s = t.length) > 0) {
    for (var i = 0, o = t[n[0]], s, e = o.length; i < e; ++i) {
      for (var h = 0, r = 0; h < s; ++h) r += t[h][i][1] || 0;
      o[i][1] += o[i][0] = -r / 2;
    }
    b(t, n);
  }
}
function Yt(t, n) {
  if (!(!((h = t.length) > 0) || !((e = (s = t[n[0]]).length) > 0))) {
    for (var i = 0, o = 1, s, e, h; o < e; ++o) {
      for (var r = 0, c = 0, l = 0; r < h; ++r) {
        for (
          var _ = t[n[r]],
            u = _[o][1] || 0,
            f = _[o - 1][1] || 0,
            v = (u - f) / 2,
            m = 0;
          m < r;
          ++m
        ) {
          var y = t[n[m]],
            d = y[o][1] || 0,
            x = y[o - 1][1] || 0;
          v += d - x;
        }
        (c += u), (l += v * u);
      }
      (s[o - 1][1] += s[o - 1][0] = i), c && (i -= l / c);
    }
    (s[o - 1][1] += s[o - 1][0] = i), b(t, n);
  }
}
export {
  zt as A,
  Ot as B,
  kt as S,
  mt as a,
  yt as b,
  dt as c,
  xt as d,
  bt as e,
  wt as f,
  qt as g,
  I as h,
  Lt as i,
  b as j,
  Xt as k,
  Yt as l,
  Tt as m,
  st as n,
  G as o,
  St as p,
  Et as q,
  Nt as r,
  rt as s,
  gt as t,
  vt as u,
  Pt as v,
  Ct as w,
  At as x,
  Mt as y,
  Bt as z,
};
