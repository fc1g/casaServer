import { deleteImage, uploadNewImage } from '../controllers/uploadController';

import { upload } from '../middlewares/upload';

import { Router } from 'express';

const router = Router();

router.route('/').post(upload.single('img'), uploadNewImage).delete(deleteImage);

export default router;
