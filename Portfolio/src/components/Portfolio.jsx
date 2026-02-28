import Sec1 from "./portfolio/Sec1";
import Sec2 from "./portfolio/Sec2";
import Sec3 from "./portfolio/Sec3";

function Portfolio({ page, setPage }) {
    return (<div>
        <Sec1 />
        <Sec2 />
        <Sec3 />
    </div>);
}

export default Portfolio;