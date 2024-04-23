import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../Layout/Loader";
import MetaData from "../Layout/metaData";
const ProtectRoutes = ({ admin, children }) => {
  const { isAuthenticated, user, Loading } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (Loading) return <Loader></Loader>;
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }
  if (admin && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectRoutes;
