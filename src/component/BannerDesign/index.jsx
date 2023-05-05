// import { Link } from "react-router-dom";
import Header from "../../assets/Header"
import Footer from "../../assets/Footer";
const BannerDesign = () => {
    return (
        <>
            <Header />
            <main className="Banner">
                <article>
                    <section className="keyvisual">
                        <h1>BannerDesign</h1>
                        <section>
                            <h2>
                                <span>自主制作</span>「バナー広告デザイン制作」</h2>
                        </section>
                    </section>
                </article>
            </main>
            <Footer />
            {/* <Link to={`/`}>Works</Link> */}

        </>

    )
}

export default BannerDesign