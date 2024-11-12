import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Lawyer = db.define('lawyers', {
    id_lawyer: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    photo_url: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'lawyers',
    createdAt: false,
    updatedAt: false,
});

export default Lawyer;