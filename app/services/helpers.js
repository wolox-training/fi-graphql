exports.encode = object => Buffer.from(JSON.stringify(object)).toString('base64');

exports.decode = string => JSON.parse(Buffer.from(string, 'base64').toString());
