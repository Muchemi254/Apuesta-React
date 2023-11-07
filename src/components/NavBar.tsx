import { Link } from "react-router-dom";
import { SetStateAction, useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import LanguageSelector from '../pages/LanguageSelector.tsx'
import { BiMenu } from "react-icons/bi";
import FixtureList from "../Data/FixtureList.tsx"
import { app } from "../../public/firebase.tsx";
import { getAuth, signOut } from "firebase/auth";


const auth = getAuth(app);

function NavBar() {
  const [activeTab, setActiveTab] = useState("login");
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

  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };
  return (
    <div>
        
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="btn d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
          >
            <BiMenu size={25} color="white" />
          </button>

          <Link className="navbar-brand" to="/home">
            {t("Betvista")} {/* Translate "Apuesta futuro" */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="bi bi-list"></i>
            </span>
          </button>




          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                {t("Home")} {/* Translate "Home" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t("About")} {/* Translate "About" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/live">
                {t("Live")} {/* Translate "Live" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("Contact")} {/* Translate "Contact" */}
              </Link>
            </li>
            <li className="nav-item">
              <LanguageSelector/>
            </li>
            <li className="nav-item">
              {user ? (
                  // Render the "Logout" button if the user is signed in
                  <button
                      className="nav-link"
                      type="button"
                      onClick={handleSignOut}
                  >
                    Logout
                  </button>
              ) : (
                  // Render the "Login" button if the user is signed out
                  <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasLogin"
                      aria-controls="offcanvasExample"
                  >
                    {t("Login")} {/* Translate "Login" */}
                  </button>
              )}
            </li>
          </ul>


            

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-light btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasLogin"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
            <button
                className={`nav-link ${activeTab === "login" ? "active" : ""}`}
                onClick={() => handleTabClick("login")}
              >
                {t("login")} {/* Translate "login" */}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => handleTabClick("signup")}
              >
                {t("signup")} {/* Translate "signup" */}
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {activeTab === "login" ? <Login /> : <Signup />}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header justify-content-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <FixtureList />
        </div>
      </div>
    </div>
  );
}

export default NavBar;