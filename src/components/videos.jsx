import { useState } from "react";
import { useEffect } from "react";
import '../styles/videos.css'
const Videos = () => {
    let [video, setVideo] = useState([])
    let[shorts,setShorts] = useState([])
    
    useEffect(() => {
        let fetchdata = async () => {
            let response1 = await fetch('http://localhost:4000/videos')
            let data1 = await response1.json()
            setVideo(data1)

            let response2 = await fetch('http://localhost:4000/shorts')
            let data2 = await response2.json()
            setShorts(data2)
        }

        fetchdata()
    })

    let removeVideos = (id,channel) =>{
        // let results = video.filter((x)=> x.id != id)
        // setVideo(results)
           
        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })

        alert(`${channel} video got removed`)
    }

    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videoData">
            {

               video.map((data)=>{
                return(
                    <div className="video">
                        <img src={data.thumbnail} alt="" />
                        <div className="videoDetails">
                        <h3>{data.title}</h3>
                        <p>{data.channel}</p>
                        <p>{data.views}</p>
                        <a onClick={()=>removeVideos(data.id,data.channel)}>Remove</a>
                        </div>
                    </div>
                )
               })
           }
            </div>
            <h1 className="shortstitle">Shorts</h1>
            <div className="shortsData">
                {
                    shorts.map((sdata)=>{
                        return(
                            <div className="short">
                                <img src={sdata.thumbnail} alt="" />
                                <div className="shortsDetails">
                                    <h3>{sdata.title}</h3>
                                    <p>{sdata.views}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    );
}

export default Videos;