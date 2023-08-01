// import SimpleSlider from './home_helper/slick';
import Slider from "../Slider/swiper";
import headingTag from './home_helper/headingTag';
import styles from './home_helper/home_helper.module.css';


const Home = ()=>{
    return (
        <div className="App-header">
            <Slider />
            <headingTag />
            <div className={styles.headingTag}>
        <h3 className={styles.font}><b>House Control IOT Automation Platform</b></h3>
        <a className={styles.btn1}>GET A QUOTE</a>
    </div>
    <div className={styles.products}>

    </div>
        </div>
    )
}
export default Home;