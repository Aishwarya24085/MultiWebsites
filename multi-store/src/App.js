import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome.jsx";

import AmazonMain from "./pages/amazon/AmazonMain";
import AmazonHome from "./pages/amazon/AmazonHome";
import AmazonAdd from "./pages/amazon/AmazonAdd";

import FlipkartMain from "./pages/flipkart/FlipkartMain"
import FlipkartHome from "./pages/flipkart/FlipkartHome";
import FlipkartAdd from "./pages/flipkart/FlipkartAdd";

import CromaMain from "./pages/croma/CromaMain"
import CromaHome from "./pages/croma/CromaHome";
import CromaAdd from "./pages/croma/CromaAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />

        <Route path="/amazon" element={<AmazonMain />}>
          <Route index element={<AmazonHome />} />
          <Route path="home" element={<AmazonHome />} />
          <Route path="add" element={<AmazonAdd />} />
        </Route>

        <Route path="/flipkart" element={<FlipkartMain />}>
          <Route index element={<FlipkartHome />} />
          <Route path="home" element={<FlipkartHome />} />
          <Route path="add" element={<FlipkartAdd />} />
        </Route>

        <Route path="/croma" element={<CromaMain />}>
          <Route index element={<CromaHome />} />
          <Route path="home" element={<CromaHome />} />
          <Route path="add" element={<CromaAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
