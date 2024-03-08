"use client"

import NavBar from "@/components/header/Navbar";
import Sidebar from "@/components/header/Sidebar";

const Header: React.FC = () => {
  return (
    <header aria-label="Main Navigation">
      <NavBar />
      <div className="md:block">
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
