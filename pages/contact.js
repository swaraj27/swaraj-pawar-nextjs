import React from "react";
import Meta from "../components/Meta";

export const contact = () => {
  return (
    <div className="h-screen md:h-full">
      <Meta title="Contact-Swaraj Pawar" />
      <p className="text-primaryGray  text-center md:text-4xl text-2xl underline  font-bold py-10">
        Contact
      </p>

      <div className="md:pb-10 md:pt-10 rounded border    p-4 md:my-20 md:mx-64 mx-4 my-20">
        <p className="text-darkGray text-center md:text-xl text-sm">
          I am available for hire. Looking for better opportunity.
        </p>
        <p className="text-primaryGreen mt-1 md:mt-2 text-center text-sm md:text-xl">
          Let's Get In Touch!
        </p>

        <p className="text-primaryGray mt-10  md:mt-12 text-center md:text-lg text-sm">
          Swaraj Pawar
        </p>
        <p className="text-primaryGreen  text-center md:text-lg text-sm">
          swarajpawar27@gmail.com
        </p>
      </div>
    </div>
  );
};
export default contact;
