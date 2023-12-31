// HOME PAGE

import Image from "next/image";
import BG from ".//assets/images/HomeBG.png";
import NU from ".//assets/images/WhiteNU.png"
import Link from "next/link";
import C1 from ".//assets/images/C1.png";
import C2 from ".//assets/images/C2.png";
import C3 from ".//assets/images/C3.png";
import C4 from ".//assets/images/C4.png";
import C5 from ".//assets/images/C5.png";
import I1 from ".//assets/images/Image1.png";
import I2 from "./assets/images/Image2.png";
import W1 from ".//assets/images/W1.png";
import W2 from ".//assets/images/W2.png";
import W3 from ".//assets/images/W3.png";
import W4 from ".//assets/images/W4.png";
import Card from "./h_carousel_card";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen basis-full">
      {/* ############################################################################## */}
      {/* Landing Section */}
      {/* ############################################################################## */}

      <section className="relative h-screen w-full">
        {/* NU|The Garage Logo */}
        <Image
          src={NU}
          alt="NU/Garage"
          style={{ float: "right" }}
        />
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
        {/* Login and Signup Buttons */}
        <div >
          <Link href="" className="absolute text-center bottom-10 left-40 mx-4 w-32 py-2 text-white bg-indigo-800 rounded-md font-bold">Login</Link>
          <Link href="https://airtable.com/app23FYGQuxKwGxDO/shrhhmOtSGfL5Qze7" className="absolute text-center bottom-10 left-0 mx-4 w-32 py-2 text-black bg-white rounded-md font-bold">Sign me up</Link>
        </div>
        {/* Landing Copy */}
        <div className="w-2/5 top-8 left-8 relative">
          <h1 className="text-7xl font-bold text-white">IDEA TO CREATION</h1>
          <h1 className="text-7xl font-bold text-white">
            IN 1 QUARTER. YOU DOWN?
          </h1>
        </div>
      </section>

      {/* ############################################################################## */}
      {/* A separate section above the carousels and carousel*/}
      {/* ############################################################################## */}
      <section className="flex flex-col bg-black text-white border-white border">
        {/* First Text */}
        <div className="grid grid-cols-3 pt-8 pb-16">
          <h1 className="col-span-2 px-8 text-5xl font-bold">It all begins with tinkering.<br />In The Garage.</h1>
          <h1 className="text-base px-8 ">take any idea you're excited about, figure out how to bring it to life, and turn it into something that people care about — alongside other student founders building just like you.</h1>
        </div>
      
        {/* Carousel*/}
        <div className="flex flex-row text-center mb-16 place-content-center">
          <Card 
            image = {C2}
            text= "built software for plant manufacturers"
          />
          <Card 
            image = {C2}
            text= "we made a game to help teach music to students"
          />
          <Card 
            image = {C3}
            text= "we built an easy way for to rent and share household items"
          />
          <Card 
            image = {C4}
            text= "I built a bra for women with limited mobility"
          />
          <Card 
            image = {C4}
            text= "built software for plant manufacturers"
          />
        </div>
      </section>

      {/* ############################################################################## */}
      {/* A separate section below the carousels for explanation of the program */}
      {/* ############################################################################## */}
      <section className="border border-white relative">
        {/* Second Text */}
        <div className="relative flex flex-col bg-black text-white pb-16 pt-4">
          <div className="grid grid-cols-3">
            <h1 className="col-span-2 px-8 py-4 text-5xl font-bold">Your progress is up to you.</h1>
            <h1 className="text-base px-8 py-4">so we won't hold your hand nor force you to make progress on your idea. it's up to you. it will require commitment to yourself to see it through.</h1>
          </div>
        </div>
        {/* First Large Image */}
        {/* Need to fix when image is maxed and window screen too large */}
        <div className="relative h-screen w-full">
          <Image
            src={I1}
            alt="1st Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>

      {/* ############################################################################## */}
      {/* A separate section explaining how the program works */}
      {/* ############################################################################## */}
      <section className="flex flex-col bg-black text-white border-white border pr-8 pl-8">
        {/* Third Text */}
        <div className="grid grid-cols-3 pb-16 pt-8">
          <h1 className="col-span-2 px-8 text-5xl font-bold">How it works.<br />Every week.</h1>
          <h1 className="text-base px-8">it's pretty simple. you pick your own idea, build it, get feedback, and iterate. alongside other students. we'll provide support, but our main goal is to just get you going and make progress.</h1>
        </div>
        {/* How It Works Images */}
        <div className="flex flex-row text-white text-center mb-16 place-content-center">
          <Card 
              image = {W1}
              text= "1 mission"
            />
            <Card 
              image = {W2}
              text= "1 story"
            />
            <Card 
              image = {W3}
              text= "1 small win"
            />
            <Card 
              image = {W4}
              text= "weekly growth"
            />

        </div>
      </section>

      {/* ############################################################################## */}
      {/* A separate section for the last photo and text */}
      {/* ############################################################################## */}
      <section className="relative border border-white">
        {/* Fourth Text */}
        <div className="relative flex flex-col bg-black text-white pb-16 pt-4">
          <div className="grid grid-cols-3">
            <h1 className="col-span-2 px-8 py-4 text-5xl font-bold">You're not alone.<br />Build with others irl.</h1>
            <h1 className="text-base px-8 py-4">meet up with other student founders to share wins, losses, and cheat codes to take your idea to the next level.</h1>
          </div>
        </div>
        {/* Second Image */}
        {/* Need to fix when image is maxed and window screen too big */}
        <div className="relative h-screen w-full">
          <Image
            src={I2}
            alt="2nd Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

      </section>
    </main>
  );
}
