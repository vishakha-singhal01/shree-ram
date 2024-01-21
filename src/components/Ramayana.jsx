import React from "react";
import RamanyaBackground from "../../public/images/RamayanaImage.webp";

const ramayanaData = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYjSPiVT77IVwNE7S4eHQLJwqM3OZ2Nthk0BYY6P0qET5IxbfpOa9ODusz7AXlIjWa1g&usqp=CAU",
    title: "Ramanand Sagar's Ramayana",
    content:
      "It is the most popular show in history. It was directed by Ramanand Sagar. The show is based on Valmiki's 'Ramayan' & Tulsidas' 'Ramcharit manas'.",
    link: "https://www.youtube.com/playlist?list=PLFPJRCFRDARSZofcQcV6m7Pu2EAL8_1dv&si=ncnrrCT9IAPw5ovS",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocuMMIJqt4r9EtofjrVPWbrY_WAFnQ9AbOg&usqp=CAU",
    title: "Ramayana - The Epic full movie",
    content:
      "This picture bombed at the box office when it released in theaters back in 2010. Thumping background music, perfect animation.",
    link: "https://youtu.be/Ven2W085g1k?si=_uJbui2HVHVpkA2l",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXupP4oiHwJQY9xgIdxnbaDDLTDIPvB11EHQ&usqp=CAU",
    title: "Ramayana: The Legend of Prince Rama",
    content:
      "This is a 1992 anime film co-produced by Japan and India; produced and directed by Yugo Sako. Beautiful animation makes it amazing.",
    link: "https://www.youtube.com/watch?v=gKcOjnDJfzk",
  },
];

const Ramayana = () => (
  <>
    <section className="py-20 relative">
      <img
        src={RamanyaBackground}
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />
      <div className="w-full h-full absolute top-0 left-0 object-cover bg-black opacity-70 z-[-1]"></div>
      <h1 className="font-bold text-5xl mb-6 text-orange-500 text-center">
        Ramayana Rewind
      </h1>
      <div className="flex flex-wrap justify-around">
        {ramayanaData.map((ramayana) => {
          return (
            <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
              <img
                className="rounded-md w-full h-40"
                src={ramayana.imageUrl}
                alt={ramayana.title}
              />
              <h1 className="font-bold">{ramayana.title}</h1>
              <p>{ramayana.content}</p>
              <a
                href={ramayana.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Watch Now
              </a>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Ramayana;
