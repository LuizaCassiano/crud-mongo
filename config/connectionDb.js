const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/school', {  
    useNewUrlParser : true, 
    useUnifiedTopology : true
})

module.exports = mongoose