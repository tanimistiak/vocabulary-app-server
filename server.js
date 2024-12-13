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
const { userRouter } = require("./routes/user.routes");
const { logoutRouter } = require("./routes/logout.routes");
// env variable
require("dotenv").config({
  path: [".env.local", ".env"],
});
//middlewares
app.use(
  cors({
    origin: "https://vocabulary-app-client.onrender.com",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// firebase admin
//
const serviceAccount = require("./firebase-service-key.json");
// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// connect to db
connectToDatabase();
//routes
// just change vercel commit
app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", meRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api", logoutRouter);
//global route
app.get("/", (req, res, next) => {
  res.send("Hola Japan");
});

app.listen(5000, (req, res) => {
  console.log("running");
});

exports.app = app;
