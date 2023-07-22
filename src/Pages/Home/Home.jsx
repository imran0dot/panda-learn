import PopularInstractor from '../../Components/PopularInstractor';
import Review from '../../Components/Review';
import Hero from '../../Components/HomeComponents/Hero';
import Info from '../../Components/HomeComponents/Info';
import PopularClasses from '../../Components/HomeComponents/PopularClasses';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularClasses />
            <PopularInstractor />
            <Info />
            <Review />
        </div>
    );
};

export default Home;