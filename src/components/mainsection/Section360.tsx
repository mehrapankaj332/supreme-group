"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import steps from "./Section360.constant";

const Section360 = () => {
  const [activeStep, setActiveStep] = useState("passenger");
  const [activeVideo, setActiveVideo] = useState("");
  const current = steps.find((s) => s.key === activeStep);
  useEffect(() => {
    if (current?.iconList?.length) {
      setActiveVideo(current.iconList[0].video);
    }
  }, [activeStep]);
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-5xl font-light text-center leading-snug mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Evolving the drive with{" "}
        <strong className="font-semibold">360-degree</strong>
        <br />
        comprehensive solutions
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex flex-col gap-10 md:w-1/2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          <div 
            className="absolute left-0 w-0.5 bg-white transition-all duration-500 ease-in-out"
            style={{
              top: `${steps.findIndex(s => s.key === activeStep) * (100 / steps.length)}%`,
              height: `${100 / steps.length}%`
            }}
          ></div>
          {steps.map((step) => (
            <div
              key={step.key}
              className={`cursor-pointer pl-4 relative z-10 ${
                activeStep === step.key ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveStep(step.key)}
            >
              <h3
                className={`text-xl md:text-2xl font-semibold ${
                  activeStep === step.key ? "text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-2 text-sm md:text-base ${
                  activeStep === step.key ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          {activeVideo && (
            <video
              key={activeVideo}
              className="w-full max-w-md aspect-video md:max-w-lg rounded-lg"
              autoPlay
              loop
              preload="metadata"
              muted
              playsInline
              src={activeVideo}
            />
          )}
          <div className="flex justify-center gap-8 mt-16">
            {current?.iconList?.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveVideo(item.video)}
              >
                <Image
                  width={70}
                  height={70}
                  src={item.icon}
                  alt={item.label}
                  className={`mb-2 ${
                    item.video === activeVideo
                      ? "whitescale opacity-200"
                      : "grayscale opacity-60"
                  }`}
                />
                <p
                  className={`text-sm md:text-base ${
                    item.video === activeVideo ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section360;