import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  getUserDetails,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
  uploadAvatar,
} from "../Controllers/authController.js";
import {
  authirizeRole,
  isAuthenticatedUser,
} from "../middlware/authMiddlware.js";
// import { updateProductDetails } from "../Controllers/productController.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/profileUser").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authirizeRole("admin"), allUsers);
router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser, authirizeRole("admin"), getUserDetails)
  .put(isAuthenticatedUser, authirizeRole("admin"), updateUser)
  .delete(isAuthenticatedUser, authirizeRole("admin"), deleteUser);
export default router;
