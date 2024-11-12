"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Lawyer = connection_1.default.define('lawyers', {
    id_lawyer: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    mail: {
        type: sequelize_1.DataTypes.STRING
    },
    photo_url: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'lawyers',
    createdAt: false,
    updatedAt: false,
});
exports.default = Lawyer;
