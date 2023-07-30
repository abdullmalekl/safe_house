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
      />
      <Slide 
      background={{
        backgroundImageSrc:photo2,
        backgroundAttachment: "fixed"
      }}
      />
      <Slide 
      background={{
        backgroundImageSrc:photo3,
        backgroundAttachment: "fixed"
      }}
      />
    </HeroSlider>
    
   
  );
};
export default Slider;