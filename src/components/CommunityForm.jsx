import React, { useState } from "react";

const CommunityForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server or displaying a thank-you message.
    console.log("Form submitted:", {
      name,
      email,
      visitDate,
      experience,
      rating,
    });
  };

  return (
    <div className="w-full p-8 bg-white">
      <h2 className="mb-4 font-bold text-2xl sm:text-5xl m-2 p-2 text-orange-500 text-center">
        Share Your Experience of Ram Mandir
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="visitDate"
            className="block text-base font-medium text-gray-600"
          >
            Visit Date
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-base font-medium text-gray-600"
          >
            Share Your Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-base font-medium text-gray-600"
          >
            Rating (Out of 5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white p-4 rounded-md text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommunityForm;
