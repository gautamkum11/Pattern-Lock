import React, { useState } from "react";
import PatternLock from "react-pattern-lock";
import {Link} from "react-router-dom";

function Resetpattern(props) {
  const [path, setpath] = useState([]);
  const [boolcnt,setboolcnt] = useState(false);
  const [dis,setdis] = useState(true);
  const [cnt,setcnt] = useState(4);
  

  const gk = window.localStorage.getItem('MY_APP_STATE');

  return (
    <div>
      <h1 className = "heading">Enter correct Pattern</h1>
      <div style = {{border: "3px solid black", borderRadius : "20px"}}>
      <PatternLock
        // width={400}
        // pointSize={40}
        size={3}
        path={path}
        pointActiveSize = {50}
        disabled = {boolcnt}
        connectorThickness={5}
        onChange={(pattern) => {
          setpath(pattern);
        }}
        onFinish={() => {
          if(gk === JSON.stringify(path))
          {
            setdis(false);
          }
          else 
          {
            if(cnt === 0)
            {
              setboolcnt(true);
              alert("Now wait for 30 seconds...");
              setpath([]);
              setcnt(4);
              setTimeout(() => {
              setboolcnt(false);
              }, 30000);
            }
            else 
            {
              alert("Try again...."+cnt+" more attempts left");
              setpath([]);
              setcnt(cnt-1);
            }
          }
        }}
      />
      </div>
      <div style= {{display : "flex", justifyContent : "flex-end",marginTop : "30px"}}>
      <Link to = {{
        pathname : "/"
        }} >
        <button style = {{paddingTop: "5px", paddingBottom: "5px"}} disabled = {dis}>Reset</button></Link>
        </div>
    </div>
  );
}

export default Resetpattern;
