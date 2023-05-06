// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
import enoshima from "../../assets/img/enoshima.jpg"
import enoshima2 from "../../assets/img/enoshima2.jpg"
import enohshima3 from "../../assets/img/enoshima3.jpg"
import enoshima4 from "../../assets/img/enoshima4.jpg"
// import Typical from "react-typical";
import react from "../../assets/img/React.svg"
import Sass from "../../assets/img/SassIcon.svg"
import CSS from "../../assets/img/CSSicon.svg"
import { useTypewriter } from 'react-simple-typewriter'

const Enoshimabbq = () => {
    const [text] = useTypewriter({
        words: ["Enoshima BBQ."],

        // typeSpeed: 20,
        onLoopDone: () => console.log("done from typewriter hook")
    });
    return (
        <>
            <Header />
            <main className="Enoshima">
                <article>
                    <section className="keyvisual">
                        <h1>
                            {text}
                        </h1>
                    </section>
                    <section className="summary">
                        <h2>
                            <span>1年進級制作課題</span><br />「江ノ島マリーナ『サンカフェ』公式サイト」
                        </h2>
                        <dl className="Technology">
                            <dt>使用技術：</dt>
                            <dd><ul><li><img src={react} alt="Reactjs" /></li><li><img src={CSS} alt="CSS" /></li><li><img src={Sass} alt="Sass" /></li></ul></dd>
                        </dl>
                        <dl className="github">
                            <dt>git:</dt>
                            <dd>https://github.com/kuramotomakito/-BBQ</dd>
                        </dl>
                        <p>進級制作ではクライアントの企業様に来校していただき、実際の仕事の案件を課題として提出し評価していただきました。江ノ島マリーナで行われるBBQのLPページを1ページ制作し、海のイメージカラーとBBQの写真の色味を統一するのにとても苦労しました。またReactjsを初めて使いましたが、エラーを解消することができず、改良を続けています。</p>
                        <div><img src={enoshima} alt="江ノ島マリーナBBQtop" /></div>
                        <div className="mockup">
                            <div><img src={enoshima2} alt="江ノ島マリーナBBQ競技内容" /></div>
                            <div><img src={enohshima3} alt="江ノ島マリーナBBQアクセス" /></div>
                            <div><img src={enoshima4} alt="江ノ島マリーナBBQアクセス" /></div>

                        </div>
                    </section>
                </article>
            </main>
            <Footer />
            {/* <Link to={`/`}>Works</Link> */}
        </>)
}

export default Enoshimabbq