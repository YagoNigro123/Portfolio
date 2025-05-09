import projectsModle from "../models/projectsModel.js";


export const showCreateForm = async (req, res) => {
    try {
        res.render('/projects');
    } catch (error) {
        res.render('/projects', { error_msg: error.message });
    }
}

export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectsModle.findAll();
        const sanitizedProjects = JSON.parse(JSON.stringify(projects));
        console.log("Proyectos encontrados:", sanitizedProjects);
        res.render('projects/list', { projects: sanitizedProjects });
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        res.render('projects/list', { error_msg: error.message });
    }
}

export const getProject = async (req, res) => {
    try {
        const project = await projectsModle.findByPk(req.params.id);
        res.render('projects/detail', { project });
    } catch (error) {
        res.render('projects/list', { error_msg: error.message });
    }
}

export const createProject = async (req, res) => {
    try {
        await projectsModle.create(req.body);
        res.redirect('/projects?success_msg=Proyecto creado correctamente');
    } catch (error) {
        res.render('projects/create', {
            error_msg: error.message,
            formData: req.body 
        });
    }
}

export const showEditForm = async (req, res) => {
    try {
        const project = await projectsModle.findByPk(req.params.id);
        res.render('projects/edit', { project });
    } catch (error) {
        res.redirect('/project?error_msg=' + encodeURIComponent(error.message));
    }
}

export const updateProject = async (req, res) => {
    try {
        await projectsModle.update(req.body, {
            where: { id: req.params.id }
        });
        res.redirect('/project?success_msg=Proyecto actualizado correctamente');
    } catch (error) {
        res.render('projects/edit', {
            error_msg: error.message,
            project: { ...req.body, id: req.params.id }
        });
    }
}


export const deleteProject = async (req, res) => {
    try {
        await projectsModle.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/project?success_msg=Proyecto eliminado correctamente');
    } catch (error) {
        res.redirect('/project?error_msg=' + encodeURIComponent(error.message));
    }
}


export const getAllProjectsAPI = async (req, res) => {
    try {
        const projects = await projectsModle.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProjectAPI = async (req, res) => {
    try {
        const project = await projectsModle.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProjectAPI = async (req, res) => {
    try {
        await projectsModle.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "Proyecto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}