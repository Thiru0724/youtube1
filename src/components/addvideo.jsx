import '../styles/addvideo.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom' ;
const AddVideo = () => {
    
    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) =>{
        e.preventDefault() //prevents the page from reloading
        let data = {
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)

        })
        alert('video uploaded successfully')
        navigate('/') // navigating to different routes
    }
    return ( 
        <div className="addVideo">
           <div className="image">
            <img src="https://th.bing.com/th/id/OIP.EqoCM5HAI4xwdR_cWDSU2AHaFP?w=222&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
           </div>
           <div className="content">
            <div className="welcome">
                <h1>Welcome to Dribbble</h1>
                <p>Common and create an account</p>
            </div>
            <div className="formdetails">
                <form action="" onSubmit={upload}>
                    <label htmlFor="">Thumbnail</label><br /> <input ref={thumbnail} type="url" /><br />
                    <label htmlFor="">Title</label><br /> <input ref={title} type="text" /><br />
                    <label htmlFor="">Channel</label><br /><input ref={channel} type="text" name="" id="" /><br />
                    <label htmlFor="">Views</label><br /><input ref={views} type="text" name="" id="" /><br />
                    {/* <input type="checkbox" className="cheching" /><label >I agree with the websites <span>Terms and Conditions</span></label><br /> */}
                    <button>Upload </button>

                </form>
            </div>
           </div>
        </div>
     );
}
 
export default AddVideo;