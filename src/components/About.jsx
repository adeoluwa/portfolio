import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <br />
          <p className="text-xl text-justify mt-20">
            "Hi there, I’m a front-end developer based in Nigeria, I enjoy
            building beautiful and functional user interface. When I’m not
            coding, I spend my time watching anime, especially Hashirama or
            reading a manga, manhwa".
          </p>
          <br />
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            reiciendis natus cupiditate accusantium ea, quam quos deleniti porro
            ex quaerat quidem quae aut tempora quis. A fugiat quos veniam
            quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
