import React from "react";
import Image from "next/image";
import NULogo from "app/assets/images/NULogo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <section className="flex flex-row flex-wrap py-12 place-content-center">
        <div className="flex justify-center mx-12 mb-12">
        <Image
        alt="Northwestern Logo"
        src={NULogo}
        width={250}
        />
      </div>
      <div className="flex flex-col mx-12 mb-12">
        <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
        <h2 className="text-lg">(847)467-7155</h2>
        <h2 className="text-lg">thegarage@northwestern.edu</h2>
        <h2 className="text-lg">Our Press Kit</h2>
      </div>
      <div className="flex flex-col mx-12 mb-12">
        <h1 className="font-bold text-2xl mb-4">Our Space</h1>
        <h2 className="text-lg">2311 Campus Drive Suite 2300</h2>
        <h2 className="text-lg">Evanston, IL 60208</h2>
      </div>
      </section>
      <div className="bottom-10 left-40 pb-4 pl-4 text-white">
        <h1>@ 2023 The Garage at Northwestern</h1>
      </div>
    </footer>
  );
};

export default Footer;
