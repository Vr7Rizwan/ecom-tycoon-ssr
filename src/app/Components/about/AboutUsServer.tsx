import React from "react";
import AboutUsClient from "./clientSideComponents/AboutUsClient";
import key from "@/features/email/emailConfig";

export default function AboutUsServer() {
  const header = {
    title: (
      <>
        Who <span className="text-primaryColor">We Are</span>
      </>
    ),
    subtitle:
      "We are a passionate team of designers, developers, and strategists dedicated to building cutting-edge digital solutions. With a blend of creativity, technology, and strategy, we help businesses elevate their online presence and achieve real-world results.",
  };

  const mission =
    "To empower brands by delivering exceptional digital products that drive innovation, customer engagement, and sustainable growth. We aim to bridge the gap between vision and technology.";

  const vision =
    "To be a trusted global partner in the digital transformation journey of businesses, redefining the way people interact with technology through elegant design and innovative solutions.";

  const coreValues = [
    {
      title: "Innovation",
      desc: "We embrace cutting-edge technology to craft smarter, scalable solutions.",
    },
    {
      title: "Integrity",
      desc: "Honesty and transparency drive everything we do.",
    },
    {
      title: "Collaboration",
      desc: "Teamwork is our secret sauce — both internally and with clients.",
    },
    {
      title: "Excellence",
      desc: "We never settle for ‘good enough’. Quality is our benchmark.",
    },
  ];

  const cta = {
    heading: (
      <>
        Let’s <span className="text-primaryColor">Build</span> Something Great Together
      </>
    ),
    paragraph:
      "Whether you're a startup or an enterprise, we’re excited to bring your ideas to life. Let’s connect and discuss how we can collaborate to create meaningful impact.",
    buttonText: "Contact Us",
  };

  return (
    <AboutUsClient
      header={header}
      mission={mission}
      vision={vision}
      coreValues={coreValues}
      cta={cta}
      emailKey={key}
    />
  );
}
