import Gadgets from "../Gadgets/Gadgets";
import HeroSection from "../HeroSection/HeroSection";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <HeroSection></HeroSection>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;