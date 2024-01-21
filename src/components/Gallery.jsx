import OmImage from "../../public/images/om.png";

const GalleryDataCollection = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CKd-i5KW-Okgu0Pr5D0poy5QW8SQAwBDN6FTmh4n4hngpL94LRnmWMvvltcUo1QWjUg&usqp=CAU",
    title: "राम लला दर्शन",
  },
  {
    imageUrl:
      "https://images.livemint.com/img/2020/08/05/1600x900/PTI05-08-2020_000070B_1596616220560_1596616237975.jpg",
    title: "दर्शन करते हुए मोदी जी",
  },
  {
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/lod-ram-pti.jpeg?size=1200:675",
    title: "भूमि पूजन से पहले पूजा",
  },
  {
    imageUrl:
      "https://w0.peakpx.com/wallpaper/266/490/HD-wallpaper-narendra-modiji-ram-mandir-ramji-yogiji.jpg",
    title: "योगी जी द्वारा स्मृति चिन्ह",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/ayodhya-during-deepotsava-diwali-event-600nw-2338789429.jpg",
    title: "दीपदान का नजारा",
  },
  {
    imageUrl:
      "https://i0.wp.com/tech.hindilish.com/wp-content/uploads/2023/12/Ayodhya-Ram-mandir-construction-Images-HD.jpeg",
    title: "राम भक्त",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDhGFjadjvmN7pgSYztDwXZgEcNCNn4V82fe7_QQr-0n5CNlikcsxnAmFwN10A8oW8R4&usqp=CAU",
    title: "जगमगता अयोध्या",
  },
  {
    imageUrl:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/11/661142481f21a4fbb60c95bfaa021bcd_original.jpg",
    title: "लाल पत्थर निर्मित अयोध्या",
  },
];

const Gallery = () => (
  <>
    <section className="bg-orange-500 py-20 px-16 relative">
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
        <img src={OmImage} className="h-[90%] z-[-1] opacity-90" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white opacity-[0.50]"></div>
      <h1 className="font-bold text-5xl mb-10 text-white text-center z-[5]">
        Captured Moments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16">
        {GalleryDataCollection.map((gallery) => {
          const { imageUrl, title } = gallery;
          return (
            <div className="z-[3] w-80 h-64 shadow-lg bg-white m-3 p-3 hover:scale-125 transition duration-500 mx-auto">
              <img
                className="rounded h-48 w-80 object-cover object-center"
                src={imageUrl}
              />
              <h1 className="mt-3 font-bold text-center text-2xl">{title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Gallery;
