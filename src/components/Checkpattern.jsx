import React, { useState } from "react";
import PatternLock from "react-pattern-lock";
import {Link} from "react-router-dom";

function Checkpattern(props) {
  const [path, setpath] = useState([]);
  const [buttonp, setbuttonp] = useState(true);
  const [decor,setdecor] = useState("line-through");

  function handleclick() {
    const k = props.location.data;
    // console.log(k);
    // console.log(path);
    if(JSON.stringify(k) === JSON.stringify(path))
    {
        alert("Pattern successfully set");
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(k));
        <Link to = {{
          pathname : "drawpattern"
        }}></Link>
        return;
    }
    else 
    {
        alert("Pattern is Incorrect, Set Again");
        window.location = '/';
        return;
    }
  }

  return (
    <div>
      <h1 className = "heading">Confirm Pattern</h1>
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
          setdecor("none");
        }}
      />
      </div>
      <div style= {{display : "flex", justifyContent : "flex-end", marginTop : "30px"}}>
      <Link to = {{
          pathname : "drawpattern"
      }} ><button style = {{ textDecorationLine : decor, paddingTop: "5px", paddingBottom: "5px"}} disabled={buttonp} onClick={handleclick}>
        Verify
      </button></Link>
      </div>
    </div>
  );
}

export default Checkpattern;
