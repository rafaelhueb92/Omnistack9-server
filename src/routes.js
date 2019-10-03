const express = require("express");
const routes = express.Router();
const multer = require("multer");
const uploaderConfig = require("./config/upload");
const sessionController = require("./controllers/session.controller");
const spotController = require("./controllers/spot.controller");
const dashboardController = require("./controllers/dashboard.controller");
const bookingController = require("./controllers/booking.controller");
const upload = multer(uploaderConfig);

routes.get("/spots", spotController.index);

routes.post("/sessions", sessionController.store);
routes.post("/spots", upload.single("thumbnail"), spotController.store);

routes.get("/dashboard", dashboardController.show);
routes.post("/spots/:spot_id/bookings", bookingController.store);

module.exports = routes;
