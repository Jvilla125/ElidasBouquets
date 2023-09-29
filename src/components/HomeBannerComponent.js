import React from "react"


const HomeBannerComponent = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("/images/bfday.jpeg")', // Replace with your image path
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
      };

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-4/5 lg:w-3/4 ">
                    <img
                        src="/images/bfday.jpeg" // Replace with the actual image source
                        alt="Centered Image"
                        className="mx-auto h-46 p-4"
                    />
                </div>
            </div>
            {/* <div className="flex justify-center items-center">
            <div class="w-full  md:w-4/5 lg:w-4/5 h-64 rounded-md bg-cover bg-center" style={backgroundImageStyle}>
                <div class="flex items-center justify-center ">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-5xl font-semibold">Oct. 3rd National Boyfriends Day</h2>
                    </div>
                </div>
            </div>
            </div> */}
        </>
    )
}

export default HomeBannerComponent;