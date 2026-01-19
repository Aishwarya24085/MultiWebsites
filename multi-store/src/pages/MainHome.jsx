import "./MainHome.css";

export default function MainHome() {
  function openInNewTab(path) {
    window.open(path, "_blank");
  }

  return (
    <div className="main-container">
      <h1 className="main-title">Multi-Store Product Portal</h1>
      <p className="subtitle">
        Choose a website to manage and explore products
      </p>

      <div className="card-container">
        <div className="site-card" onClick={() => openInNewTab("/amazon")}>
          <h2>Amazon</h2>
          <p>
            Browse and manage Amazon products. Add new items and view listings.
          </p>
          <button className="open-btn">Open Amazon</button>
        </div>

        <div className="site-card" onClick={() => openInNewTab("/flipkart")}>
          <h2>Flipkart</h2>
          <p>
            Explore Flipkart inventory and manage product details easily.
          </p>
          <button className="open-btn">Open Flipkart</button>
        </div>

        <div className="site-card" onClick={() => openInNewTab("/croma")}>
          <h2>Croma</h2>
          <p>
            View electronics and manage Croma’s product catalog efficiently.
          </p>
          <button className="open-btn">Open Croma</button>
        </div>
      </div>
    </div>
  );
}
