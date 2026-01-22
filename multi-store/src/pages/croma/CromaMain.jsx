import { Outlet } from "react-router-dom";
import CromaHeader from "./CromaHeader";
import "./Croma.css";

export default function CromaMain() {
  return (
    <div className="croma-layout">
      <div className="croma-header">
        <CromaHeader/>
      </div>
      <div className="croma-body">
        <div className="croma-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
