import React from "react";
import Dashboard from "../pages/dashboard/page";
import Categories from "../pages/categories/page";

import Aspects from "../pages/aspects/page";

import Timeline from "../pages/timeline/page";

import Explore from "../pages/explore-regions/page";

import Locations from "../pages/locations/page";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/aspects" element={<Aspects />} />
        {/* add this routes explore-regions , loactions , */}
        <Route path="/explore-regions" element={<Explore />} />
        <Route path="/locations" element={<Locations />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;
