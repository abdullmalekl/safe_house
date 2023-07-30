// import SimpleSlider from './home_helper/slick';
import Slider from "../Slider/swiper";


const Home = ()=>{
    const products = ['AirSensor' , 'smoke sensor' ,'camera' , 'lounder'];
    const pstyle = {'color' : 'lightblue' , 'padding' : '50px' };
    return (
        <div className="App-header">
            <Slider />
           {/* {products.map((el) =>(
            <div style={pstyle} >{el}</div>
           ))}
            */}
        </div>
    )
}
export default Home;