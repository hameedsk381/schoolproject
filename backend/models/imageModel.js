import mongoose from 'mongoose';
const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection: {
        type: Array
    }
})
const Image = mongoose.model('Image',imageSchema);
export default Image;