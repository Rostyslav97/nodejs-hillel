import express from "express";
import dotenv from "dotenv";
import currencyRouter from "./routes/currency.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/currency", currencyRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
