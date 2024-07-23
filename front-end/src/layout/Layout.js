import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Menu />
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
