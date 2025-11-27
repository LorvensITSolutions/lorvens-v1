import React, { useEffect } from "react";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    // Ensure page scrolls to top and body has no padding/margin
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    
    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="notfound-page" style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>

      {/* Top gradient line */}
      <header className="top-header"></header>

      {/* Stars Background */}
      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {/* Lamp Animation */}
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      {/* Page Content */}
      <section className="error">
        <div className="error__content">

          {/* Title & Text */}
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text">
              We're sorry, the page you were looking for doesn't exist.
            </p>
          </div>

          {/* Single Button Only */}
          <div className="error__nav e-nav">
            <a href="/" className="e-nav__link"> </a>
          </div>

        </div>
      </section>

    </div>
  );
}
