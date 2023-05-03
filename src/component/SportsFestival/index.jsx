// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
const SportsFestival = () => {
    return (
        <>
            <Header />
            <main>
                <article>
                    <section>
                        <h1>SportsFestival</h1>
                        <section>
                            <h2>
                                <span>1年前期課題</span>「スポーツフェスティバル公式サイト」
                            </h2>
                            <dl>
                                <dt>git:</dt>
                                <dd>https://github.com/kuramotomakito/supofesu</dd>
                            </dl>
                            <p>本校でのイベントの一つ「JECスポーツフェスティバル」の公式サイト制作を行いました。初めて企画を一から考えコーディングした作品で赤色の背景と多くの写真を用いることで、わかりやすく元気なイメージが伝わるよう工夫しました。友達からのおすすめでSassを使い、CSSを効率よく書くことができました。</p>
                            <div><img src="" alt="スポーツフェスティバルのサイトtop" /></div>
                            <div><img src="" alt="スポーツフェスティバルのサイト競技内容" /></div>
                            <div><img src="" alt="スポーツフェスティバルのサイトアクセス" /></div>
                        </section>
                    </section>
                </article>
            </main>
            <Footer />


        </>
    );
};

export default SportsFestival;