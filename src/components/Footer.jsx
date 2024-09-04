import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-[#081c21] w-full h-[700px] p-10">
      <div className="grid grid-cols-1 gap-40">
        <div className="flex justify-start items-center">
          <img src="/src/assets/logo.png" alt="logo" className="w-[400px]" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-nohemi_m text-2xl">About</h1>
              <p className="font-nohemi_l text-justify">
                Rajalakshmi Engineering College is a Private engineering college
                located at Thandalam, Sriperumbudur near Chennai, Tamil Nadu,
                India.The college was established in 1997 by the Rajalakshmi
                Educational Trust, Rajalakshmi Institutions.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col gap-4">
                <h1 className="font-nohemi_m text-2xl">Links</h1>
                <ul className=" font-nohemi_l">
                  <li>Project</li>
                  <li>Human Practices</li>
                  <li>Safety</li>
                  <li>Team</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-nohemi_m text-2xl">Contact</h1>
                <ul className=" font-nohemi_l">
                  <li>Email</li>
                  <li>Phone</li>

                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-nohemi_m text-2xl">Social Media</h1>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
