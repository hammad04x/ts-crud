import { Request, Response } from "express";
import connection from "../config/connection";
import { QueryError } from "mysql2";

const getUser = (req: Request, res: Response) => {
    const query = "SELECT * FROM user";

    connection.query(query, (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
};

const addUser = (req: Request, res: Response) => {
    const {name,img}=req.body;
    const query = "INSERT INTO users (name, img) VALUES (?, ?) ";
    connection.query(query,[name, img ?? null], (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
}

export { getUser,addUser }