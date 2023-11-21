// HOME PAGE

import Image from "next/image";
import BG from ".//assets/images/making.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen basis-full">
      {/* ############################################################################## */}
      {/* Landing Section */}
      {/* ############################################################################## */}
      <section className=" border-green-500 border-4 relative h-screen w-full">
        {/* Background image */}
        <div className="inset-0 z-[-1] absolute w-full h-full">
          <Image
            src={BG}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        {/* Landing Copy */}
        <div className="w-1/2 top-8 left-8 relative">
          <h1 className="text-7xl font-bold text-white">IDEA TO CREATION</h1>
          <h1 className="text-7xl font-bold text-white">
            {" "}
            IN 1 QUARTER. YOU DOWN?
          </h1>
        </div>
      </section>

      {/* SVG square in top-right hand corner */}
      <svg
        className="absolute top-8 right-2 z-[-1]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top right rectangle */}
        <rect
          x="0"
          y="0"
          width="75"
          height="75"
          rx="0"
          stroke="#FFFFFF"
          fill="#FFFFFF"
        />
      </svg>

      {/* SVG square in bottom-right hand corner */}
      <svg
        className="absolute bottom-4 right-12 z-[-1]"
        width="200"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom right rectangle */}
        <rect
          x="0.5"
          y="0.5"
          width="200"
          height="50"
          rx="0"
          stroke="#000000"
          fill="#FFFFFF"
        />
      </svg>

      {/* SVG square in bottom-left hand corner */}
      <svg
        className="absolute bottom-4 left-2 z-[-1]"
        width="200"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom left rectangle */}
        <rect
          x="0.5"
          y="0.5"
          width="200"
          height="50"
          rx="0"
          stroke="#FFFFFF"
          fill="#000000"
        />
      </svg>

      {/* SVG square in bottom-left hand corner */}
      <svg
        className="absolute bottom-4 left-40 z-[-1]"
        width="200"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom left rectangle */}
        <rect
          x="0.5"
          y="0.5"
          width="200"
          height="50"
          rx="0"
          stroke="#000000"
          fill="#FFFFFF"
        />
      </svg>

      {/* ############################################################################## */}
      {/* A separate section below the carousels for explanation of the program */}
      {/* ############################################################################## */}
      <section className="flex flex-col border-red-500 border-2 mt-10 ">
        <h1 className="text-7xl font-bold text-white">Program explanation</h1>
      </section>

      {/* ############################################################################## */}
      {/* A separate section below the main bg to display a carousel */}
      {/* ############################################################################## */}
      <section className="flex flex-col border-blue-500 border-2 mt-10 mb-10">
        <h1 className="text-7xl font-bold text-white">Carousel of projects</h1>
      </section>
    </main>
  );
}
