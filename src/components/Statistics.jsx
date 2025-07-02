import React from "react";
import Shortening from "./Shortening";

function Statistics() {
  const statistics = [
    {
      id: 1,
      img: "images/icon-brand-recognition.svg",
      title: "Brand Recognition", 
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    
    {
      id: 2, 
      img: "images/icon-detailed-records.svg", 
      title: "Detailed Records", 
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },

    {
      id: 3,
      img: "images/icon-fully-customizable.svg", 
      title: "Fully Customizable", 
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },
  ]

  return (
    <>
      <section className="bg-neutral-grayBgColor w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-44 md:mt-48 
        lg:mt-[13.875rem] z-10">
        <div className="py-[2.5rem] pb-20 px-[1.5rem] sm:p-[2.5rem] sm:pb-20 md:pt[3rem] md:px-[1.5rem] lg:pt-[3rem] lg:px-[6.25rem]
          xl:pt-[3rem] lg:pb-[13rem] xl:px-[10.3125rem]">

          <Shortening />
          
          <div className="text-center pt-10 md:pt-[5.75rem]">
            <h2 className="text-[1.6875rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-neutral-veryDarkVioled">Advanced Statistics</h2>
            <p className="sm:w-[32.0625rem] text-base md:text-fontSize mx-auto text-neutral-grayishViolet font-medium pt-5 md:pt-[0.625rem] leading-[1.7] md:leading-[1.78]">
              Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
          </div>
        
          <div className="lg:flex lg:gap-[1.875rem] 2xl:w-[75rem] 2xl:mx-auto">
            {statistics.map((statistic) => ( // You can use return or this curely craces ().
              <div className="sm:w-[32.0625rem] lg:w-auto mx-auto relative text-center lg:text-left" key={statistic.id}>
                <span className={`absolute -top-24 left-1/2 -translate-x-1/2 h-28 w-2 ${statistic.id !== 1 ? 'bg-primary-cyan' : ''} lg:top-64 lg:-left-10 lg:translate-x-0 lg:h-2 lg:w-12
                  -z-10`}></span>
                
                <div className={`absolute -top-14 left-1/2 -translate-x-1/2 lg:top-[3.675rem] lg:left-[4.6875rem] bg-primary-darkVoilet p-6 rounded-full z-10
                  ${statistic.id === 2 ? 'lg:top-[6.125rem]' : statistic.id === 3 ? 'lg:top-[8.95rem] p-[1.2rem]' : ''}`}>
                  <img src={statistic.img} alt={statistic.title} />
                </div>
                
                <div className={`px-[1.875rem] pb-9 lg:pb-[2.375rem] pt-[4.625rem] bg-white mt-24 lg:mt-[6.2rem] rounded-md
                  ${statistic.id === 2 ? 'lg:translate-y-[2.75rem]' : statistic.id === 3 ? 'lg:translate-y-[5.5rem]' : ''}`}>
                  <h3 className="text-[1.375rem] font-bold text-neutral-veryDarkVioled">{statistic.title}</h3>
                  <p className="text-[0.9375rem] lg:text-[0.97rem] text-neutral-grayishViolet font-medium leading-[1.7] lg:leading-[1.67] pt-4">{statistic.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics;