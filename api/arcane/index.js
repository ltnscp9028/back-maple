const express = require('express');
const router = express.Router();
const ctrl = require("./arcaneCtrl");

router.get("/test",ctrl.test);
router.get("/reinforce/armor/:mainStat/:subStat/:upgradeCount",ctrl.upStat);

module.exports = router;