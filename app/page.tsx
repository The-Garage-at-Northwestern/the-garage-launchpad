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
        <div className="w-2/5 top-8 left-8 relative">
          <h1 className="text-7xl font-bold text-white">IDEA TO CREATION</h1>
          <h1 className="text-7xl font-bold text-white">
            {" "}
            IN 1 QUARTER. YOU DOWN?
          </h1>
        </div>
      </section>

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
