import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-pink-400 w-screen h-full overflow-hidden">
        <div>
          <div className="flex justify-center pt-4 "></div>
        </div>
        <Cards />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
