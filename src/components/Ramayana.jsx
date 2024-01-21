import React from "react";
import RamanyaBackground from "../../public/images/RamayanaImage.webp";

const Ramayana = () => (
  <>
    <section className="py-20 relative">
      <img
        src={RamanyaBackground}
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />
      <div className="w-full h-full absolute top-0 left-0 object-cover bg-black opacity-50 z-[-1]"></div>
      <h1 className="font-bold text-5xl mb-6 text-orange-500 text-center">
        Ramayana Rewind
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img
            className="rounded-md w-full h-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYjSPiVT77IVwNE7S4eHQLJwqM3OZ2Nthk0BYY6P0qET5IxbfpOa9ODusz7AXlIjWa1g&usqp=CAU"
            alt="Festivals"
          />
          <h1 className="font-bold">Ramanand Sagar's Ramayana</h1>
          <p>
            It is most popular show of history. It was directed by Ramanand
            Sagar. The show is based on Valmiki's 'Ramayan' & Tulsidas'
            'Ramcharit manas'.
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PLFPJRCFRDARSZofcQcV6m7Pu2EAL8_1dv&si=ncnrrCT9IAPw5ovS"
            target="_blank"
          >
            <button className="bg-black text-white mt-2 p-2 rounded-sm text-sm">
              Watch now
            </button>
          </a>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img
            className="rounded-md w-full h-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocuMMIJqt4r9EtofjrVPWbrY_WAFnQ9AbOg&usqp=CAU"
            alt="Ramayana"
          />
          <h1 className="font-bold">Ramayana -The Epic full movie</h1>
          <p>
            This picture bombed at the box office when it released in theatres
            back in 2010. Thumping background music, perfect animation.
          </p>
          <a
            href="https://youtu.be/Ven2W085g1k?si=_uJbui2HVHVpkA2l"
            target="_blank"
          >
            <button className="bg-black text-white mt-2 p-2 rounded-sm text-sm">
              Watch now
            </button>
          </a>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
          <img
            className="rounded-md w-full h-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXupP4oiHwJQY9xgIdxnbaDDLTDIPvB11EHQ&usqp=CAU"
            alt="Symbols"
          />
          <h1 className="font-bold">Ramayana: The Legend of Prince Rama</h1>
          <p>
            This is a 1992 anime film co-produced by Japan and India; produced
            and directed by Yugo Sako. Beautiful animation makes it amazing.
          </p>
          <a href="https://www.youtube.com/watch?v=gKcOjnDJfzk" target="_blank">
            <button className="bg-black text-white mt-2 p-2 rounded-sm text-sm">
              Watch now
            </button>
          </a>
        </div>
      </div>
    </section>
    {/* <section className='mb-12'>
     <h1 className="font-bold  text-5xl m-4 p-6 text-orange-500 text-center">Epic Ramayana</h1>
     <div className="flex flex-wrap justify-around">
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
            <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0H_Sx_Xgr6pEcoXqC_zAnOUkygaFxZ_7EaQ&usqp=CAU"/>
            <h1 className="font-bold ">Ramanand Sagar's Ramayana</h1>
            <p className='text-start'></p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
        <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1xIVxlzP8yWJTKy-Mtpzlry_0Qm27gv9ZA&usqp=CAU"/>
            <h1 className="font-bold ">Ramayan -The Epic full movie</h1>
            <p></p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        <div className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3">
        <img className="rounded-md w-72 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrg1jmoeIQS2zcXKtUlZP9GUacEOjI6HCUQ&usqp=CAU"/>
            <h1 className="font-bold ">Ramayana: The Legend of Prince Rama</h1>
            <p></p>
                <button className="bg-black text-white mt-2 p-1 rounded-md text-sm">Watch</button>
        </div>
        </div>
     
     </section> */}
  </>
);

export default Ramayana;
