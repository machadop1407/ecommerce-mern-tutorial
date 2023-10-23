import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopPage } from "./pages/shop";
import { AuthPage } from "./pages/auth";
import { CheckoutPage } from "./pages/checkout";
import { ShopContextProvider } from "./context/shop-context";
import { Navbar } from "./components/navbar";
import { PurchasedItemsPage } from "./pages/purchased-items";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/purchased-items" element={<PurchasedItemsPage />} />
          </Routes>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
