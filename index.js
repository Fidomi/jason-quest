import express from "express";
import routes from "./src/routes/jasonRoutes";
import mongoose from "mongoose";
import bodyParser, { urlencoded } from "body-parser";

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose
    .connect("mongodb://127.0.0.1:27017/jasondb")
    .catch((error) => console.error(error));

//bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.get("/", (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
