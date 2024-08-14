import { Router } from "express";
import { carController } from "../controller";
import { auth } from '../middleware';
import argon2 from "argon2";
import { admin, guest } from "../middleware";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config()

const router = Router();
const secretKey = process.env.SECRETKEY!;

//Set up routes and middleware

router.put('/create', [auth, admin], carController.create);

router.get('/getall', [auth, guest],carController.getAll);

router.get('/get/:id', [auth, guest],carController.getById);

router.post('/update', [auth, admin],carController.update);

router.delete('/delete', [auth, admin],carController.delete);

export { router } 