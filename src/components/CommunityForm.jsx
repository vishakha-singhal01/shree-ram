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
      <h2 className="text-2xl font-semibold mb-4">
        Share Your Experience at Ram Mandir
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="visitDate"
            className="block text-sm font-medium text-gray-600"
          >
            Visit Date
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-600"
          >
            Share Your Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-600"
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
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommunityForm;
