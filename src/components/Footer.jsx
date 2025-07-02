import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-neutral-veryDarkVioled w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-5 justify-between py-[3.5rem] px-[1.5rem] sm:p-[2.5rem] md:py[3rem] md:px-[1.5rem] lg:py-[4.5rem]
         lg:px-[6.25rem] xl:px-[10.3125rem] items-center md:items-start text-center md:text-left 2xl:w-[90rem] 2xl:mx-auto">

          <div className="">
            <img src="images/logo.svg" alt="logo" className="brightness-[1000]" />
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-[4.0625rem] lg:gap-16 xl:gap-[5.95rem]">

            <div className="">
              <h5 className="mb-[1.375rem] text-white font-bold text-base">Features</h5>
              <ul className="space-y-2.5 text-neutral-gray font-medium text-[0.9375rem]">
                <li><a href="" className="hover:text-primary-cyan">Link Shortening</a></li>
                <li><a href="" className="hover:text-primary-cyan">Branded Links</a></li>
                <li><a href="" className="hover:text-primary-cyan">Analytics</a></li>
              </ul>
            </div>

            <div className="">
              <h5 className="mb-[1.375rem] text-white font-bold text-base">Resources</h5>
              <ul className="space-y-2.5 text-neutral-gray font-medium text-[0.9375rem]">
                <li><a href="" className="hover:text-primary-cyan">Blog</a></li>
                <li><a href="" className="hover:text-primary-cyan">Developers</a></li>
                <li><a href="" className="hover:text-primary-cyan">Support</a></li>
              </ul>
            </div>

            <div className="">
              <h5 className="mb-[1.375rem] text-white font-bold text-base">Company</h5>
              <ul className="space-y-2.5 text-neutral-gray font-medium text-[0.9375rem]">
                <li><a href="" className="hover:text-primary-cyan">About</a></li>
                <li><a href="" className="hover:text-primary-cyan">Our Team</a></li>
                <li><a href="" className="hover:text-primary-cyan">Careers</a></li>
                <li><a href="" className="hover:text-primary-cyan">Contact</a></li>
              </ul>
            </div>
            
            <div className="flex md:flex-col lg:flex-row gap-7 items-center md:items-start md:gap-4 lg:gap-6">
              <a href="" className=""><img src="images/icon-facebook.svg" alt="facebook" /></a>
              <a href="" className=""><img src="images/icon-twitter.svg" alt="twitter" /></a>
              <a href="" className=""><img src="images/icon-pinterest.svg" alt="pinterest" /></a>
              <a href="" className=""><img src="images/icon-instagram.svg" alt="instagram" /></a>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer;