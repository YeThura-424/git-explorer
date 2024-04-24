import { lazy } from "react";
import Home from "./components/home";

const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const SearchUser = lazy(() => import("./components/searchUser"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const About = lazy(() => import("./components/about"));
const NotFound = lazy(() => import("./components/notFound"));
const RepoDetail = lazy(() => import("./components/RepoDetail"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/auth-profile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/about",
    component: About,
    requiresAuth: false,
  },
  {
    path: "/repo-detail/:name/:username",
    component: RepoDetail,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
