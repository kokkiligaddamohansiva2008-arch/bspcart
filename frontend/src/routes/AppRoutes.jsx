import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

// Public pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import HelpCenter from "../pages/HelpCenter";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import ReturnPolicy from "../pages/ReturnPolicy";
import FAQs from "../pages/FAQs";

// Buyer pages (require login)
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import BuyerDashboard from "../pages/BuyerDashboard";

// Seller / Admin pages
import SellerDashboard from "../pages/SellerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUsers from "../pages/AdminUsers";
import AdminProducts from "../pages/AdminProducts";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/faqs" element={<FAQs />} />

      {/* Buyer-protected routes (any logged-in user) */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/buyer/dashboard"
        element={
          <ProtectedRoute buyerOnly>
            <BuyerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Seller-protected routes */}
      <Route
        path="/seller/dashboard"
        element={
          <ProtectedRoute sellerOnly>
            <SellerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin-protected routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute adminOnly>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute adminOnly>
            <AdminUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute adminOnly>
            <AdminProducts />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;