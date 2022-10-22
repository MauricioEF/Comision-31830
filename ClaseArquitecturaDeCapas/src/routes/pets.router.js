import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';

const router = Router();

router.get('/',petsController.getAllPets);
router.post('/',petsController.savePet);
// router.get('/:uid',usersController.getUsersById);
// router.get('/:uid/reports',usersController.getUserReport);

export default router;