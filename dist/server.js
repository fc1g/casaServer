"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const config_1 = __importDefault(require("./utils/config"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const mongoURI = ((_a = process.env.DATABASE) === null || _a === void 0 ? void 0 : _a.replace('<USERNAME>', process.env.USERNAME).replace('<PASSWORD>', process.env.PASSWORD)) ||
    process.env.DATABASE_LOCAL;
(0, db_1.default)(mongoURI);
const port = process.env.PORT || config_1.default.PORT;
app_1.default.listen(port, () => console.log(`Server is running on port: ${port}`));
//# sourceMappingURL=server.js.map