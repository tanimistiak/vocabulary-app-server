const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./utils/db");
const admin = require("firebase-admin");
const { registerRouter } = require("./routes/register.routes");
const { loginRouter } = require("./routes/login.routes");
const { meRouter } = require("./routes/me.routes");
const { adminRouter } = require("./routes/admin.routes");

// env variable
dotenv.config();
//middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// firebase admin
const serviceAccount = require("./firebase-service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// connect to db
connectToDatabase();
//routes

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", meRouter);
app.use("/api/admin", adminRouter);
//global route
app.get("/", (req, res, next) => {
  res.send("Hola Japan");
});

app.listen(5000, (req, res) => {
  console.log("running");
});

exports.app = app;