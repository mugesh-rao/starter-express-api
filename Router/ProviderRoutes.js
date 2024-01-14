// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const OwnerUserAuth = require("../controller/admin/OwnerAuth");
const machineController = require("../controller/machine.controller");
const {
    getAdminOrders,
  } = require("../controller/User/Order");
router.post("/register", OwnerUserAuth.ownerRegistration);
router.post("/login", OwnerUserAuth.ownerLogin);
router.post("/createprofile", OwnerUserAuth.createOwnerProfile);
router.get("/getorders/:ownerId", getAdminOrders);

router.post("/machines/add", machineController.addMachine);
router.put("/machines/edit/:id", machineController.EditMachine);
router.delete("/machines/delete/:id", machineController.DeleteMachine);

router.get("/profile/update", OwnerUserAuth.updateProfile);

module.exports = router;