import React, { useState } from "react";

function Shortening() {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null); // null meaning no error at first
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // This prevents the page from reloading when the form submits

    if (!inputValue.trim()) { // if the input field is empty or just spaces
      setError("Please add a link");
      return; // This stops the function from continuing if the input is invalid
    }

    try { // This is where the user's link gets sent to the server for shortening
      setIsLoading(true);
      const res = await fetch("https://url-shortening-api-master.onrender.com/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: inputValue }), // sends the user’s input as a JSON object
      });

      const data = await res.json(); // This line waits for the server to respond and converts the response into a JavaScript object.

      if (data.result_url) { // checks if the API response contains a result_url — meaning the link was successfully shortened.
        setLinks(prev => [...prev, { // create a new array, copying all previous links, then add a new object with...
          original: inputValue, // ...the URL user entered
          short: data.result_url, // ...the shortened URL returned by the API
        }]);
        setInputValue("");
        setError(null);
        setIsLoading(false);
      } else {
        setError("Invalid URL");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Network error - try again");
    }
  };

  return (
    
    <section className="">
      <div className="relative bg-primary-darkVoilet overflow-hidden rounded-lg -mt-32 md:-mt-[8.25rem]">
        <img
          src="images/bg-shorten-mobile.svg"
          alt="shorten-bg"
          className="md:hidden absolute inset-0 w-full h-full object-cove"
        />
        <img
          src="images/bg-shorten-desktop.svg"
          alt="shorten-bg"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
    
        <form onSubmit={handleSubmit}>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 md:py-[3.25rem] md:px-16 max-w-[75rem] mx-auto">
            <input
              type="text"
              disabled={isLoading}
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Shorten a link here..."
              className={`flex-1 w-full py-5 px-8 rounded-lg placeholder:font-medium placeholder:text-base lg:placeholder:text-[1.25rem] focus:outline-none
              ${error ? 'outline outline-secondary-red placeholder:text-secondary-red' : 'placeholder:text-neutral-grayishViolet outline-none'}
              ${isLoading ? 'cursor-not-allowed' : ''}`}   
            />
            {error && <p className="text-secondary-red italic text-left md:absolute bottom-4">{error}</p>}
            <button
              disabled={isLoading}
              type="submit"
              className={`w-full md:w-[11.75rem] text-[1.25rem] py-2.5 md:py-4 rounded-lg bg-primary-cyan text-white font-bold transition
                ${isLoading ? 'cursor-not-allowed hover:bg-opacity-100' : 'hover:bg-opacity-60'}`}
            >
              {isLoading ? "Loading..." : "Shorten It!"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 space-y-4 w-full mx-auto 2xl:w-[75rem]">
        {isLoading && (
          <p className="text-center text-neutral-grayishViolet text-fontSize italic">Shortening your link, please wait...</p>
        )}
  
        {links.map((link, i) => (
          <div className="bg-white py-5 px-8 rounded-md flex flex-col md:flex-row justify-between md:items-center gap-4" key={i}>
            <p className="break-all text-sm md:text-base lg:text-fontSize md:max-w-[60%] md:flex-1">
              {link.original}
            </p>
            <hr className="md:hidden" />
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-end md:flex-[0_0_50%]">
              <a
                href={link.short}
                target="_blank"
                rel="noreferrer"
                className="text-primary-cyan text-sm md:text-base lg:text-fontSize break-all md:max-w-[50%] md:flex-1"
              >
                {link.short}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(link.short);
                  setIsCopied(i);
                  setTimeout(() => setIsCopied(null), 3000);
                }}
                className={`w-full sm:max-w-[15rem] md:w-[7rem] py-2.5 rounded-lg text-white font-bold transition-colors duration-300
                  ${isCopied === i ? 'bg-neutral-veryDarkVioled hover:bg-opacity-100' : 'bg-primary-cyan hover:bg-opacity-60'}`}
              >
                {isCopied === i ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shortening;