import React, { useState, useEffect, useRef } from 'react';
import './ui.css';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    
    // Toggle para abrir/cerrar el menú móvil
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    // Cerrar el menú cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Cerrar el menú si cambia la ruta (navegación)
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className="navBar" ref={menuRef}>
            <ul className="navBarUl">

                <li className='navBarUlLinkLiButton'>
                    <div 
                        className={`buttonNav ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </div>
                </li>
                
                <li 
                    className={`navBarUlLinkLi ${location.pathname === '/' ? 'active' : ''} navBarUlLinkLiPages`}
                >
                    <Link to="/" className='navBarUlLink'>Inicio</Link>
                </li>
                <li 
                    className={`navBarUlLinkLi ${location.pathname === '/projects' ? 'active' : ''} navBarUlLinkLiPages`}
                >
                    <Link to="/projects" className='navBarUlLink'>Proyectos</Link>
                </li>
                <li 
                    className={`navBarUlLinkLi ${location.pathname === '/certificates' ? 'active' : ''} navBarUlLinkLiPages`}
                >
                    <Link to="/certificates" className='navBarUlLink'>Certificados</Link>
                </li>
                <li 
                    className={`navBarUlLinkLi ${location.pathname === '/contact' ? 'active' : ''} navBarUlLinkLiPages`}
                >
                    <Link to="/contact" className='navBarUlLink'>Contacto</Link>
                </li>
                
                
                {mobileMenuOpen && (
                    <div className="navBarUlMobileMenu">
                        <li className={`navBarUlMobileMenuItem ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/" className='navBarUlMobileMenuItemLink'>Inicio</Link>
                        </li>
                        <li className={`navBarUlMobileMenuItem ${location.pathname === '/projects' ? 'active' : ''}`}>
                            <Link to="/projects" className='navBarUlMobileMenuItemLink'>Proyectos</Link>
                        </li>
                        <li className={`navBarUlMobileMenuItem ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/certificates" className='navBarUlMobileMenuItemLink'>Certificados</Link>
                        </li>
                        <li className={`navBarUlMobileMenuItem ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact" className='navBarUlMobileMenuItemLink'>Contacto</Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Nav;