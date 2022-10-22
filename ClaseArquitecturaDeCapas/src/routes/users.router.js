import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/',usersController.getAllUsers);
router.post('/',usersController.saveUser);
// router.get('/:uid',usersController.getUsersById);
// router.get('/:uid/reports',usersController.getUserReport);

export default router;