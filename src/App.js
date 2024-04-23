import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/notFound";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import { useState, lazy, Suspense } from "react";

const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const SearchUser = lazy(() => import("./components/searchUser"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading ...</h1>}>
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/user/:username" element={<UserProfile />} />
              <Route path="/search" element={<SearchUser />} />
              <Route
                path="/login"
                element={
                  <Login setIsLogged={setIsLogged} setUsername={setUsername} />
                }
              />
              <Route
                path="/auth-profile"
                element={
                  isLogged ? (
                    <AuthProfile username={username} />
                  ) : (
                    <Navigate replace to="/login" />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
