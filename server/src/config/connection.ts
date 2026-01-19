import mysql, { QueryError } from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tscrud",
});

connection.connect((err: QueryError | null) => {
  if (err) {
    console.error("DB CONNECTION FAILED:", err.message);
    process.exit(1);
  }
  console.log("DB CONNECTED");
});

export default connection;
