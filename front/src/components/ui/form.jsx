import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Form = () =>{
    return(
        <div className='contactDivBody'>

                <form className='contactFrom' action="https://formsubmit.co/yago.gn007@gmail.com" method="POST">

                    <div className='contactDivForm'> 

                        <div className='contacDivFormContact'>

                            <img src="/assets/YagoNigro_100x100.png" 
                            alt="" className='contactDivFormImg'/>

                            <ul className='contactDivFormUl'>

                            <li className='contactDivFormUlLi'>
                                    <a href="https://www.linkedin.com/feed/" 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="footerBarLinks">
                                        <FontAwesomeIcon icon={faLinkedin} className="footerBarLinksIcon" />
                                    </a>
                                </li>

                                <li className='contactDivFormUlLi'>
                                    <a href="https://github.com/mortalboy680" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footerBarLinks">
                                        <FontAwesomeIcon icon={faGithub} className="footerBarLinksIcon" />
                                    </a>
                                </li>

                                <li className='contactDivFormUlLi'>
                                    <a href='https://www.instagram.com/yago_ron?igsh=MThzNWRrNWNqODIzdw%3D%3D&utm_source=qr'
                                     target="_blank" 
                                     rel="noopener noreferrer" 
                                     className="footerBarLinks">
                                        <FontAwesomeIcon icon={faInstagram} className="footerBarLinksIcon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <input
                            className="nameInput input"
                            placeholder='Nombre'
                            type="name" 
                            name="name"
                        />
                        <input
                            className='emailInput input'
                            placeholder='Email'
                            type="email" 
                            name="email"
                        />
                    </div>

                    <div className='contactDivForm'>    
                        <textarea
                            className='textarea'
                            placeholder='Envia tu consulta'
                            typeof='text'
                            name='subject'
                        />
                        <button type="submit" 
                        className='buttom'>
                            Enviar
                        </button>
                    </div>

                </form>

            </div>
    );
}

export default Form;