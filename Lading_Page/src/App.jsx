import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/promociones" replace />} />

      <Route path="/promociones" element={<LandingPage />} />
    </Routes>
  );
}

export default App
