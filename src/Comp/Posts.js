import "./css/Posts.css";
import {Link} from "react-router-dom";
function Posts(props) {
    return(
        <>
            <div className="card">
                <img className="imgContainer" src={props.imgUrl} />
                <div className="text-container">
                    <Link to={props.channelLink}><img className="icon" src="https://pbs.twimg.com/profile_images/1334436114560659457/LVB61k-p_400x400.jpg" /></Link>
                    <div className="postTitle">{props.postTitle}</div>
                </div>
            </div>
        </>
    );
}
export default Posts;