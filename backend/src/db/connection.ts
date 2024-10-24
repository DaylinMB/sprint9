import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('migracheck','root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;