"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vicinityPlaceController_1 = require("../controllers/vicinityPlaceController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/').get(vicinityPlaceController_1.getAllVicinityPlaces).post(vicinityPlaceController_1.createNewVicinityPlace);
router.route('/:id').get(vicinityPlaceController_1.getVicinityPlace).patch(vicinityPlaceController_1.updateVicinityPlace).delete(vicinityPlaceController_1.deleteVicinityPlace);
exports.default = router;
//# sourceMappingURL=vicinityPlaceRoutes.js.map