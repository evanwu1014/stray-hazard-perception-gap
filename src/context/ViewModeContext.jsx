import { createContext, useContext, useState, useEffect } from "react";

const ViewModeContext = createContext();

export function ViewModeProvider({ children }) {
  // 從 localStorage 讀取先前儲存的檢視模式，預設為行動版 "mobile"
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "mobile";
  });

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
    
    // 動態修改 meta viewport 以達到一鍵切換電腦版/行動版的效果
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      if (viewMode === "desktop") {
        // 設定強制寬度 1200px，並縮放至 0.3 倍（適合一般手機看電腦版），同時保留縮放功能
        viewportMeta.setAttribute("content", "width=1200, initial-scale=0.3, maximum-scale=3.0, user-scalable=yes");
        document.body.classList.add("simulate-desktop");
      } else {
        // 標準行動端響應式 viewport
        viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
        document.body.classList.remove("simulate-desktop");
      }
    }
  }, [viewMode]);

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "mobile" ? "desktop" : "mobile"));
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useViewMode() {
  return useContext(ViewModeContext);
}
