function de(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Le } = Object.prototype,
  { getPrototypeOf: Q } = Object,
  H = ((e) => (t) => {
    const n = Le.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  T = (e) => ((e = e.toLowerCase()), (t) => H(t) === e),
  I = (e) => (t) => typeof t === e,
  { isArray: F } = Array,
  B = I("undefined");
function Ue(e) {
  return (
    e !== null &&
    !B(e) &&
    e.constructor !== null &&
    !B(e.constructor) &&
    R(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const pe = T("ArrayBuffer");
function ke(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && pe(e.buffer)),
    t
  );
}
const je = I("string"),
  R = I("function"),
  he = I("number"),
  q = (e) => e !== null && typeof e == "object",
  He = (e) => e === !0 || e === !1,
  k = (e) => {
    if (H(e) !== "object") return !1;
    const t = Q(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ie = T("Date"),
  qe = T("File"),
  Me = T("Blob"),
  ze = T("FileList"),
  Je = (e) => q(e) && R(e.pipe),
  Ve = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (R(e.append) &&
          ((t = H(e)) === "formdata" ||
            (t === "object" &&
              R(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  We = T("URLSearchParams"),
  $e = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function D(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), F(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function me(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const ye =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Ee = (e) => !B(e) && e !== ye;
function $() {
  const { caseless: e } = (Ee(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && me(t, s)) || s;
      k(t[o]) && k(r)
        ? (t[o] = $(t[o], r))
        : k(r)
          ? (t[o] = $({}, r))
          : F(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && D(arguments[r], n);
  return t;
}
const Ke = (e, t, n, { allOwnKeys: r } = {}) => (
    D(
      t,
      (s, o) => {
        n && R(s) ? (e[o] = de(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Ge = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Xe = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ve = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && Q(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Qe = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ze = (e) => {
    if (!e) return null;
    if (F(e)) return e;
    let t = e.length;
    if (!he(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ye = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Q(Uint8Array)),
  et = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  tt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  nt = T("HTMLFormElement"),
  rt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  te = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  st = T("RegExp"),
  we = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    D(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  ot = (e) => {
    we(e, (t, n) => {
      if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (R(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  it = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return F(e) ? r(e) : r(String(e).split(t)), n;
  },
  at = () => {},
  ct = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  z = "abcdefghijklmnopqrstuvwxyz",
  ne = "0123456789",
  be = { DIGIT: ne, ALPHA: z, ALPHA_DIGIT: z + z.toUpperCase() + ne },
  ut = (e = 16, t = be.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function lt(e) {
  return !!(
    e &&
    R(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const ft = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (q(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = F(r) ? [] : {};
            return (
              D(r, (i, c) => {
                const p = n(i, s + 1);
                !B(p) && (o[c] = p);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  dt = T("AsyncFunction"),
  pt = (e) => e && (q(e) || R(e)) && R(e.then) && R(e.catch),
  a = {
    isArray: F,
    isArrayBuffer: pe,
    isBuffer: Ue,
    isFormData: Ve,
    isArrayBufferView: ke,
    isString: je,
    isNumber: he,
    isBoolean: He,
    isObject: q,
    isPlainObject: k,
    isUndefined: B,
    isDate: Ie,
    isFile: qe,
    isBlob: Me,
    isRegExp: st,
    isFunction: R,
    isStream: Je,
    isURLSearchParams: We,
    isTypedArray: Ye,
    isFileList: ze,
    forEach: D,
    merge: $,
    extend: Ke,
    trim: $e,
    stripBOM: Ge,
    inherits: Xe,
    toFlatObject: ve,
    kindOf: H,
    kindOfTest: T,
    endsWith: Qe,
    toArray: Ze,
    forEachEntry: et,
    matchAll: tt,
    isHTMLForm: nt,
    hasOwnProperty: te,
    hasOwnProp: te,
    reduceDescriptors: we,
    freezeMethods: ot,
    toObjectSet: it,
    toCamelCase: rt,
    noop: at,
    toFiniteNumber: ct,
    findKey: me,
    global: ye,
    isContextDefined: Ee,
    ALPHABET: be,
    generateString: ut,
    isSpecCompliantForm: lt,
    toJSONObject: ft,
    isAsyncFn: dt,
    isThenable: pt,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Se = m.prototype,
  Re = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Re[e] = { value: e };
});
Object.defineProperties(m, Re);
Object.defineProperty(Se, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Se);
  return (
    a.toFlatObject(
      e,
      i,
      function (p) {
        return p !== Error.prototype;
      },
      (c) => c !== "isAxiosError",
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const ht = null;
function K(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Oe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function re(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Oe(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function mt(e) {
  return a.isArray(e) && !e.some(K);
}
const yt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function M(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, w) {
        return !a.isUndefined(w[d]);
      },
    ));
  const r = n.metaTokens,
    s = n.visitor || l,
    o = n.dots,
    i = n.indexes,
    p = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null) return "";
    if (a.isDate(f)) return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? p && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function l(f, d, w) {
    let b = f;
    if (f && !w && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        (d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (a.isArray(f) && mt(f)) ||
        ((a.isFileList(f) || a.endsWith(d, "[]")) && (b = a.toArray(f)))
      )
        return (
          (d = Oe(d)),
          b.forEach(function (N, De) {
            !(a.isUndefined(N) || N === null) &&
              t.append(
                i === !0 ? re([d], De, o) : i === null ? d : d + "[]",
                h(N),
              );
          }),
          !1
        );
    }
    return K(f) ? !0 : (t.append(re(w, d, o), h(f)), !1);
  }
  const u = [],
    E = Object.assign(yt, {
      defaultVisitor: l,
      convertValue: h,
      isVisitable: K,
    });
  function S(f, d) {
    if (!a.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      u.push(f),
        a.forEach(f, function (b, g) {
          (!(a.isUndefined(b) || b === null) &&
            s.call(t, b, a.isString(g) ? g.trim() : g, d, E)) === !0 &&
            S(b, d ? d.concat(g) : [g]);
        }),
        u.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function se(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Z(e, t) {
  (this._pairs = []), e && M(e, this, t);
}
const Ae = Z.prototype;
Ae.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ae.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, se);
      }
    : se;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Et(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Te(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Et,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new Z(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class oe {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ge = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  wt = typeof URLSearchParams < "u" ? URLSearchParams : Z,
  bt = typeof FormData < "u" ? FormData : null,
  St = typeof Blob < "u" ? Blob : null,
  Rt = {
    isBrowser: !0,
    classes: { URLSearchParams: wt, FormData: bt, Blob: St },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ne = typeof window < "u" && typeof document < "u",
  Ot = ((e) => Ne && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  At =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Tt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ne,
        hasStandardBrowserEnv: Ot,
        hasStandardBrowserWebWorkerEnv: At,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A = { ...Tt, ...Rt };
function gt(e, t) {
  return M(
    e,
    new A.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return A.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Nt(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function xt(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function xe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i),
      p = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      p
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = xt(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Nt(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Pt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const L = {
  transitional: ge,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(xe(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return gt(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return M(c ? { "files[]": t } : t, p && new p(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Pt(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || L.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError"
              ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: A.classes.FormData, Blob: A.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  L.headers[e] = {};
});
const Ct = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ft = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Ct[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ie = Symbol("internals");
function _(e) {
  return e && String(e).trim().toLowerCase();
}
function j(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(j) : String(e);
}
function _t(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Bt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function J(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function Dt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Lt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class O {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const l = _(p);
      if (!l) throw new Error("header name must be a non-empty string");
      const u = a.findKey(s, l);
      (!u || s[u] === void 0 || h === !0 || (h === void 0 && s[u] !== !1)) &&
        (s[u || p] = j(c));
    }
    const i = (c, p) => a.forEach(c, (h, l) => o(h, l, p));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !Bt(t)
          ? i(Ft(t), n)
          : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = _(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return _t(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = _(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || J(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = _(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || J(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || J(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = j(s)), delete n[o];
          return;
        }
        const c = t ? Dt(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = j(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ie] = this[ie] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = _(i);
      r[c] || (Lt(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
O.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(O.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(O);
function V(e, t) {
  const n = this || L,
    r = t || n,
    s = O.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Pe(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(U, m, { __CANCEL__: !0 });
function Ut(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          "Request failed with status code " + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const kt = A.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          a.isString(r) && i.push("path=" + r),
          a.isString(s) && i.push("domain=" + s),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function jt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ht(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ce(e, t) {
  return e && !jt(t) ? Ht(e, t) : t;
}
const It = A.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const c = a.isString(i) ? s(i) : i;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function qt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Mt(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (p) {
      const h = Date.now(),
        l = r[o];
      i || (i = h), (n[s] = p), (r[s] = h);
      let u = o,
        E = 0;
      for (; u !== s; ) (E += n[u++]), (u = u % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), h - i < t)) return;
      const S = l && h - l;
      return S ? Math.round((E * 1e3) / S) : void 0;
    }
  );
}
function ae(e, t) {
  let n = 0;
  const r = Mt(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      c = o - n,
      p = r(c),
      h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s,
    };
    (l[t ? "download" : "upload"] = !0), e(l);
  };
}
const zt = typeof XMLHttpRequest < "u",
  Jt =
    zt &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = O.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: c } = e,
          p;
        function h() {
          e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener("abort", p);
        }
        let l;
        if (a.isFormData(s)) {
          if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((l = o.getContentType()) !== !1) {
            const [d, ...w] = l
              ? l
                  .split(";")
                  .map((b) => b.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([d || "multipart/form-data", ...w].join("; "));
          }
        }
        let u = new XMLHttpRequest();
        if (e.auth) {
          const d = e.auth.username || "",
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(d + ":" + w));
        }
        const E = Ce(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Te(E, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function S() {
          if (!u) return;
          const d = O.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
            ),
            b = {
              data:
                !i || i === "text" || i === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: d,
              config: e,
              request: u,
            };
          Ut(
            function (N) {
              n(N), h();
            },
            function (N) {
              r(N), h();
            },
            b,
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = S)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(S);
              }),
          (u.onabort = function () {
            u &&
              (r(new m("Request aborted", m.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let w = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const b = e.transitional || ge;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(
                new m(
                  w,
                  b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                  e,
                  u,
                ),
              ),
              (u = null);
          }),
          A.hasStandardBrowserEnv &&
            (c && a.isFunction(c) && (c = c(e)), c || (c !== !1 && It(E))))
        ) {
          const d =
            e.xsrfHeaderName && e.xsrfCookieName && kt.read(e.xsrfCookieName);
          d && o.set(e.xsrfHeaderName, d);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in u &&
            a.forEach(o.toJSON(), function (w, b) {
              u.setRequestHeader(b, w);
            }),
          a.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          i && i !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", ae(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", ae(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((p = (d) => {
              u &&
                (r(!d || d.type ? new U(null, e, u) : d),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(p),
            e.signal &&
              (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
        const f = qt(E);
        if (f && A.protocols.indexOf(f) === -1) {
          r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  G = { http: ht, xhr: Jt };
a.forEach(G, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ce = (e) => `- ${e}`,
  Vt = (e) => a.isFunction(e) || e === null || e === !1,
  Fe = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Vt(n) && ((r = G[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new m(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, p]) =>
            `adapter ${c} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(ce).join(`
`)
            : " " + ce(o[0])
          : "as no adapter specified";
        throw new m(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: G,
  };
function W(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new U(null, e);
}
function ue(e) {
  return (
    W(e),
    (e.headers = O.from(e.headers)),
    (e.data = V.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Fe.getAdapter(e.adapter || L.adapter)(e).then(
      function (r) {
        return (
          W(e),
          (r.data = V.call(e, e.transformResponse, r)),
          (r.headers = O.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Pe(r) ||
            (W(e),
            r &&
              r.response &&
              ((r.response.data = V.call(e, e.transformResponse, r.response)),
              (r.response.headers = O.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const le = (e) => (e instanceof O ? { ...e } : e);
function C(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, u) {
    return a.isPlainObject(h) && a.isPlainObject(l)
      ? a.merge.call({ caseless: u }, h, l)
      : a.isPlainObject(l)
        ? a.merge({}, l)
        : a.isArray(l)
          ? l.slice()
          : l;
  }
  function s(h, l, u) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h)) return r(void 0, h, u);
    } else return r(h, l, u);
  }
  function o(h, l) {
    if (!a.isUndefined(l)) return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h)) return r(void 0, h);
    } else return r(void 0, l);
  }
  function c(h, l, u) {
    if (u in t) return r(h, l);
    if (u in e) return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (h, l) => s(le(h), le(l), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const u = p[l] || s,
        E = u(e[l], t[l], l);
      (a.isUndefined(E) && u !== c) || (n[l] = E);
    }),
    n
  );
}
const _e = "1.6.8",
  Y = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Y[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const fe = {};
Y.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      _e +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED,
      );
    return (
      n &&
        !fe[i] &&
        ((fe[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function Wt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        p = c === void 0 || i(c, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const X = { assertOptions: Wt, validators: Y },
  x = X.validators;
class P {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new oe(), response: new oe() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = C(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      X.assertOptions(
        r,
        {
          silentJSONParsing: x.transitional(x.boolean),
          forcedJSONParsing: x.transitional(x.boolean),
          clarifyTimeoutError: x.transitional(x.boolean),
        },
        !1,
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : X.assertOptions(
              s,
              { encode: x.function, serialize: x.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete o[f];
        },
      ),
      (n.headers = O.concat(i, o));
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == "function" && d.runWhen(n) === !1) ||
        ((p = p && d.synchronous), c.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (d) {
      h.push(d.fulfilled, d.rejected);
    });
    let l,
      u = 0,
      E;
    if (!p) {
      const f = [ue.bind(this), void 0];
      for (
        f.unshift.apply(f, c),
          f.push.apply(f, h),
          E = f.length,
          l = Promise.resolve(n);
        u < E;

      )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    E = c.length;
    let S = n;
    for (u = 0; u < E; ) {
      const f = c[u++],
        d = c[u++];
      try {
        S = f(S);
      } catch (w) {
        d.call(this, w);
        break;
      }
    }
    try {
      l = ue.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, E = h.length; u < E; ) l = l.then(h[u++], h[u++]);
    return l;
  }
  getUri(t) {
    t = C(this.defaults, t);
    const n = Ce(t.baseURL, t.url);
    return Te(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  P.prototype[t] = function (n, r) {
    return this.request(
      C(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        C(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  (P.prototype[t] = n()), (P.prototype[t + "Form"] = n(!0));
});
class ee {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new U(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ee(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function $t(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Kt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const v = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(v).forEach(([e, t]) => {
  v[t] = e;
});
function Be(e) {
  const t = new P(e),
    n = de(P.prototype.request, t);
  return (
    a.extend(n, P.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Be(C(e, s));
    }),
    n
  );
}
const y = Be(L);
y.Axios = P;
y.CanceledError = U;
y.CancelToken = ee;
y.isCancel = Pe;
y.VERSION = _e;
y.toFormData = M;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function (t) {
  return Promise.all(t);
};
y.spread = $t;
y.isAxiosError = Kt;
y.mergeConfig = C;
y.AxiosHeaders = O;
y.formToJSON = (e) => xe(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Fe.getAdapter;
y.HttpStatusCode = v;
y.default = y;
export { y as a };
