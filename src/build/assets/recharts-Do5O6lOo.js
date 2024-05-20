import { c as V } from "./clsx-B-dksMZM.js";
import { r as B, R as A } from "./react-i33jQOB4.js";
import {
  i as Rr,
  a as ts,
  b as Rt,
  g as he,
  c as zt,
  d as z,
  e as W,
  u as Dn,
  f as Oi,
  s as ni,
  t as Cc,
  m as Mn,
  h as Le,
  j as rs,
  k as Ke,
  l as ns,
  n as as,
  o as is,
  p as os,
  q as cs,
  r as an,
  v as ls,
  w as Dc,
  x as ss,
  y as us,
  z as fs,
} from "./lodash-DOF8BdPQ.js";
import { r as sa } from "./react-is-8JwjhRSi.js";
import { A as De } from "./react-smooth-B0X1ksba.js";
import { i as at } from "./tiny-invariant-BaFNuDhB.js";
import {
  S as ds,
  s as Mc,
  a as ps,
  b as vs,
  c as hs,
  d as ys,
  e as ms,
  f as gs,
  g as bs,
  h as xs,
  i as Os,
  j as As,
  k as ws,
  l as Ps,
  m as Hr,
  n as Ss,
  o as Bc,
  p as js,
  q as Es,
  r as ks,
  t as $s,
  u as Ts,
  v as Is,
  w as _s,
  x as Cs,
  y as Ds,
  z as Ms,
  A as Bs,
  B as Ns,
} from "./d3-shape-DjFPhhqo.js";
import { d as Ai } from "./victory-vendor-6_AdwBXU.js";
import { g as Ls, a as Rs } from "./recharts-scale-DiOBu8nk.js";
import { b as wi, l as Pi, p as rn } from "./d3-scale-BYIooUZQ.js";
import { E as zs } from "./eventemitter3-_gqcMBhN.js";
var se = function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  },
  tt = function (e) {
    return Rr(e) && e.indexOf("%") === e.length - 1;
  },
  M = function (e) {
    return ts(e) && !Rt(e);
  },
  re = function (e) {
    return M(e) || Rr(e);
  },
  Ws = 0,
  Xe = function (e) {
    var r = ++Ws;
    return "".concat(e || "").concat(r);
  },
  ue = function (e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!M(e) && !Rr(e)) return n;
    var i;
    if (tt(e)) {
      var o = e.indexOf("%");
      i = (r * parseFloat(e.slice(0, o))) / 100;
    } else i = +e;
    return Rt(i) && (i = n), a && i > r && (i = r), i;
  },
  Ne = function (e) {
    if (!e) return null;
    var r = Object.keys(e);
    return r && r.length ? e[r[0]] : null;
  },
  Ks = function (e) {
    if (!Array.isArray(e)) return !1;
    for (var r = e.length, n = {}, a = 0; a < r; a++)
      if (!n[e[a]]) n[e[a]] = !0;
      else return !0;
    return !1;
  },
  ee = function (e, r) {
    return M(e) && M(r)
      ? function (n) {
          return e + n * (r - e);
        }
      : function () {
          return r;
        };
  };
function on(t, e, r) {
  return !t || !t.length
    ? null
    : t.find(function (n) {
        return n && (typeof e == "function" ? e(n) : he(n, e)) === r;
      });
}
var Fs = function (e) {
  if (!e || !e.length) return null;
  for (
    var r = e.length,
      n = 0,
      a = 0,
      i = 0,
      o = 0,
      c = 1 / 0,
      l = -1 / 0,
      s = 0,
      u = 0,
      f = 0;
    f < r;
    f++
  )
    (s = e[f].cx || 0),
      (u = e[f].cy || 0),
      (n += s),
      (a += u),
      (i += s * u),
      (o += s * s),
      (c = Math.min(c, s)),
      (l = Math.max(l, s));
  var d = r * o !== n * n ? (r * i - n * a) / (r * o - n * n) : 0;
  return { xmin: c, xmax: l, a: d, b: (a - d * n) / r };
};
function xt(t, e) {
  for (var r in t)
    if (
      {}.hasOwnProperty.call(t, r) &&
      (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
    )
      return !1;
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
      return !1;
  return !0;
}
function ua(t) {
  "@babel/helpers - typeof";
  return (
    (ua =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    ua(t)
  );
}
var Xs = ["viewBox", "children"],
  Vs = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  Si = ["points", "pathLength"],
  Jn = { svg: Xs, polygon: Si, polyline: Si },
  ai = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  cn = function (e, r) {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var n = e;
    if ((B.isValidElement(e) && (n = e.props), !zt(n))) return null;
    var a = {};
    return (
      Object.keys(n).forEach(function (i) {
        ai.includes(i) &&
          (a[i] =
            r ||
            function (o) {
              return n[i](n, o);
            });
      }),
      a
    );
  },
  Gs = function (e, r, n) {
    return function (a) {
      return e(r, n, a), null;
    };
  },
  Fe = function (e, r, n) {
    if (!zt(e) || ua(e) !== "object") return null;
    var a = null;
    return (
      Object.keys(e).forEach(function (i) {
        var o = e[i];
        ai.includes(i) &&
          typeof o == "function" &&
          (a || (a = {}), (a[i] = Gs(o, r, n)));
      }),
      a
    );
  },
  Hs = ["children"],
  Us = ["children"];
function ji(t, e) {
  if (t == null) return {};
  var r = Ys(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Ys(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function fa(t) {
  "@babel/helpers - typeof";
  return (
    (fa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    fa(t)
  );
}
var Ei = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
  },
  Ce = function (e) {
    return typeof e == "string"
      ? e
      : e
        ? e.displayName || e.name || "Component"
        : "";
  },
  ki = null,
  Qn = null,
  ii = function t(e) {
    if (e === ki && Array.isArray(Qn)) return Qn;
    var r = [];
    return (
      B.Children.forEach(e, function (n) {
        z(n) ||
          (sa.isFragment(n) ? (r = r.concat(t(n.props.children))) : r.push(n));
      }),
      (Qn = r),
      (ki = e),
      r
    );
  };
function fe(t, e) {
  var r = [],
    n = [];
  return (
    Array.isArray(e)
      ? (n = e.map(function (a) {
          return Ce(a);
        }))
      : (n = [Ce(e)]),
    ii(t).forEach(function (a) {
      var i = he(a, "type.displayName") || he(a, "type.name");
      n.indexOf(i) !== -1 && r.push(a);
    }),
    r
  );
}
function ve(t, e) {
  var r = fe(t, e);
  return r && r[0];
}
var $i = function (e) {
    if (!e || !e.props) return !1;
    var r = e.props,
      n = r.width,
      a = r.height;
    return !(!M(n) || n <= 0 || !M(a) || a <= 0);
  },
  qs = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  Zs = function (e) {
    return e && e.type && Rr(e.type) && qs.indexOf(e.type) >= 0;
  },
  Nc = function (e) {
    return e && fa(e) === "object" && "cx" in e && "cy" in e && "r" in e;
  },
  Js = function (e, r, n, a) {
    var i,
      o = (i = Jn == null ? void 0 : Jn[a]) !== null && i !== void 0 ? i : [];
    return (
      (!W(e) && ((a && o.includes(r)) || Vs.includes(r))) ||
      (n && ai.includes(r))
    );
  },
  R = function (e, r, n) {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var a = e;
    if ((B.isValidElement(e) && (a = e.props), !zt(a))) return null;
    var i = {};
    return (
      Object.keys(a).forEach(function (o) {
        var c;
        Js((c = a) === null || c === void 0 ? void 0 : c[o], o, r, n) &&
          (i[o] = a[o]);
      }),
      i
    );
  },
  da = function t(e, r) {
    if (e === r) return !0;
    var n = B.Children.count(e);
    if (n !== B.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return Ti(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
    for (var a = 0; a < n; a++) {
      var i = e[a],
        o = r[a];
      if (Array.isArray(i) || Array.isArray(o)) {
        if (!t(i, o)) return !1;
      } else if (!Ti(i, o)) return !1;
    }
    return !0;
  },
  Ti = function (e, r) {
    if (z(e) && z(r)) return !0;
    if (!z(e) && !z(r)) {
      var n = e.props || {},
        a = n.children,
        i = ji(n, Hs),
        o = r.props || {},
        c = o.children,
        l = ji(o, Us);
      return a && c ? xt(i, l) && da(a, c) : !a && !c ? xt(i, l) : !1;
    }
    return !1;
  },
  Ii = function (e, r) {
    var n = [],
      a = {};
    return (
      ii(e).forEach(function (i, o) {
        if (Zs(i)) n.push(i);
        else if (i) {
          var c = Ce(i.type),
            l = r[c] || {},
            s = l.handler,
            u = l.once;
          if (s && (!u || !a[c])) {
            var f = s(i, c, o);
            n.push(f), (a[c] = !0);
          }
        }
      }),
      n
    );
  },
  Qs = function (e) {
    var r = e && e.type;
    return r && Ei[r] ? Ei[r] : null;
  },
  eu = function (e, r) {
    return ii(r).indexOf(e);
  },
  tu = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function pa() {
  return (
    (pa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    pa.apply(this, arguments)
  );
}
function ru(t, e) {
  if (t == null) return {};
  var r = nu(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function nu(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function va(t) {
  var e = t.children,
    r = t.width,
    n = t.height,
    a = t.viewBox,
    i = t.className,
    o = t.style,
    c = t.title,
    l = t.desc,
    s = ru(t, tu),
    u = a || { width: r, height: n, x: 0, y: 0 },
    f = V("recharts-surface", i);
  return A.createElement(
    "svg",
    pa({}, R(s, !0, "svg"), {
      className: f,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(u.x, " ")
        .concat(u.y, " ")
        .concat(u.width, " ")
        .concat(u.height),
    }),
    A.createElement("title", null, c),
    A.createElement("desc", null, l),
    e,
  );
}
var au = ["children", "className"];
function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ha.apply(this, arguments)
  );
}
function iu(t, e) {
  if (t == null) return {};
  var r = ou(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function ou(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
var H = A.forwardRef(function (t, e) {
    var r = t.children,
      n = t.className,
      a = iu(t, au),
      i = V("recharts-layer", n);
    return A.createElement("g", ha({ className: i }, R(a, !0), { ref: e }), r);
  }),
  Se = function (e, r) {
    for (
      var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2;
      i < n;
      i++
    )
      a[i - 2] = arguments[i];
  };
function sr(t) {
  "@babel/helpers - typeof";
  return (
    (sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    sr(t)
  );
}
var cu = ["type", "size", "sizeType"];
function ya() {
  return (
    (ya = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ya.apply(this, arguments)
  );
}
function _i(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ci(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? _i(Object(r), !0).forEach(function (n) {
          lu(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : _i(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function lu(t, e, r) {
  return (
    (e = su(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function su(t) {
  var e = uu(t, "string");
  return sr(e) == "symbol" ? e : String(e);
}
function uu(t, e) {
  if (sr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function fu(t, e) {
  if (t == null) return {};
  var r = du(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function du(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
var Lc = {
    symbolCircle: Mc,
    symbolCross: ps,
    symbolDiamond: vs,
    symbolSquare: hs,
    symbolStar: ys,
    symbolTriangle: ms,
    symbolWye: gs,
  },
  pu = Math.PI / 180,
  vu = function (e) {
    var r = "symbol".concat(Dn(e));
    return Lc[r] || Mc;
  },
  hu = function (e, r, n) {
    if (r === "area") return e;
    switch (n) {
      case "cross":
        return (5 * e * e) / 9;
      case "diamond":
        return (0.5 * e * e) / Math.sqrt(3);
      case "square":
        return e * e;
      case "star": {
        var a = 18 * pu;
        return (
          1.25 *
          e *
          e *
          (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * e * e) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  yu = function (e, r) {
    Lc["symbol".concat(Dn(e))] = r;
  },
  Bn = function (e) {
    var r = e.type,
      n = r === void 0 ? "circle" : r,
      a = e.size,
      i = a === void 0 ? 64 : a,
      o = e.sizeType,
      c = o === void 0 ? "area" : o,
      l = fu(e, cu),
      s = Ci(Ci({}, l), {}, { type: n, size: i, sizeType: c }),
      u = function () {
        var g = vu(n),
          O = ds()
            .type(g)
            .size(hu(i, c, n));
        return O();
      },
      f = s.className,
      d = s.cx,
      p = s.cy,
      m = R(s, !0);
    return d === +d && p === +p && i === +i
      ? A.createElement(
          "path",
          ya({}, m, {
            className: V("recharts-symbols", f),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: u(),
          }),
        )
      : null;
  };
Bn.registerSymbol = yu;
function At(t) {
  "@babel/helpers - typeof";
  return (
    (At =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    At(t)
  );
}
function ma() {
  return (
    (ma = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ma.apply(this, arguments)
  );
}
function Di(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Di(Object(r), !0).forEach(function (n) {
          ur(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Di(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function gu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function bu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, zc(n.key), n);
  }
}
function xu(t, e, r) {
  return (
    e && bu(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Ou(t, e, r) {
  return (
    (e = ln(e)),
    Au(
      t,
      Rc() ? Reflect.construct(e, r || [], ln(t).constructor) : e.apply(t, r),
    )
  );
}
function Au(t, e) {
  if (e && (At(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return wu(t);
}
function wu(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Rc() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Rc = function () {
    return !!t;
  })();
}
function ln(t) {
  return (
    (ln = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ln(t)
  );
}
function Pu(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && ga(t, e);
}
function ga(t, e) {
  return (
    (ga = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    ga(t, e)
  );
}
function ur(t, e, r) {
  return (
    (e = zc(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function zc(t) {
  var e = Su(t, "string");
  return At(e) == "symbol" ? e : String(e);
}
function Su(t, e) {
  if (At(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (At(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ge = 32,
  oi = (function (t) {
    Pu(e, t);
    function e() {
      return gu(this, e), Ou(this, e, arguments);
    }
    return (
      xu(e, [
        {
          key: "renderIcon",
          value: function (n) {
            var a = this.props.inactiveColor,
              i = ge / 2,
              o = ge / 6,
              c = ge / 3,
              l = n.inactive ? a : n.color;
            if (n.type === "plainline")
              return A.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: i,
                x2: ge,
                y2: i,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return A.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                d: "M0,"
                  .concat(i, "h")
                  .concat(
                    c,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * c, ",")
                  .concat(
                    i,
                    `
            H`,
                  )
                  .concat(ge, "M")
                  .concat(2 * c, ",")
                  .concat(
                    i,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(c, ",")
                  .concat(i),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return A.createElement("path", {
                stroke: "none",
                fill: l,
                d: "M0,"
                  .concat(ge / 8, "h")
                  .concat(ge, "v")
                  .concat((ge * 3) / 4, "h")
                  .concat(-ge, "z"),
                className: "recharts-legend-icon",
              });
            if (A.isValidElement(n.legendIcon)) {
              var s = mu({}, n);
              return delete s.legendIcon, A.cloneElement(n.legendIcon, s);
            }
            return A.createElement(Bn, {
              fill: l,
              cx: i,
              cy: i,
              size: ge,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              a = this.props,
              i = a.payload,
              o = a.iconSize,
              c = a.layout,
              l = a.formatter,
              s = a.inactiveColor,
              u = { x: 0, y: 0, width: ge, height: ge },
              f = {
                display: c === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              d = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return i.map(function (p, m) {
              var y = p.formatter || l,
                g = V(
                  ur(
                    ur(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(m),
                      !0,
                    ),
                    "inactive",
                    p.inactive,
                  ),
                );
              if (p.type === "none") return null;
              var O = W(p.value) ? null : p.value;
              Se(
                !W(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var b = p.inactive ? s : p.color;
              return A.createElement(
                "li",
                ma(
                  { className: g, style: f, key: "legend-item-".concat(m) },
                  Fe(n.props, p, m),
                ),
                A.createElement(
                  va,
                  { width: o, height: o, viewBox: u, style: d },
                  n.renderIcon(p),
                ),
                A.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: b },
                  },
                  y ? y(O, p, m) : O,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.payload,
              i = n.layout,
              o = n.align;
            if (!a || !a.length) return null;
            var c = {
              padding: 0,
              margin: 0,
              textAlign: i === "horizontal" ? o : "left",
            };
            return A.createElement(
              "ul",
              { className: "recharts-default-legend", style: c },
              this.renderItems(),
            );
          },
        },
      ]),
      e
    );
  })(B.PureComponent);
ur(oi, "displayName", "Legend");
ur(oi, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
function Wc(t, e, r) {
  return e === !0 ? Oi(t, r) : W(e) ? Oi(t, e) : t;
}
function wt(t) {
  "@babel/helpers - typeof";
  return (
    (wt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    wt(t)
  );
}
var ju = ["ref"];
function Mi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ze(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Mi(Object(r), !0).forEach(function (n) {
          Nn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Mi(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Eu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Xc(n.key), n);
  }
}
function ku(t, e, r) {
  return (
    e && Bi(t.prototype, e),
    r && Bi(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function $u(t, e, r) {
  return (
    (e = sn(e)),
    Tu(
      t,
      Kc() ? Reflect.construct(e, r || [], sn(t).constructor) : e.apply(t, r),
    )
  );
}
function Tu(t, e) {
  if (e && (wt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Fc(t);
}
function Kc() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Kc = function () {
    return !!t;
  })();
}
function sn(t) {
  return (
    (sn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    sn(t)
  );
}
function Fc(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Iu(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && ba(t, e);
}
function ba(t, e) {
  return (
    (ba = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    ba(t, e)
  );
}
function Nn(t, e, r) {
  return (
    (e = Xc(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Xc(t) {
  var e = _u(t, "string");
  return wt(e) == "symbol" ? e : String(e);
}
function _u(t, e) {
  if (wt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (wt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Cu(t, e) {
  if (t == null) return {};
  var r = Du(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Du(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Mu(t) {
  return t.value;
}
function Bu(t, e) {
  if (A.isValidElement(t)) return A.cloneElement(t, e);
  if (typeof t == "function") return A.createElement(t, e);
  e.ref;
  var r = Cu(e, ju);
  return A.createElement(oi, r);
}
var Ni = 1,
  fr = (function (t) {
    Iu(e, t);
    function e() {
      var r;
      Eu(this, e);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (r = $u(this, e, [].concat(a))),
        Nn(Fc(r), "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      ku(
        e,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                a = this.getBBox();
              a
                ? (Math.abs(a.width - this.lastBoundingBox.width) > Ni ||
                    Math.abs(a.height - this.lastBoundingBox.height) > Ni) &&
                  ((this.lastBoundingBox.width = a.width),
                  (this.lastBoundingBox.height = a.height),
                  n && n(a))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? Ze({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var a = this.props,
                i = a.layout,
                o = a.align,
                c = a.verticalAlign,
                l = a.margin,
                s = a.chartWidth,
                u = a.chartHeight,
                f,
                d;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && i === "vertical") {
                  var p = this.getBBoxSnapshot();
                  f = { left: ((s || 0) - p.width) / 2 };
                } else
                  f =
                    o === "right"
                      ? { right: (l && l.right) || 0 }
                      : { left: (l && l.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (c === "middle") {
                  var m = this.getBBoxSnapshot();
                  d = { top: ((u || 0) - m.height) / 2 };
                } else
                  d =
                    c === "bottom"
                      ? { bottom: (l && l.bottom) || 0 }
                      : { top: (l && l.top) || 0 };
              return Ze(Ze({}, f), d);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                a = this.props,
                i = a.content,
                o = a.width,
                c = a.height,
                l = a.wrapperStyle,
                s = a.payloadUniqBy,
                u = a.payload,
                f = Ze(
                  Ze(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: c || "auto",
                    },
                    this.getDefaultPosition(l),
                  ),
                  l,
                );
              return A.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: f,
                  ref: function (p) {
                    n.wrapperNode = p;
                  },
                },
                Bu(i, Ze(Ze({}, this.props), {}, { payload: Wc(u, s, Mu) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, a) {
              var i = n.props.layout;
              return i === "vertical" && M(n.props.height)
                ? { height: n.props.height }
                : i === "horizontal"
                  ? { width: n.props.width || a }
                  : null;
            },
          },
        ],
      ),
      e
    );
  })(B.PureComponent);
Nn(fr, "displayName", "Legend");
Nn(fr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
function dr(t) {
  "@babel/helpers - typeof";
  return (
    (dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    dr(t)
  );
}
function xa() {
  return (
    (xa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    xa.apply(this, arguments)
  );
}
function Nu(t, e) {
  return Wu(t) || zu(t, e) || Ru(t, e) || Lu();
}
function Lu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ru(t, e) {
  if (t) {
    if (typeof t == "string") return Li(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Li(t, e);
  }
}
function Li(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function zu(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Wu(t) {
  if (Array.isArray(t)) return t;
}
function Ri(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ea(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ri(Object(r), !0).forEach(function (n) {
          Ku(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ri(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ku(t, e, r) {
  return (
    (e = Fu(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Fu(t) {
  var e = Xu(t, "string");
  return dr(e) == "symbol" ? e : String(e);
}
function Xu(t, e) {
  if (dr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Vu(t) {
  return Array.isArray(t) && re(t[0]) && re(t[1]) ? t.join(" ~ ") : t;
}
var Gu = function (e) {
  var r = e.separator,
    n = r === void 0 ? " : " : r,
    a = e.contentStyle,
    i = a === void 0 ? {} : a,
    o = e.itemStyle,
    c = o === void 0 ? {} : o,
    l = e.labelStyle,
    s = l === void 0 ? {} : l,
    u = e.payload,
    f = e.formatter,
    d = e.itemSorter,
    p = e.wrapperClassName,
    m = e.labelClassName,
    y = e.label,
    g = e.labelFormatter,
    O = e.accessibilityLayer,
    b = O === void 0 ? !1 : O,
    x = function () {
      if (u && u.length) {
        var k = { padding: 0, margin: 0 },
          T = (d ? ni(u, d) : u).map(function ($, D) {
            if ($.type === "none") return null;
            var _ = ea(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: $.color || "#000",
                },
                c,
              ),
              N = $.formatter || f || Vu,
              L = $.value,
              X = $.name,
              G = L,
              U = X;
            if (N && G != null && U != null) {
              var F = N(L, X, $, D, u);
              if (Array.isArray(F)) {
                var Y = Nu(F, 2);
                (G = Y[0]), (U = Y[1]);
              } else G = F;
            }
            return A.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(D),
                style: _,
              },
              re(U)
                ? A.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    U,
                  )
                : null,
              re(U)
                ? A.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n,
                  )
                : null,
              A.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                G,
              ),
              A.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                $.unit || "",
              ),
            );
          });
        return A.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: k },
          T,
        );
      }
      return null;
    },
    v = ea(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      i,
    ),
    h = ea({ margin: 0 }, s),
    w = !z(y),
    P = w ? y : "",
    S = V("recharts-default-tooltip", p),
    E = V("recharts-tooltip-label", m);
  w && g && u !== void 0 && u !== null && (P = g(y, u));
  var j = b ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement(
    "div",
    xa({ className: S, style: v }, j),
    A.createElement(
      "p",
      { className: E, style: h },
      A.isValidElement(P) ? P : "".concat(P),
    ),
    x(),
  );
};
function pr(t) {
  "@babel/helpers - typeof";
  return (
    (pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    pr(t)
  );
}
function Ur(t, e, r) {
  return (
    (e = Hu(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Hu(t) {
  var e = Uu(t, "string");
  return pr(e) == "symbol" ? e : String(e);
}
function Uu(t, e) {
  if (pr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ut = "recharts-tooltip-wrapper",
  Yu = { visibility: "hidden" };
function qu(t) {
  var e = t.coordinate,
    r = t.translateX,
    n = t.translateY;
  return V(
    Ut,
    Ur(
      Ur(
        Ur(
          Ur({}, "".concat(Ut, "-right"), M(r) && e && M(e.x) && r >= e.x),
          "".concat(Ut, "-left"),
          M(r) && e && M(e.x) && r < e.x,
        ),
        "".concat(Ut, "-bottom"),
        M(n) && e && M(e.y) && n >= e.y,
      ),
      "".concat(Ut, "-top"),
      M(n) && e && M(e.y) && n < e.y,
    ),
  );
}
function zi(t) {
  var e = t.allowEscapeViewBox,
    r = t.coordinate,
    n = t.key,
    a = t.offsetTopLeft,
    i = t.position,
    o = t.reverseDirection,
    c = t.tooltipDimension,
    l = t.viewBox,
    s = t.viewBoxDimension;
  if (i && M(i[n])) return i[n];
  var u = r[n] - c - a,
    f = r[n] + a;
  if (e[n]) return o[n] ? u : f;
  if (o[n]) {
    var d = u,
      p = l[n];
    return d < p ? Math.max(f, l[n]) : Math.max(u, l[n]);
  }
  var m = f + c,
    y = l[n] + s;
  return m > y ? Math.max(u, l[n]) : Math.max(f, l[n]);
}
function Zu(t) {
  var e = t.translateX,
    r = t.translateY,
    n = t.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)")
      : "translate(".concat(e, "px, ").concat(r, "px)"),
  };
}
function Ju(t) {
  var e = t.allowEscapeViewBox,
    r = t.coordinate,
    n = t.offsetTopLeft,
    a = t.position,
    i = t.reverseDirection,
    o = t.tooltipBox,
    c = t.useTranslate3d,
    l = t.viewBox,
    s,
    u,
    f;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((u = zi({
          allowEscapeViewBox: e,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: a,
          reverseDirection: i,
          tooltipDimension: o.width,
          viewBox: l,
          viewBoxDimension: l.width,
        })),
        (f = zi({
          allowEscapeViewBox: e,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: a,
          reverseDirection: i,
          tooltipDimension: o.height,
          viewBox: l,
          viewBoxDimension: l.height,
        })),
        (s = Zu({ translateX: u, translateY: f, useTranslate3d: c })))
      : (s = Yu),
    {
      cssProperties: s,
      cssClasses: qu({ translateX: u, translateY: f, coordinate: r }),
    }
  );
}
function Pt(t) {
  "@babel/helpers - typeof";
  return (
    (Pt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Pt(t)
  );
}
function Wi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ki(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Wi(Object(r), !0).forEach(function (n) {
          wa(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Wi(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Qu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ef(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Gc(n.key), n);
  }
}
function tf(t, e, r) {
  return (
    e && ef(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function rf(t, e, r) {
  return (
    (e = un(e)),
    nf(
      t,
      Vc() ? Reflect.construct(e, r || [], un(t).constructor) : e.apply(t, r),
    )
  );
}
function nf(t, e) {
  if (e && (Pt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Oa(t);
}
function Vc() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Vc = function () {
    return !!t;
  })();
}
function un(t) {
  return (
    (un = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    un(t)
  );
}
function Oa(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function af(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Aa(t, e);
}
function Aa(t, e) {
  return (
    (Aa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Aa(t, e)
  );
}
function wa(t, e, r) {
  return (
    (e = Gc(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Gc(t) {
  var e = of(t, "string");
  return Pt(e) == "symbol" ? e : String(e);
}
function of(t, e) {
  if (Pt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Pt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Fi = 1,
  cf = (function (t) {
    af(e, t);
    function e() {
      var r;
      Qu(this, e);
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (r = rf(this, e, [].concat(a))),
        wa(Oa(r), "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        wa(Oa(r), "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var c, l, s, u;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (c =
                    (l = r.props.coordinate) === null || l === void 0
                      ? void 0
                      : l.x) !== null && c !== void 0
                    ? c
                    : 0,
                y:
                  (s =
                    (u = r.props.coordinate) === null || u === void 0
                      ? void 0
                      : u.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      tf(e, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > Fi ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > Fi) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, a;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((a = this.props.coordinate) === null || a === void 0
                    ? void 0
                    : a.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.active,
              o = a.allowEscapeViewBox,
              c = a.animationDuration,
              l = a.animationEasing,
              s = a.children,
              u = a.coordinate,
              f = a.hasPayload,
              d = a.isAnimationActive,
              p = a.offset,
              m = a.position,
              y = a.reverseDirection,
              g = a.useTranslate3d,
              O = a.viewBox,
              b = a.wrapperStyle,
              x = Ju({
                allowEscapeViewBox: o,
                coordinate: u,
                offsetTopLeft: p,
                position: m,
                reverseDirection: y,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: g,
                viewBox: O,
              }),
              v = x.cssClasses,
              h = x.cssProperties,
              w = Ki(
                Ki(
                  {
                    transition:
                      d && i ? "transform ".concat(c, "ms ").concat(l) : void 0,
                  },
                  h,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && i && f ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                b,
              );
            return A.createElement(
              "div",
              {
                tabIndex: -1,
                className: v,
                style: w,
                ref: function (S) {
                  n.wrapperNode = S;
                },
              },
              s,
            );
          },
        },
      ]),
      e
    );
  })(B.PureComponent),
  lf = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  Ae = {
    isSsr: lf(),
    get: function (e) {
      return Ae[e];
    },
    set: function (e, r) {
      if (typeof e == "string") Ae[e] = r;
      else {
        var n = Object.keys(e);
        n &&
          n.length &&
          n.forEach(function (a) {
            Ae[a] = e[a];
          });
      }
    },
  };
function St(t) {
  "@babel/helpers - typeof";
  return (
    (St =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    St(t)
  );
}
function Xi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Vi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Xi(Object(r), !0).forEach(function (n) {
          ci(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Xi(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function sf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function uf(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Uc(n.key), n);
  }
}
function ff(t, e, r) {
  return (
    e && uf(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function df(t, e, r) {
  return (
    (e = fn(e)),
    pf(
      t,
      Hc() ? Reflect.construct(e, r || [], fn(t).constructor) : e.apply(t, r),
    )
  );
}
function pf(t, e) {
  if (e && (St(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return vf(t);
}
function vf(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Hc() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Hc = function () {
    return !!t;
  })();
}
function fn(t) {
  return (
    (fn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fn(t)
  );
}
function hf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Pa(t, e);
}
function Pa(t, e) {
  return (
    (Pa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Pa(t, e)
  );
}
function ci(t, e, r) {
  return (
    (e = Uc(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Uc(t) {
  var e = yf(t, "string");
  return St(e) == "symbol" ? e : String(e);
}
function yf(t, e) {
  if (St(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (St(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function mf(t) {
  return t.dataKey;
}
function gf(t, e) {
  return A.isValidElement(t)
    ? A.cloneElement(t, e)
    : typeof t == "function"
      ? A.createElement(t, e)
      : A.createElement(Gu, e);
}
var Te = (function (t) {
  hf(e, t);
  function e() {
    return sf(this, e), df(this, e, arguments);
  }
  return (
    ff(e, [
      {
        key: "render",
        value: function () {
          var n = this,
            a = this.props,
            i = a.active,
            o = a.allowEscapeViewBox,
            c = a.animationDuration,
            l = a.animationEasing,
            s = a.content,
            u = a.coordinate,
            f = a.filterNull,
            d = a.isAnimationActive,
            p = a.offset,
            m = a.payload,
            y = a.payloadUniqBy,
            g = a.position,
            O = a.reverseDirection,
            b = a.useTranslate3d,
            x = a.viewBox,
            v = a.wrapperStyle,
            h = m ?? [];
          f &&
            h.length &&
            (h = Wc(
              m.filter(function (P) {
                return (
                  P.value != null && (P.hide !== !0 || n.props.includeHidden)
                );
              }),
              y,
              mf,
            ));
          var w = h.length > 0;
          return A.createElement(
            cf,
            {
              allowEscapeViewBox: o,
              animationDuration: c,
              animationEasing: l,
              isAnimationActive: d,
              active: i,
              coordinate: u,
              hasPayload: w,
              offset: p,
              position: g,
              reverseDirection: O,
              useTranslate3d: b,
              viewBox: x,
              wrapperStyle: v,
            },
            gf(s, Vi(Vi({}, this.props), {}, { payload: h })),
          );
        },
      },
    ]),
    e
  );
})(B.PureComponent);
ci(Te, "displayName", "Tooltip");
ci(Te, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Ae.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
function vr(t) {
  "@babel/helpers - typeof";
  return (
    (vr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    vr(t)
  );
}
function Gi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Yr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gi(Object(r), !0).forEach(function (n) {
          bf(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Gi(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function bf(t, e, r) {
  return (
    (e = xf(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xf(t) {
  var e = Of(t, "string");
  return vr(e) == "symbol" ? e : String(e);
}
function Of(t, e) {
  if (vr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Af(t, e) {
  return jf(t) || Sf(t, e) || Pf(t, e) || wf();
}
function wf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pf(t, e) {
  if (t) {
    if (typeof t == "string") return Hi(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hi(t, e);
  }
}
function Hi(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Sf(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function jf(t) {
  if (Array.isArray(t)) return t;
}
var Eg = B.forwardRef(function (t, e) {
    var r = t.aspect,
      n = t.initialDimension,
      a = n === void 0 ? { width: -1, height: -1 } : n,
      i = t.width,
      o = i === void 0 ? "100%" : i,
      c = t.height,
      l = c === void 0 ? "100%" : c,
      s = t.minWidth,
      u = s === void 0 ? 0 : s,
      f = t.minHeight,
      d = t.maxHeight,
      p = t.children,
      m = t.debounce,
      y = m === void 0 ? 0 : m,
      g = t.id,
      O = t.className,
      b = t.onResize,
      x = t.style,
      v = x === void 0 ? {} : x,
      h = B.useRef(null),
      w = B.useRef();
    (w.current = b),
      B.useImperativeHandle(e, function () {
        return Object.defineProperty(h.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              h.current
            );
          },
          configurable: !0,
        });
      });
    var P = B.useState({ containerWidth: a.width, containerHeight: a.height }),
      S = Af(P, 2),
      E = S[0],
      j = S[1],
      C = B.useCallback(function (T, $) {
        j(function (D) {
          var _ = Math.round(T),
            N = Math.round($);
          return D.containerWidth === _ && D.containerHeight === N
            ? D
            : { containerWidth: _, containerHeight: N };
        });
      }, []);
    B.useEffect(
      function () {
        var T = function (X) {
          var G,
            U = X[0].contentRect,
            F = U.width,
            Y = U.height;
          C(F, Y), (G = w.current) === null || G === void 0 || G.call(w, F, Y);
        };
        y > 0 && (T = Cc(T, y, { trailing: !0, leading: !1 }));
        var $ = new ResizeObserver(T),
          D = h.current.getBoundingClientRect(),
          _ = D.width,
          N = D.height;
        return (
          C(_, N),
          $.observe(h.current),
          function () {
            $.disconnect();
          }
        );
      },
      [C, y],
    );
    var k = B.useMemo(
      function () {
        var T = E.containerWidth,
          $ = E.containerHeight;
        if (T < 0 || $ < 0) return null;
        Se(
          tt(o) || tt(l),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          l,
        ),
          Se(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var D = tt(o) ? T : o,
          _ = tt(l) ? $ : l;
        r &&
          r > 0 &&
          (D ? (_ = D / r) : _ && (D = _ * r), d && _ > d && (_ = d)),
          Se(
            D > 0 || _ > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            D,
            _,
            o,
            l,
            u,
            f,
            r,
          );
        var N =
          !Array.isArray(p) && sa.isElement(p) && Ce(p.type).endsWith("Chart");
        return A.Children.map(p, function (L) {
          return sa.isElement(L)
            ? B.cloneElement(
                L,
                Yr(
                  { width: D, height: _ },
                  N
                    ? {
                        style: Yr(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: _,
                            maxWidth: D,
                          },
                          L.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : L;
        });
      },
      [r, p, l, d, f, u, E, o],
    );
    return A.createElement(
      "div",
      {
        id: g ? "".concat(g) : void 0,
        className: V("recharts-responsive-container", O),
        style: Yr(
          Yr({}, v),
          {},
          { width: o, height: l, minWidth: u, minHeight: f, maxHeight: d },
        ),
        ref: h,
      },
      k,
    );
  }),
  Ln = function (e) {
    return null;
  };
Ln.displayName = "Cell";
function hr(t) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    hr(t)
  );
}
function Ui(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Sa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ui(Object(r), !0).forEach(function (n) {
          Ef(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ui(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ef(t, e, r) {
  return (
    (e = kf(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function kf(t) {
  var e = $f(t, "string");
  return hr(e) == "symbol" ? e : String(e);
}
function $f(t, e) {
  if (hr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var dt = { widthCache: {}, cacheCount: 0 },
  Tf = 2e3,
  If = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  Yi = "recharts_measurement_span";
function _f(t) {
  var e = Sa({}, t);
  return (
    Object.keys(e).forEach(function (r) {
      e[r] || delete e[r];
    }),
    e
  );
}
var tr = function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Ae.isSsr) return { width: 0, height: 0 };
    var n = _f(r),
      a = JSON.stringify({ text: e, copyStyle: n });
    if (dt.widthCache[a]) return dt.widthCache[a];
    try {
      var i = document.getElementById(Yi);
      i ||
        ((i = document.createElement("span")),
        i.setAttribute("id", Yi),
        i.setAttribute("aria-hidden", "true"),
        document.body.appendChild(i));
      var o = Sa(Sa({}, If), n);
      Object.assign(i.style, o), (i.textContent = "".concat(e));
      var c = i.getBoundingClientRect(),
        l = { width: c.width, height: c.height };
      return (
        (dt.widthCache[a] = l),
        ++dt.cacheCount > Tf && ((dt.cacheCount = 0), (dt.widthCache = {})),
        l
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  Cf = function (e) {
    return {
      top: e.top + window.scrollY - document.documentElement.clientTop,
      left: e.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function yr(t) {
  "@babel/helpers - typeof";
  return (
    (yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    yr(t)
  );
}
function dn(t, e) {
  return Nf(t) || Bf(t, e) || Mf(t, e) || Df();
}
function Df() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mf(t, e) {
  if (t) {
    if (typeof t == "string") return qi(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qi(t, e);
  }
}
function qi(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Bf(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Nf(t) {
  if (Array.isArray(t)) return t;
}
function Lf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, zf(n.key), n);
  }
}
function Rf(t, e, r) {
  return (
    e && Zi(t.prototype, e),
    r && Zi(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function zf(t) {
  var e = Wf(t, "string");
  return yr(e) == "symbol" ? e : String(e);
}
function Wf(t, e) {
  if (yr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Ji = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Qi = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Kf = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  Ff = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  Yc = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  Xf = Object.keys(Yc),
  yt = "NaN";
function Vf(t, e) {
  return t * Yc[e];
}
var qr = (function () {
  function t(e, r) {
    Lf(this, t),
      (this.num = e),
      (this.unit = r),
      (this.num = e),
      (this.unit = r),
      Number.isNaN(e) && (this.unit = ""),
      r !== "" && !Kf.test(r) && ((this.num = NaN), (this.unit = "")),
      Xf.includes(r) && ((this.num = Vf(e, r)), (this.unit = "px"));
  }
  return (
    Rf(
      t,
      [
        {
          key: "add",
          value: function (r) {
            return this.unit !== r.unit
              ? new t(NaN, "")
              : new t(this.num + r.num, this.unit);
          },
        },
        {
          key: "subtract",
          value: function (r) {
            return this.unit !== r.unit
              ? new t(NaN, "")
              : new t(this.num - r.num, this.unit);
          },
        },
        {
          key: "multiply",
          value: function (r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
              ? new t(NaN, "")
              : new t(this.num * r.num, this.unit || r.unit);
          },
        },
        {
          key: "divide",
          value: function (r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
              ? new t(NaN, "")
              : new t(this.num / r.num, this.unit || r.unit);
          },
        },
        {
          key: "toString",
          value: function () {
            return "".concat(this.num).concat(this.unit);
          },
        },
        {
          key: "isNaN",
          value: function () {
            return Number.isNaN(this.num);
          },
        },
      ],
      [
        {
          key: "parse",
          value: function (r) {
            var n,
              a = (n = Ff.exec(r)) !== null && n !== void 0 ? n : [],
              i = dn(a, 3),
              o = i[1],
              c = i[2];
            return new t(parseFloat(o), c ?? "");
          },
        },
      ],
    ),
    t
  );
})();
function qc(t) {
  if (t.includes(yt)) return yt;
  for (var e = t; e.includes("*") || e.includes("/"); ) {
    var r,
      n = (r = Ji.exec(e)) !== null && r !== void 0 ? r : [],
      a = dn(n, 4),
      i = a[1],
      o = a[2],
      c = a[3],
      l = qr.parse(i ?? ""),
      s = qr.parse(c ?? ""),
      u = o === "*" ? l.multiply(s) : l.divide(s);
    if (u.isNaN()) return yt;
    e = e.replace(Ji, u.toString());
  }
  for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
    var f,
      d = (f = Qi.exec(e)) !== null && f !== void 0 ? f : [],
      p = dn(d, 4),
      m = p[1],
      y = p[2],
      g = p[3],
      O = qr.parse(m ?? ""),
      b = qr.parse(g ?? ""),
      x = y === "+" ? O.add(b) : O.subtract(b);
    if (x.isNaN()) return yt;
    e = e.replace(Qi, x.toString());
  }
  return e;
}
var eo = /\(([^()]*)\)/;
function Gf(t) {
  for (var e = t; e.includes("("); ) {
    var r = eo.exec(e),
      n = dn(r, 2),
      a = n[1];
    e = e.replace(eo, qc(a));
  }
  return e;
}
function Hf(t) {
  var e = t.replace(/\s+/g, "");
  return (e = Gf(e)), (e = qc(e)), e;
}
function Uf(t) {
  try {
    return Hf(t);
  } catch {
    return yt;
  }
}
function ta(t) {
  var e = Uf(t.slice(5, -1));
  return e === yt ? "" : e;
}
var Yf = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  qf = ["dx", "dy", "angle", "className", "breakAll"];
function ja() {
  return (
    (ja = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ja.apply(this, arguments)
  );
}
function to(t, e) {
  if (t == null) return {};
  var r = Zf(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Zf(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function ro(t, e) {
  return td(t) || ed(t, e) || Qf(t, e) || Jf();
}
function Jf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qf(t, e) {
  if (t) {
    if (typeof t == "string") return no(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return no(t, e);
  }
}
function no(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ed(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function td(t) {
  if (Array.isArray(t)) return t;
}
var Zc = /[ \f\n\r\t\v\u2028\u2029]+/,
  Jc = function (e) {
    var r = e.children,
      n = e.breakAll,
      a = e.style;
    try {
      var i = [];
      z(r) || (n ? (i = r.toString().split("")) : (i = r.toString().split(Zc)));
      var o = i.map(function (l) {
          return { word: l, width: tr(l, a).width };
        }),
        c = n ? 0 : tr(" ", a).width;
      return { wordsWithComputedWidth: o, spaceWidth: c };
    } catch {
      return null;
    }
  },
  rd = function (e, r, n, a, i) {
    var o = e.maxLines,
      c = e.children,
      l = e.style,
      s = e.breakAll,
      u = M(o),
      f = c,
      d = function () {
        var D =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return D.reduce(function (_, N) {
          var L = N.word,
            X = N.width,
            G = _[_.length - 1];
          if (G && (a == null || i || G.width + X + n < Number(a)))
            G.words.push(L), (G.width += X + n);
          else {
            var U = { words: [L], width: X };
            _.push(U);
          }
          return _;
        }, []);
      },
      p = d(r),
      m = function (D) {
        return D.reduce(function (_, N) {
          return _.width > N.width ? _ : N;
        });
      };
    if (!u) return p;
    for (
      var y = "…",
        g = function (D) {
          var _ = f.slice(0, D),
            N = Jc({
              breakAll: s,
              style: l,
              children: _ + y,
            }).wordsWithComputedWidth,
            L = d(N),
            X = L.length > o || m(L).width > Number(a);
          return [X, L];
        },
        O = 0,
        b = f.length - 1,
        x = 0,
        v;
      O <= b && x <= f.length - 1;

    ) {
      var h = Math.floor((O + b) / 2),
        w = h - 1,
        P = g(w),
        S = ro(P, 2),
        E = S[0],
        j = S[1],
        C = g(h),
        k = ro(C, 1),
        T = k[0];
      if ((!E && !T && (O = h + 1), E && T && (b = h - 1), !E && T)) {
        v = j;
        break;
      }
      x++;
    }
    return v || p;
  },
  ao = function (e) {
    var r = z(e) ? [] : e.toString().split(Zc);
    return [{ words: r }];
  },
  nd = function (e) {
    var r = e.width,
      n = e.scaleToFit,
      a = e.children,
      i = e.style,
      o = e.breakAll,
      c = e.maxLines;
    if ((r || n) && !Ae.isSsr) {
      var l,
        s,
        u = Jc({ breakAll: o, children: a, style: i });
      if (u) {
        var f = u.wordsWithComputedWidth,
          d = u.spaceWidth;
        (l = f), (s = d);
      } else return ao(a);
      return rd(
        { breakAll: o, children: a, maxLines: c, style: i },
        l,
        s,
        r,
        n,
      );
    }
    return ao(a);
  },
  io = "#808080",
  it = function (e) {
    var r = e.x,
      n = r === void 0 ? 0 : r,
      a = e.y,
      i = a === void 0 ? 0 : a,
      o = e.lineHeight,
      c = o === void 0 ? "1em" : o,
      l = e.capHeight,
      s = l === void 0 ? "0.71em" : l,
      u = e.scaleToFit,
      f = u === void 0 ? !1 : u,
      d = e.textAnchor,
      p = d === void 0 ? "start" : d,
      m = e.verticalAnchor,
      y = m === void 0 ? "end" : m,
      g = e.fill,
      O = g === void 0 ? io : g,
      b = to(e, Yf),
      x = B.useMemo(
        function () {
          return nd({
            breakAll: b.breakAll,
            children: b.children,
            maxLines: b.maxLines,
            scaleToFit: f,
            style: b.style,
            width: b.width,
          });
        },
        [b.breakAll, b.children, b.maxLines, f, b.style, b.width],
      ),
      v = b.dx,
      h = b.dy,
      w = b.angle,
      P = b.className,
      S = b.breakAll,
      E = to(b, qf);
    if (!re(n) || !re(i)) return null;
    var j = n + (M(v) ? v : 0),
      C = i + (M(h) ? h : 0),
      k;
    switch (y) {
      case "start":
        k = ta("calc(".concat(s, ")"));
        break;
      case "middle":
        k = ta(
          "calc("
            .concat((x.length - 1) / 2, " * -")
            .concat(c, " + (")
            .concat(s, " / 2))"),
        );
        break;
      default:
        k = ta("calc(".concat(x.length - 1, " * -").concat(c, ")"));
        break;
    }
    var T = [];
    if (f) {
      var $ = x[0].width,
        D = b.width;
      T.push("scale(".concat((M(D) ? D / $ : 1) / $, ")"));
    }
    return (
      w && T.push("rotate(".concat(w, ", ").concat(j, ", ").concat(C, ")")),
      T.length && (E.transform = T.join(" ")),
      A.createElement(
        "text",
        ja({}, R(E, !0), {
          x: j,
          y: C,
          className: V("recharts-text", P),
          textAnchor: p,
          fill: O.includes("url") ? io : O,
        }),
        x.map(function (_, N) {
          var L = _.words.join(S ? "" : " ");
          return A.createElement(
            "tspan",
            { x: j, dy: N === 0 ? k : c, key: L },
            L,
          );
        }),
      )
    );
  },
  ad = [
    "offset",
    "layout",
    "width",
    "dataKey",
    "data",
    "dataPointFormatter",
    "xAxis",
    "yAxis",
  ];
function pn() {
  return (
    (pn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    pn.apply(this, arguments)
  );
}
function id(t, e) {
  return sd(t) || ld(t, e) || cd(t, e) || od();
}
function od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cd(t, e) {
  if (t) {
    if (typeof t == "string") return oo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oo(t, e);
  }
}
function oo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ld(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function sd(t) {
  if (Array.isArray(t)) return t;
}
function ud(t, e) {
  if (t == null) return {};
  var r = fd(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function fd(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Wt(t) {
  var e = t.offset,
    r = t.layout,
    n = t.width,
    a = t.dataKey,
    i = t.data,
    o = t.dataPointFormatter,
    c = t.xAxis,
    l = t.yAxis,
    s = ud(t, ad),
    u = R(s, !1);
  t.direction === "x" && c.type !== "number" && at();
  var f = i.map(function (d) {
    var p = o(d, a),
      m = p.x,
      y = p.y,
      g = p.value,
      O = p.errorVal;
    if (!O) return null;
    var b = [],
      x,
      v;
    if (Array.isArray(O)) {
      var h = id(O, 2);
      (x = h[0]), (v = h[1]);
    } else x = v = O;
    if (r === "vertical") {
      var w = c.scale,
        P = y + e,
        S = P + n,
        E = P - n,
        j = w(g - x),
        C = w(g + v);
      b.push({ x1: C, y1: S, x2: C, y2: E }),
        b.push({ x1: j, y1: P, x2: C, y2: P }),
        b.push({ x1: j, y1: S, x2: j, y2: E });
    } else if (r === "horizontal") {
      var k = l.scale,
        T = m + e,
        $ = T - n,
        D = T + n,
        _ = k(g - x),
        N = k(g + v);
      b.push({ x1: $, y1: N, x2: D, y2: N }),
        b.push({ x1: T, y1: _, x2: T, y2: N }),
        b.push({ x1: $, y1: _, x2: D, y2: _ });
    }
    return A.createElement(
      H,
      pn(
        {
          className: "recharts-errorBar",
          key: "bar-".concat(
            b.map(function (L) {
              return ""
                .concat(L.x1, "-")
                .concat(L.x2, "-")
                .concat(L.y1, "-")
                .concat(L.y2);
            }),
          ),
        },
        u,
      ),
      b.map(function (L) {
        return A.createElement(
          "line",
          pn({}, L, {
            key: "line-"
              .concat(L.x1, "-")
              .concat(L.x2, "-")
              .concat(L.y1, "-")
              .concat(L.y2),
          }),
        );
      }),
    );
  });
  return A.createElement(H, { className: "recharts-errorBars" }, f);
}
Wt.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
};
Wt.displayName = "ErrorBar";
function mr(t) {
  "@babel/helpers - typeof";
  return (
    (mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    mr(t)
  );
}
function co(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ra(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? co(Object(r), !0).forEach(function (n) {
          dd(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : co(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function dd(t, e, r) {
  return (
    (e = pd(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function pd(t) {
  var e = vd(t, "string");
  return mr(e) == "symbol" ? e : String(e);
}
function vd(t, e) {
  if (mr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qc = function (e) {
  var r = e.children,
    n = e.formattedGraphicalItems,
    a = e.legendWidth,
    i = e.legendContent,
    o = ve(r, fr);
  if (!o) return null;
  var c;
  return (
    o.props && o.props.payload
      ? (c = o.props && o.props.payload)
      : i === "children"
        ? (c = (n || []).reduce(function (l, s) {
            var u = s.item,
              f = s.props,
              d = f.sectors || f.data || [];
            return l.concat(
              d.map(function (p) {
                return {
                  type: o.props.iconType || u.props.legendType,
                  value: p.name,
                  color: p.fill,
                  payload: p,
                };
              }),
            );
          }, []))
        : (c = (n || []).map(function (l) {
            var s = l.item,
              u = s.props,
              f = u.dataKey,
              d = u.name,
              p = u.legendType,
              m = u.hide;
            return {
              inactive: m,
              dataKey: f,
              type: o.props.iconType || p || "square",
              color: li(s),
              value: d || f,
              payload: s.props,
            };
          })),
    ra(ra(ra({}, o.props), fr.getWithHeight(o, a)), {}, { payload: c, item: o })
  );
};
function gr(t) {
  "@babel/helpers - typeof";
  return (
    (gr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    gr(t)
  );
}
function lo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? lo(Object(r), !0).forEach(function (n) {
          Ot(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : lo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ot(t, e, r) {
  return (
    (e = hd(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function hd(t) {
  var e = yd(t, "string");
  return gr(e) == "symbol" ? e : String(e);
}
function yd(t, e) {
  if (gr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function so(t) {
  return xd(t) || bd(t) || gd(t) || md();
}
function md() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gd(t, e) {
  if (t) {
    if (typeof t == "string") return Ea(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ea(t, e);
  }
}
function bd(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function xd(t) {
  if (Array.isArray(t)) return Ea(t);
}
function Ea(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function J(t, e, r) {
  return z(t) || z(e) ? r : re(e) ? he(t, e, r) : W(e) ? e(t) : r;
}
function rr(t, e, r, n) {
  var a = rs(t, function (c) {
    return J(c, e);
  });
  if (r === "number") {
    var i = a.filter(function (c) {
      return M(c) || parseFloat(c);
    });
    return i.length ? [Mn(i), Le(i)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? a.filter(function (c) {
        return !z(c);
      })
    : a;
  return o.map(function (c) {
    return re(c) || c instanceof Date ? c : "";
  });
}
var Od = function (e) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      a = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      c = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (c <= 1) return 0;
    if (
      i &&
      i.axisType === "angleAxis" &&
      Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
    )
      for (var l = i.range, s = 0; s < c; s++) {
        var u = s > 0 ? a[s - 1].coordinate : a[c - 1].coordinate,
          f = a[s].coordinate,
          d = s >= c - 1 ? a[0].coordinate : a[s + 1].coordinate,
          p = void 0;
        if (se(f - u) !== se(d - f)) {
          var m = [];
          if (se(d - f) === se(l[1] - l[0])) {
            p = d;
            var y = f + l[1] - l[0];
            (m[0] = Math.min(y, (y + u) / 2)),
              (m[1] = Math.max(y, (y + u) / 2));
          } else {
            p = u;
            var g = d + l[1] - l[0];
            (m[0] = Math.min(f, (g + f) / 2)),
              (m[1] = Math.max(f, (g + f) / 2));
          }
          var O = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
          if ((e > O[0] && e <= O[1]) || (e >= m[0] && e <= m[1])) {
            o = a[s].index;
            break;
          }
        } else {
          var b = Math.min(u, d),
            x = Math.max(u, d);
          if (e > (b + f) / 2 && e <= (x + f) / 2) {
            o = a[s].index;
            break;
          }
        }
      }
    else
      for (var v = 0; v < c; v++)
        if (
          (v === 0 && e <= (n[v].coordinate + n[v + 1].coordinate) / 2) ||
          (v > 0 &&
            v < c - 1 &&
            e > (n[v].coordinate + n[v - 1].coordinate) / 2 &&
            e <= (n[v].coordinate + n[v + 1].coordinate) / 2) ||
          (v === c - 1 && e > (n[v].coordinate + n[v - 1].coordinate) / 2)
        ) {
          o = n[v].index;
          break;
        }
    return o;
  },
  li = function (e) {
    var r = e,
      n = r.type.displayName,
      a = e.props,
      i = a.stroke,
      o = a.fill,
      c;
    switch (n) {
      case "Line":
        c = i;
        break;
      case "Area":
      case "Radar":
        c = i && i !== "none" ? i : o;
        break;
      default:
        c = o;
        break;
    }
    return c;
  },
  Ad = function (e) {
    var r = e.barSize,
      n = e.totalSize,
      a = e.stackGroups,
      i = a === void 0 ? {} : a;
    if (!i) return {};
    for (var o = {}, c = Object.keys(i), l = 0, s = c.length; l < s; l++)
      for (
        var u = i[c[l]].stackGroups, f = Object.keys(u), d = 0, p = f.length;
        d < p;
        d++
      ) {
        var m = u[f[d]],
          y = m.items,
          g = m.cateAxisId,
          O = y.filter(function (h) {
            return Ce(h.type).indexOf("Bar") >= 0;
          });
        if (O && O.length) {
          var b = O[0].props.barSize,
            x = O[0].props[g];
          o[x] || (o[x] = []);
          var v = z(b) ? r : b;
          o[x].push({
            item: O[0],
            stackList: O.slice(1),
            barSize: z(v) ? void 0 : ue(v, n, 0),
          });
        }
      }
    return o;
  },
  wd = function (e) {
    var r = e.barGap,
      n = e.barCategoryGap,
      a = e.bandSize,
      i = e.sizeList,
      o = i === void 0 ? [] : i,
      c = e.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var s = ue(r, a, 0, !0),
      u,
      f = [];
    if (o[0].barSize === +o[0].barSize) {
      var d = !1,
        p = a / l,
        m = o.reduce(function (v, h) {
          return v + h.barSize || 0;
        }, 0);
      (m += (l - 1) * s),
        m >= a && ((m -= (l - 1) * s), (s = 0)),
        m >= a && p > 0 && ((d = !0), (p *= 0.9), (m = l * p));
      var y = ((a - m) / 2) >> 0,
        g = { offset: y - s, size: 0 };
      u = o.reduce(function (v, h) {
        var w = {
            item: h.item,
            position: {
              offset: g.offset + g.size + s,
              size: d ? p : h.barSize,
            },
          },
          P = [].concat(so(v), [w]);
        return (
          (g = P[P.length - 1].position),
          h.stackList &&
            h.stackList.length &&
            h.stackList.forEach(function (S) {
              P.push({ item: S, position: g });
            }),
          P
        );
      }, f);
    } else {
      var O = ue(n, a, 0, !0);
      a - 2 * O - (l - 1) * s <= 0 && (s = 0);
      var b = (a - 2 * O - (l - 1) * s) / l;
      b > 1 && (b >>= 0);
      var x = c === +c ? Math.min(b, c) : b;
      u = o.reduce(function (v, h, w) {
        var P = [].concat(so(v), [
          {
            item: h.item,
            position: { offset: O + (b + s) * w + (b - x) / 2, size: x },
          },
        ]);
        return (
          h.stackList &&
            h.stackList.length &&
            h.stackList.forEach(function (S) {
              P.push({ item: S, position: P[P.length - 1].position });
            }),
          P
        );
      }, f);
    }
    return u;
  },
  Pd = function (e, r, n, a) {
    var i = n.children,
      o = n.width,
      c = n.margin,
      l = o - (c.left || 0) - (c.right || 0),
      s = Qc({ children: i, legendWidth: l });
    if (s) {
      var u = a || {},
        f = u.width,
        d = u.height,
        p = s.align,
        m = s.verticalAlign,
        y = s.layout;
      if (
        (y === "vertical" || (y === "horizontal" && m === "middle")) &&
        p !== "center" &&
        M(e[p])
      )
        return xe(xe({}, e), {}, Ot({}, p, e[p] + (f || 0)));
      if (
        (y === "horizontal" || (y === "vertical" && p === "center")) &&
        m !== "middle" &&
        M(e[m])
      )
        return xe(xe({}, e), {}, Ot({}, m, e[m] + (d || 0)));
    }
    return e;
  },
  Sd = function (e, r, n) {
    return z(r)
      ? !0
      : e === "horizontal"
        ? r === "yAxis"
        : e === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  el = function (e, r, n, a, i) {
    var o = r.props.children,
      c = fe(o, Wt).filter(function (s) {
        return Sd(a, i, s.props.direction);
      });
    if (c && c.length) {
      var l = c.map(function (s) {
        return s.props.dataKey;
      });
      return e.reduce(
        function (s, u) {
          var f = J(u, n);
          if (z(f)) return s;
          var d = Array.isArray(f) ? [Mn(f), Le(f)] : [f, f],
            p = l.reduce(
              function (m, y) {
                var g = J(u, y, 0),
                  O = d[0] - Math.abs(Array.isArray(g) ? g[0] : g),
                  b = d[1] + Math.abs(Array.isArray(g) ? g[1] : g);
                return [Math.min(O, m[0]), Math.max(b, m[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  jd = function (e, r, n, a, i) {
    var o = r
      .map(function (c) {
        return el(e, c, n, i, a);
      })
      .filter(function (c) {
        return !z(c);
      });
    return o && o.length
      ? o.reduce(
          function (c, l) {
            return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  tl = function (e, r, n, a, i) {
    var o = r.map(function (l) {
      var s = l.props.dataKey;
      return (n === "number" && s && el(e, l, s, a)) || rr(e, s, n, i);
    });
    if (n === "number")
      return o.reduce(
        function (l, s) {
          return [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    var c = {};
    return o.reduce(function (l, s) {
      for (var u = 0, f = s.length; u < f; u++)
        c[s[u]] || ((c[s[u]] = !0), l.push(s[u]));
      return l;
    }, []);
  },
  rl = function (e, r) {
    return (
      (e === "horizontal" && r === "xAxis") ||
      (e === "vertical" && r === "yAxis") ||
      (e === "centric" && r === "angleAxis") ||
      (e === "radial" && r === "radiusAxis")
    );
  },
  nl = function (e, r, n, a) {
    if (a)
      return e.map(function (l) {
        return l.coordinate;
      });
    var i,
      o,
      c = e.map(function (l) {
        return (
          l.coordinate === r && (i = !0),
          l.coordinate === n && (o = !0),
          l.coordinate
        );
      });
    return i || c.push(r), o || c.push(n), c;
  },
  _e = function (e, r, n) {
    if (!e) return null;
    var a = e.scale,
      i = e.duplicateDomain,
      o = e.type,
      c = e.range,
      l = e.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2,
      s = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / l : 0;
    if (
      ((s =
        e.axisType === "angleAxis" && (c == null ? void 0 : c.length) >= 2
          ? se(c[0] - c[1]) * 2 * s
          : s),
      r && (e.ticks || e.niceTicks))
    ) {
      var u = (e.ticks || e.niceTicks).map(function (f) {
        var d = i ? i.indexOf(f) : f;
        return { coordinate: a(d) + s, value: f, offset: s };
      });
      return u.filter(function (f) {
        return !Rt(f.coordinate);
      });
    }
    return e.isCategorical && e.categoricalDomain
      ? e.categoricalDomain.map(function (f, d) {
          return { coordinate: a(f) + s, value: f, index: d, offset: s };
        })
      : a.ticks && !n
        ? a.ticks(e.tickCount).map(function (f) {
            return { coordinate: a(f) + s, value: f, offset: s };
          })
        : a.domain().map(function (f, d) {
            return {
              coordinate: a(f) + s,
              value: i ? i[f] : f,
              index: d,
              offset: s,
            };
          });
  },
  na = new WeakMap(),
  Zr = function (e, r) {
    if (typeof r != "function") return e;
    na.has(e) || na.set(e, new WeakMap());
    var n = na.get(e);
    if (n.has(r)) return n.get(r);
    var a = function () {
      e.apply(void 0, arguments), r.apply(void 0, arguments);
    };
    return n.set(r, a), a;
  },
  al = function (e, r, n) {
    var a = e.scale,
      i = e.type,
      o = e.layout,
      c = e.axisType;
    if (a === "auto")
      return o === "radial" && c === "radiusAxis"
        ? { scale: wi(), realScaleType: "band" }
        : o === "radial" && c === "angleAxis"
          ? { scale: Pi(), realScaleType: "linear" }
          : i === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: rn(), realScaleType: "point" }
            : i === "category"
              ? { scale: wi(), realScaleType: "band" }
              : { scale: Pi(), realScaleType: "linear" };
    if (Rr(a)) {
      var l = "scale".concat(Dn(a));
      return { scale: (Ai[l] || rn)(), realScaleType: Ai[l] ? l : "point" };
    }
    return W(a) ? { scale: a } : { scale: rn(), realScaleType: "point" };
  },
  uo = 1e-4,
  il = function (e) {
    var r = e.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        a = e.range(),
        i = Math.min(a[0], a[1]) - uo,
        o = Math.max(a[0], a[1]) + uo,
        c = e(r[0]),
        l = e(r[n - 1]);
      (c < i || c > o || l < i || l > o) && e.domain([r[0], r[n - 1]]);
    }
  },
  Ed = function (e, r) {
    if (!e) return null;
    for (var n = 0, a = e.length; n < a; n++)
      if (e[n].item === r) return e[n].position;
    return null;
  },
  kd = function (e, r) {
    if (!r || r.length !== 2 || !M(r[0]) || !M(r[1])) return e;
    var n = Math.min(r[0], r[1]),
      a = Math.max(r[0], r[1]),
      i = [e[0], e[1]];
    return (
      (!M(e[0]) || e[0] < n) && (i[0] = n),
      (!M(e[1]) || e[1] > a) && (i[1] = a),
      i[0] > a && (i[0] = a),
      i[1] < n && (i[1] = n),
      i
    );
  },
  $d = function (e) {
    var r = e.length;
    if (!(r <= 0))
      for (var n = 0, a = e[0].length; n < a; ++n)
        for (var i = 0, o = 0, c = 0; c < r; ++c) {
          var l = Rt(e[c][n][1]) ? e[c][n][0] : e[c][n][1];
          l >= 0
            ? ((e[c][n][0] = i), (e[c][n][1] = i + l), (i = e[c][n][1]))
            : ((e[c][n][0] = o), (e[c][n][1] = o + l), (o = e[c][n][1]));
        }
  },
  Td = function (e) {
    var r = e.length;
    if (!(r <= 0))
      for (var n = 0, a = e[0].length; n < a; ++n)
        for (var i = 0, o = 0; o < r; ++o) {
          var c = Rt(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
          c >= 0
            ? ((e[o][n][0] = i), (e[o][n][1] = i + c), (i = e[o][n][1]))
            : ((e[o][n][0] = 0), (e[o][n][1] = 0));
        }
  },
  Id = {
    sign: $d,
    expand: Os,
    none: As,
    silhouette: ws,
    wiggle: Ps,
    positive: Td,
  },
  _d = function (e, r, n) {
    var a = r.map(function (c) {
        return c.props.dataKey;
      }),
      i = Id[n],
      o = bs()
        .keys(a)
        .value(function (c, l) {
          return +J(c, l, 0);
        })
        .order(xs)
        .offset(i);
    return o(e);
  },
  Cd = function (e, r, n, a, i, o) {
    if (!e) return null;
    var c = o ? r.reverse() : r,
      l = {},
      s = c.reduce(function (f, d) {
        var p = d.props,
          m = p.stackId,
          y = p.hide;
        if (y) return f;
        var g = d.props[n],
          O = f[g] || { hasStack: !1, stackGroups: {} };
        if (re(m)) {
          var b = O.stackGroups[m] || {
            numericAxisId: n,
            cateAxisId: a,
            items: [],
          };
          b.items.push(d), (O.hasStack = !0), (O.stackGroups[m] = b);
        } else
          O.stackGroups[Xe("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: a,
            items: [d],
          };
        return xe(xe({}, f), {}, Ot({}, g, O));
      }, l),
      u = {};
    return Object.keys(s).reduce(function (f, d) {
      var p = s[d];
      if (p.hasStack) {
        var m = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (y, g) {
          var O = p.stackGroups[g];
          return xe(
            xe({}, y),
            {},
            Ot({}, g, {
              numericAxisId: n,
              cateAxisId: a,
              items: O.items,
              stackedData: _d(e, O.items, i),
            }),
          );
        }, m);
      }
      return xe(xe({}, f), {}, Ot({}, d, p));
    }, u);
  },
  ol = function (e, r) {
    var n = r.realScaleType,
      a = r.type,
      i = r.tickCount,
      o = r.originalDomain,
      c = r.allowDecimals,
      l = n || r.scale;
    if (l !== "auto" && l !== "linear") return null;
    if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = e.domain();
      if (!s.length) return null;
      var u = Ls(s, i, c);
      return e.domain([Mn(u), Le(u)]), { niceTicks: u };
    }
    if (i && a === "number") {
      var f = e.domain(),
        d = Rs(f, i, c);
      return { niceTicks: d };
    }
    return null;
  };
function jt(t) {
  var e = t.axis,
    r = t.ticks,
    n = t.bandSize,
    a = t.entry,
    i = t.index,
    o = t.dataKey;
  if (e.type === "category") {
    if (!e.allowDuplicatedCategory && e.dataKey && !z(a[e.dataKey])) {
      var c = on(r, "value", a[e.dataKey]);
      if (c) return c.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var l = J(a, z(o) ? e.dataKey : o);
  return z(l) ? null : e.scale(l);
}
var fo = function (e) {
    var r = e.axis,
      n = e.ticks,
      a = e.offset,
      i = e.bandSize,
      o = e.entry,
      c = e.index;
    if (r.type === "category") return n[c] ? n[c].coordinate + a : null;
    var l = J(o, r.dataKey, r.domain[c]);
    return z(l) ? null : r.scale(l) - i / 2 + a;
  },
  Dd = function (e) {
    var r = e.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var a = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
    }
    return n[0];
  },
  Md = function (e, r) {
    var n = e.props.stackId;
    if (re(n)) {
      var a = r[n];
      if (a) {
        var i = a.items.indexOf(e);
        return i >= 0 ? a.stackedData[i] : null;
      }
    }
    return null;
  },
  Bd = function (e) {
    return e.reduce(
      function (r, n) {
        return [Mn(n.concat([r[0]]).filter(M)), Le(n.concat([r[1]]).filter(M))];
      },
      [1 / 0, -1 / 0],
    );
  },
  cl = function (e, r, n) {
    return Object.keys(e)
      .reduce(
        function (a, i) {
          var o = e[i],
            c = o.stackedData,
            l = c.reduce(
              function (s, u) {
                var f = Bd(u.slice(r, n + 1));
                return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(l[0], a[0]), Math.max(l[1], a[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (a) {
        return a === 1 / 0 || a === -1 / 0 ? 0 : a;
      });
  },
  po = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  vo = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  ka = function (e, r, n) {
    if (W(e)) return e(r, n);
    if (!Array.isArray(e)) return r;
    var a = [];
    if (M(e[0])) a[0] = n ? e[0] : Math.min(e[0], r[0]);
    else if (po.test(e[0])) {
      var i = +po.exec(e[0])[1];
      a[0] = r[0] - i;
    } else W(e[0]) ? (a[0] = e[0](r[0])) : (a[0] = r[0]);
    if (M(e[1])) a[1] = n ? e[1] : Math.max(e[1], r[1]);
    else if (vo.test(e[1])) {
      var o = +vo.exec(e[1])[1];
      a[1] = r[1] + o;
    } else W(e[1]) ? (a[1] = e[1](r[1])) : (a[1] = r[1]);
    return a;
  },
  vn = function (e, r, n) {
    if (e && e.scale && e.scale.bandwidth) {
      var a = e.scale.bandwidth();
      if (!n || a > 0) return a;
    }
    if (e && r && r.length >= 2) {
      for (
        var i = ni(r, function (f) {
            return f.coordinate;
          }),
          o = 1 / 0,
          c = 1,
          l = i.length;
        c < l;
        c++
      ) {
        var s = i[c],
          u = i[c - 1];
        o = Math.min((s.coordinate || 0) - (u.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  ho = function (e, r, n) {
    return !e || !e.length || Ke(e, he(n, "type.defaultProps.domain")) ? r : e;
  },
  ll = function (e, r) {
    var n = e.props,
      a = n.dataKey,
      i = n.name,
      o = n.unit,
      c = n.formatter,
      l = n.tooltipType,
      s = n.chartType,
      u = n.hide;
    return xe(
      xe({}, R(e, !1)),
      {},
      {
        dataKey: a,
        unit: o,
        formatter: c,
        name: i || a,
        color: li(e),
        value: J(r, a),
        type: l,
        payload: r,
        chartType: s,
        hide: u,
      },
    );
  };
function br(t) {
  "@babel/helpers - typeof";
  return (
    (br =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    br(t)
  );
}
function yo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? yo(Object(r), !0).forEach(function (n) {
          sl(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : yo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function sl(t, e, r) {
  return (
    (e = Nd(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Nd(t) {
  var e = Ld(t, "string");
  return br(e) == "symbol" ? e : String(e);
}
function Ld(t, e) {
  if (br(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Rd(t, e) {
  return Fd(t) || Kd(t, e) || Wd(t, e) || zd();
}
function zd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wd(t, e) {
  if (t) {
    if (typeof t == "string") return mo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mo(t, e);
  }
}
function mo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Kd(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Fd(t) {
  if (Array.isArray(t)) return t;
}
var hn = Math.PI / 180,
  Xd = function (e) {
    return (e * 180) / Math.PI;
  },
  Z = function (e, r, n, a) {
    return { x: e + Math.cos(-hn * a) * n, y: r + Math.sin(-hn * a) * n };
  },
  ul = function (e, r) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(r - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  Vd = function (e, r, n, a, i) {
    var o = e.width,
      c = e.height,
      l = e.startAngle,
      s = e.endAngle,
      u = ue(e.cx, o, o / 2),
      f = ue(e.cy, c, c / 2),
      d = ul(o, c, n),
      p = ue(e.innerRadius, d, 0),
      m = ue(e.outerRadius, d, d * 0.8),
      y = Object.keys(r);
    return y.reduce(function (g, O) {
      var b = r[O],
        x = b.domain,
        v = b.reversed,
        h;
      if (z(b.range))
        a === "angleAxis" ? (h = [l, s]) : a === "radiusAxis" && (h = [p, m]),
          v && (h = [h[1], h[0]]);
      else {
        h = b.range;
        var w = h,
          P = Rd(w, 2);
        (l = P[0]), (s = P[1]);
      }
      var S = al(b, i),
        E = S.realScaleType,
        j = S.scale;
      j.domain(x).range(h), il(j);
      var C = ol(j, Ie(Ie({}, b), {}, { realScaleType: E })),
        k = Ie(
          Ie(Ie({}, b), C),
          {},
          {
            range: h,
            radius: m,
            realScaleType: E,
            scale: j,
            cx: u,
            cy: f,
            innerRadius: p,
            outerRadius: m,
            startAngle: l,
            endAngle: s,
          },
        );
      return Ie(Ie({}, g), {}, sl({}, O, k));
    }, {});
  },
  Gd = function (e, r) {
    var n = e.x,
      a = e.y,
      i = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
  },
  Hd = function (e, r) {
    var n = e.x,
      a = e.y,
      i = r.cx,
      o = r.cy,
      c = Gd({ x: n, y: a }, { x: i, y: o });
    if (c <= 0) return { radius: c };
    var l = (n - i) / c,
      s = Math.acos(l);
    return (
      a > o && (s = 2 * Math.PI - s),
      { radius: c, angle: Xd(s), angleInRadian: s }
    );
  },
  Ud = function (e) {
    var r = e.startAngle,
      n = e.endAngle,
      a = Math.floor(r / 360),
      i = Math.floor(n / 360),
      o = Math.min(a, i);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  Yd = function (e, r) {
    var n = r.startAngle,
      a = r.endAngle,
      i = Math.floor(n / 360),
      o = Math.floor(a / 360),
      c = Math.min(i, o);
    return e + c * 360;
  },
  go = function (e, r) {
    var n = e.x,
      a = e.y,
      i = Hd({ x: n, y: a }, r),
      o = i.radius,
      c = i.angle,
      l = r.innerRadius,
      s = r.outerRadius;
    if (o < l || o > s) return !1;
    if (o === 0) return !0;
    var u = Ud(r),
      f = u.startAngle,
      d = u.endAngle,
      p = c,
      m;
    if (f <= d) {
      for (; p > d; ) p -= 360;
      for (; p < f; ) p += 360;
      m = p >= f && p <= d;
    } else {
      for (; p > f; ) p -= 360;
      for (; p < d; ) p += 360;
      m = p >= d && p <= f;
    }
    return m ? Ie(Ie({}, r), {}, { radius: o, angle: Yd(p, r) }) : null;
  },
  fl = function (e) {
    return !B.isValidElement(e) && !W(e) && typeof e != "boolean"
      ? e.className
      : "";
  };
function xr(t) {
  "@babel/helpers - typeof";
  return (
    (xr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    xr(t)
  );
}
var qd = ["offset"];
function Zd(t) {
  return tp(t) || ep(t) || Qd(t) || Jd();
}
function Jd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qd(t, e) {
  if (t) {
    if (typeof t == "string") return $a(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $a(t, e);
  }
}
function ep(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function tp(t) {
  if (Array.isArray(t)) return $a(t);
}
function $a(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function rp(t, e) {
  if (t == null) return {};
  var r = np(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function np(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function bo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? bo(Object(r), !0).forEach(function (n) {
          ap(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : bo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ap(t, e, r) {
  return (
    (e = ip(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function ip(t) {
  var e = op(t, "string");
  return xr(e) == "symbol" ? e : String(e);
}
function op(t, e) {
  if (xr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Or() {
  return (
    (Or = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Or.apply(this, arguments)
  );
}
var cp = function (e) {
    var r = e.value,
      n = e.formatter,
      a = z(e.children) ? r : e.children;
    return W(n) ? n(a) : a;
  },
  lp = function (e, r) {
    var n = se(r - e),
      a = Math.min(Math.abs(r - e), 360);
    return n * a;
  },
  sp = function (e, r, n) {
    var a = e.position,
      i = e.viewBox,
      o = e.offset,
      c = e.className,
      l = i,
      s = l.cx,
      u = l.cy,
      f = l.innerRadius,
      d = l.outerRadius,
      p = l.startAngle,
      m = l.endAngle,
      y = l.clockWise,
      g = (f + d) / 2,
      O = lp(p, m),
      b = O >= 0 ? 1 : -1,
      x,
      v;
    a === "insideStart"
      ? ((x = p + b * o), (v = y))
      : a === "insideEnd"
        ? ((x = m - b * o), (v = !y))
        : a === "end" && ((x = m + b * o), (v = y)),
      (v = O <= 0 ? v : !v);
    var h = Z(s, u, g, x),
      w = Z(s, u, g, x + (v ? 1 : -1) * 359),
      P = "M"
        .concat(h.x, ",")
        .concat(
          h.y,
          `
    A`,
        )
        .concat(g, ",")
        .concat(g, ",0,1,")
        .concat(
          v ? 0 : 1,
          `,
    `,
        )
        .concat(w.x, ",")
        .concat(w.y),
      S = z(e.id) ? Xe("recharts-radial-line-") : e.id;
    return A.createElement(
      "text",
      Or({}, n, {
        dominantBaseline: "central",
        className: V("recharts-radial-bar-label", c),
      }),
      A.createElement("defs", null, A.createElement("path", { id: S, d: P })),
      A.createElement("textPath", { xlinkHref: "#".concat(S) }, r),
    );
  },
  up = function (e) {
    var r = e.viewBox,
      n = e.offset,
      a = e.position,
      i = r,
      o = i.cx,
      c = i.cy,
      l = i.innerRadius,
      s = i.outerRadius,
      u = i.startAngle,
      f = i.endAngle,
      d = (u + f) / 2;
    if (a === "outside") {
      var p = Z(o, c, s + n, d),
        m = p.x,
        y = p.y;
      return {
        x: m,
        y,
        textAnchor: m >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (a === "center")
      return { x: o, y: c, textAnchor: "middle", verticalAnchor: "middle" };
    if (a === "centerTop")
      return { x: o, y: c, textAnchor: "middle", verticalAnchor: "start" };
    if (a === "centerBottom")
      return { x: o, y: c, textAnchor: "middle", verticalAnchor: "end" };
    var g = (l + s) / 2,
      O = Z(o, c, g, d),
      b = O.x,
      x = O.y;
    return { x: b, y: x, textAnchor: "middle", verticalAnchor: "middle" };
  },
  fp = function (e) {
    var r = e.viewBox,
      n = e.parentViewBox,
      a = e.offset,
      i = e.position,
      o = r,
      c = o.x,
      l = o.y,
      s = o.width,
      u = o.height,
      f = u >= 0 ? 1 : -1,
      d = f * a,
      p = f > 0 ? "end" : "start",
      m = f > 0 ? "start" : "end",
      y = s >= 0 ? 1 : -1,
      g = y * a,
      O = y > 0 ? "end" : "start",
      b = y > 0 ? "start" : "end";
    if (i === "top") {
      var x = {
        x: c + s / 2,
        y: l - f * a,
        textAnchor: "middle",
        verticalAnchor: p,
      };
      return te(te({}, x), n ? { height: Math.max(l - n.y, 0), width: s } : {});
    }
    if (i === "bottom") {
      var v = {
        x: c + s / 2,
        y: l + u + d,
        textAnchor: "middle",
        verticalAnchor: m,
      };
      return te(
        te({}, v),
        n ? { height: Math.max(n.y + n.height - (l + u), 0), width: s } : {},
      );
    }
    if (i === "left") {
      var h = {
        x: c - g,
        y: l + u / 2,
        textAnchor: O,
        verticalAnchor: "middle",
      };
      return te(
        te({}, h),
        n ? { width: Math.max(h.x - n.x, 0), height: u } : {},
      );
    }
    if (i === "right") {
      var w = {
        x: c + s + g,
        y: l + u / 2,
        textAnchor: b,
        verticalAnchor: "middle",
      };
      return te(
        te({}, w),
        n ? { width: Math.max(n.x + n.width - w.x, 0), height: u } : {},
      );
    }
    var P = n ? { width: s, height: u } : {};
    return i === "insideLeft"
      ? te(
          { x: c + g, y: l + u / 2, textAnchor: b, verticalAnchor: "middle" },
          P,
        )
      : i === "insideRight"
        ? te(
            {
              x: c + s - g,
              y: l + u / 2,
              textAnchor: O,
              verticalAnchor: "middle",
            },
            P,
          )
        : i === "insideTop"
          ? te(
              {
                x: c + s / 2,
                y: l + d,
                textAnchor: "middle",
                verticalAnchor: m,
              },
              P,
            )
          : i === "insideBottom"
            ? te(
                {
                  x: c + s / 2,
                  y: l + u - d,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                P,
              )
            : i === "insideTopLeft"
              ? te({ x: c + g, y: l + d, textAnchor: b, verticalAnchor: m }, P)
              : i === "insideTopRight"
                ? te(
                    {
                      x: c + s - g,
                      y: l + d,
                      textAnchor: O,
                      verticalAnchor: m,
                    },
                    P,
                  )
                : i === "insideBottomLeft"
                  ? te(
                      {
                        x: c + g,
                        y: l + u - d,
                        textAnchor: b,
                        verticalAnchor: p,
                      },
                      P,
                    )
                  : i === "insideBottomRight"
                    ? te(
                        {
                          x: c + s - g,
                          y: l + u - d,
                          textAnchor: O,
                          verticalAnchor: p,
                        },
                        P,
                      )
                    : zt(i) && (M(i.x) || tt(i.x)) && (M(i.y) || tt(i.y))
                      ? te(
                          {
                            x: c + ue(i.x, s),
                            y: l + ue(i.y, u),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          P,
                        )
                      : te(
                          {
                            x: c + s / 2,
                            y: l + u / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          P,
                        );
  },
  dp = function (e) {
    return "cx" in e && M(e.cx);
  };
function ae(t) {
  var e = t.offset,
    r = e === void 0 ? 5 : e,
    n = rp(t, qd),
    a = te({ offset: r }, n),
    i = a.viewBox,
    o = a.position,
    c = a.value,
    l = a.children,
    s = a.content,
    u = a.className,
    f = u === void 0 ? "" : u,
    d = a.textBreakAll;
  if (!i || (z(c) && z(l) && !B.isValidElement(s) && !W(s))) return null;
  if (B.isValidElement(s)) return B.cloneElement(s, a);
  var p;
  if (W(s)) {
    if (((p = B.createElement(s, a)), B.isValidElement(p))) return p;
  } else p = cp(a);
  var m = dp(i),
    y = R(a, !0);
  if (m && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return sp(a, p, y);
  var g = m ? up(a) : fp(a);
  return A.createElement(
    it,
    Or({ className: V("recharts-label", f) }, y, g, { breakAll: d }),
    p,
  );
}
ae.displayName = "Label";
var dl = function (e) {
    var r = e.cx,
      n = e.cy,
      a = e.angle,
      i = e.startAngle,
      o = e.endAngle,
      c = e.r,
      l = e.radius,
      s = e.innerRadius,
      u = e.outerRadius,
      f = e.x,
      d = e.y,
      p = e.top,
      m = e.left,
      y = e.width,
      g = e.height,
      O = e.clockWise,
      b = e.labelViewBox;
    if (b) return b;
    if (M(y) && M(g)) {
      if (M(f) && M(d)) return { x: f, y: d, width: y, height: g };
      if (M(p) && M(m)) return { x: p, y: m, width: y, height: g };
    }
    return M(f) && M(d)
      ? { x: f, y: d, width: 0, height: 0 }
      : M(r) && M(n)
        ? {
            cx: r,
            cy: n,
            startAngle: i || a || 0,
            endAngle: o || a || 0,
            innerRadius: s || 0,
            outerRadius: u || l || c || 0,
            clockWise: O,
          }
        : e.viewBox
          ? e.viewBox
          : {};
  },
  pp = function (e, r) {
    return e
      ? e === !0
        ? A.createElement(ae, { key: "label-implicit", viewBox: r })
        : re(e)
          ? A.createElement(ae, { key: "label-implicit", viewBox: r, value: e })
          : B.isValidElement(e)
            ? e.type === ae
              ? B.cloneElement(e, { key: "label-implicit", viewBox: r })
              : A.createElement(ae, {
                  key: "label-implicit",
                  content: e,
                  viewBox: r,
                })
            : W(e)
              ? A.createElement(ae, {
                  key: "label-implicit",
                  content: e,
                  viewBox: r,
                })
              : zt(e)
                ? A.createElement(
                    ae,
                    Or({ viewBox: r }, e, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  vp = function (e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && n && !e.label)) return null;
    var a = e.children,
      i = dl(e),
      o = fe(a, ae).map(function (l, s) {
        return B.cloneElement(l, { viewBox: r || i, key: "label-".concat(s) });
      });
    if (!n) return o;
    var c = pp(e.label, r || i);
    return [c].concat(Zd(o));
  };
ae.parseViewBox = dl;
ae.renderCallByParent = vp;
function Ar(t) {
  "@babel/helpers - typeof";
  return (
    (Ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ar(t)
  );
}
var hp = ["valueAccessor"],
  yp = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function mp(t) {
  return Op(t) || xp(t) || bp(t) || gp();
}
function gp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bp(t, e) {
  if (t) {
    if (typeof t == "string") return Ta(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ta(t, e);
  }
}
function xp(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function Op(t) {
  if (Array.isArray(t)) return Ta(t);
}
function Ta(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function yn() {
  return (
    (yn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    yn.apply(this, arguments)
  );
}
function xo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Oo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? xo(Object(r), !0).forEach(function (n) {
          Ap(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : xo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ap(t, e, r) {
  return (
    (e = wp(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function wp(t) {
  var e = Pp(t, "string");
  return Ar(e) == "symbol" ? e : String(e);
}
function Pp(t, e) {
  if (Ar(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ao(t, e) {
  if (t == null) return {};
  var r = Sp(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Sp(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
var jp = function (e) {
  return Array.isArray(e.value) ? ns(e.value) : e.value;
};
function je(t) {
  var e = t.valueAccessor,
    r = e === void 0 ? jp : e,
    n = Ao(t, hp),
    a = n.data,
    i = n.dataKey,
    o = n.clockWise,
    c = n.id,
    l = n.textBreakAll,
    s = Ao(n, yp);
  return !a || !a.length
    ? null
    : A.createElement(
        H,
        { className: "recharts-label-list" },
        a.map(function (u, f) {
          var d = z(i) ? r(u, f) : J(u && u.payload, i),
            p = z(c) ? {} : { id: "".concat(c, "-").concat(f) };
          return A.createElement(
            ae,
            yn({}, R(u, !0), s, p, {
              parentViewBox: u.parentViewBox,
              value: d,
              textBreakAll: l,
              viewBox: ae.parseViewBox(
                z(o) ? u : Oo(Oo({}, u), {}, { clockWise: o }),
              ),
              key: "label-".concat(f),
              index: f,
            }),
          );
        }),
      );
}
je.displayName = "LabelList";
function Ep(t, e) {
  return t
    ? t === !0
      ? A.createElement(je, { key: "labelList-implicit", data: e })
      : A.isValidElement(t) || W(t)
        ? A.createElement(je, {
            key: "labelList-implicit",
            data: e,
            content: t,
          })
        : zt(t)
          ? A.createElement(
              je,
              yn({ data: e }, t, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function kp(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || (!t.children && r && !t.label)) return null;
  var n = t.children,
    a = fe(n, je).map(function (o, c) {
      return B.cloneElement(o, { data: e, key: "labelList-".concat(c) });
    });
  if (!r) return a;
  var i = Ep(t.label, e);
  return [i].concat(mp(a));
}
je.renderCallByParent = kp;
function wr(t) {
  "@babel/helpers - typeof";
  return (
    (wr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    wr(t)
  );
}
function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ia.apply(this, arguments)
  );
}
function wo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Po(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? wo(Object(r), !0).forEach(function (n) {
          $p(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : wo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function $p(t, e, r) {
  return (
    (e = Tp(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Tp(t) {
  var e = Ip(t, "string");
  return wr(e) == "symbol" ? e : String(e);
}
function Ip(t, e) {
  if (wr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var _p = function (e, r) {
    var n = se(r - e),
      a = Math.min(Math.abs(r - e), 359.999);
    return n * a;
  },
  Jr = function (e) {
    var r = e.cx,
      n = e.cy,
      a = e.radius,
      i = e.angle,
      o = e.sign,
      c = e.isExternal,
      l = e.cornerRadius,
      s = e.cornerIsExternal,
      u = l * (c ? 1 : -1) + a,
      f = Math.asin(l / u) / hn,
      d = s ? i : i + o * f,
      p = Z(r, n, u, d),
      m = Z(r, n, a, d),
      y = s ? i - o * f : i,
      g = Z(r, n, u * Math.cos(f * hn), y);
    return { center: p, circleTangency: m, lineTangency: g, theta: f };
  },
  pl = function (e) {
    var r = e.cx,
      n = e.cy,
      a = e.innerRadius,
      i = e.outerRadius,
      o = e.startAngle,
      c = e.endAngle,
      l = _p(o, c),
      s = o + l,
      u = Z(r, n, i, o),
      f = Z(r, n, i, s),
      d = "M "
        .concat(u.x, ",")
        .concat(
          u.y,
          `
    A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
    `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o > s),
          `,
    `,
        )
        .concat(f.x, ",")
        .concat(
          f.y,
          `
  `,
        );
    if (a > 0) {
      var p = Z(r, n, a, o),
        m = Z(r, n, a, s);
      d += "L "
        .concat(m.x, ",")
        .concat(
          m.y,
          `
            A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
            `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `,
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else d += "L ".concat(r, ",").concat(n, " Z");
    return d;
  },
  Cp = function (e) {
    var r = e.cx,
      n = e.cy,
      a = e.innerRadius,
      i = e.outerRadius,
      o = e.cornerRadius,
      c = e.forceCornerRadius,
      l = e.cornerIsExternal,
      s = e.startAngle,
      u = e.endAngle,
      f = se(u - s),
      d = Jr({
        cx: r,
        cy: n,
        radius: i,
        angle: s,
        sign: f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      p = d.circleTangency,
      m = d.lineTangency,
      y = d.theta,
      g = Jr({
        cx: r,
        cy: n,
        radius: i,
        angle: u,
        sign: -f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      O = g.circleTangency,
      b = g.lineTangency,
      x = g.theta,
      v = l ? Math.abs(s - u) : Math.abs(s - u) - y - x;
    if (v < 0)
      return c
        ? "M "
            .concat(m.x, ",")
            .concat(
              m.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : pl({
            cx: r,
            cy: n,
            innerRadius: a,
            outerRadius: i,
            startAngle: s,
            endAngle: u,
          });
    var h = "M "
      .concat(m.x, ",")
      .concat(
        m.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(i, ",")
      .concat(i, ",0,")
      .concat(+(v > 180), ",")
      .concat(+(f < 0), ",")
      .concat(O.x, ",")
      .concat(
        O.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(b.x, ",")
      .concat(
        b.y,
        `
  `,
      );
    if (a > 0) {
      var w = Jr({
          cx: r,
          cy: n,
          radius: a,
          angle: s,
          sign: f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        P = w.circleTangency,
        S = w.lineTangency,
        E = w.theta,
        j = Jr({
          cx: r,
          cy: n,
          radius: a,
          angle: u,
          sign: -f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        C = j.circleTangency,
        k = j.lineTangency,
        T = j.theta,
        $ = l ? Math.abs(s - u) : Math.abs(s - u) - E - T;
      if ($ < 0 && o === 0)
        return "".concat(h, "L").concat(r, ",").concat(n, "Z");
      h += "L"
        .concat(k.x, ",")
        .concat(
          k.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(C.x, ",")
        .concat(
          C.y,
          `
      A`,
        )
        .concat(a, ",")
        .concat(a, ",0,")
        .concat(+($ > 180), ",")
        .concat(+(f > 0), ",")
        .concat(P.x, ",")
        .concat(
          P.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(S.x, ",")
        .concat(S.y, "Z");
    } else h += "L".concat(r, ",").concat(n, "Z");
    return h;
  },
  Dp = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  vl = function (e) {
    var r = Po(Po({}, Dp), e),
      n = r.cx,
      a = r.cy,
      i = r.innerRadius,
      o = r.outerRadius,
      c = r.cornerRadius,
      l = r.forceCornerRadius,
      s = r.cornerIsExternal,
      u = r.startAngle,
      f = r.endAngle,
      d = r.className;
    if (o < i || u === f) return null;
    var p = V("recharts-sector", d),
      m = o - i,
      y = ue(c, m, 0, !0),
      g;
    return (
      y > 0 && Math.abs(u - f) < 360
        ? (g = Cp({
            cx: n,
            cy: a,
            innerRadius: i,
            outerRadius: o,
            cornerRadius: Math.min(y, m / 2),
            forceCornerRadius: l,
            cornerIsExternal: s,
            startAngle: u,
            endAngle: f,
          }))
        : (g = pl({
            cx: n,
            cy: a,
            innerRadius: i,
            outerRadius: o,
            startAngle: u,
            endAngle: f,
          })),
      A.createElement(
        "path",
        Ia({}, R(r, !0), { className: p, d: g, role: "img" }),
      )
    );
  };
function Pr(t) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Pr(t)
  );
}
function _a() {
  return (
    (_a = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    _a.apply(this, arguments)
  );
}
function So(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function jo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? So(Object(r), !0).forEach(function (n) {
          Mp(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : So(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Mp(t, e, r) {
  return (
    (e = Bp(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Bp(t) {
  var e = Np(t, "string");
  return Pr(e) == "symbol" ? e : String(e);
}
function Np(t, e) {
  if (Pr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Eo = {
    curveBasisClosed: js,
    curveBasisOpen: Es,
    curveBasis: ks,
    curveBumpX: $s,
    curveBumpY: Ts,
    curveLinearClosed: Is,
    curveLinear: Bc,
    curveMonotoneX: _s,
    curveMonotoneY: Cs,
    curveNatural: Ds,
    curveStep: Ms,
    curveStepAfter: Bs,
    curveStepBefore: Ns,
  },
  Qr = function (e) {
    return e.x === +e.x && e.y === +e.y;
  },
  Yt = function (e) {
    return e.x;
  },
  qt = function (e) {
    return e.y;
  },
  Lp = function (e, r) {
    if (W(e)) return e;
    var n = "curve".concat(Dn(e));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? Eo["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : Eo[n] || Bc;
  },
  Rp = function (e) {
    var r = e.type,
      n = r === void 0 ? "linear" : r,
      a = e.points,
      i = a === void 0 ? [] : a,
      o = e.baseLine,
      c = e.layout,
      l = e.connectNulls,
      s = l === void 0 ? !1 : l,
      u = Lp(n, c),
      f = s
        ? i.filter(function (y) {
            return Qr(y);
          })
        : i,
      d;
    if (Array.isArray(o)) {
      var p = s
          ? o.filter(function (y) {
              return Qr(y);
            })
          : o,
        m = f.map(function (y, g) {
          return jo(jo({}, y), {}, { base: p[g] });
        });
      return (
        c === "vertical"
          ? (d = Hr()
              .y(qt)
              .x1(Yt)
              .x0(function (y) {
                return y.base.x;
              }))
          : (d = Hr()
              .x(Yt)
              .y1(qt)
              .y0(function (y) {
                return y.base.y;
              })),
        d.defined(Qr).curve(u),
        d(m)
      );
    }
    return (
      c === "vertical" && M(o)
        ? (d = Hr().y(qt).x1(Yt).x0(o))
        : M(o)
          ? (d = Hr().x(Yt).y1(qt).y0(o))
          : (d = Ss().x(Yt).y(qt)),
      d.defined(Qr).curve(u),
      d(f)
    );
  },
  We = function (e) {
    var r = e.className,
      n = e.points,
      a = e.path,
      i = e.pathRef;
    if ((!n || !n.length) && !a) return null;
    var o = n && n.length ? Rp(e) : a;
    return A.createElement(
      "path",
      _a({}, R(e, !1), cn(e), {
        className: V("recharts-curve", r),
        d: o,
        ref: i,
      }),
    );
  };
function Sr(t) {
  "@babel/helpers - typeof";
  return (
    (Sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Sr(t)
  );
}
function mn() {
  return (
    (mn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    mn.apply(this, arguments)
  );
}
function zp(t, e) {
  return Xp(t) || Fp(t, e) || Kp(t, e) || Wp();
}
function Wp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kp(t, e) {
  if (t) {
    if (typeof t == "string") return ko(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ko(t, e);
  }
}
function ko(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Fp(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Xp(t) {
  if (Array.isArray(t)) return t;
}
function $o(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function To(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $o(Object(r), !0).forEach(function (n) {
          Vp(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : $o(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Vp(t, e, r) {
  return (
    (e = Gp(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Gp(t) {
  var e = Hp(t, "string");
  return Sr(e) == "symbol" ? e : String(e);
}
function Hp(t, e) {
  if (Sr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Io = function (e, r, n, a, i) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2),
      c = a >= 0 ? 1 : -1,
      l = n >= 0 ? 1 : -1,
      s = (a >= 0 && n >= 0) || (a < 0 && n < 0) ? 1 : 0,
      u;
    if (o > 0 && i instanceof Array) {
      for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
        f[d] = i[d] > o ? o : i[d];
      (u = "M".concat(e, ",").concat(r + c * f[0])),
        f[0] > 0 &&
          (u += "A "
            .concat(f[0], ",")
            .concat(f[0], ",0,0,")
            .concat(s, ",")
            .concat(e + l * f[0], ",")
            .concat(r)),
        (u += "L ".concat(e + n - l * f[1], ",").concat(r)),
        f[1] > 0 &&
          (u += "A "
            .concat(f[1], ",")
            .concat(f[1], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e + n, ",")
            .concat(r + c * f[1])),
        (u += "L ".concat(e + n, ",").concat(r + a - c * f[2])),
        f[2] > 0 &&
          (u += "A "
            .concat(f[2], ",")
            .concat(f[2], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e + n - l * f[2], ",")
            .concat(r + a)),
        (u += "L ".concat(e + l * f[3], ",").concat(r + a)),
        f[3] > 0 &&
          (u += "A "
            .concat(f[3], ",")
            .concat(f[3], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e, ",")
            .concat(r + a - c * f[3])),
        (u += "Z");
    } else if (o > 0 && i === +i && i > 0) {
      var m = Math.min(o, i);
      u = "M "
        .concat(e, ",")
        .concat(
          r + c * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(e + l * m, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(e + n - l * m, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(e + n, ",")
        .concat(
          r + c * m,
          `
            L `,
        )
        .concat(e + n, ",")
        .concat(
          r + a - c * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(e + n - l * m, ",")
        .concat(
          r + a,
          `
            L `,
        )
        .concat(e + l * m, ",")
        .concat(
          r + a,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(e, ",")
        .concat(r + a - c * m, " Z");
    } else
      u = "M "
        .concat(e, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(a, " h ")
        .concat(-n, " Z");
    return u;
  },
  Up = function (e, r) {
    if (!e || !r) return !1;
    var n = e.x,
      a = e.y,
      i = r.x,
      o = r.y,
      c = r.width,
      l = r.height;
    if (Math.abs(c) > 0 && Math.abs(l) > 0) {
      var s = Math.min(i, i + c),
        u = Math.max(i, i + c),
        f = Math.min(o, o + l),
        d = Math.max(o, o + l);
      return n >= s && n <= u && a >= f && a <= d;
    }
    return !1;
  },
  Yp = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  si = function (e) {
    var r = To(To({}, Yp), e),
      n = B.useRef(),
      a = B.useState(-1),
      i = zp(a, 2),
      o = i[0],
      c = i[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var v = n.current.getTotalLength();
          v && c(v);
        } catch {}
    }, []);
    var l = r.x,
      s = r.y,
      u = r.width,
      f = r.height,
      d = r.radius,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      g = r.animationBegin,
      O = r.isAnimationActive,
      b = r.isUpdateAnimationActive;
    if (l !== +l || s !== +s || u !== +u || f !== +f || u === 0 || f === 0)
      return null;
    var x = V("recharts-rectangle", p);
    return b
      ? A.createElement(
          De,
          {
            canBegin: o > 0,
            from: { width: u, height: f, x: l, y: s },
            to: { width: u, height: f, x: l, y: s },
            duration: y,
            animationEasing: m,
            isActive: b,
          },
          function (v) {
            var h = v.width,
              w = v.height,
              P = v.x,
              S = v.y;
            return A.createElement(
              De,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: g,
                duration: y,
                isActive: O,
                easing: m,
              },
              A.createElement(
                "path",
                mn({}, R(r, !0), {
                  className: x,
                  d: Io(P, S, h, w, d),
                  ref: n,
                }),
              ),
            );
          },
        )
      : A.createElement(
          "path",
          mn({}, R(r, !0), { className: x, d: Io(l, s, u, f, d) }),
        );
  },
  qp = ["points", "className", "baseLinePoints", "connectNulls"];
function mt() {
  return (
    (mt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    mt.apply(this, arguments)
  );
}
function Zp(t, e) {
  if (t == null) return {};
  var r = Jp(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Jp(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function _o(t) {
  return rv(t) || tv(t) || ev(t) || Qp();
}
function Qp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ev(t, e) {
  if (t) {
    if (typeof t == "string") return Ca(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ca(t, e);
  }
}
function tv(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function rv(t) {
  if (Array.isArray(t)) return Ca(t);
}
function Ca(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Co = function (e) {
    return e && e.x === +e.x && e.y === +e.y;
  },
  nv = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      r = [[]];
    return (
      e.forEach(function (n) {
        Co(n)
          ? r[r.length - 1].push(n)
          : r[r.length - 1].length > 0 && r.push([]);
      }),
      Co(e[0]) && r[r.length - 1].push(e[0]),
      r[r.length - 1].length <= 0 && (r = r.slice(0, -1)),
      r
    );
  },
  nr = function (e, r) {
    var n = nv(e);
    r &&
      (n = [
        n.reduce(function (i, o) {
          return [].concat(_o(i), _o(o));
        }, []),
      ]);
    var a = n
      .map(function (i) {
        return i.reduce(function (o, c, l) {
          return ""
            .concat(o)
            .concat(l === 0 ? "M" : "L")
            .concat(c.x, ",")
            .concat(c.y);
        }, "");
      })
      .join("");
    return n.length === 1 ? "".concat(a, "Z") : a;
  },
  av = function (e, r, n) {
    var a = nr(e, n);
    return ""
      .concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L")
      .concat(nr(r.reverse(), n).slice(1));
  },
  iv = function (e) {
    var r = e.points,
      n = e.className,
      a = e.baseLinePoints,
      i = e.connectNulls,
      o = Zp(e, qp);
    if (!r || !r.length) return null;
    var c = V("recharts-polygon", n);
    if (a && a.length) {
      var l = o.stroke && o.stroke !== "none",
        s = av(r, a, i);
      return A.createElement(
        "g",
        { className: c },
        A.createElement(
          "path",
          mt({}, R(o, !0), {
            fill: s.slice(-1) === "Z" ? o.fill : "none",
            stroke: "none",
            d: s,
          }),
        ),
        l
          ? A.createElement(
              "path",
              mt({}, R(o, !0), { fill: "none", d: nr(r, i) }),
            )
          : null,
        l
          ? A.createElement(
              "path",
              mt({}, R(o, !0), { fill: "none", d: nr(a, i) }),
            )
          : null,
      );
    }
    var u = nr(r, i);
    return A.createElement(
      "path",
      mt({}, R(o, !0), {
        fill: u.slice(-1) === "Z" ? o.fill : "none",
        className: c,
        d: u,
      }),
    );
  };
function Da() {
  return (
    (Da = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Da.apply(this, arguments)
  );
}
var zr = function (e) {
  var r = e.cx,
    n = e.cy,
    a = e.r,
    i = e.className,
    o = V("recharts-dot", i);
  return r === +r && n === +n && a === +a
    ? A.createElement(
        "circle",
        Da({}, R(e, !1), cn(e), { className: o, cx: r, cy: n, r: a }),
      )
    : null;
};
function jr(t) {
  "@babel/helpers - typeof";
  return (
    (jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    jr(t)
  );
}
var ov = ["x", "y", "top", "left", "width", "height", "className"];
function Ma() {
  return (
    (Ma = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ma.apply(this, arguments)
  );
}
function Do(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function cv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Do(Object(r), !0).forEach(function (n) {
          lv(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Do(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function lv(t, e, r) {
  return (
    (e = sv(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function sv(t) {
  var e = uv(t, "string");
  return jr(e) == "symbol" ? e : String(e);
}
function uv(t, e) {
  if (jr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function fv(t, e) {
  if (t == null) return {};
  var r = dv(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function dv(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
var pv = function (e, r, n, a, i, o) {
    return "M"
      .concat(e, ",")
      .concat(i, "v")
      .concat(a, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  vv = function (e) {
    var r = e.x,
      n = r === void 0 ? 0 : r,
      a = e.y,
      i = a === void 0 ? 0 : a,
      o = e.top,
      c = o === void 0 ? 0 : o,
      l = e.left,
      s = l === void 0 ? 0 : l,
      u = e.width,
      f = u === void 0 ? 0 : u,
      d = e.height,
      p = d === void 0 ? 0 : d,
      m = e.className,
      y = fv(e, ov),
      g = cv({ x: n, y: i, top: c, left: s, width: f, height: p }, y);
    return !M(n) || !M(i) || !M(f) || !M(p) || !M(c) || !M(s)
      ? null
      : A.createElement(
          "path",
          Ma({}, R(g, !0), {
            className: V("recharts-cross", m),
            d: pv(n, i, f, p, c, s),
          }),
        );
  },
  hv = ["cx", "cy", "angle", "ticks", "axisLine"],
  yv = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Et(t) {
  "@babel/helpers - typeof";
  return (
    (Et =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Et(t)
  );
}
function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ar.apply(this, arguments)
  );
}
function Mo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Je(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Mo(Object(r), !0).forEach(function (n) {
          Rn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Mo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Bo(t, e) {
  if (t == null) return {};
  var r = mv(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function mv(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function gv(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function No(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, yl(n.key), n);
  }
}
function bv(t, e, r) {
  return (
    e && No(t.prototype, e),
    r && No(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function xv(t, e, r) {
  return (
    (e = gn(e)),
    Ov(
      t,
      hl() ? Reflect.construct(e, r || [], gn(t).constructor) : e.apply(t, r),
    )
  );
}
function Ov(t, e) {
  if (e && (Et(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Av(t);
}
function Av(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function hl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (hl = function () {
    return !!t;
  })();
}
function gn(t) {
  return (
    (gn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    gn(t)
  );
}
function wv(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Ba(t, e);
}
function Ba(t, e) {
  return (
    (Ba = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Ba(t, e)
  );
}
function Rn(t, e, r) {
  return (
    (e = yl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function yl(t) {
  var e = Pv(t, "string");
  return Et(e) == "symbol" ? e : String(e);
}
function Pv(t, e) {
  if (Et(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Et(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var zn = (function (t) {
  wv(e, t);
  function e() {
    return gv(this, e), xv(this, e, arguments);
  }
  return (
    bv(
      e,
      [
        {
          key: "getTickValueCoord",
          value: function (n) {
            var a = n.coordinate,
              i = this.props,
              o = i.angle,
              c = i.cx,
              l = i.cy;
            return Z(c, l, a, o);
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props.orientation,
              a;
            switch (n) {
              case "left":
                a = "end";
                break;
              case "right":
                a = "start";
                break;
              default:
                a = "middle";
                break;
            }
            return a;
          },
        },
        {
          key: "getViewBox",
          value: function () {
            var n = this.props,
              a = n.cx,
              i = n.cy,
              o = n.angle,
              c = n.ticks,
              l = as(c, function (u) {
                return u.coordinate || 0;
              }),
              s = is(c, function (u) {
                return u.coordinate || 0;
              });
            return {
              cx: a,
              cy: i,
              startAngle: o,
              endAngle: o,
              innerRadius: s.coordinate || 0,
              outerRadius: l.coordinate || 0,
            };
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              a = n.cx,
              i = n.cy,
              o = n.angle,
              c = n.ticks,
              l = n.axisLine,
              s = Bo(n, hv),
              u = c.reduce(
                function (m, y) {
                  return [
                    Math.min(m[0], y.coordinate),
                    Math.max(m[1], y.coordinate),
                  ];
                },
                [1 / 0, -1 / 0],
              ),
              f = Z(a, i, u[0], o),
              d = Z(a, i, u[1], o),
              p = Je(
                Je(Je({}, R(s, !1)), {}, { fill: "none" }, R(l, !1)),
                {},
                { x1: f.x, y1: f.y, x2: d.x, y2: d.y },
              );
            return A.createElement(
              "line",
              ar({ className: "recharts-polar-radius-axis-line" }, p),
            );
          },
        },
        {
          key: "renderTicks",
          value: function () {
            var n = this,
              a = this.props,
              i = a.ticks,
              o = a.tick,
              c = a.angle,
              l = a.tickFormatter,
              s = a.stroke,
              u = Bo(a, yv),
              f = this.getTickTextAnchor(),
              d = R(u, !1),
              p = R(o, !1),
              m = i.map(function (y, g) {
                var O = n.getTickValueCoord(y),
                  b = Je(
                    Je(
                      Je(
                        Je(
                          {
                            textAnchor: f,
                            transform: "rotate("
                              .concat(90 - c, ", ")
                              .concat(O.x, ", ")
                              .concat(O.y, ")"),
                          },
                          d,
                        ),
                        {},
                        { stroke: "none", fill: s },
                        p,
                      ),
                      {},
                      { index: g },
                      O,
                    ),
                    {},
                    { payload: y },
                  );
                return A.createElement(
                  H,
                  ar(
                    {
                      className: V("recharts-polar-radius-axis-tick", fl(o)),
                      key: "tick-".concat(y.coordinate),
                    },
                    Fe(n.props, y, g),
                  ),
                  e.renderTickItem(o, b, l ? l(y.value, g) : y.value),
                );
              });
            return A.createElement(
              H,
              { className: "recharts-polar-radius-axis-ticks" },
              m,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.ticks,
              i = n.axisLine,
              o = n.tick;
            return !a || !a.length
              ? null
              : A.createElement(
                  H,
                  {
                    className: V(
                      "recharts-polar-radius-axis",
                      this.props.className,
                    ),
                  },
                  i && this.renderAxisLine(),
                  o && this.renderTicks(),
                  ae.renderCallByParent(this.props, this.getViewBox()),
                );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, a, i) {
            var o;
            return (
              A.isValidElement(n)
                ? (o = A.cloneElement(n, a))
                : W(n)
                  ? (o = n(a))
                  : (o = A.createElement(
                      it,
                      ar({}, a, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      i,
                    )),
              o
            );
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
Rn(zn, "displayName", "PolarRadiusAxis");
Rn(zn, "axisType", "radiusAxis");
Rn(zn, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0,
});
function kt(t) {
  "@babel/helpers - typeof";
  return (
    (kt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    kt(t)
  );
}
function et() {
  return (
    (et = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    et.apply(this, arguments)
  );
}
function Lo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Lo(Object(r), !0).forEach(function (n) {
          Wn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Lo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Sv(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ro(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, gl(n.key), n);
  }
}
function jv(t, e, r) {
  return (
    e && Ro(t.prototype, e),
    r && Ro(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Ev(t, e, r) {
  return (
    (e = bn(e)),
    kv(
      t,
      ml() ? Reflect.construct(e, r || [], bn(t).constructor) : e.apply(t, r),
    )
  );
}
function kv(t, e) {
  if (e && (kt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return $v(t);
}
function $v(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function ml() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ml = function () {
    return !!t;
  })();
}
function bn(t) {
  return (
    (bn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    bn(t)
  );
}
function Tv(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Na(t, e);
}
function Na(t, e) {
  return (
    (Na = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Na(t, e)
  );
}
function Wn(t, e, r) {
  return (
    (e = gl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function gl(t) {
  var e = Iv(t, "string");
  return kt(e) == "symbol" ? e : String(e);
}
function Iv(t, e) {
  if (kt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (kt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var _v = Math.PI / 180,
  zo = 1e-5,
  Kn = (function (t) {
    Tv(e, t);
    function e() {
      return Sv(this, e), Ev(this, e, arguments);
    }
    return (
      jv(
        e,
        [
          {
            key: "getTickLineCoord",
            value: function (n) {
              var a = this.props,
                i = a.cx,
                o = a.cy,
                c = a.radius,
                l = a.orientation,
                s = a.tickSize,
                u = s || 8,
                f = Z(i, o, c, n.coordinate),
                d = Z(i, o, c + (l === "inner" ? -1 : 1) * u, n.coordinate);
              return { x1: f.x, y1: f.y, x2: d.x, y2: d.y };
            },
          },
          {
            key: "getTickTextAnchor",
            value: function (n) {
              var a = this.props.orientation,
                i = Math.cos(-n.coordinate * _v),
                o;
              return (
                i > zo
                  ? (o = a === "outer" ? "start" : "end")
                  : i < -zo
                    ? (o = a === "outer" ? "end" : "start")
                    : (o = "middle"),
                o
              );
            },
          },
          {
            key: "renderAxisLine",
            value: function () {
              var n = this.props,
                a = n.cx,
                i = n.cy,
                o = n.radius,
                c = n.axisLine,
                l = n.axisLineType,
                s = Qe(
                  Qe({}, R(this.props, !1)),
                  {},
                  { fill: "none" },
                  R(c, !1),
                );
              if (l === "circle")
                return A.createElement(
                  zr,
                  et({ className: "recharts-polar-angle-axis-line" }, s, {
                    cx: a,
                    cy: i,
                    r: o,
                  }),
                );
              var u = this.props.ticks,
                f = u.map(function (d) {
                  return Z(a, i, o, d.coordinate);
                });
              return A.createElement(
                iv,
                et({ className: "recharts-polar-angle-axis-line" }, s, {
                  points: f,
                }),
              );
            },
          },
          {
            key: "renderTicks",
            value: function () {
              var n = this,
                a = this.props,
                i = a.ticks,
                o = a.tick,
                c = a.tickLine,
                l = a.tickFormatter,
                s = a.stroke,
                u = R(this.props, !1),
                f = R(o, !1),
                d = Qe(Qe({}, u), {}, { fill: "none" }, R(c, !1)),
                p = i.map(function (m, y) {
                  var g = n.getTickLineCoord(m),
                    O = n.getTickTextAnchor(m),
                    b = Qe(
                      Qe(
                        Qe({ textAnchor: O }, u),
                        {},
                        { stroke: "none", fill: s },
                        f,
                      ),
                      {},
                      { index: y, payload: m, x: g.x2, y: g.y2 },
                    );
                  return A.createElement(
                    H,
                    et(
                      {
                        className: V("recharts-polar-angle-axis-tick", fl(o)),
                        key: "tick-".concat(m.coordinate),
                      },
                      Fe(n.props, m, y),
                    ),
                    c &&
                      A.createElement(
                        "line",
                        et(
                          { className: "recharts-polar-angle-axis-tick-line" },
                          d,
                          g,
                        ),
                      ),
                    o && e.renderTickItem(o, b, l ? l(m.value, y) : m.value),
                  );
                });
              return A.createElement(
                H,
                { className: "recharts-polar-angle-axis-ticks" },
                p,
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                a = n.ticks,
                i = n.radius,
                o = n.axisLine;
              return i <= 0 || !a || !a.length
                ? null
                : A.createElement(
                    H,
                    {
                      className: V(
                        "recharts-polar-angle-axis",
                        this.props.className,
                      ),
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(),
                  );
            },
          },
        ],
        [
          {
            key: "renderTickItem",
            value: function (n, a, i) {
              var o;
              return (
                A.isValidElement(n)
                  ? (o = A.cloneElement(n, a))
                  : W(n)
                    ? (o = n(a))
                    : (o = A.createElement(
                        it,
                        et({}, a, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        i,
                      )),
                o
              );
            },
          },
        ],
      ),
      e
    );
  })(B.PureComponent);
Wn(Kn, "displayName", "PolarAngleAxis");
Wn(Kn, "axisType", "angleAxis");
Wn(Kn, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0,
});
function Er(t) {
  "@babel/helpers - typeof";
  return (
    (Er =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Er(t)
  );
}
function xn() {
  return (
    (xn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    xn.apply(this, arguments)
  );
}
function Cv(t, e) {
  return Nv(t) || Bv(t, e) || Mv(t, e) || Dv();
}
function Dv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mv(t, e) {
  if (t) {
    if (typeof t == "string") return Wo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wo(t, e);
  }
}
function Wo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Bv(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Nv(t) {
  if (Array.isArray(t)) return t;
}
function Ko(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Fo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ko(Object(r), !0).forEach(function (n) {
          Lv(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ko(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Lv(t, e, r) {
  return (
    (e = Rv(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Rv(t) {
  var e = zv(t, "string");
  return Er(e) == "symbol" ? e : String(e);
}
function zv(t, e) {
  if (Er(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Xo = function (e, r, n, a, i) {
    var o = n - a,
      c;
    return (
      (c = "M ".concat(e, ",").concat(r)),
      (c += "L ".concat(e + n, ",").concat(r)),
      (c += "L ".concat(e + n - o / 2, ",").concat(r + i)),
      (c += "L ".concat(e + n - o / 2 - a, ",").concat(r + i)),
      (c += "L ".concat(e, ",").concat(r, " Z")),
      c
    );
  },
  Wv = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Kv = function (e) {
    var r = Fo(Fo({}, Wv), e),
      n = B.useRef(),
      a = B.useState(-1),
      i = Cv(a, 2),
      o = i[0],
      c = i[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var x = n.current.getTotalLength();
          x && c(x);
        } catch {}
    }, []);
    var l = r.x,
      s = r.y,
      u = r.upperWidth,
      f = r.lowerWidth,
      d = r.height,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      g = r.animationBegin,
      O = r.isUpdateAnimationActive;
    if (
      l !== +l ||
      s !== +s ||
      u !== +u ||
      f !== +f ||
      d !== +d ||
      (u === 0 && f === 0) ||
      d === 0
    )
      return null;
    var b = V("recharts-trapezoid", p);
    return O
      ? A.createElement(
          De,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: d, x: l, y: s },
            to: { upperWidth: u, lowerWidth: f, height: d, x: l, y: s },
            duration: y,
            animationEasing: m,
            isActive: O,
          },
          function (x) {
            var v = x.upperWidth,
              h = x.lowerWidth,
              w = x.height,
              P = x.x,
              S = x.y;
            return A.createElement(
              De,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: g,
                duration: y,
                easing: m,
              },
              A.createElement(
                "path",
                xn({}, R(r, !0), {
                  className: b,
                  d: Xo(P, S, v, h, w),
                  ref: n,
                }),
              ),
            );
          },
        )
      : A.createElement(
          "g",
          null,
          A.createElement(
            "path",
            xn({}, R(r, !0), { className: b, d: Xo(l, s, u, f, d) }),
          ),
        );
  },
  Fv = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function kr(t) {
  "@babel/helpers - typeof";
  return (
    (kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    kr(t)
  );
}
function Xv(t, e) {
  if (t == null) return {};
  var r = Vv(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Vv(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Vo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function On(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vo(Object(r), !0).forEach(function (n) {
          Gv(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Vo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Gv(t, e, r) {
  return (
    (e = Hv(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Hv(t) {
  var e = Uv(t, "string");
  return kr(e) == "symbol" ? e : String(e);
}
function Uv(t, e) {
  if (kr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Yv(t, e) {
  return On(On({}, e), t);
}
function qv(t, e) {
  return t === "symbols";
}
function Go(t) {
  var e = t.shapeType,
    r = t.elementProps;
  switch (e) {
    case "rectangle":
      return A.createElement(si, r);
    case "trapezoid":
      return A.createElement(Kv, r);
    case "sector":
      return A.createElement(vl, r);
    case "symbols":
      if (qv(e)) return A.createElement(Bn, r);
      break;
    default:
      return null;
  }
}
function Zv(t) {
  return B.isValidElement(t) ? t.props : t;
}
function An(t) {
  var e = t.option,
    r = t.shapeType,
    n = t.propTransformer,
    a = n === void 0 ? Yv : n,
    i = t.activeClassName,
    o = i === void 0 ? "recharts-active-shape" : i,
    c = t.isActive,
    l = Xv(t, Fv),
    s;
  if (B.isValidElement(e)) s = B.cloneElement(e, On(On({}, l), Zv(e)));
  else if (W(e)) s = e(l);
  else if (os(e) && !cs(e)) {
    var u = a(e, l);
    s = A.createElement(Go, { shapeType: r, elementProps: u });
  } else {
    var f = l;
    s = A.createElement(Go, { shapeType: r, elementProps: f });
  }
  return c ? A.createElement(H, { className: o }, s) : s;
}
function Fn(t, e) {
  return e != null && "trapezoids" in t.props;
}
function Xn(t, e) {
  return e != null && "sectors" in t.props;
}
function $r(t, e) {
  return e != null && "points" in t.props;
}
function Jv(t, e) {
  var r,
    n,
    a =
      t.x ===
        (e == null || (r = e.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || t.x === e.x,
    i =
      t.y ===
        (e == null || (n = e.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || t.y === e.y;
  return a && i;
}
function Qv(t, e) {
  var r = t.endAngle === e.endAngle,
    n = t.startAngle === e.startAngle;
  return r && n;
}
function eh(t, e) {
  var r = t.x === e.x,
    n = t.y === e.y,
    a = t.z === e.z;
  return r && n && a;
}
function th(t, e) {
  var r;
  return Fn(t, e) ? (r = Jv) : Xn(t, e) ? (r = Qv) : $r(t, e) && (r = eh), r;
}
function rh(t, e) {
  var r;
  return (
    Fn(t, e)
      ? (r = "trapezoids")
      : Xn(t, e)
        ? (r = "sectors")
        : $r(t, e) && (r = "points"),
    r
  );
}
function nh(t, e) {
  if (Fn(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Xn(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return $r(t, e) ? e.payload : {};
}
function ah(t) {
  var e = t.activeTooltipItem,
    r = t.graphicalItem,
    n = t.itemData,
    a = rh(r, e),
    i = nh(r, e),
    o = n.filter(function (l, s) {
      var u = Ke(i, l),
        f = r.props[a].filter(function (m) {
          var y = th(r, e);
          return y(m, e);
        }),
        d = r.props[a].indexOf(f[f.length - 1]),
        p = s === d;
      return u && p;
    }),
    c = n.indexOf(o[o.length - 1]);
  return c;
}
var nn;
function $t(t) {
  "@babel/helpers - typeof";
  return (
    ($t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    $t(t)
  );
}
function gt() {
  return (
    (gt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    gt.apply(this, arguments)
  );
}
function Ho(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Q(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ho(Object(r), !0).forEach(function (n) {
          Oe(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ho(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ih(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Uo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, xl(n.key), n);
  }
}
function oh(t, e, r) {
  return (
    e && Uo(t.prototype, e),
    r && Uo(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function ch(t, e, r) {
  return (
    (e = wn(e)),
    lh(
      t,
      bl() ? Reflect.construct(e, r || [], wn(t).constructor) : e.apply(t, r),
    )
  );
}
function lh(t, e) {
  if (e && ($t(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return ht(t);
}
function bl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (bl = function () {
    return !!t;
  })();
}
function wn(t) {
  return (
    (wn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    wn(t)
  );
}
function ht(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function sh(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && La(t, e);
}
function La(t, e) {
  return (
    (La = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    La(t, e)
  );
}
function Oe(t, e, r) {
  return (
    (e = xl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xl(t) {
  var e = uh(t, "string");
  return $t(e) == "symbol" ? e : String(e);
}
function uh(t, e) {
  if ($t(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if ($t(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ve = (function (t) {
  sh(e, t);
  function e(r) {
    var n;
    return (
      ih(this, e),
      (n = ch(this, e, [r])),
      Oe(ht(n), "pieRef", null),
      Oe(ht(n), "sectorRefs", []),
      Oe(ht(n), "id", Xe("recharts-pie-")),
      Oe(ht(n), "handleAnimationEnd", function () {
        var a = n.props.onAnimationEnd;
        n.setState({ isAnimationFinished: !0 }), W(a) && a();
      }),
      Oe(ht(n), "handleAnimationStart", function () {
        var a = n.props.onAnimationStart;
        n.setState({ isAnimationFinished: !1 }), W(a) && a();
      }),
      (n.state = {
        isAnimationFinished: !r.isAnimationActive,
        prevIsAnimationActive: r.isAnimationActive,
        prevAnimationId: r.animationId,
        sectorToFocus: 0,
      }),
      n
    );
  }
  return (
    oh(
      e,
      [
        {
          key: "isActiveIndex",
          value: function (n) {
            var a = this.props.activeIndex;
            return Array.isArray(a) ? a.indexOf(n) !== -1 : n === a;
          },
        },
        {
          key: "hasActiveIndex",
          value: function () {
            var n = this.props.activeIndex;
            return Array.isArray(n) ? n.length !== 0 : n || n === 0;
          },
        },
        {
          key: "renderLabels",
          value: function (n) {
            var a = this.props.isAnimationActive;
            if (a && !this.state.isAnimationFinished) return null;
            var i = this.props,
              o = i.label,
              c = i.labelLine,
              l = i.dataKey,
              s = i.valueKey,
              u = R(this.props, !1),
              f = R(o, !1),
              d = R(c, !1),
              p = (o && o.offsetRadius) || 20,
              m = n.map(function (y, g) {
                var O = (y.startAngle + y.endAngle) / 2,
                  b = Z(y.cx, y.cy, y.outerRadius + p, O),
                  x = Q(
                    Q(Q(Q({}, u), y), {}, { stroke: "none" }, f),
                    {},
                    { index: g, textAnchor: e.getTextAnchor(b.x, y.cx) },
                    b,
                  ),
                  v = Q(
                    Q(Q(Q({}, u), y), {}, { fill: "none", stroke: y.fill }, d),
                    {},
                    {
                      index: g,
                      points: [Z(y.cx, y.cy, y.outerRadius, O), b],
                      key: "line",
                    },
                  ),
                  h = l;
                return (
                  z(l) && z(s) ? (h = "value") : z(l) && (h = s),
                  A.createElement(
                    H,
                    {
                      key: "label-"
                        .concat(y.startAngle, "-")
                        .concat(y.endAngle, "-")
                        .concat(y.midAngle, "-")
                        .concat(g),
                    },
                    c && e.renderLabelLineItem(c, v),
                    e.renderLabelItem(o, x, J(y, h)),
                  )
                );
              });
            return A.createElement(H, { className: "recharts-pie-labels" }, m);
          },
        },
        {
          key: "renderSectorsStatically",
          value: function (n) {
            var a = this,
              i = this.props,
              o = i.activeShape,
              c = i.blendStroke,
              l = i.inactiveShape;
            return n.map(function (s, u) {
              if (
                (s == null ? void 0 : s.startAngle) === 0 &&
                (s == null ? void 0 : s.endAngle) === 0 &&
                n.length !== 1
              )
                return null;
              var f = a.isActiveIndex(u),
                d = l && a.hasActiveIndex() ? l : null,
                p = f ? o : d,
                m = Q(
                  Q({}, s),
                  {},
                  { stroke: c ? s.fill : s.stroke, tabIndex: -1 },
                );
              return A.createElement(
                H,
                gt(
                  {
                    ref: function (g) {
                      g && !a.sectorRefs.includes(g) && a.sectorRefs.push(g);
                    },
                    tabIndex: -1,
                    className: "recharts-pie-sector",
                  },
                  Fe(a.props, s, u),
                  {
                    key: "sector-"
                      .concat(s == null ? void 0 : s.startAngle, "-")
                      .concat(s == null ? void 0 : s.endAngle, "-")
                      .concat(s.midAngle, "-")
                      .concat(u),
                  },
                ),
                A.createElement(
                  An,
                  gt({ option: p, isActive: f, shapeType: "sector" }, m),
                ),
              );
            });
          },
        },
        {
          key: "renderSectorsWithAnimation",
          value: function () {
            var n = this,
              a = this.props,
              i = a.sectors,
              o = a.isAnimationActive,
              c = a.animationBegin,
              l = a.animationDuration,
              s = a.animationEasing,
              u = a.animationId,
              f = this.state,
              d = f.prevSectors,
              p = f.prevIsAnimationActive;
            return A.createElement(
              De,
              {
                begin: c,
                duration: l,
                isActive: o,
                easing: s,
                from: { t: 0 },
                to: { t: 1 },
                key: "pie-".concat(u, "-").concat(p),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd,
              },
              function (m) {
                var y = m.t,
                  g = [],
                  O = i && i[0],
                  b = O.startAngle;
                return (
                  i.forEach(function (x, v) {
                    var h = d && d[v],
                      w = v > 0 ? he(x, "paddingAngle", 0) : 0;
                    if (h) {
                      var P = ee(
                          h.endAngle - h.startAngle,
                          x.endAngle - x.startAngle,
                        ),
                        S = Q(
                          Q({}, x),
                          {},
                          { startAngle: b + w, endAngle: b + P(y) + w },
                        );
                      g.push(S), (b = S.endAngle);
                    } else {
                      var E = x.endAngle,
                        j = x.startAngle,
                        C = ee(0, E - j),
                        k = C(y),
                        T = Q(
                          Q({}, x),
                          {},
                          { startAngle: b + w, endAngle: b + k + w },
                        );
                      g.push(T), (b = T.endAngle);
                    }
                  }),
                  A.createElement(H, null, n.renderSectorsStatically(g))
                );
              },
            );
          },
        },
        {
          key: "attachKeyboardHandlers",
          value: function (n) {
            var a = this;
            n.onkeydown = function (i) {
              if (!i.altKey)
                switch (i.key) {
                  case "ArrowLeft": {
                    var o = ++a.state.sectorToFocus % a.sectorRefs.length;
                    a.sectorRefs[o].focus(), a.setState({ sectorToFocus: o });
                    break;
                  }
                  case "ArrowRight": {
                    var c =
                      --a.state.sectorToFocus < 0
                        ? a.sectorRefs.length - 1
                        : a.state.sectorToFocus % a.sectorRefs.length;
                    a.sectorRefs[c].focus(), a.setState({ sectorToFocus: c });
                    break;
                  }
                  case "Escape": {
                    a.sectorRefs[a.state.sectorToFocus].blur(),
                      a.setState({ sectorToFocus: 0 });
                    break;
                  }
                }
            };
          },
        },
        {
          key: "renderSectors",
          value: function () {
            var n = this.props,
              a = n.sectors,
              i = n.isAnimationActive,
              o = this.state.prevSectors;
            return i && a && a.length && (!o || !Ke(o, a))
              ? this.renderSectorsWithAnimation()
              : this.renderSectorsStatically(a);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.pieRef && this.attachKeyboardHandlers(this.pieRef);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.hide,
              o = a.sectors,
              c = a.className,
              l = a.label,
              s = a.cx,
              u = a.cy,
              f = a.innerRadius,
              d = a.outerRadius,
              p = a.isAnimationActive,
              m = this.state.isAnimationFinished;
            if (i || !o || !o.length || !M(s) || !M(u) || !M(f) || !M(d))
              return null;
            var y = V("recharts-pie", c);
            return A.createElement(
              H,
              {
                tabIndex: this.props.rootTabIndex,
                className: y,
                ref: function (O) {
                  n.pieRef = O;
                },
              },
              this.renderSectors(),
              l && this.renderLabels(o),
              ae.renderCallByParent(this.props, null, !1),
              (!p || m) && je.renderCallByParent(this.props, o, !1),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, a) {
            return a.prevIsAnimationActive !== n.isAnimationActive
              ? {
                  prevIsAnimationActive: n.isAnimationActive,
                  prevAnimationId: n.animationId,
                  curSectors: n.sectors,
                  prevSectors: [],
                  isAnimationFinished: !0,
                }
              : n.isAnimationActive && n.animationId !== a.prevAnimationId
                ? {
                    prevAnimationId: n.animationId,
                    curSectors: n.sectors,
                    prevSectors: a.curSectors,
                    isAnimationFinished: !0,
                  }
                : n.sectors !== a.curSectors
                  ? { curSectors: n.sectors, isAnimationFinished: !0 }
                  : null;
          },
        },
        {
          key: "getTextAnchor",
          value: function (n, a) {
            return n > a ? "start" : n < a ? "end" : "middle";
          },
        },
        {
          key: "renderLabelLineItem",
          value: function (n, a) {
            if (A.isValidElement(n)) return A.cloneElement(n, a);
            if (W(n)) return n(a);
            var i = V(
              "recharts-pie-label-line",
              typeof n != "boolean" ? n.className : "",
            );
            return A.createElement(
              We,
              gt({}, a, { type: "linear", className: i }),
            );
          },
        },
        {
          key: "renderLabelItem",
          value: function (n, a, i) {
            if (A.isValidElement(n)) return A.cloneElement(n, a);
            var o = i;
            if (W(n) && ((o = n(a)), A.isValidElement(o))) return o;
            var c = V(
              "recharts-pie-label-text",
              typeof n != "boolean" && !W(n) ? n.className : "",
            );
            return A.createElement(
              it,
              gt({}, a, { alignmentBaseline: "middle", className: c }),
              o,
            );
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
nn = Ve;
Oe(Ve, "displayName", "Pie");
Oe(Ve, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Ae.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0,
});
Oe(Ve, "parseDeltaAngle", function (t, e) {
  var r = se(e - t),
    n = Math.min(Math.abs(e - t), 360);
  return r * n;
});
Oe(Ve, "getRealPieData", function (t) {
  var e = t.props,
    r = e.data,
    n = e.children,
    a = R(t.props, !1),
    i = fe(n, Ln);
  return r && r.length
    ? r.map(function (o, c) {
        return Q(Q(Q({ payload: o }, a), o), i && i[c] && i[c].props);
      })
    : i && i.length
      ? i.map(function (o) {
          return Q(Q({}, a), o.props);
        })
      : [];
});
Oe(Ve, "parseCoordinateOfPie", function (t, e) {
  var r = e.top,
    n = e.left,
    a = e.width,
    i = e.height,
    o = ul(a, i),
    c = n + ue(t.props.cx, a, a / 2),
    l = r + ue(t.props.cy, i, i / 2),
    s = ue(t.props.innerRadius, o, 0),
    u = ue(t.props.outerRadius, o, o * 0.8),
    f = t.props.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return { cx: c, cy: l, innerRadius: s, outerRadius: u, maxRadius: f };
});
Oe(Ve, "getComposedData", function (t) {
  var e = t.item,
    r = t.offset,
    n = nn.getRealPieData(e);
  if (!n || !n.length) return null;
  var a = e.props,
    i = a.cornerRadius,
    o = a.startAngle,
    c = a.endAngle,
    l = a.paddingAngle,
    s = a.dataKey,
    u = a.nameKey,
    f = a.valueKey,
    d = a.tooltipType,
    p = Math.abs(e.props.minAngle),
    m = nn.parseCoordinateOfPie(e, r),
    y = nn.parseDeltaAngle(o, c),
    g = Math.abs(y),
    O = s;
  z(s) && z(f)
    ? (Se(
        !1,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      ),
      (O = "value"))
    : z(s) &&
      (Se(
        !1,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      ),
      (O = f));
  var b = n.filter(function (S) {
      return J(S, O, 0) !== 0;
    }).length,
    x = (g >= 360 ? b : b - 1) * l,
    v = g - b * p - x,
    h = n.reduce(function (S, E) {
      var j = J(E, O, 0);
      return S + (M(j) ? j : 0);
    }, 0),
    w;
  if (h > 0) {
    var P;
    w = n.map(function (S, E) {
      var j = J(S, O, 0),
        C = J(S, u, E),
        k = (M(j) ? j : 0) / h,
        T;
      E ? (T = P.endAngle + se(y) * l * (j !== 0 ? 1 : 0)) : (T = o);
      var $ = T + se(y) * ((j !== 0 ? p : 0) + k * v),
        D = (T + $) / 2,
        _ = (m.innerRadius + m.outerRadius) / 2,
        N = [{ name: C, value: j, payload: S, dataKey: O, type: d }],
        L = Z(m.cx, m.cy, _, D);
      return (
        (P = Q(
          Q(
            Q(
              {
                percent: k,
                cornerRadius: i,
                name: C,
                tooltipPayload: N,
                midAngle: D,
                middleRadius: _,
                tooltipPosition: L,
              },
              S,
            ),
            m,
          ),
          {},
          {
            value: J(S, O),
            startAngle: T,
            endAngle: $,
            payload: S,
            paddingAngle: se(y) * l,
          },
        )),
        P
      );
    });
  }
  return Q(Q({}, m), {}, { sectors: w, data: n });
});
function Tr(t) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Tr(t)
  );
}
function Yo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Yo(Object(r), !0).forEach(function (n) {
          Ol(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Yo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ol(t, e, r) {
  return (
    (e = fh(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function fh(t) {
  var e = dh(t, "string");
  return Tr(e) == "symbol" ? e : String(e);
}
function dh(t, e) {
  if (Tr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ph = ["Webkit", "Moz", "O", "ms"],
  vh = function (e, r) {
    var n = e.replace(/(\w)/, function (i) {
        return i.toUpperCase();
      }),
      a = ph.reduce(function (i, o) {
        return qo(qo({}, i), {}, Ol({}, o + n, r));
      }, {});
    return (a[e] = r), a;
  };
function Tt(t) {
  "@babel/helpers - typeof";
  return (
    (Tt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Tt(t)
  );
}
function Pn() {
  return (
    (Pn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Pn.apply(this, arguments)
  );
}
function Zo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function aa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Zo(Object(r), !0).forEach(function (n) {
          pe(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Zo(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function hh(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Jo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, wl(n.key), n);
  }
}
function yh(t, e, r) {
  return (
    e && Jo(t.prototype, e),
    r && Jo(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function mh(t, e, r) {
  return (
    (e = Sn(e)),
    gh(
      t,
      Al() ? Reflect.construct(e, r || [], Sn(t).constructor) : e.apply(t, r),
    )
  );
}
function gh(t, e) {
  if (e && (Tt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Ee(t);
}
function Al() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Al = function () {
    return !!t;
  })();
}
function Sn(t) {
  return (
    (Sn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Sn(t)
  );
}
function Ee(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function bh(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Ra(t, e);
}
function Ra(t, e) {
  return (
    (Ra = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Ra(t, e)
  );
}
function pe(t, e, r) {
  return (
    (e = wl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function wl(t) {
  var e = xh(t, "string");
  return Tt(e) == "symbol" ? e : String(e);
}
function xh(t, e) {
  if (Tt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Tt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Oh = function (e) {
    var r = e.data,
      n = e.startIndex,
      a = e.endIndex,
      i = e.x,
      o = e.width,
      c = e.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      s = rn()
        .domain(an(0, l))
        .range([i, i + o - c]),
      u = s.domain().map(function (f) {
        return s(f);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(n),
      endX: s(a),
      scale: s,
      scaleValues: u,
    };
  },
  Qo = function (e) {
    return e.changedTouches && !!e.changedTouches.length;
  },
  It = (function (t) {
    bh(e, t);
    function e(r) {
      var n;
      return (
        hh(this, e),
        (n = mh(this, e, [r])),
        pe(Ee(n), "handleDrag", function (a) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(a)
              : n.state.isSlideMoving && n.handleSlideDrag(a);
        }),
        pe(Ee(n), "handleTouchMove", function (a) {
          a.changedTouches != null &&
            a.changedTouches.length > 0 &&
            n.handleDrag(a.changedTouches[0]);
        }),
        pe(Ee(n), "handleDragEnd", function () {
          n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var a = n.props,
              i = a.endIndex,
              o = a.onDragEnd,
              c = a.startIndex;
            o == null || o({ endIndex: i, startIndex: c });
          }),
            n.detachDragEndListener();
        }),
        pe(Ee(n), "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        pe(Ee(n), "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        pe(Ee(n), "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        pe(Ee(n), "handleSlideDragStart", function (a) {
          var i = Qo(a) ? a.changedTouches[0] : a;
          n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: i.pageX,
          }),
            n.attachDragEndListener();
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(Ee(n), "startX"),
          endX: n.handleTravellerDragStart.bind(Ee(n), "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      yh(
        e,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var a = n.startX,
                i = n.endX,
                o = this.state.scaleValues,
                c = this.props,
                l = c.gap,
                s = c.data,
                u = s.length - 1,
                f = Math.min(a, i),
                d = Math.max(a, i),
                p = e.getIndexInRange(o, f),
                m = e.getIndexInRange(o, d);
              return {
                startIndex: p - (p % l),
                endIndex: m === u ? u : m - (m % l),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var a = this.props,
                i = a.data,
                o = a.tickFormatter,
                c = a.dataKey,
                l = J(i[n], c, n);
              return W(o) ? o(l, n) : l;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var a = this.state,
                i = a.slideMoveStartX,
                o = a.startX,
                c = a.endX,
                l = this.props,
                s = l.x,
                u = l.width,
                f = l.travellerWidth,
                d = l.startIndex,
                p = l.endIndex,
                m = l.onChange,
                y = n.pageX - i;
              y > 0
                ? (y = Math.min(y, s + u - f - c, s + u - f - o))
                : y < 0 && (y = Math.max(y, s - o, s - c));
              var g = this.getIndex({ startX: o + y, endX: c + y });
              (g.startIndex !== d || g.endIndex !== p) && m && m(g),
                this.setState({
                  startX: o + y,
                  endX: c + y,
                  slideMoveStartX: n.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, a) {
              var i = Qo(a) ? a.changedTouches[0] : a;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: i.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var a = this.state,
                i = a.brushMoveStartX,
                o = a.movingTravellerId,
                c = a.endX,
                l = a.startX,
                s = this.state[o],
                u = this.props,
                f = u.x,
                d = u.width,
                p = u.travellerWidth,
                m = u.onChange,
                y = u.gap,
                g = u.data,
                O = { startX: this.state.startX, endX: this.state.endX },
                b = n.pageX - i;
              b > 0
                ? (b = Math.min(b, f + d - p - s))
                : b < 0 && (b = Math.max(b, f - s)),
                (O[o] = s + b);
              var x = this.getIndex(O),
                v = x.startIndex,
                h = x.endIndex,
                w = function () {
                  var S = g.length - 1;
                  return (
                    (o === "startX" && (c > l ? v % y === 0 : h % y === 0)) ||
                    (c < l && h === S) ||
                    (o === "endX" && (c > l ? h % y === 0 : v % y === 0)) ||
                    (c > l && h === S)
                  );
                };
              this.setState(
                pe(pe({}, o, s + b), "brushMoveStartX", n.pageX),
                function () {
                  m && w() && m(x);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, a) {
              var i = this,
                o = this.state,
                c = o.scaleValues,
                l = o.startX,
                s = o.endX,
                u = this.state[a],
                f = c.indexOf(u);
              if (f !== -1) {
                var d = f + n;
                if (!(d === -1 || d >= c.length)) {
                  var p = c[d];
                  (a === "startX" && p >= s) ||
                    (a === "endX" && p <= l) ||
                    this.setState(pe({}, a, p), function () {
                      i.props.onChange(
                        i.getIndex({
                          startX: i.state.startX,
                          endX: i.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                a = n.x,
                i = n.y,
                o = n.width,
                c = n.height,
                l = n.fill,
                s = n.stroke;
              return A.createElement("rect", {
                stroke: s,
                fill: l,
                x: a,
                y: i,
                width: o,
                height: c,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                a = n.x,
                i = n.y,
                o = n.width,
                c = n.height,
                l = n.data,
                s = n.children,
                u = n.padding,
                f = B.Children.only(s);
              return f
                ? A.cloneElement(f, {
                    x: a,
                    y: i,
                    width: o,
                    height: c,
                    margin: u,
                    compact: !0,
                    data: l,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, a) {
              var i,
                o,
                c = this,
                l = this.props,
                s = l.y,
                u = l.travellerWidth,
                f = l.height,
                d = l.traveller,
                p = l.ariaLabel,
                m = l.data,
                y = l.startIndex,
                g = l.endIndex,
                O = Math.max(n, this.props.x),
                b = aa(
                  aa({}, R(this.props, !1)),
                  {},
                  { x: O, y: s, width: u, height: f },
                ),
                x =
                  p ||
                  "Min value: "
                    .concat(
                      (i = m[y]) === null || i === void 0 ? void 0 : i.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = m[g]) === null || o === void 0 ? void 0 : o.name,
                    );
              return A.createElement(
                H,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": x,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[a],
                  onTouchStart: this.travellerDragStartHandlers[a],
                  onKeyDown: function (h) {
                    ["ArrowLeft", "ArrowRight"].includes(h.key) &&
                      (h.preventDefault(),
                      h.stopPropagation(),
                      c.handleTravellerMoveKeyboard(
                        h.key === "ArrowRight" ? 1 : -1,
                        a,
                      ));
                  },
                  onFocus: function () {
                    c.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    c.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                e.renderTraveller(d, b),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, a) {
              var i = this.props,
                o = i.y,
                c = i.height,
                l = i.stroke,
                s = i.travellerWidth,
                u = Math.min(n, a) + s,
                f = Math.max(Math.abs(a - n) - s, 0);
              return A.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: l,
                fillOpacity: 0.2,
                x: u,
                y: o,
                width: f,
                height: c,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                a = n.startIndex,
                i = n.endIndex,
                o = n.y,
                c = n.height,
                l = n.travellerWidth,
                s = n.stroke,
                u = this.state,
                f = u.startX,
                d = u.endX,
                p = 5,
                m = { pointerEvents: "none", fill: s };
              return A.createElement(
                H,
                { className: "recharts-brush-texts" },
                A.createElement(
                  it,
                  Pn(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(f, d) - p,
                      y: o + c / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(a),
                ),
                A.createElement(
                  it,
                  Pn(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(f, d) + l + p,
                      y: o + c / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(i),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                a = n.data,
                i = n.className,
                o = n.children,
                c = n.x,
                l = n.y,
                s = n.width,
                u = n.height,
                f = n.alwaysShowText,
                d = this.state,
                p = d.startX,
                m = d.endX,
                y = d.isTextActive,
                g = d.isSlideMoving,
                O = d.isTravellerMoving,
                b = d.isTravellerFocused;
              if (
                !a ||
                !a.length ||
                !M(c) ||
                !M(l) ||
                !M(s) ||
                !M(u) ||
                s <= 0 ||
                u <= 0
              )
                return null;
              var x = V("recharts-brush", i),
                v = A.Children.count(o) === 1,
                h = vh("userSelect", "none");
              return A.createElement(
                H,
                {
                  className: x,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: h,
                },
                this.renderBackground(),
                v && this.renderPanorama(),
                this.renderSlide(p, m),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(m, "endX"),
                (y || g || O || b || f) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var a = n.x,
                i = n.y,
                o = n.width,
                c = n.height,
                l = n.stroke,
                s = Math.floor(i + c / 2) - 1;
              return A.createElement(
                A.Fragment,
                null,
                A.createElement("rect", {
                  x: a,
                  y: i,
                  width: o,
                  height: c,
                  fill: l,
                  stroke: "none",
                }),
                A.createElement("line", {
                  x1: a + 1,
                  y1: s,
                  x2: a + o - 1,
                  y2: s,
                  fill: "none",
                  stroke: "#fff",
                }),
                A.createElement("line", {
                  x1: a + 1,
                  y1: s + 2,
                  x2: a + o - 1,
                  y2: s + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, a) {
              var i;
              return (
                A.isValidElement(n)
                  ? (i = A.cloneElement(n, a))
                  : W(n)
                    ? (i = n(a))
                    : (i = e.renderDefaultTraveller(a)),
                i
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, a) {
              var i = n.data,
                o = n.width,
                c = n.x,
                l = n.travellerWidth,
                s = n.updateId,
                u = n.startIndex,
                f = n.endIndex;
              if (i !== a.prevData || s !== a.prevUpdateId)
                return aa(
                  {
                    prevData: i,
                    prevTravellerWidth: l,
                    prevUpdateId: s,
                    prevX: c,
                    prevWidth: o,
                  },
                  i && i.length
                    ? Oh({
                        data: i,
                        width: o,
                        x: c,
                        travellerWidth: l,
                        startIndex: u,
                        endIndex: f,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                a.scale &&
                (o !== a.prevWidth ||
                  c !== a.prevX ||
                  l !== a.prevTravellerWidth)
              ) {
                a.scale.range([c, c + o - l]);
                var d = a.scale.domain().map(function (p) {
                  return a.scale(p);
                });
                return {
                  prevData: i,
                  prevTravellerWidth: l,
                  prevUpdateId: s,
                  prevX: c,
                  prevWidth: o,
                  startX: a.scale(n.startIndex),
                  endX: a.scale(n.endIndex),
                  scaleValues: d,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, a) {
              for (var i = n.length, o = 0, c = i - 1; c - o > 1; ) {
                var l = Math.floor((o + c) / 2);
                n[l] > a ? (c = l) : (o = l);
              }
              return a >= n[c] ? c : o;
            },
          },
        ],
      ),
      e
    );
  })(B.PureComponent);
pe(It, "displayName", "Brush");
pe(It, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var $e = function (e, r) {
    var n = e.alwaysShow,
      a = e.ifOverflow;
    return n && (a = "extendDomain"), a === r;
  },
  Ah = ["x", "y"];
function Ir(t) {
  "@babel/helpers - typeof";
  return (
    (Ir =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ir(t)
  );
}
function za() {
  return (
    (za = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    za.apply(this, arguments)
  );
}
function ec(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Zt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ec(Object(r), !0).forEach(function (n) {
          wh(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ec(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function wh(t, e, r) {
  return (
    (e = Ph(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Ph(t) {
  var e = Sh(t, "string");
  return Ir(e) == "symbol" ? e : String(e);
}
function Sh(t, e) {
  if (Ir(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function jh(t, e) {
  if (t == null) return {};
  var r = Eh(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Eh(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function kh(t, e) {
  var r = t.x,
    n = t.y,
    a = jh(t, Ah),
    i = "".concat(r),
    o = parseInt(i, 10),
    c = "".concat(n),
    l = parseInt(c, 10),
    s = "".concat(e.height || a.height),
    u = parseInt(s, 10),
    f = "".concat(e.width || a.width),
    d = parseInt(f, 10);
  return Zt(
    Zt(Zt(Zt(Zt({}, e), a), o ? { x: o } : {}), l ? { y: l } : {}),
    {},
    { height: u, width: d, name: e.name, radius: e.radius },
  );
}
function tc(t) {
  return A.createElement(
    An,
    za(
      {
        shapeType: "rectangle",
        propTransformer: kh,
        activeClassName: "recharts-active-bar",
      },
      t,
    ),
  );
}
var $h = function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, a) {
      if (typeof e == "number") return e;
      var i = typeof n == "number";
      return i ? e(n, a) : (i || at(), r);
    };
  },
  Th = ["value", "background"],
  Pl;
function _t(t) {
  "@babel/helpers - typeof";
  return (
    (_t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _t(t)
  );
}
function Ih(t, e) {
  if (t == null) return {};
  var r = _h(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function _h(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function jn() {
  return (
    (jn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    jn.apply(this, arguments)
  );
}
function rc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? rc(Object(r), !0).forEach(function (n) {
          Re(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : rc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ch(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, jl(n.key), n);
  }
}
function Dh(t, e, r) {
  return (
    e && nc(t.prototype, e),
    r && nc(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Mh(t, e, r) {
  return (
    (e = En(e)),
    Bh(
      t,
      Sl() ? Reflect.construct(e, r || [], En(t).constructor) : e.apply(t, r),
    )
  );
}
function Bh(t, e) {
  if (e && (_t(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Jt(t);
}
function Sl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Sl = function () {
    return !!t;
  })();
}
function En(t) {
  return (
    (En = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    En(t)
  );
}
function Jt(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Nh(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Wa(t, e);
}
function Wa(t, e) {
  return (
    (Wa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Wa(t, e)
  );
}
function Re(t, e, r) {
  return (
    (e = jl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function jl(t) {
  var e = Lh(t, "string");
  return _t(e) == "symbol" ? e : String(e);
}
function Lh(t, e) {
  if (_t(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (_t(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ct = (function (t) {
  Nh(e, t);
  function e() {
    var r;
    Ch(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return (
      (r = Mh(this, e, [].concat(a))),
      Re(Jt(r), "state", { isAnimationFinished: !1 }),
      Re(Jt(r), "id", Xe("recharts-bar-")),
      Re(Jt(r), "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        r.setState({ isAnimationFinished: !0 }), o && o();
      }),
      Re(Jt(r), "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        r.setState({ isAnimationFinished: !1 }), o && o();
      }),
      r
    );
  }
  return (
    Dh(
      e,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var a = this,
              i = this.props,
              o = i.shape,
              c = i.dataKey,
              l = i.activeIndex,
              s = i.activeBar,
              u = R(this.props, !1);
            return (
              n &&
              n.map(function (f, d) {
                var p = d === l,
                  m = p ? s : o,
                  y = ne(
                    ne(ne({}, u), f),
                    {},
                    {
                      isActive: p,
                      option: m,
                      index: d,
                      dataKey: c,
                      onAnimationStart: a.handleAnimationStart,
                      onAnimationEnd: a.handleAnimationEnd,
                    },
                  );
                return A.createElement(
                  H,
                  jn(
                    { className: "recharts-bar-rectangle" },
                    Fe(a.props, f, d),
                    {
                      key: "rectangle-"
                        .concat(f == null ? void 0 : f.x, "-")
                        .concat(f == null ? void 0 : f.y, "-")
                        .concat(f == null ? void 0 : f.value),
                    },
                  ),
                  A.createElement(tc, y),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              a = this.props,
              i = a.data,
              o = a.layout,
              c = a.isAnimationActive,
              l = a.animationBegin,
              s = a.animationDuration,
              u = a.animationEasing,
              f = a.animationId,
              d = this.state.prevData;
            return A.createElement(
              De,
              {
                begin: l,
                duration: s,
                isActive: c,
                easing: u,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(f),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var m = p.t,
                  y = i.map(function (g, O) {
                    var b = d && d[O];
                    if (b) {
                      var x = ee(b.x, g.x),
                        v = ee(b.y, g.y),
                        h = ee(b.width, g.width),
                        w = ee(b.height, g.height);
                      return ne(
                        ne({}, g),
                        {},
                        { x: x(m), y: v(m), width: h(m), height: w(m) },
                      );
                    }
                    if (o === "horizontal") {
                      var P = ee(0, g.height),
                        S = P(m);
                      return ne(
                        ne({}, g),
                        {},
                        { y: g.y + g.height - S, height: S },
                      );
                    }
                    var E = ee(0, g.width),
                      j = E(m);
                    return ne(ne({}, g), {}, { width: j });
                  });
                return A.createElement(
                  H,
                  null,
                  n.renderRectanglesStatically(y),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              a = n.data,
              i = n.isAnimationActive,
              o = this.state.prevData;
            return i && a && a.length && (!o || !Ke(o, a))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(a);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              a = this.props,
              i = a.data,
              o = a.dataKey,
              c = a.activeIndex,
              l = R(this.props.background, !1);
            return i.map(function (s, u) {
              s.value;
              var f = s.background,
                d = Ih(s, Th);
              if (!f) return null;
              var p = ne(
                ne(
                  ne(ne(ne({}, d), {}, { fill: "#eee" }, f), l),
                  Fe(n.props, s, u),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: u,
                  key: "background-bar-".concat(u),
                  className: "recharts-bar-background-rectangle",
                },
              );
              return A.createElement(
                tc,
                jn({ option: n.props.background, isActive: u === c }, p),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, a) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var i = this.props,
              o = i.data,
              c = i.xAxis,
              l = i.yAxis,
              s = i.layout,
              u = i.children,
              f = fe(u, Wt);
            if (!f) return null;
            var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
              p = function (g, O) {
                var b = Array.isArray(g.value) ? g.value[1] : g.value;
                return { x: g.x, y: g.y, value: b, errorVal: J(g, O) };
              },
              m = { clipPath: n ? "url(#clipPath-".concat(a, ")") : null };
            return A.createElement(
              H,
              m,
              f.map(function (y) {
                return A.cloneElement(y, {
                  key: "error-bar-".concat(a, "-").concat(y.props.dataKey),
                  data: o,
                  xAxis: c,
                  yAxis: l,
                  layout: s,
                  offset: d,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.hide,
              i = n.data,
              o = n.className,
              c = n.xAxis,
              l = n.yAxis,
              s = n.left,
              u = n.top,
              f = n.width,
              d = n.height,
              p = n.isAnimationActive,
              m = n.background,
              y = n.id;
            if (a || !i || !i.length) return null;
            var g = this.state.isAnimationFinished,
              O = V("recharts-bar", o),
              b = c && c.allowDataOverflow,
              x = l && l.allowDataOverflow,
              v = b || x,
              h = z(y) ? this.id : y;
            return A.createElement(
              H,
              { className: O },
              b || x
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(h) },
                      A.createElement("rect", {
                        x: b ? s : s - f / 2,
                        y: x ? u : u - d / 2,
                        width: b ? f : f * 2,
                        height: x ? d : d * 2,
                      }),
                    ),
                  )
                : null,
              A.createElement(
                H,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: v ? "url(#clipPath-".concat(h, ")") : null,
                },
                m ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(v, h),
              (!p || g) && je.renderCallByParent(this.props, i),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, a) {
            return n.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: a.curData,
                }
              : n.data !== a.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
Pl = ct;
Re(ct, "displayName", "Bar");
Re(ct, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Ae.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
Re(ct, "getComposedData", function (t) {
  var e = t.props,
    r = t.item,
    n = t.barPosition,
    a = t.bandSize,
    i = t.xAxis,
    o = t.yAxis,
    c = t.xAxisTicks,
    l = t.yAxisTicks,
    s = t.stackedData,
    u = t.dataStartIndex,
    f = t.displayedData,
    d = t.offset,
    p = Ed(n, r);
  if (!p) return null;
  var m = e.layout,
    y = r.props,
    g = y.dataKey,
    O = y.children,
    b = y.minPointSize,
    x = m === "horizontal" ? o : i,
    v = s ? x.scale.domain() : null,
    h = Dd({ numericAxis: x }),
    w = fe(O, Ln),
    P = f.map(function (S, E) {
      var j, C, k, T, $, D;
      s
        ? (j = kd(s[u + E], v))
        : ((j = J(S, g)), Array.isArray(j) || (j = [h, j]));
      var _ = $h(b, Pl.defaultProps.minPointSize)(j[1], E);
      if (m === "horizontal") {
        var N,
          L = [o.scale(j[0]), o.scale(j[1])],
          X = L[0],
          G = L[1];
        (C = fo({
          axis: i,
          ticks: c,
          bandSize: a,
          offset: p.offset,
          entry: S,
          index: E,
        })),
          (k = (N = G ?? X) !== null && N !== void 0 ? N : void 0),
          (T = p.size);
        var U = X - G;
        if (
          (($ = Number.isNaN(U) ? 0 : U),
          (D = { x: C, y: o.y, width: T, height: o.height }),
          Math.abs(_) > 0 && Math.abs($) < Math.abs(_))
        ) {
          var F = se($ || _) * (Math.abs(_) - Math.abs($));
          (k -= F), ($ += F);
        }
      } else {
        var Y = [i.scale(j[0]), i.scale(j[1])],
          ce = Y[0],
          ye = Y[1];
        if (
          ((C = ce),
          (k = fo({
            axis: o,
            ticks: l,
            bandSize: a,
            offset: p.offset,
            entry: S,
            index: E,
          })),
          (T = ye - ce),
          ($ = p.size),
          (D = { x: i.x, y: k, width: i.width, height: $ }),
          Math.abs(_) > 0 && Math.abs(T) < Math.abs(_))
        ) {
          var Ft = se(T || _) * (Math.abs(_) - Math.abs(T));
          T += Ft;
        }
      }
      return ne(
        ne(
          ne({}, S),
          {},
          {
            x: C,
            y: k,
            width: T,
            height: $,
            value: s ? j : j[1],
            payload: S,
            background: D,
          },
          w && w[E] && w[E].props,
        ),
        {},
        {
          tooltipPayload: [ll(r, S)],
          tooltipPosition: { x: C + T / 2, y: k + $ / 2 },
        },
      );
    });
  return ne({ data: P, layout: m }, d);
});
function _r(t) {
  "@babel/helpers - typeof";
  return (
    (_r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _r(t)
  );
}
function Rh(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ac(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, El(n.key), n);
  }
}
function zh(t, e, r) {
  return (
    e && ac(t.prototype, e),
    r && ac(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function ic(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function we(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ic(Object(r), !0).forEach(function (n) {
          Vn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ic(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Vn(t, e, r) {
  return (
    (e = El(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function El(t) {
  var e = Wh(t, "string");
  return _r(e) == "symbol" ? e : String(e);
}
function Wh(t, e) {
  if (_r(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ui = function (e, r, n, a, i) {
    var o = e.width,
      c = e.height,
      l = e.layout,
      s = e.children,
      u = Object.keys(r),
      f = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: c - n.bottom,
        bottomMirror: c - n.bottom,
      },
      d = !!ve(s, ct);
    return u.reduce(function (p, m) {
      var y = r[m],
        g = y.orientation,
        O = y.domain,
        b = y.padding,
        x = b === void 0 ? {} : b,
        v = y.mirror,
        h = y.reversed,
        w = "".concat(g).concat(v ? "Mirror" : ""),
        P,
        S,
        E,
        j,
        C;
      if (
        y.type === "number" &&
        (y.padding === "gap" || y.padding === "no-gap")
      ) {
        var k = O[1] - O[0],
          T = 1 / 0,
          $ = y.categoricalDomain.sort();
        if (
          ($.forEach(function (ce, ye) {
            ye > 0 && (T = Math.min((ce || 0) - ($[ye - 1] || 0), T));
          }),
          Number.isFinite(T))
        ) {
          var D = T / k,
            _ = y.layout === "vertical" ? n.height : n.width;
          if (
            (y.padding === "gap" && (P = (D * _) / 2), y.padding === "no-gap")
          ) {
            var N = ue(e.barCategoryGap, D * _),
              L = (D * _) / 2;
            P = L - N - ((L - N) / _) * N;
          }
        }
      }
      a === "xAxis"
        ? (S = [
            n.left + (x.left || 0) + (P || 0),
            n.left + n.width - (x.right || 0) - (P || 0),
          ])
        : a === "yAxis"
          ? (S =
              l === "horizontal"
                ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)]
                : [
                    n.top + (x.top || 0) + (P || 0),
                    n.top + n.height - (x.bottom || 0) - (P || 0),
                  ])
          : (S = y.range),
        h && (S = [S[1], S[0]]);
      var X = al(y, i, d),
        G = X.scale,
        U = X.realScaleType;
      G.domain(O).range(S), il(G);
      var F = ol(G, we(we({}, y), {}, { realScaleType: U }));
      a === "xAxis"
        ? ((C = (g === "top" && !v) || (g === "bottom" && v)),
          (E = n.left),
          (j = f[w] - C * y.height))
        : a === "yAxis" &&
          ((C = (g === "left" && !v) || (g === "right" && v)),
          (E = f[w] - C * y.width),
          (j = n.top));
      var Y = we(
        we(we({}, y), F),
        {},
        {
          realScaleType: U,
          x: E,
          y: j,
          scale: G,
          width: a === "xAxis" ? n.width : y.width,
          height: a === "yAxis" ? n.height : y.height,
        },
      );
      return (
        (Y.bandSize = vn(Y, F)),
        !y.hide && a === "xAxis"
          ? (f[w] += (C ? -1 : 1) * Y.height)
          : y.hide || (f[w] += (C ? -1 : 1) * Y.width),
        we(we({}, p), {}, Vn({}, m, Y))
      );
    }, {});
  },
  kl = function (e, r) {
    var n = e.x,
      a = e.y,
      i = r.x,
      o = r.y;
    return {
      x: Math.min(n, i),
      y: Math.min(a, o),
      width: Math.abs(i - n),
      height: Math.abs(o - a),
    };
  },
  Kh = function (e) {
    var r = e.x1,
      n = e.y1,
      a = e.x2,
      i = e.y2;
    return kl({ x: r, y: n }, { x: a, y: i });
  },
  $l = (function () {
    function t(e) {
      Rh(this, t), (this.scale = e);
    }
    return (
      zh(
        t,
        [
          {
            key: "domain",
            get: function () {
              return this.scale.domain;
            },
          },
          {
            key: "range",
            get: function () {
              return this.scale.range;
            },
          },
          {
            key: "rangeMin",
            get: function () {
              return this.range()[0];
            },
          },
          {
            key: "rangeMax",
            get: function () {
              return this.range()[1];
            },
          },
          {
            key: "bandwidth",
            get: function () {
              return this.scale.bandwidth;
            },
          },
          {
            key: "apply",
            value: function (r) {
              var n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                a = n.bandAware,
                i = n.position;
              if (r !== void 0) {
                if (i)
                  switch (i) {
                    case "start":
                      return this.scale(r);
                    case "middle": {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(r) + o;
                    }
                    case "end": {
                      var c = this.bandwidth ? this.bandwidth() : 0;
                      return this.scale(r) + c;
                    }
                    default:
                      return this.scale(r);
                  }
                if (a) {
                  var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(r) + l;
                }
                return this.scale(r);
              }
            },
          },
          {
            key: "isInRange",
            value: function (r) {
              var n = this.range(),
                a = n[0],
                i = n[n.length - 1];
              return a <= i ? r >= a && r <= i : r >= i && r <= a;
            },
          },
        ],
        [
          {
            key: "create",
            value: function (r) {
              return new t(r);
            },
          },
        ],
      ),
      t
    );
  })();
Vn($l, "EPS", 1e-4);
var fi = function (e) {
  var r = Object.keys(e).reduce(function (n, a) {
    return we(we({}, n), {}, Vn({}, a, $l.create(e[a])));
  }, {});
  return we(
    we({}, r),
    {},
    {
      apply: function (a) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = i.bandAware,
          c = i.position;
        return ls(a, function (l, s) {
          return r[s].apply(l, { bandAware: o, position: c });
        });
      },
      isInRange: function (a) {
        return Dc(a, function (i, o) {
          return r[o].isInRange(i);
        });
      },
    },
  );
};
function Fh(t) {
  return ((t % 180) + 180) % 180;
}
var Xh = function (e) {
    var r = e.width,
      n = e.height,
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      i = Fh(a),
      o = (i * Math.PI) / 180,
      c = Math.atan(n / r),
      l = o > c && o < Math.PI - c ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(l);
  },
  Vh = ss(
    function (t) {
      return { x: t.left, y: t.top, width: t.width, height: t.height };
    },
    function (t) {
      return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("");
    },
  ),
  di = B.createContext(void 0),
  pi = B.createContext(void 0),
  Tl = B.createContext(void 0),
  Il = B.createContext({}),
  _l = B.createContext(void 0),
  Cl = B.createContext(0),
  Dl = B.createContext(0),
  oc = function (e) {
    var r = e.state,
      n = r.xAxisMap,
      a = r.yAxisMap,
      i = r.offset,
      o = e.clipPathId,
      c = e.children,
      l = e.width,
      s = e.height,
      u = Vh(i);
    return A.createElement(
      di.Provider,
      { value: n },
      A.createElement(
        pi.Provider,
        { value: a },
        A.createElement(
          Il.Provider,
          { value: i },
          A.createElement(
            Tl.Provider,
            { value: u },
            A.createElement(
              _l.Provider,
              { value: o },
              A.createElement(
                Cl.Provider,
                { value: s },
                A.createElement(Dl.Provider, { value: l }, c),
              ),
            ),
          ),
        ),
      ),
    );
  },
  Gh = function () {
    return B.useContext(_l);
  },
  Ml = function (e) {
    var r = B.useContext(di);
    r == null && at();
    var n = r[e];
    return n == null && at(), n;
  },
  Hh = function () {
    var e = B.useContext(di);
    return Ne(e);
  },
  Uh = function () {
    var e = B.useContext(pi),
      r = us(e, function (n) {
        return Dc(n.domain, Number.isFinite);
      });
    return r || Ne(e);
  },
  Bl = function (e) {
    var r = B.useContext(pi);
    r == null && at();
    var n = r[e];
    return n == null && at(), n;
  },
  Yh = function () {
    var e = B.useContext(Tl);
    return e;
  },
  qh = function () {
    return B.useContext(Il);
  },
  vi = function () {
    return B.useContext(Dl);
  },
  hi = function () {
    return B.useContext(Cl);
  };
function Cr(t) {
  "@babel/helpers - typeof";
  return (
    (Cr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Cr(t)
  );
}
function cc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? cc(Object(r), !0).forEach(function (n) {
          Zh(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : cc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Zh(t, e, r) {
  return (
    (e = Jh(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Jh(t) {
  var e = Qh(t, "string");
  return Cr(e) == "symbol" ? e : String(e);
}
function Qh(t, e) {
  if (Cr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ey(t, e) {
  return ay(t) || ny(t, e) || ry(t, e) || ty();
}
function ty() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ry(t, e) {
  if (t) {
    if (typeof t == "string") return sc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sc(t, e);
  }
}
function sc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ny(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function ay(t) {
  if (Array.isArray(t)) return t;
}
function Ka() {
  return (
    (Ka = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ka.apply(this, arguments)
  );
}
var iy = function (e, r) {
    var n;
    return (
      A.isValidElement(e)
        ? (n = A.cloneElement(e, r))
        : W(e)
          ? (n = e(r))
          : (n = A.createElement(
              "line",
              Ka({}, r, { className: "recharts-reference-line-line" }),
            )),
      n
    );
  },
  oy = function (e, r, n, a, i, o, c, l, s) {
    var u = i.x,
      f = i.y,
      d = i.width,
      p = i.height;
    if (n) {
      var m = s.y,
        y = e.y.apply(m, { position: o });
      if ($e(s, "discard") && !e.y.isInRange(y)) return null;
      var g = [
        { x: u + d, y },
        { x: u, y },
      ];
      return l === "left" ? g.reverse() : g;
    }
    if (r) {
      var O = s.x,
        b = e.x.apply(O, { position: o });
      if ($e(s, "discard") && !e.x.isInRange(b)) return null;
      var x = [
        { x: b, y: f + p },
        { x: b, y: f },
      ];
      return c === "top" ? x.reverse() : x;
    }
    if (a) {
      var v = s.segment,
        h = v.map(function (w) {
          return e.apply(w, { position: o });
        });
      return $e(s, "discard") &&
        fs(h, function (w) {
          return !e.isInRange(w);
        })
        ? null
        : h;
    }
    return null;
  };
function yi(t) {
  var e = t.x,
    r = t.y,
    n = t.segment,
    a = t.xAxisId,
    i = t.yAxisId,
    o = t.shape,
    c = t.className,
    l = t.alwaysShow,
    s = Gh(),
    u = Ml(a),
    f = Bl(i),
    d = Yh();
  if (!s || !d) return null;
  Se(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var p = fi({ x: u.scale, y: f.scale }),
    m = re(e),
    y = re(r),
    g = n && n.length === 2,
    O = oy(p, m, y, g, d, t.position, u.orientation, f.orientation, t);
  if (!O) return null;
  var b = ey(O, 2),
    x = b[0],
    v = x.x,
    h = x.y,
    w = b[1],
    P = w.x,
    S = w.y,
    E = $e(t, "hidden") ? "url(#".concat(s, ")") : void 0,
    j = lc(lc({ clipPath: E }, R(t, !0)), {}, { x1: v, y1: h, x2: P, y2: S });
  return A.createElement(
    H,
    { className: V("recharts-reference-line", c) },
    iy(o, j),
    ae.renderCallByParent(t, Kh({ x1: v, y1: h, x2: P, y2: S })),
  );
}
yi.displayName = "ReferenceLine";
yi.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
};
function Dr(t) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Dr(t)
  );
}
function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Fa.apply(this, arguments)
  );
}
function uc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? uc(Object(r), !0).forEach(function (n) {
          cy(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : uc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function cy(t, e, r) {
  return (
    (e = ly(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function ly(t) {
  var e = sy(t, "string");
  return Dr(e) == "symbol" ? e : String(e);
}
function sy(t, e) {
  if (Dr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var uy = function (e) {
  var r = e.x,
    n = e.y,
    a = e.xAxis,
    i = e.yAxis,
    o = fi({ x: a.scale, y: i.scale }),
    c = o.apply({ x: r, y: n }, { bandAware: !0 });
  return $e(e, "discard") && !o.isInRange(c) ? null : c;
};
function Wr(t) {
  var e = t.x,
    r = t.y,
    n = t.r,
    a = t.alwaysShow,
    i = t.clipPathId,
    o = re(e),
    c = re(r);
  if (
    (Se(
      a === void 0,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
    ),
    !o || !c)
  )
    return null;
  var l = uy(t);
  if (!l) return null;
  var s = l.x,
    u = l.y,
    f = t.shape,
    d = t.className,
    p = $e(t, "hidden") ? "url(#".concat(i, ")") : void 0,
    m = fc(fc({ clipPath: p }, R(t, !0)), {}, { cx: s, cy: u });
  return A.createElement(
    H,
    { className: V("recharts-reference-dot", d) },
    Wr.renderDot(f, m),
    ae.renderCallByParent(t, {
      x: s - n,
      y: u - n,
      width: 2 * n,
      height: 2 * n,
    }),
  );
}
Wr.displayName = "ReferenceDot";
Wr.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
};
Wr.renderDot = function (t, e) {
  var r;
  return (
    A.isValidElement(t)
      ? (r = A.cloneElement(t, e))
      : W(t)
        ? (r = t(e))
        : (r = A.createElement(
            zr,
            Fa({}, e, {
              cx: e.cx,
              cy: e.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
};
function Mr(t) {
  "@babel/helpers - typeof";
  return (
    (Mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Mr(t)
  );
}
function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Xa.apply(this, arguments)
  );
}
function dc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? dc(Object(r), !0).forEach(function (n) {
          fy(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : dc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function fy(t, e, r) {
  return (
    (e = dy(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function dy(t) {
  var e = py(t, "string");
  return Mr(e) == "symbol" ? e : String(e);
}
function py(t, e) {
  if (Mr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var vy = function (e, r, n, a, i) {
  var o = i.x1,
    c = i.x2,
    l = i.y1,
    s = i.y2,
    u = i.xAxis,
    f = i.yAxis;
  if (!u || !f) return null;
  var d = fi({ x: u.scale, y: f.scale }),
    p = {
      x: e ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
      y: n ? d.y.apply(l, { position: "start" }) : d.y.rangeMin,
    },
    m = {
      x: r ? d.x.apply(c, { position: "end" }) : d.x.rangeMax,
      y: a ? d.y.apply(s, { position: "end" }) : d.y.rangeMax,
    };
  return $e(i, "discard") && (!d.isInRange(p) || !d.isInRange(m))
    ? null
    : kl(p, m);
};
function Kr(t) {
  var e = t.x1,
    r = t.x2,
    n = t.y1,
    a = t.y2,
    i = t.className,
    o = t.alwaysShow,
    c = t.clipPathId;
  Se(
    o === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var l = re(e),
    s = re(r),
    u = re(n),
    f = re(a),
    d = t.shape;
  if (!l && !s && !u && !f && !d) return null;
  var p = vy(l, s, u, f, t);
  if (!p && !d) return null;
  var m = $e(t, "hidden") ? "url(#".concat(c, ")") : void 0;
  return A.createElement(
    H,
    { className: V("recharts-reference-area", i) },
    Kr.renderRect(d, pc(pc({ clipPath: m }, R(t, !0)), p)),
    ae.renderCallByParent(t, p),
  );
}
Kr.displayName = "ReferenceArea";
Kr.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
};
Kr.renderRect = function (t, e) {
  var r;
  return (
    A.isValidElement(t)
      ? (r = A.cloneElement(t, e))
      : W(t)
        ? (r = t(e))
        : (r = A.createElement(
            si,
            Xa({}, e, { className: "recharts-reference-area-rect" }),
          )),
    r
  );
};
function Nl(t, e, r) {
  if (e < 1) return [];
  if (e === 1 && r === void 0) return t;
  for (var n = [], a = 0; a < t.length; a += e) n.push(t[a]);
  return n;
}
function hy(t, e, r) {
  var n = { width: t.width + e.width, height: t.height + e.height };
  return Xh(n, r);
}
function yy(t, e, r) {
  var n = r === "width",
    a = t.x,
    i = t.y,
    o = t.width,
    c = t.height;
  return e === 1
    ? { start: n ? a : i, end: n ? a + o : i + c }
    : { start: n ? a + o : i + c, end: n ? a : i };
}
function kn(t, e, r, n, a) {
  if (t * e < t * n || t * e > t * a) return !1;
  var i = r();
  return t * (e - (t * i) / 2 - n) >= 0 && t * (e + (t * i) / 2 - a) <= 0;
}
function my(t, e) {
  return Nl(t, e + 1);
}
function gy(t, e, r, n, a) {
  for (
    var i = (n || []).slice(),
      o = e.start,
      c = e.end,
      l = 0,
      s = 1,
      u = o,
      f = function () {
        var m = n == null ? void 0 : n[l];
        if (m === void 0) return { v: Nl(n, s) };
        var y = l,
          g,
          O = function () {
            return g === void 0 && (g = r(m, y)), g;
          },
          b = m.coordinate,
          x = l === 0 || kn(t, b, O, u, c);
        x || ((l = 0), (u = o), (s += 1)),
          x && ((u = b + t * (O() / 2 + a)), (l += s));
      },
      d;
    s <= i.length;

  )
    if (((d = f()), d)) return d.v;
  return [];
}
function Br(t) {
  "@babel/helpers - typeof";
  return (
    (Br =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Br(t)
  );
}
function vc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? vc(Object(r), !0).forEach(function (n) {
          by(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : vc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function by(t, e, r) {
  return (
    (e = xy(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xy(t) {
  var e = Oy(t, "string");
  return Br(e) == "symbol" ? e : String(e);
}
function Oy(t, e) {
  if (Br(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ay(t, e, r, n, a) {
  for (
    var i = (n || []).slice(),
      o = i.length,
      c = e.start,
      l = e.end,
      s = function (d) {
        var p = i[d],
          m,
          y = function () {
            return m === void 0 && (m = r(p, d)), m;
          };
        if (d === o - 1) {
          var g = t * (p.coordinate + (t * y()) / 2 - l);
          i[d] = p = ie(
            ie({}, p),
            {},
            { tickCoord: g > 0 ? p.coordinate - g * t : p.coordinate },
          );
        } else i[d] = p = ie(ie({}, p), {}, { tickCoord: p.coordinate });
        var O = kn(t, p.tickCoord, y, c, l);
        O &&
          ((l = p.tickCoord - t * (y() / 2 + a)),
          (i[d] = ie(ie({}, p), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    s(u);
  return i;
}
function wy(t, e, r, n, a, i) {
  var o = (n || []).slice(),
    c = o.length,
    l = e.start,
    s = e.end;
  if (i) {
    var u = n[c - 1],
      f = r(u, c - 1),
      d = t * (u.coordinate + (t * f) / 2 - s);
    o[c - 1] = u = ie(
      ie({}, u),
      {},
      { tickCoord: d > 0 ? u.coordinate - d * t : u.coordinate },
    );
    var p = kn(
      t,
      u.tickCoord,
      function () {
        return f;
      },
      l,
      s,
    );
    p &&
      ((s = u.tickCoord - t * (f / 2 + a)),
      (o[c - 1] = ie(ie({}, u), {}, { isShow: !0 })));
  }
  for (
    var m = i ? c - 1 : c,
      y = function (b) {
        var x = o[b],
          v,
          h = function () {
            return v === void 0 && (v = r(x, b)), v;
          };
        if (b === 0) {
          var w = t * (x.coordinate - (t * h()) / 2 - l);
          o[b] = x = ie(
            ie({}, x),
            {},
            { tickCoord: w < 0 ? x.coordinate - w * t : x.coordinate },
          );
        } else o[b] = x = ie(ie({}, x), {}, { tickCoord: x.coordinate });
        var P = kn(t, x.tickCoord, h, l, s);
        P &&
          ((l = x.tickCoord + t * (h() / 2 + a)),
          (o[b] = ie(ie({}, x), {}, { isShow: !0 })));
      },
      g = 0;
    g < m;
    g++
  )
    y(g);
  return o;
}
function mi(t, e, r) {
  var n = t.tick,
    a = t.ticks,
    i = t.viewBox,
    o = t.minTickGap,
    c = t.orientation,
    l = t.interval,
    s = t.tickFormatter,
    u = t.unit,
    f = t.angle;
  if (!a || !a.length || !n) return [];
  if (M(l) || Ae.isSsr) return my(a, typeof l == "number" && M(l) ? l : 0);
  var d = [],
    p = c === "top" || c === "bottom" ? "width" : "height",
    m =
      u && p === "width"
        ? tr(u, { fontSize: e, letterSpacing: r })
        : { width: 0, height: 0 },
    y = function (x, v) {
      var h = W(s) ? s(x.value, v) : x.value;
      return p === "width"
        ? hy(tr(h, { fontSize: e, letterSpacing: r }), m, f)
        : tr(h, { fontSize: e, letterSpacing: r })[p];
    },
    g = a.length >= 2 ? se(a[1].coordinate - a[0].coordinate) : 1,
    O = yy(i, g, p);
  return l === "equidistantPreserveStart"
    ? gy(g, O, y, a, o)
    : (l === "preserveStart" || l === "preserveStartEnd"
        ? (d = wy(g, O, y, a, o, l === "preserveStartEnd"))
        : (d = Ay(g, O, y, a, o)),
      d.filter(function (b) {
        return b.isShow;
      }));
}
var Py = ["viewBox"],
  Sy = ["viewBox"],
  jy = ["ticks"];
function Ct(t) {
  "@babel/helpers - typeof";
  return (
    (Ct =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ct(t)
  );
}
function bt() {
  return (
    (bt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    bt.apply(this, arguments)
  );
}
function hc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? hc(Object(r), !0).forEach(function (n) {
          gi(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : hc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ia(t, e) {
  if (t == null) return {};
  var r = Ey(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Ey(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function ky(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Rl(n.key), n);
  }
}
function $y(t, e, r) {
  return (
    e && yc(t.prototype, e),
    r && yc(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Ty(t, e, r) {
  return (
    (e = $n(e)),
    Iy(
      t,
      Ll() ? Reflect.construct(e, r || [], $n(t).constructor) : e.apply(t, r),
    )
  );
}
function Iy(t, e) {
  if (e && (Ct(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return _y(t);
}
function _y(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Ll() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Ll = function () {
    return !!t;
  })();
}
function $n(t) {
  return (
    ($n = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $n(t)
  );
}
function Cy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Va(t, e);
}
function Va(t, e) {
  return (
    (Va = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Va(t, e)
  );
}
function gi(t, e, r) {
  return (
    (e = Rl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Rl(t) {
  var e = Dy(t, "string");
  return Ct(e) == "symbol" ? e : String(e);
}
function Dy(t, e) {
  if (Ct(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Kt = (function (t) {
  Cy(e, t);
  function e(r) {
    var n;
    return (
      ky(this, e),
      (n = Ty(this, e, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    $y(
      e,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, a) {
            var i = n.viewBox,
              o = ia(n, Py),
              c = this.props,
              l = c.viewBox,
              s = ia(c, Sy);
            return !xt(i, l) || !xt(o, s) || !xt(a, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var a = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              a &&
                this.setState({
                  fontSize: window.getComputedStyle(a).fontSize,
                  letterSpacing: window.getComputedStyle(a).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var a = this.props,
              i = a.x,
              o = a.y,
              c = a.width,
              l = a.height,
              s = a.orientation,
              u = a.tickSize,
              f = a.mirror,
              d = a.tickMargin,
              p,
              m,
              y,
              g,
              O,
              b,
              x = f ? -1 : 1,
              v = n.tickSize || u,
              h = M(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (s) {
              case "top":
                (p = m = n.coordinate),
                  (g = o + +!f * l),
                  (y = g - x * v),
                  (b = y - x * d),
                  (O = h);
                break;
              case "left":
                (y = g = n.coordinate),
                  (m = i + +!f * c),
                  (p = m - x * v),
                  (O = p - x * d),
                  (b = h);
                break;
              case "right":
                (y = g = n.coordinate),
                  (m = i + +f * c),
                  (p = m + x * v),
                  (O = p + x * d),
                  (b = h);
                break;
              default:
                (p = m = n.coordinate),
                  (g = o + +f * l),
                  (y = g + x * v),
                  (b = y + x * d),
                  (O = h);
                break;
            }
            return {
              line: { x1: p, y1: y, x2: m, y2: g },
              tick: { x: O, y: b },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              a = n.orientation,
              i = n.mirror,
              o;
            switch (a) {
              case "left":
                o = i ? "start" : "end";
                break;
              case "right":
                o = i ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              a = n.orientation,
              i = n.mirror,
              o = "end";
            switch (a) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = i ? "start" : "end";
                break;
              default:
                o = i ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              a = n.x,
              i = n.y,
              o = n.width,
              c = n.height,
              l = n.orientation,
              s = n.mirror,
              u = n.axisLine,
              f = le(
                le(le({}, R(this.props, !1)), R(u, !1)),
                {},
                { fill: "none" },
              );
            if (l === "top" || l === "bottom") {
              var d = +((l === "top" && !s) || (l === "bottom" && s));
              f = le(
                le({}, f),
                {},
                { x1: a, y1: i + d * c, x2: a + o, y2: i + d * c },
              );
            } else {
              var p = +((l === "left" && !s) || (l === "right" && s));
              f = le(
                le({}, f),
                {},
                { x1: a + p * o, y1: i, x2: a + p * o, y2: i + c },
              );
            }
            return A.createElement(
              "line",
              bt({}, f, {
                className: V(
                  "recharts-cartesian-axis-line",
                  he(u, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, a, i) {
            var o = this,
              c = this.props,
              l = c.tickLine,
              s = c.stroke,
              u = c.tick,
              f = c.tickFormatter,
              d = c.unit,
              p = mi(le(le({}, this.props), {}, { ticks: n }), a, i),
              m = this.getTickTextAnchor(),
              y = this.getTickVerticalAnchor(),
              g = R(this.props, !1),
              O = R(u, !1),
              b = le(le({}, g), {}, { fill: "none" }, R(l, !1)),
              x = p.map(function (v, h) {
                var w = o.getTickLineCoord(v),
                  P = w.line,
                  S = w.tick,
                  E = le(
                    le(
                      le(
                        le({ textAnchor: m, verticalAnchor: y }, g),
                        {},
                        { stroke: "none", fill: s },
                        O,
                      ),
                      S,
                    ),
                    {},
                    {
                      index: h,
                      payload: v,
                      visibleTicksCount: p.length,
                      tickFormatter: f,
                    },
                  );
                return A.createElement(
                  H,
                  bt(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(v.value, "-")
                        .concat(v.coordinate, "-")
                        .concat(v.tickCoord),
                    },
                    Fe(o.props, v, h),
                  ),
                  l &&
                    A.createElement(
                      "line",
                      bt({}, b, P, {
                        className: V(
                          "recharts-cartesian-axis-tick-line",
                          he(l, "className"),
                        ),
                      }),
                    ),
                  u &&
                    e.renderTickItem(
                      u,
                      E,
                      "".concat(W(f) ? f(v.value, h) : v.value).concat(d || ""),
                    ),
                );
              });
            return A.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              x,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              i = a.axisLine,
              o = a.width,
              c = a.height,
              l = a.ticksGenerator,
              s = a.className,
              u = a.hide;
            if (u) return null;
            var f = this.props,
              d = f.ticks,
              p = ia(f, jy),
              m = d;
            return (
              W(l) && (m = d && d.length > 0 ? l(this.props) : l(p)),
              o <= 0 || c <= 0 || !m || !m.length
                ? null
                : A.createElement(
                    H,
                    {
                      className: V("recharts-cartesian-axis", s),
                      ref: function (g) {
                        n.layerReference = g;
                      },
                    },
                    i && this.renderAxisLine(),
                    this.renderTicks(
                      m,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    ae.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, a, i) {
            var o;
            return (
              A.isValidElement(n)
                ? (o = A.cloneElement(n, a))
                : W(n)
                  ? (o = n(a))
                  : (o = A.createElement(
                      it,
                      bt({}, a, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      i,
                    )),
              o
            );
          },
        },
      ],
    ),
    e
  );
})(B.Component);
gi(Kt, "displayName", "CartesianAxis");
gi(Kt, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var My = ["x1", "y1", "x2", "y2", "key"],
  By = ["offset"];
function ot(t) {
  "@babel/helpers - typeof";
  return (
    (ot =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    ot(t)
  );
}
function mc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function oe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? mc(Object(r), !0).forEach(function (n) {
          Ny(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : mc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ny(t, e, r) {
  return (
    (e = Ly(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Ly(t) {
  var e = Ry(t, "string");
  return ot(e) == "symbol" ? e : String(e);
}
function Ry(t, e) {
  if (ot(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (ot(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function rt() {
  return (
    (rt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    rt.apply(this, arguments)
  );
}
function gc(t, e) {
  if (t == null) return {};
  var r = zy(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function zy(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
var Wy = function (e) {
  var r = e.fill;
  if (!r || r === "none") return null;
  var n = e.fillOpacity,
    a = e.x,
    i = e.y,
    o = e.width,
    c = e.height;
  return A.createElement("rect", {
    x: a,
    y: i,
    width: o,
    height: c,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg",
  });
};
function zl(t, e) {
  var r;
  if (A.isValidElement(t)) r = A.cloneElement(t, e);
  else if (W(t)) r = t(e);
  else {
    var n = e.x1,
      a = e.y1,
      i = e.x2,
      o = e.y2,
      c = e.key,
      l = gc(e, My),
      s = R(l, !1);
    s.offset;
    var u = gc(s, By);
    r = A.createElement(
      "line",
      rt({}, u, { x1: n, y1: a, x2: i, y2: o, fill: "none", key: c }),
    );
  }
  return r;
}
function Ky(t) {
  var e = t.x,
    r = t.width,
    n = t.horizontal,
    a = n === void 0 ? !0 : n,
    i = t.horizontalPoints;
  if (!a || !i || !i.length) return null;
  var o = i.map(function (c, l) {
    var s = oe(
      oe({}, t),
      {},
      { x1: e, y1: c, x2: e + r, y2: c, key: "line-".concat(l), index: l },
    );
    return zl(a, s);
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    o,
  );
}
function Fy(t) {
  var e = t.y,
    r = t.height,
    n = t.vertical,
    a = n === void 0 ? !0 : n,
    i = t.verticalPoints;
  if (!a || !i || !i.length) return null;
  var o = i.map(function (c, l) {
    var s = oe(
      oe({}, t),
      {},
      { x1: c, y1: e, x2: c, y2: e + r, key: "line-".concat(l), index: l },
    );
    return zl(a, s);
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    o,
  );
}
function Xy(t) {
  var e = t.horizontalFill,
    r = t.fillOpacity,
    n = t.x,
    a = t.y,
    i = t.width,
    o = t.height,
    c = t.horizontalPoints,
    l = t.horizontal,
    s = l === void 0 ? !0 : l;
  if (!s || !e || !e.length) return null;
  var u = c
    .map(function (d) {
      return Math.round(d + a - a);
    })
    .sort(function (d, p) {
      return d - p;
    });
  a !== u[0] && u.unshift(0);
  var f = u.map(function (d, p) {
    var m = !u[p + 1],
      y = m ? a + o - d : u[p + 1] - d;
    if (y <= 0) return null;
    var g = p % e.length;
    return A.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: y,
      width: i,
      stroke: "none",
      fill: e[g],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    f,
  );
}
function Vy(t) {
  var e = t.vertical,
    r = e === void 0 ? !0 : e,
    n = t.verticalFill,
    a = t.fillOpacity,
    i = t.x,
    o = t.y,
    c = t.width,
    l = t.height,
    s = t.verticalPoints;
  if (!r || !n || !n.length) return null;
  var u = s
    .map(function (d) {
      return Math.round(d + i - i);
    })
    .sort(function (d, p) {
      return d - p;
    });
  i !== u[0] && u.unshift(0);
  var f = u.map(function (d, p) {
    var m = !u[p + 1],
      y = m ? i + c - d : u[p + 1] - d;
    if (y <= 0) return null;
    var g = p % n.length;
    return A.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: y,
      height: l,
      stroke: "none",
      fill: n[g],
      fillOpacity: a,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    f,
  );
}
var Gy = function (e, r) {
    var n = e.xAxis,
      a = e.width,
      i = e.height,
      o = e.offset;
    return nl(
      mi(
        oe(
          oe(oe({}, Kt.defaultProps), n),
          {},
          { ticks: _e(n, !0), viewBox: { x: 0, y: 0, width: a, height: i } },
        ),
      ),
      o.left,
      o.left + o.width,
      r,
    );
  },
  Hy = function (e, r) {
    var n = e.yAxis,
      a = e.width,
      i = e.height,
      o = e.offset;
    return nl(
      mi(
        oe(
          oe(oe({}, Kt.defaultProps), n),
          {},
          { ticks: _e(n, !0), viewBox: { x: 0, y: 0, width: a, height: i } },
        ),
      ),
      o.top,
      o.top + o.height,
      r,
    );
  },
  pt = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function Uy(t) {
  var e,
    r,
    n,
    a,
    i,
    o,
    c = vi(),
    l = hi(),
    s = qh(),
    u = oe(
      oe({}, t),
      {},
      {
        stroke: (e = t.stroke) !== null && e !== void 0 ? e : pt.stroke,
        fill: (r = t.fill) !== null && r !== void 0 ? r : pt.fill,
        horizontal:
          (n = t.horizontal) !== null && n !== void 0 ? n : pt.horizontal,
        horizontalFill:
          (a = t.horizontalFill) !== null && a !== void 0
            ? a
            : pt.horizontalFill,
        vertical: (i = t.vertical) !== null && i !== void 0 ? i : pt.vertical,
        verticalFill:
          (o = t.verticalFill) !== null && o !== void 0 ? o : pt.verticalFill,
        x: M(t.x) ? t.x : s.left,
        y: M(t.y) ? t.y : s.top,
        width: M(t.width) ? t.width : s.width,
        height: M(t.height) ? t.height : s.height,
      },
    ),
    f = u.x,
    d = u.y,
    p = u.width,
    m = u.height,
    y = u.syncWithTicks,
    g = u.horizontalValues,
    O = u.verticalValues,
    b = Hh(),
    x = Uh();
  if (
    !M(p) ||
    p <= 0 ||
    !M(m) ||
    m <= 0 ||
    !M(f) ||
    f !== +f ||
    !M(d) ||
    d !== +d
  )
    return null;
  var v = u.verticalCoordinatesGenerator || Gy,
    h = u.horizontalCoordinatesGenerator || Hy,
    w = u.horizontalPoints,
    P = u.verticalPoints;
  if ((!w || !w.length) && W(h)) {
    var S = g && g.length,
      E = h(
        {
          yAxis: x ? oe(oe({}, x), {}, { ticks: S ? g : x.ticks }) : void 0,
          width: c,
          height: l,
          offset: s,
        },
        S ? !0 : y,
      );
    Se(
      Array.isArray(E),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        ot(E),
        "]",
      ),
    ),
      Array.isArray(E) && (w = E);
  }
  if ((!P || !P.length) && W(v)) {
    var j = O && O.length,
      C = v(
        {
          xAxis: b ? oe(oe({}, b), {}, { ticks: j ? O : b.ticks }) : void 0,
          width: c,
          height: l,
          offset: s,
        },
        j ? !0 : y,
      );
    Se(
      Array.isArray(C),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        ot(C),
        "]",
      ),
    ),
      Array.isArray(C) && (P = C);
  }
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    A.createElement(Wy, {
      fill: u.fill,
      fillOpacity: u.fillOpacity,
      x: u.x,
      y: u.y,
      width: u.width,
      height: u.height,
    }),
    A.createElement(
      Ky,
      rt({}, u, { offset: s, horizontalPoints: w, xAxis: b, yAxis: x }),
    ),
    A.createElement(
      Fy,
      rt({}, u, { offset: s, verticalPoints: P, xAxis: b, yAxis: x }),
    ),
    A.createElement(Xy, rt({}, u, { horizontalPoints: w })),
    A.createElement(Vy, rt({}, u, { verticalPoints: P })),
  );
}
Uy.displayName = "CartesianGrid";
var Yy = ["type", "layout", "connectNulls", "ref"];
function Dt(t) {
  "@babel/helpers - typeof";
  return (
    (Dt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Dt(t)
  );
}
function qy(t, e) {
  if (t == null) return {};
  var r = Zy(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Zy(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function ir() {
  return (
    (ir = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ir.apply(this, arguments)
  );
}
function bc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function de(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? bc(Object(r), !0).forEach(function (n) {
          Pe(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : bc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function vt(t) {
  return tm(t) || em(t) || Qy(t) || Jy();
}
function Jy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qy(t, e) {
  if (t) {
    if (typeof t == "string") return Ga(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ga(t, e);
  }
}
function em(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function tm(t) {
  if (Array.isArray(t)) return Ga(t);
}
function Ga(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function rm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Kl(n.key), n);
  }
}
function nm(t, e, r) {
  return (
    e && xc(t.prototype, e),
    r && xc(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function am(t, e, r) {
  return (
    (e = Tn(e)),
    im(
      t,
      Wl() ? Reflect.construct(e, r || [], Tn(t).constructor) : e.apply(t, r),
    )
  );
}
function im(t, e) {
  if (e && (Dt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Me(t);
}
function Wl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Wl = function () {
    return !!t;
  })();
}
function Tn(t) {
  return (
    (Tn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Tn(t)
  );
}
function Me(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function om(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Ha(t, e);
}
function Ha(t, e) {
  return (
    (Ha = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Ha(t, e)
  );
}
function Pe(t, e, r) {
  return (
    (e = Kl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Kl(t) {
  var e = cm(t, "string");
  return Dt(e) == "symbol" ? e : String(e);
}
function cm(t, e) {
  if (Dt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Dt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Gn = (function (t) {
  om(e, t);
  function e() {
    var r;
    rm(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return (
      (r = am(this, e, [].concat(a))),
      Pe(Me(r), "state", { isAnimationFinished: !0, totalLength: 0 }),
      Pe(Me(r), "generateSimpleStrokeDasharray", function (o, c) {
        return "".concat(c, "px ").concat(o - c, "px");
      }),
      Pe(Me(r), "getStrokeDasharray", function (o, c, l) {
        var s = l.reduce(function (O, b) {
          return O + b;
        });
        if (!s) return r.generateSimpleStrokeDasharray(c, o);
        for (
          var u = Math.floor(o / s), f = o % s, d = c - o, p = [], m = 0, y = 0;
          m < l.length;
          y += l[m], ++m
        )
          if (y + l[m] > f) {
            p = [].concat(vt(l.slice(0, m)), [f - y]);
            break;
          }
        var g = p.length % 2 === 0 ? [0, d] : [d];
        return []
          .concat(vt(e.repeat(l, u)), vt(p), g)
          .map(function (O) {
            return "".concat(O, "px");
          })
          .join(", ");
      }),
      Pe(Me(r), "id", Xe("recharts-line-")),
      Pe(Me(r), "pathRef", function (o) {
        r.mainCurve = o;
      }),
      Pe(Me(r), "handleAnimationEnd", function () {
        r.setState({ isAnimationFinished: !0 }),
          r.props.onAnimationEnd && r.props.onAnimationEnd();
      }),
      Pe(Me(r), "handleAnimationStart", function () {
        r.setState({ isAnimationFinished: !1 }),
          r.props.onAnimationStart && r.props.onAnimationStart();
      }),
      r
    );
  }
  return (
    nm(
      e,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              n !== this.state.totalLength && this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "getTotalLength",
          value: function () {
            var n = this.mainCurve;
            try {
              return (n && n.getTotalLength && n.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, a) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var i = this.props,
              o = i.points,
              c = i.xAxis,
              l = i.yAxis,
              s = i.layout,
              u = i.children,
              f = fe(u, Wt);
            if (!f) return null;
            var d = function (y, g) {
                return {
                  x: y.x,
                  y: y.y,
                  value: y.value,
                  errorVal: J(y.payload, g),
                };
              },
              p = { clipPath: n ? "url(#clipPath-".concat(a, ")") : null };
            return A.createElement(
              H,
              p,
              f.map(function (m) {
                return A.cloneElement(m, {
                  key: "bar-".concat(m.props.dataKey),
                  data: o,
                  xAxis: c,
                  yAxis: l,
                  layout: s,
                  dataPointFormatter: d,
                });
              }),
            );
          },
        },
        {
          key: "renderDots",
          value: function (n, a, i) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var c = this.props,
              l = c.dot,
              s = c.points,
              u = c.dataKey,
              f = R(this.props, !1),
              d = R(l, !0),
              p = s.map(function (y, g) {
                var O = de(
                  de(de({ key: "dot-".concat(g), r: 3 }, f), d),
                  {},
                  {
                    value: y.value,
                    dataKey: u,
                    cx: y.x,
                    cy: y.y,
                    index: g,
                    payload: y.payload,
                  },
                );
                return e.renderDotItem(l, O);
              }),
              m = {
                clipPath: n
                  ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")")
                  : null,
              };
            return A.createElement(
              H,
              ir({ className: "recharts-line-dots", key: "dots" }, m),
              p,
            );
          },
        },
        {
          key: "renderCurveStatically",
          value: function (n, a, i, o) {
            var c = this.props,
              l = c.type,
              s = c.layout,
              u = c.connectNulls;
            c.ref;
            var f = qy(c, Yy),
              d = de(
                de(
                  de({}, R(f, !0)),
                  {},
                  {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
                    points: n,
                  },
                  o,
                ),
                {},
                { type: l, layout: s, connectNulls: u },
              );
            return A.createElement(We, ir({}, d, { pathRef: this.pathRef }));
          },
        },
        {
          key: "renderCurveWithAnimation",
          value: function (n, a) {
            var i = this,
              o = this.props,
              c = o.points,
              l = o.strokeDasharray,
              s = o.isAnimationActive,
              u = o.animationBegin,
              f = o.animationDuration,
              d = o.animationEasing,
              p = o.animationId,
              m = o.animateNewValues,
              y = o.width,
              g = o.height,
              O = this.state,
              b = O.prevPoints,
              x = O.totalLength;
            return A.createElement(
              De,
              {
                begin: u,
                duration: f,
                isActive: s,
                easing: d,
                from: { t: 0 },
                to: { t: 1 },
                key: "line-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (v) {
                var h = v.t;
                if (b) {
                  var w = b.length / c.length,
                    P = c.map(function (k, T) {
                      var $ = Math.floor(T * w);
                      if (b[$]) {
                        var D = b[$],
                          _ = ee(D.x, k.x),
                          N = ee(D.y, k.y);
                        return de(de({}, k), {}, { x: _(h), y: N(h) });
                      }
                      if (m) {
                        var L = ee(y * 2, k.x),
                          X = ee(g / 2, k.y);
                        return de(de({}, k), {}, { x: L(h), y: X(h) });
                      }
                      return de(de({}, k), {}, { x: k.x, y: k.y });
                    });
                  return i.renderCurveStatically(P, n, a);
                }
                var S = ee(0, x),
                  E = S(h),
                  j;
                if (l) {
                  var C = ""
                    .concat(l)
                    .split(/[,\s]+/gim)
                    .map(function (k) {
                      return parseFloat(k);
                    });
                  j = i.getStrokeDasharray(E, x, C);
                } else j = i.generateSimpleStrokeDasharray(x, E);
                return i.renderCurveStatically(c, n, a, { strokeDasharray: j });
              },
            );
          },
        },
        {
          key: "renderCurve",
          value: function (n, a) {
            var i = this.props,
              o = i.points,
              c = i.isAnimationActive,
              l = this.state,
              s = l.prevPoints,
              u = l.totalLength;
            return c && o && o.length && ((!s && u > 0) || !Ke(s, o))
              ? this.renderCurveWithAnimation(n, a)
              : this.renderCurveStatically(o, n, a);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              a = this.props,
              i = a.hide,
              o = a.dot,
              c = a.points,
              l = a.className,
              s = a.xAxis,
              u = a.yAxis,
              f = a.top,
              d = a.left,
              p = a.width,
              m = a.height,
              y = a.isAnimationActive,
              g = a.id;
            if (i || !c || !c.length) return null;
            var O = this.state.isAnimationFinished,
              b = c.length === 1,
              x = V("recharts-line", l),
              v = s && s.allowDataOverflow,
              h = u && u.allowDataOverflow,
              w = v || h,
              P = z(g) ? this.id : g,
              S =
                (n = R(o, !1)) !== null && n !== void 0
                  ? n
                  : { r: 3, strokeWidth: 2 },
              E = S.r,
              j = E === void 0 ? 3 : E,
              C = S.strokeWidth,
              k = C === void 0 ? 2 : C,
              T = Nc(o) ? o : {},
              $ = T.clipDot,
              D = $ === void 0 ? !0 : $,
              _ = j * 2 + k;
            return A.createElement(
              H,
              { className: x },
              v || h
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(P) },
                      A.createElement("rect", {
                        x: v ? d : d - p / 2,
                        y: h ? f : f - m / 2,
                        width: v ? p : p * 2,
                        height: h ? m : m * 2,
                      }),
                    ),
                    !D &&
                      A.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(P) },
                        A.createElement("rect", {
                          x: d - _ / 2,
                          y: f - _ / 2,
                          width: p + _,
                          height: m + _,
                        }),
                      ),
                  )
                : null,
              !b && this.renderCurve(w, P),
              this.renderErrorBar(w, P),
              (b || o) && this.renderDots(w, D, P),
              (!y || O) && je.renderCallByParent(this.props, c),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, a) {
            return n.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  prevPoints: a.curPoints,
                }
              : n.points !== a.curPoints
                ? { curPoints: n.points }
                : null;
          },
        },
        {
          key: "repeat",
          value: function (n, a) {
            for (
              var i = n.length % 2 !== 0 ? [].concat(vt(n), [0]) : n,
                o = [],
                c = 0;
              c < a;
              ++c
            )
              o = [].concat(vt(o), vt(i));
            return o;
          },
        },
        {
          key: "renderDotItem",
          value: function (n, a) {
            var i;
            if (A.isValidElement(n)) i = A.cloneElement(n, a);
            else if (W(n)) i = n(a);
            else {
              var o = V(
                "recharts-line-dot",
                typeof n != "boolean" ? n.className : "",
              );
              i = A.createElement(zr, ir({}, a, { className: o }));
            }
            return i;
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
Pe(Gn, "displayName", "Line");
Pe(Gn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Ae.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1,
});
Pe(Gn, "getComposedData", function (t) {
  var e = t.props,
    r = t.xAxis,
    n = t.yAxis,
    a = t.xAxisTicks,
    i = t.yAxisTicks,
    o = t.dataKey,
    c = t.bandSize,
    l = t.displayedData,
    s = t.offset,
    u = e.layout,
    f = l.map(function (d, p) {
      var m = J(d, o);
      return u === "horizontal"
        ? {
            x: jt({ axis: r, ticks: a, bandSize: c, entry: d, index: p }),
            y: z(m) ? null : n.scale(m),
            value: m,
            payload: d,
          }
        : {
            x: z(m) ? null : r.scale(m),
            y: jt({ axis: n, ticks: i, bandSize: c, entry: d, index: p }),
            value: m,
            payload: d,
          };
    });
  return de({ points: f, layout: u }, s);
});
var lm = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  Fl;
function Mt(t) {
  "@babel/helpers - typeof";
  return (
    (Mt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Mt(t)
  );
}
function sm(t, e) {
  if (t == null) return {};
  var r = um(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function um(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function nt() {
  return (
    (nt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    nt.apply(this, arguments)
  );
}
function Oc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Oc(Object(r), !0).forEach(function (n) {
          ke(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Oc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function fm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ac(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Vl(n.key), n);
  }
}
function dm(t, e, r) {
  return (
    e && Ac(t.prototype, e),
    r && Ac(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function pm(t, e, r) {
  return (
    (e = In(e)),
    vm(
      t,
      Xl() ? Reflect.construct(e, r || [], In(t).constructor) : e.apply(t, r),
    )
  );
}
function vm(t, e) {
  if (e && (Mt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Qt(t);
}
function Xl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Xl = function () {
    return !!t;
  })();
}
function In(t) {
  return (
    (In = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    In(t)
  );
}
function Qt(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function hm(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Ua(t, e);
}
function Ua(t, e) {
  return (
    (Ua = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Ua(t, e)
  );
}
function ke(t, e, r) {
  return (
    (e = Vl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Vl(t) {
  var e = ym(t, "string");
  return Mt(e) == "symbol" ? e : String(e);
}
function ym(t, e) {
  if (Mt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Mt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ge = (function (t) {
  hm(e, t);
  function e() {
    var r;
    fm(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return (
      (r = pm(this, e, [].concat(a))),
      ke(Qt(r), "state", { isAnimationFinished: !0 }),
      ke(Qt(r), "id", Xe("recharts-area-")),
      ke(Qt(r), "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        r.setState({ isAnimationFinished: !0 }), W(o) && o();
      }),
      ke(Qt(r), "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        r.setState({ isAnimationFinished: !1 }), W(o) && o();
      }),
      r
    );
  }
  return (
    dm(
      e,
      [
        {
          key: "renderDots",
          value: function (n, a, i) {
            var o = this.props.isAnimationActive,
              c = this.state.isAnimationFinished;
            if (o && !c) return null;
            var l = this.props,
              s = l.dot,
              u = l.points,
              f = l.dataKey,
              d = R(this.props, !1),
              p = R(s, !0),
              m = u.map(function (g, O) {
                var b = Be(
                  Be(Be({ key: "dot-".concat(O), r: 3 }, d), p),
                  {},
                  {
                    index: O,
                    cx: g.x,
                    cy: g.y,
                    dataKey: f,
                    value: g.value,
                    payload: g.payload,
                    points: u,
                  },
                );
                return e.renderDotItem(s, b);
              }),
              y = {
                clipPath: n
                  ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")")
                  : null,
              };
            return A.createElement(
              H,
              nt({ className: "recharts-area-dots" }, y),
              m,
            );
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (n) {
            var a = this.props,
              i = a.baseLine,
              o = a.points,
              c = a.strokeWidth,
              l = o[0].x,
              s = o[o.length - 1].x,
              u = n * Math.abs(l - s),
              f = Le(
                o.map(function (d) {
                  return d.y || 0;
                }),
              );
            return (
              M(i) && typeof i == "number"
                ? (f = Math.max(i, f))
                : i &&
                  Array.isArray(i) &&
                  i.length &&
                  (f = Math.max(
                    Le(
                      i.map(function (d) {
                        return d.y || 0;
                      }),
                    ),
                    f,
                  )),
              M(f)
                ? A.createElement("rect", {
                    x: l < s ? l : l - u,
                    y: 0,
                    width: u,
                    height: Math.floor(
                      f + (c ? parseInt("".concat(c), 10) : 1),
                    ),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (n) {
            var a = this.props,
              i = a.baseLine,
              o = a.points,
              c = a.strokeWidth,
              l = o[0].y,
              s = o[o.length - 1].y,
              u = n * Math.abs(l - s),
              f = Le(
                o.map(function (d) {
                  return d.x || 0;
                }),
              );
            return (
              M(i) && typeof i == "number"
                ? (f = Math.max(i, f))
                : i &&
                  Array.isArray(i) &&
                  i.length &&
                  (f = Math.max(
                    Le(
                      i.map(function (d) {
                        return d.x || 0;
                      }),
                    ),
                    f,
                  )),
              M(f)
                ? A.createElement("rect", {
                    x: 0,
                    y: l < s ? l : l - u,
                    width: f + (c ? parseInt("".concat(c), 10) : 1),
                    height: Math.floor(u),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (n) {
            var a = this.props.layout;
            return a === "vertical"
              ? this.renderVerticalRect(n)
              : this.renderHorizontalRect(n);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (n, a, i, o) {
            var c = this.props,
              l = c.layout,
              s = c.type,
              u = c.stroke,
              f = c.connectNulls,
              d = c.isRange;
            c.ref;
            var p = sm(c, lm);
            return A.createElement(
              H,
              { clipPath: i ? "url(#clipPath-".concat(o, ")") : null },
              A.createElement(
                We,
                nt({}, R(p, !0), {
                  points: n,
                  connectNulls: f,
                  type: s,
                  baseLine: a,
                  layout: l,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              u !== "none" &&
                A.createElement(
                  We,
                  nt({}, R(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: s,
                    connectNulls: f,
                    fill: "none",
                    points: n,
                  }),
                ),
              u !== "none" &&
                d &&
                A.createElement(
                  We,
                  nt({}, R(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: s,
                    connectNulls: f,
                    fill: "none",
                    points: a,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (n, a) {
            var i = this,
              o = this.props,
              c = o.points,
              l = o.baseLine,
              s = o.isAnimationActive,
              u = o.animationBegin,
              f = o.animationDuration,
              d = o.animationEasing,
              p = o.animationId,
              m = this.state,
              y = m.prevPoints,
              g = m.prevBaseLine;
            return A.createElement(
              De,
              {
                begin: u,
                duration: f,
                isActive: s,
                easing: d,
                from: { t: 0 },
                to: { t: 1 },
                key: "area-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (O) {
                var b = O.t;
                if (y) {
                  var x = y.length / c.length,
                    v = c.map(function (S, E) {
                      var j = Math.floor(E * x);
                      if (y[j]) {
                        var C = y[j],
                          k = ee(C.x, S.x),
                          T = ee(C.y, S.y);
                        return Be(Be({}, S), {}, { x: k(b), y: T(b) });
                      }
                      return S;
                    }),
                    h;
                  if (M(l) && typeof l == "number") {
                    var w = ee(g, l);
                    h = w(b);
                  } else if (z(l) || Rt(l)) {
                    var P = ee(g, 0);
                    h = P(b);
                  } else
                    h = l.map(function (S, E) {
                      var j = Math.floor(E * x);
                      if (g[j]) {
                        var C = g[j],
                          k = ee(C.x, S.x),
                          T = ee(C.y, S.y);
                        return Be(Be({}, S), {}, { x: k(b), y: T(b) });
                      }
                      return S;
                    });
                  return i.renderAreaStatically(v, h, n, a);
                }
                return A.createElement(
                  H,
                  null,
                  A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "animationClipPath-".concat(a) },
                      i.renderClipRect(b),
                    ),
                  ),
                  A.createElement(
                    H,
                    { clipPath: "url(#animationClipPath-".concat(a, ")") },
                    i.renderAreaStatically(c, l, n, a),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (n, a) {
            var i = this.props,
              o = i.points,
              c = i.baseLine,
              l = i.isAnimationActive,
              s = this.state,
              u = s.prevPoints,
              f = s.prevBaseLine,
              d = s.totalLength;
            return l &&
              o &&
              o.length &&
              ((!u && d > 0) || !Ke(u, o) || !Ke(f, c))
              ? this.renderAreaWithAnimation(n, a)
              : this.renderAreaStatically(o, c, n, a);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              a = this.props,
              i = a.hide,
              o = a.dot,
              c = a.points,
              l = a.className,
              s = a.top,
              u = a.left,
              f = a.xAxis,
              d = a.yAxis,
              p = a.width,
              m = a.height,
              y = a.isAnimationActive,
              g = a.id;
            if (i || !c || !c.length) return null;
            var O = this.state.isAnimationFinished,
              b = c.length === 1,
              x = V("recharts-area", l),
              v = f && f.allowDataOverflow,
              h = d && d.allowDataOverflow,
              w = v || h,
              P = z(g) ? this.id : g,
              S =
                (n = R(o, !1)) !== null && n !== void 0
                  ? n
                  : { r: 3, strokeWidth: 2 },
              E = S.r,
              j = E === void 0 ? 3 : E,
              C = S.strokeWidth,
              k = C === void 0 ? 2 : C,
              T = Nc(o) ? o : {},
              $ = T.clipDot,
              D = $ === void 0 ? !0 : $,
              _ = j * 2 + k;
            return A.createElement(
              H,
              { className: x },
              v || h
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(P) },
                      A.createElement("rect", {
                        x: v ? u : u - p / 2,
                        y: h ? s : s - m / 2,
                        width: v ? p : p * 2,
                        height: h ? m : m * 2,
                      }),
                    ),
                    !D &&
                      A.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(P) },
                        A.createElement("rect", {
                          x: u - _ / 2,
                          y: s - _ / 2,
                          width: p + _,
                          height: m + _,
                        }),
                      ),
                  )
                : null,
              b ? null : this.renderArea(w, P),
              (o || b) && this.renderDots(w, D, P),
              (!y || O) && je.renderCallByParent(this.props, c),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, a) {
            return n.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  curBaseLine: n.baseLine,
                  prevPoints: a.curPoints,
                  prevBaseLine: a.curBaseLine,
                }
              : n.points !== a.curPoints || n.baseLine !== a.curBaseLine
                ? { curPoints: n.points, curBaseLine: n.baseLine }
                : null;
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
Fl = Ge;
ke(Ge, "displayName", "Area");
ke(Ge, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Ae.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
});
ke(Ge, "getBaseValue", function (t, e, r, n) {
  var a = t.layout,
    i = t.baseValue,
    o = e.props.baseValue,
    c = o ?? i;
  if (M(c) && typeof c == "number") return c;
  var l = a === "horizontal" ? n : r,
    s = l.scale.domain();
  if (l.type === "number") {
    var u = Math.max(s[0], s[1]),
      f = Math.min(s[0], s[1]);
    return c === "dataMin"
      ? f
      : c === "dataMax" || u < 0
        ? u
        : Math.max(Math.min(s[0], s[1]), 0);
  }
  return c === "dataMin" ? s[0] : c === "dataMax" ? s[1] : s[0];
});
ke(Ge, "getComposedData", function (t) {
  var e = t.props,
    r = t.item,
    n = t.xAxis,
    a = t.yAxis,
    i = t.xAxisTicks,
    o = t.yAxisTicks,
    c = t.bandSize,
    l = t.dataKey,
    s = t.stackedData,
    u = t.dataStartIndex,
    f = t.displayedData,
    d = t.offset,
    p = e.layout,
    m = s && s.length,
    y = Fl.getBaseValue(e, r, n, a),
    g = p === "horizontal",
    O = !1,
    b = f.map(function (v, h) {
      var w;
      m
        ? (w = s[u + h])
        : ((w = J(v, l)), Array.isArray(w) ? (O = !0) : (w = [y, w]));
      var P = w[1] == null || (m && J(v, l) == null);
      return g
        ? {
            x: jt({ axis: n, ticks: i, bandSize: c, entry: v, index: h }),
            y: P ? null : a.scale(w[1]),
            value: w,
            payload: v,
          }
        : {
            x: P ? null : n.scale(w[1]),
            y: jt({ axis: a, ticks: o, bandSize: c, entry: v, index: h }),
            value: w,
            payload: v,
          };
    }),
    x;
  return (
    m || O
      ? (x = b.map(function (v) {
          var h = Array.isArray(v.value) ? v.value[0] : null;
          return g
            ? { x: v.x, y: h != null && v.y != null ? a.scale(h) : null }
            : { x: h != null ? n.scale(h) : null, y: v.y };
        }))
      : (x = g ? a.scale(y) : n.scale(y)),
    Be({ points: b, baseLine: x, layout: p, isRange: O }, d)
  );
});
ke(Ge, "renderDotItem", function (t, e) {
  var r;
  if (A.isValidElement(t)) r = A.cloneElement(t, e);
  else if (W(t)) r = t(e);
  else {
    var n = V("recharts-area-dot", typeof t != "boolean" ? t.className : "");
    r = A.createElement(zr, nt({}, e, { className: n }));
  }
  return r;
});
var Hn = function () {
  return null;
};
Hn.displayName = "ZAxis";
Hn.defaultProps = {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number",
};
var mm = ["option", "isActive"];
function or() {
  return (
    (or = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    or.apply(this, arguments)
  );
}
function gm(t, e) {
  if (t == null) return {};
  var r = bm(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function bm(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function xm(t) {
  var e = t.option,
    r = t.isActive,
    n = gm(t, mm);
  return typeof e == "string"
    ? A.createElement(
        An,
        or(
          {
            option: A.createElement(Bn, or({ type: e }, n)),
            isActive: r,
            shapeType: "symbols",
          },
          n,
        ),
      )
    : A.createElement(
        An,
        or({ option: e, isActive: r, shapeType: "symbols" }, n),
      );
}
function Bt(t) {
  "@babel/helpers - typeof";
  return (
    (Bt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Bt(t)
  );
}
function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    cr.apply(this, arguments)
  );
}
function wc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? wc(Object(r), !0).forEach(function (n) {
          ze(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : wc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Om(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Hl(n.key), n);
  }
}
function Am(t, e, r) {
  return (
    e && Pc(t.prototype, e),
    r && Pc(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function wm(t, e, r) {
  return (
    (e = _n(e)),
    Pm(
      t,
      Gl() ? Reflect.construct(e, r || [], _n(t).constructor) : e.apply(t, r),
    )
  );
}
function Pm(t, e) {
  if (e && (Bt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return er(t);
}
function Gl() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Gl = function () {
    return !!t;
  })();
}
function _n(t) {
  return (
    (_n = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    _n(t)
  );
}
function er(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Sm(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && Ya(t, e);
}
function Ya(t, e) {
  return (
    (Ya = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Ya(t, e)
  );
}
function ze(t, e, r) {
  return (
    (e = Hl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Hl(t) {
  var e = jm(t, "string");
  return Bt(e) == "symbol" ? e : String(e);
}
function jm(t, e) {
  if (Bt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Bt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Un = (function (t) {
  Sm(e, t);
  function e() {
    var r;
    Om(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return (
      (r = wm(this, e, [].concat(a))),
      ze(er(r), "state", { isAnimationFinished: !1 }),
      ze(er(r), "handleAnimationEnd", function () {
        r.setState({ isAnimationFinished: !0 });
      }),
      ze(er(r), "handleAnimationStart", function () {
        r.setState({ isAnimationFinished: !1 });
      }),
      ze(er(r), "id", Xe("recharts-scatter-")),
      r
    );
  }
  return (
    Am(
      e,
      [
        {
          key: "renderSymbolsStatically",
          value: function (n) {
            var a = this,
              i = this.props,
              o = i.shape,
              c = i.activeShape,
              l = i.activeIndex,
              s = R(this.props, !1);
            return n.map(function (u, f) {
              var d = l === f,
                p = d ? c : o,
                m = be(be({ key: "symbol-".concat(f) }, s), u);
              return A.createElement(
                H,
                cr(
                  { className: "recharts-scatter-symbol" },
                  Fe(a.props, u, f),
                  {
                    key: "symbol-"
                      .concat(u == null ? void 0 : u.cx, "-")
                      .concat(u == null ? void 0 : u.cy, "-")
                      .concat(u == null ? void 0 : u.size, "-")
                      .concat(f),
                    role: "img",
                  },
                ),
                A.createElement(xm, cr({ option: p, isActive: d }, m)),
              );
            });
          },
        },
        {
          key: "renderSymbolsWithAnimation",
          value: function () {
            var n = this,
              a = this.props,
              i = a.points,
              o = a.isAnimationActive,
              c = a.animationBegin,
              l = a.animationDuration,
              s = a.animationEasing,
              u = a.animationId,
              f = this.state.prevPoints;
            return A.createElement(
              De,
              {
                begin: c,
                duration: l,
                isActive: o,
                easing: s,
                from: { t: 0 },
                to: { t: 1 },
                key: "pie-".concat(u),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (d) {
                var p = d.t,
                  m = i.map(function (y, g) {
                    var O = f && f[g];
                    if (O) {
                      var b = ee(O.cx, y.cx),
                        x = ee(O.cy, y.cy),
                        v = ee(O.size, y.size);
                      return be(
                        be({}, y),
                        {},
                        { cx: b(p), cy: x(p), size: v(p) },
                      );
                    }
                    var h = ee(0, y.size);
                    return be(be({}, y), {}, { size: h(p) });
                  });
                return A.createElement(H, null, n.renderSymbolsStatically(m));
              },
            );
          },
        },
        {
          key: "renderSymbols",
          value: function () {
            var n = this.props,
              a = n.points,
              i = n.isAnimationActive,
              o = this.state.prevPoints;
            return i && a && a.length && (!o || !Ke(o, a))
              ? this.renderSymbolsWithAnimation()
              : this.renderSymbolsStatically(a);
          },
        },
        {
          key: "renderErrorBar",
          value: function () {
            var n = this.props.isAnimationActive;
            if (n && !this.state.isAnimationFinished) return null;
            var a = this.props,
              i = a.points,
              o = a.xAxis,
              c = a.yAxis,
              l = a.children,
              s = fe(l, Wt);
            return s
              ? s.map(function (u, f) {
                  var d = u.props,
                    p = d.direction,
                    m = d.dataKey;
                  return A.cloneElement(u, {
                    key: "".concat(p, "-").concat(m, "-").concat(i[f]),
                    data: i,
                    xAxis: o,
                    yAxis: c,
                    layout: p === "x" ? "vertical" : "horizontal",
                    dataPointFormatter: function (g, O) {
                      return {
                        x: g.cx,
                        y: g.cy,
                        value: p === "x" ? +g.node.x : +g.node.y,
                        errorVal: J(g, O),
                      };
                    },
                  });
                })
              : null;
          },
        },
        {
          key: "renderLine",
          value: function () {
            var n = this.props,
              a = n.points,
              i = n.line,
              o = n.lineType,
              c = n.lineJointType,
              l = R(this.props, !1),
              s = R(i, !1),
              u,
              f;
            if (o === "joint")
              u = a.map(function (x) {
                return { x: x.cx, y: x.cy };
              });
            else if (o === "fitting") {
              var d = Fs(a),
                p = d.xmin,
                m = d.xmax,
                y = d.a,
                g = d.b,
                O = function (v) {
                  return y * v + g;
                };
              u = [
                { x: p, y: O(p) },
                { x: m, y: O(m) },
              ];
            }
            var b = be(
              be(be({}, l), {}, { fill: "none", stroke: l && l.fill }, s),
              {},
              { points: u },
            );
            return (
              A.isValidElement(i)
                ? (f = A.cloneElement(i, b))
                : W(i)
                  ? (f = i(b))
                  : (f = A.createElement(We, cr({}, b, { type: c }))),
              A.createElement(
                H,
                {
                  className: "recharts-scatter-line",
                  key: "recharts-scatter-line",
                },
                f,
              )
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.hide,
              i = n.points,
              o = n.line,
              c = n.className,
              l = n.xAxis,
              s = n.yAxis,
              u = n.left,
              f = n.top,
              d = n.width,
              p = n.height,
              m = n.id,
              y = n.isAnimationActive;
            if (a || !i || !i.length) return null;
            var g = this.state.isAnimationFinished,
              O = V("recharts-scatter", c),
              b = l && l.allowDataOverflow,
              x = s && s.allowDataOverflow,
              v = b || x,
              h = z(m) ? this.id : m;
            return A.createElement(
              H,
              {
                className: O,
                clipPath: v ? "url(#clipPath-".concat(h, ")") : null,
              },
              b || x
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(h) },
                      A.createElement("rect", {
                        x: b ? u : u - d / 2,
                        y: x ? f : f - p / 2,
                        width: b ? d : d * 2,
                        height: x ? p : p * 2,
                      }),
                    ),
                  )
                : null,
              o && this.renderLine(),
              this.renderErrorBar(),
              A.createElement(
                H,
                { key: "recharts-scatter-symbols" },
                this.renderSymbols(),
              ),
              (!y || g) && je.renderCallByParent(this.props, i),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, a) {
            return n.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  prevPoints: a.curPoints,
                }
              : n.points !== a.curPoints
                ? { curPoints: n.points }
                : null;
          },
        },
      ],
    ),
    e
  );
})(B.PureComponent);
ze(Un, "displayName", "Scatter");
ze(Un, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Ae.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear",
});
ze(Un, "getComposedData", function (t) {
  var e = t.xAxis,
    r = t.yAxis,
    n = t.zAxis,
    a = t.item,
    i = t.displayedData,
    o = t.xAxisTicks,
    c = t.yAxisTicks,
    l = t.offset,
    s = a.props.tooltipType,
    u = fe(a.props.children, Ln),
    f = z(e.dataKey) ? a.props.dataKey : e.dataKey,
    d = z(r.dataKey) ? a.props.dataKey : r.dataKey,
    p = n && n.dataKey,
    m = n ? n.range : Hn.defaultProps.range,
    y = m && m[0],
    g = e.scale.bandwidth ? e.scale.bandwidth() : 0,
    O = r.scale.bandwidth ? r.scale.bandwidth() : 0,
    b = i.map(function (x, v) {
      var h = J(x, f),
        w = J(x, d),
        P = (!z(p) && J(x, p)) || "-",
        S = [
          {
            name: z(e.dataKey) ? a.props.name : e.name || e.dataKey,
            unit: e.unit || "",
            value: h,
            payload: x,
            dataKey: f,
            type: s,
          },
          {
            name: z(r.dataKey) ? a.props.name : r.name || r.dataKey,
            unit: r.unit || "",
            value: w,
            payload: x,
            dataKey: d,
            type: s,
          },
        ];
      P !== "-" &&
        S.push({
          name: n.name || n.dataKey,
          unit: n.unit || "",
          value: P,
          payload: x,
          dataKey: p,
          type: s,
        });
      var E = jt({
          axis: e,
          ticks: o,
          bandSize: g,
          entry: x,
          index: v,
          dataKey: f,
        }),
        j = jt({
          axis: r,
          ticks: c,
          bandSize: O,
          entry: x,
          index: v,
          dataKey: d,
        }),
        C = P !== "-" ? n.scale(P) : y,
        k = Math.sqrt(Math.max(C, 0) / Math.PI);
      return be(
        be({}, x),
        {},
        {
          cx: E,
          cy: j,
          x: E - k,
          y: j - k,
          xAxis: e,
          yAxis: r,
          zAxis: n,
          width: 2 * k,
          height: 2 * k,
          size: C,
          node: { x: h, y: w, z: P },
          tooltipPayload: S,
          tooltipPosition: { x: E, y: j },
          payload: x,
        },
        u && u[v] && u[v].props,
      );
    });
  return be({ points: b }, l);
});
function qa() {
  return (
    (qa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    qa.apply(this, arguments)
  );
}
var Fr = function (e) {
  var r = e.xAxisId,
    n = vi(),
    a = hi(),
    i = Ml(r);
  return i == null
    ? null
    : A.createElement(
        Kt,
        qa({}, i, {
          className: V(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: n, height: a },
          ticksGenerator: function (c) {
            return _e(c, !0);
          },
        }),
      );
};
Fr.displayName = "XAxis";
Fr.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
};
function Za() {
  return (
    (Za = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Za.apply(this, arguments)
  );
}
var Xr = function (e) {
  var r = e.yAxisId,
    n = vi(),
    a = hi(),
    i = Bl(r);
  return i == null
    ? null
    : A.createElement(
        Kt,
        Za({}, i, {
          className: V(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: n, height: a },
          ticksGenerator: function (c) {
            return _e(c, !0);
          },
        }),
      );
};
Xr.displayName = "YAxis";
Xr.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
};
function Sc(t) {
  return Tm(t) || $m(t) || km(t) || Em();
}
function Em() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function km(t, e) {
  if (t) {
    if (typeof t == "string") return Ja(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ja(t, e);
  }
}
function $m(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function Tm(t) {
  if (Array.isArray(t)) return Ja(t);
}
function Ja(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Qa = function (e, r, n, a, i) {
    var o = fe(e, yi),
      c = fe(e, Wr),
      l = [].concat(Sc(o), Sc(c)),
      s = fe(e, Kr),
      u = "".concat(a, "Id"),
      f = a[0],
      d = r;
    if (
      (l.length &&
        (d = l.reduce(function (y, g) {
          if (
            g.props[u] === n &&
            $e(g.props, "extendDomain") &&
            M(g.props[f])
          ) {
            var O = g.props[f];
            return [Math.min(y[0], O), Math.max(y[1], O)];
          }
          return y;
        }, d)),
      s.length)
    ) {
      var p = "".concat(f, "1"),
        m = "".concat(f, "2");
      d = s.reduce(function (y, g) {
        if (
          g.props[u] === n &&
          $e(g.props, "extendDomain") &&
          M(g.props[p]) &&
          M(g.props[m])
        ) {
          var O = g.props[p],
            b = g.props[m];
          return [Math.min(y[0], O, b), Math.max(y[1], O, b)];
        }
        return y;
      }, d);
    }
    return (
      i &&
        i.length &&
        (d = i.reduce(function (y, g) {
          return M(g) ? [Math.min(y[0], g), Math.max(y[1], g)] : y;
        }, d)),
      d
    );
  },
  oa = new zs(),
  ca = "recharts.syncMouseEvents";
function Nr(t) {
  "@babel/helpers - typeof";
  return (
    (Nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Nr(t)
  );
}
function Im(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _m(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Ul(n.key), n);
  }
}
function Cm(t, e, r) {
  return (
    e && _m(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function la(t, e, r) {
  return (
    (e = Ul(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Ul(t) {
  var e = Dm(t, "string");
  return Nr(e) == "symbol" ? e : String(e);
}
function Dm(t, e) {
  if (Nr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Mm = (function () {
  function t() {
    Im(this, t),
      la(this, "activeIndex", 0),
      la(this, "coordinateList", []),
      la(this, "layout", "horizontal");
  }
  return (
    Cm(t, [
      {
        key: "setDetails",
        value: function (r) {
          var n,
            a = r.coordinateList,
            i = a === void 0 ? null : a,
            o = r.container,
            c = o === void 0 ? null : o,
            l = r.layout,
            s = l === void 0 ? null : l,
            u = r.offset,
            f = u === void 0 ? null : u,
            d = r.mouseHandlerCallback,
            p = d === void 0 ? null : d;
          (this.coordinateList =
            (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : []),
            (this.container = c ?? this.container),
            (this.layout = s ?? this.layout),
            (this.offset = f ?? this.offset),
            (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
            (this.activeIndex = Math.min(
              Math.max(this.activeIndex, 0),
              this.coordinateList.length - 1,
            ));
        },
      },
      {
        key: "focus",
        value: function () {
          this.spoofMouse();
        },
      },
      {
        key: "keyboardEvent",
        value: function (r) {
          if (this.coordinateList.length !== 0)
            switch (r.key) {
              case "ArrowRight": {
                if (this.layout !== "horizontal") return;
                (this.activeIndex = Math.min(
                  this.activeIndex + 1,
                  this.coordinateList.length - 1,
                )),
                  this.spoofMouse();
                break;
              }
              case "ArrowLeft": {
                if (this.layout !== "horizontal") return;
                (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                  this.spoofMouse();
                break;
              }
            }
        },
      },
      {
        key: "setIndex",
        value: function (r) {
          this.activeIndex = r;
        },
      },
      {
        key: "spoofMouse",
        value: function () {
          var r, n;
          if (
            this.layout === "horizontal" &&
            this.coordinateList.length !== 0
          ) {
            var a = this.container.getBoundingClientRect(),
              i = a.x,
              o = a.y,
              c = a.height,
              l = this.coordinateList[this.activeIndex].coordinate,
              s =
                ((r = window) === null || r === void 0 ? void 0 : r.scrollX) ||
                0,
              u =
                ((n = window) === null || n === void 0 ? void 0 : n.scrollY) ||
                0,
              f = i + l + s,
              d = o + this.offset.top + c / 2 + u;
            this.mouseHandlerCallback({ pageX: f, pageY: d });
          }
        },
      },
    ]),
    t
  );
})();
function Bm(t, e, r) {
  if (r === "number" && e === !0 && Array.isArray(t)) {
    var n = t == null ? void 0 : t[0],
      a = t == null ? void 0 : t[1];
    if (n && a && M(n) && M(a)) return !0;
  }
  return !1;
}
function Nm(t, e, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: t === "horizontal" ? e.x - a : r.left + 0.5,
    y: t === "horizontal" ? r.top + 0.5 : e.y - a,
    width: t === "horizontal" ? n : r.width - 1,
    height: t === "horizontal" ? r.height - 1 : n,
  };
}
function Yl(t) {
  var e = t.cx,
    r = t.cy,
    n = t.radius,
    a = t.startAngle,
    i = t.endAngle,
    o = Z(e, r, n, a),
    c = Z(e, r, n, i);
  return {
    points: [o, c],
    cx: e,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i,
  };
}
function Lm(t, e, r) {
  var n, a, i, o;
  if (t === "horizontal")
    (n = e.x), (i = n), (a = r.top), (o = r.top + r.height);
  else if (t === "vertical")
    (a = e.y), (o = a), (n = r.left), (i = r.left + r.width);
  else if (e.cx != null && e.cy != null)
    if (t === "centric") {
      var c = e.cx,
        l = e.cy,
        s = e.innerRadius,
        u = e.outerRadius,
        f = e.angle,
        d = Z(c, l, s, f),
        p = Z(c, l, u, f);
      (n = d.x), (a = d.y), (i = p.x), (o = p.y);
    } else return Yl(e);
  return [
    { x: n, y: a },
    { x: i, y: o },
  ];
}
function Lr(t) {
  "@babel/helpers - typeof";
  return (
    (Lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Lr(t)
  );
}
function jc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function en(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? jc(Object(r), !0).forEach(function (n) {
          Rm(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : jc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Rm(t, e, r) {
  return (
    (e = zm(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function zm(t) {
  var e = Wm(t, "string");
  return Lr(e) == "symbol" ? e : String(e);
}
function Wm(t, e) {
  if (Lr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Km(t) {
  var e = t.element,
    r = t.tooltipEventType,
    n = t.isActive,
    a = t.activeCoordinate,
    i = t.activePayload,
    o = t.offset,
    c = t.activeTooltipIndex,
    l = t.tooltipAxisBandSize,
    s = t.layout,
    u = t.chartName;
  if (
    !e ||
    !e.props.cursor ||
    !n ||
    !a ||
    (u !== "ScatterChart" && r !== "axis")
  )
    return null;
  var f,
    d = We;
  if (u === "ScatterChart") (f = a), (d = vv);
  else if (u === "BarChart") (f = Nm(s, a, o, l)), (d = si);
  else if (s === "radial") {
    var p = Yl(a),
      m = p.cx,
      y = p.cy,
      g = p.radius,
      O = p.startAngle,
      b = p.endAngle;
    (f = {
      cx: m,
      cy: y,
      startAngle: O,
      endAngle: b,
      innerRadius: g,
      outerRadius: g,
    }),
      (d = vl);
  } else (f = { points: Lm(s, a, o) }), (d = We);
  var x = en(
    en(
      en(en({ stroke: "#ccc", pointerEvents: "none" }, o), f),
      R(e.props.cursor, !1),
    ),
    {},
    {
      payload: i,
      payloadIndex: c,
      className: V("recharts-tooltip-cursor", e.props.cursor.className),
    },
  );
  return B.isValidElement(e.props.cursor)
    ? B.cloneElement(e.props.cursor, x)
    : B.createElement(d, x);
}
var Fm = ["item"],
  Xm = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function Nt(t) {
  "@babel/helpers - typeof";
  return (
    (Nt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Nt(t)
  );
}
function lr() {
  return (
    (lr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    lr.apply(this, arguments)
  );
}
function Ec(t, e) {
  return Hm(t) || Gm(t, e) || Zl(t, e) || Vm();
}
function Vm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gm(t, e) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      c = [],
      l = !0,
      s = !1;
    try {
      if (((i = (r = r.call(t)).next), e !== 0))
        for (
          ;
          !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
          l = !0
        );
    } catch (u) {
      (s = !0), (a = u);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw a;
      }
    }
    return c;
  }
}
function Hm(t) {
  if (Array.isArray(t)) return t;
}
function kc(t, e) {
  if (t == null) return {};
  var r = Um(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function Um(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Ym(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qm(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Jl(n.key), n);
  }
}
function Zm(t, e, r) {
  return (
    e && qm(t.prototype, e),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Jm(t, e, r) {
  return (
    (e = Cn(e)),
    Qm(
      t,
      ql() ? Reflect.construct(e, r || [], Cn(t).constructor) : e.apply(t, r),
    )
  );
}
function Qm(t, e) {
  if (e && (Nt(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return q(t);
}
function ql() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ql = function () {
    return !!t;
  })();
}
function Cn(t) {
  return (
    (Cn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Cn(t)
  );
}
function q(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function eg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && ei(t, e);
}
function ei(t, e) {
  return (
    (ei = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    ei(t, e)
  );
}
function Lt(t) {
  return ng(t) || rg(t) || Zl(t) || tg();
}
function tg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zl(t, e) {
  if (t) {
    if (typeof t == "string") return ti(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ti(t, e);
  }
}
function rg(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function ng(t) {
  if (Array.isArray(t)) return ti(t);
}
function ti(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function $c(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $c(Object(r), !0).forEach(function (n) {
          K(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : $c(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function K(t, e, r) {
  return (
    (e = Jl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Jl(t) {
  var e = ag(t, "string");
  return Nt(e) == "symbol" ? e : String(e);
}
function ag(t, e) {
  if (Nt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Nt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ig = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  og = { width: "100%", height: "100%" },
  Ql = { x: 0, y: 0 };
function tn(t) {
  return t;
}
var cg = function (e, r) {
    return r === "horizontal"
      ? e.x
      : r === "vertical"
        ? e.y
        : r === "centric"
          ? e.angle
          : e.radius;
  },
  lg = function (e, r, n, a) {
    var i = r.find(function (u) {
      return u && u.index === n;
    });
    if (i) {
      if (e === "horizontal") return { x: i.coordinate, y: a.y };
      if (e === "vertical") return { x: a.x, y: i.coordinate };
      if (e === "centric") {
        var o = i.coordinate,
          c = a.radius;
        return I(I(I({}, a), Z(a.cx, a.cy, c, o)), {}, { angle: o, radius: c });
      }
      var l = i.coordinate,
        s = a.angle;
      return I(I(I({}, a), Z(a.cx, a.cy, l, s)), {}, { angle: s, radius: l });
    }
    return Ql;
  },
  Yn = function (e, r) {
    var n = r.graphicalItems,
      a = r.dataStartIndex,
      i = r.dataEndIndex,
      o = (n ?? []).reduce(function (c, l) {
        var s = l.props.data;
        return s && s.length ? [].concat(Lt(c), Lt(s)) : c;
      }, []);
    return o.length > 0
      ? o
      : e && e.length && M(a) && M(i)
        ? e.slice(a, i + 1)
        : [];
  };
function es(t) {
  return t === "number" ? [0, "auto"] : void 0;
}
var ri = function (e, r, n, a) {
    var i = e.graphicalItems,
      o = e.tooltipAxis,
      c = Yn(r, e);
    return n < 0 || !i || !i.length || n >= c.length
      ? null
      : i.reduce(function (l, s) {
          var u,
            f = (u = s.props.data) !== null && u !== void 0 ? u : r;
          f &&
            e.dataStartIndex + e.dataEndIndex !== 0 &&
            (f = f.slice(e.dataStartIndex, e.dataEndIndex + 1));
          var d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = f === void 0 ? c : f;
            d = on(p, o.dataKey, a);
          } else d = (f && f[n]) || c[n];
          return d ? [].concat(Lt(l), [ll(s, d)]) : l;
        }, []);
  },
  Tc = function (e, r, n, a) {
    var i = a || { x: e.chartX, y: e.chartY },
      o = cg(i, n),
      c = e.orderedTooltipTicks,
      l = e.tooltipAxis,
      s = e.tooltipTicks,
      u = Od(o, c, s, l);
    if (u >= 0 && s) {
      var f = s[u] && s[u].value,
        d = ri(e, r, u, f),
        p = lg(n, c, u, i);
      return {
        activeTooltipIndex: u,
        activeLabel: f,
        activePayload: d,
        activeCoordinate: p,
      };
    }
    return null;
  },
  sg = function (e, r) {
    var n = r.axes,
      a = r.graphicalItems,
      i = r.axisType,
      o = r.axisIdKey,
      c = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      u = e.layout,
      f = e.children,
      d = e.stackOffset,
      p = rl(u, i);
    return n.reduce(function (m, y) {
      var g,
        O = y.props,
        b = O.type,
        x = O.dataKey,
        v = O.allowDataOverflow,
        h = O.allowDuplicatedCategory,
        w = O.scale,
        P = O.ticks,
        S = O.includeHidden,
        E = y.props[o];
      if (m[E]) return m;
      var j = Yn(e.data, {
          graphicalItems: a.filter(function (F) {
            return F.props[o] === E;
          }),
          dataStartIndex: l,
          dataEndIndex: s,
        }),
        C = j.length,
        k,
        T,
        $;
      Bm(y.props.domain, v, b) &&
        ((k = ka(y.props.domain, null, v)),
        p && (b === "number" || w !== "auto") && ($ = rr(j, x, "category")));
      var D = es(b);
      if (!k || k.length === 0) {
        var _,
          N = (_ = y.props.domain) !== null && _ !== void 0 ? _ : D;
        if (x) {
          if (((k = rr(j, x, b)), b === "category" && p)) {
            var L = Ks(k);
            h && L
              ? ((T = k), (k = an(0, C)))
              : h ||
                (k = ho(N, k, y).reduce(function (F, Y) {
                  return F.indexOf(Y) >= 0 ? F : [].concat(Lt(F), [Y]);
                }, []));
          } else if (b === "category")
            h
              ? (k = k.filter(function (F) {
                  return F !== "" && !z(F);
                }))
              : (k = ho(N, k, y).reduce(function (F, Y) {
                  return F.indexOf(Y) >= 0 || Y === "" || z(Y)
                    ? F
                    : [].concat(Lt(F), [Y]);
                }, []));
          else if (b === "number") {
            var X = jd(
              j,
              a.filter(function (F) {
                return F.props[o] === E && (S || !F.props.hide);
              }),
              x,
              i,
              u,
            );
            X && (k = X);
          }
          p && (b === "number" || w !== "auto") && ($ = rr(j, x, "category"));
        } else
          p
            ? (k = an(0, C))
            : c && c[E] && c[E].hasStack && b === "number"
              ? (k = d === "expand" ? [0, 1] : cl(c[E].stackGroups, l, s))
              : (k = tl(
                  j,
                  a.filter(function (F) {
                    return F.props[o] === E && (S || !F.props.hide);
                  }),
                  b,
                  u,
                  !0,
                ));
        if (b === "number") (k = Qa(f, k, E, i, P)), N && (k = ka(N, k, v));
        else if (b === "category" && N) {
          var G = N,
            U = k.every(function (F) {
              return G.indexOf(F) >= 0;
            });
          U && (k = G);
        }
      }
      return I(
        I({}, m),
        {},
        K(
          {},
          E,
          I(
            I({}, y.props),
            {},
            {
              axisType: i,
              domain: k,
              categoricalDomain: $,
              duplicateDomain: T,
              originalDomain:
                (g = y.props.domain) !== null && g !== void 0 ? g : D,
              isCategorical: p,
              layout: u,
            },
          ),
        ),
      );
    }, {});
  },
  ug = function (e, r) {
    var n = r.graphicalItems,
      a = r.Axis,
      i = r.axisType,
      o = r.axisIdKey,
      c = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      u = e.layout,
      f = e.children,
      d = Yn(e.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: s }),
      p = d.length,
      m = rl(u, i),
      y = -1;
    return n.reduce(function (g, O) {
      var b = O.props[o],
        x = es("number");
      if (!g[b]) {
        y++;
        var v;
        return (
          m
            ? (v = an(0, p))
            : c && c[b] && c[b].hasStack
              ? ((v = cl(c[b].stackGroups, l, s)), (v = Qa(f, v, b, i)))
              : ((v = ka(
                  x,
                  tl(
                    d,
                    n.filter(function (h) {
                      return h.props[o] === b && !h.props.hide;
                    }),
                    "number",
                    u,
                  ),
                  a.defaultProps.allowDataOverflow,
                )),
                (v = Qa(f, v, b, i))),
          I(
            I({}, g),
            {},
            K(
              {},
              b,
              I(
                I({ axisType: i }, a.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: he(ig, "".concat(i, ".").concat(y % 2), null),
                  domain: v,
                  originalDomain: x,
                  isCategorical: m,
                  layout: u,
                },
              ),
            ),
          )
        );
      }
      return g;
    }, {});
  },
  fg = function (e, r) {
    var n = r.axisType,
      a = n === void 0 ? "xAxis" : n,
      i = r.AxisComp,
      o = r.graphicalItems,
      c = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      u = e.children,
      f = "".concat(a, "Id"),
      d = fe(u, i),
      p = {};
    return (
      d && d.length
        ? (p = sg(e, {
            axes: d,
            graphicalItems: o,
            axisType: a,
            axisIdKey: f,
            stackGroups: c,
            dataStartIndex: l,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (p = ug(e, {
            Axis: i,
            graphicalItems: o,
            axisType: a,
            axisIdKey: f,
            stackGroups: c,
            dataStartIndex: l,
            dataEndIndex: s,
          })),
      p
    );
  },
  dg = function (e) {
    var r = Ne(e),
      n = _e(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: ni(n, function (a) {
        return a.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: vn(r, n),
    };
  },
  Ic = function (e) {
    var r = e.children,
      n = e.defaultShowTooltip,
      a = ve(r, It),
      i = 0,
      o = 0;
    return (
      e.data && e.data.length !== 0 && (o = e.data.length - 1),
      a &&
        a.props &&
        (a.props.startIndex >= 0 && (i = a.props.startIndex),
        a.props.endIndex >= 0 && (o = a.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: i,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  pg = function (e) {
    return !e || !e.length
      ? !1
      : e.some(function (r) {
          var n = Ce(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  _c = function (e) {
    return e === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : e === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : e === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  vg = function (e, r) {
    var n = e.props,
      a = e.graphicalItems,
      i = e.xAxisMap,
      o = i === void 0 ? {} : i,
      c = e.yAxisMap,
      l = c === void 0 ? {} : c,
      s = n.width,
      u = n.height,
      f = n.children,
      d = n.margin || {},
      p = ve(f, It),
      m = ve(f, fr),
      y = Object.keys(l).reduce(
        function (h, w) {
          var P = l[w],
            S = P.orientation;
          return !P.mirror && !P.hide
            ? I(I({}, h), {}, K({}, S, h[S] + P.width))
            : h;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      g = Object.keys(o).reduce(
        function (h, w) {
          var P = o[w],
            S = P.orientation;
          return !P.mirror && !P.hide
            ? I(I({}, h), {}, K({}, S, he(h, "".concat(S)) + P.height))
            : h;
        },
        { top: d.top || 0, bottom: d.bottom || 0 },
      ),
      O = I(I({}, g), y),
      b = O.bottom;
    p && (O.bottom += p.props.height || It.defaultProps.height),
      m && r && (O = Pd(O, a, n, r));
    var x = s - O.left - O.right,
      v = u - O.top - O.bottom;
    return I(
      I({ brushBottom: b }, O),
      {},
      { width: Math.max(x, 0), height: Math.max(v, 0) },
    );
  },
  hg = function (e, r) {
    if (r === "xAxis") return e[r].width;
    if (r === "yAxis") return e[r].height;
  },
  qn = function (e) {
    var r,
      n = e.chartName,
      a = e.GraphicalChild,
      i = e.defaultTooltipEventType,
      o = i === void 0 ? "axis" : i,
      c = e.validateTooltipEventTypes,
      l = c === void 0 ? ["axis"] : c,
      s = e.axisComponents,
      u = e.legendContent,
      f = e.formatAxisMap,
      d = e.defaultProps,
      p = function (g, O) {
        var b = O.graphicalItems,
          x = O.stackGroups,
          v = O.offset,
          h = O.updateId,
          w = O.dataStartIndex,
          P = O.dataEndIndex,
          S = g.barSize,
          E = g.layout,
          j = g.barGap,
          C = g.barCategoryGap,
          k = g.maxBarSize,
          T = _c(E),
          $ = T.numericAxisName,
          D = T.cateAxisName,
          _ = pg(b),
          N = [];
        return (
          b.forEach(function (L, X) {
            var G = Yn(g.data, {
                graphicalItems: [L],
                dataStartIndex: w,
                dataEndIndex: P,
              }),
              U = L.props,
              F = U.dataKey,
              Y = U.maxBarSize,
              ce = L.props["".concat($, "Id")],
              ye = L.props["".concat(D, "Id")],
              Ft = {},
              me = s.reduce(function (Ye, qe) {
                var Zn = O["".concat(qe.axisType, "Map")],
                  bi = L.props["".concat(qe.axisType, "Id")];
                (Zn && Zn[bi]) || qe.axisType === "zAxis" || at();
                var xi = Zn[bi];
                return I(
                  I({}, Ye),
                  {},
                  K(
                    K({}, qe.axisType, xi),
                    "".concat(qe.axisType, "Ticks"),
                    _e(xi),
                  ),
                );
              }, Ft),
              He = me[D],
              Vr = me["".concat(D, "Ticks")],
              lt = x && x[ce] && x[ce].hasStack && Md(L, x[ce].stackGroups),
              Xt = Ce(L.type).indexOf("Bar") >= 0,
              Ue = vn(He, Vr),
              st = [],
              Vt =
                _ && Ad({ barSize: S, stackGroups: x, totalSize: hg(me, D) });
            if (Xt) {
              var Gt,
                ut,
                Ht = z(Y) ? k : Y,
                ft =
                  (Gt =
                    (ut = vn(He, Vr, !0)) !== null && ut !== void 0
                      ? ut
                      : Ht) !== null && Gt !== void 0
                    ? Gt
                    : 0;
              (st = wd({
                barGap: j,
                barCategoryGap: C,
                bandSize: ft !== Ue ? ft : Ue,
                sizeList: Vt[ye],
                maxBarSize: Ht,
              })),
                ft !== Ue &&
                  (st = st.map(function (Ye) {
                    return I(
                      I({}, Ye),
                      {},
                      {
                        position: I(
                          I({}, Ye.position),
                          {},
                          { offset: Ye.position.offset - ft / 2 },
                        ),
                      },
                    );
                  }));
            }
            var Gr = L && L.type && L.type.getComposedData;
            Gr &&
              N.push({
                props: I(
                  I(
                    {},
                    Gr(
                      I(
                        I({}, me),
                        {},
                        {
                          displayedData: G,
                          props: g,
                          dataKey: F,
                          item: L,
                          bandSize: Ue,
                          barPosition: st,
                          offset: v,
                          stackedData: lt,
                          layout: E,
                          dataStartIndex: w,
                          dataEndIndex: P,
                        },
                      ),
                    ),
                  ),
                  {},
                  K(
                    K(
                      K({ key: L.key || "item-".concat(X) }, $, me[$]),
                      D,
                      me[D],
                    ),
                    "animationId",
                    h,
                  ),
                ),
                childIndex: eu(L, g.children),
                item: L,
              });
          }),
          N
        );
      },
      m = function (g, O) {
        var b = g.props,
          x = g.dataStartIndex,
          v = g.dataEndIndex,
          h = g.updateId;
        if (!$i({ props: b })) return null;
        var w = b.children,
          P = b.layout,
          S = b.stackOffset,
          E = b.data,
          j = b.reverseStackOrder,
          C = _c(P),
          k = C.numericAxisName,
          T = C.cateAxisName,
          $ = fe(w, a),
          D = Cd(E, $, "".concat(k, "Id"), "".concat(T, "Id"), S, j),
          _ = s.reduce(function (U, F) {
            var Y = "".concat(F.axisType, "Map");
            return I(
              I({}, U),
              {},
              K(
                {},
                Y,
                fg(
                  b,
                  I(
                    I({}, F),
                    {},
                    {
                      graphicalItems: $,
                      stackGroups: F.axisType === k && D,
                      dataStartIndex: x,
                      dataEndIndex: v,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          N = vg(
            I(I({}, _), {}, { props: b, graphicalItems: $ }),
            O == null ? void 0 : O.legendBBox,
          );
        Object.keys(_).forEach(function (U) {
          _[U] = f(b, _[U], N, U.replace("Map", ""), n);
        });
        var L = _["".concat(T, "Map")],
          X = dg(L),
          G = p(
            b,
            I(
              I({}, _),
              {},
              {
                dataStartIndex: x,
                dataEndIndex: v,
                updateId: h,
                graphicalItems: $,
                stackGroups: D,
                offset: N,
              },
            ),
          );
        return I(
          I(
            {
              formattedGraphicalItems: G,
              graphicalItems: $,
              offset: N,
              stackGroups: D,
            },
            X,
          ),
          _,
        );
      };
    return (
      (r = (function (y) {
        eg(g, y);
        function g(O) {
          var b, x, v;
          return (
            Ym(this, g),
            (v = Jm(this, g, [O])),
            K(q(v), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            K(q(v), "accessibilityManager", new Mm()),
            K(q(v), "handleLegendBBoxUpdate", function (h) {
              if (h) {
                var w = v.state,
                  P = w.dataStartIndex,
                  S = w.dataEndIndex,
                  E = w.updateId;
                v.setState(
                  I(
                    { legendBBox: h },
                    m(
                      {
                        props: v.props,
                        dataStartIndex: P,
                        dataEndIndex: S,
                        updateId: E,
                      },
                      I(I({}, v.state), {}, { legendBBox: h }),
                    ),
                  ),
                );
              }
            }),
            K(q(v), "handleReceiveSyncEvent", function (h, w, P) {
              if (v.props.syncId === h) {
                if (
                  P === v.eventEmitterSymbol &&
                  typeof v.props.syncMethod != "function"
                )
                  return;
                v.applySyncEvent(w);
              }
            }),
            K(q(v), "handleBrushChange", function (h) {
              var w = h.startIndex,
                P = h.endIndex;
              if (w !== v.state.dataStartIndex || P !== v.state.dataEndIndex) {
                var S = v.state.updateId;
                v.setState(function () {
                  return I(
                    { dataStartIndex: w, dataEndIndex: P },
                    m(
                      {
                        props: v.props,
                        dataStartIndex: w,
                        dataEndIndex: P,
                        updateId: S,
                      },
                      v.state,
                    ),
                  );
                }),
                  v.triggerSyncEvent({ dataStartIndex: w, dataEndIndex: P });
              }
            }),
            K(q(v), "handleMouseEnter", function (h) {
              var w = v.getMouseInfo(h);
              if (w) {
                var P = I(I({}, w), {}, { isTooltipActive: !0 });
                v.setState(P), v.triggerSyncEvent(P);
                var S = v.props.onMouseEnter;
                W(S) && S(P, h);
              }
            }),
            K(q(v), "triggeredAfterMouseMove", function (h) {
              var w = v.getMouseInfo(h),
                P = w
                  ? I(I({}, w), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              v.setState(P), v.triggerSyncEvent(P);
              var S = v.props.onMouseMove;
              W(S) && S(P, h);
            }),
            K(q(v), "handleItemMouseEnter", function (h) {
              v.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: h,
                  activePayload: h.tooltipPayload,
                  activeCoordinate: h.tooltipPosition || { x: h.cx, y: h.cy },
                };
              });
            }),
            K(q(v), "handleItemMouseLeave", function () {
              v.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            K(q(v), "handleMouseMove", function (h) {
              h.persist(), v.throttleTriggeredAfterMouseMove(h);
            }),
            K(q(v), "handleMouseLeave", function (h) {
              v.throttleTriggeredAfterMouseMove.cancel();
              var w = { isTooltipActive: !1 };
              v.setState(w), v.triggerSyncEvent(w);
              var P = v.props.onMouseLeave;
              W(P) && P(w, h);
            }),
            K(q(v), "handleOuterEvent", function (h) {
              var w = Qs(h),
                P = he(v.props, "".concat(w));
              if (w && W(P)) {
                var S, E;
                /.*touch.*/i.test(w)
                  ? (E = v.getMouseInfo(h.changedTouches[0]))
                  : (E = v.getMouseInfo(h)),
                  P((S = E) !== null && S !== void 0 ? S : {}, h);
              }
            }),
            K(q(v), "handleClick", function (h) {
              var w = v.getMouseInfo(h);
              if (w) {
                var P = I(I({}, w), {}, { isTooltipActive: !0 });
                v.setState(P), v.triggerSyncEvent(P);
                var S = v.props.onClick;
                W(S) && S(P, h);
              }
            }),
            K(q(v), "handleMouseDown", function (h) {
              var w = v.props.onMouseDown;
              if (W(w)) {
                var P = v.getMouseInfo(h);
                w(P, h);
              }
            }),
            K(q(v), "handleMouseUp", function (h) {
              var w = v.props.onMouseUp;
              if (W(w)) {
                var P = v.getMouseInfo(h);
                w(P, h);
              }
            }),
            K(q(v), "handleTouchMove", function (h) {
              h.changedTouches != null &&
                h.changedTouches.length > 0 &&
                v.throttleTriggeredAfterMouseMove(h.changedTouches[0]);
            }),
            K(q(v), "handleTouchStart", function (h) {
              h.changedTouches != null &&
                h.changedTouches.length > 0 &&
                v.handleMouseDown(h.changedTouches[0]);
            }),
            K(q(v), "handleTouchEnd", function (h) {
              h.changedTouches != null &&
                h.changedTouches.length > 0 &&
                v.handleMouseUp(h.changedTouches[0]);
            }),
            K(q(v), "triggerSyncEvent", function (h) {
              v.props.syncId !== void 0 &&
                oa.emit(ca, v.props.syncId, h, v.eventEmitterSymbol);
            }),
            K(q(v), "applySyncEvent", function (h) {
              var w = v.props,
                P = w.layout,
                S = w.syncMethod,
                E = v.state.updateId,
                j = h.dataStartIndex,
                C = h.dataEndIndex;
              if (h.dataStartIndex !== void 0 || h.dataEndIndex !== void 0)
                v.setState(
                  I(
                    { dataStartIndex: j, dataEndIndex: C },
                    m(
                      {
                        props: v.props,
                        dataStartIndex: j,
                        dataEndIndex: C,
                        updateId: E,
                      },
                      v.state,
                    ),
                  ),
                );
              else if (h.activeTooltipIndex !== void 0) {
                var k = h.chartX,
                  T = h.chartY,
                  $ = h.activeTooltipIndex,
                  D = v.state,
                  _ = D.offset,
                  N = D.tooltipTicks;
                if (!_) return;
                if (typeof S == "function") $ = S(N, h);
                else if (S === "value") {
                  $ = -1;
                  for (var L = 0; L < N.length; L++)
                    if (N[L].value === h.activeLabel) {
                      $ = L;
                      break;
                    }
                }
                var X = I(I({}, _), {}, { x: _.left, y: _.top }),
                  G = Math.min(k, X.x + X.width),
                  U = Math.min(T, X.y + X.height),
                  F = N[$] && N[$].value,
                  Y = ri(v.state, v.props.data, $),
                  ce = N[$]
                    ? {
                        x: P === "horizontal" ? N[$].coordinate : G,
                        y: P === "horizontal" ? U : N[$].coordinate,
                      }
                    : Ql;
                v.setState(
                  I(
                    I({}, h),
                    {},
                    {
                      activeLabel: F,
                      activeCoordinate: ce,
                      activePayload: Y,
                      activeTooltipIndex: $,
                    },
                  ),
                );
              } else v.setState(h);
            }),
            K(q(v), "renderCursor", function (h) {
              var w,
                P = v.state,
                S = P.isTooltipActive,
                E = P.activeCoordinate,
                j = P.activePayload,
                C = P.offset,
                k = P.activeTooltipIndex,
                T = P.tooltipAxisBandSize,
                $ = v.getTooltipEventType(),
                D = (w = h.props.active) !== null && w !== void 0 ? w : S,
                _ = v.props.layout,
                N = h.key || "_recharts-cursor";
              return A.createElement(Km, {
                key: N,
                activeCoordinate: E,
                activePayload: j,
                activeTooltipIndex: k,
                chartName: n,
                element: h,
                isActive: D,
                layout: _,
                offset: C,
                tooltipAxisBandSize: T,
                tooltipEventType: $,
              });
            }),
            K(q(v), "renderPolarAxis", function (h, w, P) {
              var S = he(h, "type.axisType"),
                E = he(v.state, "".concat(S, "Map")),
                j = E && E[h.props["".concat(S, "Id")]];
              return B.cloneElement(
                h,
                I(
                  I({}, j),
                  {},
                  {
                    className: V(S, j.className),
                    key: h.key || "".concat(w, "-").concat(P),
                    ticks: _e(j, !0),
                  },
                ),
              );
            }),
            K(q(v), "renderPolarGrid", function (h) {
              var w = h.props,
                P = w.radialLines,
                S = w.polarAngles,
                E = w.polarRadius,
                j = v.state,
                C = j.radiusAxisMap,
                k = j.angleAxisMap,
                T = Ne(C),
                $ = Ne(k),
                D = $.cx,
                _ = $.cy,
                N = $.innerRadius,
                L = $.outerRadius;
              return B.cloneElement(h, {
                polarAngles: Array.isArray(S)
                  ? S
                  : _e($, !0).map(function (X) {
                      return X.coordinate;
                    }),
                polarRadius: Array.isArray(E)
                  ? E
                  : _e(T, !0).map(function (X) {
                      return X.coordinate;
                    }),
                cx: D,
                cy: _,
                innerRadius: N,
                outerRadius: L,
                key: h.key || "polar-grid",
                radialLines: P,
              });
            }),
            K(q(v), "renderLegend", function () {
              var h = v.state.formattedGraphicalItems,
                w = v.props,
                P = w.children,
                S = w.width,
                E = w.height,
                j = v.props.margin || {},
                C = S - (j.left || 0) - (j.right || 0),
                k = Qc({
                  children: P,
                  formattedGraphicalItems: h,
                  legendWidth: C,
                  legendContent: u,
                });
              if (!k) return null;
              var T = k.item,
                $ = kc(k, Fm);
              return B.cloneElement(
                T,
                I(
                  I({}, $),
                  {},
                  {
                    chartWidth: S,
                    chartHeight: E,
                    margin: j,
                    onBBoxUpdate: v.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            K(q(v), "renderTooltip", function () {
              var h,
                w = v.props,
                P = w.children,
                S = w.accessibilityLayer,
                E = ve(P, Te);
              if (!E) return null;
              var j = v.state,
                C = j.isTooltipActive,
                k = j.activeCoordinate,
                T = j.activePayload,
                $ = j.activeLabel,
                D = j.offset,
                _ = (h = E.props.active) !== null && h !== void 0 ? h : C;
              return B.cloneElement(E, {
                viewBox: I(I({}, D), {}, { x: D.left, y: D.top }),
                active: _,
                label: $,
                payload: _ ? T : [],
                coordinate: k,
                accessibilityLayer: S,
              });
            }),
            K(q(v), "renderBrush", function (h) {
              var w = v.props,
                P = w.margin,
                S = w.data,
                E = v.state,
                j = E.offset,
                C = E.dataStartIndex,
                k = E.dataEndIndex,
                T = E.updateId;
              return B.cloneElement(h, {
                key: h.key || "_recharts-brush",
                onChange: Zr(v.handleBrushChange, h.props.onChange),
                data: S,
                x: M(h.props.x) ? h.props.x : j.left,
                y: M(h.props.y)
                  ? h.props.y
                  : j.top + j.height + j.brushBottom - (P.bottom || 0),
                width: M(h.props.width) ? h.props.width : j.width,
                startIndex: C,
                endIndex: k,
                updateId: "brush-".concat(T),
              });
            }),
            K(q(v), "renderReferenceElement", function (h, w, P) {
              if (!h) return null;
              var S = q(v),
                E = S.clipPathId,
                j = v.state,
                C = j.xAxisMap,
                k = j.yAxisMap,
                T = j.offset,
                $ = h.props,
                D = $.xAxisId,
                _ = $.yAxisId;
              return B.cloneElement(h, {
                key: h.key || "".concat(w, "-").concat(P),
                xAxis: C[D],
                yAxis: k[_],
                viewBox: {
                  x: T.left,
                  y: T.top,
                  width: T.width,
                  height: T.height,
                },
                clipPathId: E,
              });
            }),
            K(q(v), "renderActivePoints", function (h) {
              var w = h.item,
                P = h.activePoint,
                S = h.basePoint,
                E = h.childIndex,
                j = h.isRange,
                C = [],
                k = w.props.key,
                T = w.item.props,
                $ = T.activeDot,
                D = T.dataKey,
                _ = I(
                  I(
                    {
                      index: E,
                      dataKey: D,
                      cx: P.x,
                      cy: P.y,
                      r: 4,
                      fill: li(w.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: P.payload,
                      value: P.value,
                      key: "".concat(k, "-activePoint-").concat(E),
                    },
                    R($, !1),
                  ),
                  cn($),
                );
              return (
                C.push(g.renderActiveDot($, _)),
                S
                  ? C.push(
                      g.renderActiveDot(
                        $,
                        I(
                          I({}, _),
                          {},
                          {
                            cx: S.x,
                            cy: S.y,
                            key: "".concat(k, "-basePoint-").concat(E),
                          },
                        ),
                      ),
                    )
                  : j && C.push(null),
                C
              );
            }),
            K(q(v), "renderGraphicChild", function (h, w, P) {
              var S = v.filterFormatItem(h, w, P);
              if (!S) return null;
              var E = v.getTooltipEventType(),
                j = v.state,
                C = j.isTooltipActive,
                k = j.tooltipAxis,
                T = j.activeTooltipIndex,
                $ = j.activeLabel,
                D = v.props.children,
                _ = ve(D, Te),
                N = S.props,
                L = N.points,
                X = N.isRange,
                G = N.baseLine,
                U = S.item.props,
                F = U.activeDot,
                Y = U.hide,
                ce = U.activeBar,
                ye = U.activeShape,
                Ft = !!(!Y && C && _ && (F || ce || ye)),
                me = {};
              E !== "axis" && _ && _.props.trigger === "click"
                ? (me = {
                    onClick: Zr(v.handleItemMouseEnter, h.props.onClick),
                  })
                : E !== "axis" &&
                  (me = {
                    onMouseLeave: Zr(
                      v.handleItemMouseLeave,
                      h.props.onMouseLeave,
                    ),
                    onMouseEnter: Zr(
                      v.handleItemMouseEnter,
                      h.props.onMouseEnter,
                    ),
                  });
              var He = B.cloneElement(h, I(I({}, S.props), me));
              function Vr(qe) {
                return typeof k.dataKey == "function"
                  ? k.dataKey(qe.payload)
                  : null;
              }
              if (Ft)
                if (T >= 0) {
                  var lt, Xt;
                  if (k.dataKey && !k.allowDuplicatedCategory) {
                    var Ue =
                      typeof k.dataKey == "function"
                        ? Vr
                        : "payload.".concat(k.dataKey.toString());
                    (lt = on(L, Ue, $)), (Xt = X && G && on(G, Ue, $));
                  } else
                    (lt = L == null ? void 0 : L[T]), (Xt = X && G && G[T]);
                  if (ye || ce) {
                    var st =
                      h.props.activeIndex !== void 0 ? h.props.activeIndex : T;
                    return [
                      B.cloneElement(
                        h,
                        I(I(I({}, S.props), me), {}, { activeIndex: st }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!z(lt))
                    return [He].concat(
                      Lt(
                        v.renderActivePoints({
                          item: S,
                          activePoint: lt,
                          basePoint: Xt,
                          childIndex: T,
                          isRange: X,
                        }),
                      ),
                    );
                } else {
                  var Vt,
                    Gt =
                      (Vt = v.getItemByXY(v.state.activeCoordinate)) !== null &&
                      Vt !== void 0
                        ? Vt
                        : { graphicalItem: He },
                    ut = Gt.graphicalItem,
                    Ht = ut.item,
                    ft = Ht === void 0 ? h : Ht,
                    Gr = ut.childIndex,
                    Ye = I(I(I({}, S.props), me), {}, { activeIndex: Gr });
                  return [B.cloneElement(ft, Ye), null, null];
                }
              return X ? [He, null, null] : [He, null];
            }),
            K(q(v), "renderCustomized", function (h, w, P) {
              return B.cloneElement(
                h,
                I(
                  I({ key: "recharts-customized-".concat(P) }, v.props),
                  v.state,
                ),
              );
            }),
            K(q(v), "renderMap", {
              CartesianGrid: { handler: tn, once: !0 },
              ReferenceArea: { handler: v.renderReferenceElement },
              ReferenceLine: { handler: tn },
              ReferenceDot: { handler: v.renderReferenceElement },
              XAxis: { handler: tn },
              YAxis: { handler: tn },
              Brush: { handler: v.renderBrush, once: !0 },
              Bar: { handler: v.renderGraphicChild },
              Line: { handler: v.renderGraphicChild },
              Area: { handler: v.renderGraphicChild },
              Radar: { handler: v.renderGraphicChild },
              RadialBar: { handler: v.renderGraphicChild },
              Scatter: { handler: v.renderGraphicChild },
              Pie: { handler: v.renderGraphicChild },
              Funnel: { handler: v.renderGraphicChild },
              Tooltip: { handler: v.renderCursor, once: !0 },
              PolarGrid: { handler: v.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: v.renderPolarAxis },
              PolarRadiusAxis: { handler: v.renderPolarAxis },
              Customized: { handler: v.renderCustomized },
            }),
            (v.clipPathId = "".concat(
              (b = O.id) !== null && b !== void 0 ? b : Xe("recharts"),
              "-clip",
            )),
            (v.throttleTriggeredAfterMouseMove = Cc(
              v.triggeredAfterMouseMove,
              (x = O.throttleDelay) !== null && x !== void 0 ? x : 1e3 / 60,
            )),
            (v.state = {}),
            v
          );
        }
        return (
          Zm(g, [
            {
              key: "componentDidMount",
              value: function () {
                var b, x;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (b = this.props.margin.left) !== null && b !== void 0
                          ? b
                          : 0,
                      top:
                        (x = this.props.margin.top) !== null && x !== void 0
                          ? x
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var b = this.props,
                  x = b.children,
                  v = b.data,
                  h = b.height,
                  w = b.layout,
                  P = ve(x, Te);
                if (P) {
                  var S = P.props.defaultIndex;
                  if (
                    !(
                      typeof S != "number" ||
                      S < 0 ||
                      S > this.state.tooltipTicks.length
                    )
                  ) {
                    var E =
                        this.state.tooltipTicks[S] &&
                        this.state.tooltipTicks[S].value,
                      j = ri(this.state, v, S, E),
                      C = this.state.tooltipTicks[S].coordinate,
                      k = (this.state.offset.top + h) / 2,
                      T = w === "horizontal",
                      $ = T ? { x: C, y: k } : { y: C, x: k },
                      D = this.state.formattedGraphicalItems.find(function (N) {
                        var L = N.item;
                        return L.type.name === "Scatter";
                      });
                    D &&
                      (($ = I(I({}, $), D.props.points[S].tooltipPosition)),
                      (j = D.props.points[S].tooltipPayload));
                    var _ = {
                      activeTooltipIndex: S,
                      isTooltipActive: !0,
                      activeLabel: E,
                      activePayload: j,
                      activeCoordinate: $,
                    };
                    this.setState(_),
                      this.renderCursor(P),
                      this.accessibilityManager.setIndex(S);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (b, x) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== x.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== b.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== b.margin)
                ) {
                  var v, h;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (v = this.props.margin.left) !== null && v !== void 0
                          ? v
                          : 0,
                      top:
                        (h = this.props.margin.top) !== null && h !== void 0
                          ? h
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (b) {
                da([ve(b.children, Te)], [ve(this.props.children, Te)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var b = ve(this.props.children, Te);
                if (b && typeof b.props.shared == "boolean") {
                  var x = b.props.shared ? "axis" : "item";
                  return l.indexOf(x) >= 0 ? x : o;
                }
                return o;
              },
            },
            {
              key: "getMouseInfo",
              value: function (b) {
                if (!this.container) return null;
                var x = this.container,
                  v = x.getBoundingClientRect(),
                  h = Cf(v),
                  w = {
                    chartX: Math.round(b.pageX - h.left),
                    chartY: Math.round(b.pageY - h.top),
                  },
                  P = v.width / x.offsetWidth || 1,
                  S = this.inRange(w.chartX, w.chartY, P);
                if (!S) return null;
                var E = this.state,
                  j = E.xAxisMap,
                  C = E.yAxisMap,
                  k = this.getTooltipEventType();
                if (k !== "axis" && j && C) {
                  var T = Ne(j).scale,
                    $ = Ne(C).scale,
                    D = T && T.invert ? T.invert(w.chartX) : null,
                    _ = $ && $.invert ? $.invert(w.chartY) : null;
                  return I(I({}, w), {}, { xValue: D, yValue: _ });
                }
                var N = Tc(this.state, this.props.data, this.props.layout, S);
                return N ? I(I({}, w), N) : null;
              },
            },
            {
              key: "inRange",
              value: function (b, x) {
                var v =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  h = this.props.layout,
                  w = b / v,
                  P = x / v;
                if (h === "horizontal" || h === "vertical") {
                  var S = this.state.offset,
                    E =
                      w >= S.left &&
                      w <= S.left + S.width &&
                      P >= S.top &&
                      P <= S.top + S.height;
                  return E ? { x: w, y: P } : null;
                }
                var j = this.state,
                  C = j.angleAxisMap,
                  k = j.radiusAxisMap;
                if (C && k) {
                  var T = Ne(C);
                  return go({ x: w, y: P }, T);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var b = this.props.children,
                  x = this.getTooltipEventType(),
                  v = ve(b, Te),
                  h = {};
                v &&
                  x === "axis" &&
                  (v.props.trigger === "click"
                    ? (h = { onClick: this.handleClick })
                    : (h = {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                      }));
                var w = cn(this.props, this.handleOuterEvent);
                return I(I({}, w), h);
              },
            },
            {
              key: "addListener",
              value: function () {
                oa.on(ca, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                oa.removeListener(ca, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (b, x, v) {
                for (
                  var h = this.state.formattedGraphicalItems,
                    w = 0,
                    P = h.length;
                  w < P;
                  w++
                ) {
                  var S = h[w];
                  if (
                    S.item === b ||
                    S.props.key === b.key ||
                    (x === Ce(S.item.type) && v === S.childIndex)
                  )
                    return S;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var b = this.clipPathId,
                  x = this.state.offset,
                  v = x.left,
                  h = x.top,
                  w = x.height,
                  P = x.width;
                return A.createElement(
                  "defs",
                  null,
                  A.createElement(
                    "clipPath",
                    { id: b },
                    A.createElement("rect", {
                      x: v,
                      y: h,
                      height: w,
                      width: P,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var b = this.state.xAxisMap;
                return b
                  ? Object.entries(b).reduce(function (x, v) {
                      var h = Ec(v, 2),
                        w = h[0],
                        P = h[1];
                      return I(I({}, x), {}, K({}, w, P.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var b = this.state.yAxisMap;
                return b
                  ? Object.entries(b).reduce(function (x, v) {
                      var h = Ec(v, 2),
                        w = h[0],
                        P = h[1];
                      return I(I({}, x), {}, K({}, w, P.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (b) {
                var x;
                return (x = this.state.xAxisMap) === null ||
                  x === void 0 ||
                  (x = x[b]) === null ||
                  x === void 0
                  ? void 0
                  : x.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (b) {
                var x;
                return (x = this.state.yAxisMap) === null ||
                  x === void 0 ||
                  (x = x[b]) === null ||
                  x === void 0
                  ? void 0
                  : x.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (b) {
                var x = this.state,
                  v = x.formattedGraphicalItems,
                  h = x.activeItem;
                if (v && v.length)
                  for (var w = 0, P = v.length; w < P; w++) {
                    var S = v[w],
                      E = S.props,
                      j = S.item,
                      C = Ce(j.type);
                    if (C === "Bar") {
                      var k = (E.data || []).find(function (_) {
                        return Up(b, _);
                      });
                      if (k) return { graphicalItem: S, payload: k };
                    } else if (C === "RadialBar") {
                      var T = (E.data || []).find(function (_) {
                        return go(b, _);
                      });
                      if (T) return { graphicalItem: S, payload: T };
                    } else if (Fn(S, h) || Xn(S, h) || $r(S, h)) {
                      var $ = ah({
                          graphicalItem: S,
                          activeTooltipItem: h,
                          itemData: j.props.data,
                        }),
                        D =
                          j.props.activeIndex === void 0
                            ? $
                            : j.props.activeIndex;
                      return {
                        graphicalItem: I(I({}, S), {}, { childIndex: D }),
                        payload: $r(S, h) ? j.props.data[$] : S.props.data[$],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var b = this;
                if (!$i(this)) return null;
                var x = this.props,
                  v = x.children,
                  h = x.className,
                  w = x.width,
                  P = x.height,
                  S = x.style,
                  E = x.compact,
                  j = x.title,
                  C = x.desc,
                  k = kc(x, Xm),
                  T = R(k, !1);
                if (E)
                  return A.createElement(
                    oc,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    A.createElement(
                      va,
                      lr({}, T, { width: w, height: P, title: j, desc: C }),
                      this.renderClipPath(),
                      Ii(v, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var $, D;
                  (T.tabIndex =
                    ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0),
                    (T.role =
                      (D = this.props.role) !== null && D !== void 0
                        ? D
                        : "application"),
                    (T.onKeyDown = function (N) {
                      b.accessibilityManager.keyboardEvent(N);
                    }),
                    (T.onFocus = function () {
                      b.accessibilityManager.focus();
                    });
                }
                var _ = this.parseEventsOfWrapper();
                return A.createElement(
                  oc,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  A.createElement(
                    "div",
                    lr(
                      {
                        className: V("recharts-wrapper", h),
                        style: I(
                          {
                            position: "relative",
                            cursor: "default",
                            width: w,
                            height: P,
                          },
                          S,
                        ),
                      },
                      _,
                      {
                        ref: function (L) {
                          b.container = L;
                        },
                      },
                    ),
                    A.createElement(
                      va,
                      lr({}, T, {
                        width: w,
                        height: P,
                        title: j,
                        desc: C,
                        style: og,
                      }),
                      this.renderClipPath(),
                      Ii(v, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ]),
          g
        );
      })(B.Component)),
      K(r, "displayName", n),
      K(
        r,
        "defaultProps",
        I(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          d,
        ),
      ),
      K(r, "getDerivedStateFromProps", function (y, g) {
        var O = y.dataKey,
          b = y.data,
          x = y.children,
          v = y.width,
          h = y.height,
          w = y.layout,
          P = y.stackOffset,
          S = y.margin,
          E = g.dataStartIndex,
          j = g.dataEndIndex;
        if (g.updateId === void 0) {
          var C = Ic(y);
          return I(
            I(
              I({}, C),
              {},
              { updateId: 0 },
              m(I(I({ props: y }, C), {}, { updateId: 0 }), g),
            ),
            {},
            {
              prevDataKey: O,
              prevData: b,
              prevWidth: v,
              prevHeight: h,
              prevLayout: w,
              prevStackOffset: P,
              prevMargin: S,
              prevChildren: x,
            },
          );
        }
        if (
          O !== g.prevDataKey ||
          b !== g.prevData ||
          v !== g.prevWidth ||
          h !== g.prevHeight ||
          w !== g.prevLayout ||
          P !== g.prevStackOffset ||
          !xt(S, g.prevMargin)
        ) {
          var k = Ic(y),
            T = {
              chartX: g.chartX,
              chartY: g.chartY,
              isTooltipActive: g.isTooltipActive,
            },
            $ = I(I({}, Tc(g, b, w)), {}, { updateId: g.updateId + 1 }),
            D = I(I(I({}, k), T), $);
          return I(
            I(I({}, D), m(I({ props: y }, D), g)),
            {},
            {
              prevDataKey: O,
              prevData: b,
              prevWidth: v,
              prevHeight: h,
              prevLayout: w,
              prevStackOffset: P,
              prevMargin: S,
              prevChildren: x,
            },
          );
        }
        if (!da(x, g.prevChildren)) {
          var _,
            N,
            L,
            X,
            G = ve(x, It),
            U =
              G &&
              (_ =
                (N = G.props) === null || N === void 0
                  ? void 0
                  : N.startIndex) !== null &&
              _ !== void 0
                ? _
                : E,
            F =
              G &&
              (L =
                (X = G.props) === null || X === void 0
                  ? void 0
                  : X.endIndex) !== null &&
              L !== void 0
                ? L
                : j,
            Y = U !== E || F !== j,
            ce = !z(b),
            ye = ce && !Y ? g.updateId : g.updateId + 1;
          return I(
            I(
              { updateId: ye },
              m(
                I(
                  I({ props: y }, g),
                  {},
                  { updateId: ye, dataStartIndex: U, dataEndIndex: F },
                ),
                g,
              ),
            ),
            {},
            { prevChildren: x, dataStartIndex: U, dataEndIndex: F },
          );
        }
        return null;
      }),
      K(r, "renderActiveDot", function (y, g) {
        var O;
        return (
          B.isValidElement(y)
            ? (O = B.cloneElement(y, g))
            : W(y)
              ? (O = y(g))
              : (O = A.createElement(zr, g)),
          A.createElement(
            H,
            { className: "recharts-active-dot", key: g.key },
            O,
          )
        );
      }),
      r
    );
  },
  kg = qn({
    chartName: "BarChart",
    GraphicalChild: ct,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: Fr },
      { axisType: "yAxis", AxisComp: Xr },
    ],
    formatAxisMap: ui,
  }),
  $g = qn({
    chartName: "PieChart",
    GraphicalChild: Ve,
    validateTooltipEventTypes: ["item"],
    defaultTooltipEventType: "item",
    legendContent: "children",
    axisComponents: [
      { axisType: "angleAxis", AxisComp: Kn },
      { axisType: "radiusAxis", AxisComp: zn },
    ],
    formatAxisMap: Vd,
    defaultProps: {
      layout: "centric",
      startAngle: 0,
      endAngle: 360,
      cx: "50%",
      cy: "50%",
      innerRadius: 0,
      outerRadius: "80%",
    },
  }),
  Tg = qn({
    chartName: "AreaChart",
    GraphicalChild: Ge,
    axisComponents: [
      { axisType: "xAxis", AxisComp: Fr },
      { axisType: "yAxis", AxisComp: Xr },
    ],
    formatAxisMap: ui,
  }),
  Ig = qn({
    chartName: "ComposedChart",
    GraphicalChild: [Gn, Ge, ct, Un],
    axisComponents: [
      { axisType: "xAxis", AxisComp: Fr },
      { axisType: "yAxis", AxisComp: Xr },
      { axisType: "zAxis", AxisComp: Hn },
    ],
    formatAxisMap: ui,
  });
export {
  Tg as A,
  ct as B,
  Ln as C,
  $g as P,
  Eg as R,
  Te as T,
  Fr as X,
  Xr as Y,
  Ve as a,
  Ig as b,
  Uy as c,
  kg as d,
  Ge as e,
};
