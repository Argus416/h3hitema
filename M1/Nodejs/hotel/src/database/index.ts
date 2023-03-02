import mongoose from 'mongoose';
import { DATABASE } from '../config';

const connectDatabase = () =>{
    mongoose.connect(`mongodb://${DATABASE.HOST}:${DATABASE.PORT}/${DATABASE.NAME}`).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error(err);
    });
}


export default connectDatabase
