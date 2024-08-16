import multer from 'multer';
import { uploadImage, getImage } from '../controllers/uploadController';

import { Router } from 'express';

const router = Router();
const upload = multer();

router.route('/').post(upload.single('img'), uploadImage);

router.route('/:id').get(getImage);

export default router;
