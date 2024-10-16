import React from 'react';
import '../CSS/AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  let sidebarOpen = false;

  const openSidebar = () => {
    if (!sidebarOpen) {
      document.getElementById('sidebar').classList.add('sidebar-responsive');
      sidebarOpen = true;
    }
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      document.getElementById('sidebar').classList.remove('sidebar-responsive');
      sidebarOpen = false;
    }
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <span className="material-icons-outlined">search</span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined">notifications</span>
          <span className="material-icons-outlined">email</span>
          <span className="material-icons-outlined">account_circle</span>
        </div>
      </header>
      {/* End Header */}

      {/* Sidebar */}
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined">shopping_cart</span> STORE
          </div>
          <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">dashboard</span> Dashboard</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">inventory_2</span> Products</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">category</span> Categories</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">groups</span> Customers</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">fact_check</span> Inventory</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">poll</span> Reports</a></li>
          <li className="sidebar-list-item"><a href="#"><span className="material-icons-outlined">settings</span> Settings</a></li>
        </ul>
      </aside>
      {/* End Sidebar */}

      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <h2>DASHBOARD</h2>
        </div>

        <div className="main-cards">
          <div className="card"><div className="card-inner"><h3>PRODUCTS</h3><span className="material-icons-outlined">inventory_2</span></div><h1>249</h1></div>
          <div className="card"><div className="card-inner"><h3>CATEGORIES</h3><span className="material-icons-outlined">category</span></div><h1>25</h1></div>
          <div className="card"><div className="card-inner"><h3>CUSTOMERS</h3><span className="material-icons-outlined">groups</span></div><h1>1500</h1></div>
          <div className="card"><div className="card-inner"><h3>ALERTS</h3><span className="material-icons-outlined">notification_important</span></div><h1>56</h1></div>
        </div>

        <div className="charts">
          <div className="charts-card">
            <h2 className="chart-title">Top 5 Products</h2>
            <div id="bar-chart"></div>
          </div>
          <div className="charts-card">
            <h2 className="chart-title">Purchase and Sales Orders</h2>
            <div id="area-chart"></div>
          </div>
        </div>
      </main>
      {/* End Main */}
      
    </div>
  );
};

export default AdminDashboard;