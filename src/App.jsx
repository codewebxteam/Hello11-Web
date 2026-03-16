import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar"; // Naya Sidebar Component

// Context Provider (Zaroori hai kyunki Hero/Fleet isse use kar rahe hain)
import { BookingProvider } from "./context/BookingContext";

// Pages
import Home from "./pages/home";
import Ride from "./pages/ride";
import Rent from "./pages/rent";
import About from "./pages/about";

function App() {
  return (
    <BookingProvider>
      <Router>
        {/* bg-white rakha hai taaki premium light theme dikhe */}
        <div className="min-h-screen bg-white flex flex-col selection:bg-yellow-400 selection:text-black font-sans">
          {/* 1. Sidebar (Fixed hai, har page par dikhega) */}
          <Sidebar />

          {/* 2. Header (Navigation) */}
          <Header />

          {/* 3. Main Content Area */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<Home />} />

              {/* Ride Page Route (Pickup/Drop/Local) */}
              <Route path="/ride" element={<Ride />} />

              {/* Rent Page Route (Self-Drive/Rental) */}
              <Route path="/rent" element={<Rent />} />

              {/* About Page Route (Our Story/Legacy) */}
              <Route path="/about" element={<About />} />

              {/* Catch-all Route: Redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* 4. Footer */}
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
