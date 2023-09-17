import React from "react";
import { Navigate } from "react-router-dom";
import MainPage from "../components/pages/MainPage/MainPage";

const Home = React.lazy(() => import("../layouts/home"));

const routes = [
    { path: "/", element: <Home /> },
    { path: "/main", element:<MainPage/>  },
    { path: "*", breadcrumb: "Не найдено", element: <Navigate to="/" /> }
];

export default routes;
