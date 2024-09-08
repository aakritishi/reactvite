import React from "react";

const SliderCard = () => {
  return (
    <>
      <div className="">
      <div class="row single-slide align-items-center d-flex "style={{ padding:'200px' }}>
        <div class="col-lg-5 col-md-6">
          <div class="banner-content">
            <h1>
              Nike New <br />
              Collection!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div class="add-bag d-flex align-items-center">
              <a class="add-btn" href="">
                <span class="lnr lnr-cross"></span>
              </a>
              <span class="add-text text-uppercase">Add to Bag</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="banner-img">
            <img
              class="img-fluid"
              src="/assets/img/banner/banner-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SliderCard;
