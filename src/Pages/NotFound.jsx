import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">

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
            <a href="/" className="e-nav__link">Home </a>
          </div>

        </div>
      </section>

    </div>
  );
}
