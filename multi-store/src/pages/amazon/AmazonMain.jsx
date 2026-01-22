import { Outlet } from "react-router-dom";
import AmazonHeader from "./AmazonHeader";
import AmazonSidebar from "./AmazonSideBar";
import "./Amazon.css";

export default function AmazonMain() {
  return (
    <div className="amazon-full-page">
      <AmazonHeader />
      <div className="amazon-content-wrapper">
        <AmazonSidebar />
        <main className="amazon-main-content">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}