import fs from 'fs';

import { RequestHandler } from 'express';

export const uploadNewImage: RequestHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      path: req.file!.originalname,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const deleteImage: RequestHandler = async (req, res) => {
  try {
    fs.unlink(`uploads/${(req.body as { name: string }).name}`, err => {
      if (err) throw new Error(`${err}`);
    });

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
