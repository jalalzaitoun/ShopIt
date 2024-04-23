import express from "express";
const router = express.Router();

import {
  authirizeRole,
  isAuthenticatedUser,
} from "../middlware/authMiddlware.js";
import {
  allOrders,
  deleteOrder,
  getOrderDetails,
  getSales,
  myOrders,
  newOrder,
  updateOrder,
} from "../Controllers/orderController.js";

router.route("/orders/new").post(isAuthenticatedUser, newOrder);
router.route("/orders/:id").get(isAuthenticatedUser, getOrderDetails);
router.route("/me/orders").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authirizeRole("admin"), allOrders);

router
  .route("/admin/get_sales")
  .get(isAuthenticatedUser, authirizeRole("admin"), getSales);

router
  .route("/admin/orders/:id")
  .put(isAuthenticatedUser, authirizeRole("admin"), updateOrder)
  .delete(isAuthenticatedUser, authirizeRole("admin"), deleteOrder);

export default router;
