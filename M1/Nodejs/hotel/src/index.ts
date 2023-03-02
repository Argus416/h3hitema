import express from 'express';
import multer from 'multer';
import cookieParser from 'cookie-parser';

import { Iusers, Role } from './Model/Iusers';
import Routes from './Routes/index';
import mongoose from 'mongoose';

const port = 3000;
const host = 'localhost';
const app = express();

mongoose.connect('mongodb://mongo:27017/mydatabase').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
});


/*
    On indique qu'on veut récupérer du json
 */
app.use(express.json());



app.use('/', Routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});