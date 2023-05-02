// import { Link } from "react-router-dom";
import Header from "../../assets/Header"

const About = () => {
    return (
        <>
            <Header />
            <main>
                <article>
                    <section>
                        <h1>Minagi’s Profile</h1>
                        <section>
                            <h2>About</h2>
                            <div>
                                <h3>藤嶋 美凪</h3>
                                <ruby>Fujishima Minagi</ruby>
                                <p>Front-end Engineer</p>
                            </div>
                            <h3>藤嶋 美凪</h3>
                            <ruby>Fujishima Minagi</ruby>
                            <p>Front-end Engineer</p>
                            <p>千葉県千葉市出身。2003年6月15日生まれ。</p>
                            <p>高校の頃からプログラミングを学び、好きなファッションのデザイナーを目指していたが、「学んできたプログラミングとなりたいデザイナーの両方を使用する職業はないか」と考えた時に、Web業界を知る。現在は日本電子専門学校 Webデザイン科に在学し、Webサイト構築フロー全ての工程を学び実践しながら、「日々新しいものに挑戦し続けるフロントエンドエンジニア」を目指している。</p>
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
                            <h4>Skills</h4>
                            <dl>
                                <dt><img src="" alt="HTML・CSS" /></dt>
                                <dd><img src="" alt="星5" /></dd>
                                <dt><img src="" alt="Javascript" /></dt>
                                <dd><img src="" alt="星4.5" /></dd>
                            </dl>
                            <dl>
                                <dt><img src="" alt="Reactjs" /></dt>
                                <dd><img src="" alt="星3" /></dd>
                                <dt><img src="" alt="PHP" /></dt>
                                <dd><img src="" alt="星1.5" />※学習中</dd>
                            </dl>
                            <dl>
                                <dt><img src="" alt="Sass" /></dt>
                                <dd><img src="" alt="星4" /></dd>
                                <dt><img src="" alt="Figma" /></dt>
                                <dd><img src="" alt="星4" /></dd>
                            </dl>
                            <dl>
                                <dt><img src="" alt="PhotoShop" /></dt>
                                <dd><img src="" alt="星2.5" /></dd>
                                <dt><img src="" alt="illustrator" /></dt>
                                <dd><img src="" alt="星3" /></dd>
                            </dl>
                            <dl>
                                <dt><img src="" alt="Xd" /></dt>
                                <dd><img src="" alt="星3" /></dd>
                                <dt><img src="" alt="PremierePro" /></dt>
                                <dd><img src="" alt="星2" /></dd>
                            </dl>
                        </section>
                    </section>

                </article>
            </main>
            <div>PortfoliobyMinagi2023©MinagiFujishima</div>

            {/* <Link to={`/`}>Works</Link> */}
        </>
    );
};

export default About;