import React, { useState } from "react";
import "./main.css";
import HelpForm from "../../ui/forms/HelpForm";
import VolunterForm from "../../ui/forms/VolunterForm";

const MainPage = () => {
    const [currentArea, setCurrentArea] = useState("component1");

    const handleSwitch = (switchArea) => {
        setCurrentArea(switchArea);
    };

    return (
        <div className="main">
            <div className="main__container _container">
                <h2 className="main__title">
                    МЫ СИЛЬНЫ НАСТОЛЬКО,
                    НАСКОЛЬКО МЫ ЕДИНЫ
                </h2>
                <p className="main__subtitle">
                    Платформа широкого взаимодействия государства и народа в трудные времена.
                </p>
                <div className="main__switchers">
                    <button
                        onClick={() => handleSwitch("component1")}
                        className={currentArea === "component1" ? "main__btn gray" : "main__btn"}
                    >
                        нужна помощь
                    </button>
                    <button
                        onClick={() => handleSwitch("component2")}
                        className={currentArea === "component2" ? "main__btn gray" : "main__btn"}
                    >
                        стать волонтером
                    </button>
                </div>
                <div className="main__form">
                    {currentArea === "component1" && <HelpForm />}
                    {currentArea === "component2" && <VolunterForm />}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
