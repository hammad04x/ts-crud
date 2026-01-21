import express from "express";
import cors from "cors"
import router from "./routes/user";

const app = express();

app.use("/upload", express.static("upload"));

app.use(cors());
app.use("/", router);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
