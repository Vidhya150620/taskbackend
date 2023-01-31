const express = require('express');
const adduserController = require('../../controllers/addUser.controller')
const router = express.Router();

router.route('/adduser').post(adduserController.createDtaa);
router.route('/get/user').get(adduserController.getAll);
router.route('/update/user/:id').put(adduserController.updatedata);
router.route('/delete/user/:id').delete(adduserController.deletedata);
router.route('/get/user/byid/:id').get(adduserController.getuserdatabyid)
module.exports = router;