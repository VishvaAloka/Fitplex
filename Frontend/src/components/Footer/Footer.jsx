import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#2b2a2a] w-full text-white pt-20 px-20 pb-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="grid-cols-12 md:col-span-6 lg:col-span-3">
          <p className="text-[20px] tracking-widest font-semibold mb-5">
            Solution
          </p>
          <div className="flex flex-col gap-1">
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>
        </div>
        <div className="grid-cols-12 md:col-span-6 lg:col-span-3">
          <p className="text-[20px] tracking-widest font-semibold mb-5">
            Support
          </p>
          <div className="flex flex-col gap-1">
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Solution</p>
          </div>
        </div>
        <div className="grid-cols-12 md:col-span-6 lg:col-span-3">
          <p className="text-[20px] tracking-widest font-semibold mb-5">
            Company
          </p>
          <div className="flex flex-col gap-1">
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Partners</p>
          </div>
        </div>
        <div className="grid-cols-12 md:col-span-6 lg:col-span-3">
          <p className="text-[20px] tracking-widest font-semibold mb-5">
            Legal
          </p>
          <div className="flex flex-col gap-1">
            <p>Claim</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Press</p>
          </div>
        </div>
      </div>
      <hr className="my-10"/>
      <div className="flex flex-row justify-between items-center">
        <div>
            © 2020 The FitPlex. Inc. All right reserved
        </div>

        <div className="flex flex-row gap-7">
            <box-icon name='facebook-circle' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='youtube' type='logo' color='#ffffff' ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
