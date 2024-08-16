import { RequestHandler } from 'express';
import Image from '../models/Image';

export const uploadImage: RequestHandler = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({
        status: 'fail',
        message: 'No file uploaded',
      });
    }

    const image = await new Image({
      data: file.buffer,
      contentType: file.mimetype,
    }).save();

    res.status(201).json({
      status: 'success',
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err || 'Server error',
    });
  }
};

export const getImage: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({
        status: 'fail',
        message: 'Image not found',
      });
    }

    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err || 'Server error',
    });
  }
};
