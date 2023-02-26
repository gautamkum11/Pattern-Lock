import React, { useState } from "react";
import {Link} from "react-router-dom";

function Forgotpattern() {

    const [ans,setans] = useState("");
    const [dis,setdis] = useState(true);
    const [decor,setdecor] = useState("line-through");

    function handlechange(event) {
        const k = event.target.value;
        setans(k);
    }

    function handleclick() {
        if(ans === "4050")
        {
            setdis(false);
            setdecor("none");
        }
        else 
        {
            alert("Wrong answer");
            setdis(true);
        }
    }

    return <div style = {{marginTop : "200px", textAlign : "center"}}>
        <label style = {{fontSize : "3rem"}}>What is "40"+"50" : </label>
        <input style = {{justifyContent: "center", fontSize: "3rem", borderRadius: "1rem", textAlign: "center"}} type= "text" onChange = {handlechange} />
        <div style = {{display : "flex", margin: "40px", textAlign : "center", justifyContent: "space-evenly"}}>
        <button style = {{backgroundColor: "#e74c3c" , paddingTop: "5px", paddingBottom: "5px"}} onClick = {handleclick}>Submit</button>
        <Link to = {{
        pathname : "/"
        }} >
        <button style = {{backgroundColor: "#e74c3c", textDecorationLine: decor, paddingTop: "5px", paddingBottom: "5px"}} disabled = {dis}>Reset</button></Link>
        </div>
    </div>
}

export default Forgotpattern;