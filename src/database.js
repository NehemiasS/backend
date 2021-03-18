const mongoose = require('mongoose');
//const { db } = require('./models/user');

const URI = process.env.MONGOOSE_URI
? process.env.MONGOOSE_URI  //validacion ternaria 'if' : else' 
: 'mongodb://localhost/colabcafe';

//const URI =`mongodb+srv://bddColabCafe:abc12345@colabcafe.wnmlo.mongodb.net/mycolab?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});