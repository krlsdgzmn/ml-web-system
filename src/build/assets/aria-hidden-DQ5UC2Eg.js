var S = function (r) {
    if (typeof document > "u") return null;
    var u = Array.isArray(r) ? r[0] : r;
    return u.ownerDocument.body;
  },
  f = new WeakMap(),
  v = new WeakMap(),
  p = {},
  h = 0,
  W = function (r) {
    return r && (r.host || W(r.parentNode));
  },
  D = function (r, u) {
    return u
      .map(function (e) {
        if (r.contains(e)) return e;
        var n = W(e);
        return n && r.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              e,
              "in not contained inside",
              r,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  E = function (r, u, e, n) {
    var i = D(u, Array.isArray(r) ? r : [r]);
    p[e] || (p[e] = new WeakMap());
    var s = p[e],
      l = [],
      o = new Set(),
      b = new Set(i),
      y = function (t) {
        !t || o.has(t) || (o.add(t), y(t.parentNode));
      };
    i.forEach(y);
    var A = function (t) {
      !t ||
        b.has(t) ||
        Array.prototype.forEach.call(t.children, function (a) {
          if (o.has(a)) A(a);
          else
            try {
              var c = a.getAttribute(n),
                w = c !== null && c !== "false",
                d = (f.get(a) || 0) + 1,
                M = (s.get(a) || 0) + 1;
              f.set(a, d),
                s.set(a, M),
                l.push(a),
                d === 1 && w && v.set(a, !0),
                M === 1 && a.setAttribute(e, "true"),
                w || a.setAttribute(n, "true");
            } catch (k) {
              console.error("aria-hidden: cannot operate on ", a, k);
            }
        });
    };
    return (
      A(u),
      o.clear(),
      h++,
      function () {
        l.forEach(function (t) {
          var a = f.get(t) - 1,
            c = s.get(t) - 1;
          f.set(t, a),
            s.set(t, c),
            a || (v.has(t) || t.removeAttribute(n), v.delete(t)),
            c || t.removeAttribute(e);
        }),
          h--,
          h ||
            ((f = new WeakMap()),
            (f = new WeakMap()),
            (v = new WeakMap()),
            (p = {}));
      }
    );
  },
  C = function (r, u, e) {
    e === void 0 && (e = "data-aria-hidden");
    var n = Array.from(Array.isArray(r) ? r : [r]),
      i = S(r);
    return i
      ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))),
        E(n, i, e, "aria-hidden"))
      : function () {
          return null;
        };
  };
export { C as h };
