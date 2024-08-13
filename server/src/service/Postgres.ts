import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.PG_DATABASE!;
const user = process.env.PG_USER!;
const password = process.env.PG_PASSWORD!;
const db_host = process.env.PG_HOST!;

console.log(user);

const sequelize = new Sequelize(db, user, password, {
    host: db_host,
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

export { sequelize };
