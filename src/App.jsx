import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Detail from "./pages/DetailProjectPage";
import DetailProjectPage from "./pages/DetailProjectPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<DetailProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
