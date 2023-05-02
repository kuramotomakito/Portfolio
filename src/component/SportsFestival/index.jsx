import { Link } from "react-router-dom";
import Header from "../../assets/Header"

const SportsFestival = () => {
    return (
        <>
            <Header />
            <h1>SportsFestival</h1>
            <Link to={`/`}>Works</Link>

        </>
    );
};

export default SportsFestival;