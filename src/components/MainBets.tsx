import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next

const MainBets = () => {
  const { t } = useTranslation(); // Initialize the t function for translations

  return (
    <div className="col border-start border-end" style={{ height: '100vh', overflowY: 'auto' }}>
      <img
        src="/vite.svg"
        className="rounded"
        alt="Responsive image"
        style={{ width: "100%", height: "200px" }}
      />
      <h5>{t("Upcoming Fixtures")}</h5> {/* Translate "Upcoming Matches" */}
      <ul className="container-fluid">
        <li className="list-group-item">
          <div>
            <div className="time row">
              <div className="col">
                <p className="small text-start">{t("England • Premier League")}</p>
              </div>
              <div className="col">
                <p className="small text-end ">07/10, 17:00</p>
              </div>
            </div>

            <div className="teams row align-items-center">
              <div className="teams col-2">
                <h6 className="small">{t("Burnley")}</h6>
                <h6 className="small">{t("Chelsea")}</h6>
              </div>
              <div className="teams col-2">
                <h6 className="small">{t("status: live")}</h6>
                <h6 className="small">{t("score: 1-0")}</h6>
              </div>
              <div className="teams col-2">
                <h6 className="small">{t("Bet: draw")}</h6>
                <h6 className="small">{t("result: draw")}</h6>
              </div>
              <div className="teams col">
                <div className="row">
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
