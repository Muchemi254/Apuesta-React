import React, {SetStateAction, useState} from "react";
import {useTranslation} from "react-i18next";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import SettledBets from "./SettledBets.tsx";
import OpenBets from "./OpenBets.tsx";
import {act} from "react-dom/test-utils";
import BetSlip from "./BetSlip.tsx";

const MyBets = () => {
    const { t } = useTranslation(); // Initialize the t function

    const [activeTab, setActiveTab] = useState("mybets");
    const handleTabClick = (tabName: SetStateAction<string>) => {
        setActiveTab(tabName);
    };

    function betsbody() {
        if (activeTab === "open-bets"){
           return <OpenBets/>
        } else if (activeTab === "settled-bets"){
            return <SettledBets/>
        }
        else if (activeTab === "betslip"){
            return <BetSlip/>
        } else {
            handleTabClick("open-bets")
            return <OpenBets/>}


    }

    return (
    <div className="col">
        <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <button
                    className={`nav-link ${activeTab === "betslip" ? "active" : ""}`}
                    onClick={() => handleTabClick("betslip")}
                >
                    {t("betslip")} {/* Translate "login" */}
                </button>
            </li>
            <li className="nav-item">
                <button
                    className={`nav-link ${activeTab === "open-bets" ? "active" : ""}`}
                    onClick={() => handleTabClick("open-bets")}
                >
                    {t("open")} {/* Translate "login" */}
                </button>
            </li>
            <li className="nav-item">
                <button
                    className={`nav-link ${activeTab === "settled-bets" ? "active" : ""}`}
                    onClick={() => handleTabClick("settled-bets")}
                >
                    {t("settled")} {/* Translate "signup" */}
                </button>
            </li>
        </ul>
        <div className="mybets-body">
            {betsbody()}


        </div>
    </div>
  );
};

export default MyBets;
