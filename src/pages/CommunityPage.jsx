// src/App.js
import React from "react";
import Quiz from "../components/Quiz";
import CommunityForm from "../components/CommunityForm";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CommunityForm />
      <Quiz />
    </div>
  );
};

export default App;
