import React from 'react'
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">FirstLayout</Link>
        <Link to="/secondLayout">SecondLayout</Link>
        <Link to="/admin/thirdLayout">ThirdLayout</Link>
      </nav>
      <Outlet />
      <footer>This is my footer</footer>
    </div>
  );
}
