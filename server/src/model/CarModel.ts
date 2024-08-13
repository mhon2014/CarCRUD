import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../service";

// https://sequelize.org/docs/v6/other-topics/typescript/

class Car extends Model {
    declare id: CreationOptional<number>;
    declare registration_date: Date;
    declare model: string;
    declare type: string;
    declare registration_number: number;
    declare color: string;
    declare build_year: number;
    declare brand: string;
    declare username: string;
}

Car.init({
    id:
    {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    registration_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_number: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique:true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    build_year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { tableName: 'car', sequelize });

// Car.sync();

export { Car };
