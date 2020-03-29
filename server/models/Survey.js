const mongoose = require("mongoose");
const schema = mongoose.Schema;
const RecipientSchema = require('./Recipient');

const SurveySchema = new schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', SurveySchema);