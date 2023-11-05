import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next

const MainBets = () => {
  const { t } = useTranslation(); // Initialize the t function for translations

  return (
    <div className="col border-start border-end">
      <img
        src="/vite.svg"
        className="rounded"
        alt="Responsive image"
        style={{ width: "100%", height: "200px" }}
      />
      <h4>{t("Upcoming Fixtures")}</h4> {/* Translate "Upcoming Matches" */}
      <ul className="container-fluid">
        <li className="list-group-item">
          <div>
            <div className="time row">
              <div className="col ">
                <p className="small text-start">{t("England • Premier League")}</p>
              </div>
              <div className="col">
                <p className="small text-end ">07/10, 17:00</p>
              </div>
            </div>

            <div className="teams row align-items-center">
              <div className="teams col">
                <p className="small">{t("Burnley")}</p>
                <p className="small">{t("Chelsea")}</p>
              </div>
              <div className="teams col">
                <div className="row">
                  <p className=" col small text-center">1</p>
                  <p className="col small text-center">x</p>
                  <p className="col small text-center">2</p>
                  <div className="row">
                    <button className="col btn btn-light btn-sm">
                      <span>5.00</span>
                    </button>
                    <button className="col btn btn-light btn-sm">
                      <span>3.90</span>
                    </button>
                    <button className="col btn btn-light btn-sm active">
                      <span>1.71</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li className="list-group-item">
          <div>
            <div className="time row">
              <div className="col ">
                <p className="small text-start">England • Premier League</p>
              </div>
              <div className="col">
                <p className="small text-end ">07/10, 17:00</p>
              </div>
            </div>

            <div className="teams row align-items-center">
              <div className="teams col">
                <p className="small">Burnley</p>
                <p className="small">Chelsea</p>
              </div>
              <div className="teams col">
                <div className="row">
                  <p className=" col small text-center">1</p>
                  <p className="col small text-center">x</p>
                  <p className="col small text-center">2</p>
                  <div className="row">
                    <button className="col btn btn-light btn-sm">
                      <span>5.00</span>
                    </button>
                    <button className="col btn btn-light btn-sm">
                      <span>3.90</span>
                    </button>
                    <button className="col btn btn-light btn-sm active">
                      <span>1.71</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li className="list-group-item">
          <div>
            <div className="time row">
              <div className="col ">
                <p className="small text-start">England • Premier League</p>
              </div>
              <div className="col">
                <p className="small text-end ">07/10, 17:00</p>
              </div>
            </div>

            <div className="teams row align-items-center">
              <div className="teams col">
                <p className="small">Burnley</p>
                <p className="small">Chelsea</p>
              </div>
              <div className="teams col">
                <div className="row">
                  <p className=" col small text-center">1</p>
                  <p className="col small text-center">x</p>
                  <p className="col small text-center">2</p>
                  <div className="row">
                    <button className="col btn btn-light btn-sm">
                      <span>5.00</span>
                    </button>
                    <button className="col btn btn-light btn-sm">
                      <span>3.90</span>
                    </button>
                    <button className="col btn btn-light btn-sm active">
                      <span>1.71</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default MainBets;
