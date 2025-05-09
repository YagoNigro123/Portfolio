import express from 'express';
import { apiGetProjects } from '../../controllers/ProjectsController.js';

const router = express.Router();

router.get('/projects', apiGetProjects);

export default router;