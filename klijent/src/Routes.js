import React from "react";
import { Routes, Route } from "react-router-dom";
import { DataTable } from "./DataTable";
import Forma from "./Forma";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataTable />} />
      <Route path="/grpc" element={<Forma data={null} />} />
      <Route path="/graphql" element={<Forma data={null} />} />
    </Routes>
  );
};

export default MyRoutes;
