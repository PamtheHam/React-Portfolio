import React, { useState } from "react";
import NavTabs from "./NavTabs";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <HomePage />;
    }
    if (currentPage === "About") {
      return <AboutPage />;
    }
    if (currentPage === "Projects") {
      return <ProjectsPage />;
    }
    return <ContactPage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
