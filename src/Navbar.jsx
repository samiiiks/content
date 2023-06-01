// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// // import { Button } from "react-bootstrap";

// const NavbarPage = () => {
//   const guestLinks = (
// <div>
// <ul style={{display:"flex",position:"fixed", textDecoration:"none",backgroundColor:"black", listStyle:"none"}}>
//   <li style={{margin:"12px"}}>
//         <a href="/">home</a>
//   </li>
//   <li style={{margin:"12px"}}>
//         <a href="/">about</a>
//   </li>
// </ul>
// </div>
//   );
//   return (
//     <div>
//     <nav className="navbar bg-white">
//       {guestLinks}
//     </nav>
//     <div>
//         <img src="" alt="" />
//     </div>
//     </div>
//   );
// };

// export default NavbarPage;

import { useEffect, useState } from 'react';
import image from './Assets/Rectangle 1873 (7).png'
const HomePage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="home-page">

            <ul style={{
                display: "flex", position: "fixed", Top: "0",

                width: "100%", textDecoration: "none", backgroundColor: "black", listStyle: "none"
            }}>
                <li style={{ margin: "12px" }}>
                    <a href="/">home</a>
                </li>
                <li style={{ margin: "12px" }}>
                    <a href="/">about</a>
                </li>
            </ul>

            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            {/* Rest of your page content */}
            {showScrollButton && (
                <button className="scroll-top" onClick={handleScrollTop}>
                    Scroll to Top
                </button>
            )}
        </div>
    );
};
export default HomePage