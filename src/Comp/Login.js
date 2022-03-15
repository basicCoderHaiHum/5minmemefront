import Header from "./Header";
import {Link, Navigate, useLocation} from "react-router-dom";
import "./css/Login.css";
import { useState } from "react";
function Login() {
    let loc = useLocation();
    const [redir, updateDir] = useState(false);
    const [data1, update1] = useState("");
    const [data2, update2] = useState("");
    const [data3, update3] = useState("");
    const [data4, update4] = useState("");
    const [loading, update5] = useState(false);
    const updateIt1 = (e) => {
        update1(e.target.value);
    }
    const updateIt2 = (e) => {
        update2(e.target.value);
    }
    const updateIt3 = (e) => {
        update3(e.target.value);
    }
    const updateIt4 = (e) => {
        update4(e.target.value);
    }
    function doNothing() {
        // Eat Five Star
    }
    const validateForm = () => {
        if(data1!==""&&data2.includes("@gmail.com")&&data3.length>5&&data4===data3) {
            var header = {};
            // update5(true);
            const Url = data1+"+"+data2+"+"+data3+"+"+data4;
            const data = {
                "Hi" : "Hi"
            };
            fetch("https://fiveminmeme.herokuapp.com/:"+Url)
            .then(response => response.text())
            .then(data => {
                if(data === "yes") {
                    updateDir(true);
                }
                else if(data === "exist") {
                    alert("Email Already In Use, Please Login");
                }
                else {
                    alert("Some Error Occurred! Try After Some Time");
                }
            })
        }
        else {
            alert(`Invalid Format!\n1.) Name must not be emtpy\n2.) Give Correct Email\n3.) Length of password must be grater than 5\n4.) re-password must be same as that of password.`);
        }
    }
    return(
        <>
            <Header icon="none" />
            <div className="form">
                <h1>Signup Now!</h1>
                <input type="text" onChange={updateIt1} placeholder="Your Name" />
                <input type="email" onChange={updateIt2} placeholder="Your Email" />
                <input type="password" onChange={updateIt3} placeholder="Your Password" />
                <input type="password" onChange={updateIt4} placeholder="Re-Write Password" />
                <button onClick={validateForm} disabled={loading}>Register</button>
                <Link to="/signUp" className="a">Already Have An Account? Login.</Link>
            </div>
            {redir?<Navigate to="/signUp" /> : doNothing()}
        </>
    );
}
export default Login;