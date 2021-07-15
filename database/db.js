const mongoose=require('mongoose');

var DB = 'mongodb+srv://jyoti:jyotibhandari@cluster0.ckuzv.mongodb.net/jyotiDB?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("database connected.."))
    .catch((err) => console.log(err))







