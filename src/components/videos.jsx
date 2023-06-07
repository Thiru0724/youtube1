import { useState } from "react";
import '../styles/videos.css'
const Videos = () => {
    let [video, setVideo] = useState(
        [
            {
                thumbnail: "https://i.ytimg.com/vi/2ArYVApdzR8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBOJUtk_HTNRPXq0LBGnOrcqtfFOw",
                title: "మేలుకోరా బామ్మర్ది మేలుకో || Telugu Ultimate Comedy Scene || @70MMTHEATRE",
                channel: "70MM THEATRE",
                views: "47K views",
                id: 1
            },
            {
                thumbnail: "https://i.ytimg.com/vi/7i7A1KqIRgA/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBbyqiNDAIiPB_8c0k4O0P8s2senw",
                title: "Mix – Sri Rama Rajyam Movie | Sita Rama Charitham Video Song | Balakrishna | Nayanthara | Ilayaraja",
                channel: "Aditya Music India",
                views: "178M views",
                id: 2
            },
            {
                thumbnail: "https://i.ytimg.com/vi/S_85-IbWM6k/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDW5Y38C6H3kLQRK4ozcXwHn7iCPg",
                title: "Mix – Om Namo Venkatesaya Video Songs |Kaliyuga Vaikuntapuri Full Video Song | Nagarjuna, Anushka Shetty",
                channel: "Aditya Music India",
                views: "78M views",
                id: 3
            },
            {
                thumbnail: "https://i.ytimg.com/vi/IGW3m9C-dgg/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLD5xpnj_Fv35HzBEPxd2onNziTarw",
                title: "Best of AR Rahman Songs Jukebox| AR RAHMAN All Time Hits | AR RAHMAN Telugu songs | Melody Songs by Live Music 1.1M 2 months ago 1 hour, 4 minutes 113,551 views",
                channel: "Live Music 1.1M",
                views: "113K views",
                id: 4
            },
            {
                thumbnail: "https://i.ytimg.com/vi/t0Q2otsqC4I/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLB_XLboHbBN247pouoa7--Mmcdttg",
                title: "Tom y Jerry en Español | La noche divertida | WB Kids by WB Kids España 2 years ago 26 minutes 38,860,944 views",
                channel: "WB Kids España",
                views: "38M views",
                id: 5
            },
            {
                thumbnail: "https://i.ytimg.com/vi/zAh0s2RvIQs/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCOMKL6sBgqzbFvtvGUkScGkezG-A",
                title: "Jai Shri Ram (Telugu)Adipurush | Prabhas |Ajay-Atul,Manoj Muntashir,Ramajogayya S|Om Raut |Bhushan K by T-Series Telugu 2 weeks ago 2 minutes, 39 seconds 18,739,603 views",
                channel: "T-Series Telugu",
                views: "18M views",
                id: 6
            },

            {
                thumbnail: "https://i.ytimg.com/vi/-xDfBDcCHz0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLANRgZYd7l4qJUGtxsVhdOs6v0MOA",
                title: "I Found These Three Divine Mantras at the Right time and it's my go to Success Mantras by Mahakatha - Meditation Mantras 1 month ago 38 minutes 424,258 views",
                channel: "Mahakatha - Meditation Mantras",
                views: "424K views",
                id: 7
            },
            {
                thumbnail: "https://i.ytimg.com/vi/xMSNJ1vgXCk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLArTQ3uEbrP1nedVaF0ofuBcQEcuw",
                title: "Brahmanandam And Vennela Kishore Telugu Ultimate Movie Scene | Telugu Hitz",
                channel: "Telugu Hitz",
                views: "6.4K views",
                id: 8
            },
            {
                thumbnail: "https://i.ytimg.com/vi/eCAFU5Kc42Q/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAdhsvOFbeu0oTfMalKAU9wT9Ol-w",
                title: "Compilation 20 min #02 - Grizzy & the Lemmings",
                channel: "Grizzy & les Lemmings",
                views: "82M views",
                id: 9
            },
            {
                thumbnail: "https://i.ytimg.com/vi/oyDl59Hy_UQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDGBNqNmTliGxi5PzW4fVJpPTXJBQ",
                title: "Mix – Om Namo Venkatesaya Video Songs |Kaliyuga Vaikuntapuri Full Video Song | Nagarjuna, Anushka Shetty",
                channel: "Aditya Music India",
                views: "82M views",
                id: 10
            },

            {

                thumbnail: "https://i.ytimg.com/vi/8Imvx6RAoj8/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCL80Gv7ieOkWk8PgYEQRLp2Wtg4g",
                title: "Karthi, Rashi Khanna, Laila, Rajisha Vijayan Telugu FULL HD Action Movie Part 12/14 | Hit Cinemas by Hit Cinemas 1 day ago 9 minutes, 39 seconds 7,038 views",
                channel: "Hit Cinemas",
                views: "7K views",
                id: 11
            },
            {
                thumbnail: "https://i.ytimg.com/vi/_pqqc2RNO04/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLA9K0VipMLWb4MEOhRxwrQxWK6psA",
                title: "MIRACLE! Vakratunda Mahakaya Ganesha Mantra to Remove All Obstacles",
                channel: "Mahakatha - Meditation Mantras",
                views: "636K views",
                id: 12
            }
        ]
    )
    let[shorts,setShorts] = useState(
        [
            {
                thumbnail: "https://i.ytimg.com/vi/oF5Nws7UTq4/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLCDHlsa7N9D6G5WxVn6uq3fcswg4w",
                title:"Ultra Pro Max 🔥😂",
                views:"112M views"
            },
            {
                thumbnail: "	https://i.ytimg.com/vi/1pVyDMRX5U4/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLBRG0PEv9DYzNF0FW5JXwwGWWRzcA",
                title:"😈 JUST WATCH😱HANDCAME#shorts #pubgmobile #gaming #pubg",
                views:"1.1K views"
            },
            {
                thumbnail: "https://i.ytimg.com/vi/5m6ycDTI8YM/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLDL_b-ax6HkuP7nn10CcYj-30QzhQ",
                title:"Respect❤part¹ #mybloopers #funny #love #viral #love #shorts #myyearonyoutube #subscribe 250k ❤",
                views:"61M views"
            },
            {
                thumbnail: "https://i.ytimg.com/vi/zWBRiPrdZRA/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLCHrowlPMQG5mXnbvDi6z91LAZU6w",
                title:"“Nalupu Neredanti” Part.2 from Tokyo, Japan!! Kanchana @KarthikJonnada | @mayojapan #shorts",
                views:"899K views"
            },
            {
                thumbnail: "https://i.ytimg.com/vi/0nnm-Bjdct8/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLBok-w-46i7EaLANXWzU_L3VO7d8A",
                title:"Smartphone Macro Photography #photography #shorts",
                views:"8.1M views"
            },
            {
                thumbnail: "https://i.ytimg.com/vi/VfEDZ1Yr9MI/oar2.jpg?sqp=-o…EI9AICiQ3gB&rs=AOn4CLCzq_UNXq9KwZQvnHiWPLrK3yXPug",
                title:"VivO V27 Proo",
                views:"619K views"
            }, 
        ]
    )
    let removeVideos = (id,channel) =>{
        let results = video.filter((x)=> x.id != id)
        setVideo(results)
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