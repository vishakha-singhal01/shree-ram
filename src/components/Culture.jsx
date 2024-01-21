import React from "react";

const cultureData = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLLEWxDLBqgHvPEdsMsiO7W5RE3k4CGmNDg&usqp=CAU",
    title: "Festivals: Vibrant Expressions of Faith",
    content:
      "Festivals are like big parties where people celebrate their beliefs and culture. They bring communities together, making everyone happy and connected.",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzvFnZT4LV84Q6fASykcy7er1Y53cUYgXgg&usqp=CAU",
    title: "Ramayana: Epic Journey of Shree Ram",
    content:
      " Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5ag3J4MgUK79V8V9F1o_IfHPsi9UsbEkyA&usqp=CAU",
    title: "Symbols: Unveiling Deeper Meaning",
    content:
      "Ram Navami: Celebrating Lord Rama's Birth Significance: Celebrates the birth of Lord Rama, the seventh avatar of Vishnu, in Ayodhya.",
  },
];

const Culture = () => (
  <>
    <section className="py-20">
      <h1 className="font-bold text-5xl mb-10 text-orange-500 text-center">
        Know Your Culture
      </h1>
      <div className="flex flex-wrap justify-around gap-6">
        {cultureData.map((culture) => {
          const { imageUrl, title, content } = culture;
          return (
            <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3 border-2 border-black hover:scale-110 transition-[300s]">
              <img
                className="rounded-md w-full h-60 border-2 border-black"
                src={imageUrl}
                alt="Festivals"
              />
              <h1 className="font-bold my-4 text-2xl">{title}</h1>
              <p className="font-semibold text-lg mb-4 ">{content}</p>
              <button className="bg-black text-white mt-2 p-1 rounded-md text-lg py-2 px-6 font-bold">
                Read More...
              </button>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Culture;
