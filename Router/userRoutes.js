// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  addAddress,
  editAddress,
  deleteAddress,
  getAddresses,
} = require("../controller/User/userAddress");
const machineController = require("../controller/machine.controller");
const { addFeedback } = require("../controller/User/feedback");
const UserAuth = require("../controller/User/UserAuth");
const OwnerUserAuth = require("../controller/admin/OwnerAuth");
const userController = require("../controller/User/userProfile");
const {
  PlaceOrder,
  getUserOrders,
  getAdminOrders,
} = require("../controller/User/Order");
const { UPIPayment, initiateCashfreePayment, Payments, createCashfreeOrder } = require("../controller/User/Payment");
const Multer = require("multer");
const uploadFile = require("../utils/mutler");

const upload = Multer({ storage: Multer.memoryStorage() });
const app = express();

router.post("/addAddress", addAddress);
router.get("/getAddresses/:userId", getAddresses);
router.put("/editAddress", editAddress);
router.delete("/deleteAddress", deleteAddress);
router.get("/machines", machineController.getMachines);
router.get("/getmachines/:id", machineController.getMachineById);
router.get("/profile/update", userController.updateProfile);
router.post("/place-orders", PlaceOrder);
router.get("/user-orders/:userId", getUserOrders);
router.post("/register", UserAuth.Registration);
router.post("/login", UserAuth.loginUser);
router.post("/sendOTP", UserAuth.sendOtpToUser);
router.post("/createprofile", UserAuth.createProfile);
router.post("/feedback", addFeedback);
router.post("/upi-payment", initiateCashfreePayment);
router.post("/payment", createCashfreeOrder);


module.exports = router;
