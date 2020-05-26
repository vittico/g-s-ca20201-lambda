var AWS = require('aws-sdk');
var s3 = new AWS.S3();
const http = require('http');

exports.handler = (event, context, callback) => {
    var bucketName = process.env.bucketName;
    var keyName = getKeyName(process.env.folder, process.env.filename);
    var content = 'Esta es el archivo que la lambda creo!';

    var params = { Bucket: bucketName, Key: keyName, Body: content };

    s3.putObject(params, function (err, data) {
        if (err)
            console.log(err)
        else
            console.log("He creado coorrectamente el obbjeto: " + bucketName + "/" + keyName);
    });

    // el get al acs
    const req = http.request( process.env.ecsurl, (resp) => {
        console.log(process.env.ecsurl);
    });

};

function getKeyName(folder, filename) {
    return folder + '/' + filename;
}