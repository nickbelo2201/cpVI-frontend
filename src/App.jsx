import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Carros from "./pages/Carros";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route
            path="*"
            element={
              <div className="text-center text-white py-24">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-gray-400 mt-2">Página não encontrada.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;