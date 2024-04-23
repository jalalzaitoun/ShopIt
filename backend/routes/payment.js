import express from "express";
const router = express.Router();

import { isAuthenticatedUser } from "../middlware/authMiddlware.js";
import {
  stripeCheckoutSession,
  stripeWebhook,
} from "../Controllers/PaymentController.js";

router
  .route("/payment/checkout_session")
  .post(isAuthenticatedUser, stripeCheckoutSession);

router.route("/payment/webhook").post(stripeWebhook);

export default router;
