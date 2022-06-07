// import the scheme and model from mongoose
const { Schema, model } = require('mongoose')

// create new scheme
const BucketListItemSchema = new Schema(

{

    description: {
       type: String,
       required: true,

    },
    date: {

        type: Date,
        default: Date.now,
    },

})

const BucketListItem = model('bucketListItem', BucketListItemSchema)

module.exports = BucketListItem