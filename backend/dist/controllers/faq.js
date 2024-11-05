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
exports.getFaqsByCountryId = exports.getFaqsByProcessId = exports.getFaqsByProcessAndCountry = exports.getFaqs = void 0;
const faq_1 = __importDefault(require("../models/faq"));
const getFaqs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faqs = yield faq_1.default.findAll();
        res.json(faqs);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
});
exports.getFaqs = getFaqs;
const getFaqsByProcessAndCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { processId, countryId } = req.params;
        const faqs = yield faq_1.default.findAll({
            where: {
                process_id: processId,
                country_id: countryId,
            },
        });
        if (faqs.length === 0) {
            return res.status(404).json({ msg: 'No FAQs found for the given process and country' });
        }
        res.json(faqs);
    }
    catch (error) {
        console.error('Error fetching FAQs:', error);
        res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
});
exports.getFaqsByProcessAndCountry = getFaqsByProcessAndCountry;
const getFaqsByProcessId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faqs = yield faq_1.default.findAll({
            where: {
                process_id: req.params.processId,
            },
        });
        res.json(faqs);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
});
exports.getFaqsByProcessId = getFaqsByProcessId;
const getFaqsByCountryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faqs = yield faq_1.default.findAll({
            where: {
                country_id: req.params.countryId,
            },
        });
        res.json(faqs);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
});
exports.getFaqsByCountryId = getFaqsByCountryId;
