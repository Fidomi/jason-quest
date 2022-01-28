import express from "express";
import { routes } from "./routes";
import mongoose from "mongoose";
import path from "path";
import CONFIG from "../config";

const app = express();
const PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 8000;
}

//mongoose connection
mongoose.Promise = global.Promise;
process.env.NODE_ENV === "production"
    ? mongoose
          .connect(CONFIG.connectionString)
          .catch((error) => console.error(error))
    : mongoose
          .connect("mongodb://127.0.0.1:27017/jasondb")
          .catch((error) => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

process.env.NODE_ENV === "production"
    ? app.use(express.static(path.join(__dirname, "/frontend/build")))
    : app.use(express.static(path.join(__dirname, "/frontend/")));

routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
