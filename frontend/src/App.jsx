import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />

        <main style={{ minHeight: "80vh" }}>
          <AppRoutes />
        </main>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
