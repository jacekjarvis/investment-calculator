import { useState } from "react";

import Results from "./components/Results";
import UserInput from "./components/UserInputFields";

import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_INPUTS);

  function handleUserInputChange(newInput) {
    setUserInputs(() => {
      return newInput;
    });
  }

  let results = calculateInvestmentResults(userInputs);
  return (
    <>
      <UserInput data={userInputs} onChangeInput={handleUserInputChange} />
      <Results resultList={results} />
    </>
  );
}

export default App;
