import connection from "../src/config/connection";
import express from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("TS server is breathing");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
