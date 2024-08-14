"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookedDate = exports.updateBookedDate = exports.createNewBookedDate = exports.getBookedDate = exports.getAllBookedDates = void 0;
const BookedDate_1 = __importDefault(require("../models/BookedDate"));
/* method: GET */
const getAllBookedDates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = BookedDate_1.default.find();
        query = query.select('-__v');
        const bookedDates = yield query;
        res.status(200).json({
            status: 'success',
            results: bookedDates.length,
            data: {
                bookedDates,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.getAllBookedDates = getAllBookedDates;
const getBookedDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = BookedDate_1.default.findById(req.params.id);
        query.select('-__v');
        const bookedDate = yield query;
        res.status(200).json({
            status: 'success',
            data: {
                bookedDate,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.getBookedDate = getBookedDate;
/* method: POST */
const createNewBookedDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBookeDate = yield BookedDate_1.default.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                newBookeDate,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.createNewBookedDate = createNewBookedDate;
/* method: PATCH */
const updateBookedDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookedDate = yield BookedDate_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                bookedDate,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.updateBookedDate = updateBookedDate;
/* method: DELETE */
const deleteBookedDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield BookedDate_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.deleteBookedDate = deleteBookedDate;
//# sourceMappingURL=bookedDateController.js.map