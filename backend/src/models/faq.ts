import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Faq = db.define('faq', {
    id_faq: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    process_id: {
        type: DataTypes.NUMBER,
    },
    question: {
        type: DataTypes.STRING
    },
    answer: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'faq',
    createdAt: false,
    updatedAt: false,
});

export default Faq;