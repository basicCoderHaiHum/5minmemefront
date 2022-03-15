import "./css/Header.css";
import {useState, useEffect} from "react";
function Header(prop) {
    const [sel, updateSel] = useState(false);
    const[min, updateMin] = useState(5);
    const [s, updateSec] = useState(0);
    const [myStyle1, update1] = useState([]);
    useEffect(() => {
        update1({
            "display" : prop.icon
        });
        if(prop.start==="yes") {
            updateSel(true);
        }
    }, [s]);
    return(
        <div className="header">
            <img className="profile" alt="Icon"  style={myStyle1} />
            <div className="ico">5 Min-meme</div>
        </div>
    );
}
export default Header;