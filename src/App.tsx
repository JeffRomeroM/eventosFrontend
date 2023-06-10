import Header from "./components/header/Header"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GastronomiesPage } from "./pages/GastronomiesPage";
import { CommercialsPage } from "./pages/CommercialsPage";
import { SportsPage } from "./pages/SportsPage";

function App() {
  
  return (
    <>
    <CssBaseline />
    <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gastronomias" element={<GastronomiesPage />} />
        <Route path="comerciales" element={<CommercialsPage />} />
        <Route path="deportes" element={<SportsPage  />} />
    </Routes>
      
    </>
  )
}

export default App
