import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import UserProfile from "./components/userProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
