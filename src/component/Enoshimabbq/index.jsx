// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
const Enoshimabbq = () => {
    return (
        <>
            <Header />
            <main>
                <article>
                    <section>
                        <h1>EnoshimaBBQ</h1>
                        <section>
                            <h2>
                                <span>1年進級制作課題</span>「江ノ島マリーナ『サンカフェ』公式サイト」
                            </h2>
                            <dl>
                                <dt>git:</dt>
                                <dd>https://github.com/kuramotomakito/-BBQ</dd>
                            </dl>
                            <p>進級制作ではクライアントの企業様に来校していただき、実際の仕事の案件を課題として提出し評価していただきました。江ノ島マリーナで行われるBBQのLPページを1ページ制作し、海のイメージカラーとBBQの写真の色味を統一するのにとても苦労しました。またReactjsを初めて使いましたが、エラーを解消することができず、改良を続けています。</p>
                            <div><img src="" alt="江ノ島マリーナBBQtop" /></div>
                            <div><img src="" alt="江ノ島マリーナBBQ競技内容" /></div>
                            <div><img src="" alt="江ノ島マリーナBBQアクセス" /></div>
                        </section>
                    </section>
                </article>
            </main>
            <Footer />
            {/* <Link to={`/`}>Works</Link> */}
        </>)
}

export default Enoshimabbq