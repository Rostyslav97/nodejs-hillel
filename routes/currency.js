import express from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const PRIVATBANK_API_URL = process.env.PRIVATBANK_API_URL;

const SUPPORTED_CURRENCIES = ["USD", "EUR"];

router.get("/", async (req, res) => {
  try {
    const response = await fetch(PRIVATBANK_API_URL);
    if (!response.ok) {
      throw new Error(`PrivatBank API returned status ${response.status}`);
    }

    const data = await response.json();
    const rates = {};
    data.forEach(item => {
      if (SUPPORTED_CURRENCIES.includes(item.ccy)) {
        rates[item.ccy] = {
          buy: parseFloat(item.buy),
          sale: parseFloat(item.sale)
        };
      }
    });

    res.json(rates);
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({
      error: "Failed to fetch currency rates",
      details: error.message
    });
  }
});

router.get("/:curr", async (req, res) => {
  const curr = req.params.curr.toUpperCase();

  if (!SUPPORTED_CURRENCIES.includes(curr)) {
    return res.status(400).json({
      error: `Invalid currency. Supported currencies are ${SUPPORTED_CURRENCIES.join(", ")}.`
    });
  }

  try {
    const response = await fetch(PRIVATBANK_API_URL);
    if (!response.ok) {
      throw new Error(`PrivatBank API returned status ${response.status}`);
    }

    const data = await response.json();

    const rates = {};
    data.forEach(item => {
      if (SUPPORTED_CURRENCIES.includes(item.ccy)) {
        rates[item.ccy] = {
          buy: parseFloat(item.buy),
          sale: parseFloat(item.sale)
        };
      }
    });

    res.json({ [curr]: rates[curr] });
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({
      error: "Failed to fetch currency rates",
      details: error.message
    });
  }
});

export default router;
