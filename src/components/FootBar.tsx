import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LanguageSelector from "../pages/LanguageSelector.tsx";
import { useTranslation } from "react-i18next";
import { app } from "../../public/firebase.tsx";
import { getAuth, signOut } from "firebase/auth";
import {AiFillHome} from "react-icons/ai";
import {MdLiveTv} from "react-icons/md";
import {RiPagesLine} from "react-icons/ri";
import {IoMdContact} from "react-icons/io";
import {BiFootball} from "react-icons/bi";


const auth = getAuth(app);



const FootBar = () => {
    const { t } = useTranslation(); // Initialize the t function
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Add an authentication state change listener
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is signed in
                setUser(authUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth) // Call the signOut method to log the user out
            .then(() => {
                // Handle the sign-out success, if needed
            })
            .catch((error) => {
                // Handle sign-out errors, if any
            });
    };
    const iconStyle = { color: 'white' };
    const iconSize = 25;
    const textStyle = { fontSize: '12px', color: 'white' };
    return (
    <div>
        <nav className="navbar fixed-bottom bg-body-tertiary d-md-none bg-dark justify-content-between" data-bs-theme="dark">



                <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                    <IoMdContact size={iconSize} style={iconStyle}/>
                    <span style={textStyle}>{t("profile")}</span>
                </Link>

            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <BiFootball size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("live")}</span>
            </Link>
            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <AiFillHome size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("Home")}</span>
            </Link>

            <Link className="nav-link d-flex flex-column align-items-center" to="/mybets">
                <RiPagesLine size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("MyBets")}</span>
            </Link>
            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <RiPagesLine size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("Betslip")}</span>
            </Link>



        </nav>

    </div>
  );
};

export default FootBar;
