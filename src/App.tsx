// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";
import Foot from "./components/Foot.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foot />
    </Router>
  );
}

export default App;
