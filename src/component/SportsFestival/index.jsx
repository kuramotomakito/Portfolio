// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
import sports from "../../assets/img/sports.jpg"
import sports2 from "../../assets/img/sports2.jpg"
import sports3 from "../../assets/img/sports3.jpg"
import sports4 from "../../assets/img/sport4.jpg"
import Typical from "react-typical";

// import sportlink from "https://github.com/kuramotomakito/supofesu"
const SportsFestival = () => {
    return (
        <>
            <Header />
            <main className="Sport">
                <article>
                    <section className="keyvisual">
                        <h1>
                            <Typical
                                steps={[
                                    "SportsFestival."
                                ]}
                            />
                        </h1>
                    </section>
                    <section className="summary">
                        <h2>
                            <span>1年前期課題</span><br />「スポーツフェスティバル公式サイト」
                        </h2>

                        <dl>
                            <dt>git:</dt>
                            <dd><a href="https://github.com/kuramotomakito/supofesu">https://github.com/kuramotomakito/supofesu</a></dd>
                        </dl>
                        <p>本校でのイベントの一つ「JECスポーツフェスティバル」の公式サイト制作を行いました。初めて企画を一から考えコーディングした作品で赤色の背景と多くの写真を用いることで、わかりやすく元気なイメージが伝わるよう工夫しました。友達からのおすすめでSassを使い、CSSを効率よく書くことができました。</p>
                        <div><img src={sports} alt="スポーツフェスティバルのサイトtop" /></div>
                        <div className="mockup">
                            <div><img src={sports2} alt="スポーツフェスティバルのサイト競技内容" /></div>
                            <div><img src={sports3} alt="スポーツフェスティバルのサイトアクセス" /></div>
                            <div><img src={sports4} alt="スポーツフェスティバルのサイト注意事項" /></div>
                        </div>

                    </section>
                </article>
            </main>
            <Footer />


        </>
    );
};

export default SportsFestival;