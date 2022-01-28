import express from "express";
import { routes } from "./backend/routes";
import mongoose from "mongoose";
import path from "path";

const app = express();
const PORT = 8080;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose
    .connect("mongodb://127.0.0.1:27017/jasondb")
    .catch((error) => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

process.env.NODE_ENV === "production"
    ? app.use(express.static(path.join(__dirname, "/frontend/build")))
    : app.use(express.static(path.join(__dirname, "/frontend/")));

routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/public/index.html"));
});

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
