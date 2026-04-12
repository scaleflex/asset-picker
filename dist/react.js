import { forwardRef as R, useRef as u, useLayoutEffect as w, useImperativeHandle as O, useEffect as L, createElement as h, createContext as I, useState as b, useCallback as x, useMemo as S, useContext as j } from "react";
typeof customElements < "u" && import("./define.js");
const H = R(
  function({ config: P, open: o, onSelect: i, onSelectWithFolders: m, onCancel: k, className: t, style: r }, l) {
    const n = u(null), a = u(i), f = u(m), v = u(k);
    return w(() => {
      a.current = i, f.current = m, v.current = k;
    }), O(l, () => ({
      open() {
        var e;
        (e = n.current) == null || e.open();
      },
      close() {
        var e;
        (e = n.current) == null || e.close();
      }
    })), w(() => {
      const e = n.current;
      e && (e.config = P);
    }, [P]), L(() => {
      const e = n.current;
      e && (o === !0 ? e.open() : o === !1 && e.close());
    }, [o]), L(() => {
      const e = n.current;
      if (!e) return;
      const C = (c) => {
        var E, y, A;
        const p = c.detail;
        (E = a.current) == null || E.call(a, p.assets, p.folders), ((y = p.folders) == null ? void 0 : y.length) > 0 && ((A = f.current) == null || A.call(f, { assets: p.assets, folders: p.folders }));
      }, d = () => {
        var c;
        (c = v.current) == null || c.call(v);
      };
      return e.addEventListener("ap-select", C), e.addEventListener("ap-cancel", d), () => {
        e.removeEventListener("ap-select", C), e.removeEventListener("ap-cancel", d);
      };
    }, []), h("sfx-asset-picker", {
      ref: n,
      className: t,
      style: r
    });
  }
), g = I(null);
function q({ config: s, children: P }) {
  const [o, i] = b(!1), [m, k] = b(s), t = u(null), r = u(null), l = u(null), n = u(null), a = x((d) => {
    r.current && (r.current("cancelled"), t.current = null, r.current = null);
    const { onSelect: c, onCancel: p, ...E } = d ?? {};
    return k({ ...s, ...E }), i(!0), l.current = c ?? null, n.current = p ?? null, c ? Promise.resolve([]) : new Promise((y, A) => {
      t.current = y, r.current = A;
    });
  }, [s]), f = x(() => {
    r.current && r.current("cancelled"), t.current = null, r.current = null, l.current = null, n.current = null, i(!1);
  }, []), v = x((d, c) => {
    try {
      l.current ? l.current(d, c) : t.current && t.current(d);
    } finally {
      t.current = null, r.current = null, l.current = null, n.current = null, i(!1);
    }
  }, []), e = x(() => {
    try {
      n.current ? n.current() : r.current && r.current("cancelled");
    } finally {
      t.current = null, r.current = null, l.current = null, n.current = null, i(!1);
    }
  }, []), C = S(() => ({ open: a, close: f, isOpen: o }), [a, f, o]);
  return h(
    g.Provider,
    { value: C },
    P,
    h(H, {
      config: m,
      open: o,
      onSelect: v,
      onCancel: e
    })
  );
}
function z() {
  const s = j(g);
  if (!s)
    throw new Error(
      "useAssetPicker() must be used inside <AssetPickerProvider>. Wrap your app (or layout) with <AssetPickerProvider config={...}>."
    );
  return s;
}
export {
  H as AssetPicker,
  q as AssetPickerProvider,
  z as useAssetPicker
};
