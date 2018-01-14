var mongoose = require('mongoose');

module.exports = (uri, database) => {
    mongoose.connect("mongodb://" + uri + "/" + database);
    mongoose.connection.on('connected', ()=> {
        console.log('DB ready!')
    });
    mongoose.connection.on('error', (error)=> {
        console.log('DB error:' + error)
    });
    mongoose.connection.on('disconnected', (error)=> {
        console.log('DB down!')
    });
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('DB down: APP closed');
            process.exit(0);
        });
    });       
}