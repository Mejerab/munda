import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "../section/Banner";
import Newsletter from "../section/Newsletter";
import Projects from "../section/Projects";
import Services from "../section/Services";
import Stategy from "../section/Stategy";
import Testimonials from "../section/Testimonials";

const Main = () => {
    return (
        <div className="font">
            <Header />
            <Services />
            <Banner />
            <Stategy />
            <Projects />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Main;