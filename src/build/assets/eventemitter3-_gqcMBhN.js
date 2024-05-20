var L =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function E(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default")
    ? v.default
    : v;
}
var g = { exports: {} };
(function (v) {
  var b = Object.prototype.hasOwnProperty,
    u = "~";
  function y() {}
  Object.create &&
    ((y.prototype = Object.create(null)), new y().__proto__ || (u = !1));
  function m(s, t, n) {
    (this.fn = s), (this.context = t), (this.once = n || !1);
  }
  function w(s, t, n, r, c) {
    if (typeof n != "function")
      throw new TypeError("The listener must be a function");
    var l = new m(n, r || s, c),
      o = u ? u + t : t;
    return (
      s._events[o]
        ? s._events[o].fn
          ? (s._events[o] = [s._events[o], l])
          : s._events[o].push(l)
        : ((s._events[o] = l), s._eventsCount++),
      s
    );
  }
  function d(s, t) {
    --s._eventsCount === 0 ? (s._events = new y()) : delete s._events[t];
  }
  function f() {
    (this._events = new y()), (this._eventsCount = 0);
  }
  (f.prototype.eventNames = function () {
    var t = [],
      n,
      r;
    if (this._eventsCount === 0) return t;
    for (r in (n = this._events)) b.call(n, r) && t.push(u ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? t.concat(Object.getOwnPropertySymbols(n))
      : t;
  }),
    (f.prototype.listeners = function (t) {
      var n = u ? u + t : t,
        r = this._events[n];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var c = 0, l = r.length, o = new Array(l); c < l; c++)
        o[c] = r[c].fn;
      return o;
    }),
    (f.prototype.listenerCount = function (t) {
      var n = u ? u + t : t,
        r = this._events[n];
      return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (f.prototype.emit = function (t, n, r, c, l, o) {
      var a = u ? u + t : t;
      if (!this._events[a]) return !1;
      var e = this._events[a],
        p = arguments.length,
        h,
        i;
      if (e.fn) {
        switch ((e.once && this.removeListener(t, e.fn, void 0, !0), p)) {
          case 1:
            return e.fn.call(e.context), !0;
          case 2:
            return e.fn.call(e.context, n), !0;
          case 3:
            return e.fn.call(e.context, n, r), !0;
          case 4:
            return e.fn.call(e.context, n, r, c), !0;
          case 5:
            return e.fn.call(e.context, n, r, c, l), !0;
          case 6:
            return e.fn.call(e.context, n, r, c, l, o), !0;
        }
        for (i = 1, h = new Array(p - 1); i < p; i++) h[i - 1] = arguments[i];
        e.fn.apply(e.context, h);
      } else {
        var x = e.length,
          _;
        for (i = 0; i < x; i++)
          switch (
            (e[i].once && this.removeListener(t, e[i].fn, void 0, !0), p)
          ) {
            case 1:
              e[i].fn.call(e[i].context);
              break;
            case 2:
              e[i].fn.call(e[i].context, n);
              break;
            case 3:
              e[i].fn.call(e[i].context, n, r);
              break;
            case 4:
              e[i].fn.call(e[i].context, n, r, c);
              break;
            default:
              if (!h)
                for (_ = 1, h = new Array(p - 1); _ < p; _++)
                  h[_ - 1] = arguments[_];
              e[i].fn.apply(e[i].context, h);
          }
      }
      return !0;
    }),
    (f.prototype.on = function (t, n, r) {
      return w(this, t, n, r, !1);
    }),
    (f.prototype.once = function (t, n, r) {
      return w(this, t, n, r, !0);
    }),
    (f.prototype.removeListener = function (t, n, r, c) {
      var l = u ? u + t : t;
      if (!this._events[l]) return this;
      if (!n) return d(this, l), this;
      var o = this._events[l];
      if (o.fn)
        o.fn === n && (!c || o.once) && (!r || o.context === r) && d(this, l);
      else {
        for (var a = 0, e = [], p = o.length; a < p; a++)
          (o[a].fn !== n || (c && !o[a].once) || (r && o[a].context !== r)) &&
            e.push(o[a]);
        e.length ? (this._events[l] = e.length === 1 ? e[0] : e) : d(this, l);
      }
      return this;
    }),
    (f.prototype.removeAllListeners = function (t) {
      var n;
      return (
        t
          ? ((n = u ? u + t : t), this._events[n] && d(this, n))
          : ((this._events = new y()), (this._eventsCount = 0)),
        this
      );
    }),
    (f.prototype.off = f.prototype.removeListener),
    (f.prototype.addListener = f.prototype.on),
    (f.prefixed = u),
    (f.EventEmitter = f),
    (v.exports = f);
})(g);
var O = g.exports;
const C = E(O);
export { C as E, L as c, E as g };
