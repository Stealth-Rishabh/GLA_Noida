import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import contact from "@/assets/general/contact.webp";
import { TextAnimate } from "@/components/magicui/text-animate";
import Banner from "@/components/main/Banner";
// import Heading from "@/components/Heading";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <div
        className="relative bg-center bg-cover h-[50vh] sm:h-[70vh]"
        style={{
          backgroundImage: `url("https://www.gla.ac.in/images/about-us.jpg")`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl font-bold text-white bg-black/50 p-2 px-5 sm:p-5 sm:px-10">
            <TextAnimate
              as="span"
              by="word"
              delay={0.6}
              duration={0.5}
              animation="slideDown"
              className="inline-flex flex-wrap"
            >
              About GLA University
            </TextAnimate>
          </h1>
        </div>
      </div> */}
      <Banner
        title="About GLA University"
        image={"https://www.gla.ac.in/images/about-us.jpg"}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Legacy />
      </div>
    </div>
  );
}

const Legacy = () => {
  return (
    <section className="light pt-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container ">
        <div className="grid lg:grid-cols-3 gap-x-6">
          <div>
            <h2 className="lg:text-end text-3xl md:text-5xl text-primary-color leading-tight md:leading-normal tracking-wide sm:font-light lg:pl-6 mb-0">
              The GLA University: The dream of Late Shri Ganeshi Lal Agrawal
            </h2>
          </div>
          <div className="lg:px-4 my-6 lg:my-0">
            <div
              className="min-h-[350px] md:h-full bg-center bg-cover rounded-md"
              style={{
                backgroundImage: `url("https://www.gla.ac.in/images/ganeshi-lal-agrawal.jpg")`,
              }}
            ></div>
          </div>
          <div className="sm:pr-6">
            <p className="text-base tracking-widest opacity-80 mb-0 text-justify ">
              It was the year 1991, when Shri Narayan Das Agrawal decided to
              fulfill the dream of his father, Late Shri Ganeshi Lal Agrawal, of
              establishing an institute for quality education for the people and
              the region & beyond. Our honorable Chancellor, Shri Narayan Das
              Agrawal established Sri Jagannath Prasad Ganeshi Lal Bajaj
              Charitable Trust Samiti in an attempt to make the holy city
              Mathura a recognized destination for knowledge seekers from
              different spheres of life and parts of the country. This paved the
              way for the establishment of a significant milestone at the
              karmabhoomi of the versatile and wise Lord Krishna.
            </p>
            {/* <p className="text-base tracking-widest opacity-80 mt-6 mb-0 text-justify">
              From training practicing managers to corporate leaders, educating
              management career aspirants, readying marketing professionals to
              put India on the global marketing map, IMM Business School has
              come a long way.
            </p>
            <p className="text-base tracking-widest opacity-80 mt-6 mb-0 text-justify">
              We take pride in helping students pursue their educational
              endeavors overseas while maintaining our commitment to excellence
              in management education and creating future business leaders.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
