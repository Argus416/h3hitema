import express from 'express';

import Routes from '../Routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/', Routes);

export default app 
