import {
  getAllVicinityPlaces,
  createNewVicinityPlace,
  getVicinityPlace,
  updateVicinityPlace,
  deleteVicinityPlace,
} from '../controllers/vicinityPlaceController';

import { Router } from 'express';

const router = Router();

router.route('/').get(getAllVicinityPlaces).post(createNewVicinityPlace);

router.route('/:id').get(getVicinityPlace).patch(updateVicinityPlace).delete(deleteVicinityPlace);

export default router;
