import React, { useState } from "react";
import PatternLock from "react-pattern-lock";
import {Link} from "react-router-dom";

function Setpattern() {
  const [path, setpath] = useState([]);
  const [buttonp, setbuttonp] = useState(true);
  const [decor,setdecor] = useState("line-through");

  return (
    <div>
      <h1 className = "heading">Set Pattern</h1>
      <div style = {{border: "3px solid black", borderRadius : "20px"}}>
      <PatternLock
        // width={400}
        // pointSize={40}
        size={3}
        path={path} 
        pointActiveSize = {50}
        connectorThickness={5}
        onChange={(pattern) => {
          setpath(pattern);
        }}
        onFinish={() => {
          setbuttonp(false);
          setdecor("none")
        }}
      />
      </div>
      <div style= {{display : "flex", justifyContent : "flex-end", marginTop : "30px"}}>
      <Link to = {{
          pathname : "confirm",
          data : path
      }} ><button style = {{textDecorationLine : decor, paddingTop: "5px", paddingBottom: "5px"}} disabled={buttonp} >
        Confirm Pattern
      </button></Link>
      </div>
    </div>
  );
}

export default Setpattern;
