import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const fileSchema = new Schema({
   name: {
       type: String,
       required: true
   },
   type: String,
   extension: String,
   destination: String
}, {
   collection: 'files',
   timestamps: true
});

const File = model('File', fileSchema);
module.exports = File;

