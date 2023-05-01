import { Link } from "react-router-dom";

const Works = () => {
    return (
        <>
            <h1>ホーム</h1>
            <div>
                <Link to={`/About/`}>about</Link><br />
                <Link to={`/SportsFestival/`}>SportsFestival</Link><br />
                <Link to={`/Enoshimabbq/`}>Enoshimabbq</Link><br />
                <Link to={`/IkimonoPalette/`}>IkimonoPalette</Link><br />
                <Link to={`/BannerDesign/`}>BannerDesign</Link><br />
            </div>
        </>
    );
};

export default Works;