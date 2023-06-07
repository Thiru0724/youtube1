import bannerimage from '../images/bannerimage.jpg'
import '../styles/banner.css'

const Banner = () => {
    return ( 
        <div className="banner">
            <img src={bannerimage} alt="" />
        </div>
     );
}
 
export default Banner;