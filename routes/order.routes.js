const express = require("express");
const router = express.Router();
const Order = require("../controllers/order.controller");
const { authentication, isAdmin } = require("../middlewares/auth.middleware");



router.post("/orders" ,authentication ,  Order.createOrder);

router.get("/orders/:userId" , authentication , Order.getOrdersByUserId);

router.patch("/orders/:id" , authentication , isAdmin,  Order.updateOrderStatus)


module.exports = router;
