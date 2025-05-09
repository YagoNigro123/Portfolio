import projectsModel from '../models/projectsModel.js';


export const showCreateForm = async (req, res) => {
    try {
        res.render('projects/create');
    } catch (error) {
        console.error('error al mostrar el formulario', error);
        res.render('projects/create', { error_msg: error.message });
    }
}

export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectsModel.findAll();

        const sanitizedProjects = JSON.parse(JSON.stringify(projects));

        console.log('Proyectos encontrados: ', sanitizedProjects);

        res.render('projects/list', {
            projects: sanitizedProjects,
            success_msg: req.query.success_msg,
            error_msg: req.query.error_msg
        });
    } catch (error) {
        console.log('Error al obtener proyectos:', error);
        res.render('projects/list', { error_msg: error.message });
    }
}

export const getProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        const project = await projectsModel.findByPk(projectId);

        if (!project) {
            return res.render('projects/list', {
                error_msg: 'Proyecto no encontrado'
            });
        }

        const sanitizedProjects = JSON.parse(JSON.stringify(project));

        res.render('projects/detail', { project: sanitizedProjects });
    } catch (error) {
        console.error('Error al obtener proyecto:', error);
        res.render('projects/list', { error_msg: error.message });
    }
}

export const createProject = async (req, res) => {
    try {
        const { title, description, lenguages } = req.body;

        // Verifica campos obligatorios
        // if (!titulo || !descripcion) {
        //     return res.render('projects/create', {
        //         error_msg: 'El título y descripción son obligatorios',
        //         formData: req.body
        //     });
        // }

        // Ruta relativa de la imagen (si se subió)
        const image = req.file ? '/uploads/' + req.file.filename : null;

        await projectsModel.create({
            title: title,
            content: description,
            lenguages: lenguages,
            image: image
        });

        res.redirect('/project?success_msg=Proyecto creado correctamente');
    } catch (error) {
        console.log('Error al crear proyecto:', error);
        res.render('projects/create', {
            error_msg: 'Error al guardar el proyecto',
            formData: req.body
        });
    }
}

export const showEditForm = async (req, res) => {
    try {
        const projectId = req.params.id;

        const project = await projectsModel.findByPk(projectId);

        if (!project) {
            return res.redirect('/project?error_msg=Proyecto no encontrado');
        }

        const sanitizedProjects = JSON.parse(JSON.stringify(project));

        res.render('projects/edit', { project: sanitizedProjects });
    } catch (error) {
        console.log('Error al mostrar formulario de edicion', error);
        res.redirect('/project?error_msg=' + encodeURIComponent(error.message));
    }
}
export const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const { title, description, lenguages, image } = req.body;

        if (!title || !description) {
            return res.render('projects/edit', {
                error_msg: 'El titulo y descripcion son obligatorios',
                project: { ...req.body, id: projectId }
            });
        }
        await projectsModel.update({
            title,
            description,
            lenguages,
            image
        }, {
            where: { id: projectId }
        })

        res.redirect('/project?success_msg=Proyecto actualizado correctamente');
    } catch (error) {
        console.error('Error al actualizar proyecto:', error);
        res.render('projects/edit', {
            error_msg: error.message,
            project: { ...req.body, id: req.params.id }
        });
    }
}
export const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        const result = await projectsModel.destroy({
            where: { id: projectId }
        });

        if (result === 0) {
            return res.redirect('/project?error_msg=Proyecto no encontrado');
        }

        res.redirect('/project?error_msg=Proyecto eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar proyecto', error);

        res.redirect('/project?error_msg=' + encodeURIComponent(error.message));
    }
}
export const apiGetProjects = async (req, res) => {
    try {
        const projects = await projectsModel.findAll({
            attributes: [
                'id',
                'title',
                'content', 
                'lenguages',
                'image',
                'createdAt',
                'updatedAt' 
            ],
            raw: true
        });

        
        res.json({
            status: 'success',
            count: projects.length,
            data: projects 
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export const viewGetProjects = async (req, res) => {
    try {
        const projects = await projectsModel.findAll();
        res.render('projects', { projects });
    } catch (error) {
        res.render('error', { error });
    }
};