const ApiError = require('../utils/ApiError')
const adduserService = require('../services/addUserService')
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const createDtaa = catchAsync(async(req,res)=>{
    const data = await adduserService.createdata(req.body)
    res.send(data)
})
const getAll = catchAsync(async (req, res) => {
    const userdata = await adduserService.getAll();
    res.send(userdata);
  });

  const updatedata= catchAsync(async (req, res) => {
    const data = await adduserService.updateuser(req.params.id, req.body);
    res.send(data);
  });
  
  // const deletedata= catchAsync(async (req, res) => {
  //   const values = await adduserService.deleteUser(req.params.id);
  //   res.send(values);
  // });
  const deletedata = catchAsync(async (req, res) => {
    await adduserService.deleteUser(req.params.id);
    res.status(httpStatus.NO_CONTENT).send();
  });
  const getuserdatabyid = catchAsync(async (req, res) => {
    const data = await adduserService.getuserDetailsById(req.params.id)
    res.send(data);
  });

module.exports = {
    createDtaa,
    getAll,
    deletedata,
    updatedata,
    getuserdatabyid,
}