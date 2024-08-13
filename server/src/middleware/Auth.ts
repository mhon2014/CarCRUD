import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
import { redis } from '../service';


dotenv.config()

declare module "express-serve-static-core" {
    interface Request {
        role?: string;
    }
}


async function auth(req: Request, res: Response, next: NextFunction) {

    const key = req.header("x-api-key");

    if (!key) {
        return res.status(401).send({
            error: "No API Key"
        })
    };

    try {
        // const decoded = await argon2.verify(key, secretKey);
        const role = await redis.get(key);
        req.role = role!;

    } catch (error) {
        return res.status(401).send({
            error: "Unauthorized Key."
        });
    }

    next();
}

export { auth };