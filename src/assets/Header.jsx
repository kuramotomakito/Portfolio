import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div><Link to={`/`}><img src="" alt="ポートフォリオ" /></Link></div>
                    <ul>
                        <li><Link to={`/`}>Works</Link></li>
                        <li><Link to={`/About/`}>About</Link></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header