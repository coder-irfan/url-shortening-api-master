import React from "react";

function Hero() {
  return (
    <>
      <section className="section pt-24 lg:pt-28 xl:pt-36 flex items-center gap-8 flex-col md:flex-row-reverse text-center md:text-left overflow-hidden
        md:overflow-visible 2xl:justify-center 2xl:gap-10">
        <div className="">
          <img src="images/illustration-working.svg" alt="illustration-working.svg" className=" overflow-x-hidden w-96 translate-x-24 scale-[1.6]
            sm:translate-x-0 md:w-auto md:scale-[1.5] md:translate-x-20 lg:translate-x-32 xl:translate-x-44 2xl:scale-[1.2]" />
        </div>

        <div className="md:w-[56rem] 2xl:w-[40rem] pt-16 sm:pt-28 md:pt-0">
          <h1 className="text-[clamp(2.5rem,6vw,4.7rem)] font-bold leading-[1.15] text-neutral-veryDarkBlue">More than just shorter links</h1>
          <p className="text-[1.125rem] xl:text-[1.375rem] text-neutral-grayishViolet font-medium mt-3 lg:mt-0 leading-[1.9] md:leading-[1.6]
            ">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button className="text-[1.25rem] md:text-fontSize lg:text-[1.25rem] bg-primary-cyan pt-3 pb-3.5 px-10 xl:pt-3 xl:pb-3.5 xl:px-10 rounded-[2rem]
           text-white transition-colors duration-300 hover:bg-opacity-60 font-medium mt-5  lg:mt-9">Get Started</button>
        </div>
      </section>
    </>
  )
}

export default Hero;