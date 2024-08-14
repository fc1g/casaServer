"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookedDateController_1 = require("../controllers/bookedDateController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/').get(bookedDateController_1.getAllBookedDates).post(bookedDateController_1.createNewBookedDate);
router.route('/:id').get(bookedDateController_1.getBookedDate).patch(bookedDateController_1.updateBookedDate).delete(bookedDateController_1.deleteBookedDate);
exports.default = router;
//# sourceMappingURL=bookedDateRoutes.js.map