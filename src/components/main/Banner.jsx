import React from "react";
import { TextAnimate } from "../magicui/text-animate";

const Banner = ({ title, image }) => {
  return (
    <div
      className="relative bg-center bg-cover h-[50vh] sm:h-[70vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        {/* <Heading
            title="Contact Us"
            titleClassName="lg:font-extrabold text-center text-white tracking-wide"
            className="block w-full  mx-auto text-left sm:col-span-4 sm:pb-0 lg:pb-0 pb-0 pt-8 sm:pt-0"
          /> */}
        <h1 className="text-2xl sm:text-5xl font-bold text-white bg-black/50 p-2 px-5 sm:p-5 sm:px-10">
          <TextAnimate
            as="span"
            by="word"
            delay={0.6}
            duration={0.5}
            animation="slideDown"
            className="inline-flex flex-wrap"
          >
            {title}
          </TextAnimate>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
