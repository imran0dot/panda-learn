import PopularInstractor from '../../Components/PopularInstractor';
import Review from '../../Components/Review';
import Hero from '../../Components/HomeComponents/Hero';
import Info from '../../Components/HomeComponents/Info';

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