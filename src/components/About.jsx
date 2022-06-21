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
            About me
          </p>

          <br />
          <p className="text-xl mt-20">
            "Hi there, I’m a front-end developer based in Nigeria, I enjoy
            building beautiful and functional user interface. When I’m not
            coding, I spend my time reading, watching anime, especially Hashirama or
            reading a manga and manhwa".
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque error aspernatur earum quam corporis perspiciatis aut ab animi accusantium deserunt, eligendi facilis blanditiis nesciunt, ipsum excepturi assumenda minus reprehenderit possimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
