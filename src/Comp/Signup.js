import Header from "./Header";
import {Link, Navigate} from "react-router-dom";
import "./css/Login.css";
import { useState } from "react";
function Signup() {
    const [redir, updateDir] = useState(false);
    const [data1, update1] = useState("");
    const [data2, update2] = useState("");
    const myStyle1 = {
        "height": "400px",
        "position" : "absolute",
        "top": "50%",
        "left" : "50%",
        "transform" : "translate(-50%, -50%)"
    }
    function doNothing() {
        // Eat Five Star
    }
    function updateIt1(e) {
        update1(e.target.value);
    }
    function updateIt2(e) {
        update2(e.target.value);
    }
    function validateForm() {
        if(data1.includes("@gmail.com")&&data2.length>5) {
            var Url = `${data1}+${data2}`;
            fetch("https://fiveminmeme.herokuapp.com/log/:"+Url)
            .then(response => response.json())
            .then(data => {
                if(data.Status === "No") {
                    alert("No User Exist With Following Credentials");
                }
                else {
                    localStorage.setItem("logged", true);
                    localStorage.setItem("AUTH", JSON.stringify(data));
                    setTimeout(() => {
                        updateDir(true);
                    }, 400);
                }
            });      
        }
        else {
            alert("Check The Credential Again");
        }
    }
    return(
        <>
            <Header icon="none" />
            <div className="form" style={myStyle1}>
                <h1>Login</h1>
                <input type="email" onChange={updateIt1} placeholder="Your Email" />
                <input type="password" onChange={updateIt2} placeholder="Your Password" />
                <button onClick={validateForm}>Login</button>
                <Link to="/" className="a">Not Have Account? Create One.</Link>
            </div>
            {redir?<Navigate to="/home" />:doNothing()}
        </>
    );
}
export default Signup;