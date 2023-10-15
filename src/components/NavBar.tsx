import { Link } from "react-router-dom";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import { SetStateAction, useState } from "react";
import { BiMenu } from "react-icons/bi";
import FixtureList from "../Data/FixtureList.tsx";

function NavBar() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
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
            Apuesta futuro
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLogin"
                  aria-controls="offcanvasLogin"
                >
                  Login
                </button>
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
                login
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => handleTabClick("signup")}
              >
                signup
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
