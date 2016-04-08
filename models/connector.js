(function () {
    var mongoose = require('mongoose');
    var db;
    var dburl = "mongodb://test:t@ds055732.mlab.com:55732/mdtdb";
 
    module.exports =  {
        connect: function () {
            mongoose.connect(dburl);
            db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.on('connected', console.log.bind(console, 'A client is connected')); 
        },
        db: function() {
            return db;
        },
        close: function() {
            db.close();
            console.log("fin de connection");
        }
    };
})();