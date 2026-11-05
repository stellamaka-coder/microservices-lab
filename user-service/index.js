const express = require("express");
const app = express();
const users = [
{ id: 1, name: "John Doe", email: "john@example.com", AGE: 30 },
{ id: 2, name: "Jane Smith", email: "jane@example.com", AGE: 25 }
];
app.get("/users", (req, res) => res.json(users));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3000, "0.0.0.0", () => console.log("User Service: 3000"));
