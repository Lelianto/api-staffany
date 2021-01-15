import mongoose from 'mongoose';
import { shiftRouter } from '../routes/shift';

interface IShift {
    name: string,
    date: number,
    startTime: number,
    endTime: number
}

interface shiftModelInterface extends mongoose.Model<any> {
    build(attr:IShift): any
}
const shiftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    date: {
        type: Number,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    }
})

shiftSchema.statics.build = (attr: IShift) => {
    return new Shift(attr)
}

const Shift = mongoose.model<any, shiftModelInterface>('Shift', shiftSchema)


// module.exports = Shift
export { Shift }