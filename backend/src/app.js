import express from "express";

const app = express();

app.get("/api/v1/signup", (req, res) => {
  res.send("Hello World!");
});

export default app;
