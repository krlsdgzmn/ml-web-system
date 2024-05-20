function J(n) {
  return Math.abs((n = Math.round(n))) >= 1e21
    ? n.toLocaleString("en").replace(/,/g, "")
    : n.toString(10);
}
function E(n, t) {
  if (
    (e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0
  )
    return null;
  var e,
    i = n.slice(0, e);
  return [i.length > 1 ? i[0] + i.slice(2) : i, +n.slice(e + 1)];
}
function l(n) {
  return (n = E(Math.abs(n))), n ? n[1] : NaN;
}
function K(n, t) {
  return function (e, i) {
    for (
      var o = e.length, f = [], c = 0, m = n[0], x = 0;
      o > 0 &&
      m > 0 &&
      (x + m + 1 > i && (m = Math.max(1, i - x)),
      f.push(e.substring((o -= m), o + m)),
      !((x += m + 1) > i));

    )
      m = n[(c = (c + 1) % n.length)];
    return f.reverse().join(t);
  };
}
function Q(n) {
  return function (t) {
    return t.replace(/[0-9]/g, function (e) {
      return n[+e];
    });
  };
}
var V =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function N(n) {
  if (!(t = V.exec(n))) throw new Error("invalid format: " + n);
  var t;
  return new $({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
N.prototype = $.prototype;
function $(n) {
  (this.fill = n.fill === void 0 ? " " : n.fill + ""),
    (this.align = n.align === void 0 ? ">" : n.align + ""),
    (this.sign = n.sign === void 0 ? "-" : n.sign + ""),
    (this.symbol = n.symbol === void 0 ? "" : n.symbol + ""),
    (this.zero = !!n.zero),
    (this.width = n.width === void 0 ? void 0 : +n.width),
    (this.comma = !!n.comma),
    (this.precision = n.precision === void 0 ? void 0 : +n.precision),
    (this.trim = !!n.trim),
    (this.type = n.type === void 0 ? "" : n.type + "");
}
$.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function W(n) {
  n: for (var t = n.length, e = 1, i = -1, o; e < t; ++e)
    switch (n[e]) {
      case ".":
        i = o = e;
        break;
      case "0":
        i === 0 && (i = e), (o = e);
        break;
      default:
        if (!+n[e]) break n;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? n.slice(0, i) + n.slice(o + 1) : n;
}
var Y;
function _(n, t) {
  var e = E(n, t);
  if (!e) return n + "";
  var i = e[0],
    o = e[1],
    f = o - (Y = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
    c = i.length;
  return f === c
    ? i
    : f > c
      ? i + new Array(f - c + 1).join("0")
      : f > 0
        ? i.slice(0, f) + "." + i.slice(f)
        : "0." + new Array(1 - f).join("0") + E(n, Math.max(0, t + f - 1))[0];
}
function I(n, t) {
  var e = E(n, t);
  if (!e) return n + "";
  var i = e[0],
    o = e[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + i
    : i.length > o + 1
      ? i.slice(0, o + 1) + "." + i.slice(o + 1)
      : i + new Array(o - i.length + 2).join("0");
}
const R = {
  "%": (n, t) => (n * 100).toFixed(t),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: J,
  e: (n, t) => n.toExponential(t),
  f: (n, t) => n.toFixed(t),
  g: (n, t) => n.toPrecision(t),
  o: (n) => Math.round(n).toString(8),
  p: (n, t) => I(n * 100, t),
  r: I,
  s: _,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16),
};
function X(n) {
  return n;
}
var O = Array.prototype.map,
  U = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function v(n) {
  var t =
      n.grouping === void 0 || n.thousands === void 0
        ? X
        : K(O.call(n.grouping, Number), n.thousands + ""),
    e = n.currency === void 0 ? "" : n.currency[0] + "",
    i = n.currency === void 0 ? "" : n.currency[1] + "",
    o = n.decimal === void 0 ? "." : n.decimal + "",
    f = n.numerals === void 0 ? X : Q(O.call(n.numerals, String)),
    c = n.percent === void 0 ? "%" : n.percent + "",
    m = n.minus === void 0 ? "−" : n.minus + "",
    x = n.nan === void 0 ? "NaN" : n.nan + "";
  function L(a) {
    a = N(a);
    var p = a.fill,
      w = a.align,
      u = a.sign,
      S = a.symbol,
      M = a.zero,
      k = a.width,
      F = a.comma,
      g = a.precision,
      T = a.trim,
      h = a.type;
    h === "n"
      ? ((F = !0), (h = "g"))
      : R[h] || (g === void 0 && (g = 12), (T = !0), (h = "g")),
      (M || (p === "0" && w === "=")) && ((M = !0), (p = "0"), (w = "="));
    var q =
        S === "$"
          ? e
          : S === "#" && /[boxX]/.test(h)
            ? "0" + h.toLowerCase()
            : "",
      B = S === "$" ? i : /[%p]/.test(h) ? c : "",
      C = R[h],
      H = /[defgprs%]/.test(h);
    g =
      g === void 0
        ? 6
        : /[gprs]/.test(h)
          ? Math.max(1, Math.min(21, g))
          : Math.max(0, Math.min(20, g));
    function D(r) {
      var y = q,
        d = B,
        b,
        G,
        P;
      if (h === "c") (d = C(r) + d), (r = "");
      else {
        r = +r;
        var z = r < 0 || 1 / r < 0;
        if (
          ((r = isNaN(r) ? x : C(Math.abs(r), g)),
          T && (r = W(r)),
          z && +r == 0 && u !== "+" && (z = !1),
          (y = (z ? (u === "(" ? u : m) : u === "-" || u === "(" ? "" : u) + y),
          (d =
            (h === "s" ? U[8 + Y / 3] : "") + d + (z && u === "(" ? ")" : "")),
          H)
        ) {
          for (b = -1, G = r.length; ++b < G; )
            if (((P = r.charCodeAt(b)), 48 > P || P > 57)) {
              (d = (P === 46 ? o + r.slice(b + 1) : r.slice(b)) + d),
                (r = r.slice(0, b));
              break;
            }
        }
      }
      F && !M && (r = t(r, 1 / 0));
      var A = y.length + r.length + d.length,
        s = A < k ? new Array(k - A + 1).join(p) : "";
      switch (
        (F && M && ((r = t(s + r, s.length ? k - d.length : 1 / 0)), (s = "")),
        w)
      ) {
        case "<":
          r = y + r + d + s;
          break;
        case "=":
          r = y + s + r + d;
          break;
        case "^":
          r = s.slice(0, (A = s.length >> 1)) + y + r + d + s.slice(A);
          break;
        default:
          r = s + y + r + d;
          break;
      }
      return f(r);
    }
    return (
      (D.toString = function () {
        return a + "";
      }),
      D
    );
  }
  function Z(a, p) {
    var w = L(((a = N(a)), (a.type = "f"), a)),
      u = Math.max(-8, Math.min(8, Math.floor(l(p) / 3))) * 3,
      S = Math.pow(10, -u),
      M = U[8 + u / 3];
    return function (k) {
      return w(S * k) + M;
    };
  }
  return { format: L, formatPrefix: Z };
}
var j, nn, tn;
rn({ thousands: ",", grouping: [3], currency: ["$", ""] });
function rn(n) {
  return (j = v(n)), (nn = j.format), (tn = j.formatPrefix), j;
}
function en(n) {
  return Math.max(0, -l(Math.abs(n)));
}
function on(n, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(l(t) / 3))) * 3 - l(Math.abs(n)),
  );
}
function an(n, t) {
  return (n = Math.abs(n)), (t = Math.abs(t) - n), Math.max(0, l(t) - l(n)) + 1;
}
export { an as a, on as b, tn as c, nn as d, N as f, en as p };
