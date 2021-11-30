import React from 'react'
import "./scheduleCard.css";

const scheduleCard = ({day, para}) => {
    return (
        <div className="sd-card">
            <div className="sd-day">{day}</div>
            <div className="sd-des">
                <p className="sd-text">{para}</p>
            </div>
        </div>
    )
}

export default scheduleCard
