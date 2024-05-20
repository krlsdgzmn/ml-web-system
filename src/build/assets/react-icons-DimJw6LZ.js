import { R as a } from "./react-i33jQOB4.js";
var g = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  d = a.createContext && a.createContext(g),
  m = ["attr", "size", "title"];
function b(t, e) {
  if (t == null) return {};
  var r = O(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function O(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function l() {
  return (
    (l = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    l.apply(this, arguments)
  );
}
function h(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? h(Object(r), !0).forEach(function (n) {
          y(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : h(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function y(t, e, r) {
  return (
    (e = j(e)),
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
function j(t) {
  var e = w(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function w(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function p(t) {
  return (
    t &&
    t.map((e, r) => a.createElement(e.tag, u({ key: r }, e.attr), p(e.child)))
  );
}
function s(t) {
  return (e) => a.createElement(P, l({ attr: u({}, t.attr) }, e), p(t.child));
}
function P(t) {
  var e = (r) => {
    var { attr: n, size: i, title: o } = t,
      v = b(t, m),
      f = i || r.size || "1em",
      c;
    return (
      r.className && (c = r.className),
      t.className && (c = (c ? c + " " : "") + t.className),
      a.createElement(
        "svg",
        l(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          v,
          {
            className: c,
            style: u(u({ color: t.color || r.color }, r.style), t.style),
            height: f,
            width: f,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        o && a.createElement("title", null, o),
        t.children,
      )
    );
  };
  return d !== void 0 ? a.createElement(d.Consumer, null, (r) => e(r)) : e(g);
}
function x(t) {
  return s({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(t);
}
function M(t) {
  return s({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z",
        },
        child: [],
      },
    ],
  })(t);
}
function E(t) {
  return s({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M9 11l3 3l8 -8" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",
        },
        child: [],
      },
    ],
  })(t);
}
function z(t) {
  return s({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M4 6h16" }, child: [] },
      { tag: "path", attr: { d: "M7 12h13" }, child: [] },
      { tag: "path", attr: { d: "M10 18h10" }, child: [] },
    ],
  })(t);
}
export { M as A, x as M, z as T, E as a };
