import { Request, Response } from 'express';
import config from './src/config/config';
import app from './src/server';
import mongoose from 'mongoose';

const PORT = config.port;
const DB_URI = config.db.uri;
const DB_NAME = config.db.name;

app.get('/', (req: Request, res: Response)=>{
    return res.status(200).json({message: 'Connection success'});
});

mongoose.connect(DB_URI,{dbName: DB_NAME}).then(()=>{
    console.log(`DB connected!`);
}).catch((error) => {
    console.error(error);
});

app.listen(PORT,()=>{
    console.log(`App Listening on port: ${PORT}`);
});