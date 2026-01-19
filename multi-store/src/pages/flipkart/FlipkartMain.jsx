import { Link, Outlet } from "react-router-dom";
import "./Flipkart.css";

export default function FlipkartMain() {
  return (
    <div className="flipkart-layout">

      {/* Header */}
      <div className="flipkart-header">
        <span className="flipkart-logo">Flipkart</span>
      </div>

      {/* Body */}
      <div className="flipkart-body">

        {/* Sidebar */}
        <div className="flipkart-sidebar">
          <Link to="/flipkart/home" className="fk-side-link">Home</Link>
          <Link to="/flipkart/add" className="fk-side-link">Uploads</Link>
        </div>

        {/* Content */}
        <div className="flipkart-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
