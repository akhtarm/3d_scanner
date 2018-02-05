import * as mongoose from 'mongoose';

const instructionSchema = new mongoose.Schema({
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
})

const Instruction = mongoose.model('Instruction', instructionSchema)

export default Instruction;