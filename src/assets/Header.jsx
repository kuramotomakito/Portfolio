import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div><img src="" alt="ポートフォリオ" /></div>
                    <ul>
                        <li><Link to={`/`}>Works</Link></li>
                        <li><Link to={`/About/`}>About</Link><br /></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header