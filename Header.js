import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    //console.log("Header Render")

    useEffect(() => {
        //console.log("useEffect render")
    },[]);

    return(
        <div className='header'>
            <div className='Logo-container'>
                <img className='logo'
                src={LOGO_URL}>
                </img>
            </div>
            <div className='nav-items'>
                    <ul>
                        <li>
                            <Link>Name</Link></li>
                        <li>
                            <Link to="/about">About Us</Link></li>
                        <li>
                            <Link to="/contact">Contact Us</Link></li>
                        <li>
                            <Link>Cart</Link></li>

                        <button className="login"
                            onClick={() => {
                                btnNameReact === "login"
                                ? setBtnNameReact("logout")
                                : setBtnNameReact("login");
                            }}
                            >
                                {btnNameReact}
                        </button>
                    </ul>
                </div>
        </div>
    )
};

export default Header;