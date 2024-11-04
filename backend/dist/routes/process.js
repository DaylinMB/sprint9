"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const process_1 = require("../controllers/process");
const router = (0, express_1.Router)();
router.get('/', process_1.getProcess);
router.get('/:duration', process_1.getProcessesByDuration);
exports.default = router;
