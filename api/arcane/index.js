const express = require('express');
const router = express.Router();
const ctrl = require("./arcaneCtrl");

router.get("/test",ctrl.test);
router.get("/symbol/:nowSymbolLevel/:nowSymbolCount/:getSymbolCount",ctrl.symbol);
module.exports = router;