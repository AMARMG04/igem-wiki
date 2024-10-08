import React from "react";
import CardSection from "../components/CardSection";
import NewBanner from "../components/NewBanner";
import goal6Banner from "../assets/6_SDG_MakeEveryDayCount_Gifs_GDU.gif"; // New banner for Goal 6
import goal6 from "../assets/E_PRINT_06.jpg";
import goal14Banner from "../assets/14_SDG_MakeEveryDayCount_Gifs_GDU.gif"; // New banner for Goal 14
import goal14 from "../assets/E_PRINT_14.jpg";
import goal15Banner from "../assets/15_SDG_MakeEveryDayCount_Gifs_GDU.gif"; // New banner for Goal 15
import goal15 from "../assets/E_PRINT_15.jpg";
import Navbar from "../components/Navbar";

const Sustainability = () => {
  return (
    <div className="bg-customCream">
      <Navbar></Navbar>
      <NewBanner title="Sustainability" color="customCream" />
      <div className="bg-white">
        <CardSection />

        <div className="text-center my-12">
          <h1 className="text-5xl font-nohemi_b text-gray-800">Our SDG Goals</h1>
          <p className="text-lg text-gray-600 mt-4 font-inter">
            Our commitment to a sustainable future
          </p>
        </div>

        {/* Goal 6 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center p-6 bg-white shadow-lg rounded-lg mx-4">
            <img
              src={goal6}
              alt="Goal 6 - Clean Water and Sanitation"
              className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0"
            />
            <div className="m-10 text-left">
              <h2 className="text-3xl font-inter font-semibold text-blue-600 mb-4">
                Goal 6: Clean Water and Sanitation
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-inter text-justify">
                Ensuring availability and sustainable management of water and
                sanitation for all is critical to the health of people and the
                planet. Our focus on Goal 6 aims to address water scarcity,
                improve water quality, and promote the sustainable use of water
                resources.
              </p>
              <p className="text-lg text-gray-800 font-inter font-semibold text-justify">
                <span className="underline">Why We Chose This Goal:</span><br />
                Access to clean water is a fundamental human right. Improving
                water management directly impacts global health, agriculture,
                and ecosystem preservation.
              </p>
            </div>
            <img
              src={goal6Banner}
              alt="Goal 6 Banner"
              className="w-full md:w-1/3 rounded-lg shadow-md mt-8 md:mt-0"
            />
          </div>
        </div>

        {/* Goal 14 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center p-6 bg-white shadow-lg rounded-lg mx-4">
            <img
              src={goal14}
              alt="Goal 14 - Life Below Water"
              className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0"
            />
            <div className="m-10 text-left">
              <h2 className="text-3xl font-inter font-semibold text-blue-600 mb-4">
                Goal 14: Life Below Water
              </h2>
              <p className="text-lg text-gray-700 font-inter mb-4 text-justify">
                Conserve and sustainably use the oceans, seas, and marine
                resources for sustainable development. Goal 14 focuses on
                protecting marine ecosystems, reducing pollution, and addressing
                the impact of climate change on our oceans.
              </p>
              <p className="text-lg text-gray-800 font-inter font-semibold text-justify">
                <span className="underline">Why We Chose This Goal:</span><br />
                Oceans are vital to Earth's ecosystems and human survival.
                Prioritizing this goal helps preserve marine biodiversity,
                essential for maintaining our planet’s balance.
              </p>
            </div>
            <img
              src={goal14Banner}
              alt="Goal 14 Banner"
              className="w-full md:w-1/3 rounded-lg shadow-md mt-8 md:mt-0"
            />
          </div>
        </div>

        {/* Goal 15 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center p-6 bg-white shadow-lg rounded-lg mx-4">
            <img
              src={goal15}
              alt="Goal 15 - Life on Land"
              className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0"
            />
            <div className="m-10 text-left">
              <h2 className="text-3xl font-inter font-semibold text-blue-600 mb-4">
                Goal 15: Life on Land
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-inter text-justify">
                Protect, restore, and promote sustainable use of terrestrial
                ecosystems, manage forests sustainably, combat desertification,
                halt and reverse land degradation, and halt biodiversity loss.
              </p>
              <p className="text-lg text-gray-800 font-inter text-justify font-semibold">
                <span className="underline">Why We Chose This Goal:</span><br />
                Forests and terrestrial ecosystems are the lungs of our planet.
                Focusing on Goal 15 ensures that our land is protected and
                restored for future generations.
              </p>
            </div>
            <img
              src={goal15Banner}
              alt="Goal 15 Banner"
              className="w-full md:w-1/3 rounded-lg shadow-md mt-8 md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
