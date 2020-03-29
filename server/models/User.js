const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('users', UserSchema);