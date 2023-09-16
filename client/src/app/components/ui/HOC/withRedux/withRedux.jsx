import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";

const withRedux =
    (Component) =>
        ({ ...props }) => {
            return (
                <Provider store={store}>
                    <Component {...props} />
                </Provider>
            );
        };

export default withRedux;
