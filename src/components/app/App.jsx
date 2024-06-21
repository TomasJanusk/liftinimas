import Contact from "../contact/Contact";
import Home from "../home/Home";
import About from "../about/About";
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { date } from "../date/Date";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home date={date} />} />
          <Route path="/contact" element={<Contact date={date} />} />
          <Route path="/about" element={<About date={date} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
