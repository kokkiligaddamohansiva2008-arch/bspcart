import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaUserFriends,
  FaStore,
  FaBoxOpen,
  FaExclamationTriangle,
  FaShoppingBag,
  FaRupeeSign,
  FaSyncAlt,
  FaDownload,
  FaArrowRight,
  FaUserShield,
  FaChartLine,
  FaCheckCircle,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Sidebar from "../components/layout/Sidebar";
import { getUsers, getProducts, getOrders, LOW_STOCK } from "../services/adminService";
import "../styles/dashboard.css";
import "../styles/admin.css";

const money = (value) => `₹${Math.round(Number(value) || 0).toLocaleString("en-IN")}`;
const safeDate = (value) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date : null;
};
const monthKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const countBy = (items, field) => items.reduce((counts, item) => {
  const key = String(item[field] || "Other");
  counts[key] = (counts[key] || 0) + 1;
  return counts;
}, {});

function exportCsv(filename, rows) {
  if (!rows.length) {
    window.alert("There is no data to export yet.");
    return;
  }
  const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const csv = [keys.map(escape).join(","), ...rows.map((row) => keys.map((key) => escape(row[key])).join(","))].join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function StatCard({ label, value, hint, icon, tone }) {
  return (
    <article className={`adm-stat-card ${tone}`}>
      <div className="adm-stat-top">
        <span>{label}</span>
        <span className="adm-stat-icon">{icon}</span>
      </div>
      <strong className="adm-stat-value">{value}</strong>
      <div className="adm-stat-hint">{hint}</div>
    </article>
  );
}

function EmptyState({ children }) {
  return <div className="adm-empty adm-empty-modern">{children}</div>;
}

export default function AdminDashboard() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [userSearch, setUserSearch] = useState("");
  const [activityRange, setActivityRange] = useState("6");

  const refresh = useCallback(() => setRefreshKey((value) => value + 1), []);

  const stats = useMemo(() => {
    const users = getUsers();
    const products = getProducts();
    const orders = getOrders();
    const lowStock = products.filter((product) => Number(product.stock) <= LOW_STOCK);
    const roles = countBy(users, "role");
    const categories = countBy(products, "category");
    const today = new Date();
    const currentMonth = monthKey(today);
    const previousMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const previousMonth = monthKey(previousMonthDate);
    const monthOrders = orders.filter((order) => {
      const date = safeDate(order.date || order.createdAt || order.orderDate);
      return date && monthKey(date) === currentMonth;
    }).length;
    const previousMonthOrders = orders.filter((order) => {
      const date = safeDate(order.date || order.createdAt || order.orderDate);
      return date && monthKey(date) === previousMonth;
    }).length;
    const orderActivity = Array.from({ length: Number(activityRange) }, (_, index) => {
      const date = new Date(today.getFullYear(), today.getMonth() - (Number(activityRange) - index - 1), 1);
      const key = monthKey(date);
      return {
        month: date.toLocaleDateString("en-IN", { month: "short" }),
        orders: orders.filter((order) => {
          const orderDate = safeDate(order.date || order.createdAt || order.orderDate);
          return orderDate && monthKey(orderDate) === key;
        }).length,
      };
    });
    const itemCount = orders.reduce((total, order) => total + (Array.isArray(order.items)
      ? order.items.reduce((sum, item) => sum + Math.max(0, Number(item.qty || item.quantity) || 0), 0)
      : 0), 0);
    const inventoryValue = products.reduce((total, product) => total + (Number(product.price) || 0) * (Number(product.stock) || 0), 0);
    const newestUsers = [...users].reverse();
    return {
      users,
      products,
      orders,
      roles,
      categories,
      lowStock,
      monthOrders,
      previousMonthOrders,
      orderActivity,
      itemCount,
      inventoryValue,
      newestUsers,
      sellerCount: roles.SELLER || 0,
      buyerCount: roles.BUYER || 0,
      adminCount: roles.ADMIN || 0,
      refreshKey,
    };
  }, [activityRange, refreshKey]);

  const visibleUsers = stats.newestUsers.filter((user) =>
    `${user.name} ${user.username} ${user.role}`.toLowerCase().includes(userSearch.toLowerCase())
  ).slice(0, 5);

  const alerts = [
    ...(stats.lowStock.length ? [{ type: "warning", title: `${stats.lowStock.length} product${stats.lowStock.length === 1 ? "" : "s"} need restocking`, detail: "Review stock levels before products sell out.", link: "/admin/products", action: "Manage stock" }] : []),
    ...(stats.users.length === 0 ? [{ type: "info", title: "No registered users yet", detail: "Your user metrics will appear after registrations.", link: "/admin/users", action: "View users" }] : []),
    ...(stats.orders.length === 0 ? [{ type: "info", title: "No orders recorded yet", detail: "Order activity will populate when orders are saved in this browser.", link: "/admin/products", action: "View products" }] : []),
  ];

  return (
    <div className="dashboard-layout admin-dashboard-layout">
      <Sidebar />
      <main className="dashboard-main admin-dashboard-main">
        <header className="adm-welcome">
          <div>
            <div className="adm-eyebrow"><FaChartLine /> MARKETPLACE OVERVIEW</div>
            <h1>Good day, Admin <span className="adm-wave">✦</span></h1>
            <p>Monitor your BSP CART marketplace, users, products, and order activity.</p>
          </div>
          <div className="adm-header-actions">
            <button className="adm-button adm-button-light" onClick={refresh} type="button"><FaSyncAlt /> Refresh</button>
            <button className="adm-button adm-button-primary" onClick={() => exportCsv("bsp-cart-users.csv", stats.users.map(({ username, name, role, products }) => ({ username, name, role, sellerProducts: products })))} type="button"><FaDownload /> Export users</button>
          </div>
        </header>

        <section className="adm-stat-grid" aria-label="Marketplace statistics">
          <StatCard label="Registered users" value={stats.users.length.toLocaleString("en-IN")} hint={`${stats.buyerCount} buyers · ${stats.sellerCount} sellers`} icon={<FaUsers />} tone="blue" />
          <StatCard label="Active sellers" value={stats.sellerCount.toLocaleString("en-IN")} hint={`${stats.adminCount} admin account${stats.adminCount === 1 ? "" : "s"}`} icon={<FaStore />} tone="violet" />
          <StatCard label="Listed products" value={stats.products.length.toLocaleString("en-IN")} hint={`${stats.categories ? Object.keys(stats.categories).length : 0} product categories`} icon={<FaBoxOpen />} tone="green" />
          <StatCard label="Orders recorded" value={stats.orders.length.toLocaleString("en-IN")} hint={`${stats.itemCount} items across saved orders`} icon={<FaShoppingBag />} tone="orange" />
        </section>

        <section className="adm-secondary-stats" aria-label="Additional statistics">
          <div className="adm-mini-stat"><span className="adm-mini-icon blue"><FaUserFriends /></span><div><small>Buyers</small><strong>{stats.buyerCount}</strong></div><span className="adm-mini-note">Customer accounts</span></div>
          <div className="adm-mini-stat"><span className="adm-mini-icon orange"><FaExclamationTriangle /></span><div><small>Low stock</small><strong>{stats.lowStock.length}</strong></div><Link to="/admin/products">Review <FaArrowRight /></Link></div>
          <div className="adm-mini-stat"><span className="adm-mini-icon green"><FaRupeeSign /></span><div><small>Inventory value</small><strong>{money(stats.inventoryValue)}</strong></div><span className="adm-mini-note">Current stock × listed price</span></div>
        </section>

        <section className="adm-main-grid">
          <article className="adm-panel adm-chart-panel">
            <div className="adm-panel-heading">
              <div><span className="adm-panel-kicker">ORDER PERFORMANCE</span><h2>Order activity</h2><p>Orders grouped by the saved order date</p></div>
              <select aria-label="Order activity date range" value={activityRange} onChange={(event) => setActivityRange(event.target.value)}>
                <option value="6">Last 6 months</option><option value="12">Last 12 months</option>
              </select>
            </div>
            <div className="adm-chart-summary"><strong>{stats.orders.length}</strong><span>total orders saved</span><span className="adm-chart-chip">{stats.monthOrders} this month</span></div>
            <div className="adm-chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stats.orderActivity} margin={{ top: 10, right: 12, left: -20, bottom: 0 }}>
                  <defs><linearGradient id="orderFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity={0.22} /><stop offset="95%" stopColor="#4f46e5" stopOpacity={0.015} /></linearGradient></defs>
                  <CartesianGrid stroke="#e9edf5" strokeDasharray="4 4" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#7b8498", fontSize: 12 }} />
                  <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#7b8498", fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e7eaf2", boxShadow: "0 8px 24px rgba(30,41,59,.1)" }} />
                  <Area type="monotone" dataKey="orders" name="Orders" stroke="#4f46e5" strokeWidth={3} fill="url(#orderFill)" activeDot={{ r: 5 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {stats.orders.length === 0 && <p className="adm-chart-footnote">No order history found yet. This chart will update when orders are stored.</p>}
          </article>

          <article className="adm-panel adm-category-panel">
            <div className="adm-panel-heading"><div><span className="adm-panel-kicker">CATALOG HEALTH</span><h2>Products by category</h2><p>Current catalogue distribution</p></div></div>
            {Object.keys(stats.categories).length ? (
              <div className="adm-category-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={Object.entries(stats.categories).map(([category, count]) => ({ category: category.replace(/[-_]/g, " "), products: count }))} layout="vertical" margin={{ top: 8, right: 16, left: 4, bottom: 4 }}>
                <CartesianGrid stroke="#edf0f6" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#7b8498", fontSize: 11 }} />
                <YAxis type="category" dataKey="category" width={88} axisLine={false} tickLine={false} tick={{ fill: "#596579", fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="products" name="Products" fill="#14b8a6" radius={[0, 7, 7, 0]} barSize={18} />
              </BarChart></ResponsiveContainer></div>
            ) : <EmptyState>No products to chart yet.</EmptyState>}
            <div className="adm-panel-footer"><span><FaBoxOpen /> {stats.products.length} products total</span><Link to="/admin/products">Manage catalogue <FaArrowRight /></Link></div>
          </article>
        </section>

        <section className="adm-bottom-grid">
          <article className="adm-panel">
            <div className="adm-panel-heading"><div><span className="adm-panel-kicker">ATTENTION NEEDED</span><h2><FaBell className="adm-heading-icon" /> Marketplace alerts</h2></div><span className={`adm-alert-count ${alerts.length ? "has-alerts" : ""}`}>{alerts.length}</span></div>
            {alerts.length ? <div className="adm-alert-list">{alerts.map((alert) => <div className={`adm-alert-row ${alert.type}`} key={alert.title}><span className="adm-alert-symbol">{alert.type === "warning" ? <FaExclamationTriangle /> : <FaCheckCircle />}</span><div className="adm-alert-copy"><strong>{alert.title}</strong><p>{alert.detail}</p><Link to={alert.link}>{alert.action} <FaArrowRight /></Link></div></div>)}</div> : <EmptyState><FaCheckCircle /> All clear — no dashboard alerts right now.</EmptyState>}
          </article>

          <article className="adm-panel">
            <div className="adm-panel-heading"><div><span className="adm-panel-kicker">COMMUNITY</span><h2>Recently registered users</h2><p>Latest accounts in this browser's user store</p></div><Link className="adm-text-link" to="/admin/users">View all <FaArrowRight /></Link></div>
            <label className="adm-user-search"><FaSearch /><input value={userSearch} onChange={(event) => setUserSearch(event.target.value)} placeholder="Search name, username or role" /></label>
            {visibleUsers.length ? <div className="adm-user-list">{visibleUsers.map((user, index) => <div className="adm-user-row" key={user.username || `${user.name}-${index}`}><span className={`adm-avatar avatar-${index % 5}`}>{String(user.name || user.username || "U").trim().charAt(0).toUpperCase()}</span><span className="adm-user-copy"><strong>{user.name || user.username}</strong><small>@{user.username}</small></span><span className={`adm-role-pill role-${String(user.role || "BUYER").toLowerCase()}`}>{user.role || "BUYER"}</span></div>)}</div> : <EmptyState>{userSearch ? "No users match your search." : "No users have registered yet."}</EmptyState>}
            <div className="adm-panel-footer"><span><FaUserShield /> User role summary</span><span>{stats.adminCount} admins · {stats.sellerCount} sellers · {stats.buyerCount} buyers</span></div>
          </article>
        </section>

        <section className="adm-quick-actions">
          <div><span className="adm-panel-kicker">SHORTCUTS</span><h2>Quick actions</h2><p>Jump straight to common admin tasks.</p></div>
          <div className="adm-action-buttons">
            <Link to="/admin/users"><FaUsers /><span>Manage users</span><FaArrowRight className="adm-action-arrow" /></Link>
            <Link to="/admin/products"><FaBoxOpen /><span>Manage products</span><FaArrowRight className="adm-action-arrow" /></Link>
            <button type="button" onClick={() => exportCsv("bsp-cart-products.csv", stats.products.map(({ id, name, category, price, stock, seller }) => ({ id, name, category, price, stock, seller })))}><FaDownload /><span>Export products</span><FaArrowRight className="adm-action-arrow" /></button>
            <button type="button" onClick={() => exportCsv("bsp-cart-orders.csv", stats.orders.map((order, index) => ({ id: order.id || `Order ${index + 1}`, date: order.date || order.createdAt || "", items: (order.items || []).length, status: order.status || "Recorded" })))}><FaDownload /><span>Export orders</span><FaArrowRight className="adm-action-arrow" /></button>
          </div>
        </section>
        <footer className="adm-dashboard-footer">BSP CART Admin Console <span>·</span> Statistics are calculated from the current browser storage.</footer>
      </main>
    </div>
  );
}
