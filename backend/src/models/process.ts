import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Process = db.define('process', {
    id_process: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    duration: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'process',
    createdAt: false,
    updatedAt: false,
});

export default Process;