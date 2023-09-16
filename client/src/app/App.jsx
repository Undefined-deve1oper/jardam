import React from "react";
import { ToastContainer } from "react-toastify";
import { withRedux, withRouter } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";
import "./styles/app.css";

const App = () => {

    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    );
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
