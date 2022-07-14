import express from 'express';
import { objeto } from '../controllers/endpoint1Controller.js';

const router = express.Router();

router.get('/',objeto)



export default router;