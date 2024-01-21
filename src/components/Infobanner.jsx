import Aarti from "../../public/images/Aarti.jpg";
const Infobanner = () => (
  <>
    <section className="w-full h-[90vh] flex justify-center items-center">
      <img src={Aarti} className="absolute z-[-1] w-full object-cover" />
      <div className="text-center bg-black bg-opacity-60">
        <div className="p-16">
          <h3 className="font-semibold text-3xl my-2 text-white ">
            Ayodhya Temple
          </h3>
          <h1 className="font-bold text-9xl my-4 text-white tracking-wide">
            Aarti Timings
          </h1>
          <div className="w-3/4 text-white mx-auto flex flex-col gap-4 mt-6">
            <div className="w-full flex justify-between ">
              <p className="font-semibold text-3xl">Jagaran/Shringar Aarti</p>
              <p className="font-bold text-3xl">6:30 AM</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="font-semibold text-3xl">Afternoon Aarti</p>
              <p className="font-bold text-3xl">12:00 PM</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="font-semibold text-3xl">Sandhya Aarti</p>
              <p className="font-bold text-3xl">7:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Infobanner;
