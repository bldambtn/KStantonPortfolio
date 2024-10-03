// Import React Router components for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Onsen UI Page component
import { Page } from "react-onsenui"; 

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import pages
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// Import global styles
import "./App.css";

function App() {
  return (
    <Router>
      <Page>
        <div className="app-container">
          {" "}
          {/* Ensure app-container wraps everything */}
          {/* Render the Header */}
          <Header />
          {/* Main content area */}
          <div className="app">
            {/* Routes for different pages */}
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          {/* Render the Footer */}
          <Footer />
        </div>
      </Page>
    </Router>
  );
}

// Export the App component so it can be used in other parts of the project
export default App;
