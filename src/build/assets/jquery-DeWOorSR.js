import { c as Fr, g as Wr } from "./eventemitter3-_gqcMBhN.js";
var kn = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (jn) {
  (function (j, Je) {
    jn.exports = j.document
      ? Je(j, !0)
      : function (U) {
          if (!U.document)
            throw new Error("jQuery requires a window with a document");
          return Je(U);
        };
  })(typeof window < "u" ? window : Fr, function (j, Je) {
    var U = [],
      Mt = Object.getPrototypeOf,
      Z = U.slice,
      Rt = U.flat
        ? function (e) {
            return U.flat.call(e);
          }
        : function (e) {
            return U.concat.apply([], e);
          },
      Ke = U.push,
      de = U.indexOf,
      Ze = {},
      It = Ze.toString,
      Ie = Ze.hasOwnProperty,
      _t = Ie.toString,
      qn = _t.call(Object),
      q = {},
      L = function (t) {
        return (
          typeof t == "function" &&
          typeof t.nodeType != "number" &&
          typeof t.item != "function"
        );
      },
      De = function (t) {
        return t != null && t === t.window;
      },
      k = j.document,
      Ln = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function Ft(e, t, n) {
      n = n || k;
      var r,
        o,
        u = n.createElement("script");
      if (((u.text = e), t))
        for (r in Ln)
          (o = t[r] || (t.getAttribute && t.getAttribute(r))),
            o && u.setAttribute(r, o);
      n.head.appendChild(u).parentNode.removeChild(u);
    }
    function Ae(e) {
      return e == null
        ? e + ""
        : typeof e == "object" || typeof e == "function"
          ? Ze[It.call(e)] || "object"
          : typeof e;
    }
    var Wt = "3.7.1",
      Hn = /HTML$/i,
      i = function (e, t) {
        return new i.fn.init(e, t);
      };
    (i.fn = i.prototype =
      {
        jquery: Wt,
        constructor: i,
        length: 0,
        toArray: function () {
          return Z.call(this);
        },
        get: function (e) {
          return e == null
            ? Z.call(this)
            : e < 0
              ? this[e + this.length]
              : this[e];
        },
        pushStack: function (e) {
          var t = i.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return i.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            i.map(this, function (t, n) {
              return e.call(t, n, t);
            }),
          );
        },
        slice: function () {
          return this.pushStack(Z.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return (t + 1) % 2;
            }),
          );
        },
        odd: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return t % 2;
            }),
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Ke,
        sort: U.sort,
        splice: U.splice,
      }),
      (i.extend = i.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            o,
            u,
            a = arguments[0] || {},
            c = 1,
            f = arguments.length,
            d = !1;
          for (
            typeof a == "boolean" && ((d = a), (a = arguments[c] || {}), c++),
              typeof a != "object" && !L(a) && (a = {}),
              c === f && ((a = this), c--);
            c < f;
            c++
          )
            if ((e = arguments[c]) != null)
              for (t in e)
                (r = e[t]),
                  !(t === "__proto__" || a === r) &&
                    (d && r && (i.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = a[t]),
                        o && !Array.isArray(n)
                          ? (u = [])
                          : !o && !i.isPlainObject(n)
                            ? (u = {})
                            : (u = n),
                        (o = !1),
                        (a[t] = i.extend(d, u, r)))
                      : r !== void 0 && (a[t] = r));
          return a;
        }),
      i.extend({
        expando: "jQuery" + (Wt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !e || It.call(e) !== "[object Object]"
            ? !1
            : ((t = Mt(e)),
              t
                ? ((n = Ie.call(t, "constructor") && t.constructor),
                  typeof n == "function" && _t.call(n) === qn)
                : !0);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          Ft(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (lt(e))
            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
          else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
          return e;
        },
        text: function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (!o) for (; (t = e[r++]); ) n += i.text(t);
          return o === 1 || o === 11
            ? e.textContent
            : o === 9
              ? e.documentElement.textContent
              : o === 3 || o === 4
                ? e.nodeValue
                : n;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            e != null &&
              (lt(Object(e))
                ? i.merge(n, typeof e == "string" ? [e] : e)
                : Ke.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return t == null ? -1 : de.call(t, e, n);
        },
        isXMLDoc: function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Hn.test(t || (n && n.nodeName) || "HTML");
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++)
            e[o++] = t[r];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var r, o = [], u = 0, a = e.length, c = !n; u < a; u++)
            (r = !t(e[u], u)), r !== c && o.push(e[u]);
          return o;
        },
        map: function (e, t, n) {
          var r,
            o,
            u = 0,
            a = [];
          if (lt(e))
            for (r = e.length; u < r; u++)
              (o = t(e[u], u, n)), o != null && a.push(o);
          else for (u in e) (o = t(e[u], u, n)), o != null && a.push(o);
          return Rt(a);
        },
        guid: 1,
        support: q,
      }),
      typeof Symbol == "function" &&
        (i.fn[Symbol.iterator] = U[Symbol.iterator]),
      i.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " ",
        ),
        function (e, t) {
          Ze["[object " + t + "]"] = t.toLowerCase();
        },
      );
    function lt(e) {
      var t = !!e && "length" in e && e.length,
        n = Ae(e);
      return L(e) || De(e)
        ? !1
        : n === "array" ||
            t === 0 ||
            (typeof t == "number" && t > 0 && t - 1 in e);
    }
    function $(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var On = U.pop,
      Pn = U.sort,
      Mn = U.splice,
      F = "[\\x20\\t\\r\\n\\f]",
      _e = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g");
    i.contains = function (e, t) {
      var n = t && t.parentNode;
      return (
        e === n ||
        !!(
          n &&
          n.nodeType === 1 &&
          (e.contains
            ? e.contains(n)
            : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16)
        )
      );
    };
    var Rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function In(e, t) {
      return t
        ? e === "\0"
          ? "�"
          : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
        : "\\" + e;
    }
    i.escapeSelector = function (e) {
      return (e + "").replace(Rn, In);
    };
    var pe = k,
      dt = Ke;
    (function () {
      var e,
        t,
        n,
        r,
        o,
        u = dt,
        a,
        c,
        f,
        d,
        y,
        x = i.expando,
        h = 0,
        b = 0,
        A = at(),
        R = at(),
        H = at(),
        V = at(),
        z = function (s, l) {
          return s === l && (o = !0), 0;
        },
        ae =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        se =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          F +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        M =
          "\\[" +
          F +
          "*(" +
          se +
          ")(?:" +
          F +
          "*([*^$|!~]?=)" +
          F +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          se +
          "))|)" +
          F +
          "*\\]",
        Se =
          ":(" +
          se +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          M +
          ")*)|.*)\\)|)",
        I = new RegExp(F + "+", "g"),
        B = new RegExp("^" + F + "*," + F + "*"),
        Ge = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        kt = new RegExp(F + "|>"),
        fe = new RegExp(Se),
        Qe = new RegExp("^" + se + "$"),
        ce = {
          ID: new RegExp("^#(" + se + ")"),
          CLASS: new RegExp("^\\.(" + se + ")"),
          TAG: new RegExp("^(" + se + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + Se),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              F +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              F +
              "*(?:([+-]|)" +
              F +
              "*(\\d+)|))" +
              F +
              "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + ae + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              F +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              F +
              "*((?:-\\d)?\\d*)" +
              F +
              "*\\)|)(?=[^-]|$)",
            "i",
          ),
        },
        xe = /^(?:input|select|textarea|button)$/i,
        be = /^h\d$/i,
        te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        jt = /[+~]/,
        ye = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
          "g",
        ),
        ve = function (s, l) {
          var p = "0x" + s.slice(1) - 65536;
          return (
            l ||
            (p < 0
              ? String.fromCharCode(p + 65536)
              : String.fromCharCode((p >> 10) | 55296, (p & 1023) | 56320))
          );
        },
        Hr = function () {
          me();
        },
        Or = ft(
          function (s) {
            return s.disabled === !0 && $(s, "fieldset");
          },
          { dir: "parentNode", next: "legend" },
        );
      function Pr() {
        try {
          return a.activeElement;
        } catch {}
      }
      try {
        u.apply((U = Z.call(pe.childNodes)), pe.childNodes),
          U[pe.childNodes.length].nodeType;
      } catch {
        u = {
          apply: function (l, p) {
            dt.apply(l, Z.call(p));
          },
          call: function (l) {
            dt.apply(l, Z.call(arguments, 1));
          },
        };
      }
      function _(s, l, p, g) {
        var v,
          m,
          T,
          w,
          C,
          O,
          D,
          N = l && l.ownerDocument,
          P = l ? l.nodeType : 9;
        if (
          ((p = p || []),
          typeof s != "string" || !s || (P !== 1 && P !== 9 && P !== 11))
        )
          return p;
        if (!g && (me(l), (l = l || a), f)) {
          if (P !== 11 && (C = te.exec(s)))
            if ((v = C[1])) {
              if (P === 9)
                if ((T = l.getElementById(v))) {
                  if (T.id === v) return u.call(p, T), p;
                } else return p;
              else if (
                N &&
                (T = N.getElementById(v)) &&
                _.contains(l, T) &&
                T.id === v
              )
                return u.call(p, T), p;
            } else {
              if (C[2]) return u.apply(p, l.getElementsByTagName(s)), p;
              if ((v = C[3]) && l.getElementsByClassName)
                return u.apply(p, l.getElementsByClassName(v)), p;
            }
          if (!V[s + " "] && (!d || !d.test(s))) {
            if (((D = s), (N = l), P === 1 && (kt.test(s) || Ge.test(s)))) {
              for (
                N = (jt.test(s) && qt(l.parentNode)) || l,
                  (N != l || !q.scope) &&
                    ((w = l.getAttribute("id"))
                      ? (w = i.escapeSelector(w))
                      : l.setAttribute("id", (w = x))),
                  O = Ye(s),
                  m = O.length;
                m--;

              )
                O[m] = (w ? "#" + w : ":scope") + " " + st(O[m]);
              D = O.join(",");
            }
            try {
              return u.apply(p, N.querySelectorAll(D)), p;
            } catch {
              V(s, !0);
            } finally {
              w === x && l.removeAttribute("id");
            }
          }
        }
        return Nn(s.replace(_e, "$1"), l, p, g);
      }
      function at() {
        var s = [];
        function l(p, g) {
          return (
            s.push(p + " ") > t.cacheLength && delete l[s.shift()],
            (l[p + " "] = g)
          );
        }
        return l;
      }
      function ie(s) {
        return (s[x] = !0), s;
      }
      function Me(s) {
        var l = a.createElement("fieldset");
        try {
          return !!s(l);
        } catch {
          return !1;
        } finally {
          l.parentNode && l.parentNode.removeChild(l), (l = null);
        }
      }
      function Mr(s) {
        return function (l) {
          return $(l, "input") && l.type === s;
        };
      }
      function Rr(s) {
        return function (l) {
          return ($(l, "input") || $(l, "button")) && l.type === s;
        };
      }
      function Dn(s) {
        return function (l) {
          return "form" in l
            ? l.parentNode && l.disabled === !1
              ? "label" in l
                ? "label" in l.parentNode
                  ? l.parentNode.disabled === s
                  : l.disabled === s
                : l.isDisabled === s || (l.isDisabled !== !s && Or(l) === s)
              : l.disabled === s
            : "label" in l
              ? l.disabled === s
              : !1;
        };
      }
      function Ee(s) {
        return ie(function (l) {
          return (
            (l = +l),
            ie(function (p, g) {
              for (var v, m = s([], p.length, l), T = m.length; T--; )
                p[(v = m[T])] && (p[v] = !(g[v] = p[v]));
            })
          );
        });
      }
      function qt(s) {
        return s && typeof s.getElementsByTagName < "u" && s;
      }
      function me(s) {
        var l,
          p = s ? s.ownerDocument || s : pe;
        return (
          p == a ||
            p.nodeType !== 9 ||
            !p.documentElement ||
            ((a = p),
            (c = a.documentElement),
            (f = !i.isXMLDoc(a)),
            (y = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
            c.msMatchesSelector &&
              pe != a &&
              (l = a.defaultView) &&
              l.top !== l &&
              l.addEventListener("unload", Hr),
            (q.getById = Me(function (g) {
              return (
                (c.appendChild(g).id = i.expando),
                !a.getElementsByName || !a.getElementsByName(i.expando).length
              );
            })),
            (q.disconnectedMatch = Me(function (g) {
              return y.call(g, "*");
            })),
            (q.scope = Me(function () {
              return a.querySelectorAll(":scope");
            })),
            (q.cssHas = Me(function () {
              try {
                return a.querySelector(":has(*,:jqfake)"), !1;
              } catch {
                return !0;
              }
            })),
            q.getById
              ? ((t.filter.ID = function (g) {
                  var v = g.replace(ye, ve);
                  return function (m) {
                    return m.getAttribute("id") === v;
                  };
                }),
                (t.find.ID = function (g, v) {
                  if (typeof v.getElementById < "u" && f) {
                    var m = v.getElementById(g);
                    return m ? [m] : [];
                  }
                }))
              : ((t.filter.ID = function (g) {
                  var v = g.replace(ye, ve);
                  return function (m) {
                    var T =
                      typeof m.getAttributeNode < "u" &&
                      m.getAttributeNode("id");
                    return T && T.value === v;
                  };
                }),
                (t.find.ID = function (g, v) {
                  if (typeof v.getElementById < "u" && f) {
                    var m,
                      T,
                      w,
                      C = v.getElementById(g);
                    if (C) {
                      if (((m = C.getAttributeNode("id")), m && m.value === g))
                        return [C];
                      for (w = v.getElementsByName(g), T = 0; (C = w[T++]); )
                        if (
                          ((m = C.getAttributeNode("id")), m && m.value === g)
                        )
                          return [C];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = function (g, v) {
              return typeof v.getElementsByTagName < "u"
                ? v.getElementsByTagName(g)
                : v.querySelectorAll(g);
            }),
            (t.find.CLASS = function (g, v) {
              if (typeof v.getElementsByClassName < "u" && f)
                return v.getElementsByClassName(g);
            }),
            (d = []),
            Me(function (g) {
              var v;
              (c.appendChild(g).innerHTML =
                "<a id='" +
                x +
                "' href='' disabled='disabled'></a><select id='" +
                x +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                g.querySelectorAll("[selected]").length ||
                  d.push("\\[" + F + "*(?:value|" + ae + ")"),
                g.querySelectorAll("[id~=" + x + "-]").length || d.push("~="),
                g.querySelectorAll("a#" + x + "+*").length ||
                  d.push(".#.+[+~]"),
                g.querySelectorAll(":checked").length || d.push(":checked"),
                (v = a.createElement("input")),
                v.setAttribute("type", "hidden"),
                g.appendChild(v).setAttribute("name", "D"),
                (c.appendChild(g).disabled = !0),
                g.querySelectorAll(":disabled").length !== 2 &&
                  d.push(":enabled", ":disabled"),
                (v = a.createElement("input")),
                v.setAttribute("name", ""),
                g.appendChild(v),
                g.querySelectorAll("[name='']").length ||
                  d.push("\\[" + F + "*name" + F + "*=" + F + `*(?:''|"")`);
            }),
            q.cssHas || d.push(":has"),
            (d = d.length && new RegExp(d.join("|"))),
            (z = function (g, v) {
              if (g === v) return (o = !0), 0;
              var m = !g.compareDocumentPosition - !v.compareDocumentPosition;
              return (
                m ||
                ((m =
                  (g.ownerDocument || g) == (v.ownerDocument || v)
                    ? g.compareDocumentPosition(v)
                    : 1),
                m & 1 || (!q.sortDetached && v.compareDocumentPosition(g) === m)
                  ? g === a || (g.ownerDocument == pe && _.contains(pe, g))
                    ? -1
                    : v === a || (v.ownerDocument == pe && _.contains(pe, v))
                      ? 1
                      : r
                        ? de.call(r, g) - de.call(r, v)
                        : 0
                  : m & 4
                    ? -1
                    : 1)
              );
            })),
          a
        );
      }
      (_.matches = function (s, l) {
        return _(s, null, null, l);
      }),
        (_.matchesSelector = function (s, l) {
          if ((me(s), f && !V[l + " "] && (!d || !d.test(l))))
            try {
              var p = y.call(s, l);
              if (
                p ||
                q.disconnectedMatch ||
                (s.document && s.document.nodeType !== 11)
              )
                return p;
            } catch {
              V(l, !0);
            }
          return _(l, a, null, [s]).length > 0;
        }),
        (_.contains = function (s, l) {
          return (s.ownerDocument || s) != a && me(s), i.contains(s, l);
        }),
        (_.attr = function (s, l) {
          (s.ownerDocument || s) != a && me(s);
          var p = t.attrHandle[l.toLowerCase()],
            g =
              p && Ie.call(t.attrHandle, l.toLowerCase())
                ? p(s, l, !f)
                : void 0;
          return g !== void 0 ? g : s.getAttribute(l);
        }),
        (_.error = function (s) {
          throw new Error("Syntax error, unrecognized expression: " + s);
        }),
        (i.uniqueSort = function (s) {
          var l,
            p = [],
            g = 0,
            v = 0;
          if (
            ((o = !q.sortStable),
            (r = !q.sortStable && Z.call(s, 0)),
            Pn.call(s, z),
            o)
          ) {
            for (; (l = s[v++]); ) l === s[v] && (g = p.push(v));
            for (; g--; ) Mn.call(s, p[g], 1);
          }
          return (r = null), s;
        }),
        (i.fn.uniqueSort = function () {
          return this.pushStack(i.uniqueSort(Z.apply(this)));
        }),
        (t = i.expr =
          {
            cacheLength: 50,
            createPseudo: ie,
            match: ce,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (s) {
                return (
                  (s[1] = s[1].replace(ye, ve)),
                  (s[3] = (s[3] || s[4] || s[5] || "").replace(ye, ve)),
                  s[2] === "~=" && (s[3] = " " + s[3] + " "),
                  s.slice(0, 4)
                );
              },
              CHILD: function (s) {
                return (
                  (s[1] = s[1].toLowerCase()),
                  s[1].slice(0, 3) === "nth"
                    ? (s[3] || _.error(s[0]),
                      (s[4] = +(s[4]
                        ? s[5] + (s[6] || 1)
                        : 2 * (s[3] === "even" || s[3] === "odd"))),
                      (s[5] = +(s[7] + s[8] || s[3] === "odd")))
                    : s[3] && _.error(s[0]),
                  s
                );
              },
              PSEUDO: function (s) {
                var l,
                  p = !s[6] && s[2];
                return ce.CHILD.test(s[0])
                  ? null
                  : (s[3]
                      ? (s[2] = s[4] || s[5] || "")
                      : p &&
                        fe.test(p) &&
                        (l = Ye(p, !0)) &&
                        (l = p.indexOf(")", p.length - l) - p.length) &&
                        ((s[0] = s[0].slice(0, l)), (s[2] = p.slice(0, l))),
                    s.slice(0, 3));
              },
            },
            filter: {
              TAG: function (s) {
                var l = s.replace(ye, ve).toLowerCase();
                return s === "*"
                  ? function () {
                      return !0;
                    }
                  : function (p) {
                      return $(p, l);
                    };
              },
              CLASS: function (s) {
                var l = A[s + " "];
                return (
                  l ||
                  ((l = new RegExp("(^|" + F + ")" + s + "(" + F + "|$)")) &&
                    A(s, function (p) {
                      return l.test(
                        (typeof p.className == "string" && p.className) ||
                          (typeof p.getAttribute < "u" &&
                            p.getAttribute("class")) ||
                          "",
                      );
                    }))
                );
              },
              ATTR: function (s, l, p) {
                return function (g) {
                  var v = _.attr(g, s);
                  return v == null
                    ? l === "!="
                    : l
                      ? ((v += ""),
                        l === "="
                          ? v === p
                          : l === "!="
                            ? v !== p
                            : l === "^="
                              ? p && v.indexOf(p) === 0
                              : l === "*="
                                ? p && v.indexOf(p) > -1
                                : l === "$="
                                  ? p && v.slice(-p.length) === p
                                  : l === "~="
                                    ? (" " + v.replace(I, " ") + " ").indexOf(
                                        p,
                                      ) > -1
                                    : l === "|="
                                      ? v === p ||
                                        v.slice(0, p.length + 1) === p + "-"
                                      : !1)
                      : !0;
                };
              },
              CHILD: function (s, l, p, g, v) {
                var m = s.slice(0, 3) !== "nth",
                  T = s.slice(-4) !== "last",
                  w = l === "of-type";
                return g === 1 && v === 0
                  ? function (C) {
                      return !!C.parentNode;
                    }
                  : function (C, O, D) {
                      var N,
                        P,
                        E,
                        W,
                        K,
                        X = m !== T ? "nextSibling" : "previousSibling",
                        ne = C.parentNode,
                        le = w && C.nodeName.toLowerCase(),
                        Re = !D && !w,
                        G = !1;
                      if (ne) {
                        if (m) {
                          for (; X; ) {
                            for (E = C; (E = E[X]); )
                              if (w ? $(E, le) : E.nodeType === 1) return !1;
                            K = X = s === "only" && !K && "nextSibling";
                          }
                          return !0;
                        }
                        if (
                          ((K = [T ? ne.firstChild : ne.lastChild]), T && Re)
                        ) {
                          for (
                            P = ne[x] || (ne[x] = {}),
                              N = P[s] || [],
                              W = N[0] === h && N[1],
                              G = W && N[2],
                              E = W && ne.childNodes[W];
                            (E = (++W && E && E[X]) || (G = W = 0) || K.pop());

                          )
                            if (E.nodeType === 1 && ++G && E === C) {
                              P[s] = [h, W, G];
                              break;
                            }
                        } else if (
                          (Re &&
                            ((P = C[x] || (C[x] = {})),
                            (N = P[s] || []),
                            (W = N[0] === h && N[1]),
                            (G = W)),
                          G === !1)
                        )
                          for (
                            ;
                            (E =
                              (++W && E && E[X]) || (G = W = 0) || K.pop()) &&
                            !(
                              (w ? $(E, le) : E.nodeType === 1) &&
                              ++G &&
                              (Re &&
                                ((P = E[x] || (E[x] = {})), (P[s] = [h, G])),
                              E === C)
                            );

                          );
                        return (G -= v), G === g || (G % g === 0 && G / g >= 0);
                      }
                    };
              },
              PSEUDO: function (s, l) {
                var p,
                  g =
                    t.pseudos[s] ||
                    t.setFilters[s.toLowerCase()] ||
                    _.error("unsupported pseudo: " + s);
                return g[x]
                  ? g(l)
                  : g.length > 1
                    ? ((p = [s, s, "", l]),
                      t.setFilters.hasOwnProperty(s.toLowerCase())
                        ? ie(function (v, m) {
                            for (var T, w = g(v, l), C = w.length; C--; )
                              (T = de.call(v, w[C])), (v[T] = !(m[T] = w[C]));
                          })
                        : function (v) {
                            return g(v, 0, p);
                          })
                    : g;
              },
            },
            pseudos: {
              not: ie(function (s) {
                var l = [],
                  p = [],
                  g = Pt(s.replace(_e, "$1"));
                return g[x]
                  ? ie(function (v, m, T, w) {
                      for (var C, O = g(v, null, w, []), D = v.length; D--; )
                        (C = O[D]) && (v[D] = !(m[D] = C));
                    })
                  : function (v, m, T) {
                      return (
                        (l[0] = v), g(l, null, T, p), (l[0] = null), !p.pop()
                      );
                    };
              }),
              has: ie(function (s) {
                return function (l) {
                  return _(s, l).length > 0;
                };
              }),
              contains: ie(function (s) {
                return (
                  (s = s.replace(ye, ve)),
                  function (l) {
                    return (l.textContent || i.text(l)).indexOf(s) > -1;
                  }
                );
              }),
              lang: ie(function (s) {
                return (
                  Qe.test(s || "") || _.error("unsupported lang: " + s),
                  (s = s.replace(ye, ve).toLowerCase()),
                  function (l) {
                    var p;
                    do
                      if (
                        (p = f
                          ? l.lang
                          : l.getAttribute("xml:lang") ||
                            l.getAttribute("lang"))
                      )
                        return (
                          (p = p.toLowerCase()),
                          p === s || p.indexOf(s + "-") === 0
                        );
                    while ((l = l.parentNode) && l.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (s) {
                var l = j.location && j.location.hash;
                return l && l.slice(1) === s.id;
              },
              root: function (s) {
                return s === c;
              },
              focus: function (s) {
                return (
                  s === Pr() &&
                  a.hasFocus() &&
                  !!(s.type || s.href || ~s.tabIndex)
                );
              },
              enabled: Dn(!1),
              disabled: Dn(!0),
              checked: function (s) {
                return (
                  ($(s, "input") && !!s.checked) ||
                  ($(s, "option") && !!s.selected)
                );
              },
              selected: function (s) {
                return (
                  s.parentNode && s.parentNode.selectedIndex, s.selected === !0
                );
              },
              empty: function (s) {
                for (s = s.firstChild; s; s = s.nextSibling)
                  if (s.nodeType < 6) return !1;
                return !0;
              },
              parent: function (s) {
                return !t.pseudos.empty(s);
              },
              header: function (s) {
                return be.test(s.nodeName);
              },
              input: function (s) {
                return xe.test(s.nodeName);
              },
              button: function (s) {
                return ($(s, "input") && s.type === "button") || $(s, "button");
              },
              text: function (s) {
                var l;
                return (
                  $(s, "input") &&
                  s.type === "text" &&
                  ((l = s.getAttribute("type")) == null ||
                    l.toLowerCase() === "text")
                );
              },
              first: Ee(function () {
                return [0];
              }),
              last: Ee(function (s, l) {
                return [l - 1];
              }),
              eq: Ee(function (s, l, p) {
                return [p < 0 ? p + l : p];
              }),
              even: Ee(function (s, l) {
                for (var p = 0; p < l; p += 2) s.push(p);
                return s;
              }),
              odd: Ee(function (s, l) {
                for (var p = 1; p < l; p += 2) s.push(p);
                return s;
              }),
              lt: Ee(function (s, l, p) {
                var g;
                for (
                  p < 0 ? (g = p + l) : p > l ? (g = l) : (g = p);
                  --g >= 0;

                )
                  s.push(g);
                return s;
              }),
              gt: Ee(function (s, l, p) {
                for (var g = p < 0 ? p + l : p; ++g < l; ) s.push(g);
                return s;
              }),
            },
          }),
        (t.pseudos.nth = t.pseudos.eq);
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[e] = Mr(e);
      for (e in { submit: !0, reset: !0 }) t.pseudos[e] = Rr(e);
      function An() {}
      (An.prototype = t.filters = t.pseudos), (t.setFilters = new An());
      function Ye(s, l) {
        var p,
          g,
          v,
          m,
          T,
          w,
          C,
          O = R[s + " "];
        if (O) return l ? 0 : O.slice(0);
        for (T = s, w = [], C = t.preFilter; T; ) {
          (!p || (g = B.exec(T))) &&
            (g && (T = T.slice(g[0].length) || T), w.push((v = []))),
            (p = !1),
            (g = Ge.exec(T)) &&
              ((p = g.shift()),
              v.push({ value: p, type: g[0].replace(_e, " ") }),
              (T = T.slice(p.length)));
          for (m in t.filter)
            (g = ce[m].exec(T)) &&
              (!C[m] || (g = C[m](g))) &&
              ((p = g.shift()),
              v.push({ value: p, type: m, matches: g }),
              (T = T.slice(p.length)));
          if (!p) break;
        }
        return l ? T.length : T ? _.error(s) : R(s, w).slice(0);
      }
      function st(s) {
        for (var l = 0, p = s.length, g = ""; l < p; l++) g += s[l].value;
        return g;
      }
      function ft(s, l, p) {
        var g = l.dir,
          v = l.next,
          m = v || g,
          T = p && m === "parentNode",
          w = b++;
        return l.first
          ? function (C, O, D) {
              for (; (C = C[g]); ) if (C.nodeType === 1 || T) return s(C, O, D);
              return !1;
            }
          : function (C, O, D) {
              var N,
                P,
                E = [h, w];
              if (D) {
                for (; (C = C[g]); )
                  if ((C.nodeType === 1 || T) && s(C, O, D)) return !0;
              } else
                for (; (C = C[g]); )
                  if (C.nodeType === 1 || T)
                    if (((P = C[x] || (C[x] = {})), v && $(C, v)))
                      C = C[g] || C;
                    else {
                      if ((N = P[m]) && N[0] === h && N[1] === w)
                        return (E[2] = N[2]);
                      if (((P[m] = E), (E[2] = s(C, O, D)))) return !0;
                    }
              return !1;
            };
      }
      function Lt(s) {
        return s.length > 1
          ? function (l, p, g) {
              for (var v = s.length; v--; ) if (!s[v](l, p, g)) return !1;
              return !0;
            }
          : s[0];
      }
      function Ir(s, l, p) {
        for (var g = 0, v = l.length; g < v; g++) _(s, l[g], p);
        return p;
      }
      function ct(s, l, p, g, v) {
        for (var m, T = [], w = 0, C = s.length, O = l != null; w < C; w++)
          (m = s[w]) && (!p || p(m, g, v)) && (T.push(m), O && l.push(w));
        return T;
      }
      function Ht(s, l, p, g, v, m) {
        return (
          g && !g[x] && (g = Ht(g)),
          v && !v[x] && (v = Ht(v, m)),
          ie(function (T, w, C, O) {
            var D,
              N,
              P,
              E,
              W = [],
              K = [],
              X = w.length,
              ne = T || Ir(l || "*", C.nodeType ? [C] : C, []),
              le = s && (T || !l) ? ct(ne, W, s, C, O) : ne;
            if (
              (p
                ? ((E = v || (T ? s : X || g) ? [] : w), p(le, E, C, O))
                : (E = le),
              g)
            )
              for (D = ct(E, K), g(D, [], C, O), N = D.length; N--; )
                (P = D[N]) && (E[K[N]] = !(le[K[N]] = P));
            if (T) {
              if (v || s) {
                if (v) {
                  for (D = [], N = E.length; N--; )
                    (P = E[N]) && D.push((le[N] = P));
                  v(null, (E = []), D, O);
                }
                for (N = E.length; N--; )
                  (P = E[N]) &&
                    (D = v ? de.call(T, P) : W[N]) > -1 &&
                    (T[D] = !(w[D] = P));
              }
            } else
              (E = ct(E === w ? E.splice(X, E.length) : E)),
                v ? v(null, w, E, O) : u.apply(w, E);
          })
        );
      }
      function Ot(s) {
        for (
          var l,
            p,
            g,
            v = s.length,
            m = t.relative[s[0].type],
            T = m || t.relative[" "],
            w = m ? 1 : 0,
            C = ft(
              function (N) {
                return N === l;
              },
              T,
              !0,
            ),
            O = ft(
              function (N) {
                return de.call(l, N) > -1;
              },
              T,
              !0,
            ),
            D = [
              function (N, P, E) {
                var W =
                  (!m && (E || P != n)) ||
                  ((l = P).nodeType ? C(N, P, E) : O(N, P, E));
                return (l = null), W;
              },
            ];
          w < v;
          w++
        )
          if ((p = t.relative[s[w].type])) D = [ft(Lt(D), p)];
          else {
            if (((p = t.filter[s[w].type].apply(null, s[w].matches)), p[x])) {
              for (g = ++w; g < v && !t.relative[s[g].type]; g++);
              return Ht(
                w > 1 && Lt(D),
                w > 1 &&
                  st(
                    s
                      .slice(0, w - 1)
                      .concat({ value: s[w - 2].type === " " ? "*" : "" }),
                  ).replace(_e, "$1"),
                p,
                w < g && Ot(s.slice(w, g)),
                g < v && Ot((s = s.slice(g))),
                g < v && st(s),
              );
            }
            D.push(p);
          }
        return Lt(D);
      }
      function _r(s, l) {
        var p = l.length > 0,
          g = s.length > 0,
          v = function (m, T, w, C, O) {
            var D,
              N,
              P,
              E = 0,
              W = "0",
              K = m && [],
              X = [],
              ne = n,
              le = m || (g && t.find.TAG("*", O)),
              Re = (h += ne == null ? 1 : Math.random() || 0.1),
              G = le.length;
            for (
              O && (n = T == a || T || O);
              W !== G && (D = le[W]) != null;
              W++
            ) {
              if (g && D) {
                for (
                  N = 0, !T && D.ownerDocument != a && (me(D), (w = !f));
                  (P = s[N++]);

                )
                  if (P(D, T || a, w)) {
                    u.call(C, D);
                    break;
                  }
                O && (h = Re);
              }
              p && ((D = !P && D) && E--, m && K.push(D));
            }
            if (((E += W), p && W !== E)) {
              for (N = 0; (P = l[N++]); ) P(K, X, T, w);
              if (m) {
                if (E > 0) for (; W--; ) K[W] || X[W] || (X[W] = On.call(C));
                X = ct(X);
              }
              u.apply(C, X),
                O && !m && X.length > 0 && E + l.length > 1 && i.uniqueSort(C);
            }
            return O && ((h = Re), (n = ne)), K;
          };
        return p ? ie(v) : v;
      }
      function Pt(s, l) {
        var p,
          g = [],
          v = [],
          m = H[s + " "];
        if (!m) {
          for (l || (l = Ye(s)), p = l.length; p--; )
            (m = Ot(l[p])), m[x] ? g.push(m) : v.push(m);
          (m = H(s, _r(v, g))), (m.selector = s);
        }
        return m;
      }
      function Nn(s, l, p, g) {
        var v,
          m,
          T,
          w,
          C,
          O = typeof s == "function" && s,
          D = !g && Ye((s = O.selector || s));
        if (((p = p || []), D.length === 1)) {
          if (
            ((m = D[0] = D[0].slice(0)),
            m.length > 2 &&
              (T = m[0]).type === "ID" &&
              l.nodeType === 9 &&
              f &&
              t.relative[m[1].type])
          ) {
            if (
              ((l = (t.find.ID(T.matches[0].replace(ye, ve), l) || [])[0]), l)
            )
              O && (l = l.parentNode);
            else return p;
            s = s.slice(m.shift().value.length);
          }
          for (
            v = ce.needsContext.test(s) ? 0 : m.length;
            v-- && ((T = m[v]), !t.relative[(w = T.type)]);

          )
            if (
              (C = t.find[w]) &&
              (g = C(
                T.matches[0].replace(ye, ve),
                (jt.test(m[0].type) && qt(l.parentNode)) || l,
              ))
            ) {
              if ((m.splice(v, 1), (s = g.length && st(m)), !s))
                return u.apply(p, g), p;
              break;
            }
        }
        return (
          (O || Pt(s, D))(
            g,
            l,
            !f,
            p,
            !l || (jt.test(s) && qt(l.parentNode)) || l,
          ),
          p
        );
      }
      (q.sortStable = x.split("").sort(z).join("") === x),
        me(),
        (q.sortDetached = Me(function (s) {
          return s.compareDocumentPosition(a.createElement("fieldset")) & 1;
        })),
        (i.find = _),
        (i.expr[":"] = i.expr.pseudos),
        (i.unique = i.uniqueSort),
        (_.compile = Pt),
        (_.select = Nn),
        (_.setDocument = me),
        (_.tokenize = Ye),
        (_.escape = i.escapeSelector),
        (_.getText = i.text),
        (_.isXML = i.isXMLDoc),
        (_.selectors = i.expr),
        (_.support = i.support),
        (_.uniqueSort = i.uniqueSort);
    })();
    var Ne = function (e, t, n) {
        for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && i(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      $t = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
      Bt = i.expr.match.needsContext,
      zt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function pt(e, t, n) {
      return L(t)
        ? i.grep(e, function (r, o) {
            return !!t.call(r, o, r) !== n;
          })
        : t.nodeType
          ? i.grep(e, function (r) {
              return (r === t) !== n;
            })
          : typeof t != "string"
            ? i.grep(e, function (r) {
                return de.call(t, r) > -1 !== n;
              })
            : i.filter(t, e, n);
    }
    (i.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        t.length === 1 && r.nodeType === 1
          ? i.find.matchesSelector(r, e)
            ? [r]
            : []
          : i.find.matches(
              e,
              i.grep(t, function (o) {
                return o.nodeType === 1;
              }),
            )
      );
    }),
      i.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            o = this;
          if (typeof e != "string")
            return this.pushStack(
              i(e).filter(function () {
                for (t = 0; t < r; t++) if (i.contains(o[t], this)) return !0;
              }),
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
          return r > 1 ? i.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(pt(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(pt(this, e || [], !0));
        },
        is: function (e) {
          return !!pt(
            this,
            typeof e == "string" && Bt.test(e) ? i(e) : e || [],
            !1,
          ).length;
        },
      });
    var Ut,
      _n = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Fn = (i.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || Ut), typeof e == "string"))
          if (
            (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
              ? (r = [null, e, null])
              : (r = _n.exec(e)),
            r && (r[1] || !t))
          )
            if (r[1]) {
              if (
                ((t = t instanceof i ? t[0] : t),
                i.merge(
                  this,
                  i.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : k,
                    !0,
                  ),
                ),
                zt.test(r[1]) && i.isPlainObject(t))
              )
                for (r in t) L(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            } else
              return (
                (o = k.getElementById(r[2])),
                o && ((this[0] = o), (this.length = 1)),
                this
              );
          else
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
        else {
          if (e.nodeType) return (this[0] = e), (this.length = 1), this;
          if (L(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
        }
        return i.makeArray(e, this);
      });
    (Fn.prototype = i.fn), (Ut = i(k));
    var Wn = /^(?:parents|prev(?:Until|All))/,
      $n = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
      has: function (e) {
        var t = i(e, this),
          n = t.length;
        return this.filter(function () {
          for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          o = this.length,
          u = [],
          a = typeof e != "string" && i(e);
        if (!Bt.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : n.nodeType === 1 && i.find.matchesSelector(n, e))
              ) {
                u.push(n);
                break;
              }
        }
        return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
      },
      index: function (e) {
        return e
          ? typeof e == "string"
            ? de.call(i(e), this[0])
            : de.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (e, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
      },
      addBack: function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e),
        );
      },
    });
    function Vt(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; );
      return e;
    }
    i.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function (e) {
          return Ne(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return Ne(e, "parentNode", n);
        },
        next: function (e) {
          return Vt(e, "nextSibling");
        },
        prev: function (e) {
          return Vt(e, "previousSibling");
        },
        nextAll: function (e) {
          return Ne(e, "nextSibling");
        },
        prevAll: function (e) {
          return Ne(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return Ne(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return Ne(e, "previousSibling", n);
        },
        siblings: function (e) {
          return $t((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return $t(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument != null && Mt(e.contentDocument)
            ? e.contentDocument
            : ($(e, "template") && (e = e.content || e),
              i.merge([], e.childNodes));
        },
      },
      function (e, t) {
        i.fn[e] = function (n, r) {
          var o = i.map(this, t, n);
          return (
            e.slice(-5) !== "Until" && (r = n),
            r && typeof r == "string" && (o = i.filter(r, o)),
            this.length > 1 &&
              ($n[e] || i.uniqueSort(o), Wn.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      },
    );
    var oe = /[^\x20\t\r\n\f]+/g;
    function Bn(e) {
      var t = {};
      return (
        i.each(e.match(oe) || [], function (n, r) {
          t[r] = !0;
        }),
        t
      );
    }
    i.Callbacks = function (e) {
      e = typeof e == "string" ? Bn(e) : i.extend({}, e);
      var t,
        n,
        r,
        o,
        u = [],
        a = [],
        c = -1,
        f = function () {
          for (o = o || e.once, r = t = !0; a.length; c = -1)
            for (n = a.shift(); ++c < u.length; )
              u[c].apply(n[0], n[1]) === !1 &&
                e.stopOnFalse &&
                ((c = u.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (n ? (u = []) : (u = ""));
        },
        d = {
          add: function () {
            return (
              u &&
                (n && !t && ((c = u.length - 1), a.push(n)),
                (function y(x) {
                  i.each(x, function (h, b) {
                    L(b)
                      ? (!e.unique || !d.has(b)) && u.push(b)
                      : b && b.length && Ae(b) !== "string" && y(b);
                  });
                })(arguments),
                n && !t && f()),
              this
            );
          },
          remove: function () {
            return (
              i.each(arguments, function (y, x) {
                for (var h; (h = i.inArray(x, u, h)) > -1; )
                  u.splice(h, 1), h <= c && c--;
              }),
              this
            );
          },
          has: function (y) {
            return y ? i.inArray(y, u) > -1 : u.length > 0;
          },
          empty: function () {
            return u && (u = []), this;
          },
          disable: function () {
            return (o = a = []), (u = n = ""), this;
          },
          disabled: function () {
            return !u;
          },
          lock: function () {
            return (o = a = []), !n && !t && (u = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (y, x) {
            return (
              o ||
                ((x = x || []),
                (x = [y, x.slice ? x.slice() : x]),
                a.push(x),
                t || f()),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return d;
    };
    function ke(e) {
      return e;
    }
    function et(e) {
      throw e;
    }
    function Xt(e, t, n, r) {
      var o;
      try {
        e && L((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && L((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
      } catch (u) {
        n.apply(void 0, [u]);
      }
    }
    i.extend({
      Deferred: function (e) {
        var t = [
            [
              "notify",
              "progress",
              i.Callbacks("memory"),
              i.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              i.Callbacks("once memory"),
              i.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              i.Callbacks("once memory"),
              i.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (u) {
              return r.then(null, u);
            },
            pipe: function () {
              var u = arguments;
              return i
                .Deferred(function (a) {
                  i.each(t, function (c, f) {
                    var d = L(u[f[4]]) && u[f[4]];
                    o[f[1]](function () {
                      var y = d && d.apply(this, arguments);
                      y && L(y.promise)
                        ? y
                            .promise()
                            .progress(a.notify)
                            .done(a.resolve)
                            .fail(a.reject)
                        : a[f[0] + "With"](this, d ? [y] : arguments);
                    });
                  }),
                    (u = null);
                })
                .promise();
            },
            then: function (u, a, c) {
              var f = 0;
              function d(y, x, h, b) {
                return function () {
                  var A = this,
                    R = arguments,
                    H = function () {
                      var z, ae;
                      if (!(y < f)) {
                        if (((z = h.apply(A, R)), z === x.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (ae =
                          z &&
                          (typeof z == "object" || typeof z == "function") &&
                          z.then),
                          L(ae)
                            ? b
                              ? ae.call(z, d(f, x, ke, b), d(f, x, et, b))
                              : (f++,
                                ae.call(
                                  z,
                                  d(f, x, ke, b),
                                  d(f, x, et, b),
                                  d(f, x, ke, x.notifyWith),
                                ))
                            : (h !== ke && ((A = void 0), (R = [z])),
                              (b || x.resolveWith)(A, R));
                      }
                    },
                    V = b
                      ? H
                      : function () {
                          try {
                            H();
                          } catch (z) {
                            i.Deferred.exceptionHook &&
                              i.Deferred.exceptionHook(z, V.error),
                              y + 1 >= f &&
                                (h !== et && ((A = void 0), (R = [z])),
                                x.rejectWith(A, R));
                          }
                        };
                  y
                    ? V()
                    : (i.Deferred.getErrorHook
                        ? (V.error = i.Deferred.getErrorHook())
                        : i.Deferred.getStackHook &&
                          (V.error = i.Deferred.getStackHook()),
                      j.setTimeout(V));
                };
              }
              return i
                .Deferred(function (y) {
                  t[0][3].add(d(0, y, L(c) ? c : ke, y.notifyWith)),
                    t[1][3].add(d(0, y, L(u) ? u : ke)),
                    t[2][3].add(d(0, y, L(a) ? a : et));
                })
                .promise();
            },
            promise: function (u) {
              return u != null ? i.extend(u, r) : r;
            },
          },
          o = {};
        return (
          i.each(t, function (u, a) {
            var c = a[2],
              f = a[5];
            (r[a[1]] = c.add),
              f &&
                c.add(
                  function () {
                    n = f;
                  },
                  t[3 - u][2].disable,
                  t[3 - u][3].disable,
                  t[0][2].lock,
                  t[0][3].lock,
                ),
              c.add(a[3].fire),
              (o[a[0]] = function () {
                return (
                  o[a[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[a[0] + "With"] = c.fireWith);
          }),
          r.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          o = Z.call(arguments),
          u = i.Deferred(),
          a = function (c) {
            return function (f) {
              (r[c] = this),
                (o[c] = arguments.length > 1 ? Z.call(arguments) : f),
                --t || u.resolveWith(r, o);
            };
          };
        if (
          t <= 1 &&
          (Xt(e, u.done(a(n)).resolve, u.reject, !t),
          u.state() === "pending" || L(o[n] && o[n].then))
        )
          return u.then();
        for (; n--; ) Xt(o[n], a(n), u.reject);
        return u.promise();
      },
    });
    var zn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (i.Deferred.exceptionHook = function (e, t) {
      j.console &&
        j.console.warn &&
        e &&
        zn.test(e.name) &&
        j.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (i.readyException = function (e) {
        j.setTimeout(function () {
          throw e;
        });
      });
    var ht = i.Deferred();
    (i.fn.ready = function (e) {
      return (
        ht.then(e).catch(function (t) {
          i.readyException(t);
        }),
        this
      );
    }),
      i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (e === !0 ? --i.readyWait : i.isReady) ||
            ((i.isReady = !0),
            !(e !== !0 && --i.readyWait > 0) && ht.resolveWith(k, [i]));
        },
      }),
      (i.ready.then = ht.then);
    function tt() {
      k.removeEventListener("DOMContentLoaded", tt),
        j.removeEventListener("load", tt),
        i.ready();
    }
    k.readyState === "complete" ||
    (k.readyState !== "loading" && !k.documentElement.doScroll)
      ? j.setTimeout(i.ready)
      : (k.addEventListener("DOMContentLoaded", tt),
        j.addEventListener("load", tt));
    var he = function (e, t, n, r, o, u, a) {
        var c = 0,
          f = e.length,
          d = n == null;
        if (Ae(n) === "object") {
          o = !0;
          for (c in n) he(e, t, c, n[c], !0, u, a);
        } else if (
          r !== void 0 &&
          ((o = !0),
          L(r) || (a = !0),
          d &&
            (a
              ? (t.call(e, r), (t = null))
              : ((d = t),
                (t = function (y, x, h) {
                  return d.call(i(y), h);
                }))),
          t)
        )
          for (; c < f; c++) t(e[c], n, a ? r : r.call(e[c], c, t(e[c], n)));
        return o ? e : d ? t.call(e) : f ? t(e[0], n) : u;
      },
      Un = /^-ms-/,
      Vn = /-([a-z])/g;
    function Xn(e, t) {
      return t.toUpperCase();
    }
    function ue(e) {
      return e.replace(Un, "ms-").replace(Vn, Xn);
    }
    var Fe = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function We() {
      this.expando = i.expando + We.uid++;
    }
    (We.uid = 1),
      (We.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              Fe(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            o = this.cache(e);
          if (typeof t == "string") o[ue(t)] = n;
          else for (r in t) o[ue(r)] = t[r];
          return o;
        },
        get: function (e, t) {
          return t === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][ue(t)];
        },
        access: function (e, t, n) {
          return t === void 0 || (t && typeof t == "string" && n === void 0)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (
                Array.isArray(t)
                  ? (t = t.map(ue))
                  : ((t = ue(t)), (t = (t in r) ? [t] : t.match(oe) || [])),
                  n = t.length;
                n--;

              )
                delete r[t[n]];
            (t === void 0 || i.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== void 0 && !i.isEmptyObject(t);
        },
      });
    var S = new We(),
      Q = new We(),
      Gn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Qn = /[A-Z]/g;
    function Yn(e) {
      return e === "true"
        ? !0
        : e === "false"
          ? !1
          : e === "null"
            ? null
            : e === +e + ""
              ? +e
              : Gn.test(e)
                ? JSON.parse(e)
                : e;
    }
    function Gt(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (
          ((r = "data-" + t.replace(Qn, "-$&").toLowerCase()),
          (n = e.getAttribute(r)),
          typeof n == "string")
        ) {
          try {
            n = Yn(n);
          } catch {}
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    i.extend({
      hasData: function (e) {
        return Q.hasData(e) || S.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return S.access(e, t, n);
      },
      _removeData: function (e, t) {
        S.remove(e, t);
      },
    }),
      i.fn.extend({
        data: function (e, t) {
          var n,
            r,
            o,
            u = this[0],
            a = u && u.attributes;
          if (e === void 0) {
            if (
              this.length &&
              ((o = Q.get(u)), u.nodeType === 1 && !S.get(u, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((r = a[n].name),
                  r.indexOf("data-") === 0 &&
                    ((r = ue(r.slice(5))), Gt(u, r, o[r])));
              S.set(u, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object"
            ? this.each(function () {
                Q.set(this, e);
              })
            : he(
                this,
                function (c) {
                  var f;
                  if (u && c === void 0)
                    return (
                      (f = Q.get(u, e)),
                      f !== void 0 || ((f = Gt(u, e)), f !== void 0)
                        ? f
                        : void 0
                    );
                  this.each(function () {
                    Q.set(this, e, c);
                  });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0,
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e);
          });
        },
      }),
      i.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = S.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = S.access(e, t, i.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = i.queue(e, t),
            r = n.length,
            o = n.shift(),
            u = i._queueHooks(e, t),
            a = function () {
              i.dequeue(e, t);
            };
          o === "inprogress" && ((o = n.shift()), r--),
            o &&
              (t === "fx" && n.unshift("inprogress"),
              delete u.stop,
              o.call(e, a, u)),
            !r && u && u.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            S.get(e, n) ||
            S.access(e, n, {
              empty: i.Callbacks("once memory").add(function () {
                S.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      i.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            typeof e != "string" && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? i.queue(this[0], e)
              : t === void 0
                ? this
                : this.each(function () {
                    var r = i.queue(this, e, t);
                    i._queueHooks(this, e),
                      e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
                  })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            i.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            o = i.Deferred(),
            u = this,
            a = this.length,
            c = function () {
              --r || o.resolveWith(u, [u]);
            };
          for (
            typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = S.get(u[a], e + "queueHooks")),
              n && n.empty && (r++, n.empty.add(c));
          return c(), o.promise(t);
        },
      });
    var Qt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      $e = new RegExp("^(?:([+-])=|)(" + Qt + ")([a-z%]*)$", "i"),
      ge = ["Top", "Right", "Bottom", "Left"],
      Te = k.documentElement,
      je = function (e) {
        return i.contains(e.ownerDocument, e);
      },
      Jn = { composed: !0 };
    Te.getRootNode &&
      (je = function (e) {
        return (
          i.contains(e.ownerDocument, e) ||
          e.getRootNode(Jn) === e.ownerDocument
        );
      });
    var nt = function (e, t) {
      return (
        (e = t || e),
        e.style.display === "none" ||
          (e.style.display === "" && je(e) && i.css(e, "display") === "none")
      );
    };
    function Yt(e, t, n, r) {
      var o,
        u,
        a = 20,
        c = r
          ? function () {
              return r.cur();
            }
          : function () {
              return i.css(e, t, "");
            },
        f = c(),
        d = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
        y =
          e.nodeType &&
          (i.cssNumber[t] || (d !== "px" && +f)) &&
          $e.exec(i.css(e, t));
      if (y && y[3] !== d) {
        for (f = f / 2, d = d || y[3], y = +f || 1; a--; )
          i.style(e, t, y + d),
            (1 - u) * (1 - (u = c() / f || 0.5)) <= 0 && (a = 0),
            (y = y / u);
        (y = y * 2), i.style(e, t, y + d), (n = n || []);
      }
      return (
        n &&
          ((y = +y || +f || 0),
          (o = n[1] ? y + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = d), (r.start = y), (r.end = o))),
        o
      );
    }
    var Jt = {};
    function Kn(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        o = Jt[r];
      return (
        o ||
        ((t = n.body.appendChild(n.createElement(r))),
        (o = i.css(t, "display")),
        t.parentNode.removeChild(t),
        o === "none" && (o = "block"),
        (Jt[r] = o),
        o)
      );
    }
    function qe(e, t) {
      for (var n, r, o = [], u = 0, a = e.length; u < a; u++)
        (r = e[u]),
          r.style &&
            ((n = r.style.display),
            t
              ? (n === "none" &&
                  ((o[u] = S.get(r, "display") || null),
                  o[u] || (r.style.display = "")),
                r.style.display === "" && nt(r) && (o[u] = Kn(r)))
              : n !== "none" && ((o[u] = "none"), S.set(r, "display", n)));
      for (u = 0; u < a; u++) o[u] != null && (e[u].style.display = o[u]);
      return e;
    }
    i.fn.extend({
      show: function () {
        return qe(this, !0);
      },
      hide: function () {
        return qe(this);
      },
      toggle: function (e) {
        return typeof e == "boolean"
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              nt(this) ? i(this).show() : i(this).hide();
            });
      },
    });
    var Be = /^(?:checkbox|radio)$/i,
      Kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Zt = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var e = k.createDocumentFragment(),
        t = e.appendChild(k.createElement("div")),
        n = k.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        (t.innerHTML = "<option></option>"),
        (q.option = !!t.lastChild);
    })();
    var ee = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (ee.tbody = ee.tfoot = ee.colgroup = ee.caption = ee.thead),
      (ee.th = ee.td),
      q.option ||
        (ee.optgroup = ee.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    function Y(e, t) {
      var n;
      return (
        typeof e.getElementsByTagName < "u"
          ? (n = e.getElementsByTagName(t || "*"))
          : typeof e.querySelectorAll < "u"
            ? (n = e.querySelectorAll(t || "*"))
            : (n = []),
        t === void 0 || (t && $(e, t)) ? i.merge([e], n) : n
      );
    }
    function gt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        S.set(e[n], "globalEval", !t || S.get(t[n], "globalEval"));
    }
    var Zn = /<|&#?\w+;/;
    function en(e, t, n, r, o) {
      for (
        var u,
          a,
          c,
          f,
          d,
          y,
          x = t.createDocumentFragment(),
          h = [],
          b = 0,
          A = e.length;
        b < A;
        b++
      )
        if (((u = e[b]), u || u === 0))
          if (Ae(u) === "object") i.merge(h, u.nodeType ? [u] : u);
          else if (!Zn.test(u)) h.push(t.createTextNode(u));
          else {
            for (
              a = a || x.appendChild(t.createElement("div")),
                c = (Kt.exec(u) || ["", ""])[1].toLowerCase(),
                f = ee[c] || ee._default,
                a.innerHTML = f[1] + i.htmlPrefilter(u) + f[2],
                y = f[0];
              y--;

            )
              a = a.lastChild;
            i.merge(h, a.childNodes), (a = x.firstChild), (a.textContent = "");
          }
      for (x.textContent = "", b = 0; (u = h[b++]); ) {
        if (r && i.inArray(u, r) > -1) {
          o && o.push(u);
          continue;
        }
        if (((d = je(u)), (a = Y(x.appendChild(u), "script")), d && gt(a), n))
          for (y = 0; (u = a[y++]); ) Zt.test(u.type || "") && n.push(u);
      }
      return x;
    }
    var tn = /^([^.]*)(?:\.(.+)|)/;
    function Le() {
      return !0;
    }
    function He() {
      return !1;
    }
    function yt(e, t, n, r, o, u) {
      var a, c;
      if (typeof t == "object") {
        typeof n != "string" && ((r = r || n), (n = void 0));
        for (c in t) yt(e, c, n, r, t[c], u);
        return e;
      }
      if (
        (r == null && o == null
          ? ((o = n), (r = n = void 0))
          : o == null &&
            (typeof n == "string"
              ? ((o = r), (r = void 0))
              : ((o = r), (r = n), (n = void 0))),
        o === !1)
      )
        o = He;
      else if (!o) return e;
      return (
        u === 1 &&
          ((a = o),
          (o = function (f) {
            return i().off(f), a.apply(this, arguments);
          }),
          (o.guid = a.guid || (a.guid = i.guid++))),
        e.each(function () {
          i.event.add(this, t, o, r, n);
        })
      );
    }
    i.event = {
      global: {},
      add: function (e, t, n, r, o) {
        var u,
          a,
          c,
          f,
          d,
          y,
          x,
          h,
          b,
          A,
          R,
          H = S.get(e);
        if (Fe(e))
          for (
            n.handler && ((u = n), (n = u.handler), (o = u.selector)),
              o && i.find.matchesSelector(Te, o),
              n.guid || (n.guid = i.guid++),
              (f = H.events) || (f = H.events = Object.create(null)),
              (a = H.handle) ||
                (a = H.handle =
                  function (V) {
                    return typeof i < "u" && i.event.triggered !== V.type
                      ? i.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || "").match(oe) || [""],
              d = t.length;
            d--;

          )
            (c = tn.exec(t[d]) || []),
              (b = R = c[1]),
              (A = (c[2] || "").split(".").sort()),
              b &&
                ((x = i.event.special[b] || {}),
                (b = (o ? x.delegateType : x.bindType) || b),
                (x = i.event.special[b] || {}),
                (y = i.extend(
                  {
                    type: b,
                    origType: R,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: A.join("."),
                  },
                  u,
                )),
                (h = f[b]) ||
                  ((h = f[b] = []),
                  (h.delegateCount = 0),
                  (!x.setup || x.setup.call(e, r, A, a) === !1) &&
                    e.addEventListener &&
                    e.addEventListener(b, a)),
                x.add &&
                  (x.add.call(e, y),
                  y.handler.guid || (y.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, y) : h.push(y),
                (i.event.global[b] = !0));
      },
      remove: function (e, t, n, r, o) {
        var u,
          a,
          c,
          f,
          d,
          y,
          x,
          h,
          b,
          A,
          R,
          H = S.hasData(e) && S.get(e);
        if (!(!H || !(f = H.events))) {
          for (t = (t || "").match(oe) || [""], d = t.length; d--; ) {
            if (
              ((c = tn.exec(t[d]) || []),
              (b = R = c[1]),
              (A = (c[2] || "").split(".").sort()),
              !b)
            ) {
              for (b in f) i.event.remove(e, b + t[d], n, r, !0);
              continue;
            }
            for (
              x = i.event.special[b] || {},
                b = (r ? x.delegateType : x.bindType) || b,
                h = f[b] || [],
                c =
                  c[2] &&
                  new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = u = h.length;
              u--;

            )
              (y = h[u]),
                (o || R === y.origType) &&
                  (!n || n.guid === y.guid) &&
                  (!c || c.test(y.namespace)) &&
                  (!r || r === y.selector || (r === "**" && y.selector)) &&
                  (h.splice(u, 1),
                  y.selector && h.delegateCount--,
                  x.remove && x.remove.call(e, y));
            a &&
              !h.length &&
              ((!x.teardown || x.teardown.call(e, A, H.handle) === !1) &&
                i.removeEvent(e, b, H.handle),
              delete f[b]);
          }
          i.isEmptyObject(f) && S.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          o,
          u,
          a,
          c = new Array(arguments.length),
          f = i.event.fix(e),
          d = (S.get(this, "events") || Object.create(null))[f.type] || [],
          y = i.event.special[f.type] || {};
        for (c[0] = f, t = 1; t < arguments.length; t++) c[t] = arguments[t];
        if (
          ((f.delegateTarget = this),
          !(y.preDispatch && y.preDispatch.call(this, f) === !1))
        ) {
          for (
            a = i.event.handlers.call(this, f, d), t = 0;
            (o = a[t++]) && !f.isPropagationStopped();

          )
            for (
              f.currentTarget = o.elem, n = 0;
              (u = o.handlers[n++]) && !f.isImmediatePropagationStopped();

            )
              (!f.rnamespace ||
                u.namespace === !1 ||
                f.rnamespace.test(u.namespace)) &&
                ((f.handleObj = u),
                (f.data = u.data),
                (r = (
                  (i.event.special[u.origType] || {}).handle || u.handler
                ).apply(o.elem, c)),
                r !== void 0 &&
                  (f.result = r) === !1 &&
                  (f.preventDefault(), f.stopPropagation()));
          return y.postDispatch && y.postDispatch.call(this, f), f.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          o,
          u,
          a,
          c = [],
          f = t.delegateCount,
          d = e.target;
        if (f && d.nodeType && !(e.type === "click" && e.button >= 1)) {
          for (; d !== this; d = d.parentNode || this)
            if (
              d.nodeType === 1 &&
              !(e.type === "click" && d.disabled === !0)
            ) {
              for (u = [], a = {}, n = 0; n < f; n++)
                (r = t[n]),
                  (o = r.selector + " "),
                  a[o] === void 0 &&
                    (a[o] = r.needsContext
                      ? i(o, this).index(d) > -1
                      : i.find(o, this, null, [d]).length),
                  a[o] && u.push(r);
              u.length && c.push({ elem: d, handlers: u });
            }
        }
        return (
          (d = this),
          f < t.length && c.push({ elem: d, handlers: t.slice(f) }),
          c
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: L(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            });
          },
        });
      },
      fix: function (e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              Be.test(t.type) && t.click && $(t, "input") && rt(t, "click", !0),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              Be.test(t.type) && t.click && $(t, "input") && rt(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (Be.test(t.type) &&
                t.click &&
                $(t, "input") &&
                S.get(t, "click")) ||
              $(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    };
    function rt(e, t, n) {
      if (!n) {
        S.get(e, t) === void 0 && i.event.add(e, t, Le);
        return;
      }
      S.set(e, t, !1),
        i.event.add(e, t, {
          namespace: !1,
          handler: function (r) {
            var o,
              u = S.get(this, t);
            if (r.isTrigger & 1 && this[t]) {
              if (u)
                (i.event.special[t] || {}).delegateType && r.stopPropagation();
              else if (
                ((u = Z.call(arguments)),
                S.set(this, t, u),
                this[t](),
                (o = S.get(this, t)),
                S.set(this, t, !1),
                u !== o)
              )
                return r.stopImmediatePropagation(), r.preventDefault(), o;
            } else
              u &&
                (S.set(this, t, i.event.trigger(u[0], u.slice(1), this)),
                r.stopPropagation(),
                (r.isImmediatePropagationStopped = Le));
          },
        });
    }
    (i.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
      (i.Event = function (e, t) {
        if (!(this instanceof i.Event)) return new i.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === void 0 && e.returnValue === !1)
                ? Le
                : He),
            (this.target =
              e.target && e.target.nodeType === 3
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && i.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[i.expando] = !0);
      }),
      (i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: He,
        isPropagationStopped: He,
        isImmediatePropagationStopped: He,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = Le),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = Le),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = Le),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      i.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        i.event.addProp,
      ),
      i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        function n(r) {
          if (k.documentMode) {
            var o = S.get(this, "handle"),
              u = i.event.fix(r);
            (u.type = r.type === "focusin" ? "focus" : "blur"),
              (u.isSimulated = !0),
              o(r),
              u.target === u.currentTarget && o(u);
          } else i.event.simulate(t, r.target, i.event.fix(r));
        }
        (i.event.special[e] = {
          setup: function () {
            var r;
            if ((rt(this, e, !0), k.documentMode))
              (r = S.get(this, t)),
                r || this.addEventListener(t, n),
                S.set(this, t, (r || 0) + 1);
            else return !1;
          },
          trigger: function () {
            return rt(this, e), !0;
          },
          teardown: function () {
            var r;
            if (k.documentMode)
              (r = S.get(this, t) - 1),
                r
                  ? S.set(this, t, r)
                  : (this.removeEventListener(t, n), S.remove(this, t));
            else return !1;
          },
          _default: function (r) {
            return S.get(r.target, e);
          },
          delegateType: t,
        }),
          (i.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                o = k.documentMode ? this : r,
                u = S.get(o, t);
              u ||
                (k.documentMode
                  ? this.addEventListener(t, n)
                  : r.addEventListener(e, n, !0)),
                S.set(o, t, (u || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                o = k.documentMode ? this : r,
                u = S.get(o, t) - 1;
              u
                ? S.set(o, t, u)
                : (k.documentMode
                    ? this.removeEventListener(t, n)
                    : r.removeEventListener(e, n, !0),
                  S.remove(o, t));
            },
          });
      }),
      i.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              var r,
                o = this,
                u = n.relatedTarget,
                a = n.handleObj;
              return (
                (!u || (u !== o && !i.contains(o, u))) &&
                  ((n.type = a.origType),
                  (r = a.handler.apply(this, arguments)),
                  (n.type = t)),
                r
              );
            },
          };
        },
      ),
      i.fn.extend({
        on: function (e, t, n, r) {
          return yt(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return yt(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              i(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler,
              ),
              this
            );
          if (typeof e == "object") {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
            n === !1 && (n = He),
            this.each(function () {
              i.event.remove(this, e, n, t);
            })
          );
        },
      });
    var er = /<script|<style|<link/i,
      tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
      nr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function nn(e, t) {
      return (
        ($(e, "table") &&
          $(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
          i(e).children("tbody")[0]) ||
        e
      );
    }
    function rr(e) {
      return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
    }
    function ir(e) {
      return (
        (e.type || "").slice(0, 5) === "true/"
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function rn(e, t) {
      var n, r, o, u, a, c, f;
      if (t.nodeType === 1) {
        if (S.hasData(e) && ((u = S.get(e)), (f = u.events), f)) {
          S.remove(t, "handle events");
          for (o in f)
            for (n = 0, r = f[o].length; n < r; n++) i.event.add(t, o, f[o][n]);
        }
        Q.hasData(e) && ((a = Q.access(e)), (c = i.extend({}, a)), Q.set(t, c));
      }
    }
    function or(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && Be.test(e.type)
        ? (t.checked = e.checked)
        : (n === "input" || n === "textarea") &&
          (t.defaultValue = e.defaultValue);
    }
    function Oe(e, t, n, r) {
      t = Rt(t);
      var o,
        u,
        a,
        c,
        f,
        d,
        y = 0,
        x = e.length,
        h = x - 1,
        b = t[0],
        A = L(b);
      if (A || (x > 1 && typeof b == "string" && !q.checkClone && tr.test(b)))
        return e.each(function (R) {
          var H = e.eq(R);
          A && (t[0] = b.call(this, R, H.html())), Oe(H, t, n, r);
        });
      if (
        x &&
        ((o = en(t, e[0].ownerDocument, !1, e, r)),
        (u = o.firstChild),
        o.childNodes.length === 1 && (o = u),
        u || r)
      ) {
        for (a = i.map(Y(o, "script"), rr), c = a.length; y < x; y++)
          (f = o),
            y !== h &&
              ((f = i.clone(f, !0, !0)), c && i.merge(a, Y(f, "script"))),
            n.call(e[y], f, y);
        if (c)
          for (
            d = a[a.length - 1].ownerDocument, i.map(a, ir), y = 0;
            y < c;
            y++
          )
            (f = a[y]),
              Zt.test(f.type || "") &&
                !S.access(f, "globalEval") &&
                i.contains(d, f) &&
                (f.src && (f.type || "").toLowerCase() !== "module"
                  ? i._evalUrl &&
                    !f.noModule &&
                    i._evalUrl(
                      f.src,
                      { nonce: f.nonce || f.getAttribute("nonce") },
                      d,
                    )
                  : Ft(f.textContent.replace(nr, ""), f, d));
      }
      return e;
    }
    function on(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, u = 0; (r = o[u]) != null; u++)
        !n && r.nodeType === 1 && i.cleanData(Y(r)),
          r.parentNode &&
            (n && je(r) && gt(Y(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          o,
          u,
          a,
          c = e.cloneNode(!0),
          f = je(e);
        if (
          !q.noCloneChecked &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !i.isXMLDoc(e)
        )
          for (a = Y(c), u = Y(e), r = 0, o = u.length; r < o; r++)
            or(u[r], a[r]);
        if (t)
          if (n)
            for (u = u || Y(e), a = a || Y(c), r = 0, o = u.length; r < o; r++)
              rn(u[r], a[r]);
          else rn(e, c);
        return (
          (a = Y(c, "script")), a.length > 0 && gt(a, !f && Y(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, o = i.event.special, u = 0;
          (n = e[u]) !== void 0;
          u++
        )
          if (Fe(n)) {
            if ((t = n[S.expando])) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[S.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      },
    }),
      i.fn.extend({
        detach: function (e) {
          return on(this, e, !0);
        },
        remove: function (e) {
          return on(this, e);
        },
        text: function (e) {
          return he(
            this,
            function (t) {
              return t === void 0
                ? i.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = t);
                  });
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return Oe(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = nn(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return Oe(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = nn(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Oe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Oe(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (i.cleanData(Y(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = e ?? !1),
            (t = t ?? e),
            this.map(function () {
              return i.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return he(
            this,
            function (t) {
              var n = this[0] || {},
                r = 0,
                o = this.length;
              if (t === void 0 && n.nodeType === 1) return n.innerHTML;
              if (
                typeof t == "string" &&
                !er.test(t) &&
                !ee[(Kt.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = i.htmlPrefilter(t);
                try {
                  for (; r < o; r++)
                    (n = this[r] || {}),
                      n.nodeType === 1 &&
                        (i.cleanData(Y(n, !1)), (n.innerHTML = t));
                  n = 0;
                } catch {}
              }
              n && this.empty().append(t);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = [];
          return Oe(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              i.inArray(this, e) < 0 &&
                (i.cleanData(Y(this)), n && n.replaceChild(t, this));
            },
            e,
          );
        },
      }),
      i.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          i.fn[e] = function (n) {
            for (var r, o = [], u = i(n), a = u.length - 1, c = 0; c <= a; c++)
              (r = c === a ? this : this.clone(!0)),
                i(u[c])[t](r),
                Ke.apply(o, r.get());
            return this.pushStack(o);
          };
        },
      );
    var vt = new RegExp("^(" + Qt + ")(?!px)[a-z%]+$", "i"),
      xt = /^--/,
      it = function (e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = j), t.getComputedStyle(e);
      },
      un = function (e, t, n) {
        var r,
          o,
          u = {};
        for (o in t) (u[o] = e.style[o]), (e.style[o] = t[o]);
        r = n.call(e);
        for (o in t) e.style[o] = u[o];
        return r;
      },
      ur = new RegExp(ge.join("|"), "i");
    (function () {
      function e() {
        if (d) {
          (f.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (d.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Te.appendChild(f).appendChild(d);
          var y = j.getComputedStyle(d);
          (n = y.top !== "1%"),
            (c = t(y.marginLeft) === 12),
            (d.style.right = "60%"),
            (u = t(y.right) === 36),
            (r = t(y.width) === 36),
            (d.style.position = "absolute"),
            (o = t(d.offsetWidth / 3) === 12),
            Te.removeChild(f),
            (d = null);
        }
      }
      function t(y) {
        return Math.round(parseFloat(y));
      }
      var n,
        r,
        o,
        u,
        a,
        c,
        f = k.createElement("div"),
        d = k.createElement("div");
      d.style &&
        ((d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (q.clearCloneStyle = d.style.backgroundClip === "content-box"),
        i.extend(q, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), u;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), c;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var y, x, h, b;
            return (
              a == null &&
                ((y = k.createElement("table")),
                (x = k.createElement("tr")),
                (h = k.createElement("div")),
                (y.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (x.style.cssText = "box-sizing:content-box;border:1px solid"),
                (x.style.height = "1px"),
                (h.style.height = "9px"),
                (h.style.display = "block"),
                Te.appendChild(y).appendChild(x).appendChild(h),
                (b = j.getComputedStyle(x)),
                (a =
                  parseInt(b.height, 10) +
                    parseInt(b.borderTopWidth, 10) +
                    parseInt(b.borderBottomWidth, 10) ===
                  x.offsetHeight),
                Te.removeChild(y)),
              a
            );
          },
        }));
    })();
    function ze(e, t, n) {
      var r,
        o,
        u,
        a,
        c = xt.test(t),
        f = e.style;
      return (
        (n = n || it(e)),
        n &&
          ((a = n.getPropertyValue(t) || n[t]),
          c && a && (a = a.replace(_e, "$1") || void 0),
          a === "" && !je(e) && (a = i.style(e, t)),
          !q.pixelBoxStyles() &&
            vt.test(a) &&
            ur.test(t) &&
            ((r = f.width),
            (o = f.minWidth),
            (u = f.maxWidth),
            (f.minWidth = f.maxWidth = f.width = a),
            (a = n.width),
            (f.width = r),
            (f.minWidth = o),
            (f.maxWidth = u))),
        a !== void 0 ? a + "" : a
      );
    }
    function an(e, t) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        },
      };
    }
    var sn = ["Webkit", "Moz", "ms"],
      fn = k.createElement("div").style,
      cn = {};
    function ar(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = sn.length; n--; )
        if (((e = sn[n] + t), e in fn)) return e;
    }
    function bt(e) {
      var t = i.cssProps[e] || cn[e];
      return t || (e in fn ? e : (cn[e] = ar(e) || e));
    }
    var sr = /^(none|table(?!-c[ea]).+)/,
      fr = { position: "absolute", visibility: "hidden", display: "block" },
      ln = { letterSpacing: "0", fontWeight: "400" };
    function dn(e, t, n) {
      var r = $e.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function mt(e, t, n, r, o, u) {
      var a = t === "width" ? 1 : 0,
        c = 0,
        f = 0,
        d = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        n === "margin" && (d += i.css(e, n + ge[a], !0, o)),
          r
            ? (n === "content" && (f -= i.css(e, "padding" + ge[a], !0, o)),
              n !== "margin" &&
                (f -= i.css(e, "border" + ge[a] + "Width", !0, o)))
            : ((f += i.css(e, "padding" + ge[a], !0, o)),
              n !== "padding"
                ? (f += i.css(e, "border" + ge[a] + "Width", !0, o))
                : (c += i.css(e, "border" + ge[a] + "Width", !0, o)));
      return (
        !r &&
          u >= 0 &&
          (f +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - u - f - c - 0.5,
              ),
            ) || 0),
        f + d
      );
    }
    function pn(e, t, n) {
      var r = it(e),
        o = !q.boxSizingReliable() || n,
        u = o && i.css(e, "boxSizing", !1, r) === "border-box",
        a = u,
        c = ze(e, t, r),
        f = "offset" + t[0].toUpperCase() + t.slice(1);
      if (vt.test(c)) {
        if (!n) return c;
        c = "auto";
      }
      return (
        ((!q.boxSizingReliable() && u) ||
          (!q.reliableTrDimensions() && $(e, "tr")) ||
          c === "auto" ||
          (!parseFloat(c) && i.css(e, "display", !1, r) === "inline")) &&
          e.getClientRects().length &&
          ((u = i.css(e, "boxSizing", !1, r) === "border-box"),
          (a = f in e),
          a && (c = e[f])),
        (c = parseFloat(c) || 0),
        c + mt(e, t, n || (u ? "border" : "content"), a, r, c) + "px"
      );
    }
    i.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = ze(e, "opacity");
              return n === "" ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var o,
            u,
            a,
            c = ue(t),
            f = xt.test(t),
            d = e.style;
          if (
            (f || (t = bt(c)),
            (a = i.cssHooks[t] || i.cssHooks[c]),
            n !== void 0)
          ) {
            if (
              ((u = typeof n),
              u === "string" &&
                (o = $e.exec(n)) &&
                o[1] &&
                ((n = Yt(e, t, o)), (u = "number")),
              n == null || n !== n)
            )
              return;
            u === "number" &&
              !f &&
              (n += (o && o[3]) || (i.cssNumber[c] ? "" : "px")),
              !q.clearCloneStyle &&
                n === "" &&
                t.indexOf("background") === 0 &&
                (d[t] = "inherit"),
              (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) &&
                (f ? d.setProperty(t, n) : (d[t] = n));
          } else
            return a && "get" in a && (o = a.get(e, !1, r)) !== void 0
              ? o
              : d[t];
        }
      },
      css: function (e, t, n, r) {
        var o,
          u,
          a,
          c = ue(t),
          f = xt.test(t);
        return (
          f || (t = bt(c)),
          (a = i.cssHooks[t] || i.cssHooks[c]),
          a && "get" in a && (o = a.get(e, !0, n)),
          o === void 0 && (o = ze(e, t, r)),
          o === "normal" && t in ln && (o = ln[t]),
          n === "" || n
            ? ((u = parseFloat(o)), n === !0 || isFinite(u) ? u || 0 : o)
            : o
        );
      },
    }),
      i.each(["height", "width"], function (e, t) {
        i.cssHooks[t] = {
          get: function (n, r, o) {
            if (r)
              return sr.test(i.css(n, "display")) &&
                (!n.getClientRects().length || !n.getBoundingClientRect().width)
                ? un(n, fr, function () {
                    return pn(n, t, o);
                  })
                : pn(n, t, o);
          },
          set: function (n, r, o) {
            var u,
              a = it(n),
              c = !q.scrollboxSize() && a.position === "absolute",
              f = c || o,
              d = f && i.css(n, "boxSizing", !1, a) === "border-box",
              y = o ? mt(n, t, o, d, a) : 0;
            return (
              d &&
                c &&
                (y -= Math.ceil(
                  n["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(a[t]) -
                    mt(n, t, "border", !1, a) -
                    0.5,
                )),
              y &&
                (u = $e.exec(r)) &&
                (u[3] || "px") !== "px" &&
                ((n.style[t] = r), (r = i.css(n, t))),
              dn(n, r, y)
            );
          },
        };
      }),
      (i.cssHooks.marginLeft = an(q.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(ze(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                un(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      i.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (i.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, o = {}, u = typeof n == "string" ? n.split(" ") : [n];
              r < 4;
              r++
            )
              o[e + ge[r] + t] = u[r] || u[r - 2] || u[0];
            return o;
          },
        }),
          e !== "margin" && (i.cssHooks[e + t].set = dn);
      }),
      i.fn.extend({
        css: function (e, t) {
          return he(
            this,
            function (n, r, o) {
              var u,
                a,
                c = {},
                f = 0;
              if (Array.isArray(r)) {
                for (u = it(n), a = r.length; f < a; f++)
                  c[r[f]] = i.css(n, r[f], !1, u);
                return c;
              }
              return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
      });
    function J(e, t, n, r, o) {
      return new J.prototype.init(e, t, n, r, o);
    }
    (i.Tween = J),
      (J.prototype = {
        constructor: J,
        init: function (e, t, n, r, o, u) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || i.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = u || (i.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = J.propHooks[this.prop];
          return e && e.get ? e.get(this) : J.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = J.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  i.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : J.propHooks._default.set(this),
            this
          );
        },
      }),
      (J.prototype.init.prototype = J.prototype),
      (J.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return e.elem.nodeType !== 1 ||
              (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
              ? e.elem[e.prop]
              : ((t = i.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
          },
          set: function (e) {
            i.fx.step[e.prop]
              ? i.fx.step[e.prop](e)
              : e.elem.nodeType === 1 &&
                  (i.cssHooks[e.prop] || e.elem.style[bt(e.prop)] != null)
                ? i.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (J.propHooks.scrollTop = J.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (i.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (i.fx = J.prototype.init),
      (i.fx.step = {});
    var Pe,
      ot,
      cr = /^(?:toggle|show|hide)$/,
      lr = /queueHooks$/;
    function Tt() {
      ot &&
        (k.hidden === !1 && j.requestAnimationFrame
          ? j.requestAnimationFrame(Tt)
          : j.setTimeout(Tt, i.fx.interval),
        i.fx.tick());
    }
    function hn() {
      return (
        j.setTimeout(function () {
          Pe = void 0;
        }),
        (Pe = Date.now())
      );
    }
    function ut(e, t) {
      var n,
        r = 0,
        o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = ge[r]), (o["margin" + n] = o["padding" + n] = e);
      return t && (o.opacity = o.width = e), o;
    }
    function gn(e, t, n) {
      for (
        var r,
          o = (re.tweeners[t] || []).concat(re.tweeners["*"]),
          u = 0,
          a = o.length;
        u < a;
        u++
      )
        if ((r = o[u].call(n, t, e))) return r;
    }
    function dr(e, t, n) {
      var r,
        o,
        u,
        a,
        c,
        f,
        d,
        y,
        x = "width" in t || "height" in t,
        h = this,
        b = {},
        A = e.style,
        R = e.nodeType && nt(e),
        H = S.get(e, "fxshow");
      n.queue ||
        ((a = i._queueHooks(e, "fx")),
        a.unqueued == null &&
          ((a.unqueued = 0),
          (c = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || c();
          })),
        a.unqueued++,
        h.always(function () {
          h.always(function () {
            a.unqueued--, i.queue(e, "fx").length || a.empty.fire();
          });
        }));
      for (r in t)
        if (((o = t[r]), cr.test(o))) {
          if (
            (delete t[r],
            (u = u || o === "toggle"),
            o === (R ? "hide" : "show"))
          )
            if (o === "show" && H && H[r] !== void 0) R = !0;
            else continue;
          b[r] = (H && H[r]) || i.style(e, r);
        }
      if (((f = !i.isEmptyObject(t)), !(!f && i.isEmptyObject(b)))) {
        x &&
          e.nodeType === 1 &&
          ((n.overflow = [A.overflow, A.overflowX, A.overflowY]),
          (d = H && H.display),
          d == null && (d = S.get(e, "display")),
          (y = i.css(e, "display")),
          y === "none" &&
            (d
              ? (y = d)
              : (qe([e], !0),
                (d = e.style.display || d),
                (y = i.css(e, "display")),
                qe([e]))),
          (y === "inline" || (y === "inline-block" && d != null)) &&
            i.css(e, "float") === "none" &&
            (f ||
              (h.done(function () {
                A.display = d;
              }),
              d == null && ((y = A.display), (d = y === "none" ? "" : y))),
            (A.display = "inline-block"))),
          n.overflow &&
            ((A.overflow = "hidden"),
            h.always(function () {
              (A.overflow = n.overflow[0]),
                (A.overflowX = n.overflow[1]),
                (A.overflowY = n.overflow[2]);
            })),
          (f = !1);
        for (r in b)
          f ||
            (H
              ? "hidden" in H && (R = H.hidden)
              : (H = S.access(e, "fxshow", { display: d })),
            u && (H.hidden = !R),
            R && qe([e], !0),
            h.done(function () {
              R || qe([e]), S.remove(e, "fxshow");
              for (r in b) i.style(e, r, b[r]);
            })),
            (f = gn(R ? H[r] : 0, r, h)),
            r in H ||
              ((H[r] = f.start), R && ((f.end = f.start), (f.start = 0)));
      }
    }
    function pr(e, t) {
      var n, r, o, u, a;
      for (n in e)
        if (
          ((r = ue(n)),
          (o = t[r]),
          (u = e[n]),
          Array.isArray(u) && ((o = u[1]), (u = e[n] = u[0])),
          n !== r && ((e[r] = u), delete e[n]),
          (a = i.cssHooks[r]),
          a && "expand" in a)
        ) {
          (u = a.expand(u)), delete e[r];
          for (n in u) n in e || ((e[n] = u[n]), (t[n] = o));
        } else t[r] = o;
    }
    function re(e, t, n) {
      var r,
        o,
        u = 0,
        a = re.prefilters.length,
        c = i.Deferred().always(function () {
          delete f.elem;
        }),
        f = function () {
          if (o) return !1;
          for (
            var x = Pe || hn(),
              h = Math.max(0, d.startTime + d.duration - x),
              b = h / d.duration || 0,
              A = 1 - b,
              R = 0,
              H = d.tweens.length;
            R < H;
            R++
          )
            d.tweens[R].run(A);
          return (
            c.notifyWith(e, [d, A, h]),
            A < 1 && H
              ? h
              : (H || c.notifyWith(e, [d, 1, 0]), c.resolveWith(e, [d]), !1)
          );
        },
        d = c.promise({
          elem: e,
          props: i.extend({}, t),
          opts: i.extend(
            !0,
            { specialEasing: {}, easing: i.easing._default },
            n,
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: Pe || hn(),
          duration: n.duration,
          tweens: [],
          createTween: function (x, h) {
            var b = i.Tween(
              e,
              d.opts,
              x,
              h,
              d.opts.specialEasing[x] || d.opts.easing,
            );
            return d.tweens.push(b), b;
          },
          stop: function (x) {
            var h = 0,
              b = x ? d.tweens.length : 0;
            if (o) return this;
            for (o = !0; h < b; h++) d.tweens[h].run(1);
            return (
              x
                ? (c.notifyWith(e, [d, 1, 0]), c.resolveWith(e, [d, x]))
                : c.rejectWith(e, [d, x]),
              this
            );
          },
        }),
        y = d.props;
      for (pr(y, d.opts.specialEasing); u < a; u++)
        if (((r = re.prefilters[u].call(d, e, y, d.opts)), r))
          return (
            L(r.stop) &&
              (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        i.map(y, gn, d),
        L(d.opts.start) && d.opts.start.call(e, d),
        d
          .progress(d.opts.progress)
          .done(d.opts.done, d.opts.complete)
          .fail(d.opts.fail)
          .always(d.opts.always),
        i.fx.timer(i.extend(f, { elem: e, anim: d, queue: d.opts.queue })),
        d
      );
    }
    (i.Animation = i.extend(re, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return Yt(n.elem, e, $e.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        L(e) ? ((t = e), (e = ["*"])) : (e = e.match(oe));
        for (var n, r = 0, o = e.length; r < o; r++)
          (n = e[r]),
            (re.tweeners[n] = re.tweeners[n] || []),
            re.tweeners[n].unshift(t);
      },
      prefilters: [dr],
      prefilter: function (e, t) {
        t ? re.prefilters.unshift(e) : re.prefilters.push(e);
      },
    })),
      (i.speed = function (e, t, n) {
        var r =
          e && typeof e == "object"
            ? i.extend({}, e)
            : {
                complete: n || (!n && t) || (L(e) && e),
                duration: e,
                easing: (n && t) || (t && !L(t) && t),
              };
        return (
          i.fx.off
            ? (r.duration = 0)
            : typeof r.duration != "number" &&
              (r.duration in i.fx.speeds
                ? (r.duration = i.fx.speeds[r.duration])
                : (r.duration = i.fx.speeds._default)),
          (r.queue == null || r.queue === !0) && (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            L(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
          }),
          r
        );
      }),
      i.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(nt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var o = i.isEmptyObject(e),
            u = i.speed(t, n, r),
            a = function () {
              var c = re(this, i.extend({}, e), u);
              (o || S.get(this, "finish")) && c.stop(!0);
            };
          return (
            (a.finish = a),
            o || u.queue === !1 ? this.each(a) : this.queue(u.queue, a)
          );
        },
        stop: function (e, t, n) {
          var r = function (o) {
            var u = o.stop;
            delete o.stop, u(n);
          };
          return (
            typeof e != "string" && ((n = t), (t = e), (e = void 0)),
            t && this.queue(e || "fx", []),
            this.each(function () {
              var o = !0,
                u = e != null && e + "queueHooks",
                a = i.timers,
                c = S.get(this);
              if (u) c[u] && c[u].stop && r(c[u]);
              else for (u in c) c[u] && c[u].stop && lr.test(u) && r(c[u]);
              for (u = a.length; u--; )
                a[u].elem === this &&
                  (e == null || a[u].queue === e) &&
                  (a[u].anim.stop(n), (o = !1), a.splice(u, 1));
              (o || !n) && i.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = S.get(this),
                r = n[e + "queue"],
                o = n[e + "queueHooks"],
                u = i.timers,
                a = r ? r.length : 0;
              for (
                n.finish = !0,
                  i.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = u.length;
                t--;

              )
                u[t].elem === this &&
                  u[t].queue === e &&
                  (u[t].anim.stop(!0), u.splice(t, 1));
              for (t = 0; t < a; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      i.each(["toggle", "show", "hide"], function (e, t) {
        var n = i.fn[t];
        i.fn[t] = function (r, o, u) {
          return r == null || typeof r == "boolean"
            ? n.apply(this, arguments)
            : this.animate(ut(t, !0), r, o, u);
        };
      }),
      i.each(
        {
          slideDown: ut("show"),
          slideUp: ut("hide"),
          slideToggle: ut("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          i.fn[e] = function (n, r, o) {
            return this.animate(t, n, r, o);
          };
        },
      ),
      (i.timers = []),
      (i.fx.tick = function () {
        var e,
          t = 0,
          n = i.timers;
        for (Pe = Date.now(); t < n.length; t++)
          (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
        n.length || i.fx.stop(), (Pe = void 0);
      }),
      (i.fx.timer = function (e) {
        i.timers.push(e), i.fx.start();
      }),
      (i.fx.interval = 13),
      (i.fx.start = function () {
        ot || ((ot = !0), Tt());
      }),
      (i.fx.stop = function () {
        ot = null;
      }),
      (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (i.fn.delay = function (e, t) {
        return (
          (e = (i.fx && i.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function (n, r) {
            var o = j.setTimeout(n, e);
            r.stop = function () {
              j.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = k.createElement("input"),
          t = k.createElement("select"),
          n = t.appendChild(k.createElement("option"));
        (e.type = "checkbox"),
          (q.checkOn = e.value !== ""),
          (q.optSelected = n.selected),
          (e = k.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (q.radioValue = e.value === "t");
      })();
    var yn,
      Ue = i.expr.attrHandle;
    i.fn.extend({
      attr: function (e, t) {
        return he(this, i.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          i.removeAttr(this, e);
        });
      },
    }),
      i.extend({
        attr: function (e, t, n) {
          var r,
            o,
            u = e.nodeType;
          if (!(u === 3 || u === 8 || u === 2)) {
            if (typeof e.getAttribute > "u") return i.prop(e, t, n);
            if (
              ((u !== 1 || !i.isXMLDoc(e)) &&
                (o =
                  i.attrHooks[t.toLowerCase()] ||
                  (i.expr.match.bool.test(t) ? yn : void 0)),
              n !== void 0)
            ) {
              if (n === null) {
                i.removeAttr(e, t);
                return;
              }
              return o && "set" in o && (r = o.set(e, n, t)) !== void 0
                ? r
                : (e.setAttribute(t, n + ""), n);
            }
            return o && "get" in o && (r = o.get(e, t)) !== null
              ? r
              : ((r = i.find.attr(e, t)), r ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!q.radioValue && t === "radio" && $(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            o = t && t.match(oe);
          if (o && e.nodeType === 1)
            for (; (n = o[r++]); ) e.removeAttribute(n);
        },
      }),
      (yn = {
        set: function (e, t, n) {
          return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ue[t] || i.find.attr;
        Ue[t] = function (r, o, u) {
          var a,
            c,
            f = o.toLowerCase();
          return (
            u ||
              ((c = Ue[f]),
              (Ue[f] = a),
              (a = n(r, o, u) != null ? f : null),
              (Ue[f] = c)),
            a
          );
        };
      });
    var hr = /^(?:input|select|textarea|button)$/i,
      gr = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function (e, t) {
        return he(this, i.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[i.propFix[e] || e];
        });
      },
    }),
      i.extend({
        prop: function (e, t, n) {
          var r,
            o,
            u = e.nodeType;
          if (!(u === 3 || u === 8 || u === 2))
            return (
              (u !== 1 || !i.isXMLDoc(e)) &&
                ((t = i.propFix[t] || t), (o = i.propHooks[t])),
              n !== void 0
                ? o && "set" in o && (r = o.set(e, n, t)) !== void 0
                  ? r
                  : (e[t] = n)
                : o && "get" in o && (r = o.get(e, t)) !== null
                  ? r
                  : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = i.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : hr.test(e.nodeName) || (gr.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      q.optSelected ||
        (i.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      i.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          i.propFix[this.toLowerCase()] = this;
        },
      );
    function Ce(e) {
      var t = e.match(oe) || [];
      return t.join(" ");
    }
    function we(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Ct(e) {
      return Array.isArray(e)
        ? e
        : typeof e == "string"
          ? e.match(oe) || []
          : [];
    }
    i.fn.extend({
      addClass: function (e) {
        var t, n, r, o, u, a;
        return L(e)
          ? this.each(function (c) {
              i(this).addClass(e.call(this, c, we(this)));
            })
          : ((t = Ct(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = we(this)),
                    (n = this.nodeType === 1 && " " + Ce(r) + " "),
                    n)
                  ) {
                    for (u = 0; u < t.length; u++)
                      (o = t[u]),
                        n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    (a = Ce(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this);
      },
      removeClass: function (e) {
        var t, n, r, o, u, a;
        return L(e)
          ? this.each(function (c) {
              i(this).removeClass(e.call(this, c, we(this)));
            })
          : arguments.length
            ? ((t = Ct(e)),
              t.length
                ? this.each(function () {
                    if (
                      ((r = we(this)),
                      (n = this.nodeType === 1 && " " + Ce(r) + " "),
                      n)
                    ) {
                      for (u = 0; u < t.length; u++)
                        for (o = t[u]; n.indexOf(" " + o + " ") > -1; )
                          n = n.replace(" " + o + " ", " ");
                      (a = Ce(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                : this)
            : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          o,
          u,
          a = typeof e,
          c = a === "string" || Array.isArray(e);
        return L(e)
          ? this.each(function (f) {
              i(this).toggleClass(e.call(this, f, we(this), t), t);
            })
          : typeof t == "boolean" && c
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ((n = Ct(e)),
              this.each(function () {
                if (c)
                  for (u = i(this), o = 0; o < n.length; o++)
                    (r = n[o]),
                      u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
                else
                  (e === void 0 || a === "boolean") &&
                    ((r = we(this)),
                    r && S.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || e === !1 ? "" : S.get(this, "__className__") || "",
                      ));
              }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (n.nodeType === 1 && (" " + Ce(we(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
    var yr = /\r/g;
    i.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          o = this[0];
        return arguments.length
          ? ((r = L(e)),
            this.each(function (u) {
              var a;
              this.nodeType === 1 &&
                (r ? (a = e.call(this, u, i(this).val())) : (a = e),
                a == null
                  ? (a = "")
                  : typeof a == "number"
                    ? (a += "")
                    : Array.isArray(a) &&
                      (a = i.map(a, function (c) {
                        return c == null ? "" : c + "";
                      })),
                (t =
                  i.valHooks[this.type] ||
                  i.valHooks[this.nodeName.toLowerCase()]),
                (!t || !("set" in t) || t.set(this, a, "value") === void 0) &&
                  (this.value = a));
            }))
          : o
            ? ((t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]),
              t && "get" in t && (n = t.get(o, "value")) !== void 0
                ? n
                : ((n = o.value),
                  typeof n == "string" ? n.replace(yr, "") : n ?? ""))
            : void 0;
      },
    }),
      i.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = i.find.attr(e, "value");
              return t ?? Ce(i.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                o = e.options,
                u = e.selectedIndex,
                a = e.type === "select-one",
                c = a ? null : [],
                f = a ? u + 1 : o.length;
              for (u < 0 ? (r = f) : (r = a ? u : 0); r < f; r++)
                if (
                  ((n = o[r]),
                  (n.selected || r === u) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !$(n.parentNode, "optgroup")))
                ) {
                  if (((t = i(n).val()), a)) return t;
                  c.push(t);
                }
              return c;
            },
            set: function (e, t) {
              for (
                var n, r, o = e.options, u = i.makeArray(t), a = o.length;
                a--;

              )
                (r = o[a]),
                  (r.selected = i.inArray(i.valHooks.option.get(r), u) > -1) &&
                    (n = !0);
              return n || (e.selectedIndex = -1), u;
            },
          },
        },
      }),
      i.each(["radio", "checkbox"], function () {
        (i.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = i.inArray(i(e).val(), t) > -1);
          },
        }),
          q.checkOn ||
            (i.valHooks[this].get = function (e) {
              return e.getAttribute("value") === null ? "on" : e.value;
            });
      });
    var Ve = j.location,
      vn = { guid: Date.now() },
      wt = /\?/;
    i.parseXML = function (e) {
      var t, n;
      if (!e || typeof e != "string") return null;
      try {
        t = new j.DOMParser().parseFromString(e, "text/xml");
      } catch {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (!t || n) &&
          i.error(
            "Invalid XML: " +
              (n
                ? i.map(n.childNodes, function (r) {
                    return r.textContent;
                  }).join(`
`)
                : e),
          ),
        t
      );
    };
    var xn = /^(?:focusinfocus|focusoutblur)$/,
      bn = function (e) {
        e.stopPropagation();
      };
    i.extend(i.event, {
      trigger: function (e, t, n, r) {
        var o,
          u,
          a,
          c,
          f,
          d,
          y,
          x,
          h = [n || k],
          b = Ie.call(e, "type") ? e.type : e,
          A = Ie.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((u = x = a = n = n || k),
          !(n.nodeType === 3 || n.nodeType === 8) &&
            !xn.test(b + i.event.triggered) &&
            (b.indexOf(".") > -1 &&
              ((A = b.split(".")), (b = A.shift()), A.sort()),
            (f = b.indexOf(":") < 0 && "on" + b),
            (e = e[i.expando] ? e : new i.Event(b, typeof e == "object" && e)),
            (e.isTrigger = r ? 2 : 3),
            (e.namespace = A.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = t == null ? [e] : i.makeArray(t, [e])),
            (y = i.event.special[b] || {}),
            !(!r && y.trigger && y.trigger.apply(n, t) === !1)))
        ) {
          if (!r && !y.noBubble && !De(n)) {
            for (
              c = y.delegateType || b, xn.test(c + b) || (u = u.parentNode);
              u;
              u = u.parentNode
            )
              h.push(u), (a = u);
            a === (n.ownerDocument || k) &&
              h.push(a.defaultView || a.parentWindow || j);
          }
          for (o = 0; (u = h[o++]) && !e.isPropagationStopped(); )
            (x = u),
              (e.type = o > 1 ? c : y.bindType || b),
              (d =
                (S.get(u, "events") || Object.create(null))[e.type] &&
                S.get(u, "handle")),
              d && d.apply(u, t),
              (d = f && u[f]),
              d &&
                d.apply &&
                Fe(u) &&
                ((e.result = d.apply(u, t)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = b),
            !r &&
              !e.isDefaultPrevented() &&
              (!y._default || y._default.apply(h.pop(), t) === !1) &&
              Fe(n) &&
              f &&
              L(n[b]) &&
              !De(n) &&
              ((a = n[f]),
              a && (n[f] = null),
              (i.event.triggered = b),
              e.isPropagationStopped() && x.addEventListener(b, bn),
              n[b](),
              e.isPropagationStopped() && x.removeEventListener(b, bn),
              (i.event.triggered = void 0),
              a && (n[f] = a)),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
        i.event.trigger(r, null, t);
      },
    }),
      i.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            i.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return i.event.trigger(e, t, n, !0);
        },
      });
    var vr = /\[\]$/,
      mn = /\r?\n/g,
      xr = /^(?:submit|button|image|reset|file)$/i,
      br = /^(?:input|select|textarea|keygen)/i;
    function St(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function (u, a) {
          n || vr.test(e)
            ? r(e, a)
            : St(
                e + "[" + (typeof a == "object" && a != null ? u : "") + "]",
                a,
                n,
                r,
              );
        });
      else if (!n && Ae(t) === "object")
        for (o in t) St(e + "[" + o + "]", t[o], n, r);
      else r(e, t);
    }
    (i.param = function (e, t) {
      var n,
        r = [],
        o = function (u, a) {
          var c = L(a) ? a() : a;
          r[r.length] =
            encodeURIComponent(u) + "=" + encodeURIComponent(c ?? "");
        };
      if (e == null) return "";
      if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
        i.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) St(n, e[n], t, o);
      return r.join("&");
    }),
      i.fn.extend({
        serialize: function () {
          return i.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = i.prop(this, "elements");
            return e ? i.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !i(this).is(":disabled") &&
                br.test(this.nodeName) &&
                !xr.test(e) &&
                (this.checked || !Be.test(e))
              );
            })
            .map(function (e, t) {
              var n = i(this).val();
              return n == null
                ? null
                : Array.isArray(n)
                  ? i.map(n, function (r) {
                      return {
                        name: t.name,
                        value: r.replace(
                          mn,
                          `\r
`,
                        ),
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(
                        mn,
                        `\r
`,
                      ),
                    };
            })
            .get();
        },
      });
    var mr = /%20/g,
      Tr = /#.*$/,
      Cr = /([?&])_=[^&]*/,
      wr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Sr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Er = /^(?:GET|HEAD)$/,
      Dr = /^\/\//,
      Tn = {},
      Et = {},
      Cn = "*/".concat("*"),
      Dt = k.createElement("a");
    Dt.href = Ve.href;
    function wn(e) {
      return function (t, n) {
        typeof t != "string" && ((n = t), (t = "*"));
        var r,
          o = 0,
          u = t.toLowerCase().match(oe) || [];
        if (L(n))
          for (; (r = u[o++]); )
            r[0] === "+"
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function Sn(e, t, n, r) {
      var o = {},
        u = e === Et;
      function a(c) {
        var f;
        return (
          (o[c] = !0),
          i.each(e[c] || [], function (d, y) {
            var x = y(t, n, r);
            if (typeof x == "string" && !u && !o[x])
              return t.dataTypes.unshift(x), a(x), !1;
            if (u) return !(f = x);
          }),
          f
        );
      }
      return a(t.dataTypes[0]) || (!o["*"] && a("*"));
    }
    function At(e, t) {
      var n,
        r,
        o = i.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function Ar(e, t, n) {
      for (var r, o, u, a, c = e.contents, f = e.dataTypes; f[0] === "*"; )
        f.shift(),
          r === void 0 &&
            (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) {
        for (o in c)
          if (c[o] && c[o].test(r)) {
            f.unshift(o);
            break;
          }
      }
      if (f[0] in n) u = f[0];
      else {
        for (o in n) {
          if (!f[0] || e.converters[o + " " + f[0]]) {
            u = o;
            break;
          }
          a || (a = o);
        }
        u = u || a;
      }
      if (u) return u !== f[0] && f.unshift(u), n[u];
    }
    function Nr(e, t, n, r) {
      var o,
        u,
        a,
        c,
        f,
        d = {},
        y = e.dataTypes.slice();
      if (y[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
      for (u = y.shift(); u; )
        if (
          (e.responseFields[u] && (n[e.responseFields[u]] = t),
          !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (f = u),
          (u = y.shift()),
          u)
        ) {
          if (u === "*") u = f;
          else if (f !== "*" && f !== u) {
            if (((a = d[f + " " + u] || d["* " + u]), !a)) {
              for (o in d)
                if (
                  ((c = o.split(" ")),
                  c[1] === u && ((a = d[f + " " + c[0]] || d["* " + c[0]]), a))
                ) {
                  a === !0
                    ? (a = d[o])
                    : d[o] !== !0 && ((u = c[0]), y.unshift(c[1]));
                  break;
                }
            }
            if (a !== !0)
              if (a && e.throws) t = a(t);
              else
                try {
                  t = a(t);
                } catch (x) {
                  return {
                    state: "parsererror",
                    error: a ? x : "No conversion from " + f + " to " + u,
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ve.href,
        type: "GET",
        isLocal: Sr.test(Ve.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Cn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? At(At(e, i.ajaxSettings), t) : At(i.ajaxSettings, e);
      },
      ajaxPrefilter: wn(Tn),
      ajaxTransport: wn(Et),
      ajax: function (e, t) {
        typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
        var n,
          r,
          o,
          u,
          a,
          c,
          f,
          d,
          y,
          x,
          h = i.ajaxSetup({}, t),
          b = h.context || h,
          A = h.context && (b.nodeType || b.jquery) ? i(b) : i.event,
          R = i.Deferred(),
          H = i.Callbacks("once memory"),
          V = h.statusCode || {},
          z = {},
          ae = {},
          se = "canceled",
          M = {
            readyState: 0,
            getResponseHeader: function (I) {
              var B;
              if (f) {
                if (!u)
                  for (u = {}; (B = wr.exec(o)); )
                    u[B[1].toLowerCase() + " "] = (
                      u[B[1].toLowerCase() + " "] || []
                    ).concat(B[2]);
                B = u[I.toLowerCase() + " "];
              }
              return B == null ? null : B.join(", ");
            },
            getAllResponseHeaders: function () {
              return f ? o : null;
            },
            setRequestHeader: function (I, B) {
              return (
                f == null &&
                  ((I = ae[I.toLowerCase()] = ae[I.toLowerCase()] || I),
                  (z[I] = B)),
                this
              );
            },
            overrideMimeType: function (I) {
              return f == null && (h.mimeType = I), this;
            },
            statusCode: function (I) {
              var B;
              if (I)
                if (f) M.always(I[M.status]);
                else for (B in I) V[B] = [V[B], I[B]];
              return this;
            },
            abort: function (I) {
              var B = I || se;
              return n && n.abort(B), Se(0, B), this;
            },
          };
        if (
          (R.promise(M),
          (h.url = ((e || h.url || Ve.href) + "").replace(
            Dr,
            Ve.protocol + "//",
          )),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(oe) || [""]),
          h.crossDomain == null)
        ) {
          c = k.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Dt.protocol + "//" + Dt.host != c.protocol + "//" + c.host);
          } catch {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            typeof h.data != "string" &&
            (h.data = i.param(h.data, h.traditional)),
          Sn(Tn, h, t, M),
          f)
        )
          return M;
        (d = i.event && h.global),
          d && i.active++ === 0 && i.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Er.test(h.type)),
          (r = h.url.replace(Tr, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) === 0 &&
              (h.data = h.data.replace(mr, "+"))
            : ((x = h.url.slice(r.length)),
              h.data &&
                (h.processData || typeof h.data == "string") &&
                ((r += (wt.test(r) ? "&" : "?") + h.data), delete h.data),
              h.cache === !1 &&
                ((r = r.replace(Cr, "$1")),
                (x = (wt.test(r) ? "&" : "?") + "_=" + vn.guid++ + x)),
              (h.url = r + x)),
          h.ifModified &&
            (i.lastModified[r] &&
              M.setRequestHeader("If-Modified-Since", i.lastModified[r]),
            i.etag[r] && M.setRequestHeader("If-None-Match", i.etag[r])),
          ((h.data && h.hasContent && h.contentType !== !1) || t.contentType) &&
            M.setRequestHeader("Content-Type", h.contentType),
          M.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  (h.dataTypes[0] !== "*" ? ", " + Cn + "; q=0.01" : "")
              : h.accepts["*"],
          );
        for (y in h.headers) M.setRequestHeader(y, h.headers[y]);
        if (h.beforeSend && (h.beforeSend.call(b, M, h) === !1 || f))
          return M.abort();
        if (
          ((se = "abort"),
          H.add(h.complete),
          M.done(h.success),
          M.fail(h.error),
          (n = Sn(Et, h, t, M)),
          !n)
        )
          Se(-1, "No Transport");
        else {
          if (((M.readyState = 1), d && A.trigger("ajaxSend", [M, h]), f))
            return M;
          h.async &&
            h.timeout > 0 &&
            (a = j.setTimeout(function () {
              M.abort("timeout");
            }, h.timeout));
          try {
            (f = !1), n.send(z, Se);
          } catch (I) {
            if (f) throw I;
            Se(-1, I);
          }
        }
        function Se(I, B, Ge, kt) {
          var fe,
            Qe,
            ce,
            xe,
            be,
            te = B;
          f ||
            ((f = !0),
            a && j.clearTimeout(a),
            (n = void 0),
            (o = kt || ""),
            (M.readyState = I > 0 ? 4 : 0),
            (fe = (I >= 200 && I < 300) || I === 304),
            Ge && (xe = Ar(h, M, Ge)),
            !fe &&
              i.inArray("script", h.dataTypes) > -1 &&
              i.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (xe = Nr(h, xe, M, fe)),
            fe
              ? (h.ifModified &&
                  ((be = M.getResponseHeader("Last-Modified")),
                  be && (i.lastModified[r] = be),
                  (be = M.getResponseHeader("etag")),
                  be && (i.etag[r] = be)),
                I === 204 || h.type === "HEAD"
                  ? (te = "nocontent")
                  : I === 304
                    ? (te = "notmodified")
                    : ((te = xe.state),
                      (Qe = xe.data),
                      (ce = xe.error),
                      (fe = !ce)))
              : ((ce = te), (I || !te) && ((te = "error"), I < 0 && (I = 0))),
            (M.status = I),
            (M.statusText = (B || te) + ""),
            fe ? R.resolveWith(b, [Qe, te, M]) : R.rejectWith(b, [M, te, ce]),
            M.statusCode(V),
            (V = void 0),
            d &&
              A.trigger(fe ? "ajaxSuccess" : "ajaxError", [M, h, fe ? Qe : ce]),
            H.fireWith(b, [M, te]),
            d &&
              (A.trigger("ajaxComplete", [M, h]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        return M;
      },
      getJSON: function (e, t, n) {
        return i.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return i.get(e, void 0, t, "script");
      },
    }),
      i.each(["get", "post"], function (e, t) {
        i[t] = function (n, r, o, u) {
          return (
            L(r) && ((u = u || o), (o = r), (r = void 0)),
            i.ajax(
              i.extend(
                { url: n, type: t, dataType: u, data: r, success: o },
                i.isPlainObject(n) && n,
              ),
            )
          );
        };
      }),
      i.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" &&
            (e.contentType = e.headers[t] || "");
      }),
      (i._evalUrl = function (e, t, n) {
        return i.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (r) {
            i.globalEval(r, t, n);
          },
        });
      }),
      i.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (L(e) && (e = e.call(this[0])),
              (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                  return n;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return L(e)
            ? this.each(function (t) {
                i(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = i(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = L(e);
          return this.each(function (n) {
            i(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                i(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (i.expr.pseudos.hidden = function (e) {
        return !i.expr.pseudos.visible(e);
      }),
      (i.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (i.ajaxSettings.xhr = function () {
        try {
          return new j.XMLHttpRequest();
        } catch {}
      });
    var kr = { 0: 200, 1223: 204 },
      Xe = i.ajaxSettings.xhr();
    (q.cors = !!Xe && "withCredentials" in Xe),
      (q.ajax = Xe = !!Xe),
      i.ajaxTransport(function (e) {
        var t, n;
        if (q.cors || (Xe && !e.crossDomain))
          return {
            send: function (r, o) {
              var u,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (u in e.xhrFields) a[u] = e.xhrFields[u];
              e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
                !e.crossDomain &&
                  !r["X-Requested-With"] &&
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (u in r) a.setRequestHeader(u, r[u]);
              (t = function (c) {
                return function () {
                  t &&
                    ((t =
                      n =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    c === "abort"
                      ? a.abort()
                      : c === "error"
                        ? typeof a.status != "number"
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            kr[a.status] || a.status,
                            a.statusText,
                            (a.responseType || "text") !== "text" ||
                              typeof a.responseText != "string"
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders(),
                          ));
                };
              }),
                (a.onload = t()),
                (n = a.onerror = a.ontimeout = t("error")),
                a.onabort !== void 0
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function () {
                      a.readyState === 4 &&
                        j.setTimeout(function () {
                          t && n();
                        });
                    }),
                (t = t("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (c) {
                if (t) throw c;
              }
            },
            abort: function () {
              t && t();
            },
          };
      }),
      i.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      i.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return i.globalEval(e), e;
          },
        },
      }),
      i.ajaxPrefilter("script", function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      i.ajaxTransport("script", function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function (r, o) {
              (t = i("<script>")
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (u) {
                    t.remove(),
                      (n = null),
                      u && o(u.type === "error" ? 404 : 200, u.type);
                  }),
                )),
                k.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var En = [],
      Nt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = En.pop() || i.expando + "_" + vn.guid++;
        return (this[e] = !0), e;
      },
    }),
      i.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          o,
          u,
          a =
            e.jsonp !== !1 &&
            (Nt.test(e.url)
              ? "url"
              : typeof e.data == "string" &&
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) === 0 &&
                Nt.test(e.data) &&
                "data");
        if (a || e.dataTypes[0] === "jsonp")
          return (
            (r = e.jsonpCallback =
              L(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Nt, "$1" + r))
              : e.jsonp !== !1 &&
                (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return u || i.error(r + " was not called"), u[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = j[r]),
            (j[r] = function () {
              u = arguments;
            }),
            n.always(function () {
              o === void 0 ? i(j).removeProp(r) : (j[r] = o),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), En.push(r)),
                u && L(o) && o(u[0]),
                (u = o = void 0);
            }),
            "script"
          );
      }),
      (q.createHTMLDocument = (function () {
        var e = k.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          e.childNodes.length === 2
        );
      })()),
      (i.parseHTML = function (e, t, n) {
        if (typeof e != "string") return [];
        typeof t == "boolean" && ((n = t), (t = !1));
        var r, o, u;
        return (
          t ||
            (q.createHTMLDocument
              ? ((t = k.implementation.createHTMLDocument("")),
                (r = t.createElement("base")),
                (r.href = k.location.href),
                t.head.appendChild(r))
              : (t = k)),
          (o = zt.exec(e)),
          (u = !n && []),
          o
            ? [t.createElement(o[1])]
            : ((o = en([e], t, u)),
              u && u.length && i(u).remove(),
              i.merge([], o.childNodes))
        );
      }),
      (i.fn.load = function (e, t, n) {
        var r,
          o,
          u,
          a = this,
          c = e.indexOf(" ");
        return (
          c > -1 && ((r = Ce(e.slice(c))), (e = e.slice(0, c))),
          L(t)
            ? ((n = t), (t = void 0))
            : t && typeof t == "object" && (o = "POST"),
          a.length > 0 &&
            i
              .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (f) {
                (u = arguments),
                  a.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f);
              })
              .always(
                n &&
                  function (f, d) {
                    a.each(function () {
                      n.apply(this, u || [f.responseText, d, f]);
                    });
                  },
              ),
          this
        );
      }),
      (i.expr.pseudos.animated = function (e) {
        return i.grep(i.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (i.offset = {
        setOffset: function (e, t, n) {
          var r,
            o,
            u,
            a,
            c,
            f,
            d,
            y = i.css(e, "position"),
            x = i(e),
            h = {};
          y === "static" && (e.style.position = "relative"),
            (c = x.offset()),
            (u = i.css(e, "top")),
            (f = i.css(e, "left")),
            (d =
              (y === "absolute" || y === "fixed") &&
              (u + f).indexOf("auto") > -1),
            d
              ? ((r = x.position()), (a = r.top), (o = r.left))
              : ((a = parseFloat(u) || 0), (o = parseFloat(f) || 0)),
            L(t) && (t = t.call(e, n, i.extend({}, c))),
            t.top != null && (h.top = t.top - c.top + a),
            t.left != null && (h.left = t.left - c.left + o),
            "using" in t ? t.using.call(e, h) : x.css(h);
        },
      }),
      i.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === void 0
              ? this
              : this.each(function (o) {
                  i.offset.setOffset(this, e, o);
                });
          var t,
            n,
            r = this[0];
          if (r)
            return r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                i.css(e, "position") === "static";

              )
                e = e.parentNode;
              e &&
                e !== r &&
                e.nodeType === 1 &&
                ((o = i(e).offset()),
                (o.top += i.css(e, "borderTopWidth", !0)),
                (o.left += i.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - i.css(r, "marginTop", !0),
              left: t.left - o.left - i.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && i.css(e, "position") === "static";

            )
              e = e.offsetParent;
            return e || Te;
          });
        },
      }),
      i.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = t === "pageYOffset";
          i.fn[e] = function (r) {
            return he(
              this,
              function (o, u, a) {
                var c;
                if (
                  (De(o) ? (c = o) : o.nodeType === 9 && (c = o.defaultView),
                  a === void 0)
                )
                  return c ? c[t] : o[u];
                c
                  ? c.scrollTo(n ? c.pageXOffset : a, n ? a : c.pageYOffset)
                  : (o[u] = a);
              },
              e,
              r,
              arguments.length,
            );
          };
        },
      ),
      i.each(["top", "left"], function (e, t) {
        i.cssHooks[t] = an(q.pixelPosition, function (n, r) {
          if (r)
            return (r = ze(n, t)), vt.test(r) ? i(n).position()[t] + "px" : r;
        });
      }),
      i.each({ Height: "height", Width: "width" }, function (e, t) {
        i.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            i.fn[r] = function (o, u) {
              var a = arguments.length && (n || typeof o != "boolean"),
                c = n || (o === !0 || u === !0 ? "margin" : "border");
              return he(
                this,
                function (f, d, y) {
                  var x;
                  return De(f)
                    ? r.indexOf("outer") === 0
                      ? f["inner" + e]
                      : f.document.documentElement["client" + e]
                    : f.nodeType === 9
                      ? ((x = f.documentElement),
                        Math.max(
                          f.body["scroll" + e],
                          x["scroll" + e],
                          f.body["offset" + e],
                          x["offset" + e],
                          x["client" + e],
                        ))
                      : y === void 0
                        ? i.css(f, d, c)
                        : i.style(f, d, y, c);
                },
                t,
                a ? o : void 0,
                a,
              );
            };
          },
        );
      }),
      i.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        },
      ),
      i.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return arguments.length === 1
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
      }),
      i.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " ",
        ),
        function (e, t) {
          i.fn[t] = function (n, r) {
            return arguments.length > 0
              ? this.on(t, null, n, r)
              : this.trigger(t);
          };
        },
      );
    var jr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (i.proxy = function (e, t) {
      var n, r, o;
      if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!L(e)))
        return (
          (r = Z.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, r.concat(Z.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || i.guid++),
          o
        );
    }),
      (i.holdReady = function (e) {
        e ? i.readyWait++ : i.ready(!0);
      }),
      (i.isArray = Array.isArray),
      (i.parseJSON = JSON.parse),
      (i.nodeName = $),
      (i.isFunction = L),
      (i.isWindow = De),
      (i.camelCase = ue),
      (i.type = Ae),
      (i.now = Date.now),
      (i.isNumeric = function (e) {
        var t = i.type(e);
        return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
      }),
      (i.trim = function (e) {
        return e == null ? "" : (e + "").replace(jr, "$1");
      });
    var qr = j.jQuery,
      Lr = j.$;
    return (
      (i.noConflict = function (e) {
        return (
          j.$ === i && (j.$ = Lr), e && j.jQuery === i && (j.jQuery = qr), i
        );
      }),
      typeof Je > "u" && (j.jQuery = j.$ = i),
      i
    );
  });
})(kn);
var $r = kn.exports;
const zr = Wr($r);
export { zr as $ };
