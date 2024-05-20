import { g as fa } from "./eventemitter3-_gqcMBhN.js";
import { r as da } from "./react-i33jQOB4.js";
import { s as pa } from "./scheduler-CzFDRTuY.js";
function ma(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
var ru = {},
  co = { exports: {} },
  ce = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ha = da,
  ae = pa;
function v(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fo = new Set(),
  gt = {};
function Sn(e, n) {
  Bn(e, n), Bn(e + "Capture", n);
}
function Bn(e, n) {
  for (gt[e] = n, e = 0; e < n.length; e++) fo.add(n[e]);
}
var Fe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Sl = Object.prototype.hasOwnProperty,
  va =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lu = {},
  iu = {};
function ga(e) {
  return Sl.call(iu, e)
    ? !0
    : Sl.call(lu, e)
      ? !1
      : va.test(e)
        ? (iu[e] = !0)
        : ((lu[e] = !0), !1);
}
function ya(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wa(e, n, t, r) {
  if (n === null || typeof n > "u" || ya(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ee(e, n, t, r, l, i, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var Y = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Y[e] = new ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  Y[n] = new ee(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Y[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Y[e] = new ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Y[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Y[e] = new ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Y[e] = new ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Y[e] = new ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Y[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var di = /[\-:]([a-z])/g;
function pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(di, pi);
    Y[n] = new ee(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(di, pi);
    Y[n] = new ee(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(di, pi);
  Y[n] = new ee(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Y.xlinkHref = new ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mi(e, n, t, r) {
  var l = Y.hasOwnProperty(n) ? Y[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (wa(n, t, l, r) && (t = null),
    r || l === null
      ? ga(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ve = ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ut = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  xn = Symbol.for("react.fragment"),
  hi = Symbol.for("react.strict_mode"),
  kl = Symbol.for("react.profiler"),
  po = Symbol.for("react.provider"),
  mo = Symbol.for("react.context"),
  vi = Symbol.for("react.forward_ref"),
  El = Symbol.for("react.suspense"),
  Cl = Symbol.for("react.suspense_list"),
  gi = Symbol.for("react.memo"),
  He = Symbol.for("react.lazy"),
  ho = Symbol.for("react.offscreen"),
  uu = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uu && e[uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var F = Object.assign,
  Gr;
function lt(e) {
  if (Gr === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Gr = (n && n[1]) || "";
    }
  return (
    `
` +
    Gr +
    e
  );
}
var Zr = !1;
function Jr(e, n) {
  if (!e || Zr) return "";
  Zr = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          u = l.length - 1,
          o = i.length - 1;
        1 <= u && 0 <= o && l[u] !== i[o];

      )
        o--;
      for (; 1 <= u && 0 <= o; u--, o--)
        if (l[u] !== i[o]) {
          if (u !== 1 || o !== 1)
            do
              if ((u--, o--, 0 > o || l[u] !== i[o])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= o);
          break;
        }
    }
  } finally {
    (Zr = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? lt(e) : "";
}
function Sa(e) {
  switch (e.tag) {
    case 5:
      return lt(e.type);
    case 16:
      return lt("Lazy");
    case 13:
      return lt("Suspense");
    case 19:
      return lt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jr(e.type, !1)), e;
    case 11:
      return (e = Jr(e.type.render, !1)), e;
    case 1:
      return (e = Jr(e.type, !0)), e;
    default:
      return "";
  }
}
function xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case Cn:
      return "Portal";
    case kl:
      return "Profiler";
    case hi:
      return "StrictMode";
    case El:
      return "Suspense";
    case Cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mo:
        return (e.displayName || "Context") + ".Consumer";
      case po:
        return (e._context.displayName || "Context") + ".Provider";
      case vi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gi:
        return (
          (n = e.displayName || null), n !== null ? n : xl(e.type) || "Memo"
        );
      case He:
        (n = e._payload), (e = e._init);
        try {
          return xl(e(n));
        } catch {}
    }
  return null;
}
function ka(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xl(n);
    case 8:
      return n === hi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vo(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ea(e) {
  var n = vo(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Vt(e) {
  e._valueTracker || (e._valueTracker = Ea(e));
}
function go(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = vo(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function cr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nl(e, n) {
  var t = n.checked;
  return F({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function ou(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = tn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function yo(e, n) {
  (n = n.checked), n != null && mi(e, "checked", n, !1);
}
function zl(e, n) {
  yo(e, n);
  var t = tn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? Pl(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && Pl(e, n.type, tn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function su(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function Pl(e, n, t) {
  (n !== "number" || cr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var it = Array.isArray;
function Fn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + tn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function _l(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(v(91));
  return F({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(v(92));
      if (it(t)) {
        if (1 < t.length) throw Error(v(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: tn(t) };
}
function wo(e, n) {
  var t = tn(n.value),
    r = tn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function cu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function So(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ll(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? So(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var At,
  ko = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        At = At || document.createElement("div"),
          At.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = At.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function yt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var st = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ca = ["Webkit", "ms", "Moz", "O"];
Object.keys(st).forEach(function (e) {
  Ca.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (st[n] = st[e]);
  });
});
function Eo(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (st.hasOwnProperty(e) && st[e])
      ? ("" + n).trim()
      : n + "px";
}
function Co(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Eo(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var xa = F(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Tl(e, n) {
  if (n) {
    if (xa[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(v(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(v(62));
  }
}
function Ml(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Dl = null;
function yi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  In = null,
  jn = null;
function fu(e) {
  if ((e = It(e))) {
    if (typeof Rl != "function") throw Error(v(280));
    var n = e.stateNode;
    n && ((n = Ur(n)), Rl(e.stateNode, e.type, n));
  }
}
function xo(e) {
  In ? (jn ? jn.push(e) : (jn = [e])) : (In = e);
}
function No() {
  if (In) {
    var e = In,
      n = jn;
    if (((jn = In = null), fu(e), n)) for (e = 0; e < n.length; e++) fu(n[e]);
  }
}
function zo(e, n) {
  return e(n);
}
function Po() {}
var qr = !1;
function _o(e, n, t) {
  if (qr) return e(n, t);
  qr = !0;
  try {
    return zo(e, n, t);
  } finally {
    (qr = !1), (In !== null || jn !== null) && (Po(), No());
  }
}
function wt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = Ur(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(v(231, n, typeof t));
  return t;
}
var Ol = !1;
if (Fe)
  try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", Jn, Jn),
      window.removeEventListener("test", Jn, Jn);
  } catch {
    Ol = !1;
  }
function Na(e, n, t, r, l, i, u, o, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (m) {
    this.onError(m);
  }
}
var at = !1,
  fr = null,
  dr = !1,
  Fl = null,
  za = {
    onError: function (e) {
      (at = !0), (fr = e);
    },
  };
function Pa(e, n, t, r, l, i, u, o, s) {
  (at = !1), (fr = null), Na.apply(za, arguments);
}
function _a(e, n, t, r, l, i, u, o, s) {
  if ((Pa.apply(this, arguments), at)) {
    if (at) {
      var d = fr;
      (at = !1), (fr = null);
    } else throw Error(v(198));
    dr || ((dr = !0), (Fl = d));
  }
}
function kn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Lo(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function du(e) {
  if (kn(e) !== e) throw Error(v(188));
}
function La(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = kn(e)), n === null)) throw Error(v(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return du(l), e;
        if (i === r) return du(l), n;
        i = i.sibling;
      }
      throw Error(v(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var u = !1, o = l.child; o; ) {
        if (o === t) {
          (u = !0), (t = l), (r = i);
          break;
        }
        if (o === r) {
          (u = !0), (r = l), (t = i);
          break;
        }
        o = o.sibling;
      }
      if (!u) {
        for (o = i.child; o; ) {
          if (o === t) {
            (u = !0), (t = i), (r = l);
            break;
          }
          if (o === r) {
            (u = !0), (r = i), (t = l);
            break;
          }
          o = o.sibling;
        }
        if (!u) throw Error(v(189));
      }
    }
    if (t.alternate !== r) throw Error(v(190));
  }
  if (t.tag !== 3) throw Error(v(188));
  return t.stateNode.current === t ? e : n;
}
function To(e) {
  return (e = La(e)), e !== null ? Mo(e) : null;
}
function Mo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Mo(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Do = ae.unstable_scheduleCallback,
  pu = ae.unstable_cancelCallback,
  Ta = ae.unstable_shouldYield,
  Ma = ae.unstable_requestPaint,
  U = ae.unstable_now,
  Da = ae.unstable_getCurrentPriorityLevel,
  wi = ae.unstable_ImmediatePriority,
  Ro = ae.unstable_UserBlockingPriority,
  pr = ae.unstable_NormalPriority,
  Ra = ae.unstable_LowPriority,
  Oo = ae.unstable_IdlePriority,
  Or = null,
  _e = null;
function Oa(e) {
  if (_e && typeof _e.onCommitFiberRoot == "function")
    try {
      _e.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ee = Math.clz32 ? Math.clz32 : ja,
  Fa = Math.log,
  Ia = Math.LN2;
function ja(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fa(e) / Ia) | 0)) | 0;
}
var Bt = 64,
  Ht = 4194304;
function ut(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function mr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    u = t & 268435455;
  if (u !== 0) {
    var o = u & ~l;
    o !== 0 ? (r = ut(o)) : ((i &= u), i !== 0 && (r = ut(i)));
  } else (u = t & ~l), u !== 0 ? (r = ut(u)) : i !== 0 && (r = ut(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Ee(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Ua(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Va(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Ee(i),
      o = 1 << u,
      s = l[u];
    s === -1
      ? (!(o & t) || o & r) && (l[u] = Ua(o, n))
      : s <= n && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Il(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fo() {
  var e = Bt;
  return (Bt <<= 1), !(Bt & 4194240) && (Bt = 64), e;
}
function br(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Ot(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Ee(n)),
    (e[n] = t);
}
function Aa(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ee(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function Si(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Ee(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var _ = 0;
function Io(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var jo,
  ki,
  Uo,
  Vo,
  Ao,
  jl = !1,
  Qt = [],
  Xe = null,
  Ge = null,
  Ze = null,
  St = new Map(),
  kt = new Map(),
  We = [],
  Ba =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function mu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xe = null;
      break;
    case "dragenter":
    case "dragleave":
      Ge = null;
      break;
    case "mouseover":
    case "mouseout":
      Ze = null;
      break;
    case "pointerover":
    case "pointerout":
      St.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      kt.delete(n.pointerId);
  }
}
function qn(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = It(n)), n !== null && ki(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function Ha(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (Xe = qn(Xe, e, n, t, r, l)), !0;
    case "dragenter":
      return (Ge = qn(Ge, e, n, t, r, l)), !0;
    case "mouseover":
      return (Ze = qn(Ze, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return St.set(i, qn(St.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), kt.set(i, qn(kt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Bo(e) {
  var n = cn(e.target);
  if (n !== null) {
    var t = kn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Lo(t)), n !== null)) {
          (e.blockedOn = n),
            Ao(e.priority, function () {
              Uo(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function er(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = Ul(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (Dl = r), t.target.dispatchEvent(r), (Dl = null);
    } else return (n = It(t)), n !== null && ki(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function hu(e, n, t) {
  er(e) && t.delete(n);
}
function Qa() {
  (jl = !1),
    Xe !== null && er(Xe) && (Xe = null),
    Ge !== null && er(Ge) && (Ge = null),
    Ze !== null && er(Ze) && (Ze = null),
    St.forEach(hu),
    kt.forEach(hu);
}
function bn(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    jl ||
      ((jl = !0),
      ae.unstable_scheduleCallback(ae.unstable_NormalPriority, Qa)));
}
function Et(e) {
  function n(l) {
    return bn(l, e);
  }
  if (0 < Qt.length) {
    bn(Qt[0], e);
    for (var t = 1; t < Qt.length; t++) {
      var r = Qt[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xe !== null && bn(Xe, e),
      Ge !== null && bn(Ge, e),
      Ze !== null && bn(Ze, e),
      St.forEach(n),
      kt.forEach(n),
      t = 0;
    t < We.length;
    t++
  )
    (r = We[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < We.length && ((t = We[0]), t.blockedOn === null); )
    Bo(t), t.blockedOn === null && We.shift();
}
var Un = Ve.ReactCurrentBatchConfig,
  hr = !0;
function Wa(e, n, t, r) {
  var l = _,
    i = Un.transition;
  Un.transition = null;
  try {
    (_ = 1), Ei(e, n, t, r);
  } finally {
    (_ = l), (Un.transition = i);
  }
}
function $a(e, n, t, r) {
  var l = _,
    i = Un.transition;
  Un.transition = null;
  try {
    (_ = 4), Ei(e, n, t, r);
  } finally {
    (_ = l), (Un.transition = i);
  }
}
function Ei(e, n, t, r) {
  if (hr) {
    var l = Ul(e, n, t, r);
    if (l === null) al(e, n, r, vr, t), mu(e, r);
    else if (Ha(l, e, n, t, r)) r.stopPropagation();
    else if ((mu(e, r), n & 4 && -1 < Ba.indexOf(e))) {
      for (; l !== null; ) {
        var i = It(l);
        if (
          (i !== null && jo(i),
          (i = Ul(e, n, t, r)),
          i === null && al(e, n, r, vr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else al(e, n, r, null, t);
  }
}
var vr = null;
function Ul(e, n, t, r) {
  if (((vr = null), (e = yi(r)), (e = cn(e)), e !== null))
    if (((n = kn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Lo(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (vr = e), null;
}
function Ho(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Da()) {
        case wi:
          return 1;
        case Ro:
          return 4;
        case pr:
        case Ra:
          return 16;
        case Oo:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ke = null,
  Ci = null,
  nr = null;
function Qo() {
  if (nr) return nr;
  var e,
    n = Ci,
    t = n.length,
    r,
    l = "value" in Ke ? Ke.value : Ke.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[i - r]; r++);
  return (nr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function tr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wt() {
  return !0;
}
function vu() {
  return !1;
}
function fe(e) {
  function n(t, r, l, i, u) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wt
        : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    F(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = Wt));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = Wt));
      },
      persist: function () {},
      isPersistent: Wt,
    }),
    n
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xi = fe(Xn),
  Ft = F({}, Xn, { view: 0, detail: 0 }),
  Ka = fe(Ft),
  el,
  nl,
  et,
  Fr = F({}, Ft, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== et &&
            (et && e.type === "mousemove"
              ? ((el = e.screenX - et.screenX), (nl = e.screenY - et.screenY))
              : (nl = el = 0),
            (et = e)),
          el);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nl;
    },
  }),
  gu = fe(Fr),
  Ya = F({}, Fr, { dataTransfer: 0 }),
  Xa = fe(Ya),
  Ga = F({}, Ft, { relatedTarget: 0 }),
  tl = fe(Ga),
  Za = F({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ja = fe(Za),
  qa = F({}, Xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ba = fe(qa),
  ec = F({}, Xn, { data: 0 }),
  yu = fe(ec),
  nc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  tc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lc(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = rc[e]) ? !!n[e] : !1;
}
function Ni() {
  return lc;
}
var ic = F({}, Ft, {
    key: function (e) {
      if (e.key) {
        var n = nc[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = tr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? tc[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function (e) {
      return e.type === "keypress" ? tr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? tr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  uc = fe(ic),
  oc = F({}, Fr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wu = fe(oc),
  sc = F({}, Ft, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni,
  }),
  ac = fe(sc),
  cc = F({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fc = fe(cc),
  dc = F({}, Fr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  pc = fe(dc),
  mc = [9, 13, 27, 32],
  zi = Fe && "CompositionEvent" in window,
  ct = null;
Fe && "documentMode" in document && (ct = document.documentMode);
var hc = Fe && "TextEvent" in window && !ct,
  Wo = Fe && (!zi || (ct && 8 < ct && 11 >= ct)),
  Su = " ",
  ku = !1;
function $o(e, n) {
  switch (e) {
    case "keyup":
      return mc.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ko(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = !1;
function vc(e, n) {
  switch (e) {
    case "compositionend":
      return Ko(n);
    case "keypress":
      return n.which !== 32 ? null : ((ku = !0), Su);
    case "textInput":
      return (e = n.data), e === Su && ku ? null : e;
    default:
      return null;
  }
}
function gc(e, n) {
  if (Nn)
    return e === "compositionend" || (!zi && $o(e, n))
      ? ((e = Qo()), (nr = Ci = Ke = null), (Nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Wo && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var yc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!yc[e.type] : n === "textarea";
}
function Yo(e, n, t, r) {
  xo(r),
    (n = gr(n, "onChange")),
    0 < n.length &&
      ((t = new xi("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var ft = null,
  Ct = null;
function wc(e) {
  ls(e, 0);
}
function Ir(e) {
  var n = _n(e);
  if (go(n)) return e;
}
function Sc(e, n) {
  if (e === "change") return n;
}
var Xo = !1;
if (Fe) {
  var rl;
  if (Fe) {
    var ll = "oninput" in document;
    if (!ll) {
      var Cu = document.createElement("div");
      Cu.setAttribute("oninput", "return;"),
        (ll = typeof Cu.oninput == "function");
    }
    rl = ll;
  } else rl = !1;
  Xo = rl && (!document.documentMode || 9 < document.documentMode);
}
function xu() {
  ft && (ft.detachEvent("onpropertychange", Go), (Ct = ft = null));
}
function Go(e) {
  if (e.propertyName === "value" && Ir(Ct)) {
    var n = [];
    Yo(n, Ct, e, yi(e)), _o(wc, n);
  }
}
function kc(e, n, t) {
  e === "focusin"
    ? (xu(), (ft = n), (Ct = t), ft.attachEvent("onpropertychange", Go))
    : e === "focusout" && xu();
}
function Ec(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ir(Ct);
}
function Cc(e, n) {
  if (e === "click") return Ir(n);
}
function xc(e, n) {
  if (e === "input" || e === "change") return Ir(n);
}
function Nc(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var xe = typeof Object.is == "function" ? Object.is : Nc;
function xt(e, n) {
  if (xe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Sl.call(n, l) || !xe(e[l], n[l])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, n) {
  var t = Nu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Nu(t);
  }
}
function Zo(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
          ? Zo(e, n.parentNode)
          : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function Jo() {
  for (var e = window, n = cr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = cr(e.document);
  }
  return n;
}
function Pi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function zc(e) {
  var n = Jo(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Zo(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && Pi(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = zu(t, i));
        var u = zu(t, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pc = Fe && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Vl = null,
  dt = null,
  Al = !1;
function Pu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Al ||
    zn == null ||
    zn !== cr(r) ||
    ((r = zn),
    "selectionStart" in r && Pi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dt && xt(dt, r)) ||
      ((dt = r),
      (r = gr(Vl, "onSelect")),
      0 < r.length &&
        ((n = new xi("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = zn))));
}
function $t(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Pn = {
    animationend: $t("Animation", "AnimationEnd"),
    animationiteration: $t("Animation", "AnimationIteration"),
    animationstart: $t("Animation", "AnimationStart"),
    transitionend: $t("Transition", "TransitionEnd"),
  },
  il = {},
  qo = {};
Fe &&
  ((qo = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function jr(e) {
  if (il[e]) return il[e];
  if (!Pn[e]) return e;
  var n = Pn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in qo) return (il[e] = n[t]);
  return e;
}
var bo = jr("animationend"),
  es = jr("animationiteration"),
  ns = jr("animationstart"),
  ts = jr("transitionend"),
  rs = new Map(),
  _u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ln(e, n) {
  rs.set(e, n), Sn(n, [e]);
}
for (var ul = 0; ul < _u.length; ul++) {
  var ol = _u[ul],
    _c = ol.toLowerCase(),
    Lc = ol[0].toUpperCase() + ol.slice(1);
  ln(_c, "on" + Lc);
}
ln(bo, "onAnimationEnd");
ln(es, "onAnimationIteration");
ln(ns, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(ts, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ot =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Tc = new Set("cancel close invalid load scroll toggle".split(" ").concat(ot));
function Lu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), _a(r, n, void 0, e), (e.currentTarget = null);
}
function ls(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u],
            s = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
          Lu(l, o, d), (i = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((o = r[u]),
            (s = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Lu(l, o, d), (i = s);
        }
    }
  }
  if (dr) throw ((e = Fl), (dr = !1), (Fl = null), e);
}
function T(e, n) {
  var t = n[$l];
  t === void 0 && (t = n[$l] = new Set());
  var r = e + "__bubble";
  t.has(r) || (is(n, e, 2, !1), t.add(r));
}
function sl(e, n, t) {
  var r = 0;
  n && (r |= 4), is(t, e, r, n);
}
var Kt = "_reactListening" + Math.random().toString(36).slice(2);
function Nt(e) {
  if (!e[Kt]) {
    (e[Kt] = !0),
      fo.forEach(function (t) {
        t !== "selectionchange" && (Tc.has(t) || sl(t, !1, e), sl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Kt] || ((n[Kt] = !0), sl("selectionchange", !1, n));
  }
}
function is(e, n, t, r) {
  switch (Ho(n)) {
    case 1:
      var l = Wa;
      break;
    case 4:
      l = $a;
      break;
    default:
      l = Ei;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !Ol ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
}
function al(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; o !== null; ) {
          if (((u = cn(o)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = i = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  _o(function () {
    var d = i,
      m = yi(t),
      h = [];
    e: {
      var p = rs.get(e);
      if (p !== void 0) {
        var y = xi,
          S = e;
        switch (e) {
          case "keypress":
            if (tr(t) === 0) break e;
          case "keydown":
          case "keyup":
            y = uc;
            break;
          case "focusin":
            (S = "focus"), (y = tl);
            break;
          case "focusout":
            (S = "blur"), (y = tl);
            break;
          case "beforeblur":
          case "afterblur":
            y = tl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Xa;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = ac;
            break;
          case bo:
          case es:
          case ns:
            y = Ja;
            break;
          case ts:
            y = fc;
            break;
          case "scroll":
            y = Ka;
            break;
          case "wheel":
            y = pc;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ba;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = wu;
        }
        var k = (n & 4) !== 0,
          j = !k && e === "scroll",
          c = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = d, f; a !== null; ) {
          f = a;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              c !== null && ((g = wt(a, c)), g != null && k.push(zt(a, g, f)))),
            j)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new y(p, S, null, t, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            t !== Dl &&
            (S = t.relatedTarget || t.fromElement) &&
            (cn(S) || S[Ie]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((S = t.relatedTarget || t.toElement),
              (y = d),
              (S = S ? cn(S) : null),
              S !== null &&
                ((j = kn(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = d)),
          y !== S)
        ) {
          if (
            ((k = gu),
            (g = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = wu),
              (g = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (j = y == null ? p : _n(y)),
            (f = S == null ? p : _n(S)),
            (p = new k(g, a + "leave", y, t, m)),
            (p.target = j),
            (p.relatedTarget = f),
            (g = null),
            cn(m) === d &&
              ((k = new k(c, a + "enter", S, t, m)),
              (k.target = f),
              (k.relatedTarget = j),
              (g = k)),
            (j = g),
            y && S)
          )
            n: {
              for (k = y, c = S, a = 0, f = k; f; f = En(f)) a++;
              for (f = 0, g = c; g; g = En(g)) f++;
              for (; 0 < a - f; ) (k = En(k)), a--;
              for (; 0 < f - a; ) (c = En(c)), f--;
              for (; a--; ) {
                if (k === c || (c !== null && k === c.alternate)) break n;
                (k = En(k)), (c = En(c));
              }
              k = null;
            }
          else k = null;
          y !== null && Tu(h, p, y, k, !1),
            S !== null && j !== null && Tu(h, j, S, k, !0);
        }
      }
      e: {
        if (
          ((p = d ? _n(d) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var E = Sc;
        else if (Eu(p))
          if (Xo) E = xc;
          else {
            E = Ec;
            var C = kc;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Cc);
        if (E && (E = E(e, d))) {
          Yo(h, E, t, m);
          break e;
        }
        C && C(e, p, d),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            Pl(p, "number", p.value);
      }
      switch (((C = d ? _n(d) : window), e)) {
        case "focusin":
          (Eu(C) || C.contentEditable === "true") &&
            ((zn = C), (Vl = d), (dt = null));
          break;
        case "focusout":
          dt = Vl = zn = null;
          break;
        case "mousedown":
          Al = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Al = !1), Pu(h, t, m);
          break;
        case "selectionchange":
          if (Pc) break;
        case "keydown":
        case "keyup":
          Pu(h, t, m);
      }
      var x;
      if (zi)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Nn
          ? $o(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Wo &&
          t.locale !== "ko" &&
          (Nn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Nn && (x = Qo())
            : ((Ke = m),
              (Ci = "value" in Ke ? Ke.value : Ke.textContent),
              (Nn = !0))),
        (C = gr(d, N)),
        0 < C.length &&
          ((N = new yu(N, e, null, t, m)),
          h.push({ event: N, listeners: C }),
          x ? (N.data = x) : ((x = Ko(t)), x !== null && (N.data = x)))),
        (x = hc ? vc(e, t) : gc(e, t)) &&
          ((d = gr(d, "onBeforeInput")),
          0 < d.length &&
            ((m = new yu("onBeforeInput", "beforeinput", null, t, m)),
            h.push({ event: m, listeners: d }),
            (m.data = x)));
    }
    ls(h, n);
  });
}
function zt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function gr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = wt(e, t)),
      i != null && r.unshift(zt(e, i, l)),
      (i = wt(e, n)),
      i != null && r.push(zt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, n, t, r, l) {
  for (var i = n._reactName, u = []; t !== null && t !== r; ) {
    var o = t,
      s = o.alternate,
      d = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 &&
      d !== null &&
      ((o = d),
      l
        ? ((s = wt(t, i)), s != null && u.unshift(zt(t, s, o)))
        : l || ((s = wt(t, i)), s != null && u.push(zt(t, s, o)))),
      (t = t.return);
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var Mc = /\r\n?/g,
  Dc = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Mc,
      `
`,
    )
    .replace(Dc, "");
}
function Yt(e, n, t) {
  if (((n = Mu(n)), Mu(e) !== n && t)) throw Error(v(425));
}
function yr() {}
var Bl = null,
  Hl = null;
function Ql(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Wl = typeof setTimeout == "function" ? setTimeout : void 0,
  Rc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Du = typeof Promise == "function" ? Promise : void 0,
  Oc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Du < "u"
        ? function (e) {
            return Du.resolve(null).then(e).catch(Fc);
          }
        : Wl;
function Fc(e) {
  setTimeout(function () {
    throw e;
  });
}
function cl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Et(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Et(n);
}
function Je(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Ru(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  Pe = "__reactFiber$" + Gn,
  Pt = "__reactProps$" + Gn,
  Ie = "__reactContainer$" + Gn,
  $l = "__reactEvents$" + Gn,
  Ic = "__reactListeners$" + Gn,
  jc = "__reactHandles$" + Gn;
function cn(e) {
  var n = e[Pe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ie] || t[Pe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = Ru(e); e !== null; ) {
          if ((t = e[Pe])) return t;
          e = Ru(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function It(e) {
  return (
    (e = e[Pe] || e[Ie]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function Ur(e) {
  return e[Pt] || null;
}
var Kl = [],
  Ln = -1;
function un(e) {
  return { current: e };
}
function M(e) {
  0 > Ln || ((e.current = Kl[Ln]), (Kl[Ln] = null), Ln--);
}
function L(e, n) {
  Ln++, (Kl[Ln] = e.current), (e.current = n);
}
var rn = {},
  J = un(rn),
  re = un(!1),
  hn = rn;
function Hn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function le(e) {
  return (e = e.childContextTypes), e != null;
}
function wr() {
  M(re), M(J);
}
function Ou(e, n, t) {
  if (J.current !== rn) throw Error(v(168));
  L(J, n), L(re, t);
}
function us(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(v(108, ka(e) || "Unknown", l));
  return F({}, t, r);
}
function Sr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (hn = J.current),
    L(J, e),
    L(re, re.current),
    !0
  );
}
function Fu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  t
    ? ((e = us(e, n, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(re),
      M(J),
      L(J, e))
    : M(re),
    L(re, t);
}
var Me = null,
  Vr = !1,
  fl = !1;
function os(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
function Uc(e) {
  (Vr = !0), os(e);
}
function on() {
  if (!fl && Me !== null) {
    fl = !0;
    var e = 0,
      n = _;
    try {
      var t = Me;
      for (_ = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Me = null), (Vr = !1);
    } catch (l) {
      throw (Me !== null && (Me = Me.slice(e + 1)), Do(wi, on), l);
    } finally {
      (_ = n), (fl = !1);
    }
  }
  return null;
}
var Tn = [],
  Mn = 0,
  kr = null,
  Er = 0,
  de = [],
  pe = 0,
  vn = null,
  De = 1,
  Re = "";
function sn(e, n) {
  (Tn[Mn++] = Er), (Tn[Mn++] = kr), (kr = e), (Er = n);
}
function ss(e, n, t) {
  (de[pe++] = De), (de[pe++] = Re), (de[pe++] = vn), (vn = e);
  var r = De;
  e = Re;
  var l = 32 - Ee(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Ee(n) + l;
  if (30 < i) {
    var u = l - (l % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (De = (1 << (32 - Ee(n) + l)) | (t << l) | r),
      (Re = i + e);
  } else (De = (1 << i) | (t << l) | r), (Re = e);
}
function _i(e) {
  e.return !== null && (sn(e, 1), ss(e, 1, 0));
}
function Li(e) {
  for (; e === kr; )
    (kr = Tn[--Mn]), (Tn[Mn] = null), (Er = Tn[--Mn]), (Tn[Mn] = null);
  for (; e === vn; )
    (vn = de[--pe]),
      (de[pe] = null),
      (Re = de[--pe]),
      (de[pe] = null),
      (De = de[--pe]),
      (de[pe] = null);
}
var se = null,
  oe = null,
  D = !1,
  ke = null;
function as(e, n) {
  var t = me(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Iu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (se = e), (oe = Je(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (se = e), (oe = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = vn !== null ? { id: De, overflow: Re } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = me(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (se = e),
            (oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xl(e) {
  if (D) {
    var n = oe;
    if (n) {
      var t = n;
      if (!Iu(e, n)) {
        if (Yl(e)) throw Error(v(418));
        n = Je(t.nextSibling);
        var r = se;
        n && Iu(e, n)
          ? as(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (D = !1), (se = e));
      }
    } else {
      if (Yl(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (D = !1), (se = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  se = e;
}
function Xt(e) {
  if (e !== se) return !1;
  if (!D) return ju(e), (D = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !Ql(e.type, e.memoizedProps))),
    n && (n = oe))
  ) {
    if (Yl(e)) throw (cs(), Error(v(418)));
    for (; n; ) as(e, n), (n = Je(n.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              oe = Je(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      oe = null;
    }
  } else oe = se ? Je(e.stateNode.nextSibling) : null;
  return !0;
}
function cs() {
  for (var e = oe; e; ) e = Je(e.nextSibling);
}
function Qn() {
  (oe = se = null), (D = !1);
}
function Ti(e) {
  ke === null ? (ke = [e]) : ke.push(e);
}
var Vc = Ve.ReactCurrentBatchConfig;
function nt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(v(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (u) {
            var o = l.refs;
            u === null ? delete o[i] : (o[i] = u);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!t._owner) throw Error(v(290, e));
  }
  return e;
}
function Gt(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Uu(e) {
  var n = e._init;
  return n(e._payload);
}
function fs(e) {
  function n(c, a) {
    if (e) {
      var f = c.deletions;
      f === null ? ((c.deletions = [a]), (c.flags |= 16)) : f.push(a);
    }
  }
  function t(c, a) {
    if (!e) return null;
    for (; a !== null; ) n(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = nn(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags |= 2), a) : f)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function u(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, a, f, g) {
    return a === null || a.tag !== 6
      ? ((a = yl(f, c.mode, g)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, g) {
    var E = f.type;
    return E === xn
      ? m(c, a, f.props.children, g, f.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === He &&
              Uu(E) === a.type))
        ? ((g = l(a, f.props)), (g.ref = nt(c, a, f)), (g.return = c), g)
        : ((g = ar(f.type, f.key, f.props, null, c.mode, g)),
          (g.ref = nt(c, a, f)),
          (g.return = c),
          g);
  }
  function d(c, a, f, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = wl(f, c.mode, g)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function m(c, a, f, g, E) {
    return a === null || a.tag !== 7
      ? ((a = mn(f, c.mode, g, E)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function h(c, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = yl("" + a, c.mode, f)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Ut:
          return (
            (f = ar(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = nt(c, null, a)),
            (f.return = c),
            f
          );
        case Cn:
          return (a = wl(a, c.mode, f)), (a.return = c), a;
        case He:
          var g = a._init;
          return h(c, g(a._payload), f);
      }
      if (it(a) || Zn(a))
        return (a = mn(a, c.mode, f, null)), (a.return = c), a;
      Gt(c, a);
    }
    return null;
  }
  function p(c, a, f, g) {
    var E = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : o(c, a, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ut:
          return f.key === E ? s(c, a, f, g) : null;
        case Cn:
          return f.key === E ? d(c, a, f, g) : null;
        case He:
          return (E = f._init), p(c, a, E(f._payload), g);
      }
      if (it(f) || Zn(f)) return E !== null ? null : m(c, a, f, g, null);
      Gt(c, f);
    }
    return null;
  }
  function y(c, a, f, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (c = c.get(f) || null), o(a, c, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ut:
          return (c = c.get(g.key === null ? f : g.key) || null), s(a, c, g, E);
        case Cn:
          return (c = c.get(g.key === null ? f : g.key) || null), d(a, c, g, E);
        case He:
          var C = g._init;
          return y(c, a, f, C(g._payload), E);
      }
      if (it(g) || Zn(g)) return (c = c.get(f) || null), m(a, c, g, E, null);
      Gt(a, g);
    }
    return null;
  }
  function S(c, a, f, g) {
    for (
      var E = null, C = null, x = a, N = (a = 0), H = null;
      x !== null && N < f.length;
      N++
    ) {
      x.index > N ? ((H = x), (x = null)) : (H = x.sibling);
      var P = p(c, x, f[N], g);
      if (P === null) {
        x === null && (x = H);
        break;
      }
      e && x && P.alternate === null && n(c, x),
        (a = i(P, a, N)),
        C === null ? (E = P) : (C.sibling = P),
        (C = P),
        (x = H);
    }
    if (N === f.length) return t(c, x), D && sn(c, N), E;
    if (x === null) {
      for (; N < f.length; N++)
        (x = h(c, f[N], g)),
          x !== null &&
            ((a = i(x, a, N)), C === null ? (E = x) : (C.sibling = x), (C = x));
      return D && sn(c, N), E;
    }
    for (x = r(c, x); N < f.length; N++)
      (H = y(x, c, N, f[N], g)),
        H !== null &&
          (e && H.alternate !== null && x.delete(H.key === null ? N : H.key),
          (a = i(H, a, N)),
          C === null ? (E = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        x.forEach(function (Ae) {
          return n(c, Ae);
        }),
      D && sn(c, N),
      E
    );
  }
  function k(c, a, f, g) {
    var E = Zn(f);
    if (typeof E != "function") throw Error(v(150));
    if (((f = E.call(f)), f == null)) throw Error(v(151));
    for (
      var C = (E = null), x = a, N = (a = 0), H = null, P = f.next();
      x !== null && !P.done;
      N++, P = f.next()
    ) {
      x.index > N ? ((H = x), (x = null)) : (H = x.sibling);
      var Ae = p(c, x, P.value, g);
      if (Ae === null) {
        x === null && (x = H);
        break;
      }
      e && x && Ae.alternate === null && n(c, x),
        (a = i(Ae, a, N)),
        C === null ? (E = Ae) : (C.sibling = Ae),
        (C = Ae),
        (x = H);
    }
    if (P.done) return t(c, x), D && sn(c, N), E;
    if (x === null) {
      for (; !P.done; N++, P = f.next())
        (P = h(c, P.value, g)),
          P !== null &&
            ((a = i(P, a, N)), C === null ? (E = P) : (C.sibling = P), (C = P));
      return D && sn(c, N), E;
    }
    for (x = r(c, x); !P.done; N++, P = f.next())
      (P = y(x, c, N, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && x.delete(P.key === null ? N : P.key),
          (a = i(P, a, N)),
          C === null ? (E = P) : (C.sibling = P),
          (C = P));
    return (
      e &&
        x.forEach(function (ca) {
          return n(c, ca);
        }),
      D && sn(c, N),
      E
    );
  }
  function j(c, a, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === xn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Ut:
          e: {
            for (var E = f.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = f.type), E === xn)) {
                  if (C.tag === 7) {
                    t(c, C.sibling),
                      (a = l(C, f.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === He &&
                    Uu(E) === C.type)
                ) {
                  t(c, C.sibling),
                    (a = l(C, f.props)),
                    (a.ref = nt(c, C, f)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                t(c, C);
                break;
              } else n(c, C);
              C = C.sibling;
            }
            f.type === xn
              ? ((a = mn(f.props.children, c.mode, g, f.key)),
                (a.return = c),
                (c = a))
              : ((g = ar(f.type, f.key, f.props, null, c.mode, g)),
                (g.ref = nt(c, a, f)),
                (g.return = c),
                (c = g));
          }
          return u(c);
        case Cn:
          e: {
            for (C = f.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  t(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  t(c, a);
                  break;
                }
              else n(c, a);
              a = a.sibling;
            }
            (a = wl(f, c.mode, g)), (a.return = c), (c = a);
          }
          return u(c);
        case He:
          return (C = f._init), j(c, a, C(f._payload), g);
      }
      if (it(f)) return S(c, a, f, g);
      if (Zn(f)) return k(c, a, f, g);
      Gt(c, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (t(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (t(c, a), (a = yl(f, c.mode, g)), (a.return = c), (c = a)),
        u(c))
      : t(c, a);
  }
  return j;
}
var Wn = fs(!0),
  ds = fs(!1),
  Cr = un(null),
  xr = null,
  Dn = null,
  Mi = null;
function Di() {
  Mi = Dn = xr = null;
}
function Ri(e) {
  var n = Cr.current;
  M(Cr), (e._currentValue = n);
}
function Gl(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Vn(e, n) {
  (xr = e),
    (Mi = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (te = !0), (e.firstContext = null));
}
function ve(e) {
  var n = e._currentValue;
  if (Mi !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Dn === null)) {
      if (xr === null) throw Error(v(308));
      (Dn = e), (xr.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return n;
}
var fn = null;
function Oi(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function ps(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), Oi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    je(e, r)
  );
}
function je(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Qe = !1;
function Fi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ms(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Oe(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qe(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      je(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), Oi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    je(e, t)
  );
}
function rr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Si(e, t);
  }
}
function Vu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = u) : (i = i.next = u), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Nr(e, n, t, r) {
  var l = e.updateQueue;
  Qe = !1;
  var i = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var s = o,
      d = s.next;
    (s.next = null), u === null ? (i = d) : (u.next = d), (u = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== u &&
        (o === null ? (m.firstBaseUpdate = d) : (o.next = d),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (u = 0), (m = d = s = null), (o = i);
    do {
      var p = o.lane,
        y = o.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var S = e,
            k = o;
          switch (((p = n), (y = t), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                h = S.call(y, h, p);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (p = typeof S == "function" ? S.call(y, h, p) : S),
                p == null)
              )
                break e;
              h = F({}, h, p);
              break e;
            case 2:
              Qe = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((d = m = y), (s = h)) : (m = m.next = y),
          (u |= p);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = m),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (u |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (yn |= u), (e.lanes = u), (e.memoizedState = h);
  }
}
function Au(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(v(191, l));
        l.call(r);
      }
    }
}
var jt = {},
  Le = un(jt),
  _t = un(jt),
  Lt = un(jt);
function dn(e) {
  if (e === jt) throw Error(v(174));
  return e;
}
function Ii(e, n) {
  switch ((L(Lt, n), L(_t, e), L(Le, jt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Ll(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = Ll(n, e));
  }
  M(Le), L(Le, n);
}
function $n() {
  M(Le), M(_t), M(Lt);
}
function hs(e) {
  dn(Lt.current);
  var n = dn(Le.current),
    t = Ll(n, e.type);
  n !== t && (L(_t, e), L(Le, t));
}
function ji(e) {
  _t.current === e && (M(Le), M(_t));
}
var R = un(0);
function zr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var dl = [];
function Ui() {
  for (var e = 0; e < dl.length; e++)
    dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var lr = Ve.ReactCurrentDispatcher,
  pl = Ve.ReactCurrentBatchConfig,
  gn = 0,
  O = null,
  A = null,
  Q = null,
  Pr = !1,
  pt = !1,
  Tt = 0,
  Ac = 0;
function X() {
  throw Error(v(321));
}
function Vi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!xe(e[t], n[t])) return !1;
  return !0;
}
function Ai(e, n, t, r, l, i) {
  if (
    ((gn = i),
    (O = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (lr.current = e === null || e.memoizedState === null ? Wc : $c),
    (e = t(r, l)),
    pt)
  ) {
    i = 0;
    do {
      if (((pt = !1), (Tt = 0), 25 <= i)) throw Error(v(301));
      (i += 1),
        (Q = A = null),
        (n.updateQueue = null),
        (lr.current = Kc),
        (e = t(r, l));
    } while (pt);
  }
  if (
    ((lr.current = _r),
    (n = A !== null && A.next !== null),
    (gn = 0),
    (Q = A = O = null),
    (Pr = !1),
    n)
  )
    throw Error(v(300));
  return e;
}
function Bi() {
  var e = Tt !== 0;
  return (Tt = 0), e;
}
function ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Q === null ? (O.memoizedState = Q = e) : (Q = Q.next = e), Q;
}
function ge() {
  if (A === null) {
    var e = O.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = A.next;
  var n = Q === null ? O.memoizedState : Q.next;
  if (n !== null) (Q = n), (A = e);
  else {
    if (e === null) throw Error(v(310));
    (A = e),
      (e = {
        memoizedState: A.memoizedState,
        baseState: A.baseState,
        baseQueue: A.baseQueue,
        queue: A.queue,
        next: null,
      }),
      Q === null ? (O.memoizedState = Q = e) : (Q = Q.next = e);
  }
  return Q;
}
function Mt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function ml(e) {
  var n = ge(),
    t = n.queue;
  if (t === null) throw Error(v(311));
  t.lastRenderedReducer = e;
  var r = A,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = i.next), (i.next = u);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var o = (u = null),
      s = null,
      d = i;
    do {
      var m = d.lane;
      if ((gn & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((o = s = h), (u = r)) : (s = s.next = h),
          (O.lanes |= m),
          (yn |= m);
      }
      d = d.next;
    } while (d !== null && d !== i);
    s === null ? (u = r) : (s.next = o),
      xe(r, n.memoizedState) || (te = !0),
      (n.memoizedState = r),
      (n.baseState = u),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (O.lanes |= i), (yn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function hl(e) {
  var n = ge(),
    t = n.queue;
  if (t === null) throw Error(v(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = (l = l.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== l);
    xe(i, n.memoizedState) || (te = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function vs() {}
function gs(e, n) {
  var t = O,
    r = ge(),
    l = n(),
    i = !xe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (te = !0)),
    (r = r.queue),
    Hi(Ss.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Q !== null && Q.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Dt(9, ws.bind(null, t, r, l, n), void 0, null),
      W === null)
    )
      throw Error(v(349));
    gn & 30 || ys(t, n, l);
  }
  return l;
}
function ys(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = O.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (O.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ws(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), ks(n) && Es(e);
}
function Ss(e, n, t) {
  return t(function () {
    ks(n) && Es(e);
  });
}
function ks(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !xe(e, t);
  } catch {
    return !0;
  }
}
function Es(e) {
  var n = je(e, 1);
  n !== null && Ce(n, e, 1, -1);
}
function Bu(e) {
  var n = ze();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Qc.bind(null, O, e)),
    [n.memoizedState, e]
  );
}
function Dt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = O.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (O.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Cs() {
  return ge().memoizedState;
}
function ir(e, n, t, r) {
  var l = ze();
  (O.flags |= e),
    (l.memoizedState = Dt(1 | n, t, void 0, r === void 0 ? null : r));
}
function Ar(e, n, t, r) {
  var l = ge();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (A !== null) {
    var u = A.memoizedState;
    if (((i = u.destroy), r !== null && Vi(r, u.deps))) {
      l.memoizedState = Dt(n, t, i, r);
      return;
    }
  }
  (O.flags |= e), (l.memoizedState = Dt(1 | n, t, i, r));
}
function Hu(e, n) {
  return ir(8390656, 8, e, n);
}
function Hi(e, n) {
  return Ar(2048, 8, e, n);
}
function xs(e, n) {
  return Ar(4, 2, e, n);
}
function Ns(e, n) {
  return Ar(4, 4, e, n);
}
function zs(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ps(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), Ar(4, 4, zs.bind(null, n, e), t)
  );
}
function Qi() {}
function _s(e, n) {
  var t = ge();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Vi(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ls(e, n) {
  var t = ge();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Vi(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Ts(e, n, t) {
  return gn & 21
    ? (xe(t, n) || ((t = Fo()), (O.lanes |= t), (yn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (te = !0)), (e.memoizedState = t));
}
function Bc(e, n) {
  var t = _;
  (_ = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = pl.transition;
  pl.transition = {};
  try {
    e(!1), n();
  } finally {
    (_ = t), (pl.transition = r);
  }
}
function Ms() {
  return ge().memoizedState;
}
function Hc(e, n, t) {
  var r = en(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ds(e))
  )
    Rs(n, t);
  else if (((t = ps(e, n, t, r)), t !== null)) {
    var l = b();
    Ce(t, e, r, l), Os(t, n, r);
  }
}
function Qc(e, n, t) {
  var r = en(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ds(e)) Rs(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var u = n.lastRenderedState,
          o = i(u, t);
        if (((l.hasEagerState = !0), (l.eagerState = o), xe(o, u))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), Oi(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = ps(e, n, l, r)),
      t !== null && ((l = b()), Ce(t, e, r, l), Os(t, n, r));
  }
}
function Ds(e) {
  var n = e.alternate;
  return e === O || (n !== null && n === O);
}
function Rs(e, n) {
  pt = Pr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Os(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Si(e, t);
  }
}
var _r = {
    readContext: ve,
    useCallback: X,
    useContext: X,
    useEffect: X,
    useImperativeHandle: X,
    useInsertionEffect: X,
    useLayoutEffect: X,
    useMemo: X,
    useReducer: X,
    useRef: X,
    useState: X,
    useDebugValue: X,
    useDeferredValue: X,
    useTransition: X,
    useMutableSource: X,
    useSyncExternalStore: X,
    useId: X,
    unstable_isNewReconciler: !1,
  },
  Wc = {
    readContext: ve,
    useCallback: function (e, n) {
      return (ze().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: ve,
    useEffect: Hu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        ir(4194308, 4, zs.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return ir(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return ir(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = ze();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = ze();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = Hc.bind(null, O, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = ze();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      return (ze().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        n = e[0];
      return (e = Bc.bind(null, e[1])), (ze().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = O,
        l = ze();
      if (D) {
        if (t === void 0) throw Error(v(407));
        t = t();
      } else {
        if (((t = n()), W === null)) throw Error(v(349));
        gn & 30 || ys(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Hu(Ss.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Dt(9, ws.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = ze(),
        n = W.identifierPrefix;
      if (D) {
        var t = Re,
          r = De;
        (t = (r & ~(1 << (32 - Ee(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Tt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = Ac++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  $c = {
    readContext: ve,
    useCallback: _s,
    useContext: ve,
    useEffect: Hi,
    useImperativeHandle: Ps,
    useInsertionEffect: xs,
    useLayoutEffect: Ns,
    useMemo: Ls,
    useReducer: ml,
    useRef: Cs,
    useState: function () {
      return ml(Mt);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var n = ge();
      return Ts(n, A.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(Mt)[0],
        n = ge().memoizedState;
      return [e, n];
    },
    useMutableSource: vs,
    useSyncExternalStore: gs,
    useId: Ms,
    unstable_isNewReconciler: !1,
  },
  Kc = {
    readContext: ve,
    useCallback: _s,
    useContext: ve,
    useEffect: Hi,
    useImperativeHandle: Ps,
    useInsertionEffect: xs,
    useLayoutEffect: Ns,
    useMemo: Ls,
    useReducer: hl,
    useRef: Cs,
    useState: function () {
      return hl(Mt);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var n = ge();
      return A === null ? (n.memoizedState = e) : Ts(n, A.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(Mt)[0],
        n = ge().memoizedState;
      return [e, n];
    },
    useMutableSource: vs,
    useSyncExternalStore: gs,
    useId: Ms,
    unstable_isNewReconciler: !1,
  };
function we(e, n) {
  if (e && e.defaultProps) {
    (n = F({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Zl(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : F({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Br = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = b(),
      l = en(e),
      i = Oe(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = qe(e, i, l)),
      n !== null && (Ce(n, e, l, r), rr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = b(),
      l = en(e),
      i = Oe(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = qe(e, i, l)),
      n !== null && (Ce(n, e, l, r), rr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = b(),
      r = en(e),
      l = Oe(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = qe(e, l, r)),
      n !== null && (Ce(n, e, r, t), rr(n, e, r));
  },
};
function Qu(e, n, t, r, l, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, u)
      : n.prototype && n.prototype.isPureReactComponent
        ? !xt(t, r) || !xt(l, i)
        : !0
  );
}
function Fs(e, n, t) {
  var r = !1,
    l = rn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ve(i))
      : ((l = le(n) ? hn : J.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? Hn(e, l) : rn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = Br),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Wu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && Br.enqueueReplaceState(n, n.state, null);
}
function Jl(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Fi(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ve(i))
    : ((i = le(n) ? hn : J.current), (l.context = Hn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (Zl(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && Br.enqueueReplaceState(l, l.state, null),
      Nr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Sa(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function vl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function ql(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Yc = typeof WeakMap == "function" ? WeakMap : Map;
function Is(e, n, t) {
  (t = Oe(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Tr || ((Tr = !0), (si = r)), ql(e, n);
    }),
    t
  );
}
function js(e, n, t) {
  (t = Oe(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        ql(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        ql(e, n),
          typeof r != "function" &&
            (be === null ? (be = new Set([this])) : be.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    t
  );
}
function $u(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yc();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = sf.bind(null, e, n, t)), n.then(e, e));
}
function Ku(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Oe(-1, 1)), (n.tag = 2), qe(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var Xc = Ve.ReactCurrentOwner,
  te = !1;
function q(e, n, t, r) {
  n.child = e === null ? ds(n, null, t, r) : Wn(n, e.child, t, r);
}
function Xu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Vn(n, l),
    (r = Ai(e, n, t, r, i, l)),
    (t = Bi()),
    e !== null && !te
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ue(e, n, l))
      : (D && t && _i(n), (n.flags |= 1), q(e, n, r, l), n.child)
  );
}
function Gu(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Ji(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Us(e, n, i, r, l))
      : ((e = ar(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var u = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : xt), t(u, r) && e.ref === n.ref)
    )
      return Ue(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = nn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Us(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xt(i, r) && e.ref === n.ref)
      if (((te = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (te = !0);
      else return (n.lanes = e.lanes), Ue(e, n, l);
  }
  return bl(e, n, t, r, l);
}
function Vs(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        L(On, ue),
        (ue |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          L(On, ue),
          (ue |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        L(On, ue),
        (ue |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      L(On, ue),
      (ue |= r);
  return q(e, n, l, t), n.child;
}
function As(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function bl(e, n, t, r, l) {
  var i = le(t) ? hn : J.current;
  return (
    (i = Hn(n, i)),
    Vn(n, l),
    (t = Ai(e, n, t, r, i, l)),
    (r = Bi()),
    e !== null && !te
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ue(e, n, l))
      : (D && r && _i(n), (n.flags |= 1), q(e, n, t, l), n.child)
  );
}
function Zu(e, n, t, r, l) {
  if (le(t)) {
    var i = !0;
    Sr(n);
  } else i = !1;
  if ((Vn(n, l), n.stateNode === null))
    ur(e, n), Fs(n, t, r), Jl(n, t, r, l), (r = !0);
  else if (e === null) {
    var u = n.stateNode,
      o = n.memoizedProps;
    u.props = o;
    var s = u.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = ve(d))
      : ((d = le(t) ? hn : J.current), (d = Hn(n, d)));
    var m = t.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== r || s !== d) && Wu(n, u, r, d)),
      (Qe = !1);
    var p = n.memoizedState;
    (u.state = p),
      Nr(n, r, u, l),
      (s = n.memoizedState),
      o !== r || p !== s || re.current || Qe
        ? (typeof m == "function" && (Zl(n, t, m, r), (s = n.memoizedState)),
          (o = Qe || Qu(n, t, o, r, p, s, d))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = d),
          (r = o))
        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (u = n.stateNode),
      ms(e, n),
      (o = n.memoizedProps),
      (d = n.type === n.elementType ? o : we(n.type, o)),
      (u.props = d),
      (h = n.pendingProps),
      (p = u.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = ve(s))
        : ((s = le(t) ? hn : J.current), (s = Hn(n, s)));
    var y = t.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== h || p !== s) && Wu(n, u, r, s)),
      (Qe = !1),
      (p = n.memoizedState),
      (u.state = p),
      Nr(n, r, u, l);
    var S = n.memoizedState;
    o !== h || p !== S || re.current || Qe
      ? (typeof y == "function" && (Zl(n, t, y, r), (S = n.memoizedState)),
        (d = Qe || Qu(n, t, d, r, p, S, s) || !1)
          ? (m ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, S, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, S, s)),
            typeof u.componentDidUpdate == "function" && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (u.props = r),
        (u.state = S),
        (u.context = s),
        (r = d))
      : (typeof u.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return ei(e, n, t, r, i, l);
}
function ei(e, n, t, r, l, i) {
  As(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u) return l && Fu(n, t, !1), Ue(e, n, i);
  (r = n.stateNode), (Xc.current = n);
  var o =
    u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && u
      ? ((n.child = Wn(n, e.child, null, i)), (n.child = Wn(n, null, o, i)))
      : q(e, n, o, i),
    (n.memoizedState = r.state),
    l && Fu(n, t, !0),
    n.child
  );
}
function Bs(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Ou(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Ou(e, n.context, !1),
    Ii(e, n.containerInfo);
}
function Ju(e, n, t, r, l) {
  return Qn(), Ti(l), (n.flags |= 256), q(e, n, t, r), n.child;
}
var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hs(e, n, t) {
  var r = n.pendingProps,
    l = R.current,
    i = !1,
    u = (n.flags & 128) !== 0,
    o;
  if (
    ((o = u) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    L(R, l & 1),
    e === null)
  )
    return (
      Xl(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = Wr(u, r, 0, null)),
              (e = mn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = ti(t)),
              (n.memoizedState = ni),
              e)
            : Wi(n, u))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return Gc(e, n, u, r, o, l, t);
  if (i) {
    (i = r.fallback), (u = n.mode), (l = e.child), (o = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = nn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = nn(o, i)) : ((i = mn(i, u, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? ti(t)
          : {
              baseLanes: u.baseLanes | t,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = ni),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = nn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Wi(e, n) {
  return (
    (n = Wr({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Zt(e, n, t, r) {
  return (
    r !== null && Ti(r),
    Wn(n, e.child, null, t),
    (e = Wi(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Gc(e, n, t, r, l, i, u) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = vl(Error(v(422)))), Zt(e, n, u, r))
      : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((i = r.fallback),
          (l = n.mode),
          (r = Wr({ mode: "visible", children: r.children }, l, 0, null)),
          (i = mn(i, l, u, null)),
          (i.flags |= 2),
          (r.return = n),
          (i.return = n),
          (r.sibling = i),
          (n.child = r),
          n.mode & 1 && Wn(n, e.child, null, u),
          (n.child.memoizedState = ti(u)),
          (n.memoizedState = ni),
          i);
  if (!(n.mode & 1)) return Zt(e, n, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(v(419))), (r = vl(i, r, void 0)), Zt(e, n, u, r);
  }
  if (((o = (u & e.childLanes) !== 0), te || o)) {
    if (((r = W), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), je(e, l), Ce(r, e, l, -1));
    }
    return Zi(), (r = vl(Error(v(421)))), Zt(e, n, u, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = af.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (oe = Je(l.nextSibling)),
      (se = n),
      (D = !0),
      (ke = null),
      e !== null &&
        ((de[pe++] = De),
        (de[pe++] = Re),
        (de[pe++] = vn),
        (De = e.id),
        (Re = e.overflow),
        (vn = n)),
      (n = Wi(n, r.children)),
      (n.flags |= 4096),
      n);
}
function qu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Gl(e.return, n, t);
}
function gl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Qs(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((q(e, n, r.children, t), (r = R.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qu(e, t, n);
        else if (e.tag === 19) qu(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((L(R, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && zr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          gl(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && zr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        gl(n, !0, t, null, i);
        break;
      case "together":
        gl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function ur(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ue(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (yn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(v(153));
  if (n.child !== null) {
    for (
      e = n.child, t = nn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = nn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function Zc(e, n, t) {
  switch (n.tag) {
    case 3:
      Bs(n), Qn();
      break;
    case 5:
      hs(n);
      break;
    case 1:
      le(n.type) && Sr(n);
      break;
    case 4:
      Ii(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      L(Cr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (L(R, R.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
            ? Hs(e, n, t)
            : (L(R, R.current & 1),
              (e = Ue(e, n, t)),
              e !== null ? e.sibling : null);
      L(R, R.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qs(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        L(R, R.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Vs(e, n, t);
  }
  return Ue(e, n, t);
}
var Ws, ri, $s, Ks;
Ws = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
ri = function () {};
$s = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), dn(Le.current);
    var i = null;
    switch (t) {
      case "input":
        (l = Nl(e, l)), (r = Nl(e, r)), (i = []);
        break;
      case "select":
        (l = F({}, l, { value: void 0 })),
          (r = F({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = _l(e, l)), (r = _l(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = yr);
    }
    Tl(t, r);
    var u;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var o = l[d];
          for (u in o) o.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (gt.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((o = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== o && (s != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (u in o)
              !o.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                o[u] !== s[u] &&
                (t || (t = {}), (t[u] = s[u]));
          } else t || (i || (i = []), i.push(d, t)), (t = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (o = o ? o.__html : void 0),
              s != null && o !== s && (i = i || []).push(d, s))
            : d === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(d, "" + s)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (gt.hasOwnProperty(d)
                  ? (s != null && d === "onScroll" && T("scroll", e),
                    i || o === s || (i = []))
                  : (i = i || []).push(d, s));
    }
    t && (i = i || []).push("style", t);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Ks = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function tt(e, n) {
  if (!D)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function G(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Jc(e, n, t) {
  var r = n.pendingProps;
  switch ((Li(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return G(n), null;
    case 1:
      return le(n.type) && wr(), G(n), null;
    case 3:
      return (
        (r = n.stateNode),
        $n(),
        M(re),
        M(J),
        Ui(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xt(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), ke !== null && (fi(ke), (ke = null)))),
        ri(e, n),
        G(n),
        null
      );
    case 5:
      ji(n);
      var l = dn(Lt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        $s(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(v(166));
          return G(n), null;
        }
        if (((e = dn(Le.current)), Xt(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Pe] = n), (r[Pt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              T("cancel", r), T("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              T("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ot.length; l++) T(ot[l], r);
              break;
            case "source":
              T("error", r);
              break;
            case "img":
            case "image":
            case "link":
              T("error", r), T("load", r);
              break;
            case "details":
              T("toggle", r);
              break;
            case "input":
              ou(r, i), T("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                T("invalid", r);
              break;
            case "textarea":
              au(r, i), T("invalid", r);
          }
          Tl(t, i), (l = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var o = i[u];
              u === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yt(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yt(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : gt.hasOwnProperty(u) &&
                  o != null &&
                  u === "onScroll" &&
                  T("scroll", r);
            }
          switch (t) {
            case "input":
              Vt(r), su(r, i, !0);
              break;
            case "textarea":
              Vt(r), cu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = So(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = u.createElement(t, { is: r.is }))
                  : ((e = u.createElement(t)),
                    t === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, t)),
            (e[Pe] = n),
            (e[Pt] = r),
            Ws(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((u = Ml(t, r)), t)) {
              case "dialog":
                T("cancel", e), T("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                T("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ot.length; l++) T(ot[l], e);
                l = r;
                break;
              case "source":
                T("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                T("error", e), T("load", e), (l = r);
                break;
              case "details":
                T("toggle", e), (l = r);
                break;
              case "input":
                ou(e, r), (l = Nl(e, r)), T("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = F({}, r, { value: void 0 })),
                  T("invalid", e);
                break;
              case "textarea":
                au(e, r), (l = _l(e, r)), T("invalid", e);
                break;
              default:
                l = r;
            }
            Tl(t, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "style"
                  ? Co(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ko(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (t !== "textarea" || s !== "") && yt(e, s)
                        : typeof s == "number" && yt(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (gt.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && T("scroll", e)
                          : s != null && mi(e, i, s, u));
              }
            switch (t) {
              case "input":
                Vt(e), su(e, r, !1);
                break;
              case "textarea":
                Vt(e), cu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Fn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = yr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return G(n), null;
    case 6:
      if (e && n.stateNode != null) Ks(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
        if (((t = dn(Lt.current)), dn(Le.current), Xt(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Pe] = n),
            (i = r.nodeValue !== t) && ((e = se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yt(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yt(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Pe] = n),
            (n.stateNode = r);
      }
      return G(n), null;
    case 13:
      if (
        (M(R),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (D && oe !== null && n.mode & 1 && !(n.flags & 128))
          cs(), Qn(), (n.flags |= 98560), (i = !1);
        else if (((i = Xt(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(v(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(v(317));
            i[Pe] = n;
          } else
            Qn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          G(n), (i = !1);
        } else ke !== null && (fi(ke), (ke = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || R.current & 1 ? B === 0 && (B = 3) : Zi())),
          n.updateQueue !== null && (n.flags |= 4),
          G(n),
          null);
    case 4:
      return (
        $n(), ri(e, n), e === null && Nt(n.stateNode.containerInfo), G(n), null
      );
    case 10:
      return Ri(n.type._context), G(n), null;
    case 17:
      return le(n.type) && wr(), G(n), null;
    case 19:
      if ((M(R), (i = n.memoizedState), i === null)) return G(n), null;
      if (((r = (n.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) tt(i, !1);
        else {
          if (B !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((u = zr(e)), u !== null)) {
                for (
                  n.flags |= 128,
                    tt(i, !1),
                    r = u.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return L(R, (R.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            U() > Yn &&
            ((n.flags |= 128), (r = !0), tt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = zr(u)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              tt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !D)
            )
              return G(n), null;
          } else
            2 * U() - i.renderingStartTime > Yn &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), tt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((t = i.last),
            t !== null ? (t.sibling = u) : (n.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = U()),
          (n.sibling = null),
          (t = R.current),
          L(R, r ? (t & 1) | 2 : t & 1),
          n)
        : (G(n), null);
    case 22:
    case 23:
      return (
        Gi(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? ue & 1073741824 && (G(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : G(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, n.tag));
}
function qc(e, n) {
  switch ((Li(n), n.tag)) {
    case 1:
      return (
        le(n.type) && wr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        $n(),
        M(re),
        M(J),
        Ui(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return ji(n), null;
    case 13:
      if ((M(R), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(v(340));
        Qn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return M(R), null;
    case 4:
      return $n(), null;
    case 10:
      return Ri(n.type._context), null;
    case 22:
    case 23:
      return Gi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jt = !1,
  Z = !1,
  bc = typeof WeakSet == "function" ? WeakSet : Set,
  w = null;
function Rn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        I(e, n, r);
      }
    else t.current = null;
}
function li(e, n, t) {
  try {
    t();
  } catch (r) {
    I(e, n, r);
  }
}
var bu = !1;
function ef(e, n) {
  if (((Bl = hr), (e = Jo()), Pi(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0,
            o = -1,
            s = -1,
            d = 0,
            m = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var y;
              h !== t || (l !== 0 && h.nodeType !== 3) || (o = u + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = u + r),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break n;
              if (
                (p === t && ++d === l && (o = u),
                p === i && ++m === r && (s = u),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Hl = { focusedElem: e, selectionRange: t }, hr = !1, w = n; w !== null; )
    if (((n = w), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (w = e);
    else
      for (; w !== null; ) {
        n = w;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    j = S.memoizedState,
                    c = n.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : we(n.type, k),
                      j,
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = n.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          I(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (w = e);
          break;
        }
        w = n.return;
      }
  return (S = bu), (bu = !1), S;
}
function mt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && li(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Hr(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function ii(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ys(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ys(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Pe], delete n[Pt], delete n[$l], delete n[Ic], delete n[jc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function eo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xs(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ui(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = yr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, n, t), e = e.sibling; e !== null; ) ui(e, n, t), (e = e.sibling);
}
function oi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, n, t), e = e.sibling; e !== null; ) oi(e, n, t), (e = e.sibling);
}
var $ = null,
  Se = !1;
function Be(e, n, t) {
  for (t = t.child; t !== null; ) Gs(e, n, t), (t = t.sibling);
}
function Gs(e, n, t) {
  if (_e && typeof _e.onCommitFiberUnmount == "function")
    try {
      _e.onCommitFiberUnmount(Or, t);
    } catch {}
  switch (t.tag) {
    case 5:
      Z || Rn(t, n);
    case 6:
      var r = $,
        l = Se;
      ($ = null),
        Be(e, n, t),
        ($ = r),
        (Se = l),
        $ !== null &&
          (Se
            ? ((e = $),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : $.removeChild(t.stateNode));
      break;
    case 18:
      $ !== null &&
        (Se
          ? ((e = $),
            (t = t.stateNode),
            e.nodeType === 8
              ? cl(e.parentNode, t)
              : e.nodeType === 1 && cl(e, t),
            Et(e))
          : cl($, t.stateNode));
      break;
    case 4:
      (r = $),
        (l = Se),
        ($ = t.stateNode.containerInfo),
        (Se = !0),
        Be(e, n, t),
        ($ = r),
        (Se = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Z &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && li(t, n, u),
            (l = l.next);
        } while (l !== r);
      }
      Be(e, n, t);
      break;
    case 1:
      if (
        !Z &&
        (Rn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          I(t, n, o);
        }
      Be(e, n, t);
      break;
    case 21:
      Be(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((Z = (r = Z) || t.memoizedState !== null), Be(e, n, t), (Z = r))
        : Be(e, n, t);
      break;
    default:
      Be(e, n, t);
  }
}
function no(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new bc()),
      n.forEach(function (r) {
        var l = cf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ye(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          u = n,
          o = u;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ($ = o.stateNode), (Se = !1);
              break e;
            case 3:
              ($ = o.stateNode.containerInfo), (Se = !0);
              break e;
            case 4:
              ($ = o.stateNode.containerInfo), (Se = !0);
              break e;
          }
          o = o.return;
        }
        if ($ === null) throw Error(v(160));
        Gs(i, u, l), ($ = null), (Se = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        I(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Zs(n, e), (n = n.sibling);
}
function Zs(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ye(n, e), Ne(e), r & 4)) {
        try {
          mt(3, e, e.return), Hr(3, e);
        } catch (k) {
          I(e, e.return, k);
        }
        try {
          mt(5, e, e.return);
        } catch (k) {
          I(e, e.return, k);
        }
      }
      break;
    case 1:
      ye(n, e), Ne(e), r & 512 && t !== null && Rn(t, t.return);
      break;
    case 5:
      if (
        (ye(n, e),
        Ne(e),
        r & 512 && t !== null && Rn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          yt(l, "");
        } catch (k) {
          I(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          u = t !== null ? t.memoizedProps : i,
          o = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && yo(l, i),
              Ml(o, u);
            var d = Ml(o, i);
            for (u = 0; u < s.length; u += 2) {
              var m = s[u],
                h = s[u + 1];
              m === "style"
                ? Co(l, h)
                : m === "dangerouslySetInnerHTML"
                  ? ko(l, h)
                  : m === "children"
                    ? yt(l, h)
                    : mi(l, m, h, d);
            }
            switch (o) {
              case "input":
                zl(l, i);
                break;
              case "textarea":
                wo(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Fn(l, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Fn(l, !!i.multiple, i.defaultValue, !0)
                      : Fn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Pt] = i;
          } catch (k) {
            I(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ye(n, e), Ne(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          I(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ye(n, e), Ne(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Et(n.containerInfo);
        } catch (k) {
          I(e, e.return, k);
        }
      break;
    case 4:
      ye(n, e), Ne(e);
      break;
    case 13:
      ye(n, e),
        Ne(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Yi = U())),
        r & 4 && no(e);
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((Z = (d = Z) || m), ye(n, e), (Z = d)) : ye(n, e),
        Ne(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !m && e.mode & 1)
        )
          for (w = e, m = e.child; m !== null; ) {
            for (h = w = m; w !== null; ) {
              switch (((p = w), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mt(4, p, p.return);
                  break;
                case 1:
                  Rn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      I(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Rn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ro(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (w = y)) : ro(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = h.stateNode),
                      (s = h.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (o.style.display = Eo("display", u)));
              } catch (k) {
                I(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                I(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ye(n, e), Ne(e), r & 4 && no(e);
      break;
    case 21:
      break;
    default:
      ye(n, e), Ne(e);
  }
}
function Ne(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Xs(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (yt(l, ""), (r.flags &= -33));
          var i = eo(e);
          oi(e, i, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            o = eo(e);
          ui(e, o, u);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      I(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function nf(e, n, t) {
  (w = e), Js(e);
}
function Js(e, n, t) {
  for (var r = (e.mode & 1) !== 0; w !== null; ) {
    var l = w,
      i = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || Jt;
      if (!u) {
        var o = l.alternate,
          s = (o !== null && o.memoizedState !== null) || Z;
        o = Jt;
        var d = Z;
        if (((Jt = u), (Z = s) && !d))
          for (w = l; w !== null; )
            (u = w),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? lo(l)
                : s !== null
                  ? ((s.return = u), (w = s))
                  : lo(l);
        for (; i !== null; ) (w = i), Js(i), (i = i.sibling);
        (w = l), (Jt = o), (Z = d);
      }
      to(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (w = i)) : to(e);
  }
}
function to(e) {
  for (; w !== null; ) {
    var n = w;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Z || Hr(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Z)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : we(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = n.updateQueue;
              i !== null && Au(n, i, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Au(n, u, t);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (t === null && n.flags & 4) {
                t = o;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var m = d.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Et(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        Z || (n.flags & 512 && ii(n));
      } catch (p) {
        I(n, n.return, p);
      }
    }
    if (n === e) {
      w = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (w = t);
      break;
    }
    w = n.return;
  }
}
function ro(e) {
  for (; w !== null; ) {
    var n = w;
    if (n === e) {
      w = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (w = t);
      break;
    }
    w = n.return;
  }
}
function lo(e) {
  for (; w !== null; ) {
    var n = w;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            Hr(4, n);
          } catch (s) {
            I(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              I(n, l, s);
            }
          }
          var i = n.return;
          try {
            ii(n);
          } catch (s) {
            I(n, i, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            ii(n);
          } catch (s) {
            I(n, u, s);
          }
      }
    } catch (s) {
      I(n, n.return, s);
    }
    if (n === e) {
      w = null;
      break;
    }
    var o = n.sibling;
    if (o !== null) {
      (o.return = n.return), (w = o);
      break;
    }
    w = n.return;
  }
}
var tf = Math.ceil,
  Lr = Ve.ReactCurrentDispatcher,
  $i = Ve.ReactCurrentOwner,
  he = Ve.ReactCurrentBatchConfig,
  z = 0,
  W = null,
  V = null,
  K = 0,
  ue = 0,
  On = un(0),
  B = 0,
  Rt = null,
  yn = 0,
  Qr = 0,
  Ki = 0,
  ht = null,
  ne = null,
  Yi = 0,
  Yn = 1 / 0,
  Te = null,
  Tr = !1,
  si = null,
  be = null,
  qt = !1,
  Ye = null,
  Mr = 0,
  vt = 0,
  ai = null,
  or = -1,
  sr = 0;
function b() {
  return z & 6 ? U() : or !== -1 ? or : (or = U());
}
function en(e) {
  return e.mode & 1
    ? z & 2 && K !== 0
      ? K & -K
      : Vc.transition !== null
        ? (sr === 0 && (sr = Fo()), sr)
        : ((e = _),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ho(e.type))),
          e)
    : 1;
}
function Ce(e, n, t, r) {
  if (50 < vt) throw ((vt = 0), (ai = null), Error(v(185)));
  Ot(e, t, r),
    (!(z & 2) || e !== W) &&
      (e === W && (!(z & 2) && (Qr |= t), B === 4 && $e(e, K)),
      ie(e, r),
      t === 1 && z === 0 && !(n.mode & 1) && ((Yn = U() + 500), Vr && on()));
}
function ie(e, n) {
  var t = e.callbackNode;
  Va(e, n);
  var r = mr(e, e === W ? K : 0);
  if (r === 0)
    t !== null && pu(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && pu(t), n === 1))
      e.tag === 0 ? Uc(io.bind(null, e)) : os(io.bind(null, e)),
        Oc(function () {
          !(z & 6) && on();
        }),
        (t = null);
    else {
      switch (Io(r)) {
        case 1:
          t = wi;
          break;
        case 4:
          t = Ro;
          break;
        case 16:
          t = pr;
          break;
        case 536870912:
          t = Oo;
          break;
        default:
          t = pr;
      }
      t = ia(t, qs.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function qs(e, n) {
  if (((or = -1), (sr = 0), z & 6)) throw Error(v(327));
  var t = e.callbackNode;
  if (An() && e.callbackNode !== t) return null;
  var r = mr(e, e === W ? K : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = Dr(e, r);
  else {
    n = r;
    var l = z;
    z |= 2;
    var i = ea();
    (W !== e || K !== n) && ((Te = null), (Yn = U() + 500), pn(e, n));
    do
      try {
        uf();
        break;
      } catch (o) {
        bs(e, o);
      }
    while (!0);
    Di(),
      (Lr.current = i),
      (z = l),
      V !== null ? (n = 0) : ((W = null), (K = 0), (n = B));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = Il(e)), l !== 0 && ((r = l), (n = ci(e, l)))), n === 1)
    )
      throw ((t = Rt), pn(e, 0), $e(e, r), ie(e, U()), t);
    if (n === 6) $e(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !rf(l) &&
          ((n = Dr(e, r)),
          n === 2 && ((i = Il(e)), i !== 0 && ((r = i), (n = ci(e, i)))),
          n === 1))
      )
        throw ((t = Rt), pn(e, 0), $e(e, r), ie(e, U()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          an(e, ne, Te);
          break;
        case 3:
          if (
            ($e(e, r), (r & 130023424) === r && ((n = Yi + 500 - U()), 10 < n))
          ) {
            if (mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              b(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wl(an.bind(null, e, ne, Te), n);
            break;
          }
          an(e, ne, Te);
          break;
        case 4:
          if (($e(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Ee(r);
            (i = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~i);
          }
          if (
            ((r = l),
            (r = U() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * tf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wl(an.bind(null, e, ne, Te), r);
            break;
          }
          an(e, ne, Te);
          break;
        case 5:
          an(e, ne, Te);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ie(e, U()), e.callbackNode === t ? qs.bind(null, e) : null;
}
function ci(e, n) {
  var t = ht;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, n).flags |= 256),
    (e = Dr(e, n)),
    e !== 2 && ((n = ne), (ne = t), n !== null && fi(n)),
    e
  );
}
function fi(e) {
  ne === null ? (ne = e) : ne.push.apply(ne, e);
}
function rf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!xe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function $e(e, n) {
  for (
    n &= ~Ki,
      n &= ~Qr,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Ee(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function io(e) {
  if (z & 6) throw Error(v(327));
  An();
  var n = mr(e, 0);
  if (!(n & 1)) return ie(e, U()), null;
  var t = Dr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Il(e);
    r !== 0 && ((n = r), (t = ci(e, r)));
  }
  if (t === 1) throw ((t = Rt), pn(e, 0), $e(e, n), ie(e, U()), t);
  if (t === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    an(e, ne, Te),
    ie(e, U()),
    null
  );
}
function Xi(e, n) {
  var t = z;
  z |= 1;
  try {
    return e(n);
  } finally {
    (z = t), z === 0 && ((Yn = U() + 500), Vr && on());
  }
}
function wn(e) {
  Ye !== null && Ye.tag === 0 && !(z & 6) && An();
  var n = z;
  z |= 1;
  var t = he.transition,
    r = _;
  try {
    if (((he.transition = null), (_ = 1), e)) return e();
  } finally {
    (_ = r), (he.transition = t), (z = n), !(z & 6) && on();
  }
}
function Gi() {
  (ue = On.current), M(On);
}
function pn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Rc(t)), V !== null))
    for (t = V.return; t !== null; ) {
      var r = t;
      switch ((Li(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wr();
          break;
        case 3:
          $n(), M(re), M(J), Ui();
          break;
        case 5:
          ji(r);
          break;
        case 4:
          $n();
          break;
        case 13:
          M(R);
          break;
        case 19:
          M(R);
          break;
        case 10:
          Ri(r.type._context);
          break;
        case 22:
        case 23:
          Gi();
      }
      t = t.return;
    }
  if (
    ((W = e),
    (V = e = nn(e.current, null)),
    (K = ue = n),
    (B = 0),
    (Rt = null),
    (Ki = Qr = yn = 0),
    (ne = ht = null),
    fn !== null)
  ) {
    for (n = 0; n < fn.length; n++)
      if (((t = fn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = l), (r.next = u);
        }
        t.pending = r;
      }
    fn = null;
  }
  return e;
}
function bs(e, n) {
  do {
    var t = V;
    try {
      if ((Di(), (lr.current = _r), Pr)) {
        for (var r = O.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Pr = !1;
      }
      if (
        ((gn = 0),
        (Q = A = O = null),
        (pt = !1),
        (Tt = 0),
        ($i.current = null),
        t === null || t.return === null)
      ) {
        (B = 1), (Rt = n), (V = null);
        break;
      }
      e: {
        var i = e,
          u = t.return,
          o = t,
          s = n;
        if (
          ((n = K),
          (o.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            m = o,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = Ku(u);
          if (y !== null) {
            (y.flags &= -257),
              Yu(y, u, o, i, n),
              y.mode & 1 && $u(i, d, n),
              (n = y),
              (s = d);
            var S = n.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else S.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              $u(i, d, n), Zi();
              break e;
            }
            s = Error(v(426));
          }
        } else if (D && o.mode & 1) {
          var j = Ku(u);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Yu(j, u, o, i, n),
              Ti(Kn(s, o));
            break e;
          }
        }
        (i = s = Kn(s, o)),
          B !== 4 && (B = 2),
          ht === null ? (ht = [i]) : ht.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var c = Is(i, s, n);
              Vu(i, c);
              break e;
            case 1:
              o = s;
              var a = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (be === null || !be.has(f))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var g = js(i, o, n);
                Vu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ta(t);
    } catch (E) {
      (n = E), V === t && t !== null && (V = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function ea() {
  var e = Lr.current;
  return (Lr.current = _r), e === null ? _r : e;
}
function Zi() {
  (B === 0 || B === 3 || B === 2) && (B = 4),
    W === null || (!(yn & 268435455) && !(Qr & 268435455)) || $e(W, K);
}
function Dr(e, n) {
  var t = z;
  z |= 2;
  var r = ea();
  (W !== e || K !== n) && ((Te = null), pn(e, n));
  do
    try {
      lf();
      break;
    } catch (l) {
      bs(e, l);
    }
  while (!0);
  if ((Di(), (z = t), (Lr.current = r), V !== null)) throw Error(v(261));
  return (W = null), (K = 0), B;
}
function lf() {
  for (; V !== null; ) na(V);
}
function uf() {
  for (; V !== null && !Ta(); ) na(V);
}
function na(e) {
  var n = la(e.alternate, e, ue);
  (e.memoizedProps = e.pendingProps),
    n === null ? ta(e) : (V = n),
    ($i.current = null);
}
function ta(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = qc(t, n)), t !== null)) {
        (t.flags &= 32767), (V = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (B = 6), (V = null);
        return;
      }
    } else if (((t = Jc(t, n, ue)), t !== null)) {
      V = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      V = n;
      return;
    }
    V = n = e;
  } while (n !== null);
  B === 0 && (B = 5);
}
function an(e, n, t) {
  var r = _,
    l = he.transition;
  try {
    (he.transition = null), (_ = 1), of(e, n, t, r);
  } finally {
    (he.transition = l), (_ = r);
  }
  return null;
}
function of(e, n, t, r) {
  do An();
  while (Ye !== null);
  if (z & 6) throw Error(v(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Aa(e, i),
    e === W && ((V = W = null), (K = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      qt ||
      ((qt = !0),
      ia(pr, function () {
        return An(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = he.transition), (he.transition = null);
    var u = _;
    _ = 1;
    var o = z;
    (z |= 4),
      ($i.current = null),
      ef(e, t),
      Zs(t, e),
      zc(Hl),
      (hr = !!Bl),
      (Hl = Bl = null),
      (e.current = t),
      nf(t),
      Ma(),
      (z = o),
      (_ = u),
      (he.transition = i);
  } else e.current = t;
  if (
    (qt && ((qt = !1), (Ye = e), (Mr = l)),
    (i = e.pendingLanes),
    i === 0 && (be = null),
    Oa(t.stateNode),
    ie(e, U()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Tr) throw ((Tr = !1), (e = si), (si = null), e);
  return (
    Mr & 1 && e.tag !== 0 && An(),
    (i = e.pendingLanes),
    i & 1 ? (e === ai ? vt++ : ((vt = 0), (ai = e))) : (vt = 0),
    on(),
    null
  );
}
function An() {
  if (Ye !== null) {
    var e = Io(Mr),
      n = he.transition,
      t = _;
    try {
      if (((he.transition = null), (_ = 16 > e ? 16 : e), Ye === null))
        var r = !1;
      else {
        if (((e = Ye), (Ye = null), (Mr = 0), z & 6)) throw Error(v(331));
        var l = z;
        for (z |= 4, w = e.current; w !== null; ) {
          var i = w,
            u = i.child;
          if (w.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var d = o[s];
                for (w = d; w !== null; ) {
                  var m = w;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mt(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (w = h);
                  else
                    for (; w !== null; ) {
                      m = w;
                      var p = m.sibling,
                        y = m.return;
                      if ((Ys(m), m === d)) {
                        w = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (w = p);
                        break;
                      }
                      w = y;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var j = k.sibling;
                    (k.sibling = null), (k = j);
                  } while (k !== null);
                }
              }
              w = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (w = u);
          else
            e: for (; w !== null; ) {
              if (((i = w), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mt(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (w = c);
                break e;
              }
              w = i.return;
            }
        }
        var a = e.current;
        for (w = a; w !== null; ) {
          u = w;
          var f = u.child;
          if (u.subtreeFlags & 2064 && f !== null) (f.return = u), (w = f);
          else
            e: for (u = a; w !== null; ) {
              if (((o = w), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(9, o);
                  }
                } catch (E) {
                  I(o, o.return, E);
                }
              if (o === u) {
                w = null;
                break e;
              }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (w = g);
                break e;
              }
              w = o.return;
            }
        }
        if (
          ((z = l), on(), _e && typeof _e.onPostCommitFiberRoot == "function")
        )
          try {
            _e.onPostCommitFiberRoot(Or, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (_ = t), (he.transition = n);
    }
  }
  return !1;
}
function uo(e, n, t) {
  (n = Kn(t, n)),
    (n = Is(e, n, 1)),
    (e = qe(e, n, 1)),
    (n = b()),
    e !== null && (Ot(e, 1, n), ie(e, n));
}
function I(e, n, t) {
  if (e.tag === 3) uo(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        uo(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (be === null || !be.has(r)))
        ) {
          (e = Kn(t, e)),
            (e = js(n, e, 1)),
            (n = qe(n, e, 1)),
            (e = b()),
            n !== null && (Ot(n, 1, e), ie(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function sf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = b()),
    (e.pingedLanes |= e.suspendedLanes & t),
    W === e &&
      (K & t) === t &&
      (B === 4 || (B === 3 && (K & 130023424) === K && 500 > U() - Yi)
        ? pn(e, 0)
        : (Ki |= t)),
    ie(e, n);
}
function ra(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = Ht), (Ht <<= 1), !(Ht & 130023424) && (Ht = 4194304))
      : (n = 1));
  var t = b();
  (e = je(e, n)), e !== null && (Ot(e, n, t), ie(e, t));
}
function af(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), ra(e, t);
}
function cf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(n), ra(e, t);
}
var la;
la = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || re.current) te = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (te = !1), Zc(e, n, t);
      te = !!(e.flags & 131072);
    }
  else (te = !1), D && n.flags & 1048576 && ss(n, Er, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      ur(e, n), (e = n.pendingProps);
      var l = Hn(n, J.current);
      Vn(n, t), (l = Ai(null, n, r, e, l, t));
      var i = Bi();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            le(r) ? ((i = !0), Sr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fi(n),
            (l.updater = Br),
            (n.stateNode = l),
            (l._reactInternals = n),
            Jl(n, r, e, t),
            (n = ei(null, n, r, !0, i, t)))
          : ((n.tag = 0), D && i && _i(n), q(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (ur(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = df(r)),
          (e = we(r, e)),
          l)
        ) {
          case 0:
            n = bl(null, n, r, e, t);
            break e;
          case 1:
            n = Zu(null, n, r, e, t);
            break e;
          case 11:
            n = Xu(null, n, r, e, t);
            break e;
          case 14:
            n = Gu(null, n, r, we(r.type, e), t);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : we(r, l)),
        bl(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : we(r, l)),
        Zu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Bs(n), e === null)) throw Error(v(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ms(e, n),
          Nr(n, r, null, t);
        var u = n.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = Kn(Error(v(423)), n)), (n = Ju(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = Kn(Error(v(424)), n)), (n = Ju(e, n, r, t, l));
            break e;
          } else
            for (
              oe = Je(n.stateNode.containerInfo.firstChild),
                se = n,
                D = !0,
                ke = null,
                t = ds(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Qn(), r === l)) {
            n = Ue(e, n, t);
            break e;
          }
          q(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        hs(n),
        e === null && Xl(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = l.children),
        Ql(r, l) ? (u = null) : i !== null && Ql(r, i) && (n.flags |= 32),
        As(e, n),
        q(e, n, u, t),
        n.child
      );
    case 6:
      return e === null && Xl(n), null;
    case 13:
      return Hs(e, n, t);
    case 4:
      return (
        Ii(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = Wn(n, null, r, t)) : q(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : we(r, l)),
        Xu(e, n, r, l, t)
      );
    case 7:
      return q(e, n, n.pendingProps, t), n.child;
    case 8:
      return q(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return q(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (u = l.value),
          L(Cr, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (xe(i.value, u)) {
            if (i.children === l.children && !re.current) {
              n = Ue(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                u = i.child;
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Oe(-1, t & -t)), (s.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var m = d.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (d.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Gl(i.return, t, n),
                      (o.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(v(341));
                (u.lanes |= t),
                  (o = u.alternate),
                  o !== null && (o.lanes |= t),
                  Gl(u, t, n),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        q(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Vn(n, t),
        (l = ve(l)),
        (r = r(l)),
        (n.flags |= 1),
        q(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = we(r, n.pendingProps)),
        (l = we(r.type, l)),
        Gu(e, n, r, l, t)
      );
    case 15:
      return Us(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : we(r, l)),
        ur(e, n),
        (n.tag = 1),
        le(r) ? ((e = !0), Sr(n)) : (e = !1),
        Vn(n, t),
        Fs(n, r, l),
        Jl(n, r, l, t),
        ei(null, n, r, !0, e, t)
      );
    case 19:
      return Qs(e, n, t);
    case 22:
      return Vs(e, n, t);
  }
  throw Error(v(156, n.tag));
};
function ia(e, n) {
  return Do(e, n);
}
function ff(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function me(e, n, t, r) {
  return new ff(e, n, t, r);
}
function Ji(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function df(e) {
  if (typeof e == "function") return Ji(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vi)) return 11;
    if (e === gi) return 14;
  }
  return 2;
}
function nn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = me(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function ar(e, n, t, r, l, i) {
  var u = 2;
  if (((r = e), typeof e == "function")) Ji(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case xn:
        return mn(t.children, l, i, n);
      case hi:
        (u = 8), (l |= 8);
        break;
      case kl:
        return (
          (e = me(12, t, n, l | 2)), (e.elementType = kl), (e.lanes = i), e
        );
      case El:
        return (e = me(13, t, n, l)), (e.elementType = El), (e.lanes = i), e;
      case Cl:
        return (e = me(19, t, n, l)), (e.elementType = Cl), (e.lanes = i), e;
      case ho:
        return Wr(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case po:
              u = 10;
              break e;
            case mo:
              u = 9;
              break e;
            case vi:
              u = 11;
              break e;
            case gi:
              u = 14;
              break e;
            case He:
              (u = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = me(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function mn(e, n, t, r) {
  return (e = me(7, e, r, n)), (e.lanes = t), e;
}
function Wr(e, n, t, r) {
  return (
    (e = me(22, e, r, n)),
    (e.elementType = ho),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yl(e, n, t) {
  return (e = me(6, e, null, n)), (e.lanes = t), e;
}
function wl(e, n, t) {
  return (
    (n = me(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function pf(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = br(0)),
    (this.expirationTimes = br(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = br(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function qi(e, n, t, r, l, i, u, o, s) {
  return (
    (e = new pf(e, n, t, o, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = me(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fi(i),
    e
  );
}
function mf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ua(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(v(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (le(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (le(t)) return us(e, t, n);
  }
  return n;
}
function oa(e, n, t, r, l, i, u, o, s) {
  return (
    (e = qi(t, r, !0, e, l, i, u, o, s)),
    (e.context = ua(null)),
    (t = e.current),
    (r = b()),
    (l = en(t)),
    (i = Oe(r, l)),
    (i.callback = n ?? null),
    qe(t, i, l),
    (e.current.lanes = l),
    Ot(e, l, r),
    ie(e, r),
    e
  );
}
function $r(e, n, t, r) {
  var l = n.current,
    i = b(),
    u = en(l);
  return (
    (t = ua(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Oe(i, u)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = qe(l, n, u)),
    e !== null && (Ce(e, l, u, i), rr(e, l, u)),
    u
  );
}
function Rr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oo(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function bi(e, n) {
  oo(e, n), (e = e.alternate) && oo(e, n);
}
function hf() {
  return null;
}
var sa =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function eu(e) {
  this._internalRoot = e;
}
Kr.prototype.render = eu.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(v(409));
  $r(e, n, null, null);
};
Kr.prototype.unmount = eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    wn(function () {
      $r(null, e, null, null);
    }),
      (n[Ie] = null);
  }
};
function Kr(e) {
  this._internalRoot = e;
}
Kr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Vo();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < We.length && n !== 0 && n < We[t].priority; t++);
    We.splice(t, 0, e), t === 0 && Bo(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function so() {}
function vf(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = Rr(u);
        i.call(d);
      };
    }
    var u = oa(n, r, e, 0, null, !1, !1, "", so);
    return (
      (e._reactRootContainer = u),
      (e[Ie] = u.current),
      Nt(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var d = Rr(s);
      o.call(d);
    };
  }
  var s = qi(e, 0, !1, null, null, !1, !1, "", so);
  return (
    (e._reactRootContainer = s),
    (e[Ie] = s.current),
    Nt(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      $r(n, s, t, r);
    }),
    s
  );
}
function Xr(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var s = Rr(u);
        o.call(s);
      };
    }
    $r(n, u, e, l);
  } else u = vf(t, n, e, l, r);
  return Rr(u);
}
jo = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = ut(n.pendingLanes);
        t !== 0 &&
          (Si(n, t | 1), ie(n, U()), !(z & 6) && ((Yn = U() + 500), on()));
      }
      break;
    case 13:
      wn(function () {
        var r = je(e, 1);
        if (r !== null) {
          var l = b();
          Ce(r, e, 1, l);
        }
      }),
        bi(e, 1);
  }
};
ki = function (e) {
  if (e.tag === 13) {
    var n = je(e, 134217728);
    if (n !== null) {
      var t = b();
      Ce(n, e, 134217728, t);
    }
    bi(e, 134217728);
  }
};
Uo = function (e) {
  if (e.tag === 13) {
    var n = en(e),
      t = je(e, n);
    if (t !== null) {
      var r = b();
      Ce(t, e, n, r);
    }
    bi(e, n);
  }
};
Vo = function () {
  return _;
};
Ao = function (e, n) {
  var t = _;
  try {
    return (_ = e), n();
  } finally {
    _ = t;
  }
};
Rl = function (e, n, t) {
  switch (n) {
    case "input":
      if ((zl(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = Ur(r);
            if (!l) throw Error(v(90));
            go(r), zl(r, l);
          }
        }
      }
      break;
    case "textarea":
      wo(e, t);
      break;
    case "select":
      (n = t.value), n != null && Fn(e, !!t.multiple, n, !1);
  }
};
zo = Xi;
Po = wn;
var gf = { usingClientEntryPoint: !1, Events: [It, _n, Ur, xo, No, Xi] },
  rt = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  yf = {
    bundleType: rt.bundleType,
    version: rt.version,
    rendererPackageName: rt.rendererPackageName,
    rendererConfig: rt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ve.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = To(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rt.findFiberByHostInstance || hf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bt = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bt.isDisabled && bt.supportsFiber)
    try {
      (Or = bt.inject(yf)), (_e = bt);
    } catch {}
}
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gf;
ce.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(n)) throw Error(v(200));
  return mf(e, n, null, t);
};
ce.createRoot = function (e, n) {
  if (!nu(e)) throw Error(v(299));
  var t = !1,
    r = "",
    l = sa;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = qi(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ie] = n.current),
    Nt(e.nodeType === 8 ? e.parentNode : e),
    new eu(n)
  );
};
ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = To(n)), (e = e === null ? null : e.stateNode), e;
};
ce.flushSync = function (e) {
  return wn(e);
};
ce.hydrate = function (e, n, t) {
  if (!Yr(n)) throw Error(v(200));
  return Xr(null, e, n, !0, t);
};
ce.hydrateRoot = function (e, n, t) {
  if (!nu(e)) throw Error(v(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    u = sa;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (n = oa(n, null, e, 1, t ?? null, l, !1, i, u)),
    (e[Ie] = n.current),
    Nt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new Kr(n);
};
ce.render = function (e, n, t) {
  if (!Yr(n)) throw Error(v(200));
  return Xr(null, e, n, !1, t);
};
ce.unmountComponentAtNode = function (e) {
  if (!Yr(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (wn(function () {
        Xr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ie] = null);
        });
      }),
      !0)
    : !1;
};
ce.unstable_batchedUpdates = Xi;
ce.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Yr(t)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return Xr(e, n, t, !1, r);
};
ce.version = "18.3.1-next-f1338f8080-20240426";
function aa() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aa);
    } catch (e) {
      console.error(e);
    }
}
aa(), (co.exports = ce);
var tu = co.exports;
const wf = fa(tu),
  Cf = ma({ __proto__: null, default: wf }, [tu]);
var ao = tu;
(ru.createRoot = ao.createRoot), (ru.hydrateRoot = ao.hydrateRoot);
export { wf as R, Cf as a, ru as c, tu as r };
