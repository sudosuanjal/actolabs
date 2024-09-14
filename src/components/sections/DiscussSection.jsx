import React from "react";

const DiscussSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c69c57d-690c-4d76-9678-501d05f2d045");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-us" className="bg-black min-h-screen flex flex-col items-center justify-center ">
      {/* Heading */}
      <h3 className="text-white text-4xl mb-5 font-semibold text-center">
        Let's Discuss
      </h3>

      <div className="w-full bg-black px-4 md:px-8 lg:px-12">
        {/* Combined Box */}
        <div className="bg-black h-11/12 max-w-7xl mx-auto rounded-3xl shadow-lg border-0 md:border border-white-800 ">
        {/* <div className="bg-blue-600 h-11/12 px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 rounded-3xl shadow-lg border-0 md:border border-white-800"> */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 p-6 px-20 py-16 flex flex-col justify-between ">
              <form onSubmit={onSubmit}>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full md:w-11/12 p-4 mb-4 bg-transparent border border-white  text-white rounded-md  "
                />

                <label htmlFor="email" className="block text-white mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full md:w-11/12 p-4 mb-4 bg-black text-white rounded-md border border-white  "
                />

                <label htmlFor="message" className="block text-white mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                  className="w-full md:w-11/12 p-5 mb-4 bg-black text-white rounded-md resize-none border border-white"
                ></textarea>
                <button
                  type="submit"
                  aria-label="Send your message"
                  className="w-1/2 mx-auto md:w-11/12 md:mx-0 p-5 mb-4 rounded-lg bg-[rgba(71,28,195,1)] text-white hover:bg-[rgba(71,28,195,0.8)] block"
                >
                  Send Message
                </button>
              </form>
              <span className="text-white ">{result}</span>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2 flex px-32 py-24 text-white hidden md:flex">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-normal font-space-grotesk">
                Connect with
                <br /> Us: Let's Discuss
                <br /> Your Digital
                <br /> Needs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;
