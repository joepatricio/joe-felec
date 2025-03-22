import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Views from "./views/containers";
import * as Examples from "./views/containers/Examples";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Views.Homepage />} />
      <Route path="/employee" element={<Views.EmployeeList />} />
      <Route path="/employee/add" element={<Views.EmployeeForm />} />
      <Route path="/context" element={<Examples.ContextExample />} />
    </Routes>
  );
};

export default AppRoutes;
