const express = require('express');
const router = express.Router();
const ctrl = require("./arcaneCtrl");

router.get("/test",ctrl.test);
router.get("/reinforce/armor/:mainStat/:subStat/:upgradeCount",ctrl.upStat);
router.get("/reinforce/weapon/:mainStat/:subStat/:upgradeCount",ctrl.weaponReinforce);
module.exports = router;