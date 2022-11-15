import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p className="bg-dark m-0 text-center py-1 fixed-bottom text-light">
          Ferdous Zihad || All Right Reserved
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
