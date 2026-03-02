import yt from './yt.jpg';
import React from 'react';

export default function Video() {
    // const youtubeApiKey = 'AIzaSyCB4k0MKe82JfMnPs3Aj9P8H8HtfOOB00o';
    //     const channelId = 'UCbXH7rTHviZBS9pY6s5zQMA';
    // const youtubeKey = 'AIzaSyCB4k0MKe82JfMnPs3Aj9P8H8HtfOOB00o';
    // const youtubeUser = 'UCbXH7rTHviZBS9pY6s5zQMA';
    // const subCount = document.getElementById('subCount');
    // const delay = 1000; // 10 min

    // let getSubscribers = () => {

    //     fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data);
    //         subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    //     })

    // }

    // setInterval(() => {
    //     getSubscribers();
    // }, delay);
    return (
        <div className="container mx-auto max-w-[1344px] place-items-center">
            <div className="place-items-center  shadow-2xl w-6/7 lg:w-4/7  mt-20 flex rounded-2xl min-h-2xl">
                <div className="grow m-2">
                    <img src={yt} alt="YouTube Channel" className="w-[min(10vw)] h-[min(10vw)] flex aspect-square rounded-full shadow-lg mx-auto my-4 " />
                </div>
                <div className="grow m-2">
                    <strong className=" text-[min(4vw)]">vVFanNaVv</strong><br/>
                    {/*<div id="subCount">Loading...</div>
                     <span id="subscriberCount"></span>*/}
                    <a className="btn bg-red-600 text-white rounded-2xl w-1/3" href="https://www.youtube.com/@vVFanNaVv">Subscribe</a>
                </div>
            </div>
            
            <div className="flex w-full h-2xl flex-col lg:flex-row m-5">
                <div className="card  rounded-box grid h-full grow lg:w-3/7 m-5 place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full ">
                                    <figure>
                                            <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/6B6krrhBg3I?si=5Kzb4yxphmDoltWx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
                                            </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">I Got Mini-You !!!!!</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105" href="https://www.youtube.com/watch?v=6B6krrhBg3I">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card  rounded-box grid h-full lg:w-3/7 m-5 grow place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full ">
                                    <figure>
                                        <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/CM4O4FWmlT4?si=7fd7euQPNWNfmdvi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                            </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Buying digger spade and getting 8th ring</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105" href="https://youtu.be/CM4O4FWmlT4?si=kSZfKxspGTHG_MrI">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>
                
            </div>
            
            <div className="flex w-full flex-col lg:flex-row m-5">
                
                <div className="card  rounded-box grid h-full lg:w-3/7 m-5 grow place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full">
                                    <figure>
                                            <iframe className="w-full" src="https://www.youtube.com/embed/4-2tFauMUuY?si=YAgOTaNogwkCGZeD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
                                            </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Growtopia | Thaivends</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105 " href="https://www.youtube.com/watch?v=4-2tFauMUuY">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card  rounded-box grid h-full lg:w-3/7 m-5 grow place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full">
                                    <figure>
                                        <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/BuQ54O4Tj54?si=xA2sV3vFA1hogwIl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">RoV | Elsu</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105" href="https://youtu.be/BuQ54O4Tj54?si=xA2sV3vFA1hogwIl">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>

            </div>

             <div className="flex w-full flex-col lg:flex-row m-5">
                
                <div className="card  rounded-box grid h-full lg:w-3/7 m-5  grow place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full ">
                                    <figure>
                                            <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/WuT504soi4U?si=tCW4ZA3f-VIk_5_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>  

                                    <div className="card-body">
                                        <h2 className="card-title">RoV Highlight #1</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105" href="https://youtu.be/WuT504soi4U?si=tCW4ZA3f-VIk_5_Y">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card  rounded-box grid h-full lg:w-3/7 m-5  grow place-items-center">
                    <div className="card lg:card-side bg-base-100 shadow-sm w-full">
                                    <figure>
                                        <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/i6eUCcC9CIM?si=q--yroFWBbl2wcBn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Toro | Middlelane | RoV</h2>
                                        
                                        <div className="card-actions justify-end">
                                        <a className="btn btn-primary hover:scale-105" href="https://youtu.be/i6eUCcC9CIM?si=q--yroFWBbl2wcBn">Watch</a>
                                        </div>
                                    </div>
                                </div>
                </div>

            </div>
            

        </div>
    );
}