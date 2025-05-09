import './HomePage.css';
import Skills from '../../components/ui/Skills';
import Me from '../../components/ui/Me';
import Header from '../../components/layouts/Header'

function Home() {
    return (
        <div className='body'>
            <Me/>
            <Skills/>
        </div>
    );
}

export default Home;