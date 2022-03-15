import "./css/Footer.css";
import {Link} from "react-router-dom";
function Footer() {
    return(
        <>
        <div className="footer">
            <div className="sub-div"><Link to="/home">
                    <img className='footer-ico' src="https://image.shutterstock.com/image-photo/redirected-250nw-568046932.jpg" />
                </Link></div>
            <div className="sub-div"><Link to="/create">
            <img className='footer-ico' src="https://cdn2.iconfinder.com/data/icons/basic-ict-line-icons/100/26-512.png" />
                </Link></div>
            <div className="sub-div"><Link to="/profile/:id">
            <img className='footer-ico' src="https://secure.webtoolhub.com/static/resources/icons/set103/ce6535a5.png" />
                </Link></div>
            <div className="sub-div"><Link to="/search">
            <img className='footer-ico' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSLF2KD0x9KU5CwmXdqJjrphNQNmJgqzjPQ&usqp=CAU" />
                </Link></div>
        </div>
        </>
    );
}

export default Footer;