import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
