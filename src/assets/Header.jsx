import { Link } from "react-router-dom";
import Icon from "../assets/img/icon.png"
const Header = () => {
    return (
        <>
            <header>
                <div><Link to={`/`}><img src={Icon} alt="ポートフォリオ" /></Link></div>
                <ul>
                    <li><Link to={`/`}>Works</Link></li>
                    <li><Link to={`/About/`}>About</Link></li>
                    <li>Contact</li>
                </ul>
            </header>
        </>
    )
}

export default Header