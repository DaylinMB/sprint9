"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Processrocess = connection_1.default.define('process', {
    id_country: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    demonym: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'process',
    createdAt: false,
    updatedAt: false,
});
exports.default = Country;
