const express = require('express');
const router = express.Router();
const ctrl = require("./reinforceCtrl");

router.get("/test",ctrl.test);
router.get("/armor/:mainStat/:subStat/:upgradeCount",ctrl.upStat);
router.get("/weapon/:mainStat/:subStat/:upgradeCount",ctrl.weaponReinforce);
module.exports = router;