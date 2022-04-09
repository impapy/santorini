const users = require("../controller/users.controller");
const router = require("express").Router();

router.get("/",users.getallusers);
router.post("/",users.creatusers);
router.get("/:id",users.getuser);
router.put("/:id",users.ubdateById);
router.delete("/:id",users.deleteById);


module.exports = router;