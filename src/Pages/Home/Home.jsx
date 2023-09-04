import PopularInstractor from '../../Components/PopularInstractor';
import Review from '../../Components/Review';
import Hero from '../../Components/HomeComponents/Hero';
import Info from '../../Components/HomeComponents/Info';
import PopularClasses from '../../Components/HomeComponents/PopularClasses';
import Features from '../../Components/HomeComponents/Features';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularClasses />
            <PopularInstractor />
            <Info />
            <Features />
            <Review />
        </div>
    );
};

export default Home;