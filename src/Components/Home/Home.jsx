
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;