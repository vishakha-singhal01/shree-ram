import React from "react";

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
    <section className="mb-12">
      <h1 className="font-bold  text-5xl m-4 p-6 text-orange-500 text-center">
        Places to Visit
      </h1>
      <div className="flex justify-around flex-wrap">
        {templesData.map((temple) => {
          const { imageSrc, title } = temple;
          return (
            <div className="w-72 h-48 shadow-lg bg-white m-3 p-3 hover:scale-110 transition duration-500">
              <img className="rounded h-36 w-72" src={imageSrc} />
              <h1 className="font-bold text-center">{title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Places;
