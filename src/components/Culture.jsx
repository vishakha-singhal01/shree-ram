import React from 'react';

const Culture = () => (
  <>
    <section>
      <h1 className="font-bold text-5xl m-2 p-2 text-orange-500 text-center">Know your culture</h1>
      <div className="flex flex-wrap justify-around">
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full" src="https://im.rediff.com/news/2020/aug/05modi-ram1.jpg" alt="Festivals" />
          <h1 className="font-bold">Festivals: Vibrant Expressions of Faith</h1>
          <p>1. Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.</p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full" src="https://im.rediff.com/news/2020/aug/05modi-ram1.jpg" alt="Ramayana" />
          <h1 className="font-bold">Ramayana: Epic Journey, Timeless Wisdom</h1>
          <p>1. Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.</p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full" src="https://im.rediff.com/news/2020/aug/05modi-ram1.jpg" alt="Symbols" />
          <h1 className="font-bold">Symbols: Unveiling Deeper Meaning</h1>
          <p>1. Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.</p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
      </div>
    </section>
  </>
);

export default Culture;
