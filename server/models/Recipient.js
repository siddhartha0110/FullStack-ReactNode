const mongoose = require("mongoose");

const schema = mongoose.Schema;

const RecipientSchema = new schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    }
});

module.exports = RecipientSchema