import React from "react";
import { Routes, Route } from "react-router-dom";
import { DataTable } from "./DataTable";
import Forma from "./Forma";
import FormGQL from "./GraphQL/FormGQL";
import GraphQL from "./GraphQL/graphql";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataTable />} />
      <Route path="/grpc" element={<GraphQL/>} />
      <Route path="/graphql" element={<FormGQL />} />
    </Routes>
  );
};

export default MyRoutes;
