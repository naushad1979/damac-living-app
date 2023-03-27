import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

import "./SideBar.scss";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className={`l-navbar${showSideBar ? " show" : ""}`}>
      <nav className="nav">
        <div>
          <a className="toggle">
            <i className="bi bi-list" onClick={toggleHandler} />
          </a>
          <div className="nav_list">
            <a className="nav_link">
              <i className="bi bi-house-fill nav_icon" />
              <span className="nav_name">Home</span>
            </a>
            <a className="nav_link">
              <i className="bi bi-people nav_icon" />
              <span className="nav_name">Users</span>
            </a>
            <a className="nav_link">
              <i className="bi bi-star-fill nav_icon" />
              <span className="nav_name">Rating</span>
            </a>
            <a className="nav_link">
              <i className="bi bi-file-earmark-richtext nav_icon" />
              <span className="nav_name">Document</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
