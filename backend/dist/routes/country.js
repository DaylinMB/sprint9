"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_1 = require("../controllers/country");
const router = (0, express_1.Router)();
router.get('/', country_1.getCountries);
router.get('/:countryId', country_1.getCountryId);
exports.default = router;
