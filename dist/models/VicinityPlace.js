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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const errorMessage = 'A vicinityPlace must have a';
const vicinityPlaceSchema = new mongoose_1.Schema({
    info: {
        title: {
            en: {
                type: String,
                required: [true, `${errorMessage} english version of the title`],
            },
            pl: {
                type: String,
                required: [true, `${errorMessage} polish version of the title`],
            },
            es: {
                type: String,
                required: [true, `${errorMessage} spanish version of the title`],
            },
        },
        briefInfo: {
            en: {
                type: String,
                required: [true, `${errorMessage} english version of the briefInfo`],
            },
            pl: {
                type: String,
                required: [true, `${errorMessage} polish version of the briefInfo`],
            },
            es: {
                type: String,
                required: [true, `${errorMessage} spanish version of the briefInfo`],
            },
        },
        text: {
            en: {
                type: String,
                required: [true, `${errorMessage} english version of the text`],
            },
            pl: {
                type: String,
                required: [true, `${errorMessage} polish version of the text`],
            },
            es: {
                type: String,
                required: [true, `${errorMessage} spanish version of the text`],
            },
        },
        imgAlt: {
            en: {
                type: String,
                required: [true, `${errorMessage} english version of the imgAlt`],
            },
            pl: {
                type: String,
                required: [true, `${errorMessage} polish version of the imgAlt`],
            },
            es: {
                type: String,
                required: [true, `${errorMessage} spanish version of the imgAlt`],
            },
        },
    },
    img: {
        type: String,
        required: [true, `${errorMessage} img`],
        unique: true,
    },
    routeLink: {
        type: String,
        required: [true, `${errorMessage} routeLink`],
    },
    distance: {
        type: Number,
        required: [true, `${errorMessage} distance`],
    },
    coords: {
        type: [Number, Number],
        required: [true, `${errorMessage} coords`],
    },
});
exports.default = mongoose_1.default.model('VicinityPlace', vicinityPlaceSchema);
//# sourceMappingURL=VicinityPlace.js.map