import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
const Works = () => {
    return (

        <>
            <Header />
            <main>
                <article>
                    <section>
                        <div>Have a Ball!</div>
                        <h1>Portfolio by Minagi</h1>
                    </section>
                    <section>
                        <h2>Works</h2>
                        <ul>
                            <li>
                                <Link to={`/SportsFestival/`}>
                                    <img src="" alt="スポーツフェスティバル" />
                                    <div>1年前期課題「スポーツフェスティバル公式サイト」</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/Enoshimabbq/`}>
                                    <img src="" alt="江ノ島BBQ特設サイト" />
                                    <div>
                                        1年進級制作課題「江ノ島マリーナ「サンカフェ」公式サイト」
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/IkimonoPalette/`}>
                                    <img src="" alt="いきものパレット" />
                                    <div>課外活動「学科横断プロジェクト『いきものパレット』」</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/BannerDesign/`}>
                                    <img src="" alt="バナー制作" />
                                    <div>自主制作「バナー広告デザイン制作」</div>
                                </Link>

                            </li>
                        </ul>
                    </section>
                </article>
            </main>
            <Footer />
            {/* <div>
                <Link to={`/About/`}>about</Link><br />
                <Link to={`/SportsFestival/`}>SportsFestival</Link><br />
                <Link to={`/Enoshimabbq/`}>Enoshimabbq</Link><br />
                <Link to={`/IkimonoPalette/`}>IkimonoPalette</Link><br />
                <Link to={`/BannerDesign/`}>BannerDesign</Link><br />
            </div> */}
        </>
    );
};

export default Works;