//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


import clockImage from "../img/clock.png";



//import your own components
import SecondsCounter from "./component/home.jsx";

//render your react application
const App = () => {
    const [seconds, setSeconds] = useState(0);
  
    return (
      <SecondsCounter seconds={seconds} />
    );
  };
  


//render your react application
ReactDOM.render(<SecondsCounter seconds={0} />, document.querySelector("#app"));
;