const mongoose = require('mongoose');
const licenseSchema = new mongoose.Schema({
    license_id: {type: String, required: true},
    createdDate:{type:Number},
    expirationDate:{type:Number},
    os: {type: String, required: true},
    status: {type: String, default: "PENDING"},
    userId: {type: String, required: true},
    userName: {type: String, required: true}
});

const License = mongoose.model("License", licenseSchema);
module.exports = License;