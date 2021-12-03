import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/Login";
import { Movie } from "./pages/Movie";
import { Movies } from "./pages/Movies";
import { Redirect } from "./api/api2";

function App() {
  return (
    <BrowserRouter>
      <Navbar />{" "}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Redirect>
                <Home />
              </Redirect>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/movie"
            element={
              <Redirect>
                <Movie />
              </Redirect>
            }
          />
          <Route
            path="/movies"
            element={
              <Redirect>
                <Movies />
              </Redirect>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
