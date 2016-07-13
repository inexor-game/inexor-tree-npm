const grpc = require('grpc');

module.exports.util = require('./util');
module.exports.Node = require('./Node');
module.exports.Root = require('./Root');

// If a http server instance is given, return a full Inexor tree
module.exports = function(opts) {
    if (opts == instanceof(http.Server)) {
        return module.exports.Root.createTree(server, grpc);
    }
}
