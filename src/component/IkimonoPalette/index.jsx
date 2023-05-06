// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer"
import ikimono from "../../assets/img/ikimono.jpg"
import ikimono2 from "../../assets/img/ikimono2.jpg"
import ikimono3 from "../../assets/img/ikimono3.jpg"
import ikimono4 from "../../assets/img/ikimono4.jpg"
import Typical from "react-typical";
import HTML from "../../assets/img/HTML.svg"
import CSS from "../../assets/img/CSSicon.svg"
import js from "../../assets/img/JS.svg"
import Cprass from "../../assets/img/C++.svg"
const IkimonoPalette = () => {
    return (
        <>
            <Header />
            <main className="Ikimono">
                <article>
                    <section className="keyvisual">
                        <h1> <Typical
                            steps={[
                                "Ikimono  Palette."
                            ]}
                        /></h1>
                    </section>
                    <section className="summary">
                        <h2>
                            <span>課外活動</span><br />「「学科横断プロジェクト『いきものパレット』」
                        </h2>
                        <dl className="Technology">
                            <dt>使用技術：</dt>
                            <dd><ul><li><img src={HTML} alt="HTML" /></li><li><img src={CSS} alt="CSS" /></li><li><img src={js} alt="Javascript" /></li><li><img src={Cprass} alt="C++" /></li></ul></dd>
                        </dl>
                        <dl className="github">
                            <dt>git:</dt>
                            <dd><a href="https://github.com/kuramotomakito/IkimonoPalette">https://github.com/kuramotomakito/IkimonoPalette</a></dd>
                        </dl>
                        <dl className="URL">
                            <dt>URL:</dt>
                            <dd><a href="https://trillion-node.org/forums/topic/20221118/"> https://trillion-node.org/forums/topic/20221118/</a></dd>
                        </dl>
                        <p>課外活動では異なる専門技術を学ぶ者が集まり、学科と学年を超えた共創プロジェクトによるサービスの開発を行いました。このいきものパレットは「海の中の生き物の色を集めたい」という思いから、色センサーとBluetooth機能を使ったサービスを開発しました。このサービスは「第3回ナノコン応用コンテスト」で最優秀賞を獲得しました。</p>
                        <div><img src={ikimono4} alt="スポーツフェスティバルのサイトアクセス" /></div>
                        <div><img src={ikimono} alt="スポーツフェスティバルのサイトtop" /></div>
                        <div><img src={ikimono2} alt="スポーツフェスティバルのサイト競技内容" /></div>
                        <div><img src={ikimono3} alt="スポーツフェスティバルのサイトアクセス" /></div>

                    </section>
                </article>
            </main>

            <Footer />
            {/* <Link to={`/`}>Works</Link> */}

        </>)
}

export default IkimonoPalette