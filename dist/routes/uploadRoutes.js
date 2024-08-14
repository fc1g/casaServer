"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadController_1 = require("../controllers/uploadController");
const upload_1 = require("../middlewares/upload");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/').post(upload_1.upload.single('img'), uploadController_1.uploadNewImage).delete(uploadController_1.deleteImage);
exports.default = router;
//# sourceMappingURL=uploadRoutes.js.map