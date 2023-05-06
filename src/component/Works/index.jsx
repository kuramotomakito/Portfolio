import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
import Sport from "../../assets/img/Spoets.png"
import Enoshima from "../../assets/img/Enoshima.png"
import Ikimono from "../../assets/img/Ikimono.png"
import Banner from "../../assets/img/Banner.png"
import Typical from "react-typical";
const Works = () => {

    return (
        <>
            <Header />
            <main className="Works">
                <article>
                    <section className="keyvisual">
                        <div className="catchcopy"><Typical
                            steps={[
                                "My life is lovely story,happy and full of incident."
                            ]}
                        /></div>
                        <h1>Portfolio by <span>Minagi</span></h1>
                    </section>
                    <section>
                        <h2>Works</h2>
                        <ul>
                            <li className="sports">
                                <Link to={`/SportsFestival/`}>
                                    <img src={Sport} alt="スポーツフェスティバル" />
                                    <div><p><span>1年前期課題</span> <br />「スポーツフェスティバル公式サイト」</p></div>
                                </Link>
                            </li>
                            <li className="enoshima">
                                <Link to={`/Enoshimabbq/`}>
                                    <img src={Enoshima} alt="江ノ島BBQ特設サイト" />
                                    <div>
                                        <p> <span>1年進級制作課題</span><br />「江ノ島マリーナ「サンカフェ」公式サイト」</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="ikimono">
                                <Link to={`/IkimonoPalette/`}>
                                    <img src={Ikimono} alt="いきものパレット" />
                                    <div>
                                        <p><span>課外活動</span><br />「学科横断プロジェクト『いきものパレット』」</p></div>
                                </Link>
                            </li>
                            <li className="banner">
                                <Link to={`/BannerDesign/`}>
                                    <img src={Banner} alt="バナー制作" />
                                    <div><p><span>自主制作</span><br />「バナー広告デザイン制作」</p></div>
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