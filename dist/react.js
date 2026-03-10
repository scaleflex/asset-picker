import { forwardRef as h, useRef as u, useLayoutEffect as p, useImperativeHandle as y, useEffect as m, createElement as A } from "react";
typeof customElements < "u" && import("./define.js");
const x = h(
  function({ config: o, open: c, onSelect: i, onCancel: l, className: E, style: v }, L) {
    const t = u(null), r = u(i), n = u(l);
    return p(() => {
      r.current = i, n.current = l;
    }), y(L, () => ({
      open() {
        var e;
        (e = t.current) == null || e.open();
      },
      close() {
        var e;
        (e = t.current) == null || e.close();
      }
    })), p(() => {
      const e = t.current;
      e && (e.config = o);
    }, [o]), m(() => {
      const e = t.current;
      e && (c === !0 ? e.open() : c === !1 && e.close());
    }, [c]), m(() => {
      const e = t.current;
      if (!e) return;
      const a = (s) => {
        var d;
        const k = s.detail;
        (d = r.current) == null || d.call(r, k.assets);
      }, f = () => {
        var s;
        (s = n.current) == null || s.call(n);
      };
      return e.addEventListener("ap-select", a), e.addEventListener("ap-cancel", f), () => {
        e.removeEventListener("ap-select", a), e.removeEventListener("ap-cancel", f);
      };
    }, []), A("asset-picker", {
      ref: t,
      className: E,
      style: v
    });
  }
);
export {
  x as AssetPicker
};
