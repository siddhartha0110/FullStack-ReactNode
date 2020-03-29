const express = require('express')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connection successfull")
    })

const app = express();
app.use(express.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //Express serves our production assets like main.js & main.css file
    app.use(express.static('client/build'));

    //Express serves index.html for unknown routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send({ hi: 'Welcome' })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
