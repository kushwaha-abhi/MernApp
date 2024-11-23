const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
// app.use(errorMiddleware);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);

module.exports = app;
