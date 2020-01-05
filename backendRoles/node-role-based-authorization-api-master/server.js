require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/assignatures', require('./assignatures/assignatures.controller'));
app.use('/activitats', require('./activitats/activitats.controller'));
app.post('/api/upload', multipartMiddleware, (req, res) => {
             
    res.json({
        'message': req.files
    });
});
// global error handler
app.use(errorHandler);


// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});