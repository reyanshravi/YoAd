import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-4xl font-bold">
              "Unlock Your Brand's Potential with Innovative Advertising
              Solutions"
            </h1>
            <p className="mb-5 text-lg">
              Welcome to YoAd, where we transform ideas into impactful campaigns
              that resonate with your audience. As a leading advertising
              company, we specialize in delivering tailor-made solutions to
              elevate your brand and drive unprecedented growth.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
