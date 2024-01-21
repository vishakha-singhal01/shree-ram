import React from "react";

const Map = () => {
  return (
    <div className="py-20">
      <h1 className="font-bold  text-5xl mb-10 text-orange-500 text-center">
        How to reach
      </h1>
      <div className="relative mb-8">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15062.535391801499!2d72.8285481!3d19.2982828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b125e4567893%3A0x5c56af5bb630379d!2sRam%20mandir!5e0!3m2!1sen!2sin!4v1705683654349!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
