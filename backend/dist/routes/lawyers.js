"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lawyers_1 = require("../controllers/lawyers");
const router = (0, express_1.Router)();
router.get('/', lawyers_1.getLawyers);
// router.get('/:lawyerId', getCountryId);
exports.default = router;
