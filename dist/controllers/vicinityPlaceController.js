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
exports.deleteVicinityPlace = exports.updateVicinityPlace = exports.createNewVicinityPlace = exports.getVicinityPlace = exports.getAllVicinityPlaces = void 0;
const VicinityPlace_1 = __importDefault(require("../models/VicinityPlace"));
/* method: GET */
const getAllVicinityPlaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryObj = Object.assign({}, req.query);
        /* Filtering */
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/, match => `$${match}`);
        let query = VicinityPlace_1.default.find(JSON.parse(queryStr));
        /* Sorting */
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }
        /* Field limiting */
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        }
        else {
            query = query.select('-__v -routeLink -distance -coords -info.text');
        }
        /* Pagination */
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 6;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const numVicinityPlaces = yield VicinityPlace_1.default.countDocuments();
            if (skip >= numVicinityPlaces)
                throw new Error("This page doesn't exist");
        }
        const vicinityPlaces = yield query;
        const results = yield VicinityPlace_1.default.countDocuments();
        res.status(200).json({
            status: 'success',
            results,
            data: {
                vicinityPlaces,
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
exports.getAllVicinityPlaces = getAllVicinityPlaces;
const getVicinityPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = VicinityPlace_1.default.findById(req.params.id);
        query = query.select('-__v');
        const vicinityPlace = yield query;
        res.status(200).json({
            status: 'success',
            data: {
                vicinityPlace,
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
exports.getVicinityPlace = getVicinityPlace;
/* method: POST */
const createNewVicinityPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newVicinityPlace = yield VicinityPlace_1.default.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                newVicinityPlace,
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
exports.createNewVicinityPlace = createNewVicinityPlace;
/* method: PATCH */
const updateVicinityPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vicinityPlace = yield VicinityPlace_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                vicinityPlace,
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
exports.updateVicinityPlace = updateVicinityPlace;
/* method: DELETE */
const deleteVicinityPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield VicinityPlace_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
});
exports.deleteVicinityPlace = deleteVicinityPlace;
//# sourceMappingURL=vicinityPlaceController.js.map