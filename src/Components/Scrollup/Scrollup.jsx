    import React, { useState, useEffect } from "react";
    import './Scrollup.css';

    const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) {
        setVisible(true);
        } else {
        setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <button
        className={`scroll-up ${visible ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
    };

    export default ScrollUp;
