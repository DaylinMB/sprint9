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
exports.getLawyers = void 0;
const lawyers_1 = __importDefault(require("../models/lawyers"));
const getLawyers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lawyers = yield lawyers_1.default.findAll();
        res.json(lawyers);
    }
    catch (error) {
        res.status(500).json({ msg: 'Error fetching lawyers', error });
    }
});
exports.getLawyers = getLawyers;
// export const getCountryId = async (req: Request, res: Response) => {
//   try {
//     const country = await Lawyer.findAll({
//       where: {
//         id_country: req.params.countryId,
//       },
//     });
//     res.json(country);
//   } catch (error) {
//     res.status(500).json({ msg: 'Error fetching FAQs', error });
//   }
// };
