import React from "react";

function HeroCardRight() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h5 className="text-4xl font-bold">
              Unmissable Moments, Unforgettable Brand!
            </h5>
            <p className="pt-4 text-xl font-semibold">
              Skyrocket Your Visibility with YoAd Hoarding Ads
            </p>
            <p className="py-6">
              Elevate your brand to new heights with bold and captivating
              hoarding advertisements from{" "}
              <span className="font-bold">YoAd</span>. Our towering displays are
              strategically placed to ensure maximum visibility, making your
              brand an unmissable part of the urban landscape.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCardRight;
