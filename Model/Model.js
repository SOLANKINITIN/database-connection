const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ModelSchema = new schema({
    DisecaseName: String,
    Summary: String,
    Cause: String,
    mediciense: String,
})
module.exports = mongoose.model("Model", ModelSchema)