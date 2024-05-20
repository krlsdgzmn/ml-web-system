import { r as o, j as e, R as ut } from "./react-i33jQOB4.js";
import { c as ht } from "./react-dom-BEqY4yZs.js";
import { L as pt, c as jt, R as bt } from "./react-router-dom-Bidp0z1Z.js";
import {
  $ as gt,
  a as ie,
  b as ce,
  c as Nt,
  d as me,
  e as fe,
  f as xe,
  g as ue,
  h as he,
  i as pe,
  j as je,
  k as yt,
  l as vt,
  m as be,
  n as ge,
  o as wt,
  p as Ne,
  q as ye,
  r as kt,
  s as $t,
  t as Ct,
  u as ve,
  v as we,
  w as St,
  x as ke,
  y as $e,
  z as Tt,
  A as Ce,
  B as Dt,
  C as Se,
  D as Te,
  E as Mt,
  F as Ot,
  G as De,
  H as Rt,
  I as Lt,
  J as _t,
  K as Me,
  L as Pt,
  M as Ft,
  N as Oe,
  O as Re,
  P as Le,
  Q as _e,
  R as Pe,
  S as Fe,
  T as At,
} from "./@radix-ui-CjN14ZcQ.js";
import { c as X } from "./class-variance-authority-Bb4qSo10.js";
import { c as zt } from "./clsx-B-dksMZM.js";
import { t as It } from "./tailwind-merge-3VKOpVsw.js";
import {
  C as Et,
  a as Ae,
  b as Wt,
  S as Bt,
  M as Kt,
  X as ze,
  c as Ie,
  d as Vt,
} from "./lucide-react-8Sj-4unJ.js";
import { c as Ht } from "./react-router-DKlqA7ma.js";
import { a as Y } from "./axios-B6xwUs71.js";
import { M as Ut, A as qt, T as Gt, a as Jt } from "./react-icons-DimJw6LZ.js";
import {
  R as A,
  P as Yt,
  a as Qt,
  C as Xt,
  T as R,
  b as Z,
  c as _,
  X as P,
  Y as F,
  B as D,
  d as Zt,
  A as es,
  e as B,
} from "./recharts-Do5O6lOo.js";
import { $ as U } from "./jquery-DeWOorSR.js";
import "./eventemitter3-_gqcMBhN.js";
import "./scheduler-CzFDRTuY.js";
import "./@remix-run-CA71pd9M.js";
import "./@babel-CCbyfPlC.js";
import "./aria-hidden-DQ5UC2Eg.js";
import "./react-remove-scroll-Bs1wwM7Q.js";
import "./tslib-CDuPK5Eb.js";
import "./react-remove-scroll-bar-Ds1-x277.js";
import "./react-style-singleton-CANWrM8C.js";
import "./get-nonce-C-Z93AgS.js";
import "./use-sidecar-BH8984ZT.js";
import "./use-callback-ref-CSz67WH8.js";
import "./@floating-ui-BjAKBcZC.js";
import "./lodash-DOF8BdPQ.js";
import "./react-is-8JwjhRSi.js";
import "./react-smooth-B0X1ksba.js";
import "./prop-types-BbijBPcD.js";
import "./fast-equals-C7I1S-bJ.js";
import "./tiny-invariant-BaFNuDhB.js";
import "./d3-shape-DjFPhhqo.js";
import "./d3-path-CimkQT29.js";
import "./victory-vendor-6_AdwBXU.js";
import "./d3-scale-BYIooUZQ.js";
import "./internmap-BkD7Hj8s.js";
import "./d3-array-g_qRI3rN.js";
import "./d3-time-format-BKO53YJi.js";
import "./d3-time-QpEiTrED.js";
import "./d3-interpolate-CvRPKVI0.js";
import "./d3-color-9lF95FHy.js";
import "./d3-format-CzD4bSOQ.js";
import "./recharts-scale-DiOBu8nk.js";
import "./decimal.js-light-B5-9uEc-.js";
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const l of n)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const l = {};
    return (
      n.integrity && (l.integrity = n.integrity),
      n.referrerPolicy && (l.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const l = s(n);
    fetch(n.href, l);
  }
})();
const Ee = "/assets/logo-BAbCcmkU.svg";
function We({ className: t }) {
  const [a, s] = o.useState(new Date());
  o.useEffect(() => {
    const l = setInterval(() => {
      s(new Date());
    }, 1e3);
    return () => clearInterval(l);
  }, []);
  const r = (l) => {
      const c = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
      return l.toLocaleDateString("en-US", c);
    },
    n = (l) => {
      const c = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      return l.toLocaleTimeString("en-US", c);
    };
  return e.jsxs("div", {
    className: t,
    children: [e.jsx("p", { children: r(a) }), e.jsx("p", { children: n(a) })],
  });
}
function i(...t) {
  return It(zt(t));
}
const ts = X(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  M = o.forwardRef(
    ({ className: t, variant: a, size: s, asChild: r = !1, ...n }, l) => {
      const c = r ? gt : "button";
      return e.jsx(c, {
        className: i(ts({ variant: a, size: s, className: t })),
        ref: l,
        ...n,
      });
    },
  );
M.displayName = "Button";
const x = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("div", {
    ref: s,
    className: i("rounded-lg border bg-card text-card-foreground shadow-sm", t),
    ...a,
  }),
);
x.displayName = "Card";
const h = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("div", {
    ref: s,
    className: i("flex flex-col space-y-1.5 p-6", t),
    ...a,
  }),
);
h.displayName = "CardHeader";
const p = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("h3", {
    ref: s,
    className: i("text-2xl font-semibold leading-none tracking-tight", t),
    ...a,
  }),
);
p.displayName = "CardTitle";
const C = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("p", {
    ref: s,
    className: i("text-sm text-muted-foreground", t),
    ...a,
  }),
);
C.displayName = "CardDescription";
const j = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("div", { ref: s, className: i("p-6 pt-0", t), ...a }),
);
j.displayName = "CardContent";
const ss = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("div", { ref: s, className: i("flex items-center p-6 pt-0", t), ...a }),
);
ss.displayName = "CardFooter";
const K = o.forwardRef(({ className: t, type: a, ...s }, r) =>
  e.jsx("input", {
    type: a,
    className: i(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t,
    ),
    ref: r,
    ...s,
  }),
);
K.displayName = "Input";
const as = yt,
  rs = vt,
  os = o.forwardRef(({ className: t, inset: a, children: s, ...r }, n) =>
    e.jsxs(ie, {
      ref: n,
      className: i(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        a && "pl-8",
        t,
      ),
      ...r,
      children: [s, e.jsx(Et, { className: "ml-auto h-4 w-4" })],
    }),
  );
os.displayName = ie.displayName;
const ns = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(ce, {
    ref: s,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t,
    ),
    ...a,
  }),
);
ns.displayName = ce.displayName;
const Be = o.forwardRef(({ className: t, sideOffset: a = 4, ...s }, r) =>
  e.jsx(Nt, {
    children: e.jsx(me, {
      ref: r,
      sideOffset: a,
      className: i(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t,
      ),
      ...s,
    }),
  }),
);
Be.displayName = me.displayName;
const I = o.forwardRef(({ className: t, inset: a, ...s }, r) =>
  e.jsx(fe, {
    ref: r,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      t,
    ),
    ...s,
  }),
);
I.displayName = fe.displayName;
const ls = o.forwardRef(({ className: t, children: a, checked: s, ...r }, n) =>
  e.jsxs(xe, {
    ref: n,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t,
    ),
    checked: s,
    ...r,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(ue, { children: e.jsx(Ae, { className: "h-4 w-4" }) }),
      }),
      a,
    ],
  }),
);
ls.displayName = xe.displayName;
const ds = o.forwardRef(({ className: t, children: a, ...s }, r) =>
  e.jsxs(he, {
    ref: r,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t,
    ),
    ...s,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(ue, {
          children: e.jsx(Wt, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      a,
    ],
  }),
);
ds.displayName = he.displayName;
const is = o.forwardRef(({ className: t, inset: a, ...s }, r) =>
  e.jsx(pe, {
    ref: r,
    className: i("px-2 py-1.5 text-sm font-semibold", a && "pl-8", t),
    ...s,
  }),
);
is.displayName = pe.displayName;
const cs = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(je, { ref: s, className: i("-mx-1 my-1 h-px bg-muted", t), ...a }),
);
cs.displayName = je.displayName;
const Ke = o.createContext();
function ms({
  children: t,
  defaultTheme: a = "light",
  storageKey: s = "vite-ui-theme",
  ...r
}) {
  const [n, l] = o.useState(() => localStorage.getItem(s) || a);
  o.useEffect(() => {
    const d = window.document.documentElement;
    if ((d.classList.remove("light", "dark"), n === "system")) {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      d.classList.add(m);
      return;
    }
    d.classList.add(n);
  }, [n]);
  const c = {
    theme: n,
    setTheme: (d) => {
      localStorage.setItem(s, d), l(d);
    },
  };
  return e.jsx(Ke.Provider, { ...r, value: c, children: t });
}
const fs = () => {
  const t = o.useContext(Ke);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
};
function Ve() {
  const { setTheme: t } = fs();
  return e.jsxs(as, {
    children: [
      e.jsx(rs, {
        asChild: !0,
        children: e.jsxs(M, {
          variant: "outline",
          size: "icon",
          children: [
            e.jsx(Bt, {
              className:
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
            }),
            e.jsx(Kt, {
              className:
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            }),
            e.jsx("span", { className: "sr-only", children: "Toggle theme" }),
          ],
        }),
      }),
      e.jsxs(Be, {
        align: "end",
        children: [
          e.jsx(I, { onClick: () => t("light"), children: "Light" }),
          e.jsx(I, { onClick: () => t("dark"), children: "Dark" }),
          e.jsx(I, { onClick: () => t("system"), children: "System" }),
        ],
      }),
    ],
  });
}
const xs = 1,
  us = 1e6;
let q = 0;
function hs() {
  return (q = (q + 1) % Number.MAX_SAFE_INTEGER), q.toString();
}
const G = new Map(),
  te = (t) => {
    if (G.has(t)) return;
    const a = setTimeout(() => {
      G.delete(t), L({ type: "REMOVE_TOAST", toastId: t });
    }, us);
    G.set(t, a);
  },
  ps = (t, a) => {
    switch (a.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [a.toast, ...t.toasts].slice(0, xs) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((s) =>
            s.id === a.toast.id ? { ...s, ...a.toast } : s,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = a;
        return (
          s
            ? te(s)
            : t.toasts.forEach((r) => {
                te(r.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((r) =>
              r.id === s || s === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return a.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((s) => s.id !== a.toastId) };
    }
  },
  E = [];
let W = { toasts: [] };
function L(t) {
  (W = ps(W, t)),
    E.forEach((a) => {
      a(W);
    });
}
function js({ ...t }) {
  const a = hs(),
    s = (n) => L({ type: "UPDATE_TOAST", toast: { ...n, id: a } }),
    r = () => L({ type: "DISMISS_TOAST", toastId: a });
  return (
    L({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: a,
        open: !0,
        onOpenChange: (n) => {
          n || r();
        },
      },
    }),
    { id: a, dismiss: r, update: s }
  );
}
function V() {
  const [t, a] = o.useState(W);
  return (
    o.useEffect(
      () => (
        E.push(a),
        () => {
          const s = E.indexOf(a);
          s > -1 && E.splice(s, 1);
        }
      ),
      [t],
    ),
    {
      ...t,
      toast: js,
      dismiss: (s) => L({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
function bs() {
  const t = "admin",
    a = "admin123",
    { toast: s } = V(),
    r = Ht(),
    n = (l) => {
      l.preventDefault();
      const c = new FormData(l.target),
        d = c.get("username"),
        m = c.get("password");
      d === t && m === a
        ? (s({ title: "Success", description: "Login successful!" }),
          r("/prediction"))
        : s(
            !d || !m
              ? {
                  title: "Error",
                  description: "Please fill in all fields.",
                  variant: "destructive",
                }
              : {
                  title: "Error",
                  description: "Invalid username or password.",
                  variant: "destructive",
                },
          );
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("header", {
        className:
          "top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky",
        children: e.jsxs("div", {
          className:
            "container flex h-14 max-w-screen-2xl items-center justify-between",
          children: [
            e.jsx("img", {
              src: Ee,
              alt: "MKSG Logo",
              className: "w-28 dark:invert",
            }),
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx(We, {
                  className:
                    "font-jetbrains text-right font-mono text-xs text-foreground/60",
                }),
                e.jsx(Ve, {}),
              ],
            }),
          ],
        }),
      }),
      e.jsx("section", {
        className:
          "flex min-h-[75vh] flex-col items-center justify-center py-8",
        children: e.jsxs(x, {
          className:
            "min-w-screen-sm w-[400px] border bg-transparent p-8 text-center shadow-md shadow-primary/40",
          children: [
            e.jsxs("h1", {
              className: "text-2xl font-semibold",
              children: [e.jsx("span", { children: "MKSG" }), " Clothing"],
            }),
            e.jsx("p", {
              className: "text-foreground/40",
              children: "Please login to continue",
            }),
            e.jsxs("form", {
              className: "space-y-4 py-8",
              onSubmit: n,
              children: [
                e.jsx(K, {
                  type: "text",
                  placeholder: "Username",
                  name: "username",
                }),
                e.jsx(K, {
                  type: "password",
                  placeholder: "Password",
                  name: "password",
                }),
                e.jsx(M, {
                  type: "submit",
                  className: "w-full",
                  children: "Login",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const He = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("div", {
    className: "relative w-full overflow-auto",
    children: e.jsx("table", {
      ref: s,
      className: i("w-full caption-bottom text-sm", t),
      ...a,
    }),
  }),
);
He.displayName = "Table";
const Ue = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("thead", { ref: s, className: i("[&_tr]:border-b", t), ...a }),
);
Ue.displayName = "TableHeader";
const qe = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("tbody", {
    ref: s,
    className: i("[&_tr:last-child]:border-0", t),
    ...a,
  }),
);
qe.displayName = "TableBody";
const gs = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("tfoot", {
    ref: s,
    className: i("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
    ...a,
  }),
);
gs.displayName = "TableFooter";
const Q = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("tr", {
    ref: s,
    className: i(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      t,
    ),
    ...a,
  }),
);
Q.displayName = "TableRow";
const b = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("th", {
    ref: s,
    className: i(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      t,
    ),
    ...a,
  }),
);
b.displayName = "TableHead";
const g = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("td", {
    ref: s,
    className: i("p-4 align-middle [&:has([role=checkbox])]:pr-0", t),
    ...a,
  }),
);
g.displayName = "TableCell";
const Ns = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx("caption", {
    ref: s,
    className: i("mt-4 text-sm text-muted-foreground", t),
    ...a,
  }),
);
Ns.displayName = "TableCaption";
const Ge = {
    "0-499": 1,
    "500-999": 2,
    "1000-1499": 3,
    "1500-1999": 4,
    ">2000": 5,
  },
  Je = { "0-24": 1, "25-49": 2, "50-74": 3, "75-99": 4, ">100": 5 },
  Ye = { "Week 1": 1, "Week 2": 2, "Week 3": 3, "Week 4": 4 },
  $ = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  },
  Qe = {
    "0-199": 1,
    "200-399": 2,
    "400-599": 3,
    "600-799": 4,
    "800-999": 5,
    ">1000": 6,
  },
  ys = { Completed: 0, Cancelled: 1 },
  vs = $t,
  ws = Ct,
  ks = kt,
  Xe = o.forwardRef(({ className: t, ...a }, s) =>
    e.jsx(be, {
      ref: s,
      className: i(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        t,
      ),
      ...a,
    }),
  );
Xe.displayName = be.displayName;
const Ze = o.forwardRef(({ className: t, children: a, ...s }, r) =>
  e.jsxs(ks, {
    children: [
      e.jsx(Xe, {}),
      e.jsxs(ge, {
        ref: r,
        className: i(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          t,
        ),
        ...s,
        children: [
          a,
          e.jsxs(wt, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              e.jsx(ze, { className: "h-4 w-4" }),
              e.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
Ze.displayName = ge.displayName;
const et = ({ className: t, ...a }) =>
  e.jsx("div", {
    className: i("flex flex-col space-y-1.5 text-center sm:text-left", t),
    ...a,
  });
et.displayName = "DialogHeader";
const tt = ({ className: t, ...a }) =>
  e.jsx("div", {
    className: i(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t,
    ),
    ...a,
  });
tt.displayName = "DialogFooter";
const st = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(Ne, {
    ref: s,
    className: i("text-lg font-semibold leading-none tracking-tight", t),
    ...a,
  }),
);
st.displayName = Ne.displayName;
const at = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(ye, { ref: s, className: i("text-sm text-muted-foreground", t), ...a }),
);
at.displayName = ye.displayName;
const $s = X(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  T = o.forwardRef(({ className: t, ...a }, s) =>
    e.jsx(ve, { ref: s, className: i($s(), t), ...a }),
  );
T.displayName = ve.displayName;
const w = Rt,
  k = Lt,
  N = o.forwardRef(({ className: t, children: a, ...s }, r) =>
    e.jsxs(we, {
      ref: r,
      className: i(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        t,
      ),
      ...s,
      children: [
        a,
        e.jsx(St, {
          asChild: !0,
          children: e.jsx(Ie, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
N.displayName = we.displayName;
const rt = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(ke, {
    ref: s,
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: e.jsx(Vt, { className: "h-4 w-4" }),
  }),
);
rt.displayName = ke.displayName;
const ot = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx($e, {
    ref: s,
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: e.jsx(Ie, { className: "h-4 w-4" }),
  }),
);
ot.displayName = $e.displayName;
const y = o.forwardRef(
  ({ className: t, children: a, position: s = "popper", ...r }, n) =>
    e.jsx(Tt, {
      children: e.jsxs(Ce, {
        ref: n,
        className: i(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          s === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          t,
        ),
        position: s,
        ...r,
        children: [
          e.jsx(rt, {}),
          e.jsx(Dt, {
            className: i(
              "p-1",
              s === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: a,
          }),
          e.jsx(ot, {}),
        ],
      }),
    }),
);
y.displayName = Ce.displayName;
const Cs = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(Se, {
    ref: s,
    className: i("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...a,
  }),
);
Cs.displayName = Se.displayName;
const u = o.forwardRef(({ className: t, children: a, ...s }, r) =>
  e.jsxs(Te, {
    ref: r,
    className: i(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t,
    ),
    ...s,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Mt, { children: e.jsx(Ae, { className: "h-4 w-4" }) }),
      }),
      e.jsx(Ot, { children: a }),
    ],
  }),
);
u.displayName = Te.displayName;
const Ss = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(De, { ref: s, className: i("-mx-1 my-1 h-px bg-muted", t), ...a }),
);
Ss.displayName = De.displayName;
function Ts({ onSubmit: t }) {
  const [a, s] = o.useState({
      price_bin: 0,
      discount_bin: 0,
      month: 0,
      week: 0,
      distance_bin: 0,
    }),
    [r, n] = o.useState(!1),
    l = (d, m) => {
      s((f) => ({ ...f, [m]: parseInt(d) }));
    },
    c = (d) => {
      d.preventDefault(), t(a), n(!1);
    };
  return e.jsxs(vs, {
    open: r,
    onOpenChange: n,
    children: [
      e.jsx(ws, {
        asChild: !0,
        children: e.jsx(M, { variant: "outline", children: "Predict Record" }),
      }),
      e.jsx(Ze, {
        className: "rounded-lg sm:max-w-[500px]",
        children: e.jsxs("form", {
          onSubmit: c,
          children: [
            e.jsxs(et, {
              className: "py-4 text-left",
              children: [
                e.jsx(st, { children: "Predict Record" }),
                e.jsx(at, {
                  children: "Fill out the form below to predict a record.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-4 items-center gap-4 py-4",
              children: [
                e.jsx(T, { htmlFor: "price_bin", children: "Price" }),
                e.jsxs(w, {
                  onValueChange: (d) => l(d, "price_bin"),
                  required: !0,
                  children: [
                    e.jsx(N, {
                      className: "col-span-3",
                      children: e.jsx(k, {
                        placeholder: "Select Price",
                        id: "price_bin",
                      }),
                    }),
                    e.jsx(y, {
                      children: Object.entries(Ge).map(([d, m]) =>
                        e.jsx(u, { value: m.toString(), children: d }, m),
                      ),
                    }),
                  ],
                }),
                e.jsx(T, { htmlFor: "discount_bin", children: "Discount" }),
                e.jsxs(w, {
                  onValueChange: (d) => l(d, "discount_bin"),
                  required: !0,
                  children: [
                    e.jsx(N, {
                      className: "col-span-3",
                      children: e.jsx(k, {
                        placeholder: "Select Discount",
                        id: "discount_bin",
                      }),
                    }),
                    e.jsx(y, {
                      children: Object.entries(Je).map(([d, m]) =>
                        e.jsx(u, { value: m.toString(), children: d }, m),
                      ),
                    }),
                  ],
                }),
                e.jsx(T, { htmlFor: "month", children: "Month" }),
                e.jsxs(w, {
                  onValueChange: (d) => l(d, "month"),
                  required: !0,
                  children: [
                    e.jsx(N, {
                      className: "col-span-3",
                      children: e.jsx(k, {
                        placeholder: "Select Month",
                        id: "month",
                      }),
                    }),
                    e.jsx(y, {
                      children: Object.entries($).map(([d, m]) =>
                        e.jsx(u, { value: m.toString(), children: d }, m),
                      ),
                    }),
                  ],
                }),
                e.jsx(T, { htmlFor: "week", children: "Week" }),
                e.jsxs(w, {
                  onValueChange: (d) => l(d, "week"),
                  required: !0,
                  children: [
                    e.jsx(N, {
                      className: "col-span-3",
                      children: e.jsx(k, {
                        placeholder: "Select Week",
                        id: "week",
                      }),
                    }),
                    e.jsx(y, {
                      children: Object.entries(Ye).map(([d, m]) =>
                        e.jsx(u, { value: m.toString(), children: d }, m),
                      ),
                    }),
                  ],
                }),
                e.jsx(T, { htmlFor: "distance_bin", children: "Distance" }),
                e.jsxs(w, {
                  onValueChange: (d) => l(d, "distance_bin"),
                  required: !0,
                  children: [
                    e.jsx(N, {
                      className: "col-span-3",
                      children: e.jsx(k, {
                        placeholder: "Select Distance",
                        id: "distance_bin",
                      }),
                    }),
                    e.jsx(y, {
                      children: Object.entries(Qe).map(([d, m]) =>
                        e.jsx(u, { value: m.toString(), children: d }, m),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(tt, {
              children: e.jsx(M, {
                type: "submit",
                className: "font-medium dark:text-black",
                children: "Predict",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ds({
  data: t,
  loading: a,
  handleDelete: s,
  handlePost: r,
  className: n,
}) {
  return e.jsxs(x, {
    className: i("h-[600px] max-h-[600px] overflow-auto", n),
    children: [
      e.jsx(h, {
        children: e.jsxs("div", {
          className: "flex items-end justify-between",
          children: [
            e.jsxs("div", {
              className: "w-fit",
              children: [
                e.jsx(p, {
                  className: "text-xl ",
                  children: "Prediction Table",
                }),
                e.jsx(C, {
                  children: "Record of all predictions made by the model",
                }),
              ],
            }),
            e.jsx(Ts, { onSubmit: r }),
          ],
        }),
      }),
      e.jsxs(j, {
        children: [
          e.jsxs(He, {
            children: [
              e.jsx(Ue, {
                children: e.jsxs(Q, {
                  children: [
                    e.jsx(b, { children: "ID" }),
                    e.jsx(b, { children: "Price Range" }),
                    e.jsx(b, { children: "Discount Range" }),
                    e.jsx(b, { children: "Month" }),
                    e.jsx(b, { children: "Week" }),
                    e.jsx(b, { children: "Distance Range" }),
                    e.jsx(b, { children: "Order Status" }),
                    e.jsx(b, {}),
                  ],
                }),
              }),
              e.jsx(qe, {
                children: t.map((l) =>
                  e.jsxs(
                    Q,
                    {
                      className:
                        "transition-all duration-300 ease-in-out hover:scale-[1.02]",
                      children: [
                        e.jsx(g, { children: l.id }),
                        e.jsx(g, {
                          children: Object.keys(Ge)[l.price_bin - 1],
                        }),
                        e.jsx(g, {
                          children: Object.keys(Je)[l.discount_bin - 1],
                        }),
                        e.jsx(g, { children: Object.keys($)[l.month - 1] }),
                        e.jsx(g, { children: Object.keys(Ye)[l.week - 1] }),
                        e.jsx(g, {
                          children: Object.keys(Qe)[l.distance_bin - 1],
                        }),
                        e.jsx(g, {
                          children: e.jsx("span", {
                            className: `rounded-full px-2 py-1 text-xs font-semibold text-white ${l.order_status === 0 ? "bg-green-500" : "bg-red-500"}`,
                            children: Object.keys(ys)[l.order_status],
                          }),
                        }),
                        e.jsx(g, {
                          children: e.jsx(M, {
                            size: "icon",
                            variant: "outline",
                            onClick: () => s(l.id),
                            children: e.jsx(Ut, {
                              size: 20,
                              className: "fill-red-500",
                            }),
                          }),
                        }),
                      ],
                    },
                    l.id,
                  ),
                ),
              }),
            ],
          }),
          a &&
            e.jsx("div", {
              className: "flex w-full justify-center py-8",
              children: e.jsx(qt, { className: "animate-spin", size: 20 }),
            }),
          t.length === 0 &&
            !a &&
            e.jsx("div", {
              className: "flex w-full justify-center py-8",
              children: e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "No records found",
              }),
            }),
        ],
      }),
    ],
  });
}
function se({ isCurrent: t, className: a }) {
  return [
    { label: "Prediction", path: "/prediction" },
    { label: "Overview", path: "/overview" },
    { label: "Gallery", path: "/gallery" },
  ].map(({ label: r, path: n }) =>
    e.jsx(
      pt,
      {
        to: n,
        className: i(
          `${t(n) ? "rounded border bg-foreground px-2 py-1 font-medium text-white dark:text-black" : "text-foreground/60"} w-[6rem] text-center`,
          a,
        ),
        children: r,
      },
      r,
    ),
  );
}
const Ms = Pt,
  Os = Ft,
  nt = o.forwardRef(
    ({ className: t, align: a = "center", sideOffset: s = 4, ...r }, n) =>
      e.jsx(_t, {
        children: e.jsx(Me, {
          ref: n,
          align: a,
          sideOffset: s,
          className: i(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            t,
          ),
          ...r,
        }),
      }),
  );
nt.displayName = Me.displayName;
function ee() {
  const t = (a) => window.location.pathname === a;
  return e.jsx("header", {
    className:
      "top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky",
    children: e.jsxs("div", {
      className:
        "container flex h-14 max-w-screen-2xl items-center justify-between",
      children: [
        e.jsxs("div", {
          className: "mr-4 hidden md:flex",
          children: [
            e.jsx("img", {
              src: Ee,
              alt: "MKSG Logo",
              className: "w-36 pr-8 dark:invert",
            }),
            e.jsx("nav", {
              className: "flex items-center space-x-3 text-sm",
              children: e.jsx(se, { isCurrent: t }),
            }),
          ],
        }),
        e.jsxs(Ms, {
          children: [
            e.jsx(Os, {
              children: e.jsx(Gt, {
                size: 24,
                className:
                  "rotate-180 cursor-pointer transition-colors hover:opacity-50 md:hidden",
              }),
            }),
            e.jsx(nt, {
              className:
                "ml-8 flex max-w-32 flex-col items-center space-y-2 text-sm md:hidden",
              children: e.jsx(se, { isCurrent: t }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            e.jsx(We, {
              className:
                "font-jetbrains text-right font-mono text-xs text-foreground/60",
            }),
            e.jsx(Ve, {}),
          ],
        }),
      ],
    }),
  });
}
const Rs = (t, a) => {
  const [s, r] = o.useState([]),
    [n, l] = o.useState(!1),
    { toast: c } = V();
  return (
    o.useEffect(() => {
      (async () => {
        l(!0);
        try {
          const m = await Y.get(t);
          r(m.data.reverse());
        } catch (m) {
          console.error(m), c({ description: "Failed to fetch data" });
        } finally {
          l(!1);
        }
      })();
    }, a),
    { data: s, loading: n }
  );
};
function Ls({
  setMonth: t,
  setWeek: a,
  setOrderStatus: s,
  month: r,
  week: n,
  orderStatus: l,
}) {
  return e.jsxs("div", {
    className: "flex gap-2",
    children: [
      e.jsxs(w, {
        onValueChange: t,
        value: r,
        children: [
          e.jsx(N, {
            className: "w-36",
            children: e.jsx(k, {
              children: r ? Object.keys($)[r - 1] : "Select Month",
            }),
          }),
          e.jsxs(y, {
            children: [
              e.jsx(u, { value: null, children: "All" }),
              Object.keys($).map((c, d) =>
                e.jsx(u, { value: d + 1, children: c }, d),
              ),
            ],
          }),
        ],
      }),
      e.jsxs(w, {
        onValueChange: a,
        value: n,
        children: [
          e.jsx(N, {
            className: "w-36",
            children: e.jsx(k, { children: n ? `Week ${n}` : "Select Week" }),
          }),
          e.jsxs(y, {
            children: [
              e.jsx(u, { value: null, children: "All" }),
              [1, 2, 3, 4].map((c) =>
                e.jsxs(u, { value: c, children: ["Week ", c] }, c),
              ),
            ],
          }),
        ],
      }),
      e.jsxs(w, {
        onValueChange: s,
        value: l,
        children: [
          e.jsx(N, {
            className: "w-[188px]",
            children: e.jsx(k, {
              children:
                l !== null
                  ? l == 1
                    ? "Cancelled"
                    : "Completed"
                  : "Select Order Status",
            }),
          }),
          e.jsxs(y, {
            children: [
              e.jsx(u, { value: null, children: "All" }),
              e.jsx(u, { value: "0", children: "Completed" }),
              e.jsx(u, { value: "1", children: "Cancelled" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function J({ title: t, dataLength: a, className: s }) {
  return e.jsxs(x, {
    className:
      "transform overflow-clip text-center transition-all duration-500 ease-in-out hover:scale-[1.03] ",
    children: [
      e.jsx("div", { className: i("py-2", s) }),
      e.jsx(h, {
        className:
          "flex flex-row items-center justify-between space-y-0 pb-6 sm:pb-0",
        children: e.jsx(p, {
          className: "h-8 w-full text-sm font-semibold",
          children: t,
        }),
      }),
      e.jsx(j, {
        children: e.jsx("div", {
          className: "font-ubuntu text-xl font-semibold sm:text-3xl",
          children: a,
        }),
      }),
    ],
  });
}
function _s({ data: t }) {
  const a = t ? t.filter((l) => l.order_status === 0).length : 0,
    s = t ? t.filter((l) => l.order_status === 1).length : 0,
    r = [
      { name: "Completed", value: a },
      { name: "Cancelled", value: s },
    ],
    n = ["#22c55e", "#ef4444"];
  return e.jsx(A, {
    children: e.jsxs(Yt, {
      width: 400,
      height: 400,
      children: [
        e.jsx(Qt, {
          data: r,
          innerRadius: 60,
          outerRadius: 80,
          fill: "#8884d8",
          paddingAngle: a === 0 || s === 0 ? 0 : 5,
          dataKey: "value",
          stroke: "transparent",
          animationBegin: 15,
          labelLine: !1,
          children: r.map((l, c) =>
            e.jsx(Xt, { fill: n[c % n.length] }, `cell-${c}`),
          ),
        }),
        e.jsx(R, {
          content: ({ payload: l }) =>
            l.length === 0
              ? null
              : e.jsxs("div", {
                  className:
                    "rounded-md bg-background/95 p-2 text-sm shadow-md",
                  children: [
                    e.jsxs("p", {
                      className: "font-medium text-foreground",
                      children: ["Order Status: ", l[0].payload.name],
                    }),
                    e.jsx("div", {
                      className: "flex flex-col text-muted-foreground",
                      children: e.jsxs("p", {
                        children: ["Count: ", l[0].payload.value],
                      }),
                    }),
                  ],
                }),
        }),
      ],
    }),
  });
}
function ae({ className: t, month: a, week: s, data: r }) {
  return e.jsxs(x, {
    className: i(" overflow-hidden", t),
    children: [
      e.jsxs(h, {
        children: [
          e.jsx(p, {
            className: "text-xl font-semibold",
            children: "Order Status Distribution",
          }),
          e.jsxs(C, {
            children: [
              a ? `For ${Object.keys($)[a - 1]}` : "For all months",
              " ",
              s && `- Week ${s}`,
            ],
          }),
        ],
      }),
      e.jsxs(j, {
        className: "h-[231px] w-full pl-0",
        children: [
          r &&
            r.length === 0 &&
            e.jsx("div", {
              className: "pt-20 text-center text-sm text-gray-500",
              children: "No data available",
            }),
          e.jsx(_s, { data: r }),
        ],
      }),
    ],
  });
}
const Ps = (t) => {
    const a = {};
    return (
      t.forEach((s) => {
        const r = s.distance_bin;
        a[r] || (a[r] = { bin: r, completed: 0, cancelled: 0 }),
          s.order_status === 0
            ? (a[r].completed += 1)
            : s.order_status === 1 && (a[r].cancelled += 1);
      }),
      Object.values(a)
    );
  },
  re = {
    1: "0-199",
    2: "200-399",
    3: "400-599",
    4: "600-799",
    5: "800-999",
    6: ">1000",
  };
function Fs({ data: t }) {
  const a = Ps(t);
  return (
    t.length > 0 &&
    e.jsx(A, {
      width: "100%",
      height: 275,
      children: e.jsxs(Z, {
        data: a,
        children: [
          e.jsx(_, { stroke: "hsl(var(--border))", strokeDasharray: "3 3" }),
          e.jsx(P, {
            dataKey: "bin",
            stroke: "#888888",
            fontSize: 12,
            tickLine: !1,
            axisLine: !1,
            tickFormatter: (s) => re[s],
            interval: 0,
          }),
          e.jsx(F, {
            stroke: "#888888",
            fontSize: 12,
            tickLine: !1,
            axisLine: !1,
            tickFormatter: (s) => `${s}`,
            interval: 0,
          }),
          e.jsx(R, {
            content: ({ payload: s }) =>
              s.length === 0
                ? null
                : e.jsxs("div", {
                    className:
                      "rounded-md bg-background/95 p-2 text-sm shadow-md",
                    children: [
                      e.jsxs("p", {
                        className: "font-medium text-foreground",
                        children: ["Distance Range: ", re[s[0].payload.bin]],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col text-muted-foreground",
                        children: [
                          e.jsxs("p", {
                            children: ["Completed: ", s[0].payload.completed],
                          }),
                          e.jsxs("p", {
                            children: ["Cancelled: ", s[0].payload.cancelled],
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
          e.jsx(D, {
            dataKey: "completed",
            fill: "#22c55e",
            name: "Completed Orders",
            stackId: "a",
          }),
          e.jsx(D, {
            dataKey: "cancelled",
            fill: "#ef4444",
            name: "Cancelled Orders",
            stackId: "a",
          }),
        ],
      }),
    })
  );
}
function oe({ className: t, month: a, data: s, week: r }) {
  return e.jsxs(x, {
    className: i("h-[400px] overflow-hidden", t),
    children: [
      e.jsxs(h, {
        children: [
          e.jsx(p, {
            className: "text-xl font-semibold",
            children: "Completed vs Cancelled by Distance",
          }),
          e.jsxs(C, {
            children: [
              a ? `For ${Object.keys($)[a - 1]}` : "For all months",
              r && ` - Week ${r}`,
            ],
          }),
        ],
      }),
      e.jsxs(j, {
        className: "w-full pl-0",
        children: [
          s &&
            s.length === 0 &&
            e.jsx("div", {
              className: "pt-20 text-center text-sm text-gray-500",
              children: "No data available",
            }),
          e.jsx(Fs, { data: s }),
        ],
      }),
    ],
  });
}
const As = (t) => {
    const a = {};
    return (
      t.forEach((s) => {
        const r = s.month;
        a[r] || (a[r] = { bin: r, completed: 0, cancelled: 0 }),
          s.order_status === 0
            ? (a[r].completed += 1)
            : s.order_status === 1 && (a[r].cancelled += 1);
      }),
      Object.values(a)
    );
  },
  z = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
function zs({ data: t }) {
  const a = As(t),
    s = a.length === 1;
  return (
    t.length > 0 &&
    e.jsx(A, {
      width: "100%",
      height: 250,
      children: s
        ? e.jsxs(Zt, {
            data: a,
            children: [
              e.jsx(_, {
                stroke: "hsl(var(--border))",
                strokeDasharray: "3 3",
              }),
              e.jsx(P, {
                dataKey: "bin",
                stroke: "#888888",
                fontSize: 12,
                tickLine: !1,
                axisLine: !1,
                tickFormatter: (r) => z[r],
                textAnchor: "end",
                interval: 0,
              }),
              e.jsx(F, {
                stroke: "#888888",
                fontSize: 12,
                tickLine: !1,
                axisLine: !1,
                tickFormatter: (r) => `${r}`,
                interval: 0,
              }),
              e.jsx(R, {
                content: ({ payload: r }) =>
                  !r || r.length === 0
                    ? null
                    : e.jsxs("div", {
                        className:
                          "rounded-md bg-background/95 p-2 text-sm shadow-md",
                        children: [
                          e.jsxs("p", {
                            className: "font-medium text-foreground",
                            children: ["Month: ", z[r[0].payload.bin]],
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col text-muted-foreground",
                            children: [
                              e.jsxs("p", {
                                children: [
                                  "Completed: ",
                                  r[0].payload.completed,
                                ],
                              }),
                              e.jsxs("p", {
                                children: [
                                  "Cancelled: ",
                                  r[0].payload.cancelled,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
              e.jsx(D, {
                dataKey: "completed",
                fill: "#22c55e",
                name: "Completed Orders",
              }),
              e.jsx(D, {
                dataKey: "cancelled",
                fill: "#ef4444",
                name: "Cancelled Orders",
              }),
            ],
          })
        : e.jsxs(es, {
            data: a,
            children: [
              e.jsx(_, {
                stroke: "hsl(var(--border))",
                strokeDasharray: "3 3",
              }),
              e.jsx(P, {
                dataKey: "bin",
                stroke: "#888888",
                fontSize: 12,
                tickLine: !1,
                axisLine: !1,
                tickFormatter: (r) => z[r],
                textAnchor: "end",
                interval: 0,
              }),
              e.jsx(F, {
                stroke: "#888888",
                fontSize: 12,
                tickLine: !1,
                axisLine: !1,
                tickFormatter: (r) => `${r}`,
                interval: 0,
              }),
              e.jsx(R, {
                content: ({ payload: r }) =>
                  !r || r.length === 0
                    ? null
                    : e.jsxs("div", {
                        className:
                          "rounded-md bg-background/95 p-2 text-sm shadow-md",
                        children: [
                          e.jsxs("p", {
                            className: "font-medium text-foreground",
                            children: ["Month: ", z[r[0].payload.bin]],
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col text-muted-foreground",
                            children: [
                              e.jsxs("p", {
                                children: [
                                  "Completed: ",
                                  r[0].payload.completed,
                                ],
                              }),
                              e.jsxs("p", {
                                children: [
                                  "Cancelled: ",
                                  r[0].payload.cancelled,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
              e.jsx(B, {
                dataKey: "cancelled",
                fill: "#ef4444",
                stroke: "#ef4444",
                name: "Cancelled Orders",
                stackId: "a",
                type: "monotone",
              }),
              e.jsx(B, {
                dataKey: "completed",
                fill: "#22c55e",
                stroke: "#22c55e",
                name: "Completed Orders",
                stackId: "a",
                type: "monotone",
              }),
            ],
          }),
    })
  );
}
function Is({ className: t, month: a, data: s, week: r }) {
  return e.jsxs(x, {
    className: i("h-[400px] overflow-hidden", t),
    children: [
      e.jsxs(h, {
        children: [
          e.jsx(p, {
            className: "text-xl font-semibold",
            children: "Completed vs Cancelled by Month",
          }),
          e.jsxs(C, {
            children: [
              a ? `For ${Object.keys($)[a - 1]}` : "For all months",
              r && ` - Week ${r}`,
            ],
          }),
        ],
      }),
      e.jsxs(j, {
        className: "w-full pl-0",
        children: [
          s &&
            s.length === 0 &&
            e.jsx("div", {
              className: "pt-20 text-center text-sm text-gray-500",
              children: "No data available",
            }),
          e.jsx(zs, { data: s }),
        ],
      }),
    ],
  });
}
const Es = (t) => {
    const a = {};
    return (
      t.forEach((s) => {
        const r = s.week;
        a[r] || (a[r] = { bin: r, completed: 0, cancelled: 0 }),
          s.order_status === 0
            ? (a[r].completed += 1)
            : s.order_status === 1 && (a[r].cancelled += 1);
      }),
      Object.values(a)
    );
  },
  ne = { 1: "Week 1", 2: "Week 2", 3: "Week 3", 4: "Week 4" };
function Ws({ data: t }) {
  const a = Es(t),
    s = a.length === 1;
  return (
    t.length > 0 &&
    e.jsx(A, {
      width: "100%",
      height: 250,
      children: e.jsxs(Z, {
        data: a,
        children: [
          e.jsx(_, { stroke: "hsl(var(--border))", strokeDasharray: "3 3" }),
          e.jsx(P, {
            dataKey: "bin",
            stroke: "#888888",
            fontSize: 12,
            tickLine: !1,
            axisLine: !1,
            tickFormatter: (r) => ne[r],
            textAnchor: "end",
            interval: 0,
          }),
          e.jsx(F, {
            stroke: "#888888",
            fontSize: 12,
            tickLine: !1,
            axisLine: !1,
            tickFormatter: (r) => `${r}`,
            interval: 0,
          }),
          e.jsx(R, {
            content: ({ payload: r }) =>
              !r || r.length === 0
                ? null
                : e.jsxs("div", {
                    className:
                      "rounded-md bg-background/95 p-2 text-sm shadow-md",
                    children: [
                      e.jsx("p", {
                        className: "font-medium text-foreground",
                        children: ne[r[0].payload.bin],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col text-muted-foreground",
                        children: [
                          e.jsxs("p", {
                            children: ["Completed: ", r[0].payload.completed],
                          }),
                          e.jsxs("p", {
                            children: ["Cancelled: ", r[0].payload.cancelled],
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
          s
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(D, {
                    dataKey: "cancelled",
                    fill: "#ef4444",
                    stroke: "transparent",
                    name: "Cancelled Orders",
                  }),
                  e.jsx(D, {
                    dataKey: "completed",
                    fill: "#22c55e",
                    stroke: "transparent",
                    name: "Completed Orders",
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(B, {
                    dataKey: "cancelled",
                    fill: "#ef4444",
                    stroke: "#ef4444",
                    name: "Cancelled Orders",
                    stackId: "a",
                  }),
                  e.jsx(B, {
                    dataKey: "completed",
                    fill: "#22c55e",
                    stroke: "#22c55e",
                    name: "Completed Orders",
                    stackId: "a",
                  }),
                ],
              }),
        ],
      }),
    })
  );
}
function le({ className: t, month: a, data: s, week: r }) {
  return e.jsxs(x, {
    className: i("h-[400px] overflow-hidden", t),
    children: [
      e.jsxs(h, {
        children: [
          e.jsx(p, {
            className: "text-xl font-semibold",
            children: "Completed vs Cancelled by Week",
          }),
          e.jsxs(C, {
            children: [
              a ? `For ${Object.keys($)[a - 1]}` : "For all months",
              r && ` - Week ${r}`,
            ],
          }),
        ],
      }),
      e.jsxs(j, {
        className: "w-full pl-0",
        children: [
          s &&
            s.length === 0 &&
            e.jsx("div", {
              className: "pt-20 text-center text-sm text-gray-500",
              children: "No data available",
            }),
          e.jsx(Ws, { data: s }),
        ],
      }),
    ],
  });
}
const Bs = (t, a, s) => {
  const r = new URLSearchParams();
  return (
    t && r.append("month", t),
    a && r.append("week", a),
    s !== null && r.append("order_status", s),
    `https://mksg-clothing.onrender.com/api/predictions/?${r.toString()}`
  );
};
function de() {
  const [t, a] = o.useState(null),
    [s, r] = o.useState(null),
    [n, l] = o.useState(null),
    [c, d] = o.useState(!1),
    m = o.useMemo(() => Bs(t, s, n), [t, s, n]),
    { data: f, loading: S } = Rs(m, [m, c]),
    { toast: O } = V(),
    ft = async (v) => {
      try {
        await Y.post(m, v),
          O({ description: "New record has been added successfully" }),
          d(!c);
      } catch (H) {
        console.error(H), O({ description: "Failed to add new record" });
      }
    },
    xt = async (v) => {
      try {
        await Y.delete(
          `https://mksg-clothing.onrender.com/api/predictions/${v}/`,
        ),
          O({
            description: `You have successfully deleted the record with ID ${v}`,
          }),
          d(!c);
      } catch (H) {
        console.error(H), O({ description: "Failed to delete the record" });
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(ee, {}),
      e.jsx("main", {
        className:
          "font-ubuntu container mx-auto flex min-h-[50vh] items-center justify-center text-base",
        children: e.jsxs("section", {
          className: "my-4 h-full w-full",
          children: [
            e.jsxs("div", {
              className:
                "mb-2 flex h-fit w-full flex-col justify-between md:mb-4 md:flex-row md:items-end",
              children: [
                e.jsxs("div", {
                  className: "mb-2 md:mb-0",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xl font-semibold text-foreground md:text-2xl",
                      children: "Prediction Dashboard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground md:text-base",
                      children: "Here you can predict order status.",
                    }),
                  ],
                }),
                e.jsx(Ls, {
                  setMonth: a,
                  setWeek: r,
                  setOrderStatus: l,
                  month: t,
                  week: s,
                  orderStatus: n,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 gap-4 lg:grid-cols-5",
              children: [
                e.jsxs("div", {
                  className: "grid gap-2 lg:col-span-3 lg:gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "row-span-1 grid grid-cols-3 gap-2 lg:gap-4",
                      children: [
                        e.jsx(J, {
                          title: "Total Orders",
                          dataLength: f.length,
                          className: "bg-background invert",
                        }),
                        e.jsx(J, {
                          title: "Completed Orders",
                          dataLength: f.filter((v) => v.order_status === 0)
                            .length,
                          className: "bg-green-500",
                        }),
                        e.jsx(J, {
                          title: "Cancelled Orders",
                          dataLength: f.filter((v) => v.order_status === 1)
                            .length,
                          className: "bg-red-500",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "row-span-2 grid flex-col gap-2 md:grid-cols-2 lg:col-span-2 lg:hidden lg:gap-4",
                      children: [
                        e.jsx(oe, { month: t, week: s, data: f }),
                        e.jsx(ae, { month: t, week: s, data: f }),
                      ],
                    }),
                    e.jsx(Is, { month: t, week: s, data: f }),
                    e.jsx(le, {
                      month: t,
                      week: s,
                      data: f,
                      className: "lg:hidden",
                    }),
                    e.jsx(Ds, {
                      data: f,
                      loading: S,
                      handleDelete: xt,
                      handlePost: ft,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "row-span-2 hidden flex-col gap-2 lg:col-span-2 lg:flex lg:gap-4",
                  children: [
                    e.jsx(oe, { month: t, week: s, data: f }),
                    e.jsx(ae, { month: t, week: s, data: f }),
                    e.jsx(le, { month: t, week: s, data: f }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ks() {
  return e.jsxs("div", {
    className: "mb-2 grid grid-cols-2 gap-2 md:mb-4 md:gap-4 lg:grid-cols-4",
    children: [
      e.jsxs(x, {
        children: [
          e.jsx(h, {
            className:
              "flex flex-row items-center justify-between space-y-0 pb-2",
            children: e.jsx(p, {
              className: "text-sm font-semibold",
              children: "Total Sales",
            }),
          }),
          e.jsxs(j, {
            children: [
              e.jsx("div", {
                className: "font-ubuntu text-2xl font-semibold",
                children: "₱15,500",
              }),
              e.jsx("p", {
                className: "mt-1 text-xs text-green-500",
                children: "+20.1% from last month",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(h, {
            className:
              "flex flex-row items-center justify-between space-y-0 pb-2",
            children: e.jsx(p, {
              className: "text-sm font-semibold",
              children: "Total Visitors",
            }),
          }),
          e.jsxs(j, {
            children: [
              e.jsx("div", {
                className: "font-ubuntu text-2xl font-semibold",
                children: "256",
              }),
              e.jsx("p", {
                className: "mt-1 text-xs text-green-500",
                children: "+5.3% from yesterday",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(h, {
            className:
              "flex flex-row items-center justify-between space-y-0 pb-2",
            children: e.jsx(p, {
              className: "text-sm font-semibold",
              children: "Total Orders",
            }),
          }),
          e.jsxs(j, {
            children: [
              e.jsx("div", {
                className: "font-ubuntu text-2xl font-semibold",
                children: "153",
              }),
              e.jsx("p", {
                className: "mt-1 text-xs text-green-500",
                children: "+10.13% from last month",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(h, {
            className:
              "flex flex-row items-center justify-between space-y-0 pb-2",
            children: e.jsx(p, {
              className: "text-sm font-semibold",
              children: "Cancelled Orders",
            }),
          }),
          e.jsxs(j, {
            children: [
              e.jsx("div", {
                className: "font-ubuntu text-2xl font-semibold",
                children: "12",
              }),
              e.jsx("p", {
                className: "mt-1 text-xs text-red-500",
                children: "+75% from last month (3)",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Vs = [
  { hour: "00", traffic: Math.floor(Math.random() * 50) },
  { hour: "01", traffic: Math.floor(Math.random() * 50) },
  { hour: "02", traffic: Math.floor(Math.random() * 50) },
  { hour: "03", traffic: Math.floor(Math.random() * 50) },
  { hour: "04", traffic: Math.floor(Math.random() * 100) },
  { hour: "05", traffic: Math.floor(Math.random() * 100) },
  { hour: "06", traffic: Math.floor(Math.random() * 100) },
  { hour: "07", traffic: Math.floor(Math.random() * 150) },
  { hour: "08", traffic: Math.floor(Math.random() * 150) },
  { hour: "09", traffic: Math.floor(Math.random() * 150) },
  { hour: "10", traffic: Math.floor(Math.random() * 200) },
  { hour: "11", traffic: Math.floor(Math.random() * 200) },
  { hour: "12", traffic: Math.floor(Math.random() * 200) },
  { hour: "13", traffic: Math.floor(Math.random() * 200) },
  { hour: "14", traffic: Math.floor(Math.random() * 200) },
  { hour: "15", traffic: Math.floor(Math.random() * 200) },
  { hour: "16", traffic: Math.floor(Math.random() * 200) },
  { hour: "17", traffic: Math.floor(Math.random() * 200) },
  { hour: "18", traffic: Math.floor(Math.random() * 150) },
  { hour: "19", traffic: Math.floor(Math.random() * 150) },
  { hour: "20", traffic: Math.floor(Math.random() * 150) },
  { hour: "21", traffic: Math.floor(Math.random() * 100) },
  { hour: "22", traffic: Math.floor(Math.random() * 100) },
  { hour: "23", traffic: Math.floor(Math.random() * 100) },
];
function Hs() {
  return e.jsx(A, {
    width: "100%",
    aspect: 5 / 2,
    children: e.jsxs(Z, {
      data: Vs,
      children: [
        e.jsx(P, {
          dataKey: "hour",
          stroke: "#888888",
          fontSize: 12,
          tickLine: !1,
          axisLine: !1,
          interval: () => (window.width < 768 ? 2 : 0),
        }),
        e.jsx(F, {
          stroke: "#888888",
          fontSize: 12,
          tickLine: !1,
          axisLine: !1,
          tickFormatter: (t) => `${t}`,
          interval: 0,
        }),
        e.jsx(_, { stroke: "hsl(var(--border))", strokeDasharray: "3 3" }),
        e.jsx(D, {
          dataKey: "traffic",
          fill: "hsl(var(--primary))",
          radius: [4, 4, 0, 0],
          classhour: "fill-primary",
          strokeWidth: 1.5,
        }),
        e.jsx(R, {
          content: ({ payload: t }) =>
            t.length === 0
              ? null
              : e.jsxs("div", {
                  className:
                    "rounded-md bg-background/95 p-2 text-sm shadow-md",
                  children: [
                    e.jsxs("p", {
                      className: "font-medium text-foreground",
                      children: [t[0].payload.hour, ":00"],
                    }),
                    e.jsxs("p", {
                      className: "text-muted-foreground",
                      children: ["Traffic: ", t[0].payload.traffic],
                    }),
                  ],
                }),
        }),
      ],
    }),
  });
}
function Us() {
  return e.jsx("div", {
    className: "col-span-5 h-fit overflow-hidden",
    children: e.jsxs(x, {
      className: "h-full",
      children: [
        e.jsxs(h, {
          children: [
            e.jsx(p, {
              className: "text-xl font-semibold md:text-2xl",
              children: "Visitors Projection",
            }),
            e.jsx(C, { children: "Today's projected visitors" }),
          ],
        }),
        e.jsx(j, { className: "pl-0", children: e.jsx(Hs, {}) }),
      ],
    }),
  });
}
function qs() {
  const [t, a] = o.useState([]),
    [s, r] = o.useState("");
  o.useEffect(() => {
    (async () => {
      try {
        const m = await (await fetch("database.xml")).text(),
          f = new DOMParser()
            .parseFromString(m, "text/xml")
            .getElementsByTagName("toDo"),
          S = Array.from(f).map((O) => O.getAttribute("task"));
        a(S);
      } catch (d) {
        console.error(d);
      }
    })();
  }, []);
  const n = (c) => {
      c.preventDefault();
      const d = U(c.target);
      U.ajax({
        type: "POST",
        url: d.attr("action"),
        data: d.serialize(),
        success: (m) => {
          console.log(m), a((f) => [...f, s]), r("");
        },
        error: (m, f, S) => {
          console.error(S);
        },
      });
    },
    l = (c) => {
      U.ajax({
        type: "POST",
        url: "assets/handleDoneTask.php",
        data: { index: c },
        success: (d) => {
          console.log(d);
          const m = t.filter((f, S) => S !== c);
          a(m);
        },
        error: (d, m, f) => {
          console.error(f);
        },
      });
    };
  return e.jsx("div", {
    className: "col-span-5 h-fit lg:col-span-3",
    children: e.jsxs(x, {
      className: "h-full",
      children: [
        e.jsxs(h, {
          children: [
            e.jsx(p, {
              className: "md:text text-xl font-semibold",
              children: "To Do List",
            }),
            e.jsxs(C, { children: ["You have ", t.length, " pending tasks"] }),
          ],
        }),
        e.jsxs(j, {
          children: [
            e.jsxs("form", {
              action: "assets/handleAddTask.php",
              method: "POST",
              onSubmit: n,
              className: "flex w-full items-center space-x-2",
              children: [
                e.jsx(K, {
                  value: s,
                  name: "task",
                  type: "text",
                  placeholder: "Enter you task...",
                  maxLength: 25,
                  onChange: (c) => r(c.target.value),
                  required: !0,
                }),
                e.jsx(M, {
                  className: "bg-primary hover:bg-primary/70",
                  type: "submit",
                  children: "Add Task",
                }),
              ],
            }),
            e.jsx("ul", {
              children: t.map((c, d) =>
                e.jsxs(
                  "li",
                  {
                    className: "flex items-center space-x-2 border-b py-5",
                    children: [
                      e.jsx(T, {
                        htmlFor: d,
                        className: "w-full",
                        children: c,
                      }),
                      e.jsx(Jt, {
                        onClick: () => l(d),
                        size: 24,
                        className:
                          "cursor-pointer transition-colors hover:opacity-50",
                        color: "hsl(var(--primary))",
                      }),
                    ],
                  },
                  d,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Gs() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(ee, {}),
      e.jsx("main", {
        className:
          "font-ubuntu container mx-auto flex min-h-[50vh] items-center justify-center text-base",
        children: e.jsxs("section", {
          className: "my-4 h-full w-full",
          children: [
            e.jsx("div", {
              className:
                "mb-2 flex h-fit w-full flex-col justify-between md:mb-4 md:flex-row md:items-end",
              children: e.jsxs("div", {
                className: "mb-2 md:mb-0",
                children: [
                  e.jsx("p", {
                    className:
                      "text-xl font-semibold text-foreground md:text-2xl",
                    children: "Overview",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground md:text-base",
                    children: "Welcome to Makisig Clothing",
                  }),
                ],
              }),
            }),
            e.jsx(Ks, {}),
            e.jsxs("div", {
              className:
                "grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-8",
              children: [e.jsx(Us, {}), e.jsx(qs, {})],
            }),
          ],
        }),
      }),
    ],
  });
}
function Js() {
  return e.jsxs(e.Fragment, {
    children: [e.jsx(ee, {}), e.jsx("div", { children: "Gallery Page" })],
  });
}
const Ys = At,
  lt = o.forwardRef(({ className: t, ...a }, s) =>
    e.jsx(Oe, {
      ref: s,
      className: i(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t,
      ),
      ...a,
    }),
  );
lt.displayName = Oe.displayName;
const Qs = X(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  dt = o.forwardRef(({ className: t, variant: a, ...s }, r) =>
    e.jsx(Re, { ref: r, className: i(Qs({ variant: a }), t), ...s }),
  );
dt.displayName = Re.displayName;
const Xs = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(Le, {
    ref: s,
    className: i(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t,
    ),
    ...a,
  }),
);
Xs.displayName = Le.displayName;
const it = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(_e, {
    ref: s,
    className: i(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t,
    ),
    "toast-close": "",
    ...a,
    children: e.jsx(ze, { className: "h-4 w-4" }),
  }),
);
it.displayName = _e.displayName;
const ct = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(Pe, { ref: s, className: i("text-sm font-semibold", t), ...a }),
);
ct.displayName = Pe.displayName;
const mt = o.forwardRef(({ className: t, ...a }, s) =>
  e.jsx(Fe, { ref: s, className: i("text-sm opacity-90", t), ...a }),
);
mt.displayName = Fe.displayName;
function Zs() {
  const { toasts: t } = V();
  return e.jsxs(Ys, {
    children: [
      t.map(function ({ id: a, title: s, description: r, action: n, ...l }) {
        return e.jsxs(
          dt,
          {
            ...l,
            children: [
              e.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && e.jsx(ct, { children: s }),
                  r && e.jsx(mt, { children: r }),
                ],
              }),
              n,
              e.jsx(it, {}),
            ],
          },
          a,
        );
      }),
      e.jsx(lt, {}),
    ],
  });
}
const ea = jt([
  { path: "/", element: e.jsx(bs, {}) },
  { path: "/prediction", element: e.jsx(de, {}) },
  { path: "/overview", element: e.jsx(Gs, {}) },
  { path: "/gallery", element: e.jsx(Js, {}) },
  { path: "*", element: e.jsx(de, {}) },
]);
ht.createRoot(document.getElementById("root")).render(
  e.jsx(ut.StrictMode, {
    children: e.jsxs(ms, {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: [e.jsx(bt, { router: ea }), e.jsx(Zs, {})],
    }),
  }),
);