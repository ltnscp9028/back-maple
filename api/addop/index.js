const express = require('express');
const router = express.Router();
const ctrl = require('./addop_ctrl');
router.get("/:lv/:sorm",ctrl.data);
router.get("/:lv",ctrl.weapon);

// router.get("/:id",ctrl.detail);

router.post("/",ctrl.test);
router.post("/weapon",ctrl.weaponAddop);
// router.put("/:id",ctrl.update);
// router.delete("/:id",ctrl.remove);

module.exports = router;