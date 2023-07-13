import React from "react";
import { Routes, Route } from "react-router-dom";
import { DataTable } from "./DataTable";
import Forma from "./Forma";
import FormGQL from "./GraphQL/FormGQL";
import GraphQL from "./GraphQL/graphql";
import GRPCClient from "./gRPC/klijent";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataTable />} />
      <Route path="/grpc" element={<GRPCClient/>} />
      <Route path="/graphql" element={<GraphQL />} />
    </Routes>
  );
};

export default MyRoutes;
