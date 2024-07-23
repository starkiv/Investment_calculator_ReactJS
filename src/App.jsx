import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChageInput={handleChange} userInput={userInput} />
      {userInput.duration <= 0 ? (
        <p className="center"> No results </p>
      ) : (
        <ResultTable userInputLog={userInput} />
      )}
    </>
  );
}

export default App;
