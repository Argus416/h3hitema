import mongoose, { Document, Schema } from 'mongoose';

export interface IChamber extends Document {
    id: string;
    number: number;
    floor: number;
    price: number;
}


const ChamberSchema = new Schema({
    number: Number,
    floor: Number,
    price: Number,
}, {
    timestamps: true,
});

export default mongoose.model<IChamber>('Chamber', ChamberSchema);
