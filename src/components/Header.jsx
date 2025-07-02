import React, {useState} from "react";

function Header() {
  const [isOpen, isSetOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between md:items-center 2xl:justify-center 2xl:gap-[40rem]">

        <div className="wrapper flex md:gap-5 lg:gap-7 xl:gap-11 md:items-center justify-center md:justify-start">
          <div className="">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <nav className={`links absolute top-24 sm:top-28 -translate-x-1/2 md:relative md:top-0 md:translate-x-0 bg-primary-darkVoilet md:left-0
            font-bold w-[85%] sm:w-9/12 md:w-auto md:bg-transparent py-10 px-5 md:py-0 md:px-0 md:text-[0.9375rem] text-[1.125rem] rounded-xl
            md:rounded-none" z-50 md:z-0 transition-all duration-1000 ${isOpen ? 'left-1/2' : '-left-[100%]'}`}>
            <ul className="flex flex-col gap-7 md:gap-5 lg:gap-7 xl:gap-8 md:flex-row items-center md:items-start text-neutral-100
             md:text-neutral-grayishViolet ">
              <li className="transition-colors duration-300 hover:text-neutral-gray md:hover:text-neutral-veryDarkVioled"><a href="">Features</a></li>
              <li className="transition-colors duration-300 hover:text-neutral-gray md:hover:text-neutral-veryDarkVioled"><a href="">Pricing</a></li>
              <li className="transition-colors duration-300 hover:text-neutral-gray md:hover:text-neutral-veryDarkVioled"><a href="">Resources</a></li>
            </ul>
            
            <hr className="my-8 md:hidden"/>
            <div className="nav-buttons flex flex-col gap-6 text-neutral-100 md:text-neutral-grayishViolet md:hidden">
              <button className="transition-colors duration-300 hover:text-neutral-gray">Login</button>
              <button className="bg-primary-cyan p-2.5 rounded-3xl transition-colors duration-300 hover:bg-opacity-60">Sign Up</button>
            </div>
          </nav>
        </div>
        
        {!isOpen && (
          <div className="icon absolute top-10 right-6 sm:right-10 text-2xl cursor-pointer md:hidden" onClick={() => isSetOpen(true)}>
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        )}

        {isOpen && (
          <div className="icon absolute top-10 right-6 sm:right-10 text-2xl cursor-pointer md:hidden" onClick={() => isSetOpen(false)}>
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        )}
       
        <div className="buttons hidden md:flex gap-5 text-[0.9375rem] lg:gap-5 xl:gap-[2.375rem] font-bold text-neutral-grayishViolet">
          <button className="transition-colors duration-300 hover:text-neutral-veryDarkVioled">Login</button>
          <button className="bg-primary-cyan pt-2 pb-2.5 px-7 rounded-[2rem] text-white transition-colors duration-300 hover:bg-opacity-60">Sign Up</button>
        </div> 

      </header>
    </>
  )
}

export default Header;