
const {Router} = require("express");
const router = Router();

router.use("/addop",require("./addop"));
router.use("/reinforce",require("./reinforce"));
router.use("/arcane",require('./arcane'));
// router.use("/mvp",require("./mvp/"));

module.exports = router;
