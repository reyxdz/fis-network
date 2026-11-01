import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { CctvPage } from "./pages/CctvPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { InternetPage } from "./pages/InternetPage";
import { SolarPage } from "./pages/SolarPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="internet" element={<InternetPage />} />
        <Route path="solar" element={<SolarPage />} />
        <Route path="cctv" element={<CctvPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
