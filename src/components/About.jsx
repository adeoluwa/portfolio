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
          <p className="text-xl text-left leading-normal hover:text-center mt-20">
            "Hi there, I’m a front-end developer based in Nigeria, I enjoy
            building beautiful and functional user interface, web apps and
            websites. I am an enthusiastic, self-motivated and hard working
            person. I am a team worker and adaptable to challenging situations.
            I am able to work well both in a team environment as well as using
            own initiative.When I’m not coding, I enjoy watching anime, watching
            Hashirama's epic battle video clips and reading comics and manga".
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
