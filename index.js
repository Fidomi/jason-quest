import express from "express";
import { routes } from "./src/routes";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose
    .connect("mongodb://127.0.0.1:27017/jasondb")
    .catch((error) => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

app.get("/", (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
