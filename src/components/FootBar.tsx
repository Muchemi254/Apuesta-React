import React from "react";

const FootBar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-bottom bg-body-tertiary d-md-none bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Fixed bottom
          </a>
        </div>
      </nav>
    </div>
  );
};

export default FootBar;
