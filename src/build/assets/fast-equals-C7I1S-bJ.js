var x = Object.getOwnPropertyNames,
  G = Object.getOwnPropertySymbols,
  B = Object.prototype.hasOwnProperty;
function O(r, e) {
  return function (t, n, a) {
    return r(t, n, a) && e(t, n, a);
  };
}
function d(r) {
  return function (u, t, n) {
    if (!u || !t || typeof u != "object" || typeof t != "object")
      return r(u, t, n);
    var a = n.cache,
      l = a.get(u),
      c = a.get(t);
    if (l && c) return l === t && c === u;
    a.set(u, t), a.set(t, u);
    var f = r(u, t, n);
    return a.delete(u), a.delete(t), f;
  };
}
function A(r) {
  return x(r).concat(G(r));
}
var $ =
  Object.hasOwn ||
  function (r, e) {
    return B.call(r, e);
  };
function y(r, e) {
  return r || e ? r === e : r === e || (r !== r && e !== e);
}
var P = "_owner",
  j = Object.getOwnPropertyDescriptor,
  w = Object.keys;
function D(r, e, u) {
  var t = r.length;
  if (e.length !== t) return !1;
  for (; t-- > 0; ) if (!u.equals(r[t], e[t], t, t, r, e, u)) return !1;
  return !0;
}
function M(r, e) {
  return y(r.getTime(), e.getTime());
}
function S(r, e, u) {
  if (r.size !== e.size) return !1;
  for (var t = {}, n = r.entries(), a = 0, l, c; (l = n.next()) && !l.done; ) {
    for (var f = e.entries(), p = !1, i = 0; (c = f.next()) && !c.done; ) {
      var o = l.value,
        s = o[0],
        E = o[1],
        v = c.value,
        m = v[0],
        R = v[1];
      !p &&
        !t[i] &&
        (p = u.equals(s, m, a, i, r, e, u) && u.equals(E, R, s, m, r, e, u)) &&
        (t[i] = !0),
        i++;
    }
    if (!p) return !1;
    a++;
  }
  return !0;
}
function k(r, e, u) {
  var t = w(r),
    n = t.length;
  if (w(e).length !== n) return !1;
  for (var a; n-- > 0; )
    if (
      ((a = t[n]),
      (a === P && (r.$$typeof || e.$$typeof) && r.$$typeof !== e.$$typeof) ||
        !$(e, a) ||
        !u.equals(r[a], e[a], a, a, r, e, u))
    )
      return !1;
  return !0;
}
function g(r, e, u) {
  var t = A(r),
    n = t.length;
  if (A(e).length !== n) return !1;
  for (var a, l, c; n-- > 0; )
    if (
      ((a = t[n]),
      (a === P && (r.$$typeof || e.$$typeof) && r.$$typeof !== e.$$typeof) ||
        !$(e, a) ||
        !u.equals(r[a], e[a], a, a, r, e, u) ||
        ((l = j(r, a)),
        (c = j(e, a)),
        (l || c) &&
          (!l ||
            !c ||
            l.configurable !== c.configurable ||
            l.enumerable !== c.enumerable ||
            l.writable !== c.writable)))
    )
      return !1;
  return !0;
}
function I(r, e) {
  return y(r.valueOf(), e.valueOf());
}
function N(r, e) {
  return r.source === e.source && r.flags === e.flags;
}
function T(r, e, u) {
  if (r.size !== e.size) return !1;
  for (var t = {}, n = r.values(), a, l; (a = n.next()) && !a.done; ) {
    for (var c = e.values(), f = !1, p = 0; (l = c.next()) && !l.done; )
      !f &&
        !t[p] &&
        (f = u.equals(a.value, l.value, a.value, l.value, r, e, u)) &&
        (t[p] = !0),
        p++;
    if (!f) return !1;
  }
  return !0;
}
function W(r, e) {
  var u = r.length;
  if (e.length !== u) return !1;
  for (; u-- > 0; ) if (r[u] !== e[u]) return !1;
  return !0;
}
var z = "[object Arguments]",
  _ = "[object Boolean]",
  V = "[object Date]",
  U = "[object Map]",
  J = "[object Number]",
  L = "[object Object]",
  X = "[object RegExp]",
  Z = "[object Set]",
  F = "[object String]",
  H = Array.isArray,
  h =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  C = Object.assign,
  K = Object.prototype.toString.call.bind(Object.prototype.toString);
function Q(r) {
  var e = r.areArraysEqual,
    u = r.areDatesEqual,
    t = r.areMapsEqual,
    n = r.areObjectsEqual,
    a = r.arePrimitiveWrappersEqual,
    l = r.areRegExpsEqual,
    c = r.areSetsEqual,
    f = r.areTypedArraysEqual;
  return function (i, o, s) {
    if (i === o) return !0;
    if (i == null || o == null || typeof i != "object" || typeof o != "object")
      return i !== i && o !== o;
    var E = i.constructor;
    if (E !== o.constructor) return !1;
    if (E === Object) return n(i, o, s);
    if (H(i)) return e(i, o, s);
    if (h != null && h(i)) return f(i, o, s);
    if (E === Date) return u(i, o, s);
    if (E === RegExp) return l(i, o, s);
    if (E === Map) return t(i, o, s);
    if (E === Set) return c(i, o, s);
    var v = K(i);
    return v === V
      ? u(i, o, s)
      : v === X
        ? l(i, o, s)
        : v === U
          ? t(i, o, s)
          : v === Z
            ? c(i, o, s)
            : v === L
              ? typeof i.then != "function" &&
                typeof o.then != "function" &&
                n(i, o, s)
              : v === z
                ? n(i, o, s)
                : v === _ || v === J || v === F
                  ? a(i, o, s)
                  : !1;
  };
}
function Y(r) {
  var e = r.circular,
    u = r.createCustomConfig,
    t = r.strict,
    n = {
      areArraysEqual: t ? g : D,
      areDatesEqual: M,
      areMapsEqual: t ? O(S, g) : S,
      areObjectsEqual: t ? g : k,
      arePrimitiveWrappersEqual: I,
      areRegExpsEqual: N,
      areSetsEqual: t ? O(T, g) : T,
      areTypedArraysEqual: t ? g : W,
    };
  if ((u && (n = C({}, n, u(n))), e)) {
    var a = d(n.areArraysEqual),
      l = d(n.areMapsEqual),
      c = d(n.areObjectsEqual),
      f = d(n.areSetsEqual);
    n = C({}, n, {
      areArraysEqual: a,
      areMapsEqual: l,
      areObjectsEqual: c,
      areSetsEqual: f,
    });
  }
  return n;
}
function b(r) {
  return function (e, u, t, n, a, l, c) {
    return r(e, u, c);
  };
}
function rr(r) {
  var e = r.circular,
    u = r.comparator,
    t = r.createState,
    n = r.equals,
    a = r.strict;
  if (t)
    return function (f, p) {
      var i = t(),
        o = i.cache,
        s = o === void 0 ? (e ? new WeakMap() : void 0) : o,
        E = i.meta;
      return u(f, p, { cache: s, equals: n, meta: E, strict: a });
    };
  if (e)
    return function (f, p) {
      return u(f, p, {
        cache: new WeakMap(),
        equals: n,
        meta: void 0,
        strict: a,
      });
    };
  var l = { cache: void 0, equals: n, meta: void 0, strict: a };
  return function (f, p) {
    return u(f, p, l);
  };
}
var er = q();
q({ strict: !0 });
q({ circular: !0 });
q({ circular: !0, strict: !0 });
q({
  createInternalComparator: function () {
    return y;
  },
});
q({
  strict: !0,
  createInternalComparator: function () {
    return y;
  },
});
q({
  circular: !0,
  createInternalComparator: function () {
    return y;
  },
});
q({
  circular: !0,
  createInternalComparator: function () {
    return y;
  },
  strict: !0,
});
function q(r) {
  r === void 0 && (r = {});
  var e = r.circular,
    u = e === void 0 ? !1 : e,
    t = r.createInternalComparator,
    n = r.createState,
    a = r.strict,
    l = a === void 0 ? !1 : a,
    c = Y(r),
    f = Q(c),
    p = t ? t(f) : b(f);
  return rr({
    circular: u,
    comparator: f,
    createState: n,
    equals: p,
    strict: l,
  });
}
export { er as d };
