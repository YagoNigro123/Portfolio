import express from 'express';
import { isAuthenticated } from '../../middleware/authMiddleware.js';
import {
    getAllProjects, getProject, createProject, updateProject,
    deleteProject, showCreateForm, showEditForm
} from '../../controllers/ProjectsController.js';
import { upload } from '../../utils/upload.js';

const router = express.Router();


router.use(isAuthenticated);
router.post('/create', upload.single('image'), createProject);
router.get('/', getAllProjects);
router.get('/create', showCreateForm);
router.post('/create', createProject);
router.get('/edit/:id', showEditForm);
router.post('/update/:id', updateProject);
router.get('/delete/:id', deleteProject);
router.get('/:id', getProject);

export default router;