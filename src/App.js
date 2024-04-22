import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
