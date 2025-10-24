import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-black pb-12 font-outfit font-semibold px-32">
      <div className="mt-28">
        <h1 className="text-3xl">LOGO</h1>
        <div className="mt-16 flex gap-12">
          <div className="flex gap-28 w-[70%]  ">
            <div>
              <h2 className="mb-3 text-bold text-xl text-primary font-bold">
                PAGE
              </h2>
              <ul className="space-y-3 text-lg">
                <li>Membership</li> 
                <li>Personal Trainer</li>
                <li>Personal Training</li>
                <li>Fasilitas</li>
                <li>Tentang Kami</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-bold text-xl text-primary font-bold">
                INFO
              </h2>
              <ul className="space-y-3 text-lg">
                <li>Newsroom</li>
                <li>Career</li>
                <li>FAQs</li>
                <li>Directory</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-bold text-xl text-primary font-bold">
                LEGAL
              </h2>
              <ul className="space-y-3 text-lg">
                <li>Privacy Policy</li>
                <li>Terms and Conditions of Use</li>
                <li>Do Not Sell or Share My Personal Information</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
          <div className="w-[30%]">
            <h1 className="text-4xl">STAY UP TO DATE</h1>
            <p>Subscribe now and get the latest news!</p>
            <form action="#" className="w-42 pt-4 space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-gray-700 px-3 py-2 rounded-md"
              />
              <div className="flex gap-4">
                <input type="checkbox" id="check1" />
                <label htmlFor="check1">Are you an existing customer ?</label>
              </div>
              <button className="w-full btn-red rounded-md">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-5 mt-12">
            <img src="/assets/icons/facebook.png" alt="" />
            <img src="/assets/icons/instagram.png" alt="" />
            <img src="/assets/icons/linkedin.png" alt="" />
            <img src="/assets/icons/youtube.png" alt="" />
          </div>

          <p>Copyright©2025 Gym. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
