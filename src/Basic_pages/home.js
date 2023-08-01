// import SimpleSlider from './home_helper/slick';
import Slider from "../Slider/swiper";


const Home = ()=>{
    const m = <h5>hello world</h5>;
    return (
        <div className="App-header">
            <Slider />
           {/* {products.map((el) =>(
            <div style={pstyle} >{el}</div>
           ))}
            */}
            {m}
        </div>
    )
}
export default Home;