"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Faq = connection_1.default.define('faq', {
    id_faq: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    process_id: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    question: {
        type: sequelize_1.DataTypes.STRING
    },
    answer: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'faq',
    createdAt: false,
    updatedAt: false,
});
exports.default = Faq;
