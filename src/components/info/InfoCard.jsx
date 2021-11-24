import React from "react";
import './infoCard.css'
const InfoCard = ({
  alt,
  imgSrc,
  flexDirection,
  justifyContent,
  question,
  boldText,
  description,
}) => {
  return (
    <div className='info-card' style={{ flexDirection }}>
      <div className='info-heading' style={{ justifyContent }}>
          <h3 className='info-head-qst'>
            {question} <span className='info-head-bold'>{boldText}</span>
          </h3>
        <div className='info-head-content'>{description}</div>
      </div>
      <div className='info-body'>
        <img src={imgSrc} className='info-img' alt={alt} />
      </div>
    </div>
  );
};

export default InfoCard;
// style={{ flexDirection }}
