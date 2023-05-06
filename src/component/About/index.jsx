// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer"
import HTMLCSS from "../../assets/img/HTMLCSS.svg"
import js from "../../assets/img/JS.svg"
import react from "../../assets/img/React.svg"
import PHP from "../../assets/img/PHPIcon.svg"
import Sass from "../../assets/img/SassIcon.svg"
import figma from "../../assets/img/FigmaIcon.svg"
import Ps from "../../assets/img/PsIcon.svg"
import Ai from "../../assets/img/AiIcon.svg"
import Xd from "../../assets/img/XdIcon.svg"
import Pr from "../../assets/img/PrIcon.svg"
import Stars5 from "../../assets/img/5Stars.svg"
import Stars45 from "../../assets/img/4.5Stars.svg"
import Stars4 from "../../assets/img/4Stars.svg"
import Stars3 from "../../assets/img/3Stars.svg"
import Stars25 from "../../assets/img/2Stars.svg"
import Stars2 from "../../assets/img/2Stars.svg"
import Stars15 from "../../assets/img/1.5Stars.svg"
// import Typical from "react-typical";
import { useTypewriter } from 'react-simple-typewriter'


const About = () => {
    const [text] = useTypewriter({
        words: ["Minagi’s Profile."],
        // typeSpeed: 20,
        onLoopDone: () => console.log("done from typewriter hook")
    });
    return (
        <>
            <Header />
            <main className="About">
                <article>
                    <section className="keyvisual">
                        <h1>
                            {text}
                        </h1>
                    </section>

                    <section>
                        <h2>About</h2>
                        <div className="name">
                            <div><h3>藤嶋&nbsp;&nbsp;美凪<ruby>Fujishima Minagi</ruby></h3></div>
                            <p>Front-end Engineer</p>
                        </div>
                        <div className="summary">
                            <p>千葉県千葉市出身。2003年6月15日生まれ。</p>
                            <p>高校の頃からプログラミングを学び、好きなファッションのデザイナーを目指していたが、「学んできたプログラミングとなりたいデザイナーの両方を使用する職業はないか」と考えた時に、Web業界を知る。現在は日本電子専門学校 Webデザイン科に在学し、Webサイト構築フロー全ての工程を学び実践しながら、「日々新しいものに挑戦し続けるフロントエンドエンジニア」を目指している。</p>
                            <div className="prof">
                                <dl>
                                    <dt>趣味</dt>
                                    <dd>ラーメン屋巡り、楽器を吹く、映画鑑賞</dd>
                                    <dt>資格・特技</dt>
                                    <dd>文部科学省後援 色彩検定2級 取得
                                        環境の変化をすぐ気づくことができる観察力</dd>
                                    <dt>性格</dt>
                                    <dd>人と話すことが好き。楽しいこと・
                                        空間が好きなため、重たい会議や接待が苦手。</dd>
                                    <dt>MBTI診断</dt>
                                    <dd>ESFP(エンターテイナー)</dd>
                                    <dt>高校</dt>
                                    <dd>千葉県立千葉商業高等学校情報処理科</dd>
                                    <dt>専門学校</dt>
                                    <dd>日本電子専門学校 Webデザイン科</dd>
                                    <dt>アルバイト</dt>
                                    <dd>スーパーのレジ部門(2年間)ゲームセンターの店舗管理(1年間)</dd>
                                </dl>
                            </div>
                            <div className="skills">
                                <h4>Skills</h4>
                                <div>
                                    <dl>
                                        <dt><img src={HTMLCSS} alt="HTML・CSS" /></dt>
                                        <dd><img src={Stars5} alt="星5" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={js} alt="Javascript" /></dt>
                                        <dd><img src={Stars45} alt="星4.5" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={react} alt="HTML・CSS" /></dt>
                                        <dd><img src={Stars3} alt="星3" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={PHP} alt="PHP" /></dt>
                                        <dd><img src={Stars15} alt="星1.5" /><br /><span>※学習中</span></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={Sass} alt="Sass" /></dt>
                                        <dd><img src={Stars4} alt="星4" /></dd>
                                    </dl><dl>
                                        <dt><img src={figma} alt="Figma" /></dt>
                                        <dd><img src={Stars4} alt="星4" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={Ps} alt="PhotoShop" /></dt>
                                        <dd><img src={Stars25} alt="星2.5" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={Ai} alt="illustrator" /></dt>
                                        <dd><img src={Stars3} alt="星3" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={Xd} alt="Xd" /></dt>
                                        <dd><img src={Stars3} alt="星3" /></dd>
                                    </dl>
                                    <dl>
                                        <dt><img src={Pr} alt="PremierePro" /></dt>
                                        <dd><img src={Stars2} alt="星2" /></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
            {/* <Link to={`/`}>Works</Link> */}
        </>
    );
};

export default About;