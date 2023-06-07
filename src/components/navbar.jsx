import YTLogo from '../images/YTLogo.png'
import notificationlogo from '../images/notificationlogo.png'
import videologo from '../images/videologo.png'
import '../styles/navbar.css'
function Navbar() {
    return(
        <div className="navbar">
           <div className="logo">
            <img width={150} src={YTLogo} alt="" />
           </div>
           <div className="searchbar">
            <input type="text" placeholder='Search'/>
           </div>
           <div className="userOptions">
            <img width={40} src={videologo} alt="" />
            <img width={40} src={notificationlogo} alt="" />
            <h4>T</h4>
           </div>
        </div>
    )
}
export default Navbar;