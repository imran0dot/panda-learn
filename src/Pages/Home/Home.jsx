import Hero from '../../Components/Hero';
import PopularInstractor from '../../Components/PopularInstractor';
import Review from '../../Components/Review';
import Info from '../../Components/Info';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularInstractor />
            <Info />
            <Review />
        </div>
    );
};

export default Home;