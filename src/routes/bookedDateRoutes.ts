import {
  getAllBookedDates,
  createNewBookedDate,
  getBookedDate,
  updateBookedDate,
  deleteBookedDate,
} from '../controllers/bookedDateController';

import { Router } from 'express';

const router = Router();

router.route('/').get(getAllBookedDates).post(createNewBookedDate);

router.route('/:id').get(getBookedDate).patch(updateBookedDate).delete(deleteBookedDate);

export default router;
