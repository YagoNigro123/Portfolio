import './ui.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGolang, faTypo3, faJsfiddle, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faTeletype } from '@fortawesome/free-solid-svg-icons';

const Skills = ()=>{
    return(
            <div className='bodySkills'>
                    <ul className='bodySkillsUl'>
                        {/* <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faGit} className='bodySkillsUlLiIcons' color='#F05032' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faGithub} className='bodySkillsUlLiIcons' color='#181717' />
                        </li> */}
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faHtml5} className='bodySkillsUlLiIcons' color='#E34F26' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faCss3Alt} className='bodySkillsUlLiIcons' color='#2E64FE' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faSquareJs} className='bodySkillsUlLiIcons' color='#F7DF1E' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faReact} className='bodySkillsUlLiIcons' color='#61DAFB' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faNodeJs} className='bodySkillsUlLiIcons' color='#339933' />
                        </li>
                        <li className='bodySkillsUlLi'>
                            <FontAwesomeIcon icon={faGolang} className='bodySkillsUlLiIcons' color='#85d8ffff' />
                        </li>
                    </ul>
            </div>
    );
}

export default Skills;