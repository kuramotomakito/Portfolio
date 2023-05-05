import { Link } from "react-router-dom";
import Icon from "../assets/img/logo.png"
const Header = () => {
    return (
        <>
            <header>
                <div><Link to={`/`}><img src={Icon} alt="ポートフォリオ" /></Link></div>
                <ul>
                    <li><Link to={`/`}>Works</Link></li>
                    <li><Link to={`/About/`}>About</Link></li>
                    <li><a href="mailto:22aw0134&#64;jec.ac.jp">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header