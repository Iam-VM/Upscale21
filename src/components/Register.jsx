import React from "react";
import "./register/register.css"

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-body">
                <div className="register-text">
                    <h3>Who can participate?</h3>
                    <p>Any college students aiming to start an
enterprise, dreaming of entrepreneurship
can participate</p>
                </div>
                <a href={"https://www.yepdesk.com/embed/upscale-21"} target={"_blank"} className="register-btn">
                    <button className="reg-btn">Register Now</button>
                </a>
            </div>

        </div>
    )
}

export default Register
