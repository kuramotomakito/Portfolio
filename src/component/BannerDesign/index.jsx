import { Link } from "react-router-dom";
import Header from "../../assets/Header"

const BannerDesign = () => {
    return (
        <>
            <Header />

            <h1>BannerDesign</h1>
            <Link to={`/`}>Works</Link>

        </>

    )
}

export default BannerDesign