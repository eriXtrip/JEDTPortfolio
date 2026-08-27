import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { SplashScreen } from "@/components/SplashScreen";
import MouseEffects from "@/components/originkit/ui/clickeffects";


function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("splashShown");
  });

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem("splashShown", "true");
    }
  }, [showSplash]);

  return (
    <>
      <Toaster />
      <div className="fixed inset-0 z-[10000] pointer-events-none">
        <MouseEffects
          interactionMode="burst"
          color="#ffc01d"
          duration={0.4}
          showLabel={false}
          effectSize={80}
        />
      </div>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
