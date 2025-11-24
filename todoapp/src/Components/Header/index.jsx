import React from "react";
import "./index.css";
import { FaBell } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Header({ today, date }) {
  return (
    <div className="header-section">
      <header className="header-section-title">Dashboard</header>
      <div className="header-search-bar-section">
        <input
          className="header-section-input-section"
          placeholder="Search your task here..."
        />
        <div className="header-section-input-section-icon">
          <FaSearch />
        </div>
      </div>
      <div className="header-right-section">
        <div className="header-right-section-icons">
          <button className="header-right-section-notification-icon">
            <FaBell />
          </button>
          <button className="header-right-section-calender-icon">
            <FaCalendar />
          </button>
        </div>
        <div className="header-right-section-timeline">
          <div className="header-right-section-timeline-day"> {today}</div>
          <div className="header-right-section-timeline-date"> {date} </div>
        </div>
      </div>
    </div>
  );
}
