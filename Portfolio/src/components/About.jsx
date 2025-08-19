import Hero from './about/Hero'
import More from './about/More';
import Qualification from './about/Qualification';
import Skills from './about/Skills';
import Form from './contact/Form'
function About({ page, setPage }) {
    return ( <>
        <Hero page={page} setPage={setPage}/>
        <Skills page={page} setPage={setPage}/>
        <More/>
        <Qualification/>
        <Form/>
    
    </> );
}

export default About;