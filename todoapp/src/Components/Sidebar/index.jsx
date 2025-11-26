import React from "react";
import "./index.css";
import { MdDashboard } from "react-icons/md";
import {
  FaExclamationCircle,
  FaRegCheckSquare,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { BsSliders } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa";
import logo from "../../logo.svg";

export default function Sidebar({ name, gmail }) {
  return (
    <section className="sidebar-section">
      <div className="sidebar-subsection">
        <div className="profile-outline">
          <img className="sidebar-image" src={logo} alt="My Image" />
          <div className="sidebar-name-section">{name}</div>
          <div className="sidebar-gmail-section">{gmail}</div>
        </div>
        <div className="sidebar dashboard-section">
          <div>
            <MdDashboard />
          </div>
          <div>Dashboard</div>
        </div>
        <div className="sidebar vital-tasks-section">
          <div>
            <FaExclamationCircle />
          </div>
          <div>Vital tasks</div>
        </div>
        <div className="sidebar tasks-section">
          <div>
            <FaRegCheckSquare />
          </div>
          <div>My Tasks</div>
        </div>
        <div className="sidebar task-categories-section">
          <div>
            <BsSliders />
          </div>
          <div>Task categories</div>
        </div>
        <div className="sidebar settings-section">
          <div>
            <FiSettings />
          </div>
          <div>Settings</div>
        </div>
        <div className="sidebar help-section">
          <div>
            <FaRegQuestionCircle />
          </div>
          <div>Help</div>
        </div>
      </div>
      <div className="sidebar logout-section">
        <div>
          <FiLogOut />
        </div>
        <div>Logout</div>
      </div>
    </section>
  );
}
