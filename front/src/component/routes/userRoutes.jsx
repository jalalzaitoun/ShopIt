import React from "react";
import { Route } from "react-router-dom";
import ProductDetails from "../product/productDetails";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../user/Profile";
import UpdateProfile from "../user/updateProfile";
import ProtectRoutes from "../auth/ProtectRoutes";
import UploadAvatar from "../user/uploadavatar";
import UpdatePassword from "../user/updatePassword";
import ForgotPassword from "../auth/ForgetPassword";
import ResetPassword from "../auth/ResetPassword";
import Cart from "../cart/Cart.jsx";
import Shipping from "../cart/Shipping.jsx";
import ConfirmOrder from "../cart/ConfirmOrder.jsx";
import PaymentMethod from "../cart/PaymentMethod.jsx";
import MyOrders from "../order/MyOrders.jsx";
import OrderDetails from "../order/OrderDetails.js";
import Invoice from "../Invoice/Invoice.jsx";
import Home from "../home.jsx";
const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/password/forgot" element={<ForgotPassword />}></Route>
      <Route path="/password/reset/:token" element={<ResetPassword />}></Route>
      <Route
        path="/me/profile"
        element={
          <ProtectRoutes>
            {" "}
            <Profile />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/me/update_profile"
        element={
          <ProtectRoutes>
            <UpdateProfile />{" "}
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/me/upload_avatar"
        element={
          <ProtectRoutes>
            <UploadAvatar />{" "}
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/me/update_password"
        element={
          <ProtectRoutes>
            <UpdatePassword />
          </ProtectRoutes>
        }
      ></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route
        path="/shipping"
        element={
          <ProtectRoutes>
            <Shipping />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/confirm_order"
        element={
          <ProtectRoutes>
            {" "}
            <ConfirmOrder />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/payment_method"
        element={
          <ProtectRoutes>
            {" "}
            <PaymentMethod />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/me/orders"
        element={
          <ProtectRoutes>
            <MyOrders />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/me/order/:id"
        element={
          <ProtectRoutes>
            <OrderDetails />
          </ProtectRoutes>
        }
      ></Route>
      <Route
        path="/invoice/order/:id"
        element={
          <ProtectRoutes>
            <Invoice />
          </ProtectRoutes>
        }
      ></Route>
    </>
  );
};

export default userRoutes;
