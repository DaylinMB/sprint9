import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Country = db.define('country', {
    id_country: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    demonym: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'country',
    createdAt: false,
    updatedAt: false,
});

export default Country;