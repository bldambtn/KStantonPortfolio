import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components for routing
// Import components
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Project from "./components/Project";
import Navigation from "./components/Navigation";
// Import pages
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// Import global styles
import "./App.css"; 

// Define the App component, which serves as the main component of the application
function App() {
  return (
    // Router component wraps the entire app to enable routing between different pages
    <Router>
      <div className="app">
        {/* Header component */}
        <Header />
        
        {/* Navigation component rendered separately */}
        <Navigation />

        {/* Routes component defines different routes for the app */}
        <Routes>
          {/* Define the route for the AboutMe page */}
          <Route path="/" element={<AboutMe />} />

          {/* Define the route for the Portfolio page */}
          <Route 
            path="/portfolio" 
            element={
              <Portfolio>
                {/* Project components are rendered inside the Portfolio page */}
                <Project title="Project 1" description="Description of project 1" />
                <Project title="Project 2" description="Description of project 2" />
                <Project title="Project 3" description="Description of project 3" />
              </Portfolio>
            } 
          />

          {/* Define the route for the Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Define the route for the Resume page */}
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component so it can be used in other parts of the project
export default App;