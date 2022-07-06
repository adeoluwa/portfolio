import React from 'react';

import netclone from '../assets/portfolio/netclone.png';

import otkClothing from '../assets/portfolio/otk3.png';

import firegram from '../assets/portfolio/firegram-shot.png';

import todo from '../assets/portfolio/todo-list.png';

import weatherApp from '../assets/portfolio/afefe3.png';

import werido from '../assets/portfolio/werido.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netclone,
      demo: 'https://netclone-17863.firebaseapp.com/',
      repo: 'https://github.com/adeoluwa/Netclone',
    },
    {
      id: 2,
      src: otkClothing,
      demo: 'https://otk-clothing.netlify.app/',
      repo: 'https://github.com/adeoluwa/otk-clothing',
    },
    {
      id: 3,
      src: firegram,
      demo: 'https://firebase-gram.netlify.app/',
      repo: 'https://github.com/adeoluwa/Firegram',
    },
    {
      id: 4,
      src: todo,
      demo: 'https://todo-l-app.netlify.app/',
      repo: 'https://github.com/adeoluwa/Todo-App',
    },
    {
      id: 5,
      src: weatherApp,
      demo: 'https://afefe.netlify.app/',
      repo: 'https://github.com/adeoluwa/weather-app',
    },
    {
      id: 6,
      src: werido,
      demo: 'https://weirdo-fc.netlify.app/',
      repo: 'https://github.com/adeoluwa/weirdos-NFT/tree/master/src',
    },
  ];

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 font-semibold justify-center ml-10">
            Checkout My Recent Work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={repo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
