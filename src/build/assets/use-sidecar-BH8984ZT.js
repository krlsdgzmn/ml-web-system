import { r as h } from "./react-i33jQOB4.js";
import { a as s, _ as l } from "./tslib-CDuPK5Eb.js";
function v(e) {
  return e;
}
function p(e, n) {
  n === void 0 && (n = v);
  var r = [],
    i = !1,
    d = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (u) {
        var t = n(u, i);
        return (
          r.push(t),
          function () {
            r = r.filter(function (a) {
              return a !== t;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (i = !0; r.length; ) {
          var t = r;
          (r = []), t.forEach(u);
        }
        r = {
          push: function (a) {
            return u(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (u) {
        i = !0;
        var t = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(u), (t = r);
        }
        var m = function () {
            var o = t;
            (t = []), o.forEach(u);
          },
          f = function () {
            return Promise.resolve().then(m);
          };
        f(),
          (r = {
            push: function (o) {
              t.push(o), f();
            },
            filter: function (o) {
              return (t = t.filter(o)), r;
            },
          });
      },
    };
  return d;
}
function S(e) {
  e === void 0 && (e = {});
  var n = p(null);
  return (n.options = s({ async: !0, ssr: !1 }, e)), n;
}
var c = function (e) {
  var n = e.sideCar,
    r = l(e, ["sideCar"]);
  if (!n)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var i = n.read();
  if (!i) throw new Error("Sidecar medium not found");
  return h.createElement(i, s({}, r));
};
c.isSideCarExport = !0;
function C(e, n) {
  return e.useMedium(n), c;
}
export { S as c, C as e };