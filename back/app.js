import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import db from './database/db.js';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import projectRoutes from './routes/admin/project.routes.js';
import authRoutes from './routes/auth.routes.js';
import apiProjectsRoutes from './routes/api/projects.js';



const app = express();

//Configuración de Handlebars
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


//Configuración de sesiones
app.use(session({
    secret: 'admin123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000 // 1 día
    }
}));

//CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/api', apiProjectsRoutes);
app.use('/', authRoutes);
app.use('/project', projectRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

//Middleware para pasar datos de sesión a todas las vistas
app.use((req, res, next) => {
    res.locals.user = req.session.username;
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
});

//para servir archivos estáticos
app.use(express.static('public'));

//Ruta principal
app.get('/', (req, res) => {
    if (req.session.isLoggedIn) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
});

//Conexión a la base de datos
try {
    await db.authenticate();
    console.log('Conexión exitosa a la base de datos✅');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

//Iniciar servidor
app.listen(process.env.SRV_PRT, () => {
    console.log(`Server: http://localhost:${process.env.SRV_PRT}/`);
});


export default app;