import React from "react";
import { NavLink } from "react-router-dom";
import "./modal.css";

const Modal = ({ firstTitle }) => {

    return (
        <>
            {
                firstTitle === "first" ? (
                    <div className="modal">
                        <div className="modal__container _container">
                            <ul className="modal__menu">
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="modal">
                        <div className="modal__container _container">
                            <ul className="modal__menu">
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                                <li><NavLink to={"/chuy"}>Чуйская область</NavLink></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Modal;