import BookedDate from '../models/BookedDate';

import { RequestHandler } from 'express';

/* method: GET */

export const getAllBookedDates: RequestHandler = async (req, res) => {
  try {
    let query = BookedDate.find();

    query = query.select('-__v');

    const bookedDates = await query;

    res.status(200).json({
      status: 'success',
      results: bookedDates.length,
      data: {
        bookedDates,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getBookedDate: RequestHandler = async (req, res) => {
  try {
    const query = BookedDate.findById(req.params.id);

    query.select('-__v');

    const bookedDate = await query;

    res.status(200).json({
      status: 'success',
      data: {
        bookedDate,
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

export const createNewBookedDate: RequestHandler = async (req, res) => {
  try {
    const newBookeDate = await BookedDate.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newBookeDate,
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

export const updateBookedDate: RequestHandler = async (req, res) => {
  try {
    const bookedDate = await BookedDate.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        bookedDate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

/* method: DELETE */

export const deleteBookedDate: RequestHandler = async (req, res) => {
  try {
    await BookedDate.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
