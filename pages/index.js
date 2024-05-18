import { Leva } from "leva";
import Experience from "../components/canvas/Experience";

function HomePage() {
    return (
        <>
            <Leva collapsed={true} />
            <Experience />
        </>
    );
}

export default HomePage;
