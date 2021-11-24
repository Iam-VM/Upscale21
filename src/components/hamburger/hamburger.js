import React from "react"
import * as headerMBStyles from "./hamburgerButtonStyles.module.css";

const HamburgerButton = ({setSideNavBarStatus, sideNavBarStatus}) => {

    return (
        <div className={headerMBStyles.container}>
            <label htmlFor="check">
                <input type="checkbox" id="check"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
};

export default HamburgerButton;
