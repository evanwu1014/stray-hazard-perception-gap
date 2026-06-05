import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 路由切換時立即滾動回頂部，避免殘留滾動動畫
    });
  }, [pathname]);

  return null;
}
