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
const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    const query = "SELECT * FROM user WHERE id = ?";

    connection.query(query, [id], (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
};

const addUser = (req: Request, res: Response) => {
    const { name } = req.body;
    const img = req.file ? req.file.filename : null;
    const query = "INSERT INTO user (name, img) VALUES (?, ?) ";
    connection.query(query, [name, img], (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
}
const editUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const img = req.file ? req.file.filename : null;
    const query = "UPDATE user SET name = ?, img = ? WHERE id = ?";
    connection.query(query, [name, img, id], (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
}
const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const query = "DELETE FROM user WHERE id = ?";
    connection.query(query, [id], (err: QueryError | null, data: any[]) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Database error" });
        } else {
            return res.json(data);
        }
    });
}

export { getUser,getUserById, addUser, editUser,deleteUser }