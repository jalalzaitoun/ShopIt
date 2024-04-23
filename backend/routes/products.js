import express from "express";
import {
  canUserReview,
  createProductReview,
  deleteProduct,
  deleteProductDetails,
  deleteProductImage,
  deleteReview,
  getProductDetails,
  getProductReviews,
  getProducts,
  newProduct,
  updateProduct,
  uploadProductImages,
} from "../Controllers/productController.js";

import { isAuthenticatedUser } from "../middlware/authMiddlware.js";
import { authirizeRole } from "../middlware/authMiddlware.js";
import { getAdminProducts } from "../Controllers/productController.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductDetails);

router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .put(isAuthenticatedUser, createProductReview);

// router
// .route("/reviews/:id")
// .get(isAuthenticatedUser, getProductReviews)

router.route("/can_review").get(isAuthenticatedUser, canUserReview);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authirizeRole("admin"), getAdminProducts)
  .post(isAuthenticatedUser, authirizeRole("admin"), newProduct);
///////////////////
router
  .route("/admin/reviews")
  .delete(isAuthenticatedUser, authirizeRole("admin"), deleteReview);
//////////////
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authirizeRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authirizeRole("admin"), deleteProductDetails);
router
  .route("/admin/products/:id/upload_images")
  .put(isAuthenticatedUser, authirizeRole("admin"), uploadProductImages);
router
  .route("/admin/products/:id/delete_image")
  .put(isAuthenticatedUser, authirizeRole("admin"), deleteProductImage);
router
  .route("/admin/products/:id")
  .delete(isAuthenticatedUser, authirizeRole("admin"), deleteProduct);
export default router;
