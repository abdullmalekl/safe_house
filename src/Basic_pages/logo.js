import Applogo from '../App-photo.png';
const logo = ()=>{
    return (
        <div className="Applogo">
           <div className='col'>
           <div className="LogoPhoto">
                <img src={Applogo}></img>
            </div>
            <div className='Social'>
            <a id='FacebookButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>F</b></a>
            <a id='telegramButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>T</b></a>
            </div>
           </div>
        </div>
    )
}
export default logo;