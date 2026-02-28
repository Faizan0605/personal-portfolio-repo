import Hero from './about/Hero'
import More from './about/More';
import Qualification from './about/Qualification';
import Skills from './about/Skills';
import Form from './contact/Form'
function About({ page, setPage }) {
    return (<>
        <Hero />
        <Skills />
        <More />
        <Qualification />
        <Form />

    </>);
}

export default About;