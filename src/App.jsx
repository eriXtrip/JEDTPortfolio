import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { SplashScreen } from "@/components/SplashScreen";


function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("splashShown");
  });

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem("splashShown", "true");
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <>
        <Toaster />
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </>
    );
  }

  return (
    <>
      <Toaster />
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
