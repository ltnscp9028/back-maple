const express = require('express');
const router = express.Router();
const ctrl = require("./arcaneCtrl");

router.post("/symbol",ctrl.postSymbol);
// router.get("/symbol/:nowSymbolLevel/:nowSymbolCount/:getSymbolCount",ctrl.symbol);
module.exports = router;