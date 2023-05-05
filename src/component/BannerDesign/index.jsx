// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
import Typical from "react-typical";

const BannerDesign = () => {
    return (
        <>
            <Header />
            <main className="Banner">
                <article>
                    <section className="keyvisual">
                        <h1>
                            <Typical
                                steps={[
                                    "BannerDesign."
                                ]}
                            />
                        </h1>
                    </section>
                    <section className="summary">
                        <h2>
                            <span>自主制作</span><br />「バナー広告デザイン制作」</h2>
                        <p>得意とするコーディングだけではなく、デザイン面でのスキルもあげようと思い、2月末から自主学習としてバナー広告の模写制作を行ってきました。苦手だったペンツールを克服するため、文字から複雑な図形まで様々なものを作成しました。今後は模写制作を続けながら、既存デザインのリニューアル制作を行う予定です。</p>                    </section>
                </article>
            </main>
            <Footer />
            {/* <Link to={`/`}>Works</Link> */}

        </>

    )
}

export default BannerDesign