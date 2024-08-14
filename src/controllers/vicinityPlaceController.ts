import VicinityPlace from '../models/VicinityPlace';

import { RequestHandler } from 'express';

/* method: GET */

export const getAllVicinityPlaces: RequestHandler = async (req, res) => {
  try {
    const queryObj = { ...req.query };

    /* Filtering */

    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach(el => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/, match => `$${match}`);

    let query = VicinityPlace.find(JSON.parse(queryStr));

    /* Sorting */

    if (req.query.sort) {
      const sortBy = (req.query as { sort: string }).sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

    /* Field limiting */

    if (req.query.fields) {
      const fields = (req.query as { fields: string }).fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v -routeLink -distance -coords -info.text');
    }

    /* Pagination */

    const page = +(req.query.page as string) || 1;
    const limit = +(req.query.limit as string) || 6;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numVicinityPlaces = await VicinityPlace.countDocuments();
      if (skip >= numVicinityPlaces) throw new Error("This page doesn't exist");
    }

    const vicinityPlaces = await query;
    const results = await VicinityPlace.countDocuments();

    res.status(200).json({
      status: 'success',
      results,
      data: {
        vicinityPlaces,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getVicinityPlace: RequestHandler = async (req, res) => {
  try {
    let query = VicinityPlace.findById(req.params.id);

    query = query.select('-__v');

    const vicinityPlace = await query;

    res.status(200).json({
      status: 'success',
      data: {
        vicinityPlace,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

/* method: POST */

export const createNewVicinityPlace: RequestHandler = async (req, res) => {
  try {
    const newVicinityPlace = await VicinityPlace.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newVicinityPlace,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

/* method: PATCH */

export const updateVicinityPlace: RequestHandler = async (req, res) => {
  try {
    const vicinityPlace = await VicinityPlace.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        vicinityPlace,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

/* method: DELETE */

export const deleteVicinityPlace: RequestHandler = async (req, res) => {
  try {
    await VicinityPlace.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
