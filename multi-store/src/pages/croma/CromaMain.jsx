import { Link, Outlet } from "react-router-dom";
import "./Croma.css";

export default function CromaMain() {
  return (
    <div className="croma-layout">

      {/* Header */}
      <div className="croma-header">
        <span className="croma-logo">CROMA</span>
      </div>

      {/* Body */}
      <div className="croma-body">

        {/* Sidebar */}
        <div className="croma-sidebar">
          <Link to="/croma/home" className="cr-side-link">Home</Link>
          <Link to="/croma/add" className="cr-side-link">Uploads</Link>
        </div>

        {/* Content */}
        <div className="croma-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
