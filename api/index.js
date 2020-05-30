
const {Router} = require("express");
const router = Router();

router.use("/addop",require("./addop/"));
// router.use("/mvp",require("./mvp/"));

module.exports = router;
