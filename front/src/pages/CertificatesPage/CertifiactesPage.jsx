import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CertificatesPage.css';

const CertificatesPages = () => {
    const certificates = [
        {
            id: 1,
            image: "/assets/certificates/certificate1.jpg"
        },
        {
            id: 2,
            image: "/assets/certificates/certificate2.jpg"
        },
        {
            id: 3,
            image: "/assets/certificates/certificate3.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevCertificate = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
        );
    };
    
    const nextCertificate = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="certificatesContainer">
            
            <div className="body flex">
                <div className="arrowContainer" onClick={prevCertificate}>
                    <FontAwesomeIcon icon={faChevronLeft} className='arrowIcon'/>
                </div>
                
                <div className="certificatesDivElement">
                    <div className="certificatesDivElementImg">
                        <img 
                            src={certificates[currentIndex].image} 
                            alt={`Certificado ${certificates[currentIndex].title}`} 
                        />
                    </div>
                    <div className="certificateInfo">
                        <div className="certificatesPagination">
                            {certificates.map((cert, index) => (
                                <span 
                                    key={cert.id}
                                    className={`paginationDot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="arrowContainer" onClick={nextCertificate}>
                    <FontAwesomeIcon icon={faChevronRight} className='arrowIcon'/>
                </div>
            </div>
        </div>
    );
};

export default CertificatesPages;