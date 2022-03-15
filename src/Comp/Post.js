import { useEffect, useState } from "react";
import "./css/Post.css";
import Posts from "./Posts";
function Post() {
    const [postData, updateData] = useState([]);
    const[Data, updateData1] = useState("Loading Please Wait....");
  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        updateData(data.data.memes);
        updateData1("That's For Now Dude, Now Go To Study.");
      })
  }, [1]);
  console.log(postData);
    return(
        <>
            <div className="container">
        {postData.map((e) => {
                return <Posts key={e['id']} imgUrl={e['url']} postTitle={(e['name'].length>50)?(e['name'].slice(0, 45)+"..."):e['name']} channelLink="https://google.com" />;                 
        })}
        <div className="End">{Data}</div>
            </div>

        </>
    );
}

export default Post;