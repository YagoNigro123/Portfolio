import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CertificatesPage.css';

const CertificatesPage = () => {
    const certificates = [
        {
            id: 1,
            image: "/assets/certificates/diplofull.png",
            title: "Diplomado Full Stack"
        }
        // Puedes agregar más certificados aquí
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
                {/* <button
                    className="arrowContainer"
                    onClick={prevCertificate}
                    aria-label="Anterior certificado"
                    disabled={certificates.length <= 1}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className='arrowIcon' />
                </button> */}

                <div className="certificatesDivElement">
                    <div className="certificatesDivElementImg">
                        <img
                            src={certificates[currentIndex].image}
                            alt={`Certificado: ${certificates[currentIndex].title}`}
                        />
                    </div>
                </div>

                {/* <button
                    className="arrowContainer"
                    onClick={nextCertificate}
                    aria-label="Siguiente certificado"
                    disabled={certificates.length <= 1}
                >
                    <FontAwesomeIcon icon={faChevronRight} className='arrowIcon' />
                </button> */}
            </div>
        </div>
    );
};

export default CertificatesPage;