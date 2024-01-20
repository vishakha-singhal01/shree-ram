import React from 'react';

const Culture = () => (
  <>
    <section className='mb-12'>
      <h1 className="font-bold text-5xl m-4 p-6 text-orange-500 text-center">Know your culture</h1>
      <div className="flex flex-wrap justify-around">
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLLEWxDLBqgHvPEdsMsiO7W5RE3k4CGmNDg&usqp=CAU" alt="Festivals" />
          <h1 className="font-bold">Festivals: Vibrant Expressions of Faith</h1>
          <p>Festivals are like big parties where people celebrate their beliefs and culture. They bring communities together, making everyone happy and connected. </p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzvFnZT4LV84Q6fASykcy7er1Y53cUYgXgg&usqp=CAU" alt="Ramayana" />
          <h1 className="font-bold">Ramayana: Epic Journey of Shree Ram</h1>
          <p>1. Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.</p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img className="rounded-md w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5ag3J4MgUK79V8V9F1o_IfHPsi9UsbEkyA&usqp=CAU" alt="Symbols" />
          <h1 className="font-bold">Symbols: Unveiling Deeper Meaning</h1>
          <p>1. Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.</p>
          <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Read More...</button>
        </div>
      </div>
    </section>
  </>
);

export default Culture;
