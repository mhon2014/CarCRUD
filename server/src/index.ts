import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './service';
import { router } from './routes';
import { redis } from './service';

// const express = require('express');
// const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT;


sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

//map key to roles
//usually, encrypt them in another api call or something, but I do this on startup for demonstration purposes
redis.set('adminkey', 'admin');
redis.set('guestkey', 'guest');

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
    res.send('Car CRUD');
});

app.use('/api/v1', router );

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});