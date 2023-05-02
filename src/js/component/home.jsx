import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";



const SecondsCounter = ({ seconds }) => {
	const secondsArr = seconds.toString().split("").map(Number);
  
	const renderSeconds = () => {
	  return secondsArr.map((num, index) => {
		return <div key={index} className="seconds-box">{num}</div>;
	  });
	};
  
	return (
	  <div className="container">
		<div className="clock-box">
		  <img src={clockImage} alt="clock" className="clock-img" />
		</div>
		<div className="seconds-container">{renderSeconds()}</div>
	  </div>
	);
  };
  
  SecondsCounter.propTypes = {
	seconds: PropTypes.number.isRequired,
  };
  
  export default SecondsCounter;
