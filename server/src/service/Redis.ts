import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redisHost = process.env.REDIS_HOST!;
const redisPort = parseInt(process.env.REDIS_PORT!);

const redis = new Redis(redisPort,redisHost); 

export { redis };

