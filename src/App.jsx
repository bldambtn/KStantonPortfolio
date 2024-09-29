import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components for routing
import { Page } from 'react-onsenui'; // Import Onsen UI Page component

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Project from "./components/Project";
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
        <div className="app">
          {/* Render the Header which now includes the Navigation */}
          <Header />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          {/* Render the Footer */}
          <Footer />
        </div>
      </Page>
    </Router>
  );
}

// Export the App component so it can be used in other parts of the project
export default App;