import  React  from 'react';
import HeroSlider , {Slide} from 'hero-slider';
import styles from './swiper.module.css';
import photo1 from './p1.jpg';
import photo2 from './p2.jpg';
import photo3 from './p3.jpg';



// Import Swiper styles
// 

const Slider = () => {
    // const swiper = useSwiper();
  return (
  
      <HeroSlider
    className={styles.slider}
    slidingAnimation='left_to_right'
    orientation='horizontal'
    initialSlide={1}
    onBeforeChange={(previousSlide , nextSlide)=> console.log('onBeforeChange',previousSlide ,nextSlide)}
    onChange={nextSlide => console.log('onChange', nextSlide)}
    onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
    style={{
      backgroundColor: "rgba( 0,0,0,0.33)"
    }}
    settings={{ 
      slidingDuration: 250,
      slidingDelay:100,
      shouldAutoplay:true,
      shouldDisplayButtons:true,
      autoplayDuration: 5000,
      height:"100vh"
      
    }}
    >
     
      <Slide  
      background={{
        backgroundImageSrc:photo1,
        backgroundAttachment: "fixed"
      }}
      >
        <div className={styles.slide1}>
          <h1 className={styles.h1s1}>All devices between your hand<br/>
          Control from Any where in world</h1>
        </div>
        <h5 className={styles.s1h5}>SafeHouse is a completely Iot System to controll devices from internet.</h5>
        <h5 className={styles.s1h5}>You can controll your home just from your phone.</h5>
        <div className="container">
        <div className="row">
          <div className="col-sm">
          <a className={styles.s1btn1}><h4>Contact us!</h4></a>
          </div>
          <div className="col-sm">
          <a className={styles.s1btn2}><h4>Products</h4></a>
          </div>
          
        </div>
      </div>
        
          
          
        
      </Slide>
      
      <Slide 
      background={{
        backgroundImageSrc:photo2,
        backgroundAttachment: "fixed"
      }}
      >
        <div className={styles.slide2}>
          <h1 className={styles.h1s2}>All devices between your hand<br/>
          Control from Any where in world</h1>
        </div>
        <h5 className={styles.s2h5}>SafeHouse is a completely Iot System to controll devices from internet.</h5>
        <h5 className={styles.s2h5}>You can controll your home just from your phone.</h5>
        <div className="container">
        <div className="row">
          <div className="col-2">
          <a className={styles.s2btn1}><h4>Contact us!</h4></a>
          </div>
          <div className="col-10">
          <a className={styles.s2btn2}><h4>Products</h4></a>
          </div>
          
        </div>
      </div>
      </Slide>
      <Slide 
      background={{
        backgroundImageSrc:photo3,
        backgroundAttachment: "fixed"
      }}
      >
        <div className={styles.slide3}>
          <h1 className={styles.h1s3}>All devices between your hand<br/>
          Control from Any where in world</h1>
        </div>
        <h5 className={styles.s3h5}>SafeHouse is a completely Iot System to controll devices from internet.</h5>
        <h5 className={styles.s3h5}>You can controll your home just from your phone.</h5>
        <div className="container">
        <div className="row">
          <div className="col-2">
          <a className={styles.s3btn1}><h4>Contact us!</h4></a>
          </div>
          <div className="col-10">
          <a className={styles.s3btn2}><h4>Products</h4></a>
          </div>
          
        </div>
      </div>
      </Slide>
    </HeroSlider>
    
   
  );
};
export default Slider;