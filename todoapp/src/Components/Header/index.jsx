import React from "react";
import "./index.css";

export default function Header() {
  return (
    <div className="header-section">
      <header className="header-section-title">Dashboard</header>
      <div className="header-search-bar-section">
        <input className="header-section-input-section" />
        <div className="header-section-input-section-icon">icon</div>
      </div>
      <div className="header-right-section">
        <div className="header-right-section-notification-icon">
          notification icon
        </div>
        <div className="header-right-section-calender-icon">calender icon</div>
        <div className="header-right-section-timeline">
          <div className="header-right-section-timeline-day"> Today</div>
          <div className="header-right-section-timeline-date"> Date </div>
        </div>
      </div>
    </div>
  );
}
