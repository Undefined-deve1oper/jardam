import React from "react";
import { ToastContainer } from "react-toastify";
import { withRouter } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    );
};

const AppRoutes = withRouter(App);
export default AppRoutes;