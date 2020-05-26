var AWS = require('aws-sdk');
var s3 = new AWS.S3();

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
};

function getKeyName(folder, filename) {
    return folder + '/' + filename;
}