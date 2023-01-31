

const mongoose = require('mongoose');
const { v4 } = require('uuid');
const moment = require('moment');
// const { number } = require('joi');

const adduserdata = mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  name: {
    type: String,
  },
  mobilenumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  State: {
    type: String
  },
  district:{
    type:String
  },
  countries:{
    type: String
  },
  email:{
    type: String
  },
  active: {
    type: Boolean,
    default: true,
  },
  archive: {
    type: Boolean,
    default: false,
  },

  date: {
    type: String,
    default: moment().utcOffset(330).format('DD-MM-yyy'),
  },
  time: {
    type: String,
    default: moment().utcOffset(330).format('h:mm a'),
  },
});

const userdatadetails = mongoose.model('userData', adduserdata);

module.exports = userdatadetails;