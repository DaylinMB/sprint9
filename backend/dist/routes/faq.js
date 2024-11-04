"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faq_1 = require("../controllers/faq");
const router = (0, express_1.Router)();
router.get('/', faq_1.getFaqs);
router.get('/:processId', faq_1.getFaqsByProcessId);
exports.default = router;
