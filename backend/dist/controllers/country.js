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
exports.getCountryId = exports.getCountries = void 0;
const country_1 = __importDefault(require("../models/country"));
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield country_1.default.findAll();
        res.json(countries);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching countries', error });
    }
});
exports.getCountries = getCountries;
const getCountryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = yield country_1.default.findAll({
            where: {
                id_country: req.params.countryId,
            },
        });
        res.json(country);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
});
exports.getCountryId = getCountryId;
