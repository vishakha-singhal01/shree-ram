// src/Quiz.js
import React, { useState, useEffect } from "react";
import { quizData } from "../constants/quiz";

// Function to shuffle the array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledQuizData, setShuffledQuizData] = useState(
    shuffleArray(quizData)
  );

  useEffect(() => {
    setIsAnswered(false);
  }, [currentQuestion]); // Reset the answer status when moving to the next question

  const handleOptionSelect = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const isCorrect = selectedOption === shuffledQuizData[currentQuestion].answer;

  return (
    <div className="w-full">
      <div className="w-full mx-auto p-8 bg-white">
        {currentQuestion < shuffledQuizData.length ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {shuffledQuizData[currentQuestion].question}
            </h2>
            <ul>
              {shuffledQuizData[currentQuestion].options.map(
                (option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`p-2 cursor-pointer transition duration-300 ${
                      option === selectedOption
                        ? isCorrect
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
            {selectedOption && (
              <div className="mt-4">
                {isCorrect ? (
                  <p className="text-green-500 font-semibold">Correct!</p>
                ) : (
                  <div>
                    <p className="text-red-500 font-semibold">Incorrect!</p>
                    <p className="text-gray-700">
                      {shuffledQuizData[currentQuestion].explanation}
                    </p>
                  </div>
                )}
                <button
                  onClick={handleNextQuestion}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
            {/* You can display the final score or other information here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
