import { useState, useEffect } from 'react';
import './ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faJs,
    faCss3Alt,
    faGit,
    faReact,
    faHtml5,
    faSass,
    faGithub,
    faNodeJs,
    faNpm,
    faYarn,
    faVuejs,
    faAngular,
    faBootstrap,
    faJava,
    faPython,
    faPhp,
    faLaravel,
    faDocker,
    faFigma,
    faGitlab,
    faBitbucket,
    faLinux,
    faUbuntu,
    faWindows,
    faApple,
    faChrome,
    faFirefoxBrowser,
    faEdge,
    faAws,
    faGoogle,
    faSlack,
    faTrello,
    faJira,
    faStackOverflow,
    faDigitalOcean,
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faDiscord,
    faMedium,
    faDribbble,
    faBehance
} from "@fortawesome/free-brands-svg-icons";

const techIcons = {
    javascript: faJs,
    css3: faCss3Alt,
    git: faGit,
    react: faReact,
    html5: faHtml5,
    sass: faSass,
    github: faGithub,
    nodejs: faNodeJs,
    npm: faNpm,
    yarn: faYarn,
    vue: faVuejs,
    angular: faAngular,
    bootstrap: faBootstrap,
    java: faJava,
    python: faPython,
    php: faPhp,
    laravel: faLaravel,
    docker: faDocker,
    figma: faFigma,
    gitlab: faGitlab,
    bitbucket: faBitbucket,
    linux: faLinux,
    ubuntu: faUbuntu,
    windows: faWindows,
    apple: faApple,
    chrome: faChrome,
    firefox: faFirefoxBrowser,
    edge: faEdge,
    aws: faAws,
    google: faGoogle,
    slack: faSlack,
    trello: faTrello,
    jira: faJira,
    stackoverflow: faStackOverflow,
    digitalocean: faDigitalOcean,
    linkedin: faLinkedin,
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
    discord: faDiscord,
    medium: faMedium,
    dribbble: faDribbble,
    behance: faBehance
};

// Datos hardcodeados de proyectos
const hardcodedProjects = [
    {
        id: 1,
        title: "StarFlux",
        image: "/assets/starflux.png",
        content: "Una agencia de desarrollo web especializada en crear experiencias digitales que realmente impulsan negocios.",
        lenguages: "react,javascript,tailwind,html5,css3,git,github,vite,eslint"
    }
];

function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error] = useState(null);

    useEffect(() => {
        // Usar datos hardcodeados en lugar de fetch
        setProjects(hardcodedProjects);
        setLoading(false);
        
        // Opcional: Si quieres mantener la lógica de fetch para desarrollo
        // puedes comentar estas líneas y descomentar el fetch original
        /*
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/projects');
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('La respuesta no es JSON');
                }
                const result = await response.json();
                if (!result || result.status !== 'success') {
                    throw new Error(result.message || 'Error en la respuesta');
                }
                const projectsData = Array.isArray(result.data) ? result.data : [];
                setProjects(projectsData);
            } catch (error) {
                setError(error.message);
                console.error('Error completo:', error);
                // En caso de error, usar datos hardcodeados como fallback
                setProjects(hardcodedProjects);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
        */
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <p>Cargando proyectos...</p>
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h3>Error al cargar proyectos</h3>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <div className='body'>
            <div className='proyectDivBody'>
                {projects && projects.map((project, index) => {
                    const technologies = project.lenguages 
                        ? project.lenguages.split(',').map(tech => tech.trim().toLowerCase())
                        : [];
                    
                    return (
                        <div key={project.id} className='proyectDivElement'>
                            <h2 className='h2'>{project.title}</h2>
                            <div className='proyectDivElementImg' href='#'>
                                <img 
                                    src={project.image || '/assets/projets/diseno-paginas-web.png'} 
                                    alt={project.title} 
                                    onError={(e) => {
                                        e.target.src = '/assets/projets/diseno-paginas-web.png';
                                    }}
                                />
                                <div className="proyectDivElementImgOverlay">
                                    <div className="proyectDivElementImgOverlayContent">
                                        {project.content}
                                    </div>
                                </div>
                            </div>
                            <ul className="proyectDivElementUl">
                                {technologies.map((tech, techIndex) => (
                                    techIcons[tech] && (
                                        <li key={techIndex} className='proyectDivElementUlLi'>
                                            <FontAwesomeIcon 
                                                icon={techIcons[tech]} 
                                                className="proyectDivElementUlLiIcon" 
                                                title={tech}
                                            />
                                        </li>
                                    )
                                ))}
                            </ul>
                            <a href="https://starflux.pages.dev/" className='proyectDivElementUlLi link'>
                                     link
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;