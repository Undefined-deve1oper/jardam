import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../layouts/home"));

const routes = [
    { path: "/", element: <Home /> },
    { path: "*", breadcrumb: "Не найдено", element: <Navigate to="/" /> }
];

export default routes;
