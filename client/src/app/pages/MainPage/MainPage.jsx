import React, { useState } from "react";
import "./main.css";
import NeedHelp from "./NeedHelp";
import BeVolunter from "./BeVolunter";

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
                    <button onClick={() => handleSwitch("component1")} className="main__btn gray">нужна помощь</button>
                    <button onClick={() => handleSwitch("component2")} className="main__btn">стать волонтером</button>
                </div>
                {currentArea === "component1" && <NeedHelp />}
                {currentArea === "component2" && <BeVolunter />}
            </div>
        </div>
    );
};

export default MainPage;