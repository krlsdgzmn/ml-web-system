const x = Math.PI,
  c = 2 * x,
  d = 1e-6,
  P = c - d;
function E(l) {
  this._ += l[0];
  for (let t = 1, h = l.length; t < h; ++t) this._ += arguments[t] + l[t];
}
function m(l) {
  let t = Math.floor(l);
  if (!(t >= 0)) throw new Error(`invalid digits: ${l}`);
  if (t > 15) return E;
  const h = 10 ** t;
  return function (i) {
    this._ += i[0];
    for (let s = 1, _ = i.length; s < _; ++s)
      this._ += Math.round(arguments[s] * h) / h + i[s];
  };
}
class q {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? E : m(t));
  }
  moveTo(t, h) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +h)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, h) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +h)}`;
  }
  quadraticCurveTo(t, h, i, s) {
    this._append`Q${+t},${+h},${(this._x1 = +i)},${(this._y1 = +s)}`;
  }
  bezierCurveTo(t, h, i, s, _, n) {
    this
      ._append`C${+t},${+h},${+i},${+s},${(this._x1 = +_)},${(this._y1 = +n)}`;
  }
  arcTo(t, h, i, s, _) {
    if (((t = +t), (h = +h), (i = +i), (s = +s), (_ = +_), _ < 0))
      throw new Error(`negative radius: ${_}`);
    let n = this._x1,
      u = this._y1,
      o = i - t,
      a = s - h,
      e = n - t,
      p = u - h,
      $ = e * e + p * p;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = h)}`;
    else if ($ > d)
      if (!(Math.abs(p * o - a * e) > d) || !_)
        this._append`L${(this._x1 = t)},${(this._y1 = h)}`;
      else {
        let f = i - n,
          M = s - u,
          y = o * o + a * a,
          L = f * f + M * M,
          v = Math.sqrt(y),
          b = Math.sqrt($),
          T = _ * Math.tan((x - Math.acos((y + $ - L) / (2 * v * b))) / 2),
          r = T / b,
          A = T / v;
        Math.abs(r - 1) > d && this._append`L${t + r * e},${h + r * p}`,
          this
            ._append`A${_},${_},0,0,${+(p * f > e * M)},${(this._x1 = t + A * o)},${(this._y1 = h + A * a)}`;
      }
  }
  arc(t, h, i, s, _, n) {
    if (((t = +t), (h = +h), (i = +i), (n = !!n), i < 0))
      throw new Error(`negative radius: ${i}`);
    let u = i * Math.cos(s),
      o = i * Math.sin(s),
      a = t + u,
      e = h + o,
      p = 1 ^ n,
      $ = n ? s - _ : _ - s;
    this._x1 === null
      ? this._append`M${a},${e}`
      : (Math.abs(this._x1 - a) > d || Math.abs(this._y1 - e) > d) &&
        this._append`L${a},${e}`,
      i &&
        ($ < 0 && ($ = ($ % c) + c),
        $ > P
          ? this
              ._append`A${i},${i},0,1,${p},${t - u},${h - o}A${i},${i},0,1,${p},${(this._x1 = a)},${(this._y1 = e)}`
          : $ > d &&
            this
              ._append`A${i},${i},0,${+($ >= x)},${p},${(this._x1 = t + i * Math.cos(_))},${(this._y1 = h + i * Math.sin(_))}`);
  }
  rect(t, h, i, s) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +h)}h${(i = +i)}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
export { q as P };
