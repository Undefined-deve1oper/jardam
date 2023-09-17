import React from "react";
import "./modal.css";

const Modal = ({ firstTitle }) => {
    return (
        <>
            {
                firstTitle === "first" ? (  
                    <div className="modal">
                        <div className="modal__container _container">
                            <ul className="modal__menu">
                                <li>one</li>
                                <li>one</li>
                                <li>one</li>
                                <li>{firstTitle}</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="modal">
                        <div className="modal__container _container">
                            <ul className="modal__menu">
                                <li>one</li>
                                <li>one</li>
                                <li>one</li>
                                <li>{firstTitle}</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    );
};
export default Modal;