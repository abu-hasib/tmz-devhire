import menu from "./assets/menu.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDevs } from "./features/devSlice";
import { SideBar } from "./components/SideBar";
import { Footer } from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const {
        data: {
          data: {
            service_search_results: { hits },
          },
        },
      } = await Axios.get(
        "https://api.terawork.com/service-categories/sellers-services/computer-software-development",
        { limit: 10 }
      );
      dispatch(loadDevs(hits));
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className={`grid App ${isOpen ? "adjust" : ""}`}>
      <SideBar isOpen={isOpen} />
      <Home {...{ isOpen, setIsOpen }} />
    </div>
  );
}

export function Home({ isOpen, setIsOpen }) {
  return (
    <main className="">
      <img
        src={menu}
        alt="menu"
        className="menu pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}

export function formatAmount(amout) {
  return amout.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export default App;
