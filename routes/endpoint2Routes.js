import express from 'express';
import { objeto2 } from '../controllers/endpoint2Controller.js';

const router = express.Router();

router.get('/', objeto2);


export default router;