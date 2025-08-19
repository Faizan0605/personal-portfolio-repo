import Sec1 from "./landing/Sec1"
import Sec2 from "./landing/Sec2"
import Sec3 from "./landing/Sec3"
import Sec4 from "./landing/Sec4"
import Sec5 from "./landing/Sec5"
import Sec6 from "./landing/Sec6"
import Form from "./contact/Form"
function Landing({ page, setPage }) {
    return ( <div>
        <Sec1 page={page} setPage={setPage}/>
        <Sec2/>
        <Sec3/>
        <Sec4/>
        <Sec5/>
        <Sec6/>
        
        <Form/>
        
    </div> );
}

export default Landing;