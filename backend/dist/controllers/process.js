"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessesByDuration = exports.getProcess = void 0;
const process_1 = __importDefault(require("../models/process"));
const getProcess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const process = yield process_1.default.findAll();
        res.json(process);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching process', error });
    }
});
exports.getProcess = getProcess;
const getProcessesByDuration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const process = yield process_1.default.findAll({
            where: {
                duration: req.params.duration,
            },
        });
        res.json(process);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching process', error });
    }
});
exports.getProcessesByDuration = getProcessesByDuration;
