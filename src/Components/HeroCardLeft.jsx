import React from "react";

function HeroCardLeft() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h5 className="text-4xl font-bold">
              Roll Into Success with Tricycle Advertising Solutions!
            </h5>
            <p className="pt-4 text-xl font-semibold">
              Your Brand, Your Message, Our Tricycles - Unbeatable Exposure on
              Every Street!
            </p>
            <p className="py-6">
              Introducing a unique and eye-catching way to promote your brand –
              Tricycle Advertising with <span className="font-bold">YoAd</span>.
              Our tricycles are not just a mode of transportation; they are
              mobile billboards that take your message directly to the heart of
              the community. Get ready to stand out, be seen, and leave a
              lasting impression!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCardLeft;
