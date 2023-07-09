import "./App.css";
import Navbar from "./Components/Navbar";
import Animals from "./Pages/Animals/Animals";
import Home from "./Pages/Home/Home";
import Visit from "./Pages/Visit/Visit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
