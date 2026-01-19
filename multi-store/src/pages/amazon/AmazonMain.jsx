import { Link, Outlet } from "react-router-dom";
import "./Amazon.css";

export default function AmazonMain() {
  return (
    <div className="amazon-layout">
      
      {/* Top Logo Bar */}
      <div className="amazon-header">
        <span className="amazon-logo">amazon</span>
      </div>

      {/* Body */}
      <div className="amazon-body">

        {/* Sidebar */}
        <div className="amazon-sidebar">
          <Link to="/amazon/home" className="side-link">Home</Link>
          <Link to="/amazon/add" className="side-link">Uploads</Link>
        </div>

        {/* Main Content */}
        <div className="amazon-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
