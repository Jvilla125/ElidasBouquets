import React from "react";

const SocialMediaBannerComponent = () => {
    return (
        <>
            <div className="mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 bg-gray-400">
                <a href="https://www.tiktok.com/@elidasbouquets">
                    <div className="containerimg border border-b">
                        <img src="/images/tiktok.png" alt="tiktok" />
                        <div className="centered text-blue-600 sm:text-7xl text-5xl"> Check out my tiktok Page!</div>
                    </div>
                </a>

                <a href="https://www.instagram.com/elidasbouquets/?hl=en">
                    <div className="border border-b">
                        <img src="/images/insta.png" className="object-fill h-auto " alt="tiktok" />
                    </div>
                </a>

            </div>
        </>
    )
}

export default SocialMediaBannerComponent;
