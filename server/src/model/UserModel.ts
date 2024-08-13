import { DataTypes, Model } from "sequelize";
import { sequelize } from "../service";

// https://sequelize.org/docs/v6/other-topics/typescript/


//Didn't use this in the crud app, seemed like going beyond the scope of the assignment
class User extends Model {
    declare id: number;
    declare username: string;
}

User.init({
    id:
    {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { tableName: 'user', sequelize })

export { User };
