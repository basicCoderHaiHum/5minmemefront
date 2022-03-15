import Header from "./Header";
import Footer from "./Footer";
import "./css/Home.css";
import Post from "./Post";
import { useEffect, useState } from "react";
function Home() {
    
    return(
        <>
            <Header icon="none" start="yes" />
            <Footer />
            <Post/>
        </>
    );
}
export default Home;