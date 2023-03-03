import mongoose, { Document, Schema } from "mongoose";

export interface IReservation extends Document{
    id: string;
    dateStart: Date;
    dateEnd: Date;
    price: number;
    cancelled: boolean;
    userId: string;
    chamberNumber: string;
}



const MReservationSchema = new Schema({
    dateStart : Date,
    dateEnd: Date,
    number: Number,
    floor: Number,
    price: Number,
    cancelled: Boolean,
    userId: String,
    chamberNumber: String,
}, {
    timestamps: true,
});

export default mongoose.model<IReservation>('Chamber', MReservationSchema);

