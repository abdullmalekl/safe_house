// import SimpleSlider from './home_helper/slick';

import { Fragment } from "react";

const Home = ()=>{
    const products = ['AirSensor' , 'smoke sensor' ,'camera' , 'lounder'];
    const pstyle = {'color' : 'lightblue' , 'padding' : '50px' };
    return (
        <div className="App-header">
            {/* <SimpleSlider /> */}
           {products.map((el) =>(
            <div style={pstyle} >{el}</div>
           ))}
           
        </div>
    )
}
export default Home;