import React from "react";
import { Route } from "react-router";
import ProtectRoutes from "../auth/ProtectRoutes";
import DashBoard from "../adminDashBoard/DashBoard";
import ListProducts from "../adminDashBoard/ListProducts";
import NewProduct from "../adminDashBoard/NewProduct";

import UpdateProduct from "../adminDashBoard/UpdateProuduct";
import UploadImages from "../adminDashBoard/UploadImages";
import ListOrders from "../adminDashBoard/ListOrders";
import ProcessOrder from "../adminDashBoard/ProcessOrders";
import ListUsers from "../adminDashBoard/ListUsers";
import UpdateUser from "../adminDashBoard/UpdateUser";
import ProductReviews from "../adminDashBoard/ProductReviews";

const adminRoutes = () => {
  return (
    <>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectRoutes admin={true}>
            <DashBoard />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectRoutes admin={true}>
            <ListProducts />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/product/new"
        element={
          <ProtectRoutes admin={true}>
            <NewProduct />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/products/:id"
        element={
          <ProtectRoutes admin={true}>
            <UpdateProduct />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/products/:id/upload_images"
        element={
          <ProtectRoutes admin={true}>
            <UploadImages />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectRoutes admin={true}>
            <ListOrders />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <ProtectRoutes admin={true}>
            <ProcessOrder />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectRoutes admin={true}>
            <ListUsers />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/users/:id"
        element={
          <ProtectRoutes admin={true}>
            <UpdateUser />
          </ProtectRoutes>
        }
      />
      <Route
        path="/admin/reviews"
        element={
          <ProtectRoutes admin={true}>
            <ProductReviews />
          </ProtectRoutes>
        }
      />
    </>
  );
};

export default adminRoutes;
