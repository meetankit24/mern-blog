import mysql from "mysql";
export const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "Admin@123",
    database: "blog"
})
// Connect to MySQL server
db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("Database connected!!");
    }
});

