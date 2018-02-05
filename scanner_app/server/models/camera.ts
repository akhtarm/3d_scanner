import * as mongoose from 'mongoose';

const cameraSchema = new mongoose.Schema({
  id: Number,
  iso: Number,
  exposure: Number,
  led:[
        {
            id: Number,
            frequency: Number
        },
        {
            id: Number,
            frequency: Number
        },
        {
            id: Number,
            frequency: Number
        },
        {
            id: Number,
            frequency: Number
        }
    ]

});

const Camera = mongoose.model('Camera', cameraSchema);

export default Camera;
