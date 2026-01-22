import {Outlet } from "react-router-dom";
import FlipkartHeader from "./FlipkartHeader";
import FlipkartSidebar from "./FlipkartSideBar";
import "./Flipkart.css";

export default function FlipkartMain() {
  return (
    <div className="flipkart-full-page">
      <FlipkartHeader />
      <div className="flipkart-content-wrapper">
        <FlipkartSidebar />
        <main className="flipkart-main-content">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
