import React, { useState } from "react";
import "./navbar.css";
import Modal from "./Modal";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);

    function openModal() {
        setIsModalOpen(!isModalOpen);
    }

    function openModalTwo() {
        setIsModalOpenTwo(!isModalOpenTwo);
    }

    function handleHeaderMouseLeave() {
        // Закрыть модальные окна при уходе курсора из области header
        setIsModalOpen(false);
        setIsModalOpenTwo(false);
    }

    return (
        <div className="wrapper">
            <div
                className="header"
                onMouseLeave={handleHeaderMouseLeave}>
                <div className="header__container _container">
                    <div className="header__content">
                        <p onClick={openModal} className="header__title">
                            Происшествия
                        </p>
                        {isModalOpen ? <Modal firstTitle={"first"} /> : null}
                    </div>
                    <div className="header__logo"></div>
                    <div className="header__content">
                        <p onClick={openModalTwo} className="header__title">
                            Точки помощи
                        </p>
                        {isModalOpenTwo ? <Modal firstTitle={"second"} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
