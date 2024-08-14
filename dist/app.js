"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const vicinityPlaceRoutes_1 = __importDefault(require("./routes/vicinityPlaceRoutes"));
const bookedDateRoutes_1 = __importDefault(require("./routes/bookedDateRoutes"));
const config_1 = __importDefault(require("./utils/config"));
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
if (process.env.NODE_ENV === config_1.default.DEV)
    app.use((0, morgan_1.default)('dev'));
app.use((0, express_1.json)());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use((0, helmet_1.default)());
app.get('/', (_, res) => res.send('Hello! Welcome to our backend server.'));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use('/api/v1/uploads', uploadRoutes_1.default);
app.use('/api/v1/vicinity/', vicinityPlaceRoutes_1.default);
app.use('/api/v1/bookedDates/', bookedDateRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map