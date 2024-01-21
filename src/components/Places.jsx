import React from "react";
import PlacesImg from "../../public/images/places.jpeg";
const templesData = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aajbECEsUHBv6-OySS-FWSq971BGlqvOxw&usqp=CAU",
    title: "श्री हनुमान गढ़ी अयोध्या जी",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyWKyhl1ZBk8tKcRRN06a4llasR2OwvosaA&usqp=CAU",
    title: "श्री नागेश्वर नाथ मंदिर",
  },
  {
    imageSrc: "https://new-img.patrika.com/upload/2018/01/05/ayodhya.jpg",
    title: "श्री चन्द्रहरि मंदिर",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLIml8mUNjWHmk1pREcVASXfgGqVtwuAqhw&usqp=CAU",
    title: "श्री कनक भवन",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6KPKaFFb6A2a1qJ3pqxKAdXXt4r_HlPyWw&usqp=CAU",
    title: "श्री देवकाली मंदिर",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYPUxByZ79KlcznGGOEpw9daSviBN2pw-yw&usqp=CAU",
    title: "श्री मतगजेंद्र",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLqfg6Zr22SWawmcnVQBI5G_vPXuTMT-kvQ&usqp=CAU",
    title: "श्री सूर्य कुंड मंदिर",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPtGQn8MTexA3nOMWlMYjCx30MO12FnVCgw&usqp=CAU",
    title: "श्री सीताकूप तीर्थ",
  },
];

const Places = () => (
  <>
    <section className="py-20 relative">
      <img
        src={PlacesImg}
        className="absolute top-0 left-0 h-full w-full opacity-40 z-[-1]"
      />
      <h1 className="font-bold  text-5xl m-4 p-6 text-orange-500 text-center">
        Places to Visit
      </h1>
      <div className="grid grid-cols-4 gap-x-6 gap-y-16 md:px-16">
        {templesData.map((temple) => {
          const { imageSrc, title } = temple;
          return (
            <div className="relative group">
              <div className="border-2 border-orange-500 border-opacity-20 shadow-xl bg-white group-hover:scale-110 transition duration-500">
                <img className="h-48 w-full object-cover" src={imageSrc} />
                <h1 className="font-bold text-2xl text-center py-4">{title}</h1>
              </div>
              <div className=" group-hover:opacity-100 group-hover:z-[2] transition-all duration-[500ms] group-hover:scale-110 opacity-0 absolute top-0 left-0 h-full w-full bg-orange-500 bg-opacity-95 border-2 border-black z-[-1] p-6 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi atque rem similique adipisci nihil eveniet voluptatum
                autem exercitationem perferendis. Culpa, molestiae tenetur? Unde
                eligendi veniam doloribus iste enim explicabo debitis.
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Places;
