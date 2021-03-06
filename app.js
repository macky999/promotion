const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const promotion = require("./promotion");

app.get("/", (req, res) => {
  res.send("good");
});

app.listen(PORT, () => {
  promotion([
    { proID: "01", qty: 4, price: 8000, discount: 0, promotionID: "" },
    { proID: "02", qty: 3, price: 8000, discount: 0, promotionID: "" },
    { proID: "03", qty: 5, price: 11000, discount: 0, promotionID: "" },
    { proID: "05", qty: 5, price: 9000, discount: 0, promotionID: "" },
    {
      proID: "06",
      qty: 1,
      price: 5000,
      discount: 0,
      promotionID: ""
    }
  ]);
});
