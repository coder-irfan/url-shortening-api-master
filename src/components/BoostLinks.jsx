import React from "react";

function BoostLinks() {
  return (
    <>
      <section className="boost absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <h4 className="text-[1.725rem] md:text-[2rem] lg:text-[2.475rem] font-bold text-white">Boost your links today</h4>
        <button className="text-[1.25rem] md:text-fontSize lg:text-[1.25rem] bg-primary-cyan pt-3 pb-3.5 px-10 xl:pt-3 xl:pb-3.5
          xl:px-10 rounded-[2rem] text-white transition-colors duration-300 hover:bg-opacity-60 font-bold mt-4 md:mt-[1.4375rem]">Get Started</button>
      </section>
    </>
  )
}

export default BoostLinks;