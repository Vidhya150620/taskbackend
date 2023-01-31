const ApiError = require('../utils/ApiError')
const adduserModel = require('../models/addUser.models')
const httpStatus = require('http-status');

const createdata = async(body) =>{
    console.log(body)
    let data = await adduserModel.create(body);
    return data;
}

const getAll = async()=>{
    return adduserModel.find();
}


const updateuser = async (id, userbody) => {
    let user = await adduserModel.findById(id);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'user Not found');
    }
    user = await adduserModel.findByIdAndUpdate({ _id: id }, userbody, { new: true });
    return user;
  };
  
  // const deleteUser = async (id) => {
  //   let userdata = await adduserModel.findById(id);
  //   if (!userdata) {
  //     throw new ApiError(httpStatus.NOT_FOUND, 'user Not found');
  //   }
  
  //   userdata.active = false;
  //   await userdata.save();
  // };
  const deleteUser = async (id) => {
    const adduserModelda = await adduserModel.findById(id);
    if (!adduserModelda) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    await adduserModelda.remove();
    return adduserModelda;
  };

  const getuserDetailsById = async (id) => {
    let values = await adduserModel.aggregate([
      {
        $match: {
          $and: [{ _id: { $eq: id } }],
        },
      },
    //   {
    //     $lookup: {
    //       from: 'b2bshopclones',
    //       localField: 'shopName',
    //       foreignField: '_id',
    //       as: 'shopDatq',
    //     },
    //   },
    //   {
    //     $unwind: '$shopDatq',
    //   },
    //   {
    //     $lookup: {
    //       from: 'wards',
    //       localField: 'shopDatq.Wardid',
    //       foreignField: '_id',
    //       as: 'wardDatq',
    //     },
    //   },
    //   {
    //     $unwind: '$wardDatq',
    //   },
    //   {
    //     $lookup: {
    //       from: 'streets',
    //       localField: 'shopDatq.Strid',
    //       foreignField: '_id',
    //       as: 'streetData',
    //     },
    //   },
    //   {
    //     $unwind: '$streetData',
    //   },
     
    //   {
    //     $lookup: {
    //       from:'shoplists',
    //       localField: 'shopDatq.SType',
    //       foreignField: '_id',
    //       as: 'shopTypeDetails'
    
    //     }
    //   },
    //   {
    //     $unwind: '$shopTypeDetails'
    //   },
    //   {
    //     $project: {
    //       wardNo: '$wardDatq.wardNo',
    //       streetname: '$streetData.street',
    //       shopType: '$shopDatq.type',
    //       OwnnerName: '$shopDatq.SOwner',
    //       mobile: '$shopDatq.mobile',
    //       address: '$shopDatq.address',
    //       shopTypeDetails: "$shopTypeDetails.shopList",
    //       idProofNo: 1,
    //       addressProofNo: 1,
    //       email: 1,
    //       shopname: "$shopDatq.SName"
    //     },
    //   },
    ]);
    return values;
  };

module.exports = {
    createdata,
    getAll,
    deleteUser,
    updateuser,
    getuserDetailsById,
}